<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import type { Cononical } from '$lib/types';
	import { parseDateRange } from '$lib/dateUtils';

	let { results = [], target = null }: { results: Cononical[]; target: Cononical | null } = $props();

	let focusedIndex = $state(0);
	let graphContainer: HTMLDivElement = $state(null!);

	interface DatedItem {
		item: Cononical;
		year: number;
		index: number;
		gap: number;
		isRange: boolean;
		startYear: number;
		endYear?: number;
	}

	let targetYear = $derived(target ? parseDateRange(target.date)?.start ?? null : null);

	let datedItems: DatedItem[] = $derived(
		results
			.map((item, index) => {
				const range = parseDateRange(item.date);
				if (!range) return null;
				return {
					item,
					year: range.start,
					startYear: range.start,
					endYear: range.end,
					isRange: range.end !== undefined,
					index,
					gap: targetYear !== null ? range.start - targetYear : 0
				} as DatedItem;
			})
			.filter((d): d is NonNullable<typeof d> => d !== null)
			.sort((a, b) => a.year - b.year)
	);

	let minYear = $derived(datedItems.length > 0 ? Math.min(...datedItems.map((d) => d.year)) : 0);
	let maxYear = $derived(datedItems.length > 0 ? Math.max(...datedItems.map((d) => d.year)) : 100);
	let yearRange = $derived(maxYear - minYear || 1);
	let containerW = $derived(graphContainer?.offsetWidth ?? 800);
	let timelineWidth = $derived(Math.max(datedItems.length * 220, containerW));

	$effect(() => {
		if (datedItems.length > 0 && target) {
			const idx = datedItems.findIndex((d) => d.item.id === target.id);
			if (idx >= 0) focusedIndex = idx;
		}
	});

	function getPosition(year: number): number {
		const padding = 10;
		return padding + ((year - minYear) / yearRange) * (100 - padding * 2);
	}

	function formatYear(year: number): string {
		if (year < 0) return `${Math.abs(year)}bce`;
		return `${year}ce`;
	}

	function fmtDate(item: DatedItem): string {
		if (item.isRange) return `${formatYear(item.startYear)}–${formatYear(item.endYear!)}`;
		return formatYear(item.year);
	}

	function getSide(index: number): 'top' | 'bottom' {
		return index % 2 === 0 ? 'top' : 'bottom';
	}

	function goLeft() {
		if (focusedIndex > 0) focusedIndex--;
	}

	function goRight() {
		if (focusedIndex < datedItems.length - 1) focusedIndex++;
	}

	function goTo(idx: number) {
		focusedIndex = idx;
	}

	function onDocumentKeydown(e: KeyboardEvent) {
		const active = document.activeElement;
		const isInput = active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement;

		if (e.key === 'Enter' && isInput) {
			e.preventDefault();
			graphContainer?.focus();
			return;
		}

		if (isInput) return;

		if (e.key === 'ArrowLeft') { goLeft(); e.preventDefault(); }
		else if (e.key === 'ArrowRight') { goRight(); e.preventDefault(); }
	}

	onMount(() => {
		document.addEventListener('keydown', onDocumentKeydown);
	});

	onDestroy(() => {
		document.removeEventListener('keydown', onDocumentKeydown);
	});

	$effect(() => {
		if (graphContainer) {
			focusedIndex;
			tick().then(() => {
				const el = graphContainer.querySelector('.node.target');
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
				}
			});
		}
	});
</script>

{#if datedItems.length > 0}
	<div class="graph-container" bind:this={graphContainer} tabindex="-1">
		<div class="timeline" style="width: {timelineWidth}px;">
			{#each datedItems as { item, year, index, gap, isRange, endYear }, sortIdx (item.id)}
				{@const side = getSide(sortIdx)}
				<div
					class="node {side}"
					class:target={datedItems[focusedIndex]?.item.id === item.id}
					style="left: {getPosition(year)}%;"
					role="button"
					tabindex="-1"
					onclick={() => goTo(index)}
					onkeydown={(e) => { if (e.key === 'Enter') goTo(index); }}
				>
					<div class="connector"></div>
					<div class="node-content">
						<strong>{item.title}</strong>
						{#if gap !== 0}
							<small class="gap" class:negative={gap < 0}>{gap > 0 ? '+' : ''}{gap}yr</small>
						{/if}
					</div>
					<div class="node-year">{formatYear(year)}</div>
				</div>
			{/each}
			<div class="axis"></div>
		</div>
	</div>
	{#if datedItems[focusedIndex]}
		<div class="detail">
			<strong>{datedItems[focusedIndex].item.title}</strong>
			<small class="detail-date">{fmtDate(datedItems[focusedIndex])}</small>
			<p>{datedItems[focusedIndex].item.description}</p>
		</div>
	{/if}
{:else}
	<p>No results with valid dates to display</p>
{/if}

<style>
	.graph-container {
		padding: 2rem 3rem;
		overflow-x: auto;
		scrollbar-width: none;
		outline: none;
	}

	.graph-container::-webkit-scrollbar {
		display: none;
	}

	.timeline {
		position: relative;
		height: 280px;
		margin-top: 3rem;
	}

	.axis {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--text-color);
		transform: translateY(-50%);
	}

	.node {
		position: absolute;
		top: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 150px;
		cursor: pointer;
	}

	.node.top {
		margin-top: -120px;
	}

	.node.bottom {
		margin-top: 10px;
	}

	.node.target {
		border: 2px solid var(--text-color);
		padding: 0.5rem;
		background: var(--input-bg);
		z-index: 1;
	}

	.connector {
		width: 2px;
		height: 20px;
		background: var(--text-color);
	}

	.node.top .connector {
		order: 2;
	}

	.node.top .node-year {
		order: 3;
	}

	.node.top .node-content {
		order: 1;
	}

	.node.bottom .connector {
		order: 2;
	}

	.node.bottom .node-year {
		order: 1;
	}

	.node.bottom .node-content {
		order: 3;
	}

	.node-content {
		text-align: center;
		width: 100%;
	}

	.node.top .node-content {
		order: 1;
		margin-bottom: 0.25rem;
	}

	.node.bottom .node-content {
		order: 3;
		margin-top: 0.25rem;
	}

	.node-content strong {
		display: block;
		font-size: 0.875rem;
	}

	.node-content small {
		display: block;
		font-size: 0.7rem;
		opacity: 0.8;
		white-space: normal;
		max-width: 140px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.node-content small.gap {
		color: #d9b16c;
		font-weight: bold;
		display: block;
		margin-top: 0.25rem;
	}

	.node-content small.gap.negative {
		color: #8b4513;
	}

	.node-year {
		font-size: 0.75rem;
		font-family: menlo, monospace;
	}

	.detail {
		margin-top: 2rem;
		padding: 1rem;
		border: 2px solid var(--text-color);
		background: var(--bg-color);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.detail strong {
		display: block;
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	.detail .detail-date {
		display: block;
		font-family: menlo, monospace;
		font-size: 0.75rem;
		opacity: 0.7;
		margin-bottom: 0.5rem;
	}

	.detail p {
		margin: 0;
		font-size: 0.85rem;
		line-height: 1.5;
		opacity: 0.9;
	}
</style>
