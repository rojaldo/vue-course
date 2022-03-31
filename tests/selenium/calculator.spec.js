// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('calculator', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('calculator', async function() {
    await driver.get("http://localhost:8080/#/calculator")
    await driver.findElement(By.id("keys_5")).click()
    await driver.findElement(By.id("keys_6")).click()
    await driver.findElement(By.id("keys_7")).click()
    await driver.findElement(By.id("keys_10")).click()
    await driver.findElement(By.id("equal")).click()
    assert.equal('56*3=168', await driver.findElement(By.id("display")).getAttribute("value"));
    // await driver.close()
  })
})