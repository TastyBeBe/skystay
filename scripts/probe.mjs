import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000", { waitUntil:"networkidle" });
for (const frac of [0.45, 0.62, 0.70]) {
  await p.evaluate(f => { const r=document.querySelector(".resolve"); window.scrollTo(0, r.offsetTop + r.offsetHeight*f); }, frac);
  await p.waitForTimeout(600);
  const out = await p.evaluate(() => {
    const g = s => { const e=document.querySelector(s); if(!e) return {missing:s};
      const cs=getComputedStyle(e); const r=e.getBoundingClientRect();
      return {rect:[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)], opacity:cs.opacity, color:cs.color, transform:cs.transform, z:cs.zIndex, display:cs.display}; };
    const a=document.querySelector(".resolve-flood").getAnimations()[0];
    return { tl: a && a.timeline.currentTime!==null ? String(a.timeline.currentTime) : null,
      lift:g(".resolve-lift"), wrap:g(".resolve-lift-wrap"), verdict:g(".resolve-verdict"),
      body:g(".resolve-body"), flood:g(".resolve-flood"), winner:g(".resolve-winner") };
  });
  console.log("frac", frac, JSON.stringify(out, null, 1));
}
await b.close();
