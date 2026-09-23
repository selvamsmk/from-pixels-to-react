import { ContentSlide } from '../../components/slides'
import { FlowDiagram, PixelGrid } from '../../components/diagrams'
import { DayDeck } from '../../presentation/DayDeck'
import { courseDays } from '../../presentation/course'
import { day01References } from './references'
import lightSwitchImage from '../../assets/light-switch.jpg'
import browserRuntimeImage from '../../assets/browser-runtime.jpg'

export function Day01() {
  return (
    <DayDeck
      day={courseDays[0]}
      titleNotes={'Set the expectation: we will begin with a short investigation of what a browser does, then write HTML and CSS today. Ask who has viewed page source before. Timing: 2 minutes.'}
    >
      <ContentSlide eyebrow="Question" title="Is this a user interface?" notes="Ask for a quick vote. Do not define UI yet; use this only to establish that an interface is how a person affects and observes a system. Transition: What changes after the switch moves? Timing: 2 minutes.">
        <figure className="slide-visual switch-visual"><img src={lightSwitchImage} alt="A wall light switch glowing with cyan light" /><figcaption>LIGHT SWITCH</figcaption></figure>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="Input → state → output" notes="Ask: What happens after someone flips the switch? Collect input, internal change, and visible result. This is the only UI model we need today. Timing: 3 minutes.">
        <FlowDiagram steps={['Human', 'INPUT', 'SYSTEM STATE CHANGES', 'OUTPUT', 'Human observes result']} stepByStep />
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What is a screen made of?" notes="Ask the room to predict what they would find after zooming into the display. Keep this brief; pixels are a destination, not today’s topic. Timing: 1 minute.">
        <div className="screen-question"><div className="fake-window"><header /><p /><p /><button>Read more</button></div><strong>Zoom in?</strong></div>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="Pixels are the final output" notes="Reveal the grid. Explain only that software describes something and the display ultimately shows coloured pixels. Transition: If pixels have no meaning, where does the description of a button live? Timing: 2 minutes.">
        <div className="pixel-story"><span>Document</span><i>↓</i><span>Browser renders</span><i>↓</i><PixelGrid /><p>coloured pixels</p></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="If pixels have no meaning, who remembers the UI?" notes="Ask: The screen shows a button, but where do its label, enabled state, and click behaviour live? Answer: in a software representation. This sets up two broad ways of managing UI. Timing: 2 minutes.">
        <div className="ui-meaning"><div><p className="column-label">WHAT WE SEE</p><p className="hero-button small">Submit</p></div><div><p className="column-label">WHAT SOFTWARE REMEMBERS</p><code>Button<br />label: “Submit”<br />enabled: true</code></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Concept · 60 seconds" title="Immediate mode: describe this frame" notes="Explain the idea, not an implementation: the application describes what should be drawn now; the renderer draws it. The description is recreated each frame or render pass. Mention that application state still persists elsewhere. Timing: 1–2 minutes.">
        <FlowDiagram steps={['Application state', 'Describe UI now', 'Renderer', 'Pixels']} stepByStep />
      </ContentSlide>

      <ContentSlide eyebrow="Concept · 60 seconds" title="Retained mode: keep a UI tree" notes="Explain the contrasting idea: a UI toolkit keeps an object tree representing controls, layout, and event routing; the application updates it. Neither model is universally better. Timing: 1–2 minutes.">
        <div className="retained-tree"><strong>Window</strong><span>Heading</span><span>Text field</span><span>Button</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="React connection" title="React borrows from both ideas" notes="Be precise: React lets us repeatedly declare what the UI should look like from current state, which feels immediate-mode. React then reconciles that description with a retained host UI tree managed by its renderer. It is a helpful mental model, not a claim that React literally is an immediate-mode toolkit. Timing: 2 minutes.">
        <div className="react-bridge"><div><b>Current state</b><span>→ describe UI again</span></div><i>RECONCILE</i><div><b>Renderer</b><span>→ update retained host UI</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What rendered UI before browsers?" notes="Ask for examples: WinForms/WPF, AppKit/SwiftUI, Qt, GTK, Java Swing. Explain that native GUI toolkits turn application UI representations into platform windows, controls, events, and pixels. Timing: 2 minutes.">
        <div className="native-toolkit-map"><span>Application</span><i>→</i><span>Native UI toolkit</span><i>→</i><span>Windows · controls · pixels</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="Why not ship native UI for everything?" notes="Let the room name the tension first. Native applications have genuine strengths: platform integration and platform conventions. But different operating systems mean different APIs, builds, installers, updates, and support paths. Transition: What if a common reader was already installed? Timing: 2–3 minutes.">
        <div className="native-choice"><div><b>Native strengths</b><span>OS integration · conventions · capabilities</span></div><i>but</i><div><b>Many targets</b><span>Windows ≠ macOS ≠ Linux</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What if the reader was already everywhere?" notes="Now the browser answer has context. Ask: How could one document reach people on many different computers when a common reader is already there? Reveal the browser only after a pause. Timing: 2 minutes.">
        <div className="browser-story">
          <div><p className="browser-reveal">The Browser</p><FlowDiagram steps={['Document', 'Browser', 'Operating system', 'Pixels']} stepByStep /></div>
          <figure className="slide-visual browser-visual"><img src={browserRuntimeImage} alt="A laptop browser visualised as layers connecting software to hardware" /></figure>
        </div>
      </ContentSlide>

      <ContentSlide eyebrow="History · short version" title="The Web began as linked documents" notes={`Explain: Tim Berners-Lee proposed the Web at CERN in 1989 to share and link information. Its early foundation included URLs, HTTP, and HTML. Avoid implying it started as an app platform. Reference: ${day01References.web} Timing: 3 minutes.`}>
        <div className="web-origin"><strong>1989 · CERN</strong><span>Documents · links · URLs · HTTP · HTML</span><b>Before web apps, there were web pages.</b></div>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What did the browser actually receive?" notes="Ask: Was the browser sent a screenshot, or something else? Let people answer before showing the next slide. Timing: 1 minute.">
        <p className="statement">A request for a document.<br />A response containing text.</p>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="Request → response → document" notes="Walk left to right. A browser asks a server for a URL. The server responds with a document; the browser reads it and renders it. Mention HTTP as the convention for that exchange, without protocol detail. Timing: 3 minutes.">
        <div className="document-flow"><span>BROWSER</span><i>HTTP request</i><span>SERVER</span><i>HTML response</i><span>BROWSER</span></div>
        <p className="statement">The response could be plain text.</p>
      </ContentSlide>

      <ContentSlide eyebrow="Reveal" title="That text was HTML" notes="Reveal the source. Read it aloud as a document outline, not as programming syntax. HTML says what the pieces are. Timing: 3 minutes.">
        <pre className="lesson-code"><code>{`<!doctype html>
<html>
  <head><title>My first page</title></head>
  <body>
    <h1>Hello, Web</h1>
    <p>A document for people to read.</p>
  </body>
</html>`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="Can you read the page without a browser?" notes="Give the room 20 seconds to read the code and predict what appears. Then translate tags into familiar document parts. Timing: 2 minutes.">
        <div className="html-reading"><code>&lt;h1&gt;</code><span>a main heading</span><code>&lt;p&gt;</code><span>a paragraph</span><code>&lt;a&gt;</code><span>a link to another document</span></div>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="HTML gives content structure" notes="Use the metaphor carefully: HTML is the meaning and structure of a document, not its final visual design. Mention headings, paragraphs, links, lists, images, and buttons. Timing: 2 minutes.">
        <div className="document-anatomy"><span>Document</span><div><b>Heading</b><i>Paragraph</i><i>Link</i><i>List</i></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Try it · 3 minutes" title="Build a tiny document" notes="Ask everyone to type this in an index.html file, then double-click/open it in a browser. Pause for help. Success criterion: a heading, paragraph, and link appear. Timing: 3–5 minutes.">
        <pre className="lesson-code compact"><code>{`<!doctype html>
<h1>My reading list</h1>
<p>Three things I want to learn.</p>
<a href="https://developer.mozilla.org/">Explore the web</a>`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="Why does every new page look so similar?" notes="Ask what the browser chose: font, heading size, spacing, link colour. Explain that browsers apply a default stylesheet, which is useful but not the author’s design. Timing: 2 minutes.">
        <div className="default-page-preview"><h3>My reading list</h3><p>Three things I want to learn.</p><a>Explore the web</a></div>
      </ContentSlide>

      <ContentSlide eyebrow="Concept" title="CSS changes presentation" notes="Contrast responsibilities: HTML says what something is; CSS says how it should appear. Keep scope tight: selectors, properties, values. Timing: 2 minutes.">
        <div className="html-css-split"><div><b>HTML</b><span>meaning &amp; structure</span></div><div><b>CSS</b><span>layout &amp; appearance</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Read it" title="A CSS rule is a tiny instruction" notes="Read aloud: select every h1; set its colour to this value. Then mention that a property is one visual decision. Timing: 2 minutes.">
        <pre className="lesson-code compact"><code>{`h1 {
  color: #61dafb;
  letter-spacing: -0.04em;
}`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Try it · 5 minutes" title="Make your document feel intentional" notes="Have learners add this style block to the document, then change one colour and one spacing value. Invite a couple of quick show-and-tells. Timing: 5 minutes.">
        <pre className="lesson-code compact"><code>{`<style>
  body {
    font-family: system-ui;
    max-width: 42rem;
    margin: 4rem auto;
  }
  h1 { color: #2563eb; }
  a { color: #7c3aed; }
</style>`}</code></pre>
      </ContentSlide>

      <ContentSlide eyebrow="Question" title="What changed—and what did not?" notes="Ask: Did CSS change the meaning of the heading? Did it change the pixels? Collect both answers. CSS did not replace HTML; it changed the browser’s presentation of the same structure. Timing: 2 minutes.">
        <div className="before-after-page"><div><p className="column-label">HTML + DEFAULTS</p><h3>My reading list</h3><p>Three things I want to learn.</p><a>Explore the web</a></div><div className="styled"><p className="column-label">HTML + CSS</p><h3>My reading list</h3><p>Three things I want to learn.</p><a>Explore the web</a></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Optional assignment" title="Recreate one landing-page hero" notes="Set this as an optional challenge, not a pixel-perfect contest. Ask learners to choose a familiar public landing page, take or use a screenshot only as a visual reference, and rebuild one hero section from scratch. Constraints: HTML and CSS only; no JavaScript; no AI; no copied source code; use their own wording or placeholder imagery rather than downloading brand assets. Deliverable: a single index.html plus a short note describing one layout decision and one CSS decision. Timing: 2 minutes to explain.">
        <div className="assignment-brief"><strong>Use a screenshot as reference.</strong><div><span>01 · One hero section</span><span>02 · HTML + CSS only</span><span>03 · No JavaScript · No AI · No copied code</span><span>04 · Explain two design decisions</span></div></div>
      </ContentSlide>

      <ContentSlide eyebrow="Connect the dots" title="Text becomes a page" notes="Return to the opening loop. A person requests a URL; a server responds with HTML and CSS; the browser creates a visual result. Keep JavaScript deliberately absent for now. Timing: 2 minutes.">
        <FlowDiagram steps={['URL request', 'HTML + CSS response', 'Browser reads & renders', 'Pixels']} stepByStep />
      </ContentSlide>

      <ContentSlide eyebrow="Look ahead" title="Where does interaction come from?" notes="Ask: We can describe and style a document. How does it change after a click? Leave the question open. Day 2 introduces the browser as a programmable environment and starts the route toward React. Timing: 1 minute.">
        <p className="statement">HTML gives structure.<br />CSS gives presentation.<br />Next: behaviour.</p>
      </ContentSlide>
    </DayDeck>
  )
}
