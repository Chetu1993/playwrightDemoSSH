// @ts-check
const { test, expect, chromium } = require('@playwright/test');
// const { describe } = require('node:test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// test('setup',async({})=>{

// const browser=await chromium.launch({

//   executablePath:"C:\\Users\\cks_1\\AppData\\Local\\ms-playwright\\chromium-win64\\chrome-win\\chrome.exe"

// })
// const context=await browser.newContext()
// const page=await context.newPage()
// await page.goto('https://playwright.dev/');
// await expect(page).toHaveTitle(/Playwright/);

// })

// test('good',async({})=>{

//   const browser=await chromium.launch({
//   executablePath:"C:\\Users\\cks_1\\AppData\\Local\\ms-playwright\\chromium-win64\\chrome-win\\chrome.exe"

// })
// const context=await browser.newContext()
// const page=await context.newPage()
// await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

// })



// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
