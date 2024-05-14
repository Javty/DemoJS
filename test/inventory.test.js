import { By, } from 'selenium-webdriver';
import { expect } from 'chai';
import { getDriver, login } from './Utils/seleniumHelper.js';

describe('SauceDemo Inventory', function() {
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

  it('should add an item to the cart', async function() {
    await driver.findElement(By.css('.inventory_item button')).click();

    const cartBadge = await driver.findElement(By.css('.shopping_cart_badge')).getText();
    expect(cartBadge).to.equal('1');
  });
});