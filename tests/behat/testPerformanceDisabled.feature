@filter @filter_wiris
Feature: Check if image performance mode shows different formats correctly
In order to check if image performance mode shows different formats correctly
I need to create an image in svg format
Show the svg image
Change format to png
Create an image in png format
Show the png image

  @javascript
  Scenario: Create image in both formats and check
    Given the "wiris" filter is "on"
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I go to MathType filter settings
    And I click on "Image performance mode" "checkbox"
    And I press "Save changes"
    And I create a MathType formula with mml "%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmsqrt%3E%3Cmi%3Ex%3C%2Fmi%3E%3C%2Fmsqrt%3E%3C%2Fmath%3E" and visit to its path
    Then an svg is correctly displayed
    And I go back
    And I go back
    And I set the following fields to these values:
      | Image format | png |
    And I press "Save changes"
    And I create a MathType formula with mml "%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmsqrt%3E%3Cmi%3Ex%3C%2Fmi%3E%3C%2Fmsqrt%3E%3C%2Fmath%3E" and visit to its path
    Then an image should exist