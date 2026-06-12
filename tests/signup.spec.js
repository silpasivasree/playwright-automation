import { SignupPage } from '../pages/signuppage';
import {test,expect} from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
import { only } from 'node:test';
test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com")
})
test('signup new user',async({page})=>{
    const usernamevalue = testdata[0].signupusername
    const passwordvalue = testdata[0].signuppassword
    const signup = new SignupPage(page)
    await signup.signupnewuser()
    await signup.signupcredentials(usernamevalue,passwordvalue)
    await signup.successsignup()
})
test('unsuccess signup',async({page})=>{
    const usernamevalue = testdata[0].signupusername
    const passwordvalue = testdata[0].signuppassword
    const signup = new SignupPage(page)
    await signup.signupnewuser()
    await signup.signupcredentials(usernamevalue,passwordvalue)
    await signup.closebuttonclick()
})