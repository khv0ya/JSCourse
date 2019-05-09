const { Key } = require('selenium-webdriver');
const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');
const logger = require('../../utils/log.util');

class HomePage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator, 'Home Page');
    }

    async search(text) {
        const input = await this.browser.findElement(locators.elements.searchInput);
        logger.info(`Searching for ${text}`)
        await input.sendKeys(text, Key.RETURN);
    } 
}

module.exports = HomePage;