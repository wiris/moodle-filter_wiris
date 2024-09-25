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
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * This file is empty because the class filter_wiris is an alias of the class filter_wiris\text_filter.
 * This is done to maintain compatibility with previous versions of the plugin.
 * The new class filter_wiris\text_filter is located in the file main/filter/wiris/classes/text_filter.php.
 *
 * @package    filter_wiris
 * @subpackage wiris
 * @copyright  2023 WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

class_alias(\filter_wiris\text_filter::class, \filter_wiris::class);

