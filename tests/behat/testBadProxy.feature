@filter @filter_wiris
Feature: Tests bad proxy configuration

  @javascript
  Scenario: Tests bad proxy configuration
    And I go to link "/wirisutils/setConfig.php?key=proxyhost&value=ec2-23-22-101-243.compute-1.amazonaws.com"
    And I go to link "/wirisutils/setConfig.php?key=proxyport&value=43129"
    And I go to link "/wirisutils/setConfig.php?key=proxyuser&value=user"
    And I go to link "/wirisutils/setConfig.php?key=proxypassword&value=309sU9HoF38fDixwGJ3Q"
    And I go to link "/filter/wiris/integration/test.php"
    And "unable to connect" "text" should exist




