import {test,expect} from '@playwright/test'

test('single file',async({page})=>{

await page.goto("https://www.filemail.com/share/upload-file")

await page.waitForSelector("//span[normalize-space()='Add Files']")

await page.locator("//span[normalize-space()='Add Files']").setInputFiles("tests\\uploadFiles\\student.txt")

await page.waitForTimeout(5000)

})


test.only("multipleFiles",async({page})=>{

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")


await page.waitForSelector("//input[@id='filesToUpload']")


await page.locator("//input[@id='filesToUpload']").setInputFiles(['tests\\uploadFiles\\automation.pdf','tests\\uploadFiles\\student.txt'])

await page.waitForTimeout(3000)

expect(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText('automation.pdf')
expect(await page.locator("//ul[@id='fileList']/li[2]")).toHaveText("student.txt")

await page.waitForTimeout(3000)

await page.locator("//input[@id='filesToUpload']").setInputFiles([])

await page.waitForTimeout(3000)

expect(await page.locator("//ul[@id='fileList']/li")).toHaveText("No Files Selected")

await page.waitForTimeout(3000)

})