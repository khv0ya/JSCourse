const { eventFire } = require('./js/sendEvent');

describe('Protractor Demo App', () => {
  const username = element(by.id('login'));
  const password = element(by.id('password'));
  const logIn = element(by.css('.btn-primary'));
  const logOut = element(by.id('logout'));
  const pageHeader = element(by.css('.panel-heading h2'));

  beforeEach(() => {
      browser.get('http://localhost:4200');
  });

  it('should have title', () => {
      expect(browser.getTitle()).toEqual('Reporting Portal');
  });

  fit('Should log in with admin', () => {
      username.sendKeys('admin');
      password.sendKeys('123456');
      //logIn.click();
      browser.executeScript(eventFire, logIn, 'submit');

      expect(pageHeader.getText()).toEqual('Select Project');

  });

  it('Should log out', () => {
      logOut.click();

      expect(username.isPresent()).toBe(true);
  });
});