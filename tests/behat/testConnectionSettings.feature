@configtest
Feature: Check if using a bad service host throws exception

  @javascript
  Scenario: Check if using a bad service host throws exception
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I navigate to "Plugins" in site administration
    And I follow "MathType by WIRIS"
    And I set the following fields to these values:
      | Service host | www.wipis.net |
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then "exception" "text" should exist
    And I go back
    And I set the following fields to these values:
    | Service host | www.wiris.net |
    | Service path | /demo/editor/renders |
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then "exception" "text" should exist