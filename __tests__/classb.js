const puppeteer = require('puppeteer')
const Login = require('../POM/classa')


describe('Snaphunt login Functionality',() => {

 it('Login for candidate', async () => {



   await Login.webelement();
   await Login.openwebpage();
   await Login.loginFunction();
   await Login.logout();
 });
 });
