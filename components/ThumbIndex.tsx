/**
 * The thumb index cut into the page edge. Page references are real
 * navigation here, not ornament — a paginated book is what this is.
 */

const TABS = [
  { n: "12", id: "resolve", label: "The reading" },
  { n: "28", id: "document", label: "What arrives" },
  { n: "44", id: "trust", label: "Who pays" },
  { n: "61", id: "work", label: "The rejects" },
  { n: "77", id: "person", label: "Your desk" },
  { n: "90", id: "membership", label: "Terms" },
];

export function ThumbIndex() {
  return (
    <nav
      aria-label="Sections"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col"
    >
      {TABS.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          className="thumb-tab group"
          aria-label={`${t.label}, page ${t.n}`}
        >
          <span className="thumb-n">{t.n}</span>
          <span className="thumb-label">{t.label}</span>
        </a>
      ))}
    </nav>
  );
}
