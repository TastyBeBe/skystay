# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js 16 (App Router, `output: 'export'`) + React 19 + Tailwind CSS v4, with fonts self-hosted at build time by `next/font`. Deploy target is GitHub Pages under the `TastyBeBe` account, which serves static files only.

No motion library ships. The page's motion is entirely native CSS scroll-driven animation (`view-timeline` + `animation-range`), which runs off the main thread and holds 130 simultaneously animating rows without a dropped frame. A JS smooth-scroll layer (Lenis) was installed and then removed: its `requestAnimationFrame` loop competes with the compositor-driven timelines it would be scrolling, and native scrolling is both smoother here and more accessible. Playwright is a dev dependency, used for the capture, responsive-overflow and reduced-motion audits in `scripts/`.

## Users

Primary: senior operators — founders, partners, principals — whose hourly value materially exceeds the membership fee. They fly ten to twenty times a year on trips that are neither purely business nor purely personal, and they currently do their own searching across many tabs, late at night, badly. Their job when they arrive at this page is to decide whether handing the search to a named human is credible, and whether this particular company is the one to hand it to.

They are not price-hunters. The unit they are trying to buy back is hours and attention, not fare savings — though fare savings are the proof that the service is competent.

## Product Purpose

Sky Stay Travel replaces the traveller's own search with a named human who does it for them. The member says where and roughly when; a dedicated travel concierge returns a small number of decided options — flights and hotel together — and books the one the member picks.

Success is the member never opening a booking site again, and renewing.

## Positioning

The company is paid by the member and by nobody else. It takes no commission, no rebate, and no placement money from airlines or hotels, which means the option it recommends is the option it actually believes is best. A commission-funded competitor cannot truthfully make that claim, and that single structural fact is the company's whole position.

Second-order: the member gets the same person every time, not a ticket queue. The concierge accumulates knowledge of the member — seat preference, hotel floor, which airports they refuse — and that knowledge compounds. A support queue cannot compound.

## Operating Context

The member's own scene: a phone or laptop at the end of a working day, a trip that needs to exist, and no appetite to compare forty fares. Requests arrive as plain language over whatever channel the member already uses. The member never touches a search interface.

The concierge's scene, which the surface can dramatize: a person working against fare rules, award availability, hold windows, hotel rate codes and direct relationships — the craft the member is buying.

The product has two halves that map exactly onto the company's name: **Sky** (the flight) and **Stay** (the hotel). Nothing is sold as one without the other; the whole value is that one person decides both together, so the arrival time and the check-in actually line up.

## Capabilities and Constraints

Confirmed:
- Members submit trip requests in plain language; there is no search UI to operate.
- One named concierge per member, consistent across trips.
- Flights and accommodation are decided and booked together, by the same person.
- Revenue is member subscription only. No supplier commission.

Undecided and not to be invented as fact by future work: exact price point, exact response-time guarantee, geographic coverage, cancellation and change handling, how membership is capped or tiered.

## Brand Commitments

- **Name: "Sky Stay Travel".** Chosen by the owner and binding. The wordmark may set "SKY STAY" as the dominant mark with "Travel" as a smaller descriptive tail; the name itself does not change.
- The name's two halves — Sky and Stay — are the product's two halves. This duality is a real structural fact, not a visual conceit, and the surface is expected to use it.
- Visual direction pinned by the owner: **light, editorial, warm paper.** Paper ground, ink text, a single deep accent. This pins the *world*, not its softest rendition — the full material range of print and paper stays in play.
- Voice: the company is paid by the member, so it speaks to them as a professional to a client — plain, specific, unhurried, never salesy, never luxury-perfume abstraction.

## Evidence on Hand

**None. This is a greenfield fictional company with no real customers, no real bookings, no real press and no real numbers.**

Every name, figure, testimonial, itinerary, fare, hotel rate, response time and price that appears on the built surface is authored demonstration material, not fact. It is authored at production fidelity because a page cannot be judged on lorem ipsum, but it is all synthetic and is listed for replacement in the project's README before any real-world use.

Real, licensed photography may be sourced (Unsplash and similar free-licence sources) and must have its origin recorded.

## Product Principles

1. **Paid by the member, by nobody else.** Every page-level claim traces back to this. If a design choice would read as commission-funded — a rate comparison, a "deal" badge, a sponsored tile — it is wrong here.
2. **A person, not a platform.** The thing being sold is a named human with judgment. Interface that makes the company look like software undersells it.
3. **Sky and Stay are one decision.** Never present flights and hotels as two products, two sections of equal independence, or two CTAs.
4. **Show the craft, don't claim it.** The member is buying expertise they cannot see. The surface has to make that expertise visible — real fare logic, real hold windows, real trade-offs — rather than asserting "expert concierges".
5. **Quiet is the proof.** The audience reads urgency, discounts and exclamation as evidence of a commission model. Restraint is not a style choice here; it is an argument.

## Accessibility & Inclusion

No product-specific requirement was established beyond normal standards: the surface must meet WCAG AA contrast, be fully keyboard operable, and honour `prefers-reduced-motion` — which matters more than usual here because the surface is motion-led.
