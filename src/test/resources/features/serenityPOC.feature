@test

Feature: As a amazon online shopping user I would wish to explore the website
  to understand it's functionality

  Scenario: Select books in the search and type in harry potter and check the first result option has harry potter in it
#    Given I navigate to amazon website
#    And I select books in the product dropdown
#    And I type in 'Harry Potter' in the search box
#    And I press enter
#    Then I am on the results page
#    And I see that the first result has the name 'Harry Potter' in it
#
#
  Scenario: Select books in the search and type in harry potter and check the first result option has harry potter in it
    Given I navigate to amazon website
    And I hover mouse over 'Shop By Department' to 'Food and Grocery' and click 'Grocery'
    Then I see 'Grocery' in the H2 on results page
    Then I close the browser
#
#
#  Scenario: Select books in the search and type in harry potter and check the first result option has harry potter in it
#    Given I navigate to amazon website
#    And I clear the shopping basket
#    And I go to homepage of amazon website
#    And I type in 'Lindt' in the search box
#    And I select 'Lindt Lindor Milk Cornet 200g' on the products page
#    When I click add to the basket on the product page
#    Then I see the shopping cart has 1 item in it
#
#
