// In the biblical canon.
export type Cononical = {
  id: string //db key
  title: string //userspace friendly name
  description: string //userspace description
  date_start?: string //birth or start date
  date_end?: string //death or end date
  source?: string //source
  date?: string //circa neutral date
  tags?: string[] //search keys
}

// Academic texts outside the biblical canon.
export type Apocryphal = {
  id: string
  title: string
  description: string
  date?: string
  tags?: string[]
}

