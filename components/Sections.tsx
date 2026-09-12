import Image from "next/image";
import { ArrowEast, Kept, Struck, Register } from "./Icons";
import { Prose } from "./Prose";
import type { Decided, Routing } from "@/lib/types";

/* ============================================================
   28 — What arrives. One document, two halves, one perforation.
   ============================================================ */

export function DocumentSheet({
  heading,
  body,
  skyLabel,
  stayLabel,
  decided,
  reasoning,
  media,
}: {
  heading: string;
  body: string;
  skyLabel: string;
  stayLabel: string;
  decided: Decided;
  reasoning: string;
  media: { sky: string; stay: string; skyCredit: string; stayCredit: string };
}) {
  return (
    <section id="document" className="sheet sheet-paper">
      <div className="sheet-head">
        <h2 className="display display-l" data-reveal>
          {heading}
        </h2>
        <div data-reveal>
          <Prose text={body} className="prose-serif sheet-head-body" />
        </div>
      </div>

      <div className="ticket" data-reveal>
        <div className="ticket-half">
          <figure className="ticket-plate-wrap">
            <div className="duotone screened ticket-plate">
              <Image
                src={media.sky}
                alt="A wing and horizon seen through a cabin window at dusk"
                width={1600}
                height={2508}
                sizes="(max-width: 820px) 92vw, 44vw"
              />
            </div>
            <figcaption className="label-sm plate-credit">
              {media.skyCredit}
            </figcaption>
          </figure>

          <div className="ticket-half-head">
            <span className="label" style={{ color: "var(--green)" }}>
              {skyLabel}
            </span>
            <Register className="text-[var(--ink-35)] shrink-0" />
          </div>
          <p className="ticket-primary">{decided.pair}</p>
          <dl className="ticket-rows tnum">
            <Row k="Carrier" v={decided.flt} />
            <Row k="Depart" v={decided.dep} />
            <Row k="Arrive" v={decided.arr} />
            <Row k="Equipment" v={decided.eq} />
            <Row k="Days" v={decided.days} />
            <Row k="Fare basis" v={decided.fare} accent />
          </dl>
        </div>

        <div className="ticket-perf" aria-hidden="true" />

        <div className="ticket-half">
          <figure className="ticket-plate-wrap">
            <div className="duotone screened ticket-plate">
              <Image
                src={media.stay}
                alt="A quiet hotel room, one lamp lit, curtain wall drawn"
                width={1600}
                height={2844}
                sizes="(max-width: 820px) 92vw, 44vw"
              />
            </div>
            <figcaption className="label-sm plate-credit">
              {media.stayCredit}
            </figcaption>
          </figure>

          <div className="ticket-half-head">
            <span className="label" style={{ color: "var(--green)" }}>
              {stayLabel}
            </span>
            <Register className="text-[var(--ink-35)] shrink-0" />
          </div>
          <p className="ticket-primary ticket-primary-serif">{decided.hotel}</p>
          <dl className="ticket-rows tnum">
            <Row k="Room" v={decided.room} />
            <Row k="Rate code" v={decided.rate} accent />
            <Row k="Keyed to" v={decided.flt} />
            <Row k="Held until" v="1800 on the day" />
            <Row k="Note" v={decided.note} wide />
          </dl>
        </div>
      </div>

      {/* The traceability: why this line and not the obvious one. */}
      <div className="reasoning" data-reveal>
        <p className="label-sm reasoning-h">
          Why this one, and not the obvious one
        </p>
        <p className="reasoning-body">{reasoning}</p>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  accent,
  wide,
}: {
  k: string;
  v: string;
  accent?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={`ticket-row${wide ? " ticket-row-wide" : ""}`}>
      <dt className="label-sm">{k}</dt>
      <dd style={accent ? { color: "var(--green)" } : undefined}>{v}</dd>
    </div>
  );
}

/* ============================================================
   44 — Who pays. The ledger, on toned stock.
   ============================================================ */

export function Trust({
  heading,
  body,
  ledgerIn,
  ledgerOut,
  pullQuote,
}: {
  heading: string;
  body: string;
  ledgerIn?: string;
  ledgerOut?: string;
  pullQuote: string;
}) {
  return (
    <section id="trust" className="sheet sheet-toned fibre relative">
      <div className="sheet-head">
        <h2 className="display display-l" data-reveal>
          {heading}
        </h2>
        <div data-reveal>
          <Prose text={body} className="prose-serif sheet-head-body" />
        </div>
      </div>

      <div className="ledger" data-reveal>
        <div className="ledger-col">
          <p className="ledger-v ledger-v-in">One</p>
          <p className="ledger-k">{ledgerIn}</p>
        </div>
        <div className="ledger-rule" aria-hidden="true" />
        <div className="ledger-col">
          <p className="ledger-v ledger-v-out">None</p>
          <p className="ledger-k">{ledgerOut}</p>
        </div>
      </div>

      <blockquote className="pull" data-reveal>
        <p className="display display-m">{pullQuote}</p>
      </blockquote>
    </section>
  );
}

/* ============================================================
   61 — The log. The most persuasive page in the book.
   ============================================================ */

