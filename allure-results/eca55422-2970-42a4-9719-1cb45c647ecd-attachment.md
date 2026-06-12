# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblazehome.spec.js >> signup new user
- Location: tests\demoblazehome.spec.js:8:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | export class HomePage{
  3  |     constructor(page){
  4  |         this.page = page;
  5  |         this.signupmenu = page.locator('#signin2')
  6  |         this.username = page.locator('#sign-username')
  7  |         this.password = page.locator('#sign-password')
  8  |         this.loginbutton = page.locator('#login2')
  9  |         this.loginusername = page.locator('#loginusername')
  10 |         this.loginpassword = page.locator('#loginpassword')
  11 |         this.loggeduser = page.locator('#nameofuser')
  12 |         this.logout = page.locator('#logout2')
  13 |         //this.closebutton = page.locator('.btn-btn-secondary').nth(1)
  14 |     }
  15 |     async signupnewuser(){
  16 |         await this.signupmenu.click()
  17 |     }
  18 |     async signupcredentials(signupusername,signuppassword){
  19 |         await this.username.fill(signupusername)
  20 |         await this.password.fill(signuppassword)    
  21 |     }
  22 |     async successsignup(){
  23 |         await this.page.on('dialog',async dialog=>{
> 24 |         await expect(dialog.message()).toBe('Sign up successful.')
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |         const alertText = dialog.message()
  26 |         await console.log('Alert message is :'+ ' ' + alertText)
  27 |         await dialog.accept()
  28 |         })
  29 |         await this.page.getByRole('button', { name: 'Sign up' }).click();
  30 |     }
  31 |     async closebuttonclick(){
  32 |         await this.page.getByRole('button', { name: 'Close' }).nth(1).click(); 
  33 |     }
  34 |     async loginuser(){
  35 |         await this.loginbutton.click()
  36 |     }
  37 |     async usercredentials(validusername,validpassword){
  38 |         await this.loginusername.fill(validusername)
  39 |         await this.loginpassword.fill(validpassword)
  40 |     }
  41 |     async successlogin(){
  42 |         await this.page.getByRole('button', { name: 'Log in' }).click();
  43 |         await this.loggeduser.waitFor({state: 'visible'})
  44 |         await expect(this.loggeduser).toContainText('Welcome usersilpa2')
  45 |     }
  46 |      async wrongusercredentials(invalidusername,validpassword){
  47 |         await this.loginusername.fill(invalidusername)
  48 |         await this.loginpassword.fill(validpassword)
  49 |     }
  50 |     async unsuccesslogin(){
  51 |             this.page.on('dialog',async dialog=>{
  52 |             expect(dialog.message()).toBe('User does not exist.')
  53 |             const alertText = dialog.message()
  54 |             console.log('Alert message is :'+ ' ' + alertText)
  55 |             await dialog.accept()
  56 |         })
  57 |         await this.page.getByRole('button', { name: 'Log in' }).click();
  58 |     }
  59 |     async wrongpwcredentials(validusername,invalidpassword){
  60 |         await this.loginusername.fill(validusername)
  61 |         await this.loginpassword.fill(invalidpassword)
  62 |     }
  63 |     async unsuccessloginwithwrongpw(){
  64 |             this.page.on('dialog',async dialog=>{
  65 |             expect(dialog.message()).toBe('Wrong password.')
  66 |             const alertText = dialog.message()
  67 |             console.log('Alert message is :'+ ' ' + alertText)
  68 |             await dialog.accept()
  69 |         })
  70 |         await this.page.getByRole('button', { name: 'Log in' }).click();
  71 |     }
  72 |     async wrongcredentials(invalidusername,invalidpassword){
  73 |         await this.loginusername.fill(invalidusername)
  74 |         await this.loginpassword.fill(invalidpassword)
  75 |     }
  76 |     async logoutprocess(){
  77 |         await this.logout.click()
  78 |         await expect(this.loggeduser).not.toBeVisible()
  79 |     }
  80 | }
```