import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import 'chromedriver';

describe('SauceDemo Login', function() {
  this.timeout(30000); // Set a timeout to allow for slow connections or operations
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should login with valid credentials', async function() {
    await driver.get('https://www.saucedemo.com/');

    // Find username and password input fields and login button
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // Wait until the inventory page loads and verify the URL
    await driver.wait(until.urlIs('https://www.saucedemo.com/inventory.html'), 10000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal('https://www.saucedemo.com/inventory.html');
  });
});