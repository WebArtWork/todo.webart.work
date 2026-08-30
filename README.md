# ToDo (Angular 22)

Source workspace for **ToDo** (`todo.webart.work`) — a project/task management
app aiming to sit between Trello (lightweight boards) and Jira (structured
issue tracking). Planned core entities: **tags, projects, tasks, sprints, and
releases** (more to follow as scope firms up).

This is a fresh fork of the `ngx-prime-default` Angular starter (see
`ngx-prime-default.webart.work`), so most of the plumbing below — auth,
profile, settings, admin — is inherited template scaffolding rather than
ToDo-specific features. Those still need to be built.

It contains:

- an **app template** under `src/` — a browser-only SPA built with standalone
  components, signals-first state, native control flow, and the WAW platform
  services (`@wawjs/*`). This is the actual product.
- a supporting Angular app under `projects/devkit/` — its own
  standalone/OnPush/signals project with its own `ng serve`/`ng build` target
  (not part of the deployed product, but part of this workspace):
  - `/` (home) — a fuller example site (dashboards, ecommerce, projects,
    applications, auth, errors) built entirely from ngx-prime components
  - `/uikit` — a full ngx-prime component reference and a live theme
    configurator ("Design Lab") for tuning the app template's design tokens
  - `/translations` — a small tool for browsing and editing the app
    template's actual `src/i18n/*.json` translation files

See [AGENTS.md](AGENTS.md) for further conventions.

## Prerequisites

- Node `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm 8+ (Angular CLI 22 is
  provided locally via devDependencies)

## Getting Started

```sh
npm install   # install dependencies
npm start     # serve on http://localhost:4200 with proxy.conf.json
```

Environments live in `src/environments/`:

- `environment.ts` for local development (extends `environment.prod.ts`)
- `environment.prod.ts` for production builds (API URL, meta tags, languages,
  defaults). Default interface language is Ukrainian (`defaultLanguageCode:
  'ua'`).

## Scripts

- `npm start` — dev server with proxying to the configured API URL
  (`proxy.conf.json`)
- `npm run build` — production app build to `dist/`, followed by static SEO
  generation (`tools/seo/generate-static-seo.mjs`)
- `npm run start:devkit` / `npm run build:devkit` — serve/build
  `projects/devkit` (serves on port 4310; routes: `/` showcase, `/uikit`
  component reference, `/translations` translation editor)

`devkit` is also directly reachable via the Angular CLI itself if you'd
rather not go through the npm script aliases, e.g. `ng serve devkit` or
`ng build devkit`.

## Project Structure (key paths)

- `src/index.html` — document title, meta/OG tags, favicon, canonical URL —
  the SEO/branding surface for the whole app
- `src/app/app.config.ts` — root providers (zoneless change detection, WAW
  services, TinyMCE, router)
- `src/app/app.routes.ts` — route map for guest, user, and admin areas, each
  carrying a `meta.title` used by `MetaGuard` to set the document title per
  route
- `src/app/app.formcomponents.ts` — project-specific dynamic form components
- `src/app/layouts/` — layout shells for guest/user routes
- `src/app/pages/` — routed pages: `landing`, `sign`, `profile`, `settings`
  (inherited scaffolding — no project/task/sprint/release pages exist yet)
- `src/environments/` — API / meta / language configuration
- `src/i18n/en.json` / `src/i18n/ua.json` — interface translations (served at
  `/i18n`), read by `@wawjs/ngx-translate`. Each file is an array of strings,
  one per language, positionally aligned — `en.json[i]` is both the English
  source text and the lookup key used everywhere in `src/app` (e.g.
  `translateService.translate('Settings')`), and `ua.json[i]` is its
  translation. `projects/devkit`'s `/translations` route is the tool for
  browsing/editing these.
- `projects/devkit/` — merged showcase + uikit + translator app:
  - `src/app/pages/`, `src/app/layout/`, `src/app/shared/` (root routes, `/`)
    — a fuller example app built from real ngx-prime components with
    concrete demo data
  - `src/app/uikit/` (routes under `/uikit`) — ngx-prime component reference
    plus a live theme configurator at `/uikit/design-lab`
  - `src/app/translator/` (route `/translations`) — browses
    `src/i18n/en.json`/`ua.json` in a table and downloads an updated JSON per
    language to drop back over the real file (no backend — can't write files
    directly)
  - `projects/devkit/ROADMAP.md` — status and design notes for the
    uikit-derived component reference

## Development Notes

- Components are standalone and signals-first; favor `computed` / `signal` /
  `effect`. Angular 22 uses OnPush by default, so do not set
  `changeDetection` explicitly.
- WAW services power guards, CRUD helpers, store/http access, and meta tags.
  Update `environment.image` / `src/index.html` together when changing
  branding, and keep per-route `meta.title` in `app.routes.ts` in sync.
- Dynamic form templates must be registered through
  `src/app/app.formcomponents.ts` so schemas can reference them by name.

## Component Structure

Keep component classes consistent in this order:

1. Injections (via `inject()`)
2. Inputs / outputs / view queries
3. Variables (readonly/public first, then private)
4. Constructor (only when needed)
5. Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
6. Functions (public, then private)

Private variables and functions start with an underscore (`_`).

## Roadmap

Not yet built — tracked here until there's a dedicated roadmap doc:

- Tags
- Projects
- Tasks
- Sprints
- Releases

## Contributing

1. Create a feature branch.
2. Keep changes aligned with the standalone + signals pattern.
3. Open a pull request for review.
