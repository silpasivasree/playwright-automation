import { expect } from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
export class LoginPage{
    constructor(page){
        this.page = page;
        this.loginbutton = page.locator('#login2')
        this.loginusername = page.locator('#loginusername')
        this.loginpassword = page.locator('#loginpassword')
        this.loggeduser = page.locator('#nameofuser')
        this.logout = page.locator('#logout2')
    }
    async loginuser(){
        await this.loginbutton.click()
    }
    async usercredentials(validusername,validpassword){
        await this.loginusername.fill(validusername)
        await this.loginpassword.fill(validpassword)
    }
    async successlogin(){
        await this.page.getByRole('button', { name: 'Log in' }).click();
        await this.loggeduser.waitFor({state: 'visible'})
        await expect(this.loggeduser).toContainText('Welcome usersilpa2')
    }
     async wrongusercredentials(invalidusername,validpassword){
        await this.loginusername.fill(invalidusername)
        await this.loginpassword.fill(validpassword)
    }
    async unsuccesslogin(){
            await this.page.on('dialog',async dialog=>{
            await expect(dialog.message()).toBe('User does not exist.')
            const alertText = dialog.message()
            await console.log('Alert message is :'+ ' ' + alertText)
            await dialog.accept()
        })
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
    async wrongpwcredentials(validusername,invalidpassword){
        await this.loginusername.fill(validusername)
        await this.loginpassword.fill(invalidpassword)
    }
    async unsuccessloginwithwrongpw(){
            await this.page.on('dialog',async dialog=>{
            await expect(dialog.message()).toBe('Wrong password.')
            const alertText = dialog.message()
            await console.log('Alert message is :'+ ' ' + alertText)
            await dialog.accept()
        })
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
    async wrongcredentials(invalidusername,invalidpassword){
        await this.loginusername.fill(invalidusername)
        await this.loginpassword.fill(invalidpassword)
    }

}