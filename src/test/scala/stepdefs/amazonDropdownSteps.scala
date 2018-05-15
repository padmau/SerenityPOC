package stepdefs

import cucumber.api.java.en.Given
import cucumber.api.scala.{EN, ScalaDsl}
import org.hamcrest.CoreMatchers
import org.junit.Assert
import org.junit.Assert._
import org.openqa.selenium.By
import org.scalatest.Matchers
import pages.{BasePage, resultsPage, serenityTestPage}
import stepdefs.amazonBaseSteps
/**
  * Created by user01 on 15/05/18.
  */
@net.thucydides.core.annotations.Steps
class amazonDropdownSteps extends ScalaDsl with EN with Matchers with amazonBaseSteps {

  Given("^I navigate to amazon website$") {

  }

  Given("^I select (.*) in the product dropdown$") (text: String) {
    amazonBaseSteps.selectDropdown(text)
  }

  Given("^I type in \'(.*)\' in the search box$")(text: String) {
    amazonBaseSteps.enterTextSearchBox(text)
  }

  Given("^I press enter$") {
    serenityTestPage.keysEnter()
  }

  Given("^I see that the first result has the name \'(.*)\' in it$") (text: String) {
    assertThat(resultsPage.assertResultText, CoreMatchers.containsString(text))
  }

  Given("^I hover mouse over \'(.*)\' to \'(.*)\' and click \'(.*)\'$")(productType1: String, productType2: String, productType3: String) {
    amazonBaseSteps.performMouseHover(productType1)
  }

  Given("^I clear the shopping basket if there are items in it$") {
    val count = amazonBaseSteps.countShoppingCart
    if (count > 0) {
      amazonBaseSteps.clickShoppingCart()
      elementClick(By.id(shoppingCart))
    }
    else amazonBaseSteps.pageRefresh()
  }

  Given("^I select \'(.*)\' on the products page$") (productType1: String) {
    resultsPage.clickFirstItemResultsPage()
  }

  Given("^I click add to the basket on the product page$") {
    amazonBaseSteps.clickAddToBasket()
  }

  Given("^I see the shopping cart has (.*) item in it$")(count: Int) {
    assertEquals(amazonBaseSteps.countShoppingCart.toLong, count.toLong)
  }

}
