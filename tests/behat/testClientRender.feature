@filter @filter_wiris @filter_wiris_render @filter_wiris_render_client @wiris_mathtype @3.x
Feature: Client-side rendering
In order to enable client-side rendering
As an admin
I need to change the render type

  Background:
    Given the following config values are set as admin:
      | config | value | plugin |
      | toolbar | math = wiris | editor_atto |
      | imageformat | svg | filter_wiris |
    And the following "courses" exist:
      | fullname | shortname | format |
      | Course 1 | C1        | topics |
    And the following "course enrolments" exist:
      | user     | course | role           |
      | admin  | C1     | editingteacher |
    And the "wiris" filter is "on"
    And the "urltolink" filter is "off"
    And the MathType filter render type is set to "client"
    And I log in as "admin"

  @javascript
  Scenario: Add a MathML formula and check MathType renders it correctly with Javascript library
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the following fields to these values:
      | Text editor | Atto HTML editor |
    And I press "Save changes"
    And I am on "Course 1" course homepage with editing mode on
    And I add a "Page" to section "0" using the activity chooser
    And I set the following fields to these values:
      | Name | Test MathType for Atto and client side rendering on Moodle |
    And I press "MathType" in "Page content" field in Atto editor
    And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo>(</mo><mfrac><mi>p</mi><mn>2</mn></mfrac><mo>)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mi>p</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>-</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>'
    And I wait "1" seconds
    And I press accept button in MathType Editor
    And I press "Save and display"
    # // We choosed to use the one-step option.
    # // This 2-step other option works also:
    # When I wait until the page is ready
    # Then Wirisformula should exist
    And I wait "1" seconds
    Then I wait until Wirisformula formula exists
    And MathType formula in svg format is correctly displayed
