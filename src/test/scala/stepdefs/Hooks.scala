package stepdefs

import cucumber.api.Scenario
import cucumber.api.java.{After, Before}
import org.openqa.selenium.{OutputType, TakesScreenshot, WebDriver, WebDriverException}
import pages.BasePage

/**
  * Created by user01 on 24/05/18.
  */
class Hooks {

  var oldDriver : WebDriver = null
  var oldBrowser : String = null
  var oldJavascript : String = null

  @Before
  def initialize() {
    BasePage.driver.manage().deleteAllCookies()
  }

  def revert() = {
    //close the browser and switch back to the original
    BasePage.driver.close()
  }


  @After
  def tearDown(result: Scenario) {
    if (result.isFailed) {
      BasePage.driver match {
        case screenshot1: TakesScreenshot =>
          try {
            val screenshot = screenshot1.getScreenshotAs(OutputType.BYTES)
            result.embed(screenshot, "image/png")
          } catch {
            case somePlatformsDontSupportScreenshots: WebDriverException => System.err.printf(somePlatformsDontSupportScreenshots.getMessage + "\n")
          }
        case _ =>
      }
    }
  }

}