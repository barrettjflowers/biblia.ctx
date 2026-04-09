<script lang="ts">
	import type { Cononical } from '$lib/types';
	import { parseYear } from '$lib/dateUtils';

	export let results: Cononical[] = [];

	interface DatedItem {
		item: Cononical;
		year: number;
		index: number;
	}

	$: datedItems = results
		.map((item, index) => ({
			item,
			year: parseYear(item.date) ?? NaN,
			index
		}))
		.filter((d): d is DatedItem => !isNaN(d.year))
		.sort((a, b) => a.year - b.year);

	$: minYear = datedItems.length > 0 ? Math.min(...datedItems.map((d) => d.year)) : 0;
	$: maxYear = datedItems.length > 0 ? Math.max(...datedItems.map((d) => d.year)) : 100;
	$: yearRange = maxYear - minYear || 1;

	function getPosition(year: number): number {
		return ((year - minYear) / yearRange) * 100;
	}

	function formatYear(year: number): string {
		if (year < 0) {
			return `${Math.abs(year)}bce`;
		}
		return `${year}ce`;
	}

	function getSide(index: number): 'top' | 'bottom' {
		return index % 2 === 0 ? 'top' : 'bottom';
	}
</script>

{#if datedItems.length > 0}
	<div class="graph-container">
		<div class="timeline">
			{#each datedItems as { item, year, index }}
				{@const side = getSide(index)}
				<div class="node {side}" style="left: {getPosition(year)}%;">
					<div class="node-content">
						<strong>{item.title}</strong>
						<small>{item.description}</small>
					</div>
					<div class="node-marker">*</div>
					<div class="node-year">{formatYear(year)}</div>
				</div>
			{/each}
			<div class="axis"></div>
		</div>
	</div>
{:else}
	<p>No results with valid dates to display</p>
{/if}

<style>
	.graph-container {
		padding: 2rem 1rem;
		overflow-x: auto;
	}

	.timeline {
		position: relative;
		height: 280px;
		min-width: 100%;
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
	}

	.node.top {
		margin-top: -120px;
	}

	.node.bottom {
		margin-top: 10px;
	}

	.node-marker {
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1;
	}

	.node.top .node-marker {
		order: 3;
		margin-top: 0.5rem;
	}

	.node.bottom .node-marker {
		order: 1;
		margin-bottom: 0.5rem;
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
		order: 2;
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

	.node-year {
		font-size: 0.75rem;
		font-family: menlo, monospace;
	}

	.node.top .node-year {
		order: 2;
		margin-top: 0.25rem;
	}

	.node.bottom .node-year {
		order: 3;
		margin-top: 0.25rem;
	}
</style>
