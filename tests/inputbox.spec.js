import {test,expect} from '@playwright/test'

test('input box',async({page})=>{


await page.goto("https://demo.nopcommerce.com/register")



const name= await page.locator("//input[@id='FirstName']")


await expect(name).toBeEmpty();

await expect(name).toBeVisible();



await expect(name).toBeEditable();

await expect(name).toBeEnabled();
await name.fill("chetan")



await page.close()




})