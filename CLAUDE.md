# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About me (the owner)

- I'm Omar, a C# developer at AlliedBIM. I build Revit add-ins (Revit API, WPF/MVVM, .NET) and web tools on Autodesk Platform Services (APS/Forge).
- This site is my personal portfolio (omaramen.com). It showcases AEC/BIM work: Revit API, Dynamo, Navisworks, Autodesk Forge/APS, Unity and Three.js.
- I'm strong in C#/.NET and less so in React/JS. When you make a non-obvious JS/React choice, briefly explain *why*.
- I work on **Windows** (PowerShell, VS Code), so use Windows-friendly commands and paths.

## Project

Create React App project (`react-scripts` 4, React 17, plain JS). There is no backend in this repo; see "Related project" below.

## Commands

- `npm start` runs the dev server on http://localhost:3000.
- `npm run build` creates a production build in `build/`.
- `npm test` runs Jest in watch mode.
  - Single run: `CI=true npm test`. In PowerShell: `$env:CI="true"; npm test`.
  - One file: `npm test -- src/App.test.js`.
  - Tests by name: add `-t "<name>"`.
- There is no separate lint script. ESLint (`react-app` config) runs inside `start` and `build` and reports to the console.

`src/App.test.js` is the untouched CRA placeholder. It looks for "learn react", so it fails. It is not a real test suite.

**Newer Node versions (Vercel uses Node 24):** CRA 4 needs two workarounds in `package.json`. Keep both.
- `start` and `build` run `react-scripts --openssl-legacy-provider ...`. Otherwise webpack 4 fails with `ERR_OSSL_EVP_UNSUPPORTED`. react-scripts passes the flag to Node itself, so this works on Windows without `cross-env`.
- `overrides` pins `postcss-safe-parser`'s nested `postcss` to `^8.4.31`. The 8.2.6 in the old lockfile fails with `ERR_PACKAGE_PATH_NOT_EXPORTED`.

## Architecture

**Routing** ([src/App.js](src/App.js)): `react-router-dom` v5 `<Switch>` with these routes, plus a catch-all `Error404_comp`:
- `/`
- `/skill`
- `/portfolio/:id`
- `/about`
- `/projects`

`Header_comp` and `Footer_comp` wrap every route.

**Navigation via Redux:** Components outside `<Route>` (Header, Footer, cards) don't get router props. To work around this, each page component stores its `this.props.history` and `this.props.match` in Redux on mount, using `setHistoryObj` and `setMatchObj`. Other components then navigate with `this.props.state.history.push(...)`.
- Keep this pattern when adding pages.
- If a page doesn't register history, `state.history` stays `false` and breaks the components that rely on it.

**Redux** ([src/store/](src/store/)):
- One flat reducer, created with `createStore` and Redux DevTools.
- Components use `connect`, and `mapStateToProps` returns `{ state }`, so they read `this.props.state.<field>`.
- The cart, books and products actions and fields are leftovers from another project and are unused.

**Content is split across two places:**
- **Projects** live in [src/appData.js](src/appData.js) as `Data.Projects`.
  - Each project has `id`, a UUID string used in `/portfolio/:id`.
  - Other fields: `Name`, `MinDiscription`, `Discription`, `Images`, `Tools`, `Features`, `YoutubeVidId`, `DownloadLink`, `SimilarProjectsIds`, `IsActive`.
  - The misspelled keys are intentional and used throughout the code. **Do not rename them.**
  - `Data.TopProjects` lists the IDs featured on the home page.
  - Project images are imported at the top of this file.
- **Skills** are *not* in `appData.js`; `Data.Skills` is empty. They are hardcoded as `<SkillsBtn_comp>` props in [src/Skills_comp/Skills_comp.js](src/Skills_comp/Skills_comp.js).
  - Image paths are strings, for example `'media/100x100HTML.png'`, resolved by a dynamic `require(\`../${path}\`)`.
  - So every skill needs matching `src/media/100x100<Name>.png` and `400x500<Name>.png` files.

**Components:**
- Each component lives in `src/<Name>_comp/` with `<Name>_comp.js` and `<Name>_comp.css`.
- Most are class components.
- Markup uses `class=` rather than `className` in many places. Don't mass-convert it unless asked.

**Global scripts from CDN** ([public/index.html](public/index.html)):
- These are loaded as globals, not npm packages: Bootstrap 4.5 (CSS and JS), jQuery, Popper, Chart.js 2.9, typed.js, jQuery Waypoints and Font Awesome.
- Some components call them directly without importing, for example `new Chart(...)` in `Skills_topPage_comp` and `new Typed(...)` in `About_Page_comp`.
- Don't add npm versions of these alongside the CDN ones.

## Conventions

- New components follow the `src/<Name>_comp/` pattern.
- Keep plain CSS and Bootstrap 4. Don't introduce Tailwind, styled-components or another UI library unless I ask.
- Don't migrate to TypeScript, Vite, React 18, Router v6, hooks or function components on your own. Suggest it, then wait for my OK.
- **Don't add new npm dependencies without asking.**
- `axios` is in dependencies but unused. Ask before removing it or the leftover cart/books Redux code.

## Related project

- A separate Node.js/Express backend (repo "mongose") is deployed on Render. It handles contact-form email and visitor traffic recording, and it is **not** in this repo.
- If a change touches the contact form or traffic calls, tell me what the backend needs rather than guessing its API.
- Never put secrets (API keys, SMTP or app passwords) in frontend code. Everything in this bundle is public.

## How I want you to work

- For anything bigger than a small fix, **show a short plan first** and wait for my OK before editing.
- Make the smallest change that solves the problem. Don't refactor unrelated code in the same change.
- After changes, run `npm run build` to confirm it still compiles, and fix any errors you introduced.
- When done, summarize **which files changed, what changed and why**, in a clearly separated block per file.
- If something is ambiguous (design, wording, details about my projects), ask. Don't invent project content.
