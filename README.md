# Whistle - Invisible Aligners Landing Page

A single-page marketing and lead-generation website for Whistle, a clear aligners brand targeting the Indian market. Visitors can learn about the product, check pricing, view before/after results, and submit their information for a free consultation.

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 8** as build tool and dev server
- **ESLint v10** with flat config (eslint.config.js)
- **Plain CSS** organized in separate files per component

## Project Structure

whistle/
  index.html                     HTML entry point
  vite.config.js                 Vite configuration with React plugin
  eslint.config.js               Flat ESLint config with react-hooks and react-refresh
  package.json                   Scripts and dependencies
  src/
    main.jsx                     ReactDOM.createRoot entry
    App.jsx                      Root component composing all sections
    App.css                      Empty (reserved)
    index.css                    Global reset, CSS variables, base element styles
    components/
      Navbar.jsx                 Top navigation bar
      Hero.jsx                   Hero section with announcement bar, headline, image, form
      ClinicBanner.jsx           Promotional card for Clove Dental partnership
      DreamSmiles.jsx            Marquee strip and benefits section with pricing card
      Results.jsx                Before/after treatment case studies grid
    cssFiles/
      Navbar.css
      Hero.css
      ClinicBanner.css
      DreamSmiles.css
      Results.css
    assets/                      Images, icons, and SVGs used across components

## Page Sections

### Navbar
Sticky navigation bar containing the Whistle brand logo on the left and a round purple phone icon button on the right.

### Hero
Three-part section at the top of the page:
- **Announcement bar** - Green background strip with promotional pricing (strikethrough original price in lighter weight, current price, urgency text)
- **Purple section** - Background color #EFF3FF, full viewport width, 280px tall. Uses a flex container (max-width 1200px, centered) with text on the left (55%) and a girl image on the right (45%). The image fills the right side using object-fit cover, anchored to the top.
- **Form block** - White background below the purple section. Contains a question ("Do you have Teeth Gaps or Crooked Teeth?"), Yes/No radio button group, Full Name input, Mobile Number input (with +91 prefix), "Book a Free Scan" submit button, and a consent checkbox. All inputs and the button are 42px tall and aligned in one row.

### ClinicBanner
A card with light blue background (#EFF6FF) and dashed blue border, set inside a max-width 1060px centered container. Contains text promoting free 3D teeth scans at Clove Dental clinics, the Clove logo, and a "Find Clinic" button with a chevron toggle.

### DreamSmiles
Two sub-sections:
- **Marquee strip** - Horizontal scrolling gradient background (#CDEDCD to #CAE6E4 to #C7E1F0) with repeating offer items. Each item has the first 3 words in bold and the rest in normal weight.
- **Benefits section** - Two-column grid layout. Left column has the headline "Dream smiles achieved secretly", body copy about the product, and checkmark lists. Right column has a pricing card showing Whistle Aligners at Rs 47,999 with EMI info, benefit cards with hover animations (lift, purple shadow, border color change), and a "Learn More" link.

### Results
Section with the heading "Results You'll Love" and a four-column grid of case study cards. Each card shows before and after photos side by side with labels, followed by Concern and Treatment Duration info. Cards have a light blue background (#F0F9FF) and lift on hover with a box-shadow transition.

# Testimonials Component

## What changed

**Added**

| File | Purpose |
|---|---|
| `public/data/testimonials.json` | Mock data — 4 testimonials with name, location, rating, quote, treatmentType |
| `src/components/Testimonials.jsx` | New component with loading, error, and success states |
| `src/cssFiles/Testimonials.css` | Component styles |

**Modified**

| File | Change |
|---|---|
| `src/App.jsx` | Imported and rendered Testimonials after DreamSmiles |
| `README.md` | Added data note explaining local JSON approach |
| `AGENTS.md` | Updated conventions — component chain, CSS variables, image imports, public/data pattern |

## Data source

Local JSON instead of a public API. Fake Store, DummyJSON, and JSONPlaceholder don't map to dental testimonial content.

## Component states

**Loading** — spinner with "Loading testimonials..." text

**Error** — "Unable to load testimonials. Please try again later."

**Success** — 4-column card grid, each card has star rating, quote, name, location, treatment badge

## Responsive

| Breakpoint | Columns |
|---|---|
| > 900px | 4 |
| 900px | 2 |
| 500px | 1 |
## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start Vite development server with HMR |
| npm run build | Production build to dist/ |
| npm run lint | Run ESLint across the project |
| npm run preview | Preview the production build locally |

## Styling Conventions

- Component CSS files live in src/cssFiles/ separate from component JSX files
- CSS variables for colors and fonts are defined in src/index.css under :root
- No CSS-in-JS or CSS modules - plain CSS files imported directly into components
- Hover animations use CSS transitions for transform, box-shadow, and border-color
- Responsive breakpoints at 900px, 768px, 640px, and 500px

## Notes

- No test framework or test scripts are configured
- No TypeScript - the project uses plain JSX throughout
- Images are imported as module imports and handled by Vite's asset pipeline
- Small images (under 4KB) are automatically inlined as base64 data URLs by Vite
