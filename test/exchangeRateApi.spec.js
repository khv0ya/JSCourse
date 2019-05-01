const { describe, it } = require('mocha');
const exchangeRateApi = require('../pages/exchangerate/index');
const dateTimeUtil = require('../utils/dateTime.util.js');

describe('Exchange Rate Api Test', () => {
    it('Test Rate', () => {
        const currency = 'RUB';
        exchangeRateApi.getHistoryOfExcahngeRates(currency, dateTimeUtil.dateDecreasedByNDays(10), new Date()).then(results => {
        
            const rates = results.rates;
            let comparedRates = [];   

            let sortedRatesMap = new Map(Object.entries(rates).sort());
            let prevRate;
            
            sortedRatesMap.forEach(entry => { 
                let sign = (entry[currency] > prevRate) ? '+' : (entry[currency] < prevRate) ? '-' : '';
                comparedRates.push(sign.concat(entry[currency]));
                prevRate = entry[currency];
            });
            
            /* eslint-disable no-console */
            console.log(`I want to see if rate on my currency is growing compare to 10 days before today\n${comparedRates.join('\n')}`);
            /* eslint-disable no-console */
        });
    });
}); 
