@filter @filter_wiris
Feature: If we're not logged createimage.php should take us to login page

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: If we're not logged createimage.php should take us to login page
    And I go to link "/filter/wiris/integration/createimage.php?mml=<math><mo>x</mo></math>&lang=en"
    Then "formula" "text" should not exist
    Then "Forgotten your username" "text" should exist