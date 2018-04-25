package pages


import cucumber.api.scala.{EN, ScalaDsl}
import org.openqa.selenium.By
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.interactions.Actions
import org.scalatest.Matchers
import org.scalatest.concurrent.Eventually
import org.scalatest.selenium.WebBrowser


/**
  * Created by padmaa on 24/04/18.
  */
object BasePage extends BasePage

  trait BasePage extends WebBrowser with Eventually with ScalaDsl with EN with Matchers {

    val testUrl = "https://www.amazon.co.uk/"
    System.setProperty("webdriver.gecko.driver", "/usr/local/bin/geckodriver")
    var driver = new FirefoxDriver()

    def getURL= {
      driver.navigate().to(testUrl)
    }

    def findElement(by: By) = {
      driver.findElement(by)
    }


    val action = new Actions(driver)

    def closeBrowser = {
      driver.quit()
    }
    }


