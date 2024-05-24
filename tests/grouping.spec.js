import {test,expect} from '@playwright/test'
import { describe } from 'node:test'



test.beforeAll(async()=>{

console.log("this is before all Hook .......")


})

test.afterAll(async()=>{

console.log("this is after all Hook .........")


})

test.beforeEach(async()=>{

console.log("this is beforeEach Hook ........")

})


test.afterEach(async()=>{

console.log("this is afterEach Hook .........")

})




test.describe.only("Group 1",()=>{


    test('test1',async({page})=>{
        console.log("this is test 1")
        
        })
        
        
        
        test('test2',async({page})=>{
            console.log("this is test 2")
            
        })




})




test.describe("Group 2",()=>{


    test('test3',async({page})=>{
        console.log("this is test 3")
        
    })


        
test('test4',async({page})=>{
    console.log("this is test 4")
    
    })


})








