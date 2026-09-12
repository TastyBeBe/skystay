import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
for (const id of ["document","trust","work","person","membership"]) {
  await p.evaluate(i=>document.getElementById(i).scrollIntoView({block:"center"}), id);
  await p.waitForTimeout(500);
  const lit = await p.evaluate(() => [...document.querySelectorAll(".thumb-tab")].map(t=>({
    href:t.getAttribute("href"), bg:getComputedStyle(t).backgroundColor
  })).filter(t=>t.bg.includes("31, 75, 63")).map(t=>t.href));
  console.log("viewing", id, "→ lit tabs:", JSON.stringify(lit));
}
await b.close();
