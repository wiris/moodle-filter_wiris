@filter @filter_wiris @wiris_mathtype @moodle_activities @page_render @mtmoodle-6
Feature: Render in moodle forums
  In order to check the pages rendering
  As an admin
  I need to change the configuration

  Background:
    Given the following config values are set as admin:
      | config  | value        | plugin      |
      | toolbar | math = wiris | editor_atto |
    And the following "courses" exist:
      | fullname | shortname | format |
      | Course 1 | C1        | topics |
    And the following "course enrolments" exist:
      | user  | course | role           |
      | admin | C1     | editingteacher |
    And the "wiris" filter is "on"
    And the MathType filter render type is set to "php"
    And I log in as "admin"

@javascript @4.x @4.x_filter
  Scenario: MTMOODLE-6 - Check MathType renders a wiris formula in moodle forums
    # set text editor to "atto HTML"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the following fields to these values:
      | Text editor | Atto HTML editor |
    And I press "Save changes"
    # create new forum in existing course
    And I am on "Course 1" course homepage with editing mode on
    And I add a "Forum" to section "0" using the activity chooser
    And I set the following fields to these values:
      | Forum name | Test MathType for wiris formula render in forums |
    # insert Wirisformula in forum
    And I press "MathType" in "Description" field in Atto editor
    And I wait "3" seconds
    And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>1</mn></math>'
    And I wait "3" seconds
    And I press accept button in MathType Editor
    And I wait "1" seconds
    # check that Wirisformula exists in forum
    Then a Wirisformula containing "1 plus 1" should exist

@javascript @3.x @3.x_filter @4.0 @4.0_filter
  Scenario: MTMOODLE-6 - Check MathType renders a wiris formula in moodle forums
    # set text editor to "atto HTML"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the following fields to these values:
      | Text editor | Atto HTML editor |
    And I press "Save changes"
    # create new forum in existing course
    And I am on "Course 1" course homepage with editing mode on
    And I add a "Forum" to section "0"
    And I set the following fields to these values:
      | Forum name | Test MathType for wiris formula render in forums |
    # insert Wirisformula in forum
    And I press "MathType" in "Description" field in Atto editor
    And I wait "3" seconds
    And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>1</mn></math>'
    And I wait "3" seconds
    And I press accept button in MathType Editor
    And I wait "1" seconds
    # check that Wirisformula exists in forum
    Then a Wirisformula containing "1 plus 1" should exist

#TODO:

## insert Wirisformula in forum discussion
#And I press "Add discussion topic"
#And I set the following fields to these values:
#  | Subject | Test MathType for wiris formula render in forum discussions |
#And I press "MathType" in "Message" field in Atto editor
#And I wait until MathType editor is displayed
#And I set MathType formula to '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mo>+</mo><mn>2</mn></math>'
#And I wait "1" seconds
#And I press accept button in MathType Editor
#And I press "Post to forum"
#And I wait "1" seconds
#Then a Wirisformula containing "2 plus 2" should exist
## Check renders for Student role
#And I follow "Switch role to..." in the user menu
#And I press "Student"
#And I wait "1" seconds
#Then a Wirisformula containing "1 plus 1" should exist