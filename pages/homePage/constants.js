const { By } = require('selenium-webdriver');

const locators = {
    pageLocator : By.name('q'),
    elements : {
        searchInput : By.name('q')
    }
};

module.exports = {
    locators
};