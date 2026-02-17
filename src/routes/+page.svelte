<div class="header">
	<span class="title-inner">
		<h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">
			Biblia<span class="accent">.ctx</span>
		</h1>
		<svg
			class="logo"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 18.291 14.3262"
		>
			<g>
				<rect height="14.3262" opacity="0" width="18.291" x="0" y="0" />
				<path
					d="M4.33594 0C2.62695 0 0.878906 0.810547 0.0878906 2.1875C0 2.34375 0 2.45117 0 2.76367L0 13.6719C0 14.0625 0.253906 14.3066 0.683594 14.3066C0.878906 14.3066 1.07422 14.248 1.24023 14.1016C2.20703 13.291 3.45703 12.8613 4.69727 12.8613C5.83008 12.8613 6.94336 13.2227 7.79297 13.9551C7.88086 14.0332 7.98828 14.0723 8.07617 14.0723C8.25195 14.0723 8.39844 13.9355 8.39844 13.7305L8.39844 2.25586C8.39844 2.04102 8.38867 2.01172 8.22266 1.77734C7.50977 0.683594 6.00586 0 4.33594 0ZM13.5938 0C11.9238 0 10.4199 0.683594 9.70703 1.77734C9.54102 2.01172 9.53125 2.04102 9.53125 2.25586L9.53125 13.7305C9.53125 13.9355 9.67773 14.0723 9.85352 14.0723C9.94141 14.0723 10.0488 14.0332 10.1367 13.9551C10.9863 13.2227 12.0996 12.8613 13.2227 12.8613C14.4727 12.8613 15.7227 13.291 16.6895 14.1016C16.8555 14.248 17.0508 14.3066 17.2461 14.3066C17.6758 14.3066 17.9297 14.0625 17.9297 13.6719L17.9297 2.76367C17.9297 2.45117 17.9297 2.34375 17.8418 2.1875C17.0508 0.810547 15.3027 0 13.5938 0Z"
					fill="white"
					fill-opacity="0.85"
				/>
			</g>
		</svg>
	</span>
	<hr
		style="margin-top: 0rem; margin-bottom: 1rem; border: none; border-top: 1px solid var(--text-color);"
	/>
	<p style="margin: 0.03rem 0; text-align: center;">Quick historical context for anthropology.</p>
	<select name="search-type" id="search-type">
		<option value="insight">Insight Book</option>
		<option value="apocryphal">Apocryphal</option>
		<select> </select></select
	>
</div>

<main>
</main>

<div class="footer"></div>

<script lang="ts">
import '../app.css';
  import { insight } from "../lib/dict";


  let query = "";
  let results = Array.isArray(insight) ? insight : [];

  function normalize(str: string) {
    return str.toLowerCase().trim();
  }

  function levenshtein(a: string, b: string) {
    const matrix = Array.from({ length: b.length + 1 }, () =>
      new Array(a.length + 1).fill(0)
    );

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

    if (text.includes(q)) return 0; // best match
    return levenshtein(text, q);
  }

$: {
  if (!query.trim()) {
    results = [];
  } else {
    results = insight
      .map(item => ({
        item,
        score: Math.min(
          fuzzyScore(item.title, query),
          fuzzyScore(item.description, query),
          fuzzyScore(item.tags.join(" "), query)
        )
      }))
      .filter(r => r.score <= Math.max(2, query.length / 3))
      .sort((a, b) => a.score - b.score)
      .map(r => r.item);
  }
}

</script>

<main>
  <div class="input-container">
    <input
      bind:value={query}
      type="text"
      style="font-family: menlo;"
      placeholder="Search for an entity..."
    />
  </div>

  {#if results.length}
    <ul>
      {#each results as item}
        <li>
          <strong>{item.name}</strong><br />
          <small>{item.description}</small>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No results</p>
  {/if}
</main>

