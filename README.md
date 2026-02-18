# Author Profile

Vue 3 author profile page built with **Vue 3**, **Vite**, **Tailwind CSS**, and **shadcn-vue** style components. Data is loaded from `src/data/cv-data.json`.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. On push to `main`, the workflow builds and deploys to GitHub Pages.

If your repo name is not `profile`, update `base` in `vite.config.ts` to match your repo (e.g. `base: '/your-repo-name/'`) and set `GITHUB_ACTIONS` when building in CI so assets load correctly.

## Stack

- Vue 3 (Composition API)
- Vite
- TypeScript
- Tailwind CSS v4
- shadcn-style UI (radix-vue, CVA, tailwind-merge)
- [Vue Bits](https://vue-bits.dev/)–style animations via [motion-v](https://www.npmjs.com/package/motion-v) (SplitText, ScrollReveal in `src/components/vue-bits/`)