export function Work({
  heading,
  body,
  considered,
  survivors,
  rejected,
}: {
  heading: string;
  body: string;
  considered: number;
  survivors: Routing[];
  rejected: Routing[];
}) {
  return (
    <section id="work" className="sheet sheet-paper">
      <div className="sheet-head">
        <h2 className="display display-l" data-reveal>
          {heading}
        </h2>
        <div data-reveal>
          <Prose text={body} className="prose-serif sheet-head-body" />
        </div>
      </div>

      <div className="log">
        <div className="log-head label-sm">
          <span>
            <span style={{ color: "var(--green)" }}>{considered}</span> read
          </span>
          <span>{survivors.length} reached the last cut</span>
          <span>
            {rejected.length} rejections printed with the sentence that ended
            each one
          </span>
        </div>

        <ul className="log-list">
          {survivors.map((r) => (
            <li key={r.label} className="log-item log-kept">
              <Kept className="log-mark" />
              <span className="log-label grot">{r.label}</span>
              <span className="log-detail grot tnum">{r.detail}</span>
              <span className="log-reason">{r.reason}</span>
            </li>
          ))}
          {rejected.map((r) => (
            <li key={r.label} className="log-item log-struck">
              <Struck className="log-mark" />
              <span className="log-label grot">{r.label}</span>
              <span className="log-detail grot tnum">{r.detail}</span>
              <span className="log-reason">{r.reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   77 — The same desk, every time.
   ============================================================ */

export function Person({
  heading,
  body,
  concierge,
  conciergeRole,
  conciergeBio,
  portrait,
  credit,
}: {
  heading: string;
  body: string;
  concierge: string;
  conciergeRole?: string;
  conciergeBio: string;
  portrait: string;
  credit: string;
}) {
  return (
    <section id="person" className="sheet sheet-paper">
      <figure className="desk-fig" data-reveal>
        <div className="duotone screened desk-frame">
          <Image
            src={portrait}
            alt="Hands writing figures into a spiral notebook beside a keyboard"
            width={2000}
            height={1055}
            sizes="100vw"
          />
        </div>
        <figcaption className="label-sm plate-credit">{credit}</figcaption>
      </figure>

      <div className="person">
        <div className="person-copy">
          <h2 className="display display-l" data-reveal>
            {heading}
          </h2>
          <p className="prose-serif" data-reveal style={{ marginTop: "1.4rem" }}>
            {body}
          </p>
        </div>

        <div className="person-record" data-reveal>
          <p className="display display-m person-name">{concierge}</p>
          {conciergeRole ? (
            <p className="label-sm person-role">{conciergeRole}</p>
          ) : null}
          <p className="person-bio">{conciergeBio}</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   90 — Terms. The close, flooded in the second ink.
   ============================================================ */

export function Membership({
  heading,
  price,
  priceQualifier,
  includes,
  excludes,
  closeLine,
  primaryCta,
}: {
  heading: string;
  price: string;
  priceQualifier?: string;
  includes: string[];
  excludes: string[];
  closeLine: string;
  primaryCta: string;
}) {
  return (
    <section id="membership" className="sheet sheet-flood">
      <div className="flood-head">
        <h2 className="display display-l flood-h" data-reveal>
          {heading}
        </h2>
        <div className="flood-price" data-reveal>
          <p className="flood-price-v tnum">{price}</p>
        </div>
      </div>

      {priceQualifier ? (
        <p className="flood-qualifier" data-reveal>
          {priceQualifier}
        </p>
      ) : null}

      <div className="flood-cols">
        <div className="flood-col" data-reveal>
          <p className="label-sm flood-col-h">Included</p>
          <ul className="flood-list">
            {includes.map((i) => (
              <li key={i}>
                <Kept className="flood-mark" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flood-col flood-col-out" data-reveal>
          <p className="label-sm flood-col-h">Not included, and never will be</p>
          <ul className="flood-list">
            {excludes.map((i) => (
              <li key={i}>
                <Struck className="flood-mark" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flood-close" data-reveal>
        <p className="display display-m flood-close-line">{closeLine}</p>
        <a href="#top" className="btn btn-reverse">
          {primaryCta}
          <ArrowEast />
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   Colophon
   ============================================================ */

export function Colophon({
  colophon,
  footnotes,
  banner,
}: {
  colophon: string;
  footnotes: string[];
  banner: string;
}) {
  return (
    <footer className="colophon">
      <div className="colophon-top">
        <span className="display colophon-mark">SKY STAY</span>
        <span className="label-sm" style={{ color: "var(--ink-55)" }}>
          {banner}
        </span>
      </div>

      <div className="colophon-grid">
        <div>
          <p className="label-sm colophon-h">Legend</p>
          <ul className="colophon-notes">
            {footnotes.map((f, i) => {
              const glyph = f.trim().charAt(0);
              const rest = f.trim().slice(1).trim();
              return (
                <li key={i}>
                  <span className="colophon-glyph">{glyph}</span>
                  <span>{rest}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="label-sm colophon-h">Colophon</p>
          <p className="colophon-body">{colophon}</p>
        </div>
      </div>
    </footer>
  );
}
