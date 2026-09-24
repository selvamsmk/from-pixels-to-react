import { ContentSlide } from '../../components/slides'
import { FlowDiagram } from '../../components/diagrams'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'
import { day02References } from './references'

export function Day02() {
  return (
    <DayDeck day={courseDays[1]} titleNotes={'Welcome people as they arrive. Reconnect to the Day 1 ending: HTML gives structure; CSS gives presentation. Today asks how a page does something. Timing: 1 minute.'}>
      <ContentSlide eyebrow="Yesterday" title="HTML tells us what exists. CSS tells us how it looks." notes="ASK: What is missing if this page should respond to a click? WAIT FOR: behaviour, logic, interaction. EXPLAIN: HTML and CSS are essential, but neither describes changing behaviour. TRANSITION: What should happen? TIMING: 1 minute.">
        <div className="html-css-split"><div><b>HTML</b><span>What exists?</span></div><div><b>CSS</b><span>What does it look like?</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What should happen?" notes="ASK: What should happen when a person clicks the button? WAIT FOR: change text, send a form, open something. EXPLAIN: The browser needs a programming language for behaviour. Reveal JavaScript. KEY TAKEAWAY: JavaScript lets a page respond. TRANSITION: Where did this language come from? TIMING: 1 minute.">
        <pre className="lesson-code compact"><code>{`button.addEventListener("click", () => {
  // do something
})`}</code></pre>
        <p className="browser-reveal">JavaScript</p>
      </ContentSlide>

      <ContentSlide eyebrow="History" title="A browser scripting language, in 1995" notes={`EXPLAIN: Brendan Eich created the initial language at Netscape in 1995. The early prototype was code-named Mocha; the browser beta used LiveScript; Netscape and Sun announced JavaScript later that year. The often-quoted ten days refers to the initial May 1995 implementation, not the whole language’s finished history. In November 1996, work began to standardize it; ECMAScript 1 followed in 1997. FUN FACT: Navigator 2.0 shipped JavaScript support in 1995. References: ${day02References.javascriptHistory}\n${day02References.tenDays}\n${day02References.ecma}\nTIMING: 2 minutes.`}>
        <div className="js-history"><span>1995<br /><b>Mocha</b></span><i>→</i><span>1995<br /><b>LiveScript</b></span><i>→</i><span>1995<br /><b>JavaScript</b></span><i>→</i><span>1997<br /><b>ECMAScript 1</b></span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="JavaScript. Java. They must be related… right?" notes="ASK: Are Java and JavaScript basically the same language? WAIT FOR: laughs, maybe ‘both use braces’. EXPLAIN: No. JavaScript is not Java for the browser. Its Java-like syntax and name sit in a 1995 Netscape/Sun commercial context; the language also drew from several traditions. Keep the joke separate from the explanation: ‘Java is to JavaScript as car is to carpet.’ KEY TAKEAWAY: Similar names do not mean the same language. TRANSITION: Let’s meet the language in the place it was made to run. TIMING: 1 minute.">
        <div className="not-java"><strong>JavaScript</strong><i>≠</i><strong>Java</strong><span>same era · different languages</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · 2 minutes" title="Your browser is already a JavaScript playground" notes="DO: Ask everyone to open DevTools and select Console: Chrome/Edge — F12 or Ctrl/Cmd+Shift+J; Firefox — F12 then Console. Have everyone type 1 + 2. EXPLAIN: The console evaluates JavaScript in the currently open page. Use an ordinary page, not a sensitive app. TRANSITION: What kinds of values can we work with? TIMING: 2 minutes.">
        <div className="console-prompt"><span>›</span><code>1 + 2</code><b>3</b></div>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · 2 minutes" title="JavaScript in five minutes" notes={`ASK:
“Which of these looks familiar from data we use every day?”

DO:
Type one line at a time in the Console. After each line, ask participants to predict or change one value themselves.

1. "hello".toUpperCase()
Say: A string is text. It has useful operations available on it. We are asking this text to produce uppercase text.

2. const name = "Selva"
Then type: name
Say: const gives a value a name. Use const by default when that name will not be reassigned. We are not discussing every variable rule today.

3. ["HTML", "CSS", "JS"]
Say: An array is an ordered collection. Ask: “What would you put in position zero?” Do not teach array methods yet.

4. { course: "React" }
Say: An object groups named information. The word before the colon is a label; the value follows it. This shape will later feel familiar when we talk about application state.

5. (value) => value + 1
Say: A function is reusable behaviour. This one accepts a value and returns a new value. Do not unpack arrow-function syntax beyond that.

EXPLAIN:
JavaScript works with values and can run behaviour. That is all participants need before touching the page. Avoid detours into classes, prototypes, scope, or modules.

KEY TAKEAWAY:
JavaScript lets us store information, transform it, and make decisions.

TRANSITION:
“JavaScript has some surprising history. Before we change a page, let’s make one prediction game out of it.”

TIMING:
2 minutes of demonstration, then let curiosity carry any extra questions to the break or Q&A.`}>
        <div className="js-basics"><code>"hello".toUpperCase()</code><code>const name = "Selva"</code><code>["HTML", "CSS", "JS"]</code><code>&#123; course: "React" &#125;</code><code>(value) =&gt; value + 1</code></div>
      </ContentSlide>

      <ContentSlide eyebrow="Predict · then run" title="What will JavaScript say?" notes="ASK: Vote before anyone runs each expression. DO: Use only four: typeof null; '5' + 1; '5' - 1; 0 == false and then 0 === false. EXPLAIN: == permits coercion; === does not. typeof null returning 'object' is a long-standing historical quirk. Do not use this as evidence that JavaScript is terrible—compatibility is part of its history. TIMING: 3 minutes.">
        <div className="predict-grid"><code>typeof null</code><code>"5" + 1</code><code>"5" - 1</code><code>0 == false</code><code>0 === false</code></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="JavaScript can calculate. How does it touch HTML?" notes="ASK: If HTML has already become a page, how can JavaScript find a heading? WAIT FOR: browser, DOM, document. EXPLAIN: The browser exposes the loaded document to JavaScript. TRANSITION: Meet document. TIMING: 1 minute.">
        <p className="statement">HTML → browser parses it → <strong>DOM</strong> → JavaScript</p>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="The DOM is the page as objects" notes={`EXPLAIN: The Document Object Model is the browser’s tree-like representation of the page. JavaScript can inspect and update it through document. Avoid a formal DOM lecture. Reference: ${day02References.dom}\nKEY TAKEAWAY: JavaScript does not edit the original server file; it works with the document loaded in this browser. TRANSITION: Let’s safely prove it. TIMING: 1 minute.`}>
        <div className="dom-tree"><strong>document</strong><div><span>body</span><span>h1</span><span>p</span><span>a</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · safe experiment" title="Take control of a webpage—locally" notes="DO: Open any ordinary Wikipedia article or other safe public page. Say clearly: these changes happen only in your current browser tab and disappear on refresh; we are not changing Wikipedia’s server. Run document.title, then document.title = 'I control this page now'. OBSERVE: the tab title changes. TIMING: 1 minute.">
        <pre className="lesson-code compact"><code>{`document.title
document.title = "I control this page now"`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · 3 minutes" title="Change the loaded page" notes={`DO: Try each line one at a time on an ordinary public page. The optional chaining means the h1 experiment does nothing rather than crashing if no heading exists. EXPLAIN: querySelector finds the first matching element; querySelectorAll can return many. Refresh restores the page. Reference: ${day02References.querySelector}\nTIMING: 3 minutes.`}>
        <pre className="lesson-code"><code>{`document.body.style.backgroundColor = "lavender"
document.querySelector("h1")?.textContent = "My local remix"
document.querySelectorAll("p").forEach((p) => {
  p.style.fontFamily = "monospace"
})`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · 2 minutes" title="How does the page know you clicked?" notes="ASK: How does JavaScript learn about a click? DO: Run the listener, then click different parts of the page and inspect the console. EXPLAIN: the browser emits events. Connect to Day 1: input → JavaScript logic → DOM change → browser output. Mention click, input, submit but stay with click. TIMING: 2 minutes.">
        <pre className="lesson-code compact"><code>{`document.body.addEventListener("click", (event) => {
  console.log(event.target)
})`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Lab · build" title="A tiny counter, with vanilla JavaScript" notes="DO: Paste this once into the console on a page you can refresh. The IIFE prevents duplicate top-level variable errors if they retry after a refresh. ASK: What is the state? WAIT FOR: count. ASK: What represents the UI? WAIT FOR: button / DOM. TIMING: 3 minutes.">
        <pre className="lesson-code"><code>{`(() => {
  let count = 0
  const button = document.createElement("button")
  button.textContent = \`Count: \${count}\`
  button.addEventListener("click", () => {
    count += 1
    button.textContent = \`Count: \${count}\`
  })
  document.body.prepend(button)
})()`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="The important question" title="Who keeps state and the DOM synchronized?" notes="ASK: When count changes, who remembered to change the button text? WAIT FOR: our code. EXPLAIN: This is manageable for one counter. Keep this sentence visible. TRANSITION: Before the large-app problem, why did developers reach for libraries? TIMING: 1 minute.">
        <div className="sync-loop"><span>STATE CHANGES</span><i>↓</i><strong>WE find and update the DOM</strong><i>↓</i><span>BROWSER RENDERS</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="If vanilla JS worked, why did jQuery exist?" notes={`ASK: What could be unpleasant in 2006? WAIT FOR: browser differences, verbose selection, events, AJAX. EXPLAIN: jQuery focused on consistent, concise DOM manipulation, events, effects, and AJAX across the browsers of that era. Do not claim modern vanilla APIs are equally awkward. Reference: ${day02References.jquery}\nTIMING: 1.5 minutes.`}>
        <p className="statement">Make DOM work easier.<br />Make browser differences less visible.</p>
      </ContentSlide>

      <ContentSlide eyebrow="Comparison" title="jQuery made DOM manipulation concise" notes="EXPLAIN: Both lines select an existing element. jQuery’s value was more than a shorter selector: it gave developers a consistent API around many common browser tasks. Modern querySelector has absorbed part of that everyday ergonomics. KEY TAKEAWAY: jQuery simplified manipulating the existing DOM; it did not solve every large-application design problem. TIMING: 1 minute.">
        <div className="code-comparison"><div><p className="column-label">MODERN VANILLA</p><code>document.querySelector(".item")<br />?.classList.add("active")</code></div><div><p className="column-label">JQUERY</p><code>$(".item").addClass("active")</code></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="History · short bridge" title="The Web became an application platform" notes={`EXPLAIN: This is not a replacement ladder. Each tool answered a changing question: make pages interactive; manipulate DOM conveniently; organize growing client-side code; describe UI from state. Backbone’s initial release was in 2010; Google announced AngularJS 1.0 in 2012; React was open-sourced in 2013. References: ${day02References.backbone}\n${day02References.angularjs}\n${day02References.react}\nTIMING: 1.5 minutes.`}>
        <div className="app-history"><span><b>1995</b> JavaScript<br /><small>make a page respond</small></span><span><b>2006</b> jQuery<br /><small>simplify DOM work</small></span><span><b>2010</b> Backbone<br /><small>organize app code</small></span><span><b>2012</b> AngularJS 1.0<br /><small>data binding</small></span><span><b>2013</b> React<br /><small>describe UI from state</small></span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What if this wasn’t one counter?" notes="ASK: Name pieces of state a real product holds. WAIT FOR: user, cart, loading, validation, modal, selected tab, search results, permissions. Let the list fill the slide mentally; do not add them all visibly. TRANSITION: What has to stay synchronized? TIMING: 1 minute.">
        <div className="state-cloud"><span>cart</span><span>loading</span><span>errors</span><span>modal</span><span>search</span><span>permissions</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="The complexity problem" title="Application state ↔ DOM" notes="EXPLAIN: With manual DOM code, we must know which elements depend on every state change, find them, update them, and avoid stale UI. This is the emotional climax, not an anti-JavaScript claim. Vanilla DOM APIs are useful; the question is organizing synchronization at scale. TIMING: 1.5 minutes.">
        <div className="state-dom"><div><b>APPLICATION<br />STATE</b><span>count · user · errors · results</span></div><i>↕</i><div><b>DOM</b><span>buttons · text · panels · lists</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="A different question" title="What if UI were simply a function of state?" notes="ASK: What if we stopped issuing individual DOM instructions after every change? EXPLAIN: This is React’s central promise in its simplest form. Do not explain Virtual DOM, reconciliation, hooks, or JSX here. KEY TAKEAWAY: describe the UI for current state. TIMING: 1 minute.">
        <p className="function-of-state">UI = f(state)</p>
      </ContentSlide>

      <ContentSlide eyebrow="Tomorrow" title="So… how does React actually do that?" notes="Show the contrast, then stop. Explain only the mental comparison: manual JavaScript changes a known DOM node; React lets the author describe UI for the current state and coordinates the DOM update. Do not teach useState, JSX, hooks, or reconciliation. Transition: Day 3 — Why React? Timing: 1 minute.">
        <div className="react-teaser"><div><p className="column-label">MANUAL DOM</p><code>count += 1<br />button.textContent = count</code></div><div><p className="column-label">REACT IDEA</p><code>state changes<br />→ describe UI</code></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Keep going" title="Further Learning &amp; Practice" notes="Invite learners to pick one tutorial, one practice platform, and MDN as their everyday lookup tool. Explain that the ECMAScript specification is authoritative but not a beginner tutorial; TC39 is where future language features are developed. Keep this slide visible for questions. Timing: 1 minute.">
        <div className="resource-groups">
          <section><p className="column-label">INTERACTIVE PRACTICE</p><a href="https://javascript.info/">JavaScript.info <span>modern language + browser tutorial</span></a><a href="https://www.jschallenger.com/">JS Challenger <span>short focused exercises</span></a><a href="https://exercism.org/tracks/javascript">Exercism <span>guided JavaScript practice</span></a><a href="https://www.codewars.com/">Codewars <span>problem-solving kata</span></a></section>
          <section><p className="column-label">OFFICIAL / REFERENCE</p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">MDN JavaScript Guide <span>everyday learning reference</span></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">MDN JavaScript Reference <span>exact API behaviour</span></a><a href="https://tc39.es/ecma262/">ECMAScript Specification <span>formal language definition</span></a><a href="https://tc39.es/">TC39 <span>future language features</span></a></section>
        </div>
      </ContentSlide>
    </DayDeck>
  )
}
