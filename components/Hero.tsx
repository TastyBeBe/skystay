import { FareField } from "./FareField";
import { ArrowEast, ArrowSouth } from "./Icons";
import type { FareRow } from "@/lib/types";

export function Hero({
  rows,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  considered,
}: {
  rows: FareRow[];
  headline: string;
  subhead: string;
  primaryCta: string;
  secondaryCta?: string;
  considered: number;
}) {
  return (
    <section id="top" className="relative overflow-hidden hero-shell">
      {/* Ink 1: the field, set in three columns the way the book sets it.
          Legible and complete before any script runs. */}
      <div className="hero-field">
        <FareField rows={rows.slice(0, 74)} />
        <FareField rows={rows.slice(74, 148)} />
        <FareField rows={rows.slice(148, 220)} />
      </div>

      {/* Ink 2 knocks out of ink 1. */}
      <div className="hero-plate">
        <h1 className="display display-xl knockout hero-head">{headline}</h1>

        <div className="hero-under">
          <p className="prose-serif hero-sub">{subhead}</p>

          <div className="hero-actions">
            <a href="#membership" className="btn">
              {primaryCta}
              <ArrowEast />
            </a>
            {secondaryCta ? (
              <a href="#resolve" className="btn-ghost no-underline">
                {secondaryCta}
                <ArrowSouth />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* The legend, bottom-ruled across the sheet. */}
      <div className="hero-legend label-sm">
        <span>
          <span style={{ color: "var(--green)" }}>{considered}</span> routings
          read for one trip
        </span>
        <span className="hidden sm:inline" style={{ color: "var(--ink-quiet)" }}>
          Fig. 1 · Live availability board, members&rsquo; edition
        </span>
        <span style={{ color: "var(--ink-quiet)" }}>
          All figures on this sheet are demonstration material
        </span>
      </div>
    </section>
  );
}
