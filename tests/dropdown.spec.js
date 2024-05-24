import {test, expect} from '@playwright/test'
import { truncate } from 'fs';


test('dropdowns',async({page})=>{



await page.goto("https://testautomationpractice.blogspot.com")

// await page.locator("//select[@id='country']").selectOption({label:"India"})//label

// await page.locator("//select[@id='country']").selectOption('India')//visible text

// await page.locator("//select[@id='country']").selectOption({value:'japan'}) // by value

// await page.locator("//select[@id='country']").selectOption({index:9});

// const options=await page.locator("//select[@id='country']")

// await expect(options).toHaveCount(10);

// await page.waitForTimeout(5000);


//check number of options in dropdowns

// const options=await page.$$("#country option")

// console.log("Number of options",options.length)

// await page.waitForTimeout(5000)
// await expect(options.length).toBe(10);

//check presence of value in the dropdown

// const countries=await page.locator('#country').textContent();

// await expect(countries.includes('India')).toBeTruthy();

// checking presence of element using for loop

// const countries=await page.$$('#country option')

// var status=false;

// for (const country of countries){

//     console.log("countries list: ",await country.textContent());

//     let value=await country.textContent();
//     if (value.includes("India")){

//         var status=true;
//         break;
//     }

// }
// expect(status).toBeTruthy();





//selecting the option using for loop

const options=await page.$$("#country option")

for(const option of options){
let value=await option.textContent();
if (value.includes("India")){

await page.selectOption("#country",value);
break

}
 

}




await page.waitForTimeout(5000)



})