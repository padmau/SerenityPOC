
Feature: As a amazon online shopping user I would wish to explore the website
  to understand it's functionality

  Scenario Outline: Select books in the search and type in harry potter and check the first result option has harry potter in it
    Given I navigate to amazon website
    And I select <Product> in the product dropdown
    And I type in '<ProductType>' in the search box
    And I press enter
    And I see that the first result has the name '<ResultText>' in it

    Examples:
      |Product |ProductType |ResultText  |
      |Books   |Harry Potter|Harry Potter|
      |Beauty  |Clinique    |Clinique    |
      |Clothing|Oasis       |Oasis       |
