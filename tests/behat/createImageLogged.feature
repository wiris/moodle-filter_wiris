@services
Feature: Create a simple mathml image with createimage.php and check right formula appears

  @javascript
  Scenario: Create a simple mathml image with createimage.php and check right formula appears
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/createimage.php?mml=<math><mo>x</mo></math>"
    Then "formula=5eacffd8c463696c5742b05a925cef04" "text" should exist
    Then "Forgotten your username" "text" should not exist