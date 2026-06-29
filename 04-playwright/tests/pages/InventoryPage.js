class InventoryPage {
    constructor(page) {
        this.page = page
        this.title = page.locator('.title')
        this.productList = page.locator('.inventory_item')
        this.sortDropdown = page.locator('.product_sort_container')
        this.cartIcon = page.locator('.shopping_cart_link')
        this.cartBadge = page.locator('.shopping_cart_badge')
    }

    async getTitle() {
        return this.title
    }

    async getProductCount() {
        return await this.productList.count()
    }

    async addFirstProductToCart() {
        await this.productList.first()
            .locator('button')
            .click()
    }

    async getCartCount() {
        return await this.cartBadge.textContent()
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option)
    }
}

module.exports = InventoryPage