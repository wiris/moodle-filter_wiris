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
     * Turns MathType filter off in Filter settings
     *
     * @Given I turn MathType filter off
     * @throws ElementNotFoundException If MathType by Wiris field is not found.
     */
    public function i_turn_mathtype_filter_off() {
        $node = $this->get_node_in_container("option", "Off", "table_row", "MathType by WIRIS");
        $this->ensure_node_is_visible($node);
        $node->click();
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
     * Click on Mathjax settings on Manage filter page
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
     * Check editor always active on MathType filter page
     *
     * @Given I check editor always active
     * @throws Exception If editor always active checkbox does not exist, it will throw an exception.
     */
    public function i_check_editor_always_active() {
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
