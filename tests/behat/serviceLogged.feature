@services
Feature: Check services.php works for a simple mathml2accessible

  @javascript
  Scenario: Check services.php works for a simple mathml2accessible
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/service.php?service=mathml2accessible&mml=<math xmlns='http://www.w3.org/1998/Math/MathML'><mn>1</mn><mo>+</mo><mn>2</mn></math>"
    Then "{\"result\":{\"text\":\"1 2\"},\"status\":\"ok\"}" "text" should exist
    Then "Forgotten your username" "text" should not exist