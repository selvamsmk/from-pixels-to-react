import type { PropsWithChildren, ReactNode } from 'react'
import { Code, Slide } from '@revealjs/react'
import { ReactMark } from './ReactMark'

type SlideShellProps = PropsWithChildren<{
  eyebrow?: string
  title: string
  notes?: string
  className?: string
}>

export function ContentSlide({ eyebrow, title, notes, className, children }: SlideShellProps) {
  return (
    <Slide notes={notes} className={className}>
      <div className="slide-frame">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {children}
      </div>
    </Slide>
  )
}

export function TitleSlide({ day, title, subtitle, notes }: { day: number; title: string; subtitle: string; notes?: string }) {
  return (
    <Slide notes={notes ?? `Explanation: Welcome the cohort to Day ${day}.\nTime: TODO.\nQuestion: TODO.`}>
      <div className="title-slide">
        <div className="title-signature">
          <ReactMark className="title-mark" />
          <p className="eyebrow">From Pixels to React · Day {day}</p>
        </div>
        <h1>{title}</h1>
        <p className="title-subtitle">{subtitle}</p>
        <p className="title-meta">A five-day UI engineering course</p>
      </div>
    </Slide>
  )
}

export function SectionSlide({ day, title, premise }: { day: string; title: string; premise: string }) {
  return (
    <Slide transition="zoom" transitionSpeed="fast" notes={`Explanation: Introduce ${day} and make the day’s central question explicit.\nTime: 1 minute.`}>
      <div className="section-slide">
        <p className="eyebrow">{day}</p>
        <h1>{title}</h1>
        <p>{premise}</p>
      </div>
    </Slide>
  )
}

export function TwoColumnSlide({ eyebrow, title, left, right, notes }: SlideShellProps & { left: ReactNode; right: ReactNode }) {
  return (
    <ContentSlide eyebrow={eyebrow} title={title} notes={notes}>
      <div className="two-column">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </ContentSlide>
  )
}

export function CodeSlide({ title, code, notes }: { title: string; code: string; notes?: string }) {
  return (
    <ContentSlide eyebrow="A small example" title={title} notes={notes}>
      <Code language="tsx" lineNumbers>{code}</Code>
    </ContentSlide>
  )
}

export function Callout({ children }: PropsWithChildren) {
  return <div className="callout">{children}</div>
}
