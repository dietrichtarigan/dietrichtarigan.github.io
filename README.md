# Dietrich Tarigan Portfolio

Vite + React static site for showcasing projects, skills, and contact info.

## Local development

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

## Deploying to GitHub Pages

1. Push to `main`. The workflow in `.github/workflows/deploy.yml` will:
   - Install dependencies
   - Run `npm run build`
   - Publish the `dist` folder to the `gh-pages` branch using `peaceiris/actions-gh-pages`.
2. In the GitHub repository, open **Settings → Pages** and set **Source** to `gh-pages` (branch) and `/` (root).
3. If using a custom domain, add it under **Custom domain** and keep `public/CNAME` in the repo so it ships with each build.
4. TLS provisioning for a new or changed custom domain can take up to ~15 minutes. During that window the site might show warnings until the certificate is issued.

After the certificate is ready, `dietrichtarigan.me` will serve the compiled `dist` output instead of the raw Vite source files, eliminating MIME-type errors in the browser console.
