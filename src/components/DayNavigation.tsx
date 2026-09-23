import { courseDays } from '../presentation/course'

export function DayNavigation({ dayNumber }: { dayNumber: number }) {
  const previousDay = courseDays[dayNumber - 2]
  const nextDay = courseDays[dayNumber]

  return (
    <nav className="day-navigation" aria-label="Course days">
      <a href="../">Course home</a>
      {previousDay && <a href={`../${previousDay.slug}/`}>← Day {previousDay.number}</a>}
      {nextDay && <a href={`../${nextDay.slug}/`}>Day {nextDay.number} →</a>}
    </nav>
  )
}
