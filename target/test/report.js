$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("serenityPOC.feature");
formatter.feature({
  "line": 3,
  "name": "As a amazon online shopping user I would wish to explore the website",
  "description": "to understand it\u0027s functionality",
  "id": "as-a-amazon-online-shopping-user-i-would-wish-to-explore-the-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#  Scenario: Select books in the search and type in harry potter and check the first result option has harry potter in it"
    },
    {
      "line": 7,
      "value": "#    Given I navigate to amazon website"
    },
    {
      "line": 8,
      "value": "#    And I select Books in the product dropdown"
    },
    {
      "line": 9,
      "value": "#    And I type in \u0027Fountainhead\u0027 in the search box"
    },
    {
      "line": 10,
      "value": "#    And I press enter"
    },
    {
      "line": 11,
      "value": "#    And I see that the first result has the name \u0027J K Rowling\u0027 in it"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#  Scenario: Mouse hover on shop by department and select gorcery in the hidden list"
    },
    {
      "line": 15,
      "value": "#    Given I navigate to amazon website"
    },
    {
      "line": 16,
      "value": "#    And I hover mouse over \u0027Shop By Department\u0027 to \u0027Food and Grocery\u0027 and click \u0027Grocery\u0027"
    },
    {
      "line": 17,
      "value": "#    Then I see \u0027Grocery\u0027 in the H1 on results page"
    }
  ],
  "line": 20,
  "name": "Search Lindt in the search bar, select my chosen Lindt item and add to basket",
  "description": "",
  "id": "as-a-amazon-online-shopping-user-i-would-wish-to-explore-the-website;search-lindt-in-the-search-bar,-select-my-chosen-lindt-item-and-add-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I navigate to amazon website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I clear the shopping basket",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I go to homepage of amazon website",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type in \u0027Lindt\u0027 in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I press enter",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \u0027Lindt Lindor Milk Chocolate Bar 100 g (Pack of 10)\u0027 on the products page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click add to the basket on the product page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I see the shopping cart has 1 item in it",
  "keyword": "Then "
});
formatter.match({
  "location": "serenityPOC.scala:16"
});
formatter.result({
  "duration": 2557745864,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:60"
});
formatter.result({
  "duration": 66931529,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:64"
});
formatter.result({
  "duration": 1689739118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lindt",
      "offset": 11
    }
  ],
  "location": "serenityPOC.scala:28"
});
formatter.result({
  "duration": 91662291,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:32"
});
formatter.result({
  "duration": 43840864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lindt Lindor Milk Chocolate Bar 100 g (Pack of 10)",
      "offset": 10
    }
  ],
  "location": "serenityPOC.scala:68"
});
formatter.result({
  "duration": 4509579509,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:77"
});
formatter.result({
  "duration": 1302171581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "serenityPOC.scala:81"
});
formatter.result({
  "duration": 30219583398,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: .sc-product-title (tried for 30 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat pages.BasketPage$class.hoverOverBasket(BasketPage.scala:18)\n\tat stepdefs.serenityPOC.hoverOverBasket(serenityPOC.scala:14)\n\tat stepdefs.serenityPOC$$anonfun$8.apply$mcVI$sp(serenityPOC.scala:82)\n\tat stepdefs.serenityPOC$$anonfun$8.apply(serenityPOC.scala:81)\n\tat stepdefs.serenityPOC$$anonfun$8.apply(serenityPOC.scala:81)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:97)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:95)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n\tat ✽.Then I see the shopping cart has 1 item in it(serenityPOC.feature:28)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: .sc-product-title\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027user01-xps-15-9550\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-121-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat pages.BasketPage$class.hoverOverBasket(BasketPage.scala:18)\n\tat stepdefs.serenityPOC.hoverOverBasket(serenityPOC.scala:14)\n\tat stepdefs.serenityPOC$$anonfun$8.apply$mcVI$sp(serenityPOC.scala:82)\n\tat stepdefs.serenityPOC$$anonfun$8.apply(serenityPOC.scala:81)\n\tat stepdefs.serenityPOC$$anonfun$8.apply(serenityPOC.scala:81)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:97)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:95)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
});