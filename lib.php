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
 * Library functions for MathType filter.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Automatic class loading not avaliable for Moodle 2.4 and 2.5.
 * This method loads all files under "classes" folder.
 *
 */
function wrs_loadclasses() {
    global $CFG;

    if ($CFG->version < 2013111800) {
        require_once($CFG->dirroot . '/filter/wiris/classes/pluginwrapper.php');
        require_once($CFG->dirroot . '/filter/wiris/classes/paramsprovider.php');
        require_once($CFG->dirroot . '/filter/wiris/classes/configurationupdater.php');
        require_once($CFG->dirroot . '/filter/wiris/classes/pluginwrapperconfigurationupdater.php');
        require_once($CFG->dirroot . '/filter/wiris/classes/accessprovider.php');
    }
}
