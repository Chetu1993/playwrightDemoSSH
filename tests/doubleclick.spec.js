import {test,expect} from '@playwright/test'


test('doubleclick',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")

const button= await page.locator("//button[normalize-space()='Copy Text']")



await button.dblclick()


const field=await page.locator("//input[@id='field2']")
await expect(field).toHaveValue("Hello World!")

await page.waitForTimeout(5000)





})