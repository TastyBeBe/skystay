import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:"no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
await p.evaluate(()=>{const r=document.querySelector(".resolve"); window.scrollTo(0, r.offsetTop + r.offsetHeight*0.62);});
await p.waitForTimeout(900);
const res = await p.evaluate(() => {
  const lin=c=>{c/=255;return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4);};
  const L=([r,g,bb])=>0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(bb);
  const parse=s=>{const m=s.match(/[\d.]+/g).map(Number);return {rgb:m.slice(0,3),a:m.length>3?m[3]:1};};
  const ratio=(f,bg)=>{const l1=L(f),l2=L(bg);const[hi,lo]=l1>l2?[l1,l2]:[l2,l1];return (hi+0.05)/(lo+0.05);};
  // the flood is the real ground here
  const flood=document.querySelector(".resolve-flood");
  const fop=parseFloat(getComputedStyle(flood).opacity);
  const green=[31,75,63], paper=[250,248,244];
  const ground=green.map((c,i)=>c*fop+paper[i]*(1-fop));
  const out=[];
  for (const sel of [".resolve-lift",".resolve-winner",".resolve-lift-label",".resolve-verdict-line",".resolve-verdict-sub",".resolve-tally",".resolve-tally-label",".resolve-foot"]) {
    const el=document.querySelector(sel); if(!el) continue;
    const cs=getComputedStyle(el); const f=parse(cs.color);
    const eff=f.rgb.map((c,i)=>c*f.a+ground[i]*(1-f.a));
    out.push({sel, px:+parseFloat(cs.fontSize).toFixed(1), opacity:+cs.opacity, ratio:+ratio(eff,ground).toFixed(2)});
  }
  return {floodOpacity:fop, results:out};
});
console.log("ground = flood at opacity", res.floodOpacity);
for (const r of res.results) console.log(" ", JSON.stringify(r));
await b.close();
