import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:390,height:844}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
for (const f of [0.25, 0.62]) {
  await p.evaluate(x=>{const r=document.querySelector(".resolve"); window.scrollTo(0, r.offsetTop + r.offsetHeight*x);}, f);
  await p.waitForTimeout(700);
  await p.screenshot({ path:`.impeccable/review/m-resolve-${Math.round(f*100)}.png` });
}
await b.close(); console.log("ok");
