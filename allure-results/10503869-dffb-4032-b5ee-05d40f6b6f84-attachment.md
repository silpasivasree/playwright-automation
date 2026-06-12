# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup.spec.js >> signup new user
- Location: tests\signup.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | import testdata from '../utils/demoblazedata.json' assert {type: 'json'}
  3  | export class SignupPage{
  4  |     constructor(page){
  5  |         this.page = page;
  6  |         this.signupmenu = page.locator('#signin2')
  7  |         this.username = page.locator('#sign-username')
  8  |         this.password = page.locator('#sign-password')
  9  |     }
  10 |     async signupnewuser(){
  11 |         await this.signupmenu.click()
  12 |     }
  13 |     async signupcredentials(signupusername,signuppassword){
  14 |         await this.username.fill(signupusername)
  15 |         await this.password.fill(signuppassword)    
  16 |     }
  17 |     async successsignup(){
  18 |         await this.page.on('dialog',async dialog=>{
> 19 |         await expect(dialog.message()).toBe('Sign up successful.')
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |         const alertText = dialog.message()
  21 |         await console.log('Alert message is :'+ ' ' + alertText)
  22 |         await dialog.accept()
  23 |         })
  24 |         await this.page.getByRole('button', { name: 'Sign up' }).click();
  25 |     }
  26 |     async closebuttonclick(){
  27 |         await this.page.getByRole('button', { name: 'Close' }).nth(1).click(); 
  28 |     }
  29 | }
```