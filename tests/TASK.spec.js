import {test} from '@playwright/test'

//playwright will bydefault cancel the alert

test('dialogs',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com')
    await page.getByRole('button',{name:'Simple Alert'}).click()

    await page.getByRole('button',{name:'Confirmation Alert'}).click()
    
    await page.getByRole('button',{name:'Prompt Alert'}).click()
   
})