import { expect } from 'chai';
import { getDriver, login } from './Utils/seleniumHelper.js';
import { until } from 'selenium-webdriver';

describe('SauceDemo Login', function() {
  this.timeout(60000);
  let driver;

  before(async function() {
    driver = await getDriver();
  });

  after(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  beforeEach(async function() {
    await login(driver, 'standard_user', 'secret_sauce');
  });

  it('should login with valid credentials', async function() {  
    await driver.wait(until.urlIs('https://www.saucedemo.com/inventory.html'), 10000);
    
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal('https://www.saucedemo.com/inventory.html');
  });


});