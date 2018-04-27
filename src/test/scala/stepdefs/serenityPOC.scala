package stepdefs

import cucumber.api.scala.{EN, ScalaDsl}
import net.thucydides.core.annotations.Steps
import org.scalatest.Matchers
import pages.{AmazonPage, BasePage}

/**
  * Created by padmaa on 24/04/18.
  */



class serenityPOC extends ScalaDsl with EN with Matchers with AmazonPage {

  @Steps

  Given("""^I navigate to amazon website$"""){()=>
    getURL
  }

  And("""^I click the all items on the amazon home page$"""){()=>

  }

  And("""^I select Books in the product dropdown$"""){()=>

  }

  And("""^I type in '(.*)' in the search box$"""){(productName:String)=>
    selectDropdown
  }

  And("""^I press enter$"""){()=>
    pressEnter
  }

  Then("""^I am on the results page$"""){()=>

  }

  Then("""^I see that the first result has the name '(.*)' in it$"""){(result:String)=>
          assertSearchText(result)
  }

  And("""^I hover mouse over '(.*)' to '(.*)' and click '(.*)'$"""){(productType1:String, productType2:String, productType3:String)=>
    mouseOverGrocery
  }

  And("""^I hover mouse over '(.*)' sub menu$"""){(productType2:String)=>

  }

  And("""^I click on '(.*)'$"""){(product:String)=>

  }

  Then("""^I see '(.*)' in the H2 on results page$"""){(resultH2:String)=>
     assertSearchText(resultH2)
      closeBrowser
  }

  Then("""^I clear the shopping basket$"""){()=>

  }

  Then("""^I go to homepage of amazon website$"""){()=>

  }

  And("""^I select '(.*)' on the products page$"""){(productType:String)=>

  }

  And("""^I click add to the basket on the product page$"""){()=>

  }

  And("""^I see the shopping cart has (.*) item in it$"""){(numberOfItems:Int)=>

  }

  And("""^I close the browser$"""){()=>
     closeBrowser
  }

}
