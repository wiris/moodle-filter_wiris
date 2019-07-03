@services
Feature: Use showimage.php to check image properties

  @javascript
  Scenario: Use showimage.php to check image properties
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/showimage.php?mml=<math><mo>x</mo></math>"
    Then "\"status\":\"ok\"" "text" should exist
    Then "!--MathML:" "text" should exist
    Then "\"format\":\"svg\"" "text" should exist
    Then "Forgotten your username" "text" should not exist