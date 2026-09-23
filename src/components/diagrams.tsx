import type { ReactNode } from 'react'
import { Fragment } from '@revealjs/react'

export function FlowDiagram({ steps, stepByStep = false }: { steps: string[]; stepByStep?: boolean }) {
  const [firstStep, ...followingSteps] = steps
  return (
    <div className="flow-diagram">
      <div className="flow-step"><strong>{firstStep}</strong></div>
      {followingSteps.map((step) => {
        const content = <><i aria-hidden="true">↓</i><strong>{step}</strong></>
        return stepByStep
          ? <Fragment key={step} as="div" animation="fade-up" className="flow-step">{content}</Fragment>
          : <div key={step} className="flow-step">{content}</div>
      })}
    </div>
  )
}

export function PixelGrid() {
  return <div className="pixel-grid" aria-label="Magnified RGB pixel grid">{Array.from({ length: 64 }, (_, index) => <span key={index} className={`pixel pixel-${index % 7}`} />)}</div>
}

export function UiExamples() {
  const examples = ['Door handle', 'Steering wheel', 'Light switch', 'Elevator buttons', 'Typewriter', 'Control panel']
  return <div className="ui-examples">{examples.map((example, index) => <div key={example}><b>{['↪', '◉', '│', '▦', '⌨', '◫'][index]}</b><span>{example}</span></div>)}</div>
}

export function WidgetTree() {
  return <div className="widget-tree" aria-label="UI object tree"><strong>Window</strong><div className="tree-branch"><span>Menu</span><span>Panel</span><div className="tree-leaves"><span>TextBox</span><span>Button</span></div></div></div>
}

export function ToolkitMap() {
  const rows = [
    ['C', 'GTK / native APIs'], ['C++', 'Qt'], ['C#', 'WinForms · WPF'], ['Java', 'AWT · Swing · JavaFX'], ['Python', 'Tkinter · PyQt / PySide'],
  ]
  return <div className="toolkit-map">{rows.map(([language, tools]) => <div key={language}><strong>{language}</strong><span>{tools}</span></div>)}</div>
}

export function HistoryTimeline({ milestones = [['1960s/70s', 'Graphical research systems'], ['1970s', 'Xerox PARC / Alto'], ['1980s', 'Macintosh · wider consumer adoption'], ['1990s+', 'Windows · desktop expansion'], ['Today', 'Native · Web · Mobile · Cross-platform']] }: { milestones?: string[][] }) {
  return <div className="history-timeline">{milestones.map(([year, label]) => <div key={year}><strong>{year}</strong><span>{label}</span></div>)}</div>
}

export function TileList({ children }: { children: ReactNode }) {
  return <div className="tile-list">{children}</div>
}
