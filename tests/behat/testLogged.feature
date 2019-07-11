@filter @filter_wiris
Feature: Check all services in test.php have status OK

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: Check all services in test.php have status OK
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/filter/wiris/integration/test.php"
    Then "MathType integration test page" "text" should exist
    Then "Forgotten your username" "text" should not exist
    Then "OK" "text" should exist
    Then "ERROR" "text" should not exist
    Then "KO" "text" should not exist
    Then "DISABLED" "text" should not exist