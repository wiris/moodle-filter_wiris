@filter @filter_wiris
Feature: Tests bad proxy configuration

  Background:
    Given the following config values are set as admin:
      | config | value |
      | proxyhost | ec2-23-22-101-243.compute-1.amazonaws.com |
      | proxyport | 43129 |
      | proxyuser | user |
      | proxypassword | 309sU9HoF38fDixwGJ3Q |

  @javascript
  Scenario: Tests bad proxy configuration
    And I go to link "/filter/wiris/integration/test.php"
    And "unable to connect" "text" should exist