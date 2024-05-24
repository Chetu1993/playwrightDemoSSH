import{test,expect,chromium} from '@playwright/test'


test.skip('windows',async()=>{

const browser=await chromium.launch()
const context=await browser.newContext()

const page1=await context.newPage()
const page2=await context.newPage()

const allpages=await context.pages()
console.log("number of pages are: ",allpages.length )

await page1.goto("https://demo.nopcommerce.com/register")
await expect(page1).toHaveTitle("nopCommerce demo store. Register")

await page2.goto("https://testautomationpractice.blogspot.com/")
await expect(page2).toHaveTitle("Automation Testing Practice")



})




test("newtest",async()=>{


const browser=await chromium.launch();
const context=await browser.newContext();

const page1=await context.newPage();

await page1.goto("https://demo.nopcommerce.com/")
await expect(page1).toHaveTitle("nopCommerce demo store")

const pagePromise=await context.waitForEvent('page')

page1.locator("//a[@class='ico-register']").click()

const newpage=await pagePromise
await expect(newpage).toHaveTitle("nopCommerce demo store. Register")

await page1.waitForTimeout(3000)
await newpage.waitForTimeout(3000)

await browser.close();





})
















