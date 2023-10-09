# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Last release of this plugin is 8.6.0 (October, 9th 2023).

## v8.6.0 - 9 oct. 2023
- chore: Update PHP integration to 8.5.0
- fix: Prevent exception caused by passing null arguments to strpos in php 8.1
- feat: Add notification regarding TinyMCE legacy incompatibility
- fix: cfg branch not found
- feat: Update viewer
- feat: Add Moodle 4.3 compatibility

## v8.4.0 - 31 aug. 2023

- fix: Moodle badge Certification Issues
- fix: Add TinyMCE to tests
- fix: Moodle code Checker errors
- fix: get tiny6 config if using tiny6

## v8.3.0 - 12th jun. 2023
- fix: Improve data reporting
- fix: Some issues with PHP 8.2

## v8.2.6 - 24th apr. 2023
- feat: Compatibility with Moodle 4.2
- feat: Compatibility with TinyMCE 6

## v8.1.0 - 29th nov. 2023
- fix: Added support for PHP 8.1
- fix: Improve data reporting

## v8.0.1 - 23rd nov. 2022
- chore: update PHP integration to 8.0.0
- fix: Flaky tests for Moodle 4.1

## v8.0.0 - 20th oct. 2022
- fix: change line endings from CRLF to LF #kb-17449

## v7.30.0 - 1st jul. 2022
- fix: Use branch stable as a failsafe in CI
- ci: add moodle 4 on the ci workflow matrix
- ci: add cd workflow

## v7.29.0 - 20th jun. 2022
- fix(ci): moodle code checker warning and errors #19424.
- fix: pass sucessfully phpunit test for moodle 310 and 311
- Change links to make them have UTMs #KB-25028.
- Make links open in a new tab #KB-25519

## v7.27.1 - 9th nov. 2021
- Fix "missing ['privacy:metadata']" from @christina-roperto contribution #86
- Improve the "MathType Moodle Plugins Suite" software development cycle.
  - Use 'ubuntu-latest' for the Moodle Plugin CI workflow.
  - Add 'on:schedule' trigger property to run the tests every morning.
  - Add 'on:workflow_dispatch' trigger property to run test on demand.
  - Improve code comments to match internal code guidelines.

## v7.27.0 - 22nd of july 2021
- Support for latest versions of MathType Atto and TinyMCE's plugins.

## v7.26.1
- Feature: 'Migrate MathType plugins suite from TravisCI to Github Actions'.

## v7.26.0
- Fix & upgrade TravisCI job configuration.
- Update project documentation by improving the main `README` file.
- Start using `CHANGES` file as changelog.
