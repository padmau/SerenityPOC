package pages

import org.openqa.selenium.By

/**
  * Created by user01 on 30/04/18.
  */
trait BasketPage extends BasePage {

  val oneItem = By.cssSelector("#hlb-bottom-subcart > span:nth-child(1) > span:nth-child(1)")

  def assertNumberOfItems = findElement(oneItem).getText

}
