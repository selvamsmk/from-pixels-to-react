import { DaySkeleton } from '../../components/DaySkeleton'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'

export function Day05() { return <DayDeck day={courseDays[4]}><DaySkeleton day={courseDays[4]} /></DayDeck> }
