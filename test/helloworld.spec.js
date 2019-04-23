const { describe, it } = require('mocha');
const logger = require('../utils/log.util.js');
const chai = require('chai');
const dateTimeUtil = require('../utils/dateTime.util.js');

describe('Hello World Test', function() {
    it('Should print Hello world to the console', function() {
        logger.info('Hello world');
    });
});

describe('Test of the today() method', function() {
    it('Should return the current date', function() {
        let actualDate = dateTimeUtil.today();
        let expectedDate = new Date();
        chai.assert.equal(actualDate.getTime(), expectedDate.getTime(), 
            'Date returned by the today() method is incorrect.');
    });
});

describe('Test of the setYear() method', function() {
    let december17th1995 = new Date(1995, 11, 17);
    it('Should set the year of the current date to the year of the date ' + december17th1995, function() {
        let actualYear = dateTimeUtil.setYear(december17th1995).getFullYear();
        let expectedYear = december17th1995.getFullYear();
        chai.assert.equal(actualYear, expectedYear, 
            'Year set by the setYear() method is incorrect.');
    });
});

describe('Test of the daysDifference() method', function() {
    let dateLeft = new Date(2001, 11, 17);
    let dateRight = new Date(2000, 11, 17);
    let expectedNumberOfDays = 365;
    it('Should return the number of days equal to ' + expectedNumberOfDays + ' between dates: ' + dateLeft + ' and ' + dateRight, function() {
        chai.assert.equal(dateTimeUtil.daysDifference(dateLeft, dateRight), expectedNumberOfDays,
            'Number of days returned by the daysDifference() method is incorrect.');
    });
});