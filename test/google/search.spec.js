const { describe, it, before, after } = require('mocha');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage/index');
const ResultsPage = require('../../pages/resultsPage/index');
const { assert } = require('chai');
const chaiwebdriver = require('chai-webdriver');

describe('Google Search Test', function() {
    this.retries(3);
    const browser = new Browser();
    let homePage;
    let resultsPage;

    before(async() => {
        await browser.start();
        homePage = new HomePage(browser);
        resultsPage = new ResultsPage(browser);
    });

    after(async() => {
        await browser.quit();
    });

    it('Should search for "webdriver"', async () => {
        assert.isTrue(await homePage.isOpened(), 'Home Page isn\'t opened');
        await homePage.search('webdriver');      
        chaiwebdriver.expect('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input').dom.to.contain.text('webdriver');
    });

    const expectedResultsCount = 100000;
    it(`Should find more than ${expectedResultsCount} results`, async () => {
        const actualResultsCount = await resultsPage.getResultsCount();
        assert.isTrue(actualResultsCount > expectedResultsCount, 
            `The number of results is less than expected.\nActual: ${actualResultsCount}\nExpected: ${expectedResultsCount}`);
    });

    const expectedLink = "https://www.seleniumhq.org/projects/webdriver/";
    it.skip(`Should show ${expectedLink} on the first page`, async () => {
        const actualLinks = await resultsPage.getResultsLinks();
        assert.isTrue(actualLinks.includes(expectedLink), 
            `Links on Results page don't include expected link.\nActual links: ${actualLinks}\nExpected link: ${expectedLink}`);
    });   
});