<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import type { Cononical } from '$lib/types';
	import { parseDateRange } from '$lib/dateUtils';

	let { results = [], target = null }: { results: Cononical[]; target: Cononical | null } = $props();

	let focusedIndex = $state(0);
	let graphContainer: HTMLDivElement = $state(null!);
	let zoomLevel = $state(1.0);

	const ZOOM_STEP = 0.25;
	const MIN_ZOOM = 0.25;
	const MAX_ZOOM = 3.0;

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
	let timelineWidth = $derived(Math.max(datedItems.length * 220 * zoomLevel, containerW));

	$effect(() => {
		if (datedItems.length > 0 && target) {
			const idx = datedItems.findIndex((d) => d.item.id === target.id);
			if (idx >= 0) focusedIndex = idx;
			zoomLevel = 1.0;
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

	function zoomIn() {
		const oldWidth = timelineWidth;
		const centerFraction = (graphContainer.scrollLeft + graphContainer.offsetWidth / 2) / oldWidth;
		zoomLevel = Math.min(zoomLevel + ZOOM_STEP, MAX_ZOOM);
		tick().then(() => {
			graphContainer.scrollLeft = centerFraction * timelineWidth - graphContainer.offsetWidth / 2;
		});
	}

	function zoomOut() {
		const oldWidth = timelineWidth;
		const centerFraction = (graphContainer.scrollLeft + graphContainer.offsetWidth / 2) / oldWidth;
		zoomLevel = Math.max(zoomLevel - ZOOM_STEP, MIN_ZOOM);
		tick().then(() => {
			graphContainer.scrollLeft = centerFraction * timelineWidth - graphContainer.offsetWidth / 2;
		});
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
				const el = graphContainer.querySelector('.node.target') as HTMLElement | null;
				if (el) {
					graphContainer.scrollTo({
						left: el.offsetLeft - graphContainer.offsetWidth / 2 + el.offsetWidth / 2,
						behavior: 'smooth'
					});
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
					onclick={() => goTo(sortIdx)}
					onkeydown={(e) => { if (e.key === 'Enter') goTo(sortIdx); }}
				>
					<div class="connector"></div>
					<div class="node-content">
						<strong>{item.title}</strong>
						<small class="gap" class:negative={gap < 0} class:invisible={gap === 0}>{gap > 0 ? '+' : ''}{gap}yr</small>
					</div>
					<div class="node-year">{formatYear(year)}</div>
				</div>
			{/each}
			<div class="axis"></div>
		</div>
	</div>
	<div class="zoom-controls">
		<button onclick={zoomOut} aria-label="Zoom out" disabled={zoomLevel <= MIN_ZOOM}>−</button>
		<span class="zoom-level">{Math.round(zoomLevel * 100)}%</span>
		<button onclick={zoomIn} aria-label="Zoom in" disabled={zoomLevel >= MAX_ZOOM}>+</button>
	</div>
	{#if datedItems[focusedIndex]}
		{@const focused = datedItems[focusedIndex]}
		{@const gapText = target && focused.item.id !== target.id
			? focused.gap > 0
				? `${focused.gap} year(s) after ${target.title}`
				: `${-focused.gap} year(s) before ${target.title}`
			: ''}
		<div class="detail" onclick={() => focused.item.source && window.open(focused.item.source, '_blank')} role="button" tabindex="0" onkeydown={(e) => { if (e.key === 'Enter') focused.item.source && window.open(focused.item.source, '_blank'); }}>
			<strong>{focused.item.title}</strong>
			<small class="detail-date">{fmtDate(focused)}</small>
			{#if gapText}
				<small class="detail-gap">{gapText}</small>
			{/if}
			<p>{focused.item.description}</p>
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

	.zoom-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.5rem 0;
	}

	.zoom-controls button {
		background: var(--input-bg);
		color: var(--text-color);
		border: 1px solid var(--text-color);
		font-family: menlo, monospace;
		font-size: 1rem;
		width: 1.75rem;
		height: 1.75rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}

	.zoom-controls button:disabled {
		opacity: 0.3;
		cursor: default;
	}

	.zoom-level {
		font-family: menlo, monospace;
		font-size: 0.75rem;
		min-width: 3rem;
		text-align: center;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 150px;
		cursor: pointer;
		outline: none;
		-webkit-tap-highlight-color: transparent;
		background: var(--bg-color);
	}

	.node.top {
		bottom: calc(50% + 20px);
		transform: translateX(-50%);
	}

	.node.bottom {
		top: calc(50% + 20px);
		transform: translateX(-50%);
	}

	.node.target {
	  padding: 5px 0;
		outline: 2px solid var(--text-color);
		background: var(--input-bg);
		z-index: 10;
	}

	.node.target .node-content {
		padding: 0.25rem 0.75rem;
	}

	.connector {
		width: 2px;
		height: 20px;
		background: var(--text-color);
	}

	.node-content {
		text-align: center;
		width: 100%;
	}

	.node.top .node-content {
		order: 1;
		margin-bottom: 0.25rem;
	}

	.node.top .node-year {
		order: 2;
		margin-bottom: 0.25rem;
	}

	.node.top .connector {
		order: 3;
	}

	.node.bottom .connector {
		order: 1;
	}

	.node.bottom .node-year {
		order: 2;
		margin-top: 0.25rem;
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

	.node-content small.gap.invisible {
		visibility: hidden;
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
		cursor: pointer;
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
		margin-bottom: 0.1rem;
	}

	.detail .detail-gap {
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
