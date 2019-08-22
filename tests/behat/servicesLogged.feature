@filter @filter_wiris
Feature: Check default parameters in some services page are correct
In order to check that default parameters in configurationjs.php page are correct
I need to visit configurationjs.php
Check if some parameters have the correct values
In order to check that createimage.php generates a correct formula
I need to create a simple mathml image with createimage.php
Check right formula appears
In order to check that showimage.php has the correct properties
I need to visit showimage.php
Check if the parameters have the correct values
In order to check that services.php works for a simple mathml2accessible
I need to visit services.php with a mathml2accessible
In order to check that all services in test.php are working correctly
I need to visit test.php
Check all services have status OK

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |
    And the "wiris" filter is "on"
    And I log in as "admin"

  @javascript
  Scenario: Visit configurationjs.php page
    And I go to link "/filter/wiris/integration/configurationjs.php"
    Then I should see "\"editorEnabled\":true"
    And I should see "\"saveMode\":\"safeXml\""
    And "Forgotten your username" "text" should not exist

  @javascript
  Scenario: Create a mathml image
    And I go to link "/filter/wiris/integration/createimage.php?mml=<math><mo>x</mo></math>"
    Then "formula=5eacffd8c463696c5742b05a925cef04" "text" should exist
    And "Forgotten your username" "text" should not exist

  @javascript
  Scenario: Use showimage.php to check image properties
    And I go to link "/filter/wiris/integration/showimage.php?mml=<math><mo>x</mo></math>"
    Then "\"status\":\"ok\"" "text" should exist
    And "!--MathML:" "text" should exist
    And "\"format\":\"svg\"" "text" should exist
    And "Forgotten your username" "text" should not exist

  @javascript
  Scenario: Check services.php with a mathml2accessible
    And I go to link "/filter/wiris/integration/service.php?service=mathml2accessible&mml=<math xmlns='http://www.w3.org/1998/Math/MathML'><mn>1</mn><mo>+</mo><mn>2</mn></math>"
    Then "{\"result\":{\"text\":\"1 2\"},\"status\":\"ok\"}" "text" should exist
    And "Forgotten your username" "text" should not exist

  @javascript
  Scenario: Check all services in test.php have status OK
    And I go to link "/filter/wiris/integration/test.php"
    Then "MathType integration test page" "text" should exist
    And "Forgotten your username" "text" should not exist
    And "OK" "text" should exist
    And "ERROR" "text" should not exist
    And "KO" "text" should not exist
    And "DISABLED" "text" should not exist