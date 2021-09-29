const {parse} = require("node-html-parser");
const puppeteer = require("puppeteer");

/* crawler aave-protocol

{
  tokenSummary: {
    holdersMakeMoney: {
      in: 22,
      ...
    }
  }
}
*/

const URL_base = "https://research.binance.com/en/projects";
const endpoint = process.argv[2] || "/aave-protocol"; // also tried "/agrello"

const fetchData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL_base + endpoint);
  const html = await page.$eval('#holders-making-money-at-current-price', e => e.outerHTML);

  const root = parse(html);
  await browser.close();
  const values = root.querySelectorAll('div .value').map(node => node.innerText);

  const result = {
    tokenSummary: {
      holdersMakeMoney: {

      }
    }
  };
  const labels = ['in', 'at', 'out'];
  labels.forEach((label, idx) => result.tokenSummary.holdersMakeMoney[label] = values[idx]);
  return result;
}

fetchData().then(data => {
  console.log(data)
})