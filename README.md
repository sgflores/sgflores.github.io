# sgflores.github.io

Personal engineering portfolio for **Serolf Flores** — Vue 3 + Vite + Vue Router.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes to `dist/` and copies `index.html` → `404.html` so GitHub Pages can serve SPA deep links (`/work/jevly`, `/engineering/...`).

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main`/`master` and deploys via GitHub Pages.

In the repo settings:

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions
2. Push to `main` (or run the workflow manually)

Site URL: https://sgflores.github.io/

## Content

Copy lives in `src/content/`. Resume: `public/Resume.pdf`. Photo: `public/serolf-flores.webp`.
