package pages

import org.openqa.selenium.By
import org.openqa.selenium.support.ui.ExpectedConditions

/**
  * Created by padmaa on 24/04/18.
  */
trait AmazonPage extends BasePage {

  val dep = By.id("nav-link-shopall")
  val header = By.id("navbar")
  val FandG = By.cssSelector("span.nav-hasPanel:nth-child(18)>span:nth-child(1)")
  val grocery = By.cssSelector("div.nav-template:nth-child(17)>div:nth-child(2)>a:nth-child(1)")
  val groceryText = By.className("bxw-pageheader__title__text")
  val allItemsDropdown = By.id("searchDropdownBox")
  val all = By.className("nav-search-facade")
  val dropdownValue  = "Books"
  val searchText = By.id("twotabsearchtextbox")
  val shoppingCartCount = By.cssSelector("#nav-cart-count")
  val homePage = By.className("nav-logo-link")

  def mouseOverGrocery= {
    findElement(header)
    explicitWait.until(ExpectedConditions.visibilityOfElementLocated(dep))
    action.moveToElement(findElement(dep)).build().perform()
    explicitWait.until(ExpectedConditions.elementToBeClickable(FandG))
    findElement(FandG).click()
    findElement(grocery).click()
  }

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


}
