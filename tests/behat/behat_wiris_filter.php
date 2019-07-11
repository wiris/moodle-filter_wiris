<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Methods related to MathType filter settings.
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// NOTE: no MOODLE_INTERNAL test here, this file may be required by behat before including /config.php.

require_once(__DIR__ . '/behat_wiris_base.php');

class behat_wiris_filter extends behat_wiris_base {

    /**
     * Create an image with an mml and visit to its path
     *
     * @Given I create an image with mml :mml and visit to its path
     */
    public function i_create_an_image_with_mml_mml_and_visit_to_its_path($mml) {
        $session = $this->getSession();
        $script = 'window.location.replace("http://127.0.0.1/moodle3_5/filter/wiris/integration/createimage.php?mml='
        .$mml.'&lang=en&metrics=&centerbaseline=false");';
        $session->executeScript($script);
        $script = 'return document.body.innerHTML';
        $path = $session->evaluateScript($script);
        $script = 'window.location.replace("'.$path.'");';
        $session->executeScript($script);
    }

    /**
     * Turns MathType filter on
     *
     * @Given I turn MathType filter on
     * @throws Behat\Mink\Exception\ElementNotFoundException If $xpathnumber is not correctly computed.
     */
    public function i_turn_mathtype_filter_on() {
        $field = $this->find('xpath', "//tr/td[text()='MathType by WIRIS']/following-sibling::td[1]//select");
        if (null === $field) {
            throw new ElementNotFoundException(
                $this->getSession(), 'MathType by Wiris field not found');
        }
        $field->selectOption("On");
    }

    /**
     * Turns MathType filter off in Filter settings in Forum or in Course
     *
     * @Given I turn MathType filter off
     * @throws ElementNotFoundException If MathType by Wiris field is not found.
     */
    public function i_turn_mathtype_filter_off() {
        $field = $this->find('xpath', "//tr/td[text()='MathType by WIRIS']/following-sibling::td[1]//select");
        if (null === $field) {
            throw new ElementNotFoundException(
                $this->getSession(), 'MathType by Wiris field not found');
        }
        $field->selectOption("Off");
    }

    /**
     * Turns MathJax disabled
     *
     * @Given I turn mathjax disabled
     * @throws ElementNotFoundException If MathJax field is not found.
     */
    public function i_turn_mathjax_off() {
        $field = $this->find('xpath', "//tr/td[text()='MathJax']/following-sibling::td[1]//select");
        if (null === $field) {
            throw new ElementNotFoundException(
                $this->getSession(), 'Mathjax field not found');
        }
        $field->selectOption("Disabled");
    }

    /**
     * Enable Mathtype filter through the database
     *
     * @Given I enable Mathtype filter
     */
    public function i_enable_mathtype_filter() {
        global $DB;
        $table = 'filter_active';
        if (!$DB->record_exists($table, array('filter' => 'wiris'))) {
            $number = $DB->count_records($table);
            $record = $DB->get_record($table, array('id' => '1'));
            $record->filter = 'wiris';
            $record->contextid = 1;
            $record->active = 1;
            $record->sortorder = $number + 1;
            $DB->insert_record($table, $record);
        } else {
            $record = $DB->get_record($table, array('filter' => 'wiris'));
            $record->active = 1;
            $DB->update_record($table, $record);
        }
    }

    /**
     * Disable Mathtype filter through the database
     *
     * @Given I disable Mathtype filter
     * @throws Exception If Mathtype filter is not enabled, it will throw an exception.
     */
    public function i_disable_mathtype_filter() {
        global $DB;
        $table = 'filter_active';
        if (!$DB->record_exists($table, array('filter' => 'wiris'))) {
            throw new Exception('MathType filter is not enabled.');
        } else {
            $DB->delete_records($table, array('filter' => 'wiris'));
        }
    }

    /**
     * Click on MathType filter settings on Manage filters page
     *
     * @Given I go to MathType filter settings
     * @throws Exception If MathType filter settings link does not exist, it will throw an exception.
     */
    public function i_go_to_mathtype_filter_settings() {
        $session = $this->getSession();
        $href = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//tr/td[text()=\'MathType by WIRIS\']
            /following-sibling::td[4]/a')
        );
        if (empty($href)) {
            throw new Exception('MathType filter settings link not found.');
        }
        $href->click();
    }

    /**
     * Click on Mathjax settings on MathType filter page
     *
     * @Given I go to MathJax settings
     * @throws Exception If MathJax settings link does not exist, it will throw an exception.
     */
    public function i_go_to_mathjax_settings() {
        $session = $this->getSession();
        $href = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//tr/td[text()=\'MathJax\']/following-sibling::td[4]/a')
        );
        if (empty($href)) {
            throw new Exception('MathType filter settings link not found.');
        }
        $href->click();
    }

    /**
     * Select png option on MathType filter page
     *
     * @Given I select png option
     */
    public function i_select_png_option_on_manage_filters_page() {
        $session = $this->getSession();
        $field = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//select[@id="id_s_filter_wiris_imageformat"]')
        );
        if (empty($field)) {
            throw new Exception('Png option not found.');
        }
        $field->selectOption("png");
    }


    /**
     * Check editor always active on MathType filter page
     *
     * @Given I check editor always active
     * @throws Exception If editor always active checkbox does not exist, it will throw an exception.
     */
    public function i_check_enable_trusted_content() {
        $session = $this->getSession();
        $field = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath',
            '//input[@id="id_s_filter_wiris_allow_editorplugin_active_course" ]')
        );
        if (empty($field)) {
            throw new Exception('Editor always active checkbox not found.');
        }
        $field->check();
    }
}
