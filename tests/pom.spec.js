import {test,expect} from '@playwright/test'


import { loginpage } from './pages/loginpage'
import { homepage } from './pages/homepage'
import { cartpage } from './pages/cartpage'

test('basics',async({page})=>{
    
//login

const login=new loginpage(page)
await login.gotologinpage()
await login.login('pavanol','test@123')
await page.waitForTimeout(3000)

//home

const home=new homepage(page)
await home.addtoCart("Sony xperia z5")
await page.waitForTimeout(3000)
await home.goTocart()

//cart 

const cart=new cartpage(page)
await page.waitForTimeout(3000)
const status=await cart.checkinCart("Sony xperia z5")
expect(await status).toBe(true);

})