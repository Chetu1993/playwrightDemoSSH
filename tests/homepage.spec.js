const{test,expect}=require('@playwright/test');

test('Home page',async({page})=>{


await page.goto('https://demoblaze.com/index.html');

const pageTitle= await page.title();
console.log("the page title is", pageTitle);

await expect(page).toHaveTitle('STORE');

await expect(page).toHaveURL('https://demoblaze.com/index.html');


const pageURL=page.url();
console.log('the url of page is:',pageURL)
await page.close();
})