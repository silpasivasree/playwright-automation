import { expect } from '@playwright/test'
import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
export class PurchasePage {
    constructor(page){
        this.page = page;
        this.itemlink = page.getByRole('link', { name: 'Sony vaio i5' })
        this.productdetails = page.locator('.name')
        this.addtocartbutton = page.getByRole('link', { name: 'Add to cart' })
        this.phonesection = page.getByRole('link', { name: 'Phones' })
        this.phoneitem = page.getByRole('link', {name: 'Samsung galaxy s6'})
        this.product = page.locator('#more-information').nth(0)
        this.cart = page.getByRole('link', {name: 'Cart'}).nth(0)
        this.cartproduct = page.locator('#tbodyid tr.success td:nth-child(2)')
        this.placeorderbutton = page.getByRole('button', {name: 'Place Order'})
        this.namevalue = page.locator('#name')
        this.countryvalue = page.locator('#country')
        this.cityvalue = page.locator('#city')
        this.creditcarddeatils = page.locator('#card')
        this.monthvalue = page.locator('#month')
        this.yearvalue = page.locator('#year')
        this.purchasebutton = page.locator("//button[@onclick='purchaseOrder()']")
        this.confirmmessage = page.getByRole('heading', {name: 'Thank you for your purchase!'})
        this.okbutton = page.getByRole('button', {name: 'OK'})
        this.monitorsection = page.getByRole('link', { name: 'Monitors' })
        this.monitoritem = page.getByRole('link', {name: 'ASUS Full HD'})
    }
    async selectitem(){
        await this.itemlink.click()
    }
    async checkitem(){
        await expect(this.productdetails).toContainText('Sony vaio i5')
    }
    async addtocartprocess(){
            await this.page.on('dialog',async dialog=>{
            await expect(dialog.message()).toBe('Product added.')
            const alertText = dialog.message()
            await console.log('Alert message is :'+ ' ' + alertText)
            await dialog.accept()
        })
        await this.addtocartbutton.click();
    }
    async selectphone(){
        await this.phonesection.click()
        await this.phoneitem.click()
        await expect(this.product).toContainText('Samsung Galaxy S6')
    }
    async gotocart(){
        await this.cart.click()
    }
    async orderplacement(){
        await this.placeorderbutton.click()
    }
    async addcustomerdetails(){
        await this.namevalue.fill(testdata[3].name)
        await this.countryvalue.fill(testdata[3].country)
        await this.cityvalue.fill(testdata[3].city)
        await this.creditcarddeatils.fill(testdata[3].card)
        await this.monthvalue.fill(testdata[3].month)
        await this.yearvalue.fill(testdata[3].year)
    }
    async completepurchase(){
        await this.purchasebutton.click()
        await expect(this.confirmmessage).toContainText('Thank you for your purchase!')
        await this.okbutton.click()
    }
    async selectmonitor(){
        await this.monitorsection.click()
        await this.monitoritem.click()
        await expect(this.product).toContainText('ASUS VS247H-P 23.6- Inch Full HD')
    }
    async checkcartmonitor(){
        await expect(this.cartproduct).toContainText('ASUS Full HD')
    }
}