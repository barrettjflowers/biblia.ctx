import { writable, derived } from 'svelte/store';
import { insight } from '../lib/archive/dict_example';

export const query = writable('');

function normalize(str: string) {
	return str.toLowerCase().trim();
}

function levenshtein(a: string, b: string) {
	const matrix = Array.from({ length: b.length + 1 }, () => new Array(a.length + 1).fill(0));

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

	if (text.includes(q)) return 0;
	return levenshtein(text, q);
}

export const results = derived(query, ($query) => {
	if (!$query.trim()) {
		return [];
	}
	return insight
		.map((item) => ({
			item,
			score: Math.min(
				fuzzyScore(item.title, $query),
				fuzzyScore(item.description, $query),
				fuzzyScore(item.tags.join(' '), $query)
			)
		}))
		.filter((r) => r.score <= Math.max(2, $query.length / 3))
		.sort((a, b) => a.score - b.score)
		.map((r) => r.item);
});
