@filter @filter_wiris
Feature: Check if using a bad service host throws exception
In order to check if using a bad service host throws exception
I need to set a bad service host
Visit test services

  @javascript
  Scenario: Set an incorrect service
    Given the "wiris" filter is "on"
    And I log in as "admin"
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