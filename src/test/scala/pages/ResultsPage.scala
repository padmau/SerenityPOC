package pages

import org.openqa.selenium.{By, Keys}

/**
  * Created by padmaa on 27/04/18.
  */
trait ResultsPage extends BasePage{

  val resultText1 = By.cssSelector(".bxw-pageheader__title__text")
  val resultText2 = By.cssSelector("#bcKwText>span:nth-child(1)")

  def assertH1GroceryText = findElement(resultText1).getText

  def assertH1BooksText = findElement(resultText2).getText
}
