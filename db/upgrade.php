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
 * Database upgrade for WIRIS plugin.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

function xmldb_filter_wiris_upgrade($oldversion) {
    global $DB, $CFG;

    $dbman = $DB->get_manager();

    if ($oldversion <= 2016101700) {
         // Define table filter_wiris to be created.
        $table = new xmldb_table('filter_wiris_formulas');

        // Adding fields to table filter_wiris.
        $table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
        $table->add_field('md5', XMLDB_TYPE_CHAR, '255', null, XMLDB_NOTNULL, null, null, 'id');
        $table->add_field('content', XMLDB_TYPE_TEXT, null, null, XMLDB_NOTNULL, null, null, 'md5');

        // Adding keys to table filter_wiris.
        $table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));
        $table->add_key('md5', XMLDB_KEY_UNIQUE, array('md5'));

        // Conditionally launch create table for filter_wiris.
        if (!$dbman->table_exists($table)) {
            $dbman->create_table($table);
        }

        // Wiris savepoint reached.
        upgrade_plugin_savepoint(true, 2016101701, 'filter', 'wiris');

    }
    return true;
}
