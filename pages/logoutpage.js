import { expect } from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
export class LogoutPage{
    constructor(page){
        this.page = page;
        this.loggeduser = page.locator('#nameofuser')
        this.logout = page.locator('#logout2')
    }
    async logoutprocess(){
        await this.logout.click()
        await expect(this.loggeduser).not.toBeVisible()
    }

}