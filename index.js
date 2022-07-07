const puppeteer = require("puppeteer");

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1024, height: 1024 },
  });

  const page = await browser.newPage();
  await page.goto("http://radola.sk");

  await page.waitForNetworkIdle();

  await page.click("#mainnav .rmRootGroup li:nth-child(2)");

  await wait(5000);

  await browser.close();
}

main();
