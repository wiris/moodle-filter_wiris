# ![MathType](http://www.wiris.com/portal/themes/wiris_com/img/logos/mathtype/png/MY_office24.png) MathType Moodle filter plugin to use Javascript only 

     January, 2021.

**MathType Moodle plugins** allow to render MathML using WIRIS image services and to edit mathematical expressions integrating MathType WYSIWYG on Moodle's HTML editors: Atto and TinyMCE.

This is a custom version of these plugins that has removed the **MathType Web Integration PHP library** dependency and forces to use the **MathType Web Integration JavaScript SDK**. 

Therefore, all services are accessed from the user's browser, using Javascript, and not the Moodle's PHP server. Since the default version of the plugin allows administrators to choose between `server`, default, and `client` side rendering. 

## How to install

Visit the GitHub page of every MathType plugin and download the code from the `js-only` branch.

- [MathType Moodle filter plugin](https://github.com/wiris/moodle-filter_wiris/tree/js-only)
- [MathType Moodle plugin for Atto](https://github.com/wiris/moodle-atto_wiris/tree/js-only)
- [MathType Moodle plugin for TinyMCE](https://github.com/wiris/moodle-tinymce_tiny_mce_wiris/tree/js-only)

Follow the instructions on each plugin's `README` file and install them on your Moodle's instance.

## Approach

We've built a minimum viable product (MVP) to show the MathType plugins using a 100% Javascript solution and remove the **MathType Web Integration PHP library** dependency.

**Note:** The settings page still uses the MathType PHP library to manage server-side configurations but with no effect at all on the rendering and editing features. This is why the `integration` folder can't be deleted by the moment.

These are the changes that have been made:

**MathType Moodle filter plugin**

- The `server` render option is no present anymore in the settings page.
- The `classes` folder holds the php files needed to manage the plugin's settings; some of them could be deleted on this version.
- The `integration` folder is where the MathType PHP library is stored. The rendering and API wrapping funtions are not used anymore, but it can't be deleted since some parts of the settings page code still refer to some of these functions, even though have no effect now on the plugins behavior.
- All render-side tests have been commented.

**MathType Moodle plugins for Atto and TinyMCE**

- No changes have been made on these plugins and they both work with client-side rendering. 

## Automated testing

In order to make this plugin version available for testing, we've passed both automatinc and manual processes on different combinations of Moodle and PHP versions. 

There is a suite of automated tests that can be run to validate the render and editing features work fine.

Using docker containers, as on [moodle-docker project](https://github.com/moodlehq/moodle-docker), would allow to run all tests with these command:

```sh
     $ bin/moodle-docker-compose exec -T webserver php admin/tool/behat/cli/run.php --tags="@wiris_mathtype" -vvv --colors 

     Running single behat site:
     Moodle 3.9.3+ (Build: 20201224), 0d833e248a4792606f91cb679bb2af35a5181b99
     Php: 7.2.21, mysqli: 5.7.27, OS: Linux 5.4.0-58-generic x86_64
     Server OS "Linux", Browser: "firefox"
     Browser specific fixes have been applied. See http://docs.moodle.org/dev/Acceptance_testing#Browser_specific_fixes
     Started at 13-01-2021, 18:21
     ...................................................................... 70
     ...................................................................... 140
     ...................................................................... 210
     ...................................................................... 280
     .................................................

     17 scenarios (17 passed)
     329 steps (329 passed)
     12m52.84s (53.48Mb)
```

For your convenience, we've prepared a video with the Acceptance Test execution.

=> [Watch Test Acceptance Video](https://drive.google.com/file/d/1dP4EepozCTWiXkAFAiTcDQoQzL6pLtLu/view?usp=sharing)

### Code validation

We follow Moodle's contributing code conventions and best practices in our code. All versions of the plugins are automatically tested against a set of formal criteria. 

We use TravisCI to run a complete suite of tests and [code checks](o) against all three MathType Moodle plugins.

- https://travis-ci.com/github/wiris/moodle-filter_wiris/builds
- https://travis-ci.com/github/wiris/moodle-atto_wiris/builds
- https://travis-ci.com/github/wiris/moodle-tinymce_tiny_mce_wiris/builds


## Technical contact

This version has been prepared by the **WIRIS Integrations team**.

**Daniel Canet**
_Integrations Tech Lead_
[dcanet@wiris.com](mailto:dcanet@wiris.com)

