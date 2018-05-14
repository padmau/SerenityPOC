package pages

import cucumber.api.scala.ScalaDsl
import net.thucydides.core.annotations.Step
import org.openqa.selenium.{By, Keys}
import org.openqa.selenium.support.ui.ExpectedConditions

/*
  * Created by padmaa on 24/04/18.
  */
object AmazonPage extends AmazonPage


 trait AmazonPage extends BasePage with ScalaDsl  {
  // end::header[]
  // tag::searchByKeywordSteps[]

  val dep = By.id("nav-link-shopall")
  val header = By.id("navbar")
  val FandG = By.xpath("/html/body/div[2]/table/tbody/tr/td[3]/div[5]/h2")
  val grocery = By.linkText("Grocery")
  val groceryText = By.className("bxw-pageheader__title__text")
  val allItemsDropdown = By.id("searchDropdownBox")
  val all = By.className("nav-search-facade")
  val dropdownValue  = "Books"
  val assertText = By.xpath("/html/body/div[2]/table/tbody/tr/td[3]/div[5]/ul/li[1]/a")

    def mouseOverGrocery= {
    findElement(header)
    explicitWait
    ExpectedConditions.visibilityOfElementLocated(dep)
    action.moveToElement(findElement(dep)).click().build().perform()
    implicitWait
    findElement(FandG).click()
  }

  def assertSearchText (result: String) = {
       findElement(assertText).getText should not be (result)
  }

}
