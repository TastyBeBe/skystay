import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const URL = process.env.URL ?? "http://localhost:3000";
const OUT = ".impeccable/review";
mkdirSync(OUT, { recursive: true });
mkdirSync(`${OUT}/motion`, { recursive: true });

/** Entrance reveals are scroll-linked, so a full-page shot would freeze half of
 *  them mid-flight and read as missing elements. Settle them before capturing. */
const SETTLE = `
  [data-reveal], [data-reveal-rule] { animation: none !important; opacity: 1 !important; transform: none !important; }
  [data-ticker], .lat-drift { animation: none !important; }
`;

const browser = await chromium.launch();

async function shot(name, width, height, { settle = true, scrollTo = null, fullPage = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto(URL, { waitUntil: "networkidle" });
  if (settle) await page.addStyleTag({ content: SETTLE });
  await page.evaluate(() => document.fonts.ready);

  if (scrollTo !== null) {
    await page.evaluate((frac) => {
      const r = document.querySelector(".resolve");
      window.scrollTo(0, r.offsetTop + r.offsetHeight * frac);
    }, scrollTo);
    await page.waitForTimeout(700);
  } else {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
  }

  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage });
  if (errors.length) console.log(`  ! ${name} console errors:`, errors.slice(0, 5));
  await ctx.close();
  return errors;
}

console.log("capturing…");
await shot("desktop", 1440, 900, { fullPage: true });
await shot("mobile", 390, 844, { fullPage: true });
await shot("desktop-hero", 1440, 900);
await shot("mobile-hero", 390, 844);

// The signature motion, sampled along its own timeline. Reveals stay live here.
for (const [name, frac] of [
  ["motion/resolve-20", 0.2],
  ["motion/resolve-45", 0.45],
  ["motion/resolve-62", 0.62],
  ["motion/resolve-78", 0.78],
  ["motion/resolve-92", 0.92],
]) {
  await shot(name, 1440, 900, { settle: false, scrollTo: frac });
}

// Section-level captures: a full-page thumbnail hides exactly the failures
// that matter, so each sheet is inspected at its own scale.
for (const id of ["document", "trust", "work", "person", "membership"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1100 }, reducedMotion: "no-preference" });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: SETTLE });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate((i) => document.getElementById(i).scrollIntoView(), id);
  await page.waitForTimeout(500);
  await page.locator(`#${id}`).screenshot({ path: `${OUT}/section-${id}.png` });
  await ctx.close();
}
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: SETTLE });
  await page.evaluate(() => document.fonts.ready);
  await page.locator("footer.colophon").screenshot({ path: `${OUT}/section-colophon.png` });
  await ctx.close();
}

await browser.close();
console.log("done →", OUT);
