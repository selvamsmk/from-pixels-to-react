import { DaySkeleton } from '../../components/DaySkeleton'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'

export function Day02() { return <DayDeck day={courseDays[1]}><DaySkeleton day={courseDays[1]} /></DayDeck> }
