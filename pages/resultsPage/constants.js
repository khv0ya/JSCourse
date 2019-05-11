const { By } = require('selenium-webdriver');

const locators = {
    pageLocator : By.id('res'),
    elements : {
        resultsCount : By.id('resultStats'),
        resultLinks : By.tagName('cite')
    }
};

const regexps = {
    resultsCountRegex : /\s([\d\s.,]+)\s/,
    digitsDelimiterRegex : /[ .,]/g
};

module.exports = {
    locators, regexps
};