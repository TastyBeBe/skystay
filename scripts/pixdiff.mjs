import { chromium } from "playwright";
import { readFileSync } from "node:fs";
const pairs = process.argv.slice(2);
const b = await chromium.launch();
const p = await (await b.newContext()).newPage();
await p.goto("about:blank");
for (const name of pairs) {
  const a = readFileSync(`/tmp/baseline/${name}`).toString("base64");
  const c = readFileSync(`.impeccable/review/${name}`).toString("base64");
  const r = await p.evaluate(async ([a,c]) => {
    const load = s => new Promise(res=>{const i=new Image();i.onload=()=>res(i);i.src="data:image/png;base64,"+s;});
    const [A,B] = await Promise.all([load(a),load(c)]);
    if (A.width!==B.width||A.height!==B.height) return {sizeMismatch:[A.width,A.height,B.width,B.height]};
    const cv=document.createElement("canvas"); cv.width=A.width; cv.height=A.height;
    const ctx=cv.getContext("2d",{willReadFrequently:true});
    ctx.drawImage(A,0,0); const da=ctx.getImageData(0,0,cv.width,cv.height).data;
    ctx.clearRect(0,0,cv.width,cv.height); ctx.drawImage(B,0,0); const db=ctx.getImageData(0,0,cv.width,cv.height).data;
    let diff=0, maxd=0;
    for (let i=0;i<da.length;i+=4){
      const d=Math.abs(da[i]-db[i])+Math.abs(da[i+1]-db[i+1])+Math.abs(da[i+2]-db[i+2]);
      if(d>12){diff++; if(d>maxd)maxd=d;}
    }
    return {px:cv.width*cv.height, diff, pct:+(diff/(cv.width*cv.height)*100).toFixed(3), maxd};
  }, [a,c]);
  console.log(name, JSON.stringify(r));
}
await b.close();
