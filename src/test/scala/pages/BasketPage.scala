package pages

import org.openqa.selenium.By
import org.openqa.selenium.support.ui.ExpectedConditions

/**
  * Created by user01 on 30/04/18.
  */
trait BasketPage extends BasePage {

  val basketHover = By.cssSelector("img.huc-no-radius")
  val hiddenBasket = By.cssSelector(".sc-product-title")
  val oneItem = By.cssSelector("#hlb-bottom-subcart > span:nth-child(1) > span:nth-child(1)")


  def hoverOverBasket = {
    findElement(basketHover)
    explicitWait.until(ExpectedConditions.visibilityOfElementLocated(hiddenBasket))

  }
  def assertNumberOfItems = findElement(oneItem).getText

}
