import {test,expect} from '@playwright/test'


test('multiselectdropdowns',async({page})=>{

// select multiple options from multi select dropdown
await page.goto("https://testautomationpractice.blogspot.com/")

// page.locator("#colors").selectOption(['Red','Blue','White'])

//check number of options in dropdowns
// const options=await page.locator('#colors option')
// await expect(options).toHaveCount(5)

// check number of options using JS array concept

// const a=await page.$$("#colors option")
// await expect(a.length).toBe(5);
// console.log("number of options:",a.length)


// check presence of value in the dropdowns

const a=await page.locator('#colors').textContent()
await expect(a.includes('Blue')).toBeTruthy();









await page.waitForTimeout(5000)




})