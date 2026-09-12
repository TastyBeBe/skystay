import { chromium } from "playwright";
const b = await chromium.launch();
const SETTLE = `[data-reveal],[data-reveal-rule]{animation:none!important;opacity:1!important;transform:none!important}[data-ticker],.lat-drift{animation:none!important}`;
for (const id of ["document","trust","membership"]) {
  const ctx = await b.newContext({ viewport:{width:390,height:844} });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
  await p.addStyleTag({content:SETTLE});
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(i=>document.getElementById(i).scrollIntoView(), id);
  await p.waitForTimeout(400);
  await p.locator(`#${id}`).screenshot({ path:`.impeccable/review/m-${id}.png` });
  await ctx.close();
}
await b.close(); console.log("ok");
