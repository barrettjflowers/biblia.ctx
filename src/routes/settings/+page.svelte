<script lang="ts">
import '../../app.css';
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
	<select name="search-type" id="search-type">
		<option value="insight">Insight Book</option>
		<option value="apocryphal">Apocryphal</option>
		<select> </select></select> 
		</div>
		<div>
	<button>Import Dataset: (Json) </button>
	</div>
	<div>
	<select name="view-type" id="view-type">
	<option value="graph"> Graph </option>
	<option value="list"> List </option>
	</div>
<div>
  Context Modifier: <input type="range" id="modifier" name="ctx" min="0" max="10" />
</div>

	<div>
	<button> Save </button>
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
