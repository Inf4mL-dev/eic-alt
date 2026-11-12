# MomoInsure — EIC × ALT

Static site (no build step) for MomoInsure, a partnership between Enterprise Insurance (EIC) and ALT.

```
index.html                     # landing page (project root, loads at "/")
public/images/                 # put alt-logo.png here (see below)
src/
├── assets/
│   ├── css/shared.css         # design tokens + shared nav styles
│   ├── fonts/                 # Kawak / Effyra
│   └── js/site-nav.js         # EIC × ALT nav bar, injected on every page
└── pages/momoinsure.html      # the MomoInsure calculator + printable quote
```

## ALT logo
The ALT logo currently loads from `altsolutionsmicrocredit.com`. For reliability, save it as
`public/images/alt-logo.png` and update:
- `ALT_LOGO` in `src/assets/js/site-nav.js` (use `../../public/images/alt-logo.png` from pages, `public/images/alt-logo.png` from the root — or set a path per depth),
- the ALT `<img>` in the print-quote header of `src/pages/momoinsure.html`.

If a logo can't load, a text badge (EIC / ALT) is shown instead.
