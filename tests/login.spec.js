import { LoginPage } from '../pages/loginpage';
import {test,expect} from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
import { only } from 'node:test';
test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com")
})
test('Verify login with valid credentials',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[1].validpassword
    const loginpage = new LoginPage(page)
    await loginpage.loginuser()
    await loginpage.usercredentials(usernamevalue,passwordvalue)
    await loginpage.successlogin()
})
test('Verify login with invalid username and valid password',async({page})=>{
    const usernamevalue = testdata[2].invalidusername
    const passwordvalue = testdata[1].validpassword
    const loginpage = new LoginPage(page)
    await loginpage.loginuser()
    await loginpage.wrongusercredentials(usernamevalue,passwordvalue)
    await loginpage.unsuccesslogin()
})
test('Verify login with valid username and invalid password',async({page})=>{
    const usernamevalue = testdata[1].validusername
    const passwordvalue = testdata[2].invalidpassword
    const loginpage = new LoginPage(page)
    await loginpage.loginuser()
    await loginpage.wrongpwcredentials(usernamevalue,passwordvalue)
    await loginpage.unsuccessloginwithwrongpw()
})
test('Verify login with invalid username and invalid password',async({page})=>{
    const usernamevalue = testdata[2].invalidusername
    const passwordvalue = testdata[2].invalidpassword
    const loginpage = new LoginPage(page)
    await loginpage.loginuser()
    await loginpage.wrongcredentials(usernamevalue,passwordvalue)
    await loginpage.unsuccesslogin()
})