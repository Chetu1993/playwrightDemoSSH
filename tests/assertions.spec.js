import {test,expect} from '@playwright/test'

test('assertions',async({page})=>{


await page.goto("https://demo.nopcommerce.com/register")
await expect(page).toHaveURL("https://demo.nopcommerce.com/register");


await expect(page).toHaveTitle("nopCommerce demo store. Register");
const logo=await page.locator("//img[@alt='nopCommerce demo store']")
await expect(logo).toBeVisible();

const search=page.locator("//input[@id='small-searchterms']");
await expect(search).toBeEnabled();

const maleRadioButton=await page.locator("//input[@id='gender-male']")
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked();

const news=await page.locator("//input[@type='checkbox']")
await expect(news).toBeChecked()

const register=await page.locator("//button[@id='register-button']");
await expect(register).toHaveAttribute('name','register-button')

const text=await page.locator("//div[@class='page-title']/h1")// fulltext
await expect(text).toHaveText("Register")

const text1=await page.locator("//div[@class='page-title']/h1")  //partial text
await expect(text1).toContainText("Reg")

const name=await page.locator("//input[@id='FirstName']")
await name.fill("chetan")
await expect(name).toHaveValue("chetan")

const months=await page.locator("//select[@name='DateOfBirthMonth']/option")
await expect(months).toHaveCount(13)
})