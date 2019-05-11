const constants = require('./constants');

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const util = require('util');

class Api {
    static async executeGetRequest(query, parameters) {
        return await chai.request(constants.urls.API_ENDPOINT).get(`/${query}`).query(parameters);
    }

    static prepareDate(date) {
        if (typeof date === 'string' && new RegExp(constants.formats.DATE_FORMAT_REGEX).test(date)) {
            return date;
        } else if (date === 'latest') {
            return date;
        } else if (date instanceof Date) {
            return util.format(constants.formats.DATE_FORMAT, date.getFullYear(), date.getMonth() + 1, date.getDate());
        } else {
            throw `Date format ${date} cannot be applied`;
        }
    }
}

module.exports = { 
    Api : Api
};
