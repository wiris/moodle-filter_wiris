@filter @filter_wiris
Feature: If we're not logged service.php should take us to login page

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: If we're not logged service.php should take us to login page
    And I go to link "/filter/wiris/integration/service.php?service=mathml2accessible&mml=<math xmlns='http://www.w3.org/1998/Math/MathML'><mn>1</mn><mo>+</mo><mn>2</mn></math>&lang=en"
    Then "status" "text" should not exist
    Then "Forgotten your username" "text" should exist