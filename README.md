# Sky Stay Travel

A landing page for an invented travel-concierge company: one named human decides your
flight and your hotel together, paid only by an annual member subscription, so the
recommendation is the one they actually believe in.

**Sky Stay Travel is not a real company.** Every fare, flight number, fare basis, hold
window, hotel rate code, price, member count, date and name on the page — Ines Halvorsen
included — is invented demonstration material, written at production fidelity so the page
can be judged as a page. None of it is true, nothing shown is for sale, and the colophon
at the foot of the page says so.

## The design

A two-colour letterpress airline timetable book. Warm bible-paper `#FAF8F4` and a second
toned stock `#F2EEE6`, black ink `#16150F`, and exactly one second ink, deep green
`#1F4B3F`. Two inks is a hard constraint: there is no third colour anywhere in the system,
and every photograph is duotoned into the same two inks so it reads as printed on the same
press.

Type is Libre Caslon Display for headlines, Libre Caslon Text for prose, and Archivo for
every label, legend, control and tabular figure. The fare lattice is measured in `ch` and
never reflows into cards — narrow screens scale the cell instead.

## The signature interaction

`components/Resolve.tsx`. A field of 130 routings is read, struck out row by row on its own
uneven schedule, and reduced to one decided line while the sheet itself takes the second ink.
A registered `@property <integer>` counts 406 routings down to 1 as you scroll.

It is driven entirely by **native CSS scroll-driven animation** — `view-timeline` plus
per-row `animation-range` — so it runs on the compositor with no `requestAnimationFrame`
loop, no scroll listener and no main-thread work, with 130 rows animating at once.

Everything degrades honestly:

- No `animation-timeline` support → every row stays fully legible, the decided line is
  already marked, and the 360svh section collapses to auto height.
- `prefers-reduced-motion: reduce` → the same static state. Zero text is hidden by motion.

## Running it

```bash
npm install && npm run dev
```

```bash
npm run build
```

`output: "export"` writes a fully static site to `out/`. Set `BASE_PATH=/skystay` when
building for a GitHub Pages project site.

## Verification scripts

| Script | What it proves |
| --- | --- |
| `node scripts/capture.mjs` | Captures desktop, mobile, per-section and five sampled frames of the scroll animation into `.impeccable/review/`. Entrance motion is settled first, so a half-played reveal is never mistaken for a missing element. |
| `node scripts/audit.mjs` | No horizontal overflow and no console errors at 390 / 768 / 1280 / 1440 / 1920. |
| `node scripts/a11y.mjs` | Under reduced motion no text falls below 0.25 opacity, and every focusable control has a visible focus ring. |

## What to replace before any real use

Everything in `lib/content.ts`, and the three photographs in `public/plates/`
(Unsplash, credited on the page).
