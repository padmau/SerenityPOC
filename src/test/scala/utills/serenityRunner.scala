package utills

/**
  * Created by padmaa on 24/04/18.
  */

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

@RunWith(classOf[Cucumber])
@CucumberOptions(
  features = Array("/home/padmaa/Applications/hmrc-development-environment/hmrc/serenityPOC/src/test/resources/features"),
  glue = Array("stepdefs"),
  plugin = Array("pretty","html:/home/padmaa/Applications/hmrc-development-environment/hmrc/serenityPOC/target/test"),
  tags = Array("@test"),
  strict = false
)
class serenityRunner



