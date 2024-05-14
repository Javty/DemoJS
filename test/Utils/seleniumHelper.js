import { Builder, By } from 'selenium-webdriver';
import 'chromedriver';

export async function getDriver() {
  return new Builder().forBrowser('chrome').build();
}

export async function login(driver, username, password) {
    await driver.get('https://www.saucedemo.com/');
  
    await driver.findElement(By.id('user-name')).sendKeys(username);
    await driver.findElement(By.id('password')).sendKeys(password);
    await driver.findElement(By.id('login-button')).click();

  }