@filter @filter_wiris
Feature: Tests proxy configuration

  @javascript
  Scenario: Tests proxy configuration
    And I go to link "/wirisutils/setConfig.php?key=proxyhost&value=ec2-23-22-101-243.compute-1.amazonaws.com"
    And I go to link "/wirisutils/setConfig.php?key=proxyport&value=43128"
    And I go to link "/wirisutils/setConfig.php?key=proxyuser&value=user"
    And I go to link "/wirisutils/setConfig.php?key=proxypassword&value=309sU9HoF38fDixwGJ3Q"
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist
    And I go to link "/wirisutils/setConfig.php?key=proxyhost&value="
    And I go to link "/wirisutils/setConfig.php?key=proxyport&value="
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist
