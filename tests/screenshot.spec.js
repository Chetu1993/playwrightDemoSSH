import {test,expect} from '@playwright/test'


test('page screenshot',async({page})=>{

await page.goto("https://demoblaze.com/index.html")
await page.screenshot({path:"tests\\screenshots\\"+Date.now()+"demoblaze.png"})


})

test("full page screenshot",async({page})=>{

await page.goto("https://demoblaze.com/index.html")
await page.screenshot({path:"tests\\screenshots\\"+Date.now()+"fullpage.png",fullPage:true})



})

test.only("webelement screenshot",async({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.locator("(//div[@class='card h-100'])[1]").screenshot({path:"tests\\screenshots\\"+Date.now()+"element.png"})

})