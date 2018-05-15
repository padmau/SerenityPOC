package stepdefs

import pages.serenityTestPage


/**
  * Created by user01 on 15/05/18.
  */
@net.thucydides.core.annotations.Steps
object amazonBaseSteps extends amazonBaseSteps
  trait amazonBaseSteps extends serenityTestPage{

  def openHomePage { ()=>
    serenityTestPage.open()
  }

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
