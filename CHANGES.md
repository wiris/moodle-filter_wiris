# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Last release of this plugin is 7.27.1 (9th of nov. 2021).

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