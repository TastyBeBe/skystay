/** Authored marks. One family, one stroke weight, no library, no emoji. */

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
};

export const ArrowEast = (p: { className?: string }) => (
  <svg {...base} {...p}>
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
);

export const ArrowSouth = (p: { className?: string }) => (
  <svg {...base} {...p}>
    <path d="M8 2v11M4 9l4 4 4-4" />
  </svg>
);

export const Kept = (p: { className?: string }) => (
  <svg {...base} {...p}>
    <path d="M2.5 8.4l3.6 3.6L13.5 4.6" />
  </svg>
);

export const Struck = (p: { className?: string }) => (
  <svg {...base} {...p}>
    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
  </svg>
);

/** The register mark a two-colour press uses to align the plates. */
export const Register = (p: { className?: string }) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4.4" />
    <path d="M8 0.6v4.2M8 11.2v4.2M0.6 8h4.2M11.2 8h4.2" />
  </svg>
);
