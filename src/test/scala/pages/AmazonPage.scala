package pages

<<<<<<< HEAD
import cucumber.api.scala.ScalaDsl
import net.thucydides.core.annotations.Step
import org.openqa.selenium.{By, Keys}
=======
import org.openqa.selenium.By
>>>>>>> 869512c04806da348d97e43a420e720726517bce
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
<<<<<<< HEAD
  val FandG = By.xpath("/html/body/div[2]/table/tbody/tr/td[3]/div[5]/h2")
  val grocery = By.linkText("Grocery")
=======
  val FandG = By.cssSelector("span.nav-hasPanel:nth-child(18)>span:nth-child(1)")
  val grocery = By.cssSelector("div.nav-template:nth-child(17)>div:nth-child(2)>a:nth-child(1)")
>>>>>>> 869512c04806da348d97e43a420e720726517bce
  val groceryText = By.className("bxw-pageheader__title__text")
  val allItemsDropdown = By.id("searchDropdownBox")
  val all = By.className("nav-search-facade")
  val dropdownValue  = "Books"
<<<<<<< HEAD
  val assertText = By.xpath("/html/body/div[2]/table/tbody/tr/td[3]/div[5]/ul/li[1]/a")
=======
  val searchText = By.id("twotabsearchtextbox")
  val shoppingCartCount = By.cssSelector("#nav-cart-count")
  val homePage = By.className("nav-logo-link")
>>>>>>> 869512c04806da348d97e43a420e720726517bce

    def mouseOverGrocery= {
    findElement(header)
    explicitWait.until(ExpectedConditions.visibilityOfElementLocated(dep))
    action.moveToElement(findElement(dep)).build().perform()
    explicitWait.until(ExpectedConditions.elementToBeClickable(FandG))
    findElement(FandG).click()
    findElement(grocery).click()
  }

<<<<<<< HEAD
  def assertSearchText (result: String) = {
       findElement(assertText).getText should not be (result)
  }

=======
  def seelctAllItemsDropdown = {
     selectDropdown(allItemsDropdown, dropdownValue)
  }

  def searchValue() = {
    findElement(searchText)
  }

  def clearShoppingCart() = {
    val count = findElement(shoppingCartCount).getText
    if(count.toInt>0) {
      findElement(shoppingCartCount).click()
    }
  }
  def navHomePage() = {
    findElement(homePage).click()
  }


>>>>>>> 869512c04806da348d97e43a420e720726517bce
}
