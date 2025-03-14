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
 * @package    filter_wiris
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// NOTE: no MOODLE_INTERNAL test here, this file may be required by behat before including /config.php.

require_once(__DIR__ . '/behat_wiris_base.php');

use Behat\Mink\Exception\ExpectationException;

/**
 * Class behat_wiris_filter
 *
 * This class is used for testing the behat_wiris_filter functionality.
 *
 * @package    filter_wiris
 * @subpackage wiris
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
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
     * Check editor always active on MathType filter page
     *
     * @Given I check editor always active
     * @throws ExpectationException If editor always active checkbox is not found, it will throw an exception.
     */
    public function i_check_editor_always_active() {
        $session = $this->getSession();
        $component = $session->getPage()->find('xpath', '//*[@id="id_s_filter_wiris_allow_editorplugin_active_course" ]');
        if (empty($component)) {
            throw new ExpectationException('Editor always active checkbox not found.', $this->getSession());
        }
        $component->check();
    }

    /**
     * Check Image performance mode off on MathType filter page
     *
     * @Given I check image performance mode off
     * @throws ExpectationException If image performance mode is not found, it will throw an exception.
     */
    public function i_check_image_performance_mode_off() {
        $session = $this->getSession();
        $component = $session->getPage()->find('xpath', '//*[@id="id_s_filter_wiris_pluginperformance" ]');
        if (empty($component)) {
            throw new ExpectationException('Image performance checkbox not found.', $this->getSession());
        }
        $component->uncheck();
    }

        /**
         * Check Image performance mode on on MathType filter page
         *
         * @Given I check image performance mode on
         * @throws ExpectationException If image performance mode is not found, it will throw an exception.
         */
    public function i_check_image_performance_mode_on() {
        $session = $this->getSession();
        $component = $session->getPage()->find('xpath', '//*[@id="id_s_filter_wiris_pluginperformance" ]');
        if (empty($component)) {
            throw new ExpectationException('Image performance checkbox not found.', $this->getSession());
        }
        $component->check();
    }

    /**
     * Check full-screen mode on on MathType filter page
     *
     * @Given I check full-screen mode on
     * @throws ExpectationException If full-screen mode is not found, it will throw an exception.
     */
    public function i_check_full_screen_mode_on() {
        $session = $this->getSession();
        $component = $session->getPage()->find('xpath', '//*[@id="id_s_filter_wiris_editormodalwindowfullscreen" ]');
        if (empty($component)) {
            throw new ExpectationException('Full-screen checkbox not found.', $this->getSession());
        }
        $component->check();
    }

    /**
     * Set the MathType filter render type to the given value.
     *
     * @Given /^the MathType filter render type is set to "(php|client)"$/
     */
    public function the_mathtype_filter_render_type_is_set_to($value) {
        set_config('rendertype', $value, 'filter_wiris');
    }

    /**
     * Set all the MathType visibility to true.
     *
     * @Given /^the MathType buttons visibility is set to "(?P<status>\d+)"$/
     */
    public function the_mathtype_buttons_visibility_is_set_to($value) {
        set_config('editor_enable', $value, 'filter_wiris');
        set_config('chem_editor_enable', $value, 'filter_wiris');
    }

    /**
     * Makes the given filter the most prioritary one.
     *
     * @Given /^the "(?P<filter_name>(?:[^"]|\\")*)" filter has maximum priority$/
     *
     * @param string $filtername the name of a filter, e.g. 'glossary'.
     */
    public function the_filter_has_max_priority($filtername) {
        require_once(__DIR__ . '/../../../../lib/filterlib.php');

        // Get all filters.
        $filters = filter_get_global_states();
        for ($i = $filters[$filtername]->sortorder; $i > 1; $i--) {
            // We can only move the filter one place at a time
            // -1 makes it more prioritary.
            filter_set_global_state($filtername, $filters[$filtername]->active, -1);
        }

        // Reset caches.
        reset_text_filters_cache();
        core_plugin_manager::reset_caches();
    }
}
