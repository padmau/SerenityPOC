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
  "duration": 2163686491,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:60"
});
formatter.result({
  "duration": 78487826,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:64"
});
formatter.result({
  "duration": 1628181460,
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
  "duration": 87323220,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:32"
});
formatter.result({
  "duration": 42309159,
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
  "duration": 4005283240,
  "status": "passed"
});
formatter.match({
  "location": "serenityPOC.scala:77"
});
formatter.result({
  "duration": 1430625253,
  "status": "passed"
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
  "duration": 239728526,
  "status": "passed"
});
});