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
	<p style="margin: 0.03rem 0; text-align: center;">Configure search engine behavior.</p>
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
