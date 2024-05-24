import {test,expect} from '@playwright/test'

const testdata=JSON.parse(JSON.stringify(require('testdata.json')))

test('login',async({page})=>{

await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.locator("//input[@type='email']").fill(testdata.username)
await page.locator("//input[@type='password1']").fill(testdata.password)
await page.locator("//input[@type='email']").fill(testdata.address.name)
await page.locator("//input[@type='email']").fill(testdata.interest[0])









await page.pause();









})
