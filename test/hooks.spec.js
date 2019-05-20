const logger = require('../utils/log.util');

before(async() => {
    logger.info("Test Run has started");
});

after(async() => {
    logger.info("Test Run has finished");
});

beforeEach(async() => {
    logger.info("Test has started");
});

afterEach(async() => {
    logger.info("Test Run finished");
});