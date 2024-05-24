import {test, expect} from '@playwright/test'



test('home page test',async({page})=>{
//login

await page.goto("https://demoblaze.com/index.html")
await page.locator("#login2").click();

await page.locator("#loginusername").fill("pavanol")
await page.locator("#loginpassword").fill("test@123")
await page.locator("//button[contains(text(),'Log in')]").click()





//home page

const products=await page.locator("//h4/a")
console.log("the number of products:", await products.length)

//logout
await page.locator("//a[contains(text(),'Log out')]").click


})


test('add products to cart',async({page})=>{


//login
await page.goto("https://demoblaze.com/index.html")
await page.locator("#login2").click();

await page.locator("#loginusername").fill("pavanol")
await page.locator("#loginpassword").fill("test@123")
await page.locator("//button[contains(text(),'Log in')]").click()


//add product to cart

await page.on('dialog',async dialog=>{

expect(dialog.message()).toContain('Product added.')
await dialog.accept()

})



await page.locator("//h4/a[contains(text(),'s6')]").click()

await page.locator("//a[@onclick='addToCart(1)']").click()


//logout
await page.locator("//a[contains(text(),'Log out')]").click()


})