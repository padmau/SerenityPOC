# tag::header[]
Feature: As a amazon online shopping user I would wish to explore the website
  to understand it's functionality
# end::header[]

# tag::woolscenario[]
  Scenario: Dummy Scenario 1
    Given I navigate to amazon website
   And I type in 'Harry Potter' in the search box
   And I press enter
# end::woolscenario[]

# tag::handmadescenario[]
  Scenario: Dummy Scenario 2
    Given I navigate to amazon website
    And I hover mouse over 'Shop By Department' to 'Food and Grocery' and click 'Grocery'
    Then I see 'Grocery' in the H2 on results page
# end::handmadescenario[]

  Scenario: Dummy Scenario 3
    Given I navigate to amazon website3
    And I type in 'Harry Potter' in the search box3

  Scenario: Dummy Scenario 4
    Given I navigate to amazon website4
    And I type in 'Harry Potter' in the search box4
