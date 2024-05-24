import {test,expect} from '@playwright/test'


test('bootstrapdropdown',async({page})=>{


await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")

await page.locator("//button[@type='button']").click();

// const elements=await page.locator("//ul/li//input")

// await expect(elements).toHaveCount(11)
// console.log(elements.textContent());

const elements=await page.$$("//ul/li//label")

// for (const option of elements){

// const value=await option.textContent();
// console.log("the values are: ",value);
// if (value.includes('Angular') || value.includes('Java')){
// await option.click();

// }



// }



for (const option of elements){

const value=await option.textContent();
console.log("the values are: ",value);
if (value.includes('HTML') || value.includes('CSS')){
await option.click();

}



}











await page.waitForTimeout(5000)

})