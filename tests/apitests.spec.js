import {test,expect} from '@playwright/test'

var userid;
test('get user',async({request})=>{

const response=await request.get("https://reqres.in/api/users?page=2")
console.log(await response.json())
expect(response.status()).toBe(200)

})


test.only("create user",async({request})=>{

    const response=await request.post('https://reqres.in/api/users',{ 'data':{"name":"kumar",'job':'engineer',
        'city':'bangalore','country':'india'
    },
    headers:{"accept":"application/json"}
})
console.log(await response.json())


execept(await response.status()).toBe(201)
var res=response.json()
userid=res.id



})


test("update user",async({request})=>{

const response=await request.put("https://reqres.in/api/users/"+userid,{
    'data':{'name':"chetan",'job':'accountant'},headers:{"accept":"application/json"}})
    console.log(await response.json())
    expect(await response.status()).toBe(200)


})


test("delete user",async({request})=>{

    const response=await response.delete("https://reqres.in/api/users/"+userid)
    response=await request.json()
    console.log(await response.json())
    expect(await response.status()).toBe(204)



})