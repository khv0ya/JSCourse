const { describe, it } = require('mocha');
const logger = require('../utils/log.utils');

describe('Hello World Test', function() {
    it('Should print Hello world to the console', function() {
        logger.info('Hello world');
    })
});