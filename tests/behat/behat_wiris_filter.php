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
     * Turns MathType filter on in 'Manage Filters' menu
     *
     * @Given /^I turn MathType filter on$/
     *
     * @throws  Behat\Mink\Exception\ElementNotFoundException If $xpathnumber is not correctly computed.
     */
    public function i_turn_wiris_filter_on() {
        $row = $this->look_in_table("Math & Science by WIRIS");
        // The table has columns: "td|select|select|" so same row, second column will be in position double-1.
        $xpathnumber = $row * 2 - 1;
        $field = $this->find('xpath', "(//select[@class='custom-select singleselect'])[$xpathnumber]");
        if (null === $field) {
            throw new ElementNotFoundException(
                $this->getSession(), 'form field', 'id|name|label|value', $locator
            );
        }
        $field->selectOption("On");
    }
}
