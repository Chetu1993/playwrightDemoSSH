import {test,expect} from '@playwright/test'

const testdata=JSON.parse(JSON.stringify(require('../testlogin.json')))

test.describe("datadriven login test",function()

{

for (const data of testdata){

    test.describe(`login with users ${data.id}`,function(){

        test("login to application",async({page})=>{

            await page.goto("https://freelance-learn-automation.vercel.app/login")

            await page.locator("//input[@id='email']").fill(data.username)

            await page.locator("//input[@id='password1']").fill(data.username)

        })






    },

{



}







)
}



}


)

