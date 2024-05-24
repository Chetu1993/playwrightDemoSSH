import {test,expect} from '@playwright/test'


test('test1@smoke',async({page})=>{

console.log("this is my first test")

})


test('test2@sanity',async({page})=>{

    console.log("this is my second test")
    
    })

test('test3@sanity@regression',async({page})=>{

    console.log("this is my third test")
        
})


test('test4@regression',async({page})=>{

    console.log("this is my fourth test")
            
    })


test('test5@regression',async({page})=>{

        console.log("this is my fifth test")
                
})