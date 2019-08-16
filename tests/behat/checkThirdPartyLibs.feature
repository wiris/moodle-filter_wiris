@filter @filter_wiris
Feature: Check MathType integration as a third party lib
In order to check if MathType integration is a third party library
I need to visit the Third party libraries
Check if MathType integration appears

  @javascript
  Scenario: Check third party libraries
    Given I log in as "admin"
    And I navigate to "Development" in site administration
    And I follow "Third party libraries"
    Then "MathType integration engine" "text" should exist
    Then "GPL 3.0+" "text" should exist
    Then "integration" "text" should exist