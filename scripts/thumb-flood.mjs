import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
await p.evaluate(()=>{const r=document.querySelector(".resolve");window.scrollTo(0,r.offsetTop+r.offsetHeight*0.62);});
await p.waitForTimeout(900);
const r = await p.evaluate(()=>({
  flood: getComputedStyle(document.querySelector(".resolve-flood")).opacity,
  tabs: [...document.querySelectorAll(".thumb-tab")].map(t=>({href:t.getAttribute("href"),bg:getComputedStyle(t).backgroundColor,n:getComputedStyle(t.querySelector(".thumb-n")).color})),
}));
console.log("flood:", r.flood);
for (const t of r.tabs) console.log(" ", t.href, "bg", t.bg, "num", t.n);
await p.screenshot({path:".impeccable/review/thumb-on-flood.png"});
// membership (always flooded)
await p.evaluate(()=>document.getElementById("membership").scrollIntoView({block:"center"}));
await p.waitForTimeout(600);
const m = await p.evaluate(()=>[...document.querySelectorAll(".thumb-tab")].filter(t=>!getComputedStyle(t).backgroundColor.includes("242, 238, 230")).map(t=>({href:t.getAttribute("href"),bg:getComputedStyle(t).backgroundColor})));
console.log("membership lit:", JSON.stringify(m));
await b.close();
