import {test,expect} from '@playwright/test'


test('screenshot',async({page})=>{

await page.goto("https://demoblaze.com/index.html")

await page.locator("//a[@id='login2']").click();

await page.locator("#loginusername").fill("pavanol")
await page.locator("#loginpassword").fill("test@123")
await page.locator("//button[@onclick='logIn()']").click()




})