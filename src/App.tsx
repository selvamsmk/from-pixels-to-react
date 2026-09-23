import { courseDays } from './presentation/course'

function App() {
  return (
    <main className="course-home">
      <header><p className="eyebrow">A five-day UI engineering course</p><h1>From Pixels<br />to React</h1><p>Five standalone presentations. One connected story about how interfaces became programmable.</p></header>
      <ol className="course-day-list">
        {courseDays.map((day) => <li key={day.slug}><a href={`./${day.slug}/`}><span>Day {day.number}</span><strong>{day.title}</strong><small>{day.summary}</small></a></li>)}
      </ol>
    </main>
  )
}

export default App
