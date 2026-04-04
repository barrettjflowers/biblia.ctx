// In the biblical canon.
export type Cononical = {
  id: string //db key
  title: string //userspace friendly name
  description: string //userspace description
  source?: string //source link
	href?: string //image
	scripture?: string[] //scriptural reference(s) of the event
  date?: string //date
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

