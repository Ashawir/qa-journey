class NavigationPage {

    constructor(page) {

        this.page = page

        this.backButton = page.locator('#back-to-products')

    }


    async backToProducts() {

        await this.backButton.click()

    }

}


module.exports = NavigationPage