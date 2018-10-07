require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const driver = new webdriver.Builder().forBrowser('chrome').build();
const expect = chai.expect;

describe('superfilterGui()', done => {
  before(done => {
    driver.get('file://' + process.cwd() + '/gui.html').then(function(res) {
      driver.findElement(By.id('input')).clear()
        .then(() => driver.findElement(By.id('input')).sendKeys('9,8,7,6,5'))
        .then(() => driver.findElement(By.id('filter')).click())
        .then(() => done());
    });
  });

  it('performs the operation', () => {
    return expect(driver.findElement(By.id('output')).getAttribute("value"))
      .to.eventually.equal('81,64,49,36,25');
  });
});
