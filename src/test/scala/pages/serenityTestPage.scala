package pages

import cucumber.api.scala.{EN, ScalaDsl}
import org.openqa.selenium.By
import net.serenitybdd.core.pages.PageObject
import net.thucydides.core.annotations.DefaultUrl
import org.openqa.selenium.Keys
import org.openqa.selenium.interactions.Actions
import org.openqa.selenium.support.ui.ExpectedConditions
import org.openqa.selenium.support.ui.WebDriverWait
import org.scalatest.Matchers
import org.scalatest.concurrent.Eventually
import org.scalatest.selenium.WebBrowser

/**
  * Created by user01 on 15/05/18.
  */
@DefaultUrl("https://www.amazon.co.uk/")
object serenityTestPage extends serenityTestPage

trait serenityTestPage extends WebBrowser with Eventually with ScalaDsl with EN with Matchers with PageObject with BasePage {

  val searchBox ="twotabsearchtextbox"
  val shoppingCartCount = "nav-cart-count"
  val shoppingCart = "nav-cart"
  val addToBasket = "add-to-cart-button"


  val dep = "nav-link-shopall"
  val FandG = "span.nav-hasPanel:nth-child(18)>span:nth-child(1)"
  val grocery = "div.nav-template:nth-child(17)>div:nth-child(2)>a:nth-child(1)"

  def findEx(text: String) {
    new WebDriverWait(getDriver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("searchDropdownBox")))
    selectFromDropdown(getDriver.findElement(By.id("searchDropdownBox")), text)
  }

  def searchBox(text: String) {
    findElement(By.id(searchBox)).sendKeys(text)
  }

  def keysEnter() {
    findElement(By.id(searchBox)).sendKeys(Keys.ENTER)
  }

  def mouseHover {
    new WebDriverWait(getDriver(), 10).until(ExpectedConditions.presenceOfElementLocated(By.id("nav-link-shopall")))
    new Actions(getDriver).moveToElement(find(By.id(dep))).build.perform()
    new WebDriverWait(getDriver, 10).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(FandG)))
    elementClick(By.cssSelector(FandG))
    elementClick(By.cssSelector(grocery))
  }

  def clickShoppingCart() {
    elementClick(By.id(shoppingCart))
  }

  def countShoppingCart: Int = {
    val count = findElement(By.id(shoppingCartCount)).getText
    val count1 = count.toInt
    System.out.println("****************************" + count1)
    count1
  }

  def pageRefresh() {
    getDriver.navigate.refresh()
  }

  def clickAddToBasket() {
    elementClick(By.id(addToBasket))
  }
}
