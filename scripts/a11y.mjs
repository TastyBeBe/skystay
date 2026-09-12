import { chromium } from "playwright";
const URL = process.env.URL ?? "http://localhost:3000";
const b = await chromium.launch();

// 1. Reduced motion: nothing may be hidden by an animation that no longer runs.
{
  const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"reduce" });
  const p = await ctx.newPage();
  await p.goto(URL,{waitUntil:"networkidle"});
  await p.evaluate(()=>document.fonts.ready);
  const hidden = await p.evaluate(() => {
    const out=[];
    for (const el of document.querySelectorAll("h1,h2,p,li,dd,dt,span.resolve-winner,.resolve-verdict,.resolve-lift-label")) {
      const cs=getComputedStyle(el);
      const txt=(el.textContent||"").trim();
      if (!txt) continue;
      if (parseFloat(cs.opacity) < 0.25) out.push(`${el.tagName}.${String(el.className).split(" ")[0]} op=${cs.opacity} "${txt.slice(0,40)}"`);
    }
    return out.slice(0,12);
  });
  const h = await p.evaluate(()=>document.documentElement.scrollHeight);
  console.log("REDUCED MOTION → docH", h, "| hidden text nodes:", hidden.length, hidden);
  await p.screenshot({ path: ".impeccable/review/reduced-motion.png" });
  await ctx.close();
}

// 2. No scroll-timeline support: same guarantee.
{
  const ctx = await b.newContext({ viewport:{width:1440,height:900} });
  const p = await ctx.newPage();
  await p.addInitScript(() => {
    const orig = CSS.supports.bind(CSS);
    CSS.supports = (...a) => (String(a).includes("animation-timeline") ? false : orig(...a));
  });
  await p.goto(URL,{waitUntil:"networkidle"});
  const focus = await p.evaluate(async () => {
    // keyboard reachability of every interactive control
    const els=[...document.querySelectorAll("a[href],button,input,select,textarea,[tabindex]:not([tabindex='-1'])")];
    return { count: els.length, noOutline: els.filter(e=>{ e.focus(); const cs=getComputedStyle(e); return cs.outlineStyle==='none' && !cs.boxShadow.includes('rgb'); }).length };
  });
  console.log("KEYBOARD → focusable:", focus.count, "| without a visible focus ring:", focus.noOutline);
  await ctx.close();
}
await b.close();
