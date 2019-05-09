const { By } = require('selenium-webdriver');

const locators = {
    searchInput : By.name('q')
}

module.exports = {
    locators
}