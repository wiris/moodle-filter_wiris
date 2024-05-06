@filter @filter_wiris @filter_wiris_current @wiris_mathtype @3.x @3.x_filter @4.0 @4.0_filter
Feature: Check Service host
In order to check the service host seting
As an admin
I can't access the test service if the service host doesn't exists

  @javascript
  Scenario: Set an incorrect service
    Given the "wiris" filter is "on"
    And I log in as "admin"
    And I navigate to "Plugins > MathType by WIRIS" in site administration
    And I set the following fields to these values:
      | Service host | www.wipis.net |
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then "exception" "text" should exist
    And I go back
    And I set the following fields to these values:
    | Service host | www.wiris.net |
    | Service path | /demo/editor/renders |
    And I press "Save changes"
    And I go to link "/filter/wiris/integration/test.php"
    Then "exception" "text" should exist
