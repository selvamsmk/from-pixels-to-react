import { DaySkeleton } from '../../components/DaySkeleton'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'

export function Day04() { return <DayDeck day={courseDays[3]}><DaySkeleton day={courseDays[3]} /></DayDeck> }
