import { chromium } from "playwright";
const URL = "https://tastybebe.github.io/skystay/";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
const errs=[], failed=[];
p.on("pageerror",e=>errs.push(String(e))); p.on("console",m=>m.type()==="error"&&errs.push(m.text()));
p.on("requestfailed", r=>failed.push(r.url()));
p.on("response", r=>{ if(r.status()>=400) failed.push(r.status()+" "+r.url()); });
await p.goto(URL,{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
// force every lazy image to load
await p.evaluate(async () => {
  for (const img of document.querySelectorAll("img")) { img.loading="eager"; img.scrollIntoView(); }
  await new Promise(r=>setTimeout(r,1500));
  window.scrollTo(0,0);
});
await p.waitForTimeout(1500);
const r = await p.evaluate(() => ({
  imgs: [...document.querySelectorAll("img")].map(i=>({src:i.getAttribute("src"), ok:i.complete && i.naturalWidth>0, w:i.naturalWidth})),
  font: getComputedStyle(document.querySelector("h1")).fontFamily.split(",")[0],
  bg: getComputedStyle(document.body).backgroundColor,
  noScrollX: document.documentElement.scrollWidth === document.documentElement.clientWidth,
  title: document.title,
}));
console.log("title:", r.title);
console.log("display font:", r.font, "| body bg:", r.bg, "| no horizontal scroll:", r.noScrollX);
console.log("images:", JSON.stringify(r.imgs));
console.log("console errors:", errs.length, errs.slice(0,3));
console.log("failed/4xx requests:", failed.length, failed.slice(0,3));
// motion on the live site
await p.evaluate(()=>{const s=document.querySelector(".resolve");window.scrollTo(0,s.offsetTop+s.offsetHeight*0.62);});
await p.waitForTimeout(1200);
const m = await p.evaluate(()=>{
  const f=document.querySelector(".resolve-flood");
  return { floodOpacity:getComputedStyle(f).opacity, tally:getComputedStyle(document.querySelector(".resolve-tally")).color,
           liftColor:getComputedStyle(document.querySelector(".resolve-lift")).color };
});
console.log("live motion at 62%:", JSON.stringify(m));
await p.screenshot({path:".impeccable/review/live-resolve.png"});
await b.close();
