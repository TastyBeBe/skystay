import { cell, seeded, type Decided, type FareRow } from "@/lib/types";

/**
 * THE RESOLVE — the page's one large motion.
 *
 * A dense field of routings is read, struck out and reduced to a single
 * decided line, while the sheet takes the second ink. It is driven entirely
 * by native scroll-driven animation: no rAF loop, no scroll listener, no
 * main-thread work, and 200 rows animating at once without a dropped frame.
 *
 * Without `animation-timeline` support, or under reduced motion, every row
 * stays fully legible and the decided line is already marked. Nothing here
 * depends on the animation to be readable.
 */
export function Resolve({
  rows,
  decided,
  considered,
  heading,
  body,
  beforeLabel,
  afterLabel,
}: {
  rows: FareRow[];
  decided: Decided;
  considered: number;
  heading: string;
  body: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const field = rows.slice(0, 132);
  const rnd = seeded(20260912);

  // Each row is given its own death window, so the field dissolves in an
  // uneven, printed way rather than as one obedient block.
  const ranges = field.map((_, i) => {
    const jitter = rnd();
    const start = 18 + jitter * 30;
    return { s: `${start.toFixed(1)}%`, e: `${(start + 12 + jitter * 14).toFixed(1)}%` };
  });

  const decidedLine =
    cell(decided.pair, 9) +
    cell(decided.flt, 8) +
    cell(decided.dep, 6) +
    cell(decided.arr, 8) +
    cell(decided.eq, 5) +
    cell(decided.fare, 9) +
    cell(decided.rate, 8);

  return (
    <section id="resolve" className="resolve">
      {/* The counter is a real integer animated on the scroll timeline. */}
      <style>{`
        @property --routings { syntax: "<integer>"; inherits: false; initial-value: ${considered}; }
        .resolve-tally { counter-reset: routings var(--routings); }
        .resolve-tally::after { content: counter(routings); }
        @keyframes tally {
          0%   { --routings: ${considered}; color: var(--green); }
          71%  { color: var(--green); }
          73%  { color: var(--paper); }
          88%  { --routings: 1; }
          100% { --routings: 1; color: var(--paper); }
        }
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            /* One declaration, because a second would replace this one outright
               and leave the figure green on a green sheet. */
            .resolve-tally {
              animation: tally linear both;
              animation-timeline: --resolve;
              animation-range: 22% 64%;
            }
          }
        }
      `}</style>

      <div className="resolve-stage">
        {/* The field fills the whole sheet. Everything else knocks out of it. */}
        <div className="resolve-field" data-lattice aria-hidden="true">
          {field.map((r, i) => (
            <span
              key={i}
              className="resolve-row"
              style={{ ["--s" as string]: ranges[i].s, ["--e" as string]: ranges[i].e }}
            >
              {cell(r.pair, 9)}
              {cell(r.flt, 8)}
              {cell(r.dep, 6)}
              {cell(r.arr, 8)}
              {cell(r.eq, 5)}
              {cell(r.fare, 9)}
              {cell(r.rate, 8)}
            </span>
          ))}
        </div>

        {/* The flood covers the whole viewport, head and foot included:
            the sheet itself takes the second ink. */}
        <div className="resolve-flood" aria-hidden="true" />

        <div className="resolve-head">
          <div className="resolve-head-copy">
            <h2 className="display display-m">{heading}</h2>
            <p className="prose-serif" style={{ marginTop: "1.1rem", maxWidth: "46ch" }}>
              {body}
            </p>
          </div>

          <div className="resolve-tally-wrap">
            <span className="resolve-tally display" aria-hidden="true" />
            <span className="label-sm resolve-tally-label">
              routings still open
            </span>
          </div>
        </div>

        <div className="resolve-body">
          {/* The survivor, lifted out of the field. */}
          <div className="resolve-lift-wrap">
            <p className="label-sm resolve-lift-label">The decision</p>
            <div className="resolve-lift" data-lattice>
              <span className="resolve-winner">{decidedLine}</span>
            </div>
            <div className="resolve-verdict">
              <p className="display display-m resolve-verdict-line">
                {decided.hotel}
              </p>
              <p className="resolve-verdict-sub">
                {decided.room} · {decided.note}
              </p>
            </div>
          </div>
        </div>

        <p className="resolve-foot label-sm">
          <span>{beforeLabel}</span>
          <span className="resolve-foot-rule" aria-hidden="true" />
          <span>{afterLabel}</span>
        </p>
      </div>
    </section>
  );
}
