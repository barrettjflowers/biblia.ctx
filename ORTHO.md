# Ortholinear Graph - Implementation Plan

## Overview

Add an "Ortholinear Graph" view type as an alternative to the current list view. This displays search results as nodes on a timeline, with accurate BCE/CE positioning.

## Example Output

```
          29ce          90ce
======================================
          jesus starts   apostasy sets into christian congregation
          ministry
```

The nodes (29ce, 90ce) are the dates from the entries pulled into context via the fuzzy finder.

---

## Implementation Steps

### 1. Update Settings Store (`src/lib/settings.ts`)

Add `viewType` to the Settings interface:

```ts
export interface Settings {
	yearsContext: number;
	dataset: 'insight' | 'example';
	viewType: 'list' | 'ortholinear';
}
```

Default to `'list'`:

```ts
const defaultSettings: Settings = {
	yearsContext: 50,
	dataset: 'insight',
	viewType: 'list'
};
```

### 2. Wire Up Settings Page (`src/routes/settings/+page.svelte`)

- Add `let viewType = $settings.viewType;`
- Bind select to `viewType`
- Include `viewType` in `saveSettings()`

### 3. Create OrthoLinear Graph Component (`src/lib/components/OrthoLinearGraph.svelte`)

**Props:**

- `results: Canonical[]` - the filtered/sorted search results

**Logic:**

1. Parse dates from all results using `parseYear()` from `dateUtils.ts`
2. Filter to only items with valid dates
3. Sort by year ascending
4. Calculate min/max year to determine timeline range
5. Map years to horizontal positions (percentage-based)

**Rendering:**

- Timeline axis at bottom with year markers
- Nodes positioned along the line based on date
- Each node shows title + description
- Support BCE (negative) and CE (positive) years

### 4. Update Main Page (`src/routes/+page.svelte`)

- Import `{ settings }` from `$lib/settings`
- Import `OrthoLinearGraph` component
- Conditionally render:

```svelte
{#if $settings.viewType === 'ortholinear'}
	<OrthoLinearGraph results={$results} />
{:else}
	<ul>...</ul>
{/if}
```

---

## Key Files to Modify

| File                                         | Action                     |
| -------------------------------------------- | -------------------------- |
| `src/lib/settings.ts`                        | Add `viewType` field       |
| `src/routes/settings/+page.svelte`           | Bind viewType select       |
| `src/lib/components/OrthoLinearGraph.svelte` | Create new component       |
| `src/routes/+page.svelte`                    | Conditionally render graph |

---

## New File to Create

| File                                         | Description              |
| -------------------------------------------- | ------------------------ |
| `src/lib/components/OrthoLinearGraph.svelte` | Timeline graph component |
