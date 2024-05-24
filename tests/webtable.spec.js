import {test, expect} from '@playwright/test'


test('webtable',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")


const table=await page.locator("#productTable")

const columns=await table.locator("//thead//tr/th")
console.log("number of columns: ",await columns.count())
// total number of rows and columns
expect(await columns.count()).toBe(4);

const rows=await table.locator("//tbody//tr")
console.log("the number of rows are:",await rows.count())

expect(await rows.count()).toBe(5);

// selecting particular product

// const matchedRow=await rows.filter({

// has: page.locator('td'),
// hasText: 'Product 4'
// })

// await matchedRow.locator('input').check();



// selecting multiple products using reusable function

// await selectProduct(rows,page,'Product 1')
// await selectProduct(rows,page,'Product 3')
// await selectProduct(rows,page,'Product 5')


// reading the table

// for(var i=0;await i<rows.count();i++){

// const row=rows.nth(i)
// const tds=row.locator('td')

// for (var j=0; await j<tds.count()-1;j++){


// console.log(await tds.nth(j).textContent())

// }

// }




// reading the data for multiple tables



const pages=await page.locator("//ul[@class='pagination']//a")
console.log("the number of pages in the web:", await pages.count())

for (let p=0;p<await pages.count;p++){

if (p>0){

    await pages.nth(p).click();

}
for(var i=0;await i<rows.count();i++){

    const row=rows.nth(i)
    const tds=row.locator('td')
    
    for (var j=0; await j<tds.count()-1;j++){
    
    
    console.log(await tds.nth(j).textContent())
    
    }
    
    }
    await page.waitForTimeout(3000)

}



await page.waitForTimeout(5000)
})


async function selectProduct(rows,page,name){

const matchedRow=rows.filter({

has: page.locator('td'),
hasText:name,
})
await matchedRow.locator("input").check()

}