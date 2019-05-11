const { locators, regexps } = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultsPage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator, 'Results Page');
    }

    async getResultsCount() {
        const resultsCount = await this.browser.findElement(locators.elements.resultsCount);
        const resultsCountText = await resultsCount.getText();
        const resultsCountRegex = regexps.resultsCountRegex;
        return +resultsCountRegex.exec(resultsCountText).pop().replace(regexps.digitsDelimiterRegex, '');
    }

    async getResultsLinks() {
        const links = await this.browser.findElements(locators.elements.resultLinks); 
        let linksTexts = new Array();
        for (let i = 0; i < links.length; i++) {
            let text = await links[i].getText();
            linksTexts.push(text);
        }
        return linksTexts;
    }
}

module.exports = ResultsPage;