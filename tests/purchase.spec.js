import { PurchasePage } from '../pages/purchase';
import { LoginPage } from '../pages/loginpage';
import {test,expect} from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com")
})
test('adding item to the cart',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[1].validpassword
    const loginpage = new LoginPage(page)
    const purchasepage = new PurchasePage(page)
    await loginpage.loginuser()
    await loginpage.usercredentials(usernamevalue,passwordvalue)
    await loginpage.successlogin()
    await purchasepage.selectitem()
    await purchasepage.checkitem()
    await purchasepage.addtocartprocess()
})
test('phone purchase',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[1].validpassword
    const loginpage = new LoginPage(page)
    const purchasepage = new PurchasePage(page)
    await loginpage.loginuser()
    await loginpage.usercredentials(usernamevalue,passwordvalue)
    await loginpage.successlogin()
    await purchasepage.selectphone()
    await purchasepage.addtocartprocess()
    await purchasepage.gotocart()
    await purchasepage.orderplacement()
    await purchasepage.addcustomerdetails()
    await purchasepage.completepurchase()
})
test('monitor purchase',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[1].validpassword
    const loginpage = new LoginPage(page)
    const purchasepage = new PurchasePage(page)
    await loginpage.loginuser()
    await loginpage.usercredentials(usernamevalue,passwordvalue)
    await loginpage.successlogin()
    await purchasepage.selectmonitor()
    await purchasepage.addtocartprocess()
    await purchasepage.gotocart()
    await purchasepage.checkcartmonitor()
    await purchasepage.orderplacement()
    await purchasepage.addcustomerdetails()
    await purchasepage.completepurchase()
})