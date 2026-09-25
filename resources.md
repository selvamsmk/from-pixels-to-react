# From Pixels to React — Resources

A single reference for the external learning resources and historical sources used across the course slides.

## Day 1 — HTML, CSS, and browser foundations

### Interactive practice

- [CSS Diner](https://flukeout.github.io/) — Practice CSS selectors.
- [Flexbox Froggy](https://flexboxfroggy.com/) — Game-based Flexbox practice.
- [Grid Garden](https://cssgridgarden.com/) — Game-based CSS Grid practice.
- [CSSBattle](https://cssbattle.dev/) — Recreate visual targets with HTML and CSS.
- [Codepip Games](https://codepip.com/games/) — Interactive HTML/CSS learning games.

### Reference and formal learning

- [MDN Web Docs](https://developer.mozilla.org/) — Primary reference for HTML, CSS, browser APIs, and web-platform concepts.
- [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development) — Structured HTML, CSS, JavaScript, accessibility, and responsive-design learning.
- [W3Schools](https://www.w3schools.com/) — Beginner-friendly explanations, examples, and exercises.
- [web.dev](https://web.dev/) — Modern guidance on HTML, CSS, accessibility, responsive design, and performance.

### Historical context

- [Smithsonian Lemelson Center — The Mother of All Demos](https://www.invention.si.edu/invention-stories/mother-all-demos)
- [Computer History Museum — The Xerox Alto](https://www.computerhistory.org/revolution/networking/19/381/2183)
- [Xerox Star User Interface (1982)](https://bitsavers.computerhistory.org/pdf/xerox/sdd/OSD-R8203_Xerox_Office_Systems_Technology_Nov82.pdf)
- [Computer History Museum — Apple Macintosh timeline](https://www.computerhistory.org/timeline/1984/)
- [CERN — A short history of the Web](https://home.cern/science/computing/the-birth-of-the-web/short-history-web/)

## Day 2 — JavaScript

### Documentation & reference

#### [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

Recommended starting reference for JavaScript. Covers grammar, control flow, functions, objects, classes, promises, modules, and other core language concepts.

#### [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

Use when looking up the exact behaviour of JavaScript constructs such as `Array`, `Map`, `Promise`, operators, statements, functions, and classes.

#### [ECMAScript Specification](https://tc39.es/ecma262/)

The formal specification for ECMAScript, the standardized language commonly known as JavaScript. Use it later when an exact language definition matters; it is not beginner learning material.

#### [TC39](https://tc39.es/)

The committee responsible for developing and evolving ECMAScript. Useful for understanding how new JavaScript features are proposed and standardized.

### Interactive learning & practice

#### [JavaScript.info](https://javascript.info/)

A comprehensive modern JavaScript tutorial, from language fundamentals through browser APIs, asynchronous JavaScript, and modules.

#### [JS Challenger](https://www.jschallenger.com/)

Short, focused exercises where learners write JavaScript to solve specific problems. Good for reinforcing concepts immediately after learning them.

#### [Exercism — JavaScript](https://exercism.org/tracks/javascript)

A collection of JavaScript programming exercises, useful for moving beyond syntax and practising clear solutions to real programming problems.

#### [Codewars](https://www.codewars.com/)

Community-created coding challenges. Start with easier JavaScript kata and progress gradually. It is a problem-solving platform: highly compressed or clever solutions are not automatically good production JavaScript.

### Browser APIs used in Day 2

- [MDN — JavaScript glossary and history](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)
- [MDN — Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN — `Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

### Suggested Day 2 learning path

```text
JavaScript syntax and values
→ variables (let, const)
→ primitive vs reference values
→ operators
→ conditionals
→ loops
→ functions
→ arrays
→ objects
→ array methods (map, filter, reduce)
→ scope and closures
→ DOM interaction
→ events
→ asynchronous JavaScript
→ Promises
→ async / await
→ modules
```

- **Learning a concept** → Day 2 material or JavaScript.info
- **Looking something up** → MDN
- **Practising a concept** → JS Challenger or Exercism
- **Practising problem solving** → Codewars
- **Understanding exact language semantics** → ECMAScript Specification
- **Understanding upcoming JavaScript features** → TC39

### Historical context

- [Brendan Eich — dotJS 2017 slides](https://brendaneich.com/wp-content/uploads/2017/12/dotJS-2017.pdf)
- [Ecma International — ECMA-262 history](https://262.ecma-international.org/5.1/)
- [jQuery Blog — Ten Years of jQuery and Beyond](https://blog.jquery.com/2016/01/14/ten-years-of-jquery-and-beyond/)
- [Backbone.js release history](https://backbonejs.org/)
- [Google Developers Blog — Better Web Templating with AngularJS 1.0](https://developers.googleblog.com/better-web-templating-with-angularjs-10/)
- [React versions and initial public release](https://react.dev/versions)

## Day 3 — Why React?

### Modern React learning

- [React Learn](https://react.dev/learn) — Recommended starting point for modern React: components, JSX, props, state, events, and sharing state.
- [Thinking in React](https://react.dev/learn/thinking-in-react) — A practical guide to breaking an interface into components and finding the right state.
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) — Explains why JSX is JavaScript syntax, rather than HTML.
- [State: A Component’s Memory](https://react.dev/learn/state-a-components-memory) — The best follow-up to Day 3’s counter example and useState.
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) — Use this after the session to understand Effects as synchronization with external systems.

### Reference

- [React API Reference](https://react.dev/reference/react) — Look up exact behavior of React APIs as needed.
- [Component](https://react.dev/reference/react/Component) — Reference for class components and lifecycle methods; useful for understanding older React code.
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state) — Explains the component identity and position ideas introduced in the reconciliation discussion.
- [Reconciliation (legacy documentation)](https://legacy.reactjs.org/docs/reconciliation.html) — Historical reference for the high-level reconciliation model used in the session.

### Historical context

- [React versions](https://react.dev/versions) — Official version history, including React’s May 29, 2013 open-source release and the modern release timeline.
- [React acknowledgements](https://react.dev/community/acknowledgements) — Credits Jordan Walke as React’s original creator.
- [Why did we build React? (2013)](https://legacy.reactjs.org/blog/2013/06/05/why-react.html) — The original public rationale for React’s programming model.
- [React v16.8: The One With Hooks](https://legacy.reactjs.org/blog/2019/02/06/react-v16.8.0.html) — Official Hooks release announcement.

### Suggested Day 3 learning path

    components + JSX
    → props
    → component state
    → events
    → rendering from state
    → component identity
    → Effects and external synchronization

- **Learning the modern model** → React Learn
- **Understanding the counter** → State: A Component’s Memory
- **Looking up APIs** → React API Reference
- **Reading class-based React code** → Component reference
- **Understanding React’s history** → Versions and the original React posts

## Days 4–5

No external learning resources are currently listed in these slides. Add new course resources here as later days are developed.
