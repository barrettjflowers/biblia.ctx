<script lang="ts">
	import '../../app.css';
	import { base } from '$app/paths';
	import { settings } from '$lib/settings';
	import { insights, composite } from '$lib/dataset/composite';

	let yearsContext = $settings.yearsContext;
	let dataset = $settings.dataset;
	let viewType = $settings.viewType;
	let saved = $state(false);

	const datasetOptions = [
		{ value: 'insight', label: `Insight Book (${insights.length} entries)` },
		{ value: 'composite', label: `Composite (${composite.length} entries)` }
	];

	function saveSettings() {
		settings.set({ yearsContext, dataset, viewType });
		saved = true;
		setTimeout(() => saved = false, 3000);
	}
</script>

<div class="header">
	<span class="title-inner">
		<h1 class="title" style="text-align: center;">
			Settings
		</h1>
	</span>
	<hr
		style="margin-top: 0rem; margin-bottom: 1rem; margin-left: 1rem; margin-right: 1rem; border: none; border-top: 1px solid var(--text-color);"
	/>
	<p style="margin: 0.03rem 0;padding-bottom: 1rem; text-align: center;">
		Configure search engine behavior.
	</p>
	<a href={base || '/'} class="settings-btn" aria-label="Open settings">
		<button class="btn" aria-label="Open settings">
			<svg width="25" height="25" viewBox="0 0 24 18" fill="black">
				<path
					d="M12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 19.5v-9L12 3z"
				/>
			</svg>
		</button>
	</a>
</div>

<main>
	<div class="settings-wrap">
		{#if saved}
			<p class="saved-msg">Changes Saved</p>
		{/if}
		<div class="settings">
		<div>
			Dataset:
			<select name="search-type" id="search-type" bind:value={dataset}>
				{#each datasetOptions as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="view-type">View Type: </label>
			<select name="view-type" id="view-type" bind:value={viewType}>
				<option value="list"> List </option>
				<option value="ortholinear"> Contextual Timeline </option>
			</select>
		</div>
		<div>
			<label for="years-context">Context Window: </label>
			<select id="years-context" bind:value={yearsContext}>
				<option value={100}>100 years</option>
				<option value={200}>200 years</option>
				<option value={500}>500 years</option>
				<option value={1000}>1000 years</option>
				<option value={9000}>All time</option>
			</select>
		</div>

		<div>
			<div class="save-row">
				<button onclick={saveSettings}> Save </button>
			</div>
		</div>
	</div>
	</div>
</main>

<div class="footer"></div>

<style>
	.settings-wrap {
		position: relative;
		top: 0;
		left: 0;
		transform: none;
		max-width: 300px;
		margin: 3rem auto 0;
	}

	.save-row {
		display: flex;
		justify-content: center;
	}

	.settings {
		box-shadow: 0 0 0 4px var(--input-bg), 0 0 0 6px var(--text-color), 10px 10px 0 0 #000;
	}

	.settings > div {
		margin-bottom: 0.2rem;
	}

	.settings > div:last-child {
		margin-top: 1.25rem;
		margin-bottom: 0;
	}

	.saved-msg {
		position: fixed;
		top: 9rem;
		right: 1rem;
		border: none;
		margin: 1;
		color: var(--accent-color);
		font-weight: bold;
		background-color: var(--input-bg);
		padding: 0.5rem 1rem;
	}
</style>
