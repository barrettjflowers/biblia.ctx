import { writable, derived, get } from 'svelte/store';
import type { Cononical } from './types';
import { insights } from '../lib/dataset/insight';
import { insight as examples } from '../lib/dataset/example';
import { settings } from './settings';
import { parseYear, isWithinRange } from './dateUtils';

export const query = writable('');
export const targetResult = writable<Cononical | null>(null);

function normalize(str: string) {
	return str.toLowerCase().trim();
}

function levenshtein(a: string, b: string) {
	const matrix = Array.from({ length: b.length + 1 }, () => new Array(a.length + 1).fill(0));

	for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
	for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

	for (let j = 1; j <= b.length; j++) {
		for (let i = 1; i <= a.length; i++) {
			if (a[i - 1] === b[j - 1]) {
				matrix[j][i] = matrix[j - 1][i - 1];
			} else {
				matrix[j][i] = Math.min(
					matrix[j - 1][i - 1] + 1,
					matrix[j][i - 1] + 1,
					matrix[j - 1][i] + 1
				);
			}
		}
	}

	return matrix[b.length][a.length];
}

function fuzzyScore(text: string, q: string) {
	text = normalize(text);
	q = normalize(q);

	if (text.includes(q)) return 0;
	return levenshtein(text, q);
}

export const results = derived([query, settings], ([$query, $settings]) => {
	if (!$query.trim()) {
		return [];
	}

	const { yearsContext, dataset } = $settings;
	const data = dataset === 'example' ? examples : insights;

	const scored = data.map((item) => ({
		item,
		score: Math.min(
			fuzzyScore(item.title, $query),
			fuzzyScore(item.description, $query),
			item.tags ? fuzzyScore(item.tags.join(' '), $query) : Infinity
		)
	}));

	const topResult = scored.reduce(
		(best, curr) => (curr.score < best.score ? curr : best),
		scored[0]
	);

	if (!topResult || topResult.score > Math.max(2, $query.length / 3)) {
		targetResult.set(null);
		return [];
	}

	targetResult.set(topResult.item);
	const referenceYear = parseYear(topResult.item.date);

	if (referenceYear === null) {
		targetResult.set(null);
		return [];
	}

	const filteredByDate = scored
		.filter((r) => isWithinRange(parseYear(r.item.date), referenceYear, yearsContext))
		.sort((a, b) => a.score - b.score);

	return filteredByDate.map((r) => r.item);
});
