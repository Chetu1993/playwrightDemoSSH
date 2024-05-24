import {test,expect} from '@playwright/test'


// test.skip('test1',async({page})=>{

// console.log("this is test 1")


// })
//skip
//browserName

// test('test2',async({page,browserName})=>{

//     console.log("this is test 2")

//     if(browserName=='chromium'){

//         test.skip()
//     }
    
    
//     })


//Fixme
// test('test3',async({page})=>{
// test.fixme()
//     console.log("this is test 3")
    
    
//     })

// test('test4',async({page})=>{
// test.fail()
//     console.log("this is test 4")
//     expect(2).toBe(1)
    
    
//     })



// test('test4',async({page,browserName})=>{

//     if (browserName=='firefox'){

//     test.fail()
//     }
        
        
//         })


test("test 6",async({page})=>{
// test.slow();
test.setTimeout(5000)
    console.log("this is 6th test ............")

await page.goto("https://demoblaze.com/index.html")

})

