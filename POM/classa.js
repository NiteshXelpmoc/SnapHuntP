const puppeteer = require('puppeteer');
const constants = require('../POM/constants')
this.browser
this.page

class Login {

 
 constructor(options={}){

   this.browser = null
   this.page = null


   this.config = {
    launchOptions: {
        headless: false,
        args: ['handleSIGINT: false', 'handleSIGTERM: false','--disable-infobars','--start-maximized', '--window-size=1350,750','--no-sandbox', '--disable-setuid-sandbox'] 
    },
    viewport:{width:1350, height:750}
   }
   
    this.element = {
    
    name: '#modal-root > div > div > div.ModalPanel-content > div > div.Auth > div > div.LoginFlow-panelContainer > div > div.Login-inputContainer > div.Login-emailContainer > div > input',
    pass: '#modal-root > div > div > div.ModalPanel-content > div > div.Auth > div > div.LoginFlow-panelContainer > div > div.Login-inputContainer > div.Login-passwordContainer > div > input',
    clicklogin: '#modal-root > div > div > div.ModalPanel-content > div > div.Auth > div > div.LoginFlow-panelContainer > div > div.CenteredContainer > div.Login-loginButtonContainer > div > span',
    Clicklogout:'#root > div > div.App-header > div > div.Header-rightContainer > div.App-logOut > div'
    
    }
   }
  
 async webelement() {
  this.browser = await puppeteer.launch(this.config.launchOptions);
    

 this.page = await this.browser.newPage()
 await this.page.setViewport(this.config.viewport)
 return this.page;
 }

  async openwebpage() {
  await this.page.goto("https://beta.snaphunt.com/login");
  return this.page;
 }
async loginFunction() {
  await this.page.type(this.element.name, 'atul@manager.com');
  await this.page.type(this.element.pass, 'admin123');
  await this.page.click(this.element.clicklogin);
  await this.page.waitFor(9000);
  return this.page;
}

async logout() {
  await this.page.click(this.element.Clicklogout);
  return this.page;
}
 //
 }
 module.exports = new Login();
