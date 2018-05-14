# tag::header[]
Feature: As a amazon online shopping user I would wish to explore the website
  to understand it's functionality
# end::header[]

# tag::woolscenario[]
  Scenario: Dummy Scenario 1
    Given I navigate to amazon website
<<<<<<< HEAD
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
=======
    And I select Books in the product dropdown
    And I type in 'Harry Potter' in the search box
    And I press enter
    And I see that the first result has the name 'J K Rowling' in it

#  Scenario: Mouse hover on shop by department and select gorcery in the hidden list
#    Given I navigate to amazon website
#    And I hover mouse over 'Shop By Department' to 'Food and Grocery' and click 'Grocery'
#    Then I see 'Grocery' in the H1 on results page


  Scenario: Search Lindt in the search bar, select my chosen Lindt item and add to basket
    Given I navigate to amazon website
    And I clear the shopping basket
    And I go to homepage of amazon website
    And I type in 'Lindt' in the search box
    And I press enter
    And I select 'Lindt Lindor Milk Chocolate Bar 100 g (Pack of 10)' on the products page
    When I click add to the basket on the product page
    Then I see the shopping cart has 1 item in it


>>>>>>> 869512c04806da348d97e43a420e720726517bce
