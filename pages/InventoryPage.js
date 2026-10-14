import BasePage from './BasePage.js';
import { slugify } from '../utiles/stringUtils.js';

export class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.pageTitle = page.locator('.title');
        this.inventoryItems = page.locator('.inventory_item');
        this.itemPrices = page.locator('.inventory_item_price');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async sortBy(option) {
        await this.selectByValue(this.sortDropdown, option);
    }

    async addProductToCart(productName) {
        await this.click(this.page.locator(`[data-test="add-to-cart-${slugify(productName)}"]`));
    }

    async addMultipleProducts(productNames) {
        for (const productName of productNames) {
            await this.addProductToCart(productName);
        }
    }

    async goToCart() {
        await this.click(this.cartLink);
    }

}

export default InventoryPage;