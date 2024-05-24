import{test, expect} from '@playwright/test'

test('frames',async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/")

const allFrames=await page.frames()
console.log("Number of frames: ",allFrames.length)

//approach 1 using name or url of the frame
// const frame1=page.frame("name");
const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

frame1.locator("//input[@name='mytext1']").fill("chetan")

await page.waitForTimeout(5000)




})