import { chromium } from "playwright";
const URL = process.env.URL ?? "http://localhost:3000";
const b = await chromium.launch();
for (const [label, w, h] of [["mobile",390,844],["tablet",768,1024],["desktop",1440,900],["wide",1920,1080],["small-desktop",1280,800]]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h} });
  const p = await ctx.newPage();
  const errs=[]; p.on("pageerror",e=>errs.push(String(e))); p.on("console",m=>m.type()==="error"&&errs.push(m.text()));
  await p.goto(URL,{waitUntil:"networkidle"});
  await p.evaluate(()=>document.fonts.ready);
  const r = await p.evaluate(() => {
    const de=document.documentElement;
    const over=[...document.querySelectorAll("body *")].filter(e=>{
      const b=e.getBoundingClientRect();
      return b.width>0 && (b.right > de.clientWidth + 2) && getComputedStyle(e).position !== "fixed";
    }).slice(0,8).map(e=>`${e.tagName}.${(e.className&&e.className.baseVal!==undefined?e.className.baseVal:String(e.className)).split(" ").slice(0,2).join(".")} right=${Math.round(e.getBoundingClientRect().right)}`);
    // contrast-ish check: any text on paper that is lighter than ink-35
    return { scrollW: de.scrollWidth, clientW: de.clientWidth, docH: de.scrollHeight, over };
  });
  console.log(label, JSON.stringify(r), errs.length?`ERRORS:${errs.slice(0,3)}`:"");
  await ctx.close();
}
await b.close();
