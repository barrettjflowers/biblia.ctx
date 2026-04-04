# Insight Descriptions - Plan

## Goal

Generate 1-2 sentence descriptions for all 765 entries in `src/lib/dataset/insight.ts`.

## Source Material

- Entries come from JW.org "Insight on the Scriptures" encyclopedia
- URL pattern: `https://www.jw.org/en/library/books/Insight-on-the-Scriptures/{entry-slug}/`

## Progress

- [x] First 100 entries completed
- [ ] Entries 101-765 remaining

## Completed (100 entries)

1-100: aaron through book

## Remaining Approach

### Option 1: Automated Fetch (Recommended)

1. Write a script to fetch descriptions from JW.org for each entry
2. Parse the page content to extract the summary/description
3. Batch process in chunks of ~50 to avoid rate limiting
4. Update `src/lib/dataset/insight.ts` with fetched descriptions

### Option 2: AI Generation

1. Use the Task tool to generate descriptions in batches of ~100
2. Feed the title list to the AI and ask it to generate 1-2 sentence descriptions
3. Use biblical/historical knowledge based on JW.org "Insight on the Scriptures"

## File to Update

`src/lib/dataset/insight.ts`

## Entry Count

Total: 765 entries (100 done, 665 remaining)
