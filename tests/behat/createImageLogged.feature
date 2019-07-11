@filter @filter_wiris
Feature: Create a simple mathml image with createimage.php and check right formula appears

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: Create a simple mathml image with createimage.php and check right formula appears
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/filter/wiris/integration/createimage.php?mml=<math><mo>x</mo></math>"
    Then "formula=5eacffd8c463696c5742b05a925cef04" "text" should exist
    Then "Forgotten your username" "text" should not exist