import { DaySkeleton } from '../../components/DaySkeleton'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'

export function Day03() { return <DayDeck day={courseDays[2]}><DaySkeleton day={courseDays[2]} /></DayDeck> }
