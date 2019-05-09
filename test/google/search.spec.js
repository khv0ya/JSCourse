const { describe, it } = require('mocha');
const Browser = require('../../framework/browser');
const { By } = require('selenium-webdriver');
const HomePage = require('../../pages/homePage/index');

describe('Google Search Test', function() {
    const browser = new Browser();

    before(async() => {
        await browser.start();
    });

    after(async() => {
        await browser.quit();
    });

    it('Should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        homePage.search('webdriver');
    });
});