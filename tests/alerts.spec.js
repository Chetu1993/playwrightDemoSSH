import {test,expect} from '@playwright/test'


// test('alerts',async({page})=>{


// await page.goto("https://testautomationpractice.blogspot.com")
// const a=await page.title();
// console.log(a);

// await page.on("dialog",async(dialog)=>{

// // dialog window handler
//     expect(dialog.type()).toContain('alert')
//     expect(dialog.message()).toContain("I am an alert box!")
//     await dialog.dismiss();

// })


// await page.locator("//*[@id='HTML9']/div[1]/button[1]").click();

// await page.waitForTimeout(5000)


// })






// test('confirm',async({page})=>{


// await page.goto("https://testautomationpractice.blogspot.com")

// await page.on("dialog",async(dialog)=>{


// await expect(dialog.type()).toContain("confirm")
// await expect(dialog.message()).toContain("Press a button!")
// await dialog.accept();


// })

// await page.locator("//*[@id='HTML9']/div[1]/button[2]").click()

// await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")

// await page.waitForTimeout(5000)


// })




test('prompt dialog',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")

page.on("dialog",async(dialog)=>{


expect(dialog.type()).toContain("prompt")
expect(dialog.message()).toContain("Please enter your name:")
expect(dialog.defaultValue()).toContain("Harry Potter")

await dialog.accept("chetan")




})

await page.locator("//button[@onclick='myFunctionPrompt()']").click();
await expect(page.locator("//p[@id='demo']")).toHaveText("Hello chetan! How are you today?")


await page.waitForTimeout(5000)
})






















