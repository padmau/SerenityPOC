package stepdefs

import cucumber.api.PendingException
import cucumber.api.scala.{EN, ScalaDsl}
<<<<<<< HEAD
import net.thucydides.core.annotations.Steps
import org.scalatest.{Failed, Matchers}
import pages.{AmazonPage, BasePage}
=======
import org.scalatest.Matchers
import pages.{AmazonPage, BasketPage, LindtPage, ResultsPage}

>>>>>>> 869512c04806da348d97e43a420e720726517bce

/**
  * Created by padmaa on 24/04/18.
  */


<<<<<<< HEAD
@net.thucydides.core.annotations.Steps
class serenityPOC extends ScalaDsl with EN with Matchers with AmazonPage {

=======

class serenityPOC extends ScalaDsl with EN with Matchers with AmazonPage with ResultsPage with LindtPage with BasketPage {
>>>>>>> 869512c04806da348d97e43a420e720726517bce

  Given("""^I navigate to amazon website$"""){ () =>
    getURL
  }

  Given("""^I navigate to amazon website3$"""){ () =>
    throw new PendingException
  }

  Given("""^I navigate to amazon website4$"""){ () =>
    Failed
  }

  And("""^I click the all items on the amazon home page$"""){()=>

  }

  And("""^I select (.*) in the product dropdown$"""){(value: String)=>
    seelctAllItemsDropdown
  }

<<<<<<< HEAD
  And("""^I type in '(.*)' in the search box$"""){(productName:String)=>
   selectDropdown
  }

  And("""^I type in '(.*)' in the search box3$"""){(productName:String)=>
    throw new PendingException
  }

  And("""^I type in '(.*)' in the search box4$"""){(productName:String)=>
    Failed
=======
  And("""^I type in '(.*)' in the search box$"""){(productname: String)=>
    searchValue.sendKeys()
>>>>>>> 869512c04806da348d97e43a420e720726517bce
  }

  And("""^I press enter$"""){()=>
    pressEnter
  }

  Then("""^I am on the results page$"""){()=>

  }

<<<<<<< HEAD
  Then("""^I see that the first result has the name '(.*)' in it$"""){(result:String)=>
    assertSearchText(result)
=======
  Then("""^I see that the first result has the name '(.*)' in it$"""){(resultH1:String)=>
    assertH1BooksText should include(resultH1)
>>>>>>> 869512c04806da348d97e43a420e720726517bce
  }

  And("""^I hover mouse over '(.*)' to '(.*)' and click '(.*)'$"""){(productType1:String, productType2:String, productType3:String)=>
    mouseOverGrocery
  }

  And("""^I hover mouse over '(.*)' sub menu$"""){(productType2:String)=>

  }

  And("""^I click on '(.*)'$"""){(product:String)=>

  }

<<<<<<< HEAD
  Then("""^I see '(.*)' in the H2 on results page$"""){(resultH2:String)=>
    assertSearchText(resultH2)
    closeBrowser
=======
  Then("""^I see '(.*)' in the H1 on results page$"""){(resultH1:String)=>
    assertH1GroceryText should include(resultH1)
>>>>>>> 869512c04806da348d97e43a420e720726517bce
  }

  Then("""^I clear the shopping basket$"""){()=>
   clearShoppingCart()
  }

  Then("""^I go to homepage of amazon website$"""){()=>
    navHomePage
  }

  And("""^I select '(.*)' on the products page$"""){(productType:String)=>
    implicitWait
    clickLindtResult




  }

  And("""^I click add to the basket on the product page$"""){()=>
    assertLindtPageTitle
    clickaddToBasket
  }

  And("""^I see the shopping cart has (.*) in it$"""){(numberOfItems:String)=>
    assertNumberOfItems should include(numberOfItems)
  }

  And("""^I close the browser$"""){()=>
    closeBrowser
  }

}
