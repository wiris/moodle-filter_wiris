@filter @filter_wiris
Feature: Check WIRIS quizzes test page

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | toolbar | math = wiris | editor_atto |

  Scenario: Checks WIRIS quizzes test page
    And I enable Mathtype filter
    And I go to link "/filter/wiris/info.php"
    Then "Error" "text" should not exist
    Then "ERROR" "text" should not exist
    Then "KO" "text" should not exist
    Then "DISABLED" "text" should not exist
    Then "OK" "text" should exist


