const Helpers = require('./helpers');

class ExchangeRateApi {
    async getExcahngeRateByDate(currency, date = 'latest', baseCurrency = 'USD') {
        date = Helpers.Api.prepareDate(date);
        const response = await Helpers.Api.executeGetRequest(date, { base : baseCurrency, symbols : currency });
        return JSON.parse(response.text);
    }

    async getHistoryOfExcahngeRates(currency, startDate, endDate, baseCurrency = 'USD') {
        startDate = Helpers.Api.prepareDate(startDate);
        endDate = Helpers.Api.prepareDate(endDate);
        const response = await Helpers.Api.executeGetRequest('history', { start_at : startDate, end_at : endDate, base : baseCurrency, symbols : currency });
        return JSON.parse(response.text);
    }
}

module.exports = new ExchangeRateApi();
