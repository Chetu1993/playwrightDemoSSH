import {test,expect} from '@playwright/test'

test('locators',async({page})=>{

await page.goto('https://demoblaze.com/index.html');
const pageTitle=await page.title();
console.log(pageTitle)

const pageurl=await page.url();
console.log(pageurl);

await page.locator("//a[@id='login2']").click();
await page.locator("//input[@id='loginusername']").fill('pavanol')
await page.locator("//input[@id='loginpassword']").fill("test@123")
await page.locator("button[onclick='logIn()']").click()
const logout=await page.locator("//a[@id='logout2']")
await expect(logout).toBeVisible();
await page.close();





});