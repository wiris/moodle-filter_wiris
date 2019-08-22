@filter @filter_wiris
Feature: Check if different image formats are correctly displayed
In order to check if different image formats are correctly displayed
I need to check svg image visiting test services
Change format to png
Check png visiting test services

  Background:
    Given the "wiris" filter is "on"
    And I log in as "admin"

  @javascript
  Scenario: Change image format and check
    And I go to link "/filter/wiris/integration/test.php"
    Then MathType formula in svg format is correctly displayed
    And I go back
    And I navigate to "Plugins" in site administration
    And I follow "MathType by WIRIS"
    And I set the following fields to these values:
      | Image format | png |
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then MathType formula in png format is correctly displayed