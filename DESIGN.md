---
name: Sky Stay Travel
description: A two-ink letterpress timetable book — black ink and one deep green on warm paper stock, with a ch-measured fare lattice and one large scroll-driven resolution.
colors:
  paper: "#faf8f4"
  paper-toned: "#f2eee6"
  paper-deep: "#eae4d8"
  ink: "#16150f"
  ink-90: "#16150fe6"
  ink-70: "#16150fb3"
  ink-55: "#16150f9c"
  ink-quiet: "#16150f9c"
  ink-35: "#16150f59"
  ink-20: "#16150f33"
  ink-12: "#16150f1f"
  ink-07: "#16150f12"
  green: "#1f4b3f"
  green-76: "#1f4b3fc2"
  green-55: "#1f4b3f8c"
  green-30: "#1f4b3f4d"
  green-08: "#1f4b3f14"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(3.1rem, 10.4vw, 9.25rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 6.4vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.85rem, 3.6vw, 3.15rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.022em"
  body:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1.15vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  label-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.19em"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5.6rem)"
    fontWeight: 200
    lineHeight: 0.84
    letterSpacing: "-0.045em"
    fontFeature: "tnum 1, lnum 1"
  lattice:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "0.02em"
    fontFeature: "tnum 1, lnum 1"
rounded:
  none: "0px"
spacing:
  rule: "1px"
  rule-major: "2px"
  gutter: "clamp(1.25rem, 3.2vw, 3.5rem)"
  margin-out: "clamp(1.25rem, 5vw, 6rem)"
  margin-in: "clamp(1.25rem, 2vw, 2.25rem)"
  margin-in-indexed: "clamp(4.25rem, 5vw, 6.5rem)"
  sheet-top: "clamp(5.5rem, 13vh, 11rem)"
  sheet-bottom: "clamp(4rem, 9vh, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.5em"
  button-primary-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 0"
  button-ghost-hover:
    textColor: "{colors.green}"
  button-reverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.15em 1.9em"
  button-reverse-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  thumb-tab:
    backgroundColor: "{colors.paper-toned}"
    textColor: "{colors.ink-70}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.9rem"
  thumb-tab-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  ticket:
    backgroundColor: "{colors.paper-toned}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.4rem, 3vw, 2.6rem)"
  sheet-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "clamp(5.5rem, 13vh, 11rem) clamp(1.25rem, 2vw, 2.25rem) clamp(4rem, 9vh, 7.5rem) clamp(1.25rem, 5vw, 6rem)"
  sheet-toned:
    backgroundColor: "{colors.paper-toned}"
    textColor: "{colors.ink}"
  sheet-flood:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    padding: "clamp(6rem, 15vh, 12rem) clamp(1.25rem, 2vw, 2.25rem) clamp(5rem, 11vh, 9rem) clamp(1.25rem, 5vw, 6rem)"
  log-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-70}"
    rounded: "{rounded.none}"
    padding: "clamp(0.85rem, 1.8vh, 1.15rem) 0"
  log-item-hover:
    backgroundColor: "{colors.green-08}"
---

# Design System: Sky Stay Travel

## Overview

**Creative North Star: "The Two-Ink Timetable"**

This is a printed object, not a screen: an airline timetable book run on a two-colour press. Warm bible stock, black ink, one second ink of deep green, and nothing else. The page opens on a dense live fare field — hundreds of `ch`-set rows of city pairs, flight numbers, departure times, fare bases and hotel rate codes — with the headline knocked out of it the way a second plate knocks out of the first. The whole surface is furniture a real timetable carries: an effective-dates banner, hairline rules, a footnote-glyph legend, a thumb index cut into the page edge, and an unequal outer margin that the table is ranged left against.

The density is the argument. The product sells a named person reading a field the member will never look at, so the field is printed at full strength and the single decided line is the only thing that ever resolves. Restraint is structural here, not stylistic — a surface that reads as commission-funded (a badge, a deal, a coloured call-to-action floating on neutral) would contradict the company's only position. There is no hero photograph, no gradient, no rounded corner, no drop shadow and no third colour anywhere in the build; the three photographs that do ship are duotoned into the same two inks so they read as printed on the same press.

