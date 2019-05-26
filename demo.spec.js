const { eventFire } = require('./js/sendEvent');
const { sendKeys } = require('./js/sendKeys');
const { getText } = require('./js/getText');
const { isPresentOnPage } = require('./js/isPresentOnPage');

describe('Protractor Demo App', () => {
  const form = element(by.tagName('form'));
  const username = element(by.id('login'));
  const password = element(by.id('password'));
  const logOut = element(by.css('li[id="logout"] a'));
  const pageHeader = element(by.css('.panel-heading h2'));

  beforeEach(() => {
      browser.get('http://reportingportal:8080/');
  });

  it('should have title', () => {
      expect(browser.getTitle()).toEqual('Reporting Portal');
  });

  it('Should log in with admin', () => {
      browser.executeScript(sendKeys, username, 'admin');
      browser.executeScript(sendKeys, password, '123456');
      browser.executeScript(eventFire, form, 'submit');
      expect(browser.executeScript(getText, pageHeader)).toEqual('Select Project');
  });

  it('Should log out', () => {
      browser.executeScript(eventFire, logOut, 'click');
      browser.refresh();
      expect(browser.executeScript(isPresentOnPage, username)).toBe(true);
  });
});