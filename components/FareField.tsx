import { cell, type FareRow } from "@/lib/types";

/**
 * The dense field. One element per row, padded to an exact `ch` lattice,
 * with the two second-ink columns lifted into spans.
 *
 * It is legible and complete before any script runs. The drift is a pure CSS
 * animation, so it keeps running while the page is still loading and stops
 * dead under prefers-reduced-motion.
 */
export function FareField({
  rows,
  className = "",
  drift = true,
  cellPx = "11px",
}: {
  rows: FareRow[];
  className?: string;
  drift?: boolean;
  cellPx?: string;
}) {
  const body = rows.map((r, i) => (
    <div key={i} className="lat-line">
      <span className="lat-a">
        {cell(r.pair, 9)}
        {cell(r.flt, 8)}
        {cell(r.dep, 6)}
        {cell(r.arr, 8)}
        {cell(r.eq, 5)}
        {cell(r.days, 9)}
      </span>
      <span className="lat-b">{cell(r.fare, 9)}</span>
      <span className="lat-a">{cell(r.rate, 8)}</span>
    </div>
  ));

  return (
    <div
      aria-hidden="true"
      data-lattice
      data-ticker={drift ? "" : undefined}
      className={`lat-field ${drift ? "lat-drift" : ""} ${className}`}
      style={{ ["--cell" as string]: cellPx }}
    >
      <div className="lat-run">{body}</div>
      {drift ? <div className="lat-run">{body}</div> : null}
    </div>
  );
}
