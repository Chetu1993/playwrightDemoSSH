exports.loginpage=class loginpage{

    constructor(page){
    
        this.page=page
        this.loginlink="//a[@id='login2']"
        this.username="#loginusername"
        this.password="#loginpassword"
        this.loginbutton="//button[@onclick='logIn()']"
    }
    async gotologinpage(){
    
       await  this.page.goto("https://demoblaze.com/index.html")
    }
    
    async login(username,password){
    await this.page.locator(this.loginlink).click()
    await this.page.locator(this.username).fill(username)
    await this.page.locator(this.password).fill(password)
    await this.page.locator(this.loginbutton).click()
    
    
    }
    
    }