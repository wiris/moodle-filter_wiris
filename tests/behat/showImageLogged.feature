@filter @filter_wiris
Feature: Use showimage.php to check image properties

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: Use showimage.php to check image properties
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/filter/wiris/integration/showimage.php?mml=<math><mo>x</mo></math>"
    Then "\"status\":\"ok\"" "text" should exist
    Then "!--MathML:" "text" should exist
    Then "\"format\":\"svg\"" "text" should exist
    Then "Forgotten your username" "text" should not exist