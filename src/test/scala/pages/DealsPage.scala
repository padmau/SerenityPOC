package pages

import org.openqa.selenium.By

/**
  * Created by padmaa on 15/05/18.
  */
object DealsPage extends DealsPage

trait DealsPage extends BasePage{

  val todaysDeals = "#nav-xshop > a:nth-child(3)"

  val dealsUnder15 = "#widgetFilters > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > a:nth-child(1)"

  def clickTodaysDeal() {
    findElement(By.cssSelector(todaysDeals)).click()
  }

  def clickUnder15PoundsDeals(count: Int) {
    try {
      findElement(By.cssSelector(dealsUnder15)).click()

    }catch{
      case e: Exception => println("*********************"+e)
    }
  }

}
