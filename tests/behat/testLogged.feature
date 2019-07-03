@services
Feature: Check all services in test.php have status OK

  @javascript
  Scenario: Check all services in test.php have status OK
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/test.php"
    Then "MathType integration test page" "text" should exist
    Then "Forgotten your username" "text" should not exist
    Then "OK" "text" should exist
    Then "ERROR" "text" should not exist
    Then "KO" "text" should not exist
    Then "DISABLED" "text" should not exist