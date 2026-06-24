const { test, expect } = require('@playwright/test')

test('Login avec identifiants valides', async ({ page }) => {
    // Ouvrir la page
    await page.goto('/')

    // Remplir le formulaire
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')

    // Cliquer sur Login
    await page.click('#login-button')

    // Vérifier qu'on est sur le dashboard
    await expect(page).toHaveURL('/inventory.html')
    await expect(page.locator('.title')).toHaveText('Products')
})

test('login avec mot de passe incorrect', async ({ page }) => {
    // Ouvrir la page
    await page.goto('/')

    // Remplir le formulaire
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'motdepassefaux')

    // Cliquer sur login
    await page.click('#login-button')

    // Verifier que le message d'erreur apparait
    await expect(page.locator('.error-message-container.error')).toContainText('Username and password do not match any user')
})