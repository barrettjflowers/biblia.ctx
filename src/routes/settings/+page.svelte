<script lang="ts">
	import '../../app.css';
	import { settings } from '$lib/settings';
	import { insights } from '$lib/dataset/insight';
	import { insight as examples } from '$lib/dataset/example';

	let yearsContext = $settings.yearsContext;
	let dataset = $settings.dataset;

	const datasetOptions = [
		{ value: 'insight', label: `Insight Book (${insights.length} entries)` },
		{ value: 'example', label: `Examples (${examples.length} entries)` }
	];

	function saveSettings() {
		settings.set({ yearsContext, dataset });
	}
</script>

<div class="header">
	<span class="title-inner">
		<h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">
			Settings
		</h1>
	</span>
	<hr
		style="margin-top: 0rem; margin-bottom: 1rem; border: none; border-top: 1px solid var(--text-color);"
	/>
	<p style="margin: 0.03rem 0;padding-bottom: 1rem; text-align: center;">Configure search engine behavior.</p>
	<a href="/" class="settings-btn" aria-label="Open settings">
		<button class="btn" aria-label="Open settings">
		<svg width="25" height="25" viewBox="0 0 24 18" fill="black">
  <path d="M12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 19.5v-9L12 3z"/>
</svg>
		</button>
	</a>
</div>

<main>
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
			<button>Import Dataset</button>
		</div>
		<div>
			<select name="view-type" id="view-type">
				<option value="list"> List </option>
				<option value="graph"> Graph </option>
			</select>
		</div>
		<div>
			<label for="years-context">Context Window: </label>
			<select id="years-context" bind:value={yearsContext}>
				<option value={10}>10 years</option>
				<option value={50}>50 years</option>
				<option value={100}>100 years</option>
				<option value={200}>200 years</option>
				<option value={500}>500 years</option>
				<option value={1000}>1000 years</option>
			</select>
		</div>

		<div>
			<button onclick={saveSettings}> Save </button>
		</div>
		<div>
			<button>Import Config </button>
		</div>
		<div>
			<button>Export Config </button>
		</div>
	</div>
</main>

<div class="footer"></div>
