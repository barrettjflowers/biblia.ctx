import type { Cononical } from './types'

export const insight: Cononical[] = [
  {
    id: 'moabite-stone', //db key
    title: 'The Moabite Stone', //userspace friendly name
    description: '9th-century BCE inscription by King Mesha', //userspace description
    date: 'c. 840 BCE', //date
    tags: ['inscription', 'moabite'] //search keys
  },
  {
    id: 'rosetta-stone', //db key
    title: 'The Rosetta Stone', //userspace friendly name
    description: 'some other data', //userspace description
    date: 'c. 400 BCE', //date
    tags: ['inscription', 'translate'] //search keys
  }
]
