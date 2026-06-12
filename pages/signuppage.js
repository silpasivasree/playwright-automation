import { expect } from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
export class SignupPage{
    constructor(page){
        this.page = page;
        this.signupmenu = page.locator('#signin2')
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
    }
    async signupnewuser(){
        await this.signupmenu.click()
    }
    async signupcredentials(signupusername,signuppassword){
        await this.username.fill(signupusername)
        await this.password.fill(signuppassword)    
    }
    async successsignup(){
        await this.page.on('dialog',async dialog=>{
        await expect(dialog.message()).toBe('Sign up successful.')
        const alertText = dialog.message()
        await console.log('Alert message is :'+ ' ' + alertText)
        await dialog.accept()
        })
        await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
    async closebuttonclick(){
        await this.page.getByRole('button', { name: 'Close' }).nth(1).click(); 
    }
}