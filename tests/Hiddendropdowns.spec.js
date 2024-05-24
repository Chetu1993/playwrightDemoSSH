import {test,expect} from '@playwright/test'


test('hiddendropdowns',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator("[name='username']").fill("Admin")
await page.locator("[name='password']").fill("admin123")
await page.locator("[type='submit']").click()

await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()

await page.waitForTimeout(3000)

const options=await page.$$("//div[role='listbox']//span")

for(const option of options){

    const jobTitle=await option.textContent();
    // console.log(jobTitle);

    if (jobTitle.includes('QA Engineer')){

        await option.click();
        break;
    }

}
await page.waitForTimeout(5000);

})