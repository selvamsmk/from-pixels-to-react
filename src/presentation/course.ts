export const courseDays = [
  { number: 1, slug: 'day-1', title: 'From Pixels to UI', summary: 'How did we teach computers to interact with humans?' },
  { number: 2, slug: 'day-2', title: 'The Browser Changes Everything', summary: 'How the Web, HTML, CSS and JavaScript created a cross-platform UI runtime.' },
  { number: 3, slug: 'day-3', title: 'Why React?', summary: 'How increasingly complex web applications led to component-based and declarative UI.' },
  { number: 4, slug: 'day-4', title: 'Building with React', summary: 'Core React concepts and building a small application.' },
  { number: 5, slug: 'day-5', title: 'React in the Bigger Picture', summary: 'Modern React, the ecosystem, React Native, architecture and where the technology is heading.' },
] as const

export type CourseDay = (typeof courseDays)[number]
