exports.homepage=class homepage{

constructor(page){

    this.page=page
    this.elements='//div/h4/a'
    this.cartbutton='//a[@onclick="addToCart(4)"]'
    this.cart='#cartur'
}


async addtoCart(products){

const elements=await this.page.$$( await this.elements);
for(const product of elements){

    if (products==await product.textContent()){

        await product.click()
        break
    }
}

await this.page.on('dialog',async dialog=>{

    if(dialog.message().includes('added')){

        await dialog.accept()
    }
})
}

async goTocart(){

    await this.page.locator(this.cart).click()
}








}