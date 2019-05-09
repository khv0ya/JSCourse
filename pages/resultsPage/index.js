const { locators, regexps } = require('./constants');
const BasePage = require('../../framework/basePage');
const logger = require('../../utils/log.util');

class ResultsPage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator, 'Results Page');
    }

    async getResultsCount() {
        const resultsCount = await this.browser.findElement(locators.elements.resultsCount);
        const resultsCountText = await resultsCount.getText();
        const resultsCountRegex = regexps.resultsCountRegex;
        return +resultsCountRegex.exec(resultsCountText).pop().replace(regexps.whiteSpacesRegex, '');
    }

    async getResultsLinks() {
        let linkTexts = [];
        const links = await this.browser.findElements(locators.elements.resultLinks);
        await links.forEach(async(element) => {
            element.getText().then(text => linkTexts.push(text)).catch(error => logger.warn(`${error}`));
        });
        return linkTexts;
    }
}

module.exports = ResultsPage;