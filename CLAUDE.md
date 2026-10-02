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

**Design:** the "Crow Sheet" look: black ink on light drafting paper, each section framed like a technical drawing sheet, with a crow as the logo. Design tokens (colours, fonts, `--b` border) are CSS variables in [src/index.css](src/index.css). Fonts come from Google Fonts in [public/index.html](public/index.html). There are no CSS frameworks or CDN scripts.

**Routing** ([src/App.js](src/App.js)): `react-router-dom` v5. The whole site is one page, `Home_comp`, rendered for all of these paths:
- `/`
- `/about`, `/skill`, `/projects`, `/journey`, `/learning`, `/contact`: scroll to that section (map in `SECTION_BY_PATH` in `Home_comp`). The nav links use these paths.
- `/portfolio/:id`: opens that project's overlay (`ProjectSheet_comp`). Closing it replaces the URL, so Back doesn't reopen it.

Anything else renders `Error404_comp`. `Header_comp` and `Footer_comp` wrap every route; `Feathers_comp` (drifting feathers) sits on top in a fixed layer; its gliding crow is disabled with `SHOW_GLIDER = false` for performance.

**Components** (`src/<Name>_comp/`, class components, one CSS file each):
- Page sections, in order: `SheetHero_comp`, `SheetAbout_comp`, `SheetSkills_comp`, `SheetWork_comp`, `SheetJourney_comp`, `SheetLearning_comp`, `SheetContact_comp`.
- Shared pieces: `SectionHead_comp` (numbered header bar), `TitleBlock_comp` (the drawing title block under the hero and in the footer).
- Crow artwork is in [src/crows.js](src/crows.js): functions return SVG strings, rendered with its `<Art>` component.
- Fade-in on scroll: add class `rv` to an element; `Home_comp` adds `in` when it scrolls into view.

**Content** lives in [src/appData.js](src/appData.js):
- `Data.Projects`: each project has `id` (UUID, used in `/portfolio/:id`), `Name`, `MinDiscription`, `Discription`, `Images`, `Tools`, `Features`, `YoutubeVidId`, `DownloadLink`, `SimilarProjectsIds`, `IsActive`. The misspelled keys are intentional and used throughout the code. **Do not rename them.** Only `IsActive` projects are shown. Project images are imported at the top of the file.
- `Data.TopProjects`: IDs marked "★ featured".
- `Profile`, `AboutFacts`, `SkillGroups`, `SkillLevels`, `Experience`, `Education`, `Social`: all other text on the site, from the CV.
- **SEO copies of the content** must be kept in sync with `appData.js` when the CV or projects change:
  - [public/index.html](public/index.html): the title, description, share tags, the JSON-LD `Person` data (skills, `sameAs` profile links), and a plain-HTML version of the page inside `#root` (read by crawlers that don't run JavaScript; React replaces it on load).
  - [public/sitemap.xml](public/sitemap.xml): home plus one `/portfolio/<id>` URL per project.
  - Per-project titles/descriptions and the 404 `noindex` are set at runtime by [src/seo.js](src/seo.js).
- The live site is `https://www.omaramen.com` (the bare domain redirects there); use the `www` form in canonical URLs.
- Icons in `public/`: `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `logo192.png`, `logo512.png`, `maskable-512.png` (the crow logo). The share image is [public/og-image.png](public/og-image.png).

**Backend calls** (to the Render backend, see "Related project"):
- `Header_comp` pings `GET /api/ping` on load and, if it answers `pinged`, records the visit with `POST /api/traffic/record`. This runs in the background; nothing waits for it.
- `SheetContact_comp` sends `POST /api/sendmail?name=&mail=&subject=&message=` (URL-encoded query string).

**Leftovers:** Redux ([src/store/](src/store/)) is still wired up in `src/index.js` but no component uses it. `redux`, `react-redux` and `react-helmet` are unused dependencies. Ask before removing them.

## Conventions

- New components follow the `src/<Name>_comp/` pattern.
- Keep plain CSS with the tokens in `src/index.css`. Don't introduce Bootstrap, Tailwind, styled-components or another UI library unless I ask.
- Don't migrate to TypeScript, Vite, React 18, Router v6, hooks or function components on your own. Suggest it, then wait for my OK.
- **Don't add new npm dependencies without asking.**
- `axios` is used for the backend calls. Ask before removing the unused Redux code or dependencies.

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
