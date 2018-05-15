package stepdefs

import pages.serenityTestPage


/**
  * Created by user01 on 15/05/18.
  */

object amazonBaseSteps extends amazonBaseSteps
@net.thucydides.core.annotations.Steps
  trait amazonBaseSteps extends serenityTestPage {

  def selectDropdown { (text: String) =>
    serenityTestPage.findEx(text)
  }

  def enterTextSearchBox { (text: String)=>
    serenityTestPage.searchBox(text)
  }

  def performMouseHover { ()=>
    serenityTestPage.mouseHover()
  }

}
