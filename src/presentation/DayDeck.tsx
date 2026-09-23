import type { PropsWithChildren } from 'react'
import { Deck } from '@revealjs/react'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/plugin/highlight/monokai.css'
import { TitleSlide } from '../components/slides'
import type { CourseDay } from './course'

type DayDeckProps = PropsWithChildren<{ day: CourseDay; titleNotes?: string }>

export function DayDeck({ day, titleNotes, children }: DayDeckProps) {
  return (
    <Deck
      config={{ width: 1440, height: 900, hash: true, controls: true, progress: true, slideNumber: 'c/t', defaultTiming: 80, transition: 'slide', transitionSpeed: 'fast', backgroundTransition: 'fade', autoAnimateEasing: 'ease-out', autoAnimateDuration: 0.55, autoAnimateUnmatched: false, center: false, navigationMode: 'linear' }}
      plugins={[RevealHighlight, RevealNotes]}
    >
      <TitleSlide day={day.number} title={day.title} subtitle={day.summary} notes={titleNotes} />
      {children}
    </Deck>
  )
}
