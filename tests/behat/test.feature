@filter @filter_wiris
Feature: If we're not logged test.php should take us to login page

  @javascript
  Scenario: If we're not logged test.php should take us to login page
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/test.php?lang=en"
    Then "MathType integration test page" "text" should not exist
    Then "Forgotten your username" "text" should exist