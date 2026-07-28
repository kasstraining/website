# kass.training

The marketing site for [Kass](https://kass.training), a training app for
coaches and their clients where everything is end-to-end encrypted.

## How it works

- [Eleventy](https://www.11ty.dev/) static site. Source in `src/`, built
  output committed to `docs/`.
- **Built locally, not by CI.** GitHub Pages serves `docs/` from `main`
  as-is — there is no Actions build. If you change `src/`, you must
  rebuild and commit `docs/` in the same commit.
- The `Sign in` links point at `https://home.kass.training`, where the
  app itself lives.

## Working on it

```sh
npm install
npm run serve   # local preview with live reload
npm run build   # regenerate docs/ — commit this
```

## DNS and hosting

- GitHub Pages, custom domain `kass.training` (the `src/CNAME`
  passthrough file keeps Pages configured).
- DNS is on DNSimple: `ALIAS kass.training → kasstraining.github.io`
  and `CNAME www → kasstraining.github.io`. The app boxes stay on
  `home.kass.training` (prod) and `*.dev.kass.training` (devbox).
