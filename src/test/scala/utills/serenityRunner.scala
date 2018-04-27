package utills

/**
  * Created by padmaa on 24/04/18.
  */

import cucumber.api.CucumberOptions
import net.serenitybdd.cucumber.CucumberWithSerenity
import org.junit.runner.RunWith

@RunWith(classOf[CucumberWithSerenity])
@CucumberOptions(
  features = Array("/src/test/resources/features"),
  glue = Array("/home/padmaa/Applications/hmrc-development-environment/hmrc/serenityPOC/src/test/scala/stepdefs"),
  plugin = Array("pretty","html:/home/padmaa/Applications/hmrc-development-environment/hmrc/serenityPOC/target/test"),
  tags = Array("@test"),
  strict = false
)
class serenityRunner



