import {test,expect} from '@playwright/test'

test('elements',async({page})=>{

await page.goto("https://demoblaze.com/index.html");


// page.waitForTimeout(5000)
const elements=await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']//h4//a");

for(const ele of elements){
const linktext= await ele.textContent();
console.log(linktext);

}

await page.close();

})

test('products',async({page})=>{

await page.goto("https://demoblaze.com/index.html");

const elements1=await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']//h4//a")
for (ele1 in elements1){

    const capture=await ele1.textContent();
    console.log(capture);
}

await page.close()
})