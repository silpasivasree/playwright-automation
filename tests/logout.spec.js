import { LogoutPage } from '../pages/logoutpage';
import { LoginPage } from '../pages/loginpage'
import {test,expect} from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
import { only } from 'node:test';
test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com")
})
test('logout after success login',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[1].validpassword
    const logoutpage = new LogoutPage(page)
    const loginpage = new LoginPage(page)
    await loginpage.loginuser()
    await loginpage.usercredentials(usernamevalue,passwordvalue)
    await loginpage.successlogin()
    await logoutpage.logoutprocess()
})