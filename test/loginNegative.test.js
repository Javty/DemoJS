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

  const negativeTestCases = [
    {
      description: 'invalid credentials',
      username: 'invalid_user',
      password: 'wrong_password',
      expectedError: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
      description: 'empty username',
      username: '',
      password: 'secret_sauce',
      expectedError: 'Epic sadface: Username is required'
    },
    {
      description: 'empty password',
      username: 'standard_user',
      password: '',
      expectedError: 'Epic sadface: Password is required'
    }
  ];

  negativeTestCases.forEach(({ description, username, password, expectedError }) => {
    it(`should not login with ${description}`, async function() {
      await login(driver, username, password);
      const errorMessageElement = await driver.wait(until.elementLocated({ css: '[data-test="error"]' }), 10000);
      const errorMessage = await errorMessageElement.getText();
      expect(errorMessage).to.equal(expectedError);
    });
  });
});