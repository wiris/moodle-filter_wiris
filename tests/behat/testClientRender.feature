@filter @filter_wiris @filter_wiris_render @filter_wiris_render_client
Feature: Client-side rendering
In order to enable client-side rendering
As an admin
I need to change the render type

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
    And the MathType filter render type is set to "client"
    And I log in as "admin"

  @javascript
  Scenario: Change image format and check
    And I am on "Course 1" course homepage with editing mode on
    And I add a "Page" to section "0"
    And I set the following fields to these values:
      | Name | Test MathType for Atto and client side rendering on Moodle |
    And I press "MathType" in "Page content" field in Atto editor
    And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mi>x</mi></msqrt></math>'
    And I press accept button in MathType Editor
    And I press "Save and display"
    # This check wouldn't pass if the render type is set to MathJax.
    When I wait until the page is ready
    Then MathType formula in svg format is correctly displayed