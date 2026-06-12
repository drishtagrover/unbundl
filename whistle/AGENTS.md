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
- No tests configured — no test framework, no test script in package.json
- No typecheck step (no TypeScript/tsconfig)
- Components are pure JSX: Navbar, Hero, DreamSmiles, Results
- Entrypoint: `index.html` → `src/main.jsx` → `App.jsx`
