package pages

import org.openqa.selenium.By
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.remote.DesiredCapabilities

/**
  * Created by padmaa on 24/04/18.
  */
object AmazonPage extends BasePage{

  val dep = By.xpath("//*[@id='nav-shop']")
  val FandG = By.cssSelector("span[data-nav-panelkey='FoodGroceryPanel']")
  val grocery = By.linkText("Grocery")
  val groceryText = By.className("bxw-pageheader__title__text")


  def mouseOverGrocery= {
    action.moveToElement(findElement(dep)).moveToElement(findElement(FandG)).moveToElement(findElement(grocery)).click().build().perform()
  }

  def assertGroceryText = {
       findElement(groceryText).getText
  }





}
