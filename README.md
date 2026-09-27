# Sarah Chang Portfolio

An interactive desktop-style portfolio built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/client/`.

## GitHub Pages

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the Vite application, and deploys `dist/client/` to GitHub Pages.

Because this repository is named `sarahsaladchang`, the production base path is `/sarahsaladchang/`. Local development continues to use `/`.

In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions** before the first deployment.

