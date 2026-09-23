import { ContentSlide, SectionSlide } from './slides'
import { DayNavigation } from './DayNavigation'
import type { CourseDay } from '../presentation/course'

export function DaySkeleton({ day }: { day: CourseDay }) {
  const label = `TODO: Day ${day.number} content`

  return <>
    <ContentSlide eyebrow={`Day ${day.number} overview`} title="Today’s map" notes="Explanation: Replace this overview when the day curriculum is ready.\nTime: TODO.">
      <p className="statement">{label}</p>
    </ContentSlide>
    <SectionSlide day={`Day ${day.number} · Section 1`} title="TODO: Section divider" premise={label} />
    <ContentSlide eyebrow="Placeholder" title="TODO: Core concept" notes="Explanation: TODO.\nTalking points: TODO.\nTime: TODO."><p className="statement">{label}</p></ContentSlide>
    <SectionSlide day={`Day ${day.number} · Section 2`} title="TODO: Section divider" premise={label} />
    <ContentSlide eyebrow="Placeholder" title="TODO: Worked example" notes="Explanation: TODO.\nTime: TODO."><p className="statement">{label}</p></ContentSlide>
    <ContentSlide eyebrow="Exercise" title={`TODO: Day ${day.number} exercise`} notes="Instructions: TODO.\nTime: TODO."><p className="statement">Practice activity placeholder.</p></ContentSlide>
    <ContentSlide eyebrow="Homework" title={`TODO: Day ${day.number} homework`} notes="Instructions: TODO."><p className="statement">Follow-up activity placeholder.</p></ContentSlide>
    <ContentSlide eyebrow="Closing" title="See you next time" notes="Wrap-up: TODO."><p className="statement">TODO: Day {day.number} closing.</p><DayNavigation dayNumber={day.number} /></ContentSlide>
  </>
}
