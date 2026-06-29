const { test, expect } = require('@playwright/test')
const LoginPage = require('./pages/LoginPage')
const InventoryPage = require('./pages/InventoryPage')

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')
})

test('La page produits affiche le bon titre', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    const title = await inventoryPage.getTitle()
    await expect(title).toHaveText('Products')
})

test('La page affiche 6 produits', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    const count = await inventoryPage.getProductCount()
    expect(count).toBe(6)
})

test('Ajouter un produit au panier', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    await inventoryPage.addFirstProductToCart()
    const cartCount = await inventoryPage.getCartCount()
    expect(cartCount).toBe('1')
})