Motion is native CSS scroll-driven animation and nothing else — no motion library is installed. One large motion carries the page: a 420svh sticky stage where 132 rows fade out on staggered ranges, the ground takes the second ink for a single beat, the surviving line lifts and scales, and a running counter falls from 406 to 1. Everything else is one entrance grammar, used once per section.

**Key Characteristics:**
- Two inks and three paper stocks; every other value is an alpha of those five
- Square corners everywhere, hairline and 2px ink rules, no shadows
- Display Caslon set at 0.86 leading — tight enough that lines collide
- A `ch`-measured fare lattice that scales but never reflows into cards
- Ranged-left asymmetry: the outer margin is always larger than the inner
- All motion scroll-driven, all of it optional, none of it required for legibility

## Colors

Five real colours — three stocks and two inks — and a ladder of alphas struck from the two inks. Nothing on this press is a hue that is not one of those two.

### Primary
- **Press Black** (`--ink`, #16150f): The first ink. Warm near-black with an olive cast, never pure #000. All display type, all primary labels, the 2px structural rules, the filled primary control, and the current thumb-index tab. 17.24:1 on paper.
- **Bottle Green** (`--green`, #1f4b3f): The second ink of a two-colour press, at full strength. It floods whole regions — the resolve stage at the moment of decision, the entire membership close — and it sets the fare column, the concierge's name, the `One` in the ledger, the legend glyphs, the thumb-index page numbers and the counter. 9.27:1 on paper; paper reverses out of it at the same 9.27:1.

### Neutral
- **Warm Bible Stock** (`--paper`, #faf8f4): The ground of the whole book, and the colour type reverses to when the second ink takes the sheet. Also the knockout plate colour.
- **Toned Stock** (`--paper-toned`, #f2eee6): A second sheet, not a card. The "who pays" sheet, the ticket, the thumb-index tabs, the scrollbar track. It changes the paper, never the object's elevation.
- **Deep Stock** (`--paper-deep`, #eae4d8): The third and deepest stock. Used once, as the thumb-tab hover ground.
- **Ink ladder** (`--ink-90` #16150fe6 · `--ink-70` #16150fb3 · `--ink-55` #16150f9c · `--ink-35` #16150f59 · `--ink-20` #16150f33 · `--ink-12` #16150f1f · `--ink-07` #16150f12): Ink at reduced coverage, not grey. `--ink-90` is long-form reasoning prose; `--ink-70` is secondary prose; `--ink-55` is the entire label and legend layer; `--ink-35` down is rules, perforations and marks.
- **Green ladder** (`--green-76` #1f4b3fc2 · `--green-55` #1f4b3f8c · `--green-30` #1f4b3f4d · `--green-08` #1f4b3f14): Second ink at reduced coverage. `--green-76` is the fare column inside the field; `--green-55` is link underlines and the register mark; `--green-30` is the scrollbar thumb; `--green-08` is the log row's hover ground.

### Named Rules

**The Two Inks Rule.** Black ink, one second ink, three stocks. Every other colour in this system is an alpha of `--ink` or `--green`. There is no third hue anywhere — not in an icon, not in a state, not in a photograph. Photographs are duotoned (grayscale, `mix-blend-mode: screen` over a green ground) so they print in the same two inks as the type.

**The Ink Never Floats Rule.** The second ink either sets type or floods a whole region — a full sheet, the full viewport of the resolve stage, the entire close. It is never a small coloured container on a neutral ground: no green pill, no green badge, no green filled button on paper. The primary control is filled in black ink and takes green only as a hover wipe that fills the whole control from below.

**The Contrast Floor Rule.** Content-bearing colours are `--ink` (17.24:1), `--ink-90` (13.33:1), `--ink-70` (6.65:1), `--ink-55` / `--ink-quiet` (4.87:1 on paper, 4.73:1 on toned stock) and `--green-76` (4.83:1 on paper). `--ink-35` (2.22:1) and `--green-55` (2.87:1) are decorative only — rules, perforations, hairlines, register marks — and never carry type that has to be read. `--ink-quiet` exists as a distinct name for exactly this: content that visually wants `--ink-35` gets `--ink-quiet` instead. Reversed out of the flood, paper alphas hold too: `#faf8f4d9` 7.22:1, `#faf8f4cc` 6.60:1, `#faf8f4b8` 5.70:1, `#faf8f4a6` 4.97:1.

**The Press Reaches The Chrome Rule.** The parts of the page nobody drew still carry the press: selection is paper on green, the caret and accent colour are green, the scrollbar runs a green-30 thumb inside a toned track with a `border-radius: 0` and an ink hairline, and the focus ring is a 2px green outline at 3px offset. Inside the flood, selection inverts back to green on paper.

## Typography

**Display Font:** Libre Caslon Display (with Georgia, serif)
**Body Font:** Libre Caslon Text (with Georgia, serif)
**Label/Figure Font:** Archivo (with system-ui, sans-serif), variable, `wdth` axis loaded

All three are self-hosted at build time by `next/font/google` and exposed as `--font-caslon-display`, `--font-caslon-text` and `--font-archivo`. Nothing is fetched at runtime.

**Character:** An old book's serif against a bureau's grotesque. Caslon Display carries the argument at a size and tightness that make it a printed headline rather than a web hero; Caslon Text carries the prose at a comfortable 1.62 leading; Archivo carries every label, legend, control, caption and numeral, always with tabular lining figures. The two never trade jobs: a sentence is Caslon, a figure is Archivo.

### Hierarchy
- **Display** (400, `clamp(3.1rem, 10.4vw, 9.25rem)`, 0.86 leading, -0.032em): The hero headline only. Knocked out of the fare field with a `0.42em` paper text-stroke and `paint-order: stroke fill`, capped at `15ch`, pulled back `-0.045em` so the stroke's optical edge lands on the margin.
- **Headline** (400, `clamp(2.4rem, 6.4vw, 5.4rem)`, 0.86 leading, -0.032em): Every section `h2`, set against the sheet head's 2px ink rule.
- **Title** (400, `clamp(1.85rem, 3.6vw, 3.15rem)`, 0.96 leading, -0.022em): Pull quotes, the concierge's name, the resolve verdict, the close line.
- **Body** (400, `clamp(1.0625rem, 1.15vw, 1.25rem)`, 1.62 leading, max 64ch): Section prose. Long bodies with real paragraph breaks are rendered as paragraphs at `1.15em` separation, never collapsed into one block. Secondary prose runs 0.9375–1rem at 1.5–1.6 leading; the reasoning note runs `clamp(1rem, 1.1vw, 1.1875rem)` at 1.66 to 72ch.
- **Label** (600, 0.6875rem, 0.16em tracking, uppercase, 1.0 leading): Section labels and controls. **Label-sm** (600, 0.625rem, 0.19em, uppercase) is the legend, caption, banner and footer voice.
- **Figure** (200, `clamp(2.6rem, 7vw, 5.6rem)`–`clamp(3rem, 9vw, 7.5rem)`, 0.84 leading, -0.045em, tabular): Archivo at hairline weight and display size. The ledger values, the membership price, the resolve tally. The one exception is `None` in the ledger, set in Caslon Display at 400 so the absence reads as a word rather than a number.
- **Lattice** (11px, 1.72 leading, 0.02em, tabular, `white-space: pre`): The fare field. Drops to 9px below 860px and 9px again at the resolve stage below 430px.

### Named Rules

**The Collision Rule.** Display type is set at 0.86 leading and -0.032em. Lines are meant to touch. Never loosen display leading past 1.0 to "fix" a collision; the collision is the type doing its job.

**The Tabular Figure Rule.** Every numeral on this page is a printed figure. `font-variant-numeric: tabular-nums lining-nums` plus `font-feature-settings: "tnum" 1, "lnum" 1` is bound to `.tnum`, `table`, `[data-lattice]` and `.grot`. A figure that can change (a fare, a count, a price, a page number) is always Archivo, always tabular, never Caslon.

**The Real Weight Rule.** Archivo is loaded as a variable face, so intermediate weights are real: 200 for display figures, 500/520 for captions and values, 600 for labels, 620/640/650 for emphasis and controls, 700 for reversed controls. `font-synthesis-weight: none` is set on `body` — the browser is forbidden from faking any of them, so never specify a weight the face does not carry.

## Layout

The page is a bound book of full-bleed sheets stacked in reading order — masthead, hero, resolve lead + resolve stage, document, trust, work, person, membership, colophon — each one a `<section>` with an `id` the thumb index links to.

**Registration.** Four custom properties carry the whole spatial system: `--rule: 1px`, `--gutter: clamp(1.25rem, 3.2vw, 3.5rem)`, `--margin-out: clamp(1.25rem, 5vw, 6rem)` and `--margin-in: clamp(1.25rem, 2vw, 2.25rem)`. Every sheet, the colophon, the resolve stage and the resolve field pad with `--margin-in` on the right and `--margin-out` on the left. At `min-width: 1024px`, where the thumb index appears, `--margin-in` widens to `clamp(4.25rem, 5vw, 6.5rem)` so the text block stops short of the page-edge furniture instead of running under it.

**Rhythm.** Sheets pad `clamp(5.5rem, 13vh, 11rem)` on top and `clamp(4rem, 9vh, 7.5rem)` on the bottom — always more space above a heading than below it. The flood sheet is deeper still (`clamp(6rem, 15vh, 12rem)` / `clamp(5rem, 11vh, 9rem)`). Within a sheet, blocks separate on a viewport-aware clamp ladder: `clamp(1.4rem, 3vh, 2.2rem)` for a tight break, `clamp(2.2rem, 5vh, 3.6rem)` for a block, `clamp(3rem, 8vh, 6rem)` for a section-closing break.

**Grids.** Section heads are `minmax(0, 1.05fr) minmax(0, 1fr)` with the heading left and the prose right, bottom-aligned on a 2px ink rule. The ticket is `1fr auto 1fr` (half, perforation, half). The ledger is `1fr auto 1fr` (figure, hairline, figure). The log row is `1.7rem minmax(9rem, 14ch) minmax(8rem, 20ch) 1fr`. The person sheet is `minmax(0, 1.08fr) minmax(0, 1fr)`.

**Responsive.** The project uses its own `max-width` queries for structure — 1100 and 760 drop the third and second hero field columns, 900 collapses the two-column heads and the log row, 860 collapses the resolve field from three columns to one and shrinks the lattice, 820 collapses the ticket, ledger and flood columns, 560 stacks the two hero controls, 430 drops the lift scale to 1 — alongside Tailwind's min-width utilities in markup (`sm` 640px for the register mark and the legend's middle span, `md` 768px for the effective-dates banner, `lg` 1024px for the thumb index).

### Named Rules

**The Unequal Margin Rule.** `--margin-out` is always larger than `--margin-in`, and nothing is centred in its sheet. The table sits on the page the way a printed table does: ranged left against a deliberately unequal outer margin. Centring is used only inside the resolve stage, where the lifted decision is a single specimen line on an otherwise empty field.

**The Sacred Lattice Rule.** The fare lattice is measured in `ch` and is inviolable. Rows are built by padding each value to an exact character width (`cell(value, width)` → `padEnd`) and rendering them under `white-space: pre` in a tabular face — the column alignment is a property of the characters, not of a grid. Narrow screens scale the cell (11px → 9px) and reduce the column count (3 → 1). They never reflow a row into a stacked card.

## Elevation & Depth

This system has no shadows and no elevation. Nothing lifts off the page, because nothing on a printed sheet can. Depth is entirely tonal and material: three paper stocks (`--paper` / `--paper-toned` / `--paper-deep`), ink coverage (the alpha ladders), rule weight (1px hairline vs 2px solid ink), a multiply-blended fibre texture on toned sheets, a halftone dot screen over every photograph, and z-index stacking of type over the field.

`box-shadow` does appear in the build, but never as a shadow. It is a **knockout plate**: zero offset, zero blur, a hard spread of paper, which punches a clean paper shape out from behind type sitting over the live fare field. That is a press operation, not a lighting effect.

### Shadow Vocabulary
- **Knockout plate, tight** (`box-shadow: 0 0 0 0.55rem var(--paper)`): Behind the hero subhead and the hero controls, where they overlap the drifting field.
- **Knockout plate, wide** (`box-shadow: 0 0 0 0.7rem var(--paper)`): Behind the resolve tally, the resolve foot, and — in the no-timeline and reduced-motion fallbacks — behind the lift label, the lifted line and the verdict.
- **Text knockout** (`-webkit-text-stroke: 0.42em var(--paper)` + `paint-order: stroke fill`): The hero headline's own plate. The stroke paints first and the fill paints over it, so the letterforms carve a paper channel through the field.

### Named Rules

**The Knockout, Not Shadow Rule.** If an element needs to be legible over the field, it gets a paper plate — a zero-blur, zero-offset `box-shadow` spread or a paper text-stroke. It never gets a blurred or offset shadow. `box-shadow` with a blur radius or an offset does not exist in this system.

**The Tonal Depth Rule.** Surfaces change stock, not altitude. A block that needs to separate from the sheet moves from `--paper` to `--paper-toned` (and the toned sheet takes `.fibre`); it does not gain a border-radius, a shadow or a lift.

## Shapes

Every corner in this system is square. `border-radius` is `0` everywhere — it is stated explicitly even on the webkit scrollbar thumb, which is the only element that would otherwise have inherited one.

Form language is rules and plates:

- **Hairline rules** (`1px solid var(--ink-20)`): the default separator — sheet feet, legends, the resolve foot, the ticket's internal head, the colophon grid.
- **Row rules** (`1px solid var(--ink-12)`, and `--ink-07` in the colophon notes): the lighter weight that separates repeated rows without drawing a table.
- **Structural rules** (`2px solid var(--ink)`): a division, not a separator. Under every sheet head, above the pull quote, above the person record and the reasoning note, above the colophon, and — reversed in `#faf8f4` — around the flood's head and close.
- **The perforation** (`repeating-linear-gradient(to bottom, var(--ink-35) 0 5px, transparent 5px 11px)`): an authored 5-on/6-off perforation between the ticket's two halves, rotated to `to right` when the ticket stacks below 820px. Never a `border-style: dashed`.
- **Frames**: photographs are fixed-ratio boxes (`5 / 4` for the ticket plates, `40 / 15` for the desk figure, relaxing to `3 / 2` below 820px) with `overflow: hidden`, a green ground, a grayscale screened image and a multiply gradient — no border, no radius, no caption box.
- **Icons**: five authored SVG marks on a 16×16 box at 1.35 stroke, `square` cap, `miter` join, `currentColor` — arrow east, arrow south, kept, struck, and the register mark a two-colour press uses to align its plates. No icon library, no glyph font, no emoji.

### Named Rules

**The No Radius Rule.** Nothing on this press has a radius. Every corner is square, including controls, stocks, frames, tabs and scrollbars.

**The Two Rule Weights Rule.** A rule is either a 1px hairline at reduced ink (separation within a block) or a 2px solid `--ink` line (a division between arguments). There is no third weight, no coloured rule on paper, and no dashed rule anywhere — a broken line is an authored perforation.

## Components

### Buttons
- **Shape:** Square (0 radius), no border, `inline-flex` with a `0.75em`–`0.9em` gap to a trailing 16px authored arrow. Type is Archivo 0.75rem / 650 / 0.15em / uppercase.
- **Primary** (`.btn`): Paper type on solid `--ink`, padding `0.95em 1.5em`. Hover runs a full-bleed `--green` plate up from `translateY(101%)` to `0` over 200ms `--ease-out` behind the label (`z-index: -1` under `isolation: isolate`) — the second ink arriving as a printed impression, not a colour fade. `:active` drops the whole control 1px.
- **Ghost** (`.btn-ghost`): No fill, ink type, padding `0.95em 0`, sitting on a `1px --ink-35` bottom rule. Hover takes type and rule to `--green`.
- **Reverse** (`.btn-reverse`): The close's control, on the flooded sheet. Green type on paper at weight 700, padding `1.15em 1.9em`; the hover plate is `--ink` and the type goes to paper.
- **Focus:** Every control inherits the global `2px solid var(--green)` outline at `3px` offset. Hover treatments are gated behind `@media (hover: hover) and (pointer: fine)` so a touch tap never leaves a control stuck in hover.

### Cards / Containers
The only container in this system is **the ticket**: one document with two halves and a perforation, not two cards. Toned stock, a `1px --ink-20` border, `clamp(1.4rem, 3vw, 2.6rem)` padding per half, a duotone plate at the top of each half, a label-and-register head, one large primary line (Archivo 200 for the flight's city pair, Caslon Display 400 for the hotel name), then a definition list of `12ch` label / value rows on `1px --ink-12` rules. Below 820px the two halves stack and the perforation turns horizontal. No radius, no shadow, no hover state — it is a printed document, not an interactive object.

### Navigation
- **Masthead** (`.rule-b-ink`): Sticky at `top: 0`, `z-50`, paper ground, 2px ink bottom rule. `SKY STAY` in Caslon Display at 1.22rem with `Travel` as a green label-sm tail; the effective-dates banner in label-sm `--ink-55` behind a `1px --ink-20` left rule (hidden below Tailwind `md`); the register mark and the membership link at the right, behind another left rule.
- **Thumb index** (`.thumb-tab`): Six tabs fixed to the right page edge, vertically centred, shown at `lg` and above. Each tab is toned stock with `1px --ink-12` rules on three sides, a green page number in a fixed `1.55rem` column and an `--ink-70` label, parked at `translate3d(calc(100% - 2.55rem), 0, 0)` so only the number shows. Hover and `:focus-visible` slide it fully into view over `--d-panel` (320ms) on `--ease-out`, and hover also deepens the stock to `--paper-deep`. The current tab (`[data-on]`, and its scroll-driven equivalent) inverts to solid `--ink` with paper type.

### Signature: The fare field
A 220-row live availability board, set in three drifting columns behind the hero. Every row is padded to the `ch` lattice — `9 · 8 · 6 · 8 · 5 · 9` in `--ink-55`, the fare basis in `--green-76`, the hotel rate code in `--ink-55` — and rendered under `white-space: pre`. The block is duplicated and translated `-50%` over 240s (310s and 265s for the second and third columns) by a linear infinite `lat-drift`, so the three columns never read as one obedient block. It is `aria-hidden`, fully legible before any script runs, masked top and bottom with a linear-gradient, and it stops dead under `prefers-reduced-motion`.

### Signature: The Resolve
The page's one large motion, and its argument in a single gesture. A `420svh` section (`340svh` below 860px) publishes `view-timeline-name: --resolve`; a `100svh` sticky stage holds a three-column field of 132 rows, a tally, the lifted decision and a foot rule.

- **Rows** (42–68%): each row carries its own `--s`/`--e` window from a seeded PRNG, so the field dissolves unevenly — opacity 1 → 0.06, `--ink-55` → `--ink-35`.
- **Flood** (54–66%): a full-bleed `--green` plate covering every edge of the viewport, foot included, fading in to opacity 1 with an overlaid dot screen and two soft radial gradients so a flood this size is never a flat fill.
- **Reversal** (54–66%): the tally label, the foot and the tally plate cut from ink to paper at the 50% mark of their own keyframes — a hard 49%/51% cut, not a crossfade, because a press changes plates instantly.
- **Lift** (44–74%): the surviving line scales to `2.45` (`1.12` below 860px, `1` below 430px) and its colour switches green → paper at 55%.
- **Tally** (42–66%): a registered `@property --routings` of `syntax: "<integer>"` driven through `counter-reset` / `counter()`, falling 406 → 1 while its colour cuts green → paper.
- **Verdict** (63–74%): the hotel name and room note rise `0.7em` into place in paper on the flooded ground.

### Named Rules

**The One Animation Per Element Rule.** An element gets exactly one `animation` shorthand. A second shorthand declaration on the same element replaces the first outright rather than composing with it — it does not merge, and the loser simply never runs. So anything that must change colour *and* its knockout plate *and* its rule on the same beat is authored as one combined keyframe: `foot-out` carries `color` + `border-top-color` + `background` + `box-shadow`; `plate-out` carries `background` + `box-shadow`; the resolve tally's `tally` keyframe carries `--routings` + `color`. This rule is written into the source twice because breaking it produced two real defects — a green figure left sitting on a green sheet, and a foot that reversed its type but kept its paper plate.

**The Static-First Motion Rule.** Every scroll-driven declaration is double-gated behind `@supports (animation-timeline: view())` **and** `@media (prefers-reduced-motion: no-preference)`. The unanimated state is the honest state: the field is fully legible, the decided line is already marked, the lift label and verdict are visible at opacity 1, and `420svh` collapses to `height: auto` with a `62svh` body. Under both fallbacks the flood and the reversal are replaced by knockout plates on paper and the verdict returns to ink. Nothing on this page needs the animation to be readable.

**The No Library Rule.** All motion is native CSS: `view-timeline`, `animation-range`, `timeline-scope` on `body` for the six section timelines the thumb index reads, and a registered `@property` for the counter. There is no motion library, no `requestAnimationFrame` loop and no scroll listener in the build — a JS smooth-scroll layer was installed and removed because its rAF loop competed with the compositor-driven timelines it would have been scrolling.

## Type Scale

Every `font-size` in the stylesheet is one of these tokens. A size that is not on the
scale does not ship — the detector enforces it, and the scale is extended, never forked.

```css
--t-cell-xs:       9px;                              /* lattice, below 430px */
--t-cell-sm:      10px;                              /* lattice, below 860px */
--t-cell:         11px;                              /* the fare lattice */
--t-label-sm:      0.625rem;                         /* legend, credits, tabs */
--t-label:         0.6875rem;                        /* section labels */
--t-control:       0.75rem;                          /* buttons */
--t-detail:        0.8125rem;                        /* table values, colophon */
--t-small:         0.9375rem;                        /* rejection reasons */
--t-body:          1rem;                             /* list items, bio */
--t-root:         16px;                              /* document root */
--t-prose:         clamp(1.0625rem, 1.15vw, 1.25rem);
--t-prose-tight:   clamp(1rem, 1.1vw, 1.1875rem);
--t-prose-wide:    clamp(1rem, 1.15vw, 1.1875rem);
--t-mark:          clamp(1.6rem, 4vw, 2.4rem);       /* colophon wordmark */
--t-primary-serif: clamp(1.6rem, 3.6vw, 2.65rem);    /* the property name */
--t-primary:       clamp(2rem, 5.2vw, 3.6rem);       /* the city pair */
--t-figure-sm:     clamp(2.4rem, 14vw, 3.6rem);      /* the tally, below 860px */
--t-display-m:     clamp(1.85rem, 3.6vw, 3.15rem);
--t-tally:         clamp(2.6rem, 7vw, 5.6rem);
--t-price:         clamp(2.6rem, 7vw, 5.4rem);
--t-figure:        clamp(3rem, 9vw, 7.5rem);         /* the ledger figures */
--t-display-l:     clamp(2.4rem, 6.4vw, 5.4rem);
--t-display-xl:    clamp(3.1rem, 10.4vw, 9.25rem);   /* the first viewport only */
```

The scale was extracted from the shipped build rather than imposed on it: introducing it
changed **zero pixels** across five captures at desktop and mobile.

## Motion Tokens

These are the system's curves and durations. They are taken from a fixed table, not
chosen per component: **extend this scale, never fork it.** A `cubic-bezier` that does
not appear here has no business in the codebase.

```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);      /* entering, exiting — the default */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);     /* moving or morphing on screen */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);      /* iOS-style drawer travel */
--d-press: 140ms;   /* button press feedback */
--d-ui:    200ms;   /* hover, link, small state change */
--d-panel: 320ms;   /* the thumb-index tab sliding out of the page edge */
```

Rules that go with them:

- **Never `ease-in` on an interface element.** It starts slow and delays the exact moment
  the visitor is watching. `ease-out` at 200ms feels faster than `ease-in` at 200ms.
- **Interface motion stays under 300ms.** The long scroll-driven beats are explanatory
  motion on a marketing surface and are governed by scroll distance, not duration — they
  are the one exception, and they carry `linear` timing because the scroll supplies the easing.
- **Transitions, not keyframes, for anything a visitor can fire twice in a second.**
  Transitions retarget from the current value; keyframes restart from zero.
- **`transform` and `opacity` only** for anything that moves. `color`, `background`,
  `box-shadow` and `border-color` are animated here only on the scroll timeline, where
  they cut rather than travel.
- **Two `animation` shorthand declarations on one element replace each other** rather than
  composing. Any element that must change colour *and* plate *and* rule on the same beat
  gets ONE combined keyframe. This cost two real defects before it was written down.

## Do's and Don'ts

### Do:
- **Do** build every new colour as an alpha of `--ink` or `--green` over one of the three stocks. The ladders already in `:root` are the system; extend them in the same form rather than introducing a value.
- **Do** use `--ink-quiet` (4.87:1) for anything that has to be read but visually wants to recede. `--ink-35` is for rules and marks only.
- **Do** flood the second ink across whole regions when it is used as a ground — a full sheet, a full viewport — and set it as type everywhere else.
- **Do** set every numeral in Archivo with `tabular-nums lining-nums`, and pad lattice values with `cell(value, width)` so columns align on characters.
- **Do** range content left against `--margin-out` and reserve `--margin-in` on the right; widen `--margin-in` wherever the thumb index is visible.
- **Do** give an element that must change several properties on one beat a single combined keyframe.
- **Do** ship every motion behind both `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`, and author the static fallback first.
- **Do** gate hover treatments behind `@media (hover: hover) and (pointer: fine)`.
- **Do** duotone every photograph into the two inks (grayscale + `mix-blend-mode: screen` over `--green`, plus the halftone screen) and print its credit in label-sm beneath it.
- **Do** draw new icons as 16×16 SVG at 1.35 stroke with square caps and mitre joins, in `currentColor`.

### Don't:
- **Don't** introduce a third colour — not for a state, not for an icon, not for a chart, not inside a photograph. There is no error red, no warning amber and no link blue in this system.
- **Don't** put the second ink into a small container on neutral ground: no green pill, badge, chip, tag or filled button on paper.
- **Don't** add a `border-radius`. Nothing on this press has one.
- **Don't** use a blurred or offset `box-shadow`. Depth is stock, ink coverage and rule weight; `box-shadow` here is only a zero-blur paper knockout.
- **Don't** loosen display leading above 1.0 or track it looser than -0.022em to avoid a collision between lines.
- **Don't** reflow the fare lattice into stacked cards on narrow screens. Scale the cell and reduce the column count.
- **Don't** centre a sheet's content or equalise the two outer margins.
- **Don't** put two `animation` shorthand declarations on one element — the second replaces the first and the first silently stops running.
- **Don't** add a motion library, a scroll listener or a rAF loop. If an effect cannot be expressed as a scroll-driven or state-driven CSS animation, it does not ship.
- **Don't** use a dashed border for a broken line; author the perforation as a `repeating-linear-gradient`.
- **Don't** use glyph icons, icon fonts or emoji in place of the authored SVG marks.
