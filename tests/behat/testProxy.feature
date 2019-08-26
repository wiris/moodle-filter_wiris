@filter @filter_wiris
Feature: Tests proxy configuration
In order to check proxy configuration
As an admin
I should access the test service if and only if the proxy is correctly configurated

  Background:
    Given the following config values are set as admin:
      | config | value |
      | proxyhost | ec2-23-22-101-243.compute-1.amazonaws.com |
      | proxyport | 43128 |
      | proxyuser | user |
      | proxypassword | 309sU9HoF38fDixwGJ3Q |

  @javascript
  Scenario: Set and test proxy configuration
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist
    And the following config values are set as admin:
      | config | value |
      | proxyhost | |
      | proxyport | |
      | proxyuser | |
      | proxypassword | |
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist

  @javascript
  Scenario: Tests proxy configuration with https configuration
    And the following config values are set as admin:
      | config | value | plugin |
      | imageserviceprotocol | https | filter_wiris |
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist
    And the following config values are set as admin:
      | config | value |
      | proxyhost | |
      | proxyport | |
      | proxyuser | |
      | proxypassword | |
    And I go to link "/filter/wiris/integration/test.php"
    Then Wirisformula should exist

  @javascript
  Scenario: Tests bad proxy configuration
    And the following config values are set as admin:
      | config | value |
      | proxyport | 43129 |
    And I go to link "/filter/wiris/integration/test.php"
    And "unable to connect" "text" should exist