<?php
// This file is part of Moodle - https://moodle.org/
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
 * Compatibility shim for Moodle versions before 4.5.
 *
 * @deprecated This file is no longer required in Moodle 4.5+.
 * @package    filter_wiris
 * @subpackage wiris
 * @copyright  2023 WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die();

// Moodle versions before 4.5 use the legacy global base class.
if (!class_exists('core_filters\\text_filter') && class_exists(\moodle_text_filter::class)) {
    class_alias(\moodle_text_filter::class, 'core_filters\\text_filter');
}

class_alias(\filter_wiris\text_filter::class, \filter_wiris::class);
