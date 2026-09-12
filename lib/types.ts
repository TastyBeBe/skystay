export type FareRow = {
  pair: string;
  flt: string;
  dep: string;
  arr: string;
  eq: string;
  days: string;
  fare: string;
  rate: string;
};

export type Decided = FareRow & {
  hotel: string;
  room: string;
  note: string;
};

export type Routing = {
  label: string;
  detail: string;
  reason: string;
};

/** Deterministic PRNG. No Math.random anywhere — the field must be
 *  byte-identical between server render and client hydration. */
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Pad to an exact ch count so the lattice stays a lattice. */
export function cell(value: string, width: number) {
  const v = value.length > width ? value.slice(0, width) : value;
  return v.padEnd(width, " ");
}
