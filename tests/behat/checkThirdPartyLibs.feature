@filter @filter_wiris @filter_wiris_current @wiris_mathtype @3.x @3.x_filter @4.0 @4.0_filter
Feature: Check MathType integration as a third party lib
In order to check if MathType integration is a third party library
As an admin
I need to Check if MathType integration appears on third party libraries page

  Background:
    Given I log in as "admin"

  @javascript
  Scenario: Check third party libraries
    And I navigate to "Development > Third party libraries" in site administration
    Then "MathType Web Integration PHP library" "text" should exist
    Then "MathType Web Integration JavaScript SDK" "text" should exist
    And "GPL 3.0+" "text" should exist
    And "integration" "text" should exist
    And "render" "text" should exist
