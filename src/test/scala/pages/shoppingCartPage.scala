package pages

import net.serenitybdd.core.pages.PageObject
import org.openqa.selenium.By


/**
  * Created by user01 on 15/05/18.
  */
object shoppingCartPage extends shoppingCartPage

trait shoppingCartPage extends BasePage {

  val deleteButton = ".sc-action-delete > span:nth-child(1) > input:nth-child(1)"


  def clickDelete() {
    elementClick(By.cssSelector(deleteButton))
  }

}
