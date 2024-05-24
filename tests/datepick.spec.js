import {test,expect} from '@playwright/test'


test('datepicker',async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com")

const year="2021"
const month="April"
const date="15"

await page.locator("#datepicker").click();



while(true){

    const currentMonth=await page.locator(".ui-datepicker-month").textContent()
    const currentYear=await page.locator(".ui-datepicker-year").textContent()

    if (currentYear==year && currentMonth==month){

        break
    }

    // await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()

    await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();
}





//a[@class='ui-state-default'][text()='5']
await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()

await page.waitForTimeout(5000)

})