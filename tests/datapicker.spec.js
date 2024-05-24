import {test,expect} from '@playwright/test'



test('datapicker',async({page})=>{
    

await page.goto("https://testautomationpractice.blogspot.com")

// await page.fill("#datapicker","12-25-2024")




const year="2024"
const month="May"
const date='25'




await page.locator("#datepicker").click();



while(true){

    const currentMonth=await page.locator(".ui-datepicker-month").textContent()
    const currentYear=await page.locator(".ui-datepicker-year").textContent()

    if (currentYear==year && currentMonth==month){

        break
    }

    await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
}

const dates=await page.$$(".ui-state-default")
for(const dt of dates){
if (await dt.textContent==date){

    await dt.click();
    break
}

}

await page.waitForTimeout(5000)




})