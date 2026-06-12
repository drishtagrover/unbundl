# whistle — AGENTS.md

## Stack
- **React 19** + **Vite 8** + **JSX** (no TypeScript)
- CSS in `src/cssFiles/` (separate from components in `src/components/`)
- ESLint v10 with **flat config** (`eslint.config.js`)

## Commands
| Command | Script |
|---------|--------|
| dev | `npm run dev` |
| build | `npm run build` |
| lint | `npm run lint` (runs `eslint .`) |
| preview | `npm run preview` |

## Conventions
- No tests, no typecheck, no formatter configured
- Components are pure JSX in `src/components/`, CSS in `src/cssFiles/`
- Entrypoint: `index.html` → `src/main.jsx` → `App.jsx`
- App renders `Navbar → Hero (→ ClinicBanner) → DreamSmiles → Results → Testimonials`
- CSS custom properties (colors, font) defined in `src/index.css`
- Images imported from `src/assets/` with relative imports
- Static fetch data served from `public/data/` for async-loaded components
