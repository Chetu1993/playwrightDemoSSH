import {test, expect} from '@playwright/test'


let page;
test.beforeAll(async ({browser})=>{

page=await browser.newPage();

await page.goto("https://demoblaze.com/index.html")
await page.locator("#login2").click()

await page.locator("#loginusername").fill("pavanol")
await page.locator("#loginpassword").fill("test@123")
await page.locator("//button[contains(text(),'Log in')]").click()

});

test.afterAll(async()=>{

    await page.locator("//a[contains(text(),'Log out')]").click

})



test('home page test',async()=>{

//home page

const products=await page.locator("//h4/a")
console.log("the number of products:", await products.length)


})


test('add products to cart',async()=>{


//add product to cart

await page.on('dialog',async dialog=>{

expect(dialog.message()).toContain('Product added.')
await dialog.accept()

})
await page.locator("//h4/a[contains(text(),'s6')]").click()

await page.locator("//a[@onclick='addToCart(1)']").click()


//logout



})