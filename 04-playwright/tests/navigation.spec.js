const { test, expect } = require('@playwright/test')

const LoginPage = require('./pages/LoginPage')
const InventoryPage = require('./pages/InventoryPage')
const NavigationPage = require('./pages/NavigationPage')


test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.login('standard_user', 'secret_sauce')

})


test('Cliquer sur un produit', async ({ page }) => {

    const inventoryPage = new InventoryPage(page)

    await inventoryPage.openFirstProduct()

    await expect(page).toHaveURL(/inventory-item.html/)

})


test('Retour à la liste', async ({ page }) => {

    const inventoryPage = new InventoryPage(page)

    await inventoryPage.openFirstProduct()


    const navigationPage = new NavigationPage(page)

    await navigationPage.backToProducts()


    await expect(page).toHaveURL(/inventory.html/)

})


test('Accéder au panier', async ({ page }) => {

    const inventoryPage = new InventoryPage(page)

    await inventoryPage.openCart()


    await expect(page).toHaveURL(/cart.html/)

})