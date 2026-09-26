# sgflores.github.io

Personal engineering portfolio — Vue 3 + Vite + Vue Router + GitHub Pages.

Live: https://sgflores.github.io/

## Automatic deploy

Every push to `main` runs `.github/workflows/deploy.yml`:

```
push → npm ci → npm run build → dist/ → GitHub Pages
```

### One-time setup (required)

1. Open https://github.com/sgflores/sgflores.github.io/settings/pages  
2. Under **Build and deployment → Source**, choose **GitHub Actions**  
   (not “Deploy from a branch”)  
3. Push to `main`, or open **Actions → Deploy to GitHub Pages → Run workflow**

If Source stays on “Deploy from a branch”, GitHub serves the Vue **source** and the site stays blank.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build    # writes dist/ + copies index.html → 404.html (SPA routes)
npm run preview
```

`vite.config.js` uses `base: '/'` for this user site.

## Content

- Copy: `src/content/`
- Resume: `public/Resume.pdf`
- Photo: `public/serolf-flores.webp`
