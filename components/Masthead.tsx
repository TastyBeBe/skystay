import { Register } from "./Icons";

export function Masthead({ banner, tail }: { banner: string; tail: string }) {
  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)]/92 backdrop-saturate-100 rule-b-ink">
      <div
        className="flex items-stretch"
        style={{ paddingInline: "var(--margin-out)" }}
      >
        {/* Wordmark */}
        <a
          href="#top"
          className="flex items-baseline gap-[0.55em] py-[0.7rem] pr-[var(--gutter)] no-underline shrink-0"
        >
          <span
            className="display leading-none"
            style={{
              fontSize: "1.22rem",
              letterSpacing: "0.02em",
            }}
          >
            SKY STAY
          </span>
          <span
            className="label-sm"
            style={{ color: "var(--green)", transform: "translateY(-0.15em)" }}
          >
            {tail}
          </span>
        </a>

        {/* Effective-dates banner — the line a timetable always carries */}
        <p
          className="label-sm hidden md:flex items-center flex-1 border-l border-[var(--ink-20)] pl-[var(--gutter)]"
          style={{ color: "var(--ink-55)" }}
        >
          {banner}
        </p>

        <div className="flex items-center gap-[var(--gutter)] border-l border-[var(--ink-20)] pl-[var(--gutter)]">
          <Register className="hidden sm:block text-[var(--green-55)]" />
          <a href="#membership" className="label no-underline whitespace-nowrap">
            Membership
          </a>
        </div>
      </div>
    </header>
  );
}
