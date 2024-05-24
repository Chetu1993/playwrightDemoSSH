import {test,expect} from '@playwright/test'


test('mousehover',async({page})=>{



await page.goto("https://demo.nopcommerce.com")
 const title=await page.title();
 const url=await page.url();

console.log("title name is: ",title)
console.log("the url name is:", url)

const computers=await page.locator("//ul[@class='top-menu mobile']//a[normalize-space()='Computers']")
const notebooks=await page.locator("//ul[@class='top-menu mobile']//a[normalize-space()='Notebooks']")

await computers.hover()
await notebooks.hover()

await page.waitForTimeout(5000)

})