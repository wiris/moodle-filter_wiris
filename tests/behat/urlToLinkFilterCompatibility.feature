@filter @filter_wiris @wiris_mathtype @onlythisone
Feature: Compatibility with the Convert URLs into links and images filter by Moodle
In order to check that the Convert URLs into links and images filter is compatible with the Wiris filter
As an admin
I need to enable the Convert URLs into links and images filter and insert a MathType formula

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | toolbar | math = wiris | editor_atto |
    And the following "courses" exist:
      | fullname | shortname | format |
      | Course 1 | C1        | topics |
    And the following "course enrolments" exist:
      | user     | course | role           |
      | admin  | C1     | editingteacher |
    And the "wiris" filter is "on"
    And the "urltolink" filter is "on"
    And the "urltolink" filter has maximum priority
    And I log in as "admin"

  @javascript
  Scenario: Insert a formula with the Convert URLs into links and images filter on
    And I am on "Course 1" course homepage with editing mode on
    And I add a "Page" to section "0"
    And I set the following fields to these values:
      | Name | Insert a formula with the Convert URLs into links and images filter on |
    And I press "MathType" in "Page content" field in Atto editor
    And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo>(</mo><mfrac><mi>p</mi><mn>2</mn></mfrac><mo>)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mi>p</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>-</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>'
    And I wait "1" seconds
    And I press accept button in MathType Editor
    And I press "Save and display"
    And I wait "1" seconds
    Then Wirisformula should exist
