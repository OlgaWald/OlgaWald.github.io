# Olga Waldschmidt Portfolio

Modern React rewrite of the original exported static homepage.

## Stack

- React + Vite
- Tailwind CSS v4
- ESLint (scoped to `src/`)

## Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

`npm run preview` serves the built site locally so you can validate what GitHub Pages will publish.

## GitHub Pages

This project is configured to deploy with GitHub Actions via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. In GitHub repository settings, open Pages.
2. Set Source to GitHub Actions.
3. Push to `main`.
4. The workflow builds Vite output from `dist` and deploys it.

Custom domain stays active because `public/CNAME` is included in the build artifact.

## Assets and Domain

- Portfolio images are served from `public/images`.
- Custom domain is preserved via `public/CNAME`.

## Notes

- The active app entry is `src/App.jsx`.
