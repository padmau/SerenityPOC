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
  "line": 6,
  "name": "Select books in the search and type in harry potter and check the first result option has harry potter in it",
  "description": "",
  "id": "as-a-amazon-online-shopping-user-i-would-wish-to-explore-the-website;select-books-in-the-search-and-type-in-harry-potter-and-check-the-first-result-option-has-harry-potter-in-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigate to amazon website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#    And I click the all items on the amazon home page"
    },
    {
      "line": 9,
      "value": "#    And I select Books in the product dropdown"
    }
  ],
  "line": 10,
  "name": "I type in \u0027Harry Potter\u0027 in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press enter",
  "keyword": "And "
});
formatter.match({
  "location": "serenityPOC.scala:13"
});
formatter.result({
  "duration": 7643949880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 11
    }
  ],
  "location": "serenityPOC.scala:25"
});
formatter.result({
  "duration": 196823611,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:29"
});
formatter.result({
  "duration": 85479802,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#And I see that the first result has the name \u0027Harry Potter\u0027 in it"
    }
  ],
  "line": 15,
  "name": "Select books in the search and type in harry potter and check the first result option has harry potter in it",
  "description": "",
  "id": "as-a-amazon-online-shopping-user-i-would-wish-to-explore-the-website;select-books-in-the-search-and-type-in-harry-potter-and-check-the-first-result-option-has-harry-potter-in-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to amazon website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I hover mouse over \u0027Shop By Department\u0027 to \u0027Food and Grocery\u0027 and click \u0027Grocery\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see \u0027Grocery\u0027 in the H2 on results page",
  "keyword": "Then "
});
formatter.match({
  "location": "serenityPOC.scala:13"
});
formatter.result({
  "duration": 2462814634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shop By Department",
      "offset": 20
    },
    {
      "val": "Food and Grocery",
      "offset": 44
    },
    {
      "val": "Grocery",
      "offset": 73
    }
  ],
  "location": "serenityPOC.scala:41"
});
formatter.result({
  "duration": 2919869440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grocery",
      "offset": 7
    }
  ],
  "location": "serenityPOC.scala:53"
});
formatter.result({
  "duration": 30105864923,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[2]/div/div/div/div[2]/div[1]/div[1]/a/h2\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027padmaa-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-121-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 59.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 9605, moz:profile: /tmp/rust_mozprofile.8pERJd..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 4.4.0-121-generic, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 4c8a5aa5-3629-458a-85b7-686c92a31e4a\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[2]/div/div/div/div[2]/div[1]/div[1]/a/h2}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat pages.BasePage$class.findElement(BasePage.scala:33)\n\tat stepdefs.serenityPOC.findElement(serenityPOC.scala:11)\n\tat pages.AmazonPage$class.assertSearchText(AmazonPage.scala:34)\n\tat stepdefs.serenityPOC.assertSearchText(serenityPOC.scala:11)\n\tat stepdefs.serenityPOC$$anonfun$16.apply(serenityPOC.scala:54)\n\tat stepdefs.serenityPOC$$anonfun$16.apply(serenityPOC.scala:53)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:97)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:95)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n\tat ✽.Then I see \u0027Grocery\u0027 in the H2 on results page(serenityPOC.feature:18)\n",
  "status": "failed"
});
});