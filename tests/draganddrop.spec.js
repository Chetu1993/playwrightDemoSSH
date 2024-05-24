import {test,expect} from '@playwright/test'


test('draganddrop', async({page})=>{

await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

const rome=await page.locator("//div[@id='box6']")

const italy=await page.locator("//div[@id='box106']")


// first approach
// await rome.hover()
// await page.mouse.down()

// await italy.hover()
// await page.mouse.up()


// second approach

// await rome.dragTo(italy);

const washington=await page.locator("//div[@id='box3']")

const unitedstates=await page.locator("//div[@id='box103']")

// await washington.hover();
// await page.mouse.down();

// await unitedstates.hover();
// await page.mouse.up();

await washington.dragTo(unitedstates);


await page.waitForTimeout(5000)

})