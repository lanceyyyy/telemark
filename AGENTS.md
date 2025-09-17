# Repository Guidelines

## Project Structure & Module Organization
- Core app sits in `src`; route screens live in `src/pages` and consume UI from `src/components`.
- Share pure helpers in `src/lib` so Vite can tree-shake; keep React-specific logic inside components or hooks.
- Store reusable hooks in `src/hooks`; prefer wrapping React Query, form state, or shared side effects there.
- Importable assets belong in `src/assets`, while static files served untouched live under `public`.
- Tailwind tokens and shadcn presets are managed in `tailwind.config.ts` and `components.json`; update them instead of hard-coding styles.

## Build, Test, and Development Commands
- `npm install` installs dependencies; keep `package-lock.json` as the source of truth and ignore `bun.lockb` unless Lovable regenerates it.
- `npm run dev` starts Vite (localhost:5173) with HMR.
- `npm run build` outputs the production bundle to `dist`; use `npm run build:dev` for debugging builds.
- `npm run preview` serves the built assets for a production smoke test.
- `npm run lint` runs ESLint; all warnings must be resolved before review.

## Coding Style & Naming Conventions
- Write TypeScript (`.ts`/`.tsx`) with explicit export types and 2-space indentation; rely on ESLint autofix before committing.
- Components are PascalCase, hooks are `useSomething`, and utilities stay camelCase.
- Use Tailwind utilities plus the `cn` helper from `src/lib/utils.ts`; avoid bespoke CSS unless Tailwind cannot express the layout.

## Testing Guidelines
- No automated tests ship yet, so pair `npm run lint` with manual verification in `npm run dev`.
- New tests should adopt Vitest with React Testing Library; colocate files as `ComponentName.test.tsx` and add an npm script when introduced.
- Document the manual QA steps (viewport, form edge cases, accessibility checks) in each PR until automation exists.

## Commit & Pull Request Guidelines
- Commit subjects stay in the imperative mood (`Create Telemark Trade AS website`) and under ~72 characters; reserve tags like `[skip lovable]` for automation overrides.
- Separate dependency bumps from feature work.
- PRs must summarize changes, list new commands or env vars, and attach UI screenshots or recordings when visuals change.
- Run `npm run lint` and `npm run build` before requesting review and state the results.
