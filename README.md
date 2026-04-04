# Canonical Data Format

Conventions for canonical records used by biblia.ctx

## Type Definition

```ts
export type Cononical = {
	id: string; // db key
	title: string; // userspace friendly name
	description: string; // userspace description
	source?: string; // source link
	href?: string; // image
	scripture?: string[]; // scriptural reference(s) of the event
	date?: string; // date of event
	tags?: string[]; // search keys
};
```

---

# Field Specifications

## `id`

Unique database identifier.

- lowercase only
- no spaces

Example

```json
"id": "abel"
"id": "moses"
"id": "noahs-flood"
```

---

## `title`

Human readable name shown to users.

Example

```json
"title": "Abel"
"title": "Moses"
"title": "Noah's Flood"
```

---

## `description`

A **1–2 sentence summary** describing the subject.

- Should describe **well-known information**
- Avoid speculation
- Keep concise

Example

```json
"description": "Abel was the second son of Adam and Eve and is known for offering a sacrifice that pleased God. He was later killed by his brother Cain."
```

---

## `source`

Optional link to an external source or reference.

Example

```json
"source": "https://en.wikipedia.org/wiki/Abel"
```

---

## `href`

Optional URL to an image or media asset.

Example

```json
"href": "https://example.com/abel-image.jpg"
```

---

## `scripture`

Array of scriptural references related to the event.

Example

```json
"scripture": ["Genesis 4:1-16", "Matthew 23:35", "Hebrews 11:4"]
```

---

## `date`

Exact date

```
YYYYbce
```

Example

```json
"date": "4000bce"
```

Circa date

```
c.YYYYbce
```

Example

```json
"date": "c.4000bce"
```

Range of dates

```
YYYYbce-YYYYbce
```

Example

```json
"date": "4000bce-3000bce"
```

Ranges can also be circa

```
c.YYYYbce-c.YYYYbce
```

---

## `tags`

Search keywords used for filtering.

- one word per tag
- lowercase
- split multi-word concepts into multiple tags

```json
"tags": ["person", "genesis", "sacrifice"]
```

---

# Example Record

```ts
{
  id: "abel",
  title: "Abel",
  description: "Abel was the second son of Adam and Eve and is known for offering a sacrifice that pleased God. He was later killed by his brother Cain.",
  source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Abel/",
  href: "https://cms-imgp.jw-cdn.org/img/p/1102013271/univ/art/1102013271_univ_lsr_lg.jpg",
  scripture: ["Genesis 4:1-16", "Matthew 23:35", "Hebrews 11:4"],
  date: "c.4000bce-c.3900bce",
  tags: ["person", "genesis", "sacrifice"]
}
```
