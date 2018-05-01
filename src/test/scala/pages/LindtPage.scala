package pages

import org.openqa.selenium.By

/**
  * Created by user01 on 30/04/18.
  */
trait LindtPage extends BasePage{

  val addToBasketLindt = By.id("add-to-cart-button")

  val lindtPageTitle = By.id("productTitle")

  def clickaddToBasket = elementClick(addToBasketLindt)

  def assertLindtPageTitle = findElement(lindtPageTitle).getText

}
