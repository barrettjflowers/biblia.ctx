import { readFileSync, writeFileSync } from 'fs';

const INSIGHT_FILE = 'src/lib/dataset/insight.ts';
const REMOVED_FILE = 'src/lib/dataset/REMOVED.md';
const CHECKPOINT_FILE = 'scripts/.scrape-checkpoint.json';
const DELAY_MS = 800;
const BATCH_SIZE = 50;

interface ProcessedEntry {
	id: string;
	title: string;
	source?: string;
	date?: string;
	removed: boolean;
	reason?: string;
}

function toTitleSlug(id: string): string {
	return id
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join('-');
}

function buildUrl(id: string): string {
	return `https://www.jw.org/en/library/books/Insight-on-the-Scriptures/${toTitleSlug(id)}/`;
}

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(
	url: string,
	timeoutMs = 12000
): Promise<Response | null> {
	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), timeoutMs);
		const response = await fetch(url, { signal: controller.signal });
		clearTimeout(timeout);
		return response;
	} catch {
		return null;
	}
}

function extractDates(text: string): string | null {
	type DateMatch = { year: number; era: 'bce' | 'ce'; index: number };
	const dates: DateMatch[] = [];

	let match: RegExpExecArray | null;
	const bceRe = /(\d{3,4})\s*B\.C\.E\./g;
	const ceRe = /(\d{1,3})\s*C\.E\./g;

	while ((match = bceRe.exec(text)) !== null) {
		dates.push({ year: parseInt(match[1]), era: 'bce', index: match.index });
	}
	while ((match = ceRe.exec(text)) !== null) {
		dates.push({ year: parseInt(match[1]), era: 'ce', index: match.index });
	}

	if (dates.length === 0) return null;

	dates.sort((a, b) => a.index - b.index);

	const first = dates[0];
	const last = dates[dates.length - 1];

	function isCirca(text: string, idx: number): boolean {
		const before = text.substring(Math.max(0, idx - 60), idx);
		return /\b(about|approximately|some|around)\b/i.test(before);
	}

	const firstCirca = isCirca(text, first.index);
	const lastCirca = isCirca(text, last.index);

	function fmt(d: DateMatch, circa: boolean): string {
		const p = circa ? 'c.' : '';
		const s = d.era === 'bce' ? 'bce' : 'ce';
		return `${p}${d.year}${s}`;
	}

	const firstStr = fmt(first, firstCirca);

	if (dates.length >= 2 && (first.year !== last.year || first.era !== last.era)) {
		const lastStr = fmt(last, lastCirca);
		return `${firstStr}-${lastStr}`;
	}

	return firstStr;
}

function getArticleText(html: string): string {
	const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
	if (!articleMatch) return '';

	let text = articleMatch[1];
	text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
	text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
	text = text.replace(/<[^>]*>/g, ' ');
	text = text
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');
	text = text.replace(/\s+/g, ' ').trim();

	return text;
}

function splitEntries(content: string): string[] {
	const arrayStart = content.indexOf('[');
	const arrayEnd = content.lastIndexOf('];');
	if (arrayStart === -1 || arrayEnd === -1) return [];
	const body = content.substring(arrayStart + 1, arrayEnd);
	return body.split(/\n\t\{/);
}

function joinEntries(entries: string[], content: string): string {
	const arrayStart = content.indexOf('[');
	const arrayEnd = content.lastIndexOf('];');
	const before = content.substring(0, arrayStart + 1);
	const after = content.substring(arrayEnd);
	return before + entries.join('\n\t{') + after;
}

function getEntryId(entryBlock: string): string | null {
	const m = entryBlock.match(/id:\s*'([^']+)'/);
	return m ? m[1] : null;
}

function updateEntryField(
	entryBlock: string,
	field: string,
	newValue: string
): string {
	const re = new RegExp(`(${field}:\\s*)'[^']*'`);
	return entryBlock.replace(re, `$1'${newValue.replace(/'/g, "\\'")}'`);
}

async function processEntry(
	entry: ProcessedEntry
): Promise<ProcessedEntry> {
	const constructedUrl = buildUrl(entry.id);
	let html: string | null = null;
	let usedUrl = constructedUrl;

	// Try constructed URL first
	const resp = await fetchWithTimeout(constructedUrl);
	if (resp && resp.ok) {
		html = await resp.text();
	} else if (entry.source) {
		// Fall back to existing source URL
		const fallbackResp = await fetchWithTimeout(entry.source);
		if (fallbackResp && fallbackResp.ok) {
			html = await fallbackResp.text();
			usedUrl = entry.source;
		}
	}

	if (!html) {
		return { ...entry, removed: true, reason: '404 — page not found' };
	}

	const text = getArticleText(html);
	const dateString = extractDates(text);

	if (!dateString) {
		return { ...entry, removed: true, reason: 'no dates found on page' };
	}

	const result: ProcessedEntry = {
		...entry,
		source: usedUrl,
		date: dateString,
		removed: false,
	};

	return result;
}

