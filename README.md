# Canonical Data Format
Conventions for canonical records used by biblia.ctx

## Type Definition
```ts
export type Cononical = {
  id: string // db key
  title: string // userspace friendly name
  description: string // userspace description
  date?: string // date of event
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
  date: "c.4000bce-c.3900bce",
  tags: ["person", "genesis", "sacrifice"]
}
```
