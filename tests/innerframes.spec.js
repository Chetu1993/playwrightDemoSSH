import {test,except} from '@playwright/test'



test("inner frames",async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/")

const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
frame.locator("//input[@name='mytext3']").fill("chetan")
await page.waitForTimeout(5000)

const childFrames=await frame.childFrames()
await childFrames[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check()

await page.waitForTimeout(5000)

})