async function main() {
	console.log('Reading insight.ts...');
	const content = readFileSync(INSIGHT_FILE, 'utf-8');
	const entryBlocks = splitEntries(content);

	console.log(`Found ${entryBlocks.length} entries.`);

	// Load checkpoint if exists
	let processed = new Set<string>();
	try {
		const ck = JSON.parse(readFileSync(CHECKPOINT_FILE, 'utf-8'));
		if (Array.isArray(ck)) ck.forEach((id: string) => processed.add(id));
		console.log(`Resuming from checkpoint: ${processed.size} already done.`);
	} catch {
		console.log('No checkpoint found. Starting fresh.');
	}

	const removed: ProcessedEntry[] = [];
	let updated = 0;
	let skipped = 0;
	let removedCount = 0;

	for (let i = 0; i < entryBlocks.length; i++) {
		const block = entryBlocks[i];
		const id = getEntryId(block);
		if (!id) {
			skipped++;
			continue;
		}

		if (processed.has(id)) {
			skipped++;
			continue;
		}

		const titleMatch = block.match(/title:\s*'([^']+)'/);
		const title = titleMatch ? titleMatch[1] : id;
		const sourceMatch = block.match(/source:\s*'([^']*)'/);
		const source = sourceMatch ? sourceMatch[1] : '';
		const dateMatch = block.match(/date:\s*'([^']*)'/);
		const currentDate = dateMatch ? dateMatch[1] : '';

		const entry: ProcessedEntry = {
			id,
			title,
			source: source || undefined,
			removed: false,
		};

		// Skip if already has a full date range and source is set
		const hasFullRange = currentDate.includes('-') && currentDate.length > 0;
		const hasSource = source.length > 0;
		if (hasFullRange && hasSource) {
			processed.add(id);
			skipped++;
			continue;
		}

		await sleep(DELAY_MS);

		const result = await processEntry(entry);

		if (result.removed) {
			removed.push(result);
			entryBlocks[i] = '';
			removedCount++;
			console.log(
				`[${i + 1}/${entryBlocks.length}] REMOVED: ${id} — ${result.reason}`
			);
		} else {
			// Update in-place
			let updatedBlock = block;
			if (result.source) {
				updatedBlock = updateEntryField(updatedBlock, 'source', result.source);
			}
			if (result.date) {
				updatedBlock = updateEntryField(updatedBlock, 'date', result.date);
			}
			entryBlocks[i] = updatedBlock;
			updated++;
			console.log(
				`[${i + 1}/${entryBlocks.length}] ${id} → date: ${result.date} source: ${result.source}`
			);
		}

		processed.add(id);

		// Checkpoint every BATCH_SIZE
		if (processed.size % BATCH_SIZE === 0) {
			writeFileSync(CHECKPOINT_FILE, JSON.stringify([...processed]));
			console.log(`Checkpoint: ${processed.size} entries done.`);
		}
	}

	// Write updated insight.ts
	const filteredBlocks = entryBlocks.filter((b) => b !== '');
	const newContent = joinEntries(filteredBlocks, content);
	writeFileSync(INSIGHT_FILE, newContent);
	console.log(`\nWritten ${INSIGHT_FILE}`);

	// Write REMOVED.md
	const removedMd = [
		'# Removed Entries',
		'',
		`Entries removed from the insight dataset because their JW.org page had no dateable information (concept/place entries).`,
		'',
		'| ID | Title | Reason |',
		'|---|---|---|',
		...removed.map(
			(r) => `| ${r.id} | ${r.title} | ${r.reason || ''} |`
		),
		'',
	].join('\n');

	writeFileSync(REMOVED_FILE, removedMd);
	console.log(`Written ${REMOVED_FILE}`);

	// Clean up checkpoint
	try {
		writeFileSync(CHECKPOINT_FILE, JSON.stringify([...processed]));
	} catch {}

	console.log('\n--- Summary ---');
	console.log(`Updated: ${updated}`);
	console.log(`Removed: ${removedCount}`);
	console.log(`Skipped (already done): ${skipped}`);
	console.log(`Final entries: ${filteredBlocks.length}`);
}

main().catch(console.error);
