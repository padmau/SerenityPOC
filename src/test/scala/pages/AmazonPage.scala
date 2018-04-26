package pages

import org.openqa.selenium.{By, Keys}
import org.openqa.selenium.support.ui.ExpectedConditions

/**
  * Created by padmaa on 24/04/18.
  */
trait AmazonPage extends BasePage {

  val dep = By.id("nav-link-shopall")
  val header = By.id("navbar")
  val FandG = By.xpath("/html/body/div[2]/table/tbody/tr/td[3]/div[2]/ul/li[1]/a")
  val grocery = By.linkText("Grocery")
  val groceryText = By.className("bxw-pageheader__title__text")
  val allItemsDropdown = By.id("searchDropdownBox")
  val all = By.className("nav-search-facade")
  val dropdownValue  = "Books"
  val assertText = By.xpath("/html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[2]/div/div/div/div[2]/div[1]/div[1]/a/h2")

  def mouseOverGrocery= {
    findElement(header)
    explicitWait
    ExpectedConditions.visibilityOfElementLocated(dep)
    action.moveToElement(findElement(dep)).click().build().perform()
    implicitWait
    findElement(FandG).click()
  }




  def assertSearchText (result: String) = {
       findElement(assertText).getText should include (result)
  }







}
