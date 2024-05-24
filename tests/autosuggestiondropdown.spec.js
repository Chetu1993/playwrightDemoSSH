import {test,expect} from '@playwright/test'

test('autosuggestiondropdown',async({page})=>{


await page.goto("https://redbus.in")

await page.locator("(//input[@type='text'])[1]").fill("Delhi")
await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']//div/text[1]")

const a=await page.$$("//li[@class='sc-iwsKbI jTMXri']//div/text[1]")

for(const b of a){

    const value=await b.textContent();
    // console.log(value)
    if (value.includes("Rohini")){

     await b.click();
        break;
    }
}

await page.waitForTimeout(5000)

})