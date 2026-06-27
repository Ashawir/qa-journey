const { test, expect } = require('@playwright/test')
const LoginPage = require('./pages/LoginPage')

test('Login avec identifiants valides', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    await expect(page).toHaveURL('/inventory.html')
    await expect(page.locator('.title')).toHaveText('Products')
})

test('Login avec mot de passe incorrect', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'motdepassefaux')

    const errorMessage = await loginPage.getErrorMessage()
    await expect(errorMessage).toContainText('Username and password do not match any user')
})

test('login avec username vide', async({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('', 'secret_sauce')

    const errorMessage = await loginPage.getErrorMessage()
    await expect(errorMessage).toContainText('Username is required')
})

test('login avec les deux champs vides', async({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('', '')

    const errorMessage = await loginPage.getErrorMessage()
    await expect(errorMessage).toContainText('Username is required')
})
