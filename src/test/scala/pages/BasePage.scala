package pages


import java.util.concurrent.TimeUnit

import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.interactions.Actions
import org.openqa.selenium.support.ui.{Select, WebDriverWait}
import org.openqa.selenium.{By, Keys}
import org.scalatest.concurrent.Eventually;


/**
  * Created by padmaa on 24/04/18.
  */
object BasePage extends BasePage

trait BasePage extends Eventually {

    val testUrl = "https://www.amazon.co.uk/"
    System.setProperty("webdriver.gecko.driver", "/usr/bin/geckodriver")
    val driver = new FirefoxDriver()
    val waitUntil = 10

      def getURL = {
        driver.navigate().to(testUrl)
      }

      def webDriverWait(): Unit = {
        driver.manage().timeouts().implicitlyWait(waitUntil, TimeUnit.SECONDS)
      }

      def findElement(by: By) = {
        driver.findElement(by)
      }

      def elementClick(by: By) = {
        findElement(by).click()
      }

      def select(by: By, text: String) = {
        val select = new Select(findElement(by))
        select.selectByVisibleText(text)
      }

      def pressEnter = {
        findElement(By.id("twotabsearchtextbox")).sendKeys(Keys.ENTER)
      }

      def implicitWait = driver.manage().timeouts().implicitlyWait(waitUntil, TimeUnit.SECONDS)

      def explicitWait = new WebDriverWait(driver, waitUntil)

      val action = new Actions(driver)

      def closeBrowser = {
        driver.quit()
      }
    }


