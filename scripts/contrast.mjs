import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion: process.env.RM ? "reduce" : "no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000",{waitUntil:"networkidle"});
await p.evaluate(()=>document.fonts.ready);
const res = await p.evaluate(() => {
  const lin = c => { c/=255; return c<=0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
  const L = ([r,g,bb]) => 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(bb);
  const parse = s => { const m=s.match(/[\d.]+/g).map(Number); return {rgb:m.slice(0,3), a: m.length>3?m[3]:1}; };
  const over = (fg,a,bg) => fg.map((c,i)=> c*a + bg[i]*(1-a));
  const ratio = (fg,bg) => { const l1=L(fg), l2=L(bg); const [hi,lo]=l1>l2?[l1,l2]:[l2,l1]; return (hi+0.05)/(lo+0.05); };
  const bgOf = el => { let n=el; while(n && n!==document.documentElement){ const c=getComputedStyle(n).backgroundColor; const q=parse(c); if(q.a>0.9) return q.rgb; n=n.parentElement;} return [250,248,244]; };
  const out=[];
  const sel="h1,h2,h3,p,li,dt,dd,span,a,button,figcaption,blockquote";
  for (const el of document.querySelectorAll(sel)) {
    const t=(el.textContent||"").trim();
    if(!t || el.children.length>0 && el.textContent.trim()!==[...el.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join("").trim()) continue;
    const cs=getComputedStyle(el);
    if (cs.visibility==="hidden" || cs.display==="none" || parseFloat(cs.opacity)<0.1) continue;
    const r=el.getBoundingClientRect(); if(r.width<1||r.height<1) continue;
    const f=parse(cs.color); const bg=bgOf(el);
    const eff=over(f.rgb, f.a, bg);
    const px=parseFloat(cs.fontSize); const wgt=parseInt(cs.fontWeight)||400;
    const large = px>=24 || (px>=18.66 && wgt>=700);
    const cr=ratio(eff,bg); const need = large?3:4.5;
    if (cr < need) out.push({ cls:String(el.className).split(" ")[0]||el.tagName, px:+px.toFixed(1), ratio:+cr.toFixed(2), need, text:t.slice(0,44) });
  }
  const seen=new Set(); return out.filter(o=>{const k=o.cls+o.ratio; if(seen.has(k))return false; seen.add(k); return true;}).slice(0,20);
});
console.log("AA failures on light sheets:", res.length);
for (const r of res) console.log(" ", JSON.stringify(r));
await b.close();
