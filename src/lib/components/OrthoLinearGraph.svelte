<script lang="ts">
	import type { Cononical } from '$lib/types';
	import { parseYear } from '$lib/dateUtils';

	export let results: Cononical[] = [];

	interface DatedItem {
		item: Cononical;
		year: number;
	}

	$: datedItems = results
		.map((item) => ({
			item,
			year: parseYear(item.date) ?? NaN
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
</script>

{#if datedItems.length > 0}
	<div class="graph-container">
		<div class="timeline">
			{#each datedItems as { item, year }}
				<div class="node" style="left: {getPosition(year)}%;">
					<div class="node-marker"></div>
					<div class="node-content">
						<strong>{item.title}</strong>
						<small>{item.description}</small>
					</div>
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
		height: 200px;
		min-width: 100%;
		margin-top: 2rem;
	}

	.axis {
		position: absolute;
		bottom: 30px;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--text-color);
	}

	.node {
		position: absolute;
		bottom: 30px;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 150px;
	}

	.node-marker {
		width: 12px;
		height: 12px;
		background: var(--text-color);
		border-radius: 50%;
		margin-bottom: 0.5rem;
	}

	.node-content {
		position: absolute;
		bottom: 20px;
		text-align: center;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.node-content strong {
		display: block;
		font-size: 0.875rem;
	}

	.node-content small {
		display: block;
		font-size: 0.7rem;
		opacity: 0.8;
	}

	.node-year {
		position: absolute;
		bottom: -25px;
		font-size: 0.75rem;
		font-family: menlo, monospace;
	}
</style>
