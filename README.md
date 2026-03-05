# Canonical Data Format
Conventions for canonical records used by biblia.ctx

## Type Definition
```ts
export type Cononical = {
  id: string // db key
  title: string // userspace friendly name
  description: string // userspace description
  date_start?: string // birth or start date
  date_end?: string // death or end date
  date?: string // single or circa neutral date
  tags?: string[] // search keys
}
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

## `date_start`
Start date of a person, event, or artifact.

- birth dates
- beginning of events, or artifacts

Format
```
YYYYbce
```

Example
```json
"date_start": "1597bce"
```

---

## `date_end`
End date of a person, event, or artifact.

- death dates
- event completion

Format
```
YYYYbce
```

Example
```json
"date_end": "1474bce"
```

---

## `date`
Used when **only one date is known**.

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

Use `date` instead of `date_start` / `date_end` when only a single date is available.

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
  date_start: "",
  date_end: "",
  date: "c.4000bce",
  tags: ["person", "genesis", "sacrifice"]
}
```
