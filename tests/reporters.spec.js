import {test,expect} from '@playwright/test'


test('firsttest',async({page})=>{


await page.goto("https://demoblaze.com/index.html")

await expect(page).toHaveTitle("STORE")

})

test("secondtest",async({page})=>{

await page.goto("https://demo.nopcommerce.com/")
await expect(page).toHaveTitle("nopCommerce demo store")

})


test("thirdcase",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")
await expect(page).toHaveTitle('Automation Testing Practice')



})