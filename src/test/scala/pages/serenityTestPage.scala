package pages

import net.thucydides.core.annotations.DefaultUrl
import org.openqa.selenium.{By, Keys}
import org.openqa.selenium.interactions.Actions
import org.openqa.selenium.support.ui.{ExpectedConditions, WebDriverWait}

/**
  * Created by user01 on 15/05/18.
  */
object serenityTestPage extends serenityTestPage
@DefaultUrl("https://www.amazon.co.uk/")
trait serenityTestPage extends BasePage
 {

  val searchBox ="twotabsearchtextbox"
  val shoppingCartCount = "nav-cart-count"
  val shoppingCart = "nav-cart"
  val addToBasket = "add-to-cart-button"
   val dropdown = "searchDropdownBox"



  val dep = "nav-link-shopall"
  val FandG = "span.nav-hasPanel:nth-child(18)>span:nth-child(1)"
  val grocery = "div.nav-template:nth-child(17)>div:nth-child(2)>a:nth-child(1)"

  def searchBox(text: String) {
    findElement(By.id(searchBox)).sendKeys(text)
  }

  def keysEnter() {
    findElement(By.id(searchBox)).sendKeys(Keys.ENTER)
  }

  def mouseHover() {
    new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("nav-link-shopall")))
    new Actions(driver).moveToElement(findElement(By.id(dep))).build.perform()
    new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(FandG)))
    elementClick(By.cssSelector(FandG))
    elementClick(By.cssSelector(grocery))
  }

   def findEx(text:String) = {
     new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("searchDropdownBox")))
     selectDropdown(By.id(dropdown), text)
   }

  def clickShoppingCart() {
    elementClick(By.id(shoppingCart))
  }

  def countShoppingCart() = {
    val count = findElement(By.id(shoppingCartCount)).getText
    val count1 = count.toInt
    System.out.println("****************************" + count1)
    count1
  }

  def pageRefresh() {
    driver.navigate.refresh()
  }

  def clickAddToBasket() {
    elementClick(By.id(addToBasket))
  }
}
