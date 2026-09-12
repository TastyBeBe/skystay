import { chromium } from "playwright";
const b = await chromium.launch();
for (const [label,w,h] of [["desktop",1440,900],["mobile",390,844]]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, reducedMotion:"no-preference" });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
  await p.evaluate(()=>document.fonts.ready);
  const r = await p.evaluate(() => {
    const sec=document.querySelector(".resolve");
    const stage=document.querySelector(".resolve-stage");
    const lead=document.querySelector(".resolve-lead");
    const vh=innerHeight, H=sec.offsetHeight, total=H+vh;
    const leadH=lead.offsetHeight;
    // stage sticks when its top reaches viewport top
    const stickStart=(leadH+vh)/total*100;
    const stickEnd=H/total*100;
    return { vh, sectionH:H, leadH, stickStart:+stickStart.toFixed(1), stickEnd:+stickEnd.toFixed(1) };
  });
  // widest element inside the stage at its animated peak
  await p.evaluate(()=>{const s=document.querySelector(".resolve");window.scrollTo(0,s.offsetTop+s.offsetHeight*0.72);});
  await p.waitForTimeout(700);
  const fit = await p.evaluate(() => {
    const lift=document.querySelector(".resolve-lift");
    const b=lift.getBoundingClientRect();
    const v=document.querySelector(".resolve-verdict").getBoundingClientRect();
    const foot=document.querySelector(".resolve-foot").getBoundingClientRect();
    return { liftLeft:Math.round(b.left), liftRight:Math.round(b.right), vw:innerWidth,
             liftBottom:Math.round(b.bottom), verdictTop:Math.round(v.top), verdictBottom:Math.round(v.bottom), footTop:Math.round(foot.top) };
  });
  console.log(label, JSON.stringify(r), JSON.stringify(fit));
  await ctx.close();
}
await b.close();
