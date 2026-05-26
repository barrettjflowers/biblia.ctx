# Insight Dates — Scraping Pipeline

## Goal

Scrape beginning/end dates (birth/death) for all 765 entries in `src/lib/dataset/insight.ts` from JW.org "Insight on the Scriptures" pages, removing non-dateable (concept) entries.

---

## Source

- **Primary URL**: `https://www.jw.org/en/library/books/Insight-on-the-Scriptures/{id}/`
  - ID is capitalized first letter: `aaron` → `Aaron/`, `abraham` → `Abraham/`
  - Compound IDs: `acts-of-apostles` → `Acts-of-Apostles/` (hyphenated parts Title Cased)
- **Fallback URL**: If the constructed URL fails (404), use the entry's existing `source` field if present
- **Removal**: If both URLs fail, or if the page loads but contains no dates → the entry is removed

## Date Patterns in Page Text

Dates appear in the article body as:
- `"born in Egypt in 1597 B.C.E."` — birth year
- `"He died in 1474 B.C.E. at the age of 123 years."` — death year
- `"That was in the year 4026 B.C.E."` — creation/birth
- `"Adam returned to the ground... in the year 3096 B.C.E."` — death
- `"John evidently began his ministry in the spring... of 29 C.E."` — CE dates
- `"about 1100 B.C.E."` — circa dates

### Regex patterns to match:
- `\d{3,4}\s+B\.C\.E\.` — e.g., `1597 B.C.E.`
- `\d{1,3}\s+C\.E\.` — e.g., `29 C.E.`
- Circa: text near date containing `about`, `c.`, `approximately`

## Target Date Format

| Source text | Target format |
|---|---|
| `"1597 B.C.E."` (birth) + `"1474 B.C.E."` (death) | `'1597bce-1474bce'` |
| `"4026 B.C.E."` only | `'4026bce'` |
| `"29 C.E."` only | `'29ce'` |
| `"about 1100 B.C.E."` | `'c.1100bce'` |

## Logic

1. For each entry where `date` needs updating (empty, partial, or could be fuller):
   - Load the insight page
   - Extract all B.C.E. and C.E. dates from the article body
   - **First date** → beginning/birth year
   - **Second date** → death/end year
   - If only one date found → single year
   - If circa qualifier detected → add `c.` prefix

2. **Updating existing dates**:
   - If entry has `date: ''` → scrape fresh
   - If entry has a single date (e.g., `'1597bce'`) but page has two → upgrade to range (`'1597bce-1474bce'`)

3. **No dates found on page** → remove entry, log to REMOVED.md
4. **Page not found (404)** → remove entry, log to REMOVED.md

## Side Effects

- All kept entries get their `source` field set to the insight page URL
- Removed entries are logged to `src/lib/dataset/REMOVED.md` with:
  - Entry ID and Title
  - Reason for removal (404 / no dates found)

## Technical Details

- **Language**: TypeScript, run via `npx tsx`
- **HTTP**: Node 18+ native `fetch` (no external dependency)
- **HTML parsing**: RegExp-based extraction from the article text content (the date pattern is simple enough; no DOM parser needed)
- **Rate limiting**: 800ms delay between requests, batch report every 50 entries
- **File output**: Read `insight.ts`, modify entries in-memory, write back
- **Script location**: `scripts/scrape-dates.ts`
- **npm script**: `"scrape:dates": "npx tsx scripts/scrape-dates.ts"`

## Pipeline Status

- [ ] Build `scripts/scrape-dates.ts`
- [ ] Add npm script to `package.json`
- [ ] Run on 10-entry test batch
- [ ] Run full dataset (~765 entries)
- [ ] Review REMOVED.md
- [ ] Verify output compiles (`npm run check`)
