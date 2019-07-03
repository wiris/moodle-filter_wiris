@configtest
Feature: Check if using a bad service host throws exception

  @javascript
  Scenario: Check if using a bad service host throws exception
    And I log in as "admin"
    And I navigate to "Plugins" in site administration
    And I follow "Manage filters"
    And I click on "On" "option" in the "MathType by WIRIS" "table_row"
    And I navigate to "Plugins" in site administration
    And I follow "MathType by WIRIS"
    And I click on "Image performance mode" "checkbox"
    And I press "Save changes"
    And I create an image with mml "%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmsqrt%3E%3Cmi%3Ex%3C%2Fmi%3E%3C%2Fmsqrt%3E%3C%2Fmath%3E" and visit to its path
    Then svg is correctly displayed
    And I go back
    And I click on "png" "option" in the "#id_s_filter_wiris_imageformat" "css_element"
    And I press "Save changes"
    And I create an image with mml "%3Cmath+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmsqrt%3E%3Cmi%3Ex%3C%2Fmi%3E%3C%2Fmsqrt%3E%3C%2Fmath%3E" and visit to its path
    And "//img" "xpath_element" should exist


