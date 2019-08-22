@filter @filter_wiris
Feature: Check WIRIS quizzes test page
In order to check WIRIS quizzes
I need to visit the test service
Check if there are any Error key word

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | toolbar | math = wiris | editor_atto |
    And the following "courses" exist:
      | fullname | shortname | format |
      | Course 1 | C1        | topics |
    And the following "course enrolments" exist:
      | user     | course | role           |
      | admin  | C1     | editingteacher |
    And the "wiris" filter is "on"

  Scenario: Visit and WIRIS quizzes test page
    And I go to link "/filter/wiris/info.php"
    Then "Error" "text" should not exist
    And "ERROR" "text" should not exist
    And "KO" "text" should not exist
    And "DISABLED" "text" should not exist
    And "OK" "text" should exist