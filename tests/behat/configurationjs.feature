@filter @filter_wiris
Feature: If we're not logged in configurationjs.php should take us to login page

  @javascript
  Scenario: If we're not logged in configurationjs.php should take us to login page
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/configurationjs.php?lang=en"
    Then "editorEnabled" "text" should not exist
    Then "Forgotten your username" "text" should exist