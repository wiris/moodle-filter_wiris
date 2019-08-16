@filter @filter_wiris
Feature: If we're not logged in, some php services should take us to login page
In order to test that if we're not logged in configurationjs.php should take us to login page
I need to visit configurationjs.php
Check that login screen is displayed
In order to test that if we're not logged in createimage.php should take us to login page
I need to visit createimage.php
Check that login screen is displayed
In order to test that if we're not logged in showimage.php should take us to login page
I need to visit showimage.php
Check that login screen is displayed
In order to test that if we're not logged in service.php should take us to login page
I need to visit service.php
Check that login screen is displayed
In order to test that if we're not logged in test.php should take us to login page
I need to visit test.php
Check that login screen is displayed

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | access_provider_enabled | 1 | filter_wiris |

  @javascript
  Scenario: Visit configurationjs.php
    And I go to link "/filter/wiris/integration/configurationjs.php?lang=en"
    Then "editorEnabled" "text" should not exist
    Then "Forgotten your username" "text" should exist

  @javascript
  Scenario: Visit createimage.php
    And I go to link "/filter/wiris/integration/createimage.php?mml=<math><mo>x</mo></math>&lang=en"
    Then "formula" "text" should not exist
    Then "Forgotten your username" "text" should exist

  @javascript
  Scenario: Visit showimage.php
    And I go to link "/filter/wiris/integration/showimage.php?mml=<math><mo>x</mo></math>&lang=en"
    Then "status" "text" should not exist
    Then "Forgotten your username" "text" should exist

  @javascript
  Scenario: Visit service.php
    And I go to link "/filter/wiris/integration/service.php?service=mathml2accessible&mml=<math xmlns='http://www.w3.org/1998/Math/MathML'><mn>1</mn><mo>+</mo><mn>2</mn></math>&lang=en"
    Then "status" "text" should not exist
    Then "Forgotten your username" "text" should exist

  @javascript
  Scenario: Visit test.php
    And I go to link "/filter/wiris/integration/test.php?lang=en"
    Then "MathType integration test page" "text" should not exist
    Then "Forgotten your username" "text" should exist