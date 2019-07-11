@filter @filter_wiris
Feature: Check services.php works for a simple mathml2accessible

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: Check services.php works for a simple mathml2accessible
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/filter/wiris/integration/service.php?service=mathml2accessible&mml=<math xmlns='http://www.w3.org/1998/Math/MathML'><mn>1</mn><mo>+</mo><mn>2</mn></math>"
    Then "{\"result\":{\"text\":\"1 2\"},\"status\":\"ok\"}" "text" should exist
    Then "Forgotten your username" "text" should not exist