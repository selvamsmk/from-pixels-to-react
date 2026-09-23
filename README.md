# From Pixels to React

A fast-paced introduction to UI engineering, web fundamentals, and React — from pixels and GUI systems to modern component-based UI.

## Run locally

This is a Vite application and must be opened through a local web server. Do not double-click the source `index.html`; browsers block its TypeScript module loaded from a `file://` URL.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal (normally `http://localhost:5173`).

The course home is available at `/`; each standalone day is available at `/day-1/` through `/day-5/`.

## Preview the production build

```bash
npm run build
npm run preview
```

Open the preview address printed in the terminal. The production files are generated in `dist/`; deploy that directory to any static web host. It includes the course home and five independently addressable presentations:

```text
dist/
├── index.html
├── day-1/index.html
├── day-2/index.html
├── day-3/index.html
├── day-4/index.html
└── day-5/index.html
```

## Create a file you can double-click

```bash
npm run build:file
```

This uses `vite-plugin-singlefile` to create one self-contained HTML presentation per day. Each file has its compiled JavaScript and CSS embedded and can be opened directly in a browser without a local server:

```text
dist/day-1/index.html
dist/day-2/index.html
dist/day-3/index.html
dist/day-4/index.html
dist/day-5/index.html
```

Use the normal `npm run build` output when deploying to a web host.
