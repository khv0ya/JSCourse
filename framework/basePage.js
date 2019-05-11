const logger = require('../utils/log.util');

class BasePage {
    constructor(browser, by, name) {
        this.browser = browser;
        this.by = by;
        this.name = name;
    }

    isOpened() {
        logger.info(`Checking if page ${this.name} is opened`);
        return this.browser.findElement(this.by, `Unique element of page ${this.name}`).then(() => true).catch((error) => {
            logger.error(`Unable to find unique element of page ${this.name}: ${error}`);
            return false;
        });
    }
}

module.exports = BasePage;