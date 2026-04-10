<script lang="ts">
	import type { Cononical } from '$lib/types';
	import { parseYear } from '$lib/dateUtils';

	export let results: Cononical[] = [];
	export let target: Cononical | null = null;

	$: targetYear = target ? parseYear(target.date) : null;

	interface DatedItem {
		item: Cononical;
		year: number;
		index: number;
		gap: number;
	}

	$: datedItems = results
		.map((item, index) => ({
			item,
			year: parseYear(item.date) ?? NaN,
			index,
			gap: targetYear !== null ? (parseYear(item.date) ?? NaN) - targetYear : 0
		}))
		.filter((d): d is DatedItem => !isNaN(d.year))
		.sort((a, b) => a.year - b.year);

	$: minYear = datedItems.length > 0 ? Math.min(...datedItems.map((d) => d.year)) : 0;
	$: maxYear = datedItems.length > 0 ? Math.max(...datedItems.map((d) => d.year)) : 100;
	$: yearRange = maxYear - minYear || 1;

	function getPosition(year: number): number {
		const padding = 10;
		return padding + ((year - minYear) / yearRange) * (100 - padding * 2);
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

	function isTarget(item: Cononical): boolean {
		return target !== null && item.id === target.id;
	}
</script>

{#if datedItems.length > 0}
	<div class="graph-container">
		<div class="timeline">
			{#each datedItems as { item, year, index, gap }}
				{@const side = getSide(index)}
				{@const isTargetNode = isTarget(item)}
				<div class="node {side}" class:target={isTargetNode} style="left: {getPosition(year)}%;">
					<div class="connector"></div>
					<div class="node-content">
						<strong>{item.title}</strong>
						<small>{item.description}</small>
						{#if gap !== 0}
							<small class="gap">{gap > 0 ? '+' : ''}{gap}yr</small>
						{/if}
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
		padding: 2rem 3rem;
		overflow-x: auto;
	}

	.timeline {
		position: relative;
		height: 280px;
		min-width: calc(100% - 4rem);
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

	.node.target {
		border: 2px solid var(--text-color);
		padding: 0.5rem;
		background: var(--bg-color);
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

	.node-content small.gap {
		color: #8b4513;
		font-weight: bold;
		display: block;
		margin-top: 0.25rem;
	}

	.node.target .node-content small.gap {
		display: none;
	}

	.node-year {
		font-size: 0.75rem;
		font-family: menlo, monospace;
	}
</style>
