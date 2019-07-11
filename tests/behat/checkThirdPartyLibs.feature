@filter @filter_wiris
Feature: Check MathType integration as a third party lib

  @javascript
  Scenario: Checks MathType integration as a third party lib
    And I log in as "admin"
    And I navigate to "Development" in site administration
    And I follow "Third party libraries"
    Then "MathType integration engine" "text" should exist
    Then "GPL 3.0+" "text" should exist
    Then "integration" "text" should exist