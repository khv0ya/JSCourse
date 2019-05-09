require('chromedriver');
const { Builder, Capabilities } = require('selenium-webdriver');
const logger = require('../utils/log.util');
const config = require('../config.json');

function getChromeCapabilities() {
    const caps = Capabilities.chrome();
    caps.set('chromeOptions', {
        'args' : ['--window-size=1920,1080']
    });
    return caps;
}

function setTimeouts(driver) {
    driver.manage().setTimeouts(config.timeouts);
}

class Browser {
    constructor() {
        this.driver;
    }

    async start() {
        try {
            this.driver = await new Builder().forBrowser('chrome').withCapabilities(getChromeCapabilities()).build();
            logger.info('Browser has been constructed');
            logger.info(`Navigating to ${config.startUrl}`);
            await this.driver.get(config.startUrl);
            await setTimeouts(this.driver);
        } catch(error) {
            logger.error(`Unable to start a browser: ${error}`);
        }
    }

    quit() {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    this.driver.quit();
                    resolve();
                }, 100);
            } catch(error) {
                logger.error(`Unable to quit the browser: ${error}`);
                reject();
            }
        });
    }

    async findElement(by, name) {
        return this.driver.findElement(by).catch((error) => {
            logger.warning(`Cannot find element ${error}: ${name}`)
        });
    } 

    async findElements(by, name) {
        return this.driver.findElements(by);
    }
}

module.exports = Browser;