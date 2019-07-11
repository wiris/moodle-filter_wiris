@filter @filter_wiris
Feature: Check if different image formats are correctly displayed

  @javascript
  Scenario: Check if different image formats are correctly displayed
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/filter/wiris/integration/test.php"
    Then svg img format is correctly displayed
    And I go back
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I go to MathType filter settings
    And I select png option
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then png img format is correctly displayed