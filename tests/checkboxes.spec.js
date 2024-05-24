import {test,expect} from '@playwright/test'


test('checkboxes',async({page})=>{


await page.goto("https://artoftesting.com/samplesiteforselenium")

await page.locator("//input[@class='Automation']").check()

expect(await page.locator("//input[@class='Automation']")).toBeChecked();

expect(await page.locator("//input[@class='Automation']").isChecked()).toBeTruthy();

expect(await page.locator("//input[@class='Performance']").isChecked()).toBeFalsy();

const checkboxes=["//input[@class='Automation']","//input[@class='Performance']"]

for(const check of checkboxes){


    await page.locator(check).check();
}


for(const check of checkboxes){

if (await page.locator(check).isChecked()){

    
    await page.locator(check).uncheck();}
}






})