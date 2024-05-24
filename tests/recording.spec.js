import {test,expect} from '@playwright/test'


test('recording',async({page})=>{

await page.goto("https://demoblaze.com/index.html")

await page.locator("//a[@id='login2']").click()

await page.locator("//input[@id='loginusername']").fill("pavanol")

await page.locator("//input[@id='loginpassword']").fill("test@123")

await page.locator("//button[@onclick='logIn()']").click()

const logout=await page.locator("//a[@onclick='logOut()']")

await expect(logout).toBeVisible();




})