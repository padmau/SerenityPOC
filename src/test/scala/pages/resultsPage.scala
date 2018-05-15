package pages

import net.serenitybdd.core.pages.PageObject
import org.openqa.selenium.By

/**
  * Created by user01 on 15/05/18.
  */
object resultsPage extends PageObject with BasePage {

  val result = "s-result-count"
  val firstItemResultsPage = "#result_0 > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > h2:nth-child(1)"

  def assertResultText: String = {
    val str = findElement(By.id(result)).getText
    //String text =resultText.getText();
    str
  }

  def clickFirstItemResultsPage() {
    elementClick(By.cssSelector(firstItemResultsPage))
  }

}
