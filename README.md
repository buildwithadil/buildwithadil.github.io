# buildwithadil

Source for my personal website — a fast, statically-generated site built with a
modern React stack.

## Stack

- **React + TypeScript**
- **Vite** with `vite-react-ssg` for static site generation (pre-rendered HTML per
  route, so pages are fast and crawlable)
- **Tailwind CSS** for styling
- **MDX** for long-form content (case studies and writing)

## Getting started

```bash
npm install
npm run dev        # start the dev server
```

## Scripts

```bash
npm run build      # generate the static site into dist/
npm run preview    # preview the production build locally
npm run typecheck  # TypeScript checks
npm run lint       # ESLint
```

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages via GitHub
Actions (`.github/workflows/deploy.yml`).
