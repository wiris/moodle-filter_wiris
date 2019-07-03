@configtest
Feature: Check if different image formats are correctly displayed

  @javascript
  Scenario: Check if different image formats are correctly displayed
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I go to link "/filter/wiris/integration/test.php"
    Then svg img format is correctly displayed
    And I go back
    And I navigate to "Plugins" in site administration
    And I follow "MathType by WIRIS"
    And I click on "png" "option" in the "#id_s_filter_wiris_imageformat" "css_element"
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then png img format is correctly displayed