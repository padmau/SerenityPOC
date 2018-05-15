package stepdefs

import cucumber.api.scala.{EN, ScalaDsl}
import org.hamcrest.CoreMatchers
import org.junit.Assert._
import org.openqa.selenium.By
import org.scalatest.Matchers
import pages.{resultsPage, serenityTestPage}
/**
  * Created by user01 on 15/05/18.
  */

@net.thucydides.core.annotations.Steps
class amazonDropdownSteps extends ScalaDsl with EN with Matchers with amazonBaseSteps with resultsPage {

  Given("^I navigate to amazon website$") { ()=>
    openHomePage

  }

  Given("^I select (.*) in the product dropdown$") {(listText: String)=>
    selectDropdown(listText)
  }

  Given("^I type in (.*) in the search box$"){(text: String)=>
    enterTextSearchBox(text)
  }

  Given("^I press enter$") {
    keysEnter()
  }

  Given("^I see that the first result has the name (.*) in it$") { (text: String)=>
       assertResultText() should include (text)
  }

  Given("^I hover mouse over (.*) to (.*) and click (.*)$") {(productType1: String, productType2: String, productType3: String) =>

  }

  Given("^I clear the shopping basket if there are items in it$") { ()=>
    val count = countShoppingCart
    if (count > 0) {
      clickShoppingCart()
      elementClick(By.id(shoppingCart))
    }
    else pageRefresh()
  }

  Given("^I select (.*) on the products page$") { (productType1: String) =>
    webDriverWait()
    clickFirstItemResultsPage()
  }

  Given("^I click add to the basket on the product page$") {
    clickAddToBasket()
  }

  Given("^I see the shopping cart has (.*) item in it$"){ (count: Int) =>
    assertEquals(countShoppingCart.toLong, count.toLong)
  }

}
