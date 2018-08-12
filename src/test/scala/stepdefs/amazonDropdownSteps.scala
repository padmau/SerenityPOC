package stepdefs

import cucumber.api.scala.{EN, ScalaDsl}
import org.junit.Assert._
import org.openqa.selenium.By
import org.scalatest.Matchers
import pages.{DealsPage, resultsPage}
/**
  * Created by user01 on 15/05/18.
  */

@net.thucydides.core.annotations.Steps
class amazonDropdownSteps extends ScalaDsl with EN with Matchers with amazonBaseSteps with resultsPage with DealsPage{

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

  Given("^I click Today's Deals$") {
    clickTodaysDeal()
  }

  Given("^I click (.*) pounds deals$"){ (count: Int) =>
    clickUnder15PoundsDeals(count)
  }

  Given("^I click Shop by Department hidden list$") {
     clickAllItemsHiddenList()
  }

  Given("^I click (.*) in Home,Garden,Pets and DIY department$"){ (department1: String) =>
      clickFurniture()
  }

  Given("^I click (.*) in the furniture department$") { (product: String) =>
    clickSofaAndCOuches()
  }

  Given("^I see (.*) in the H2$"){ (text: String) =>
     getTextSofaAndCOuches()
  }


}
