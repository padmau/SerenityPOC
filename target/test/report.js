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
<<<<<<< HEAD
  "line": 24,
  "name": "I type in \u0027Lindt\u0027 in the search box",
=======
  "line": 9,
  "name": "I type in \u0027Harry Potter\u0027 in the search box",
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
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
<<<<<<< HEAD
  "duration": 2936415731,
=======
  "duration": 3055239279,
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:60"
});
formatter.result({
  "duration": 37805315,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Unable to locate window\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027user01-xps-15-9550\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-121-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 56.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 5574, moz:profile: /tmp/rust_mozprofile.STJ5Mo..., pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 4.4.0-121-generic, rotatable: false, specificationLevel: 0, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 8f601c52-cc0b-4242-a891-89df592bca5a\n*** Element info: {Using\u003dcss selector, value\u003d#nav-cart-count}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat pages.BasePage$class.findElement(BasePage.scala:33)\n\tat stepdefs.serenityPOC.findElement(serenityPOC.scala:14)\n\tat pages.AmazonPage$class.clearShoppingCart(AmazonPage.scala:41)\n\tat stepdefs.serenityPOC.clearShoppingCart(serenityPOC.scala:14)\n\tat stepdefs.serenityPOC$$anonfun$5.apply$mcV$sp(serenityPOC.scala:61)\n\tat stepdefs.serenityPOC$$anonfun$5.apply(serenityPOC.scala:60)\n\tat stepdefs.serenityPOC$$anonfun$5.apply(serenityPOC.scala:60)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$1.applyOrElse(ScalaDsl.scala:61)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$1.applyOrElse(ScalaDsl.scala:61)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n\tat ✽.And I clear the shopping basket(serenityPOC.feature:22)\n",
  "status": "failed"
});
formatter.match({
  "location": "serenityPOC.scala:64"
});
formatter.result({
  "status": "skipped"
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
<<<<<<< HEAD
  "status": "skipped"
});
formatter.match({
  "location": "serenityPOC.scala:32"
});
formatter.result({
  "status": "skipped"
=======
  "duration": 476040023,
  "status": "passed"
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Lindt Lindor Milk Chocolate Bar 100 g (Pack of 10)",
      "offset": 10
=======
      "val": "Harry Potter",
      "offset": 11
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
    }
  ],
  "location": "serenityPOC.scala:68"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 36100095,
  "status": "passed"
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
});
formatter.match({
  "location": "serenityPOC.scala:77"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 64973132,
  "status": "passed"
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
});
formatter.match({
  "arguments": [
    {
      "val": "1 item",
      "offset": 28
    }
  ],
  "location": "serenityPOC.scala:81"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "duration": 84300727,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #bcKwText\u003espan:nth-child(1)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027padmaa-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-121-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 57.0.4, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 7475, moz:profile: /tmp/rust_mozprofile.ruHqZZ..., moz:webdriverClick: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 4.4.0-121-generic, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: dc4f5a56-e589-423e-8efc-b9b50a615c4e\n*** Element info: {Using\u003dcss selector, value\u003d#bcKwText\u003espan:nth-child(1)}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat pages.BasePage$class.findElement(BasePage.scala:33)\n\tat stepdefs.serenityPOC.findElement(serenityPOC.scala:14)\n\tat pages.ResultsPage$class.assertH1BooksText(ResultsPage.scala:15)\n\tat stepdefs.serenityPOC.assertH1BooksText(serenityPOC.scala:14)\n\tat stepdefs.serenityPOC$$anonfun$12.apply(serenityPOC.scala:41)\n\tat stepdefs.serenityPOC$$anonfun$12.apply(serenityPOC.scala:40)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:97)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:95)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n\tat ✽.And I see that the first result has the name \u0027J K Rowling\u0027 in it(serenityPOC.feature:11)\n",
  "status": "failed"
>>>>>>> 98c6b810bcc91a59b5a80f7d813d0869da691e5d
});
});