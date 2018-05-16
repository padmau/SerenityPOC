package pages

import net.thucydides.core.annotations.DefaultUrl
import org.openqa.selenium.{By, Keys}
import org.openqa.selenium.interactions.Actions
import org.openqa.selenium.support.ui.{ExpectedConditions, WebDriverWait}

/**
  * Created by user01 on 15/05/18.
  */
object serenityTestPage extends serenityTestPage
@net.thucydides.core.annotations.Steps
trait serenityTestPage extends BasePage
 {

  val searchBox ="twotabsearchtextbox"
  val shoppingCartCount = "nav-cart-count"
  val shoppingCart = "nav-cart"
  val addToBasket = "add-to-cart-button"
   val dropdown = "searchDropdownBox"
   val allHiddenItemsList = "nav-link-shopall"
   val furniture = "#shopAllLinks > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)"
   val sofaAndCouches = "div.a-span3:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1)"
   val textSofaAndCouches = ".bxw-pageheader__title__text > h1:nth-child(1)"

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
    new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id(dep)))
    new Actions(driver).moveToElement(findElement(By.id(dep))).build.perform()
    new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(FandG)))
    elementClick(By.cssSelector(FandG))
    elementClick(By.cssSelector(grocery))
  }

   def findEx(text:String) = {
     new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("searchDropdownBox")))
     select(By.id(dropdown), text)
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

   def clickAllItemsHiddenList() {
     webDriverWait()
     //action.moveToElement(findElement(By.id(allHiddenItemsList))).build().perform()
     elementClick(By.id(allHiddenItemsList))
   }

   def clickFurniture() {
     elementClick(By.cssSelector(furniture))
   }

   def clickSofaAndCOuches() {
     elementClick(By.cssSelector(sofaAndCouches))
   }

   def getTextSofaAndCOuches() {
     findElement(By.cssSelector(textSofaAndCouches))
   }
}
