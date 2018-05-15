package stepdefs

import net.thucydides.core.annotations.Step
import pages.serenityTestPage


/**
  * Created by user01 on 15/05/18.
  */

object amazonBaseSteps extends amazonBaseSteps


trait amazonBaseSteps extends serenityTestPage {
@Step
  def openHomePage () {
    getURL
  }
@Step
  def selectDropdown (text: String) {
    findEx(text)
  }
@Step
  def enterTextSearchBox (text: String) {
    searchBox(text)
  }
@Step
  def performMouseHover(){
    mouseHover()
  }

}
