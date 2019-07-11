@filter @filter_wiris
Feature: Check default parameters in configurationjs.php page are correct

  @javascript
  Scenario: Check if default parameters in configurationjs.php page are correct
    And I log in as "admin"
    And I enable Mathtype filter
    And I go to link "/wirisutils/setConfig.php?key=access_provider_enabled&value=1&plugin=filter_wiris"
    And I go to link "/filter/wiris/integration/configurationjs.php"
    Then "\"editorEnabled\":true" "text" should exist
    Then "\"saveMode\":\"safeXml\"" "text" should exist
    Then "Forgotten your username" "text" should not exist