exports.cartpage=class cartpage{

constructor(page){

this.page=page
this.numofprod="//tbody/tr/td[2]"

}

async checkinCart(cartproducts){
const numofprod=await this.page.$$(await this.numofprod);
for(const product of numofprod){
    console.log(await product.textContent())

    if(cartproducts==await product.textContent()){

        return true
        break
    }
}

}


}