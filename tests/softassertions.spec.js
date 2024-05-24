import {test,expect} from '@playwright/test'

test('soft assertions',async({page})=>{

await page.goto("https://demoblaze.com/index.html")

// const url=await expect(page).toHaveURL("https://demoblaze.com/index.html");

// const title=await expect(page).toHaveTitle("STORE1");

// const logo=await page.locator("//a[@class='navbar-brand']")
// await expect(logo).toBeVisible();

const url=await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");

const title=await expect.soft(page).toHaveTitle("STORE1");

const logo=await page.locator("//a[@class='navbar-brand']")
await expect.soft(logo).toBeVisible();





})