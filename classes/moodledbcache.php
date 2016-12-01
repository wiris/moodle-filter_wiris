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
 * This class implements WIRIS cache interface
 * to store WIRIS cache on Moodle database.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class moodledbcache {

    private $cachetable;
    private $keyfield;
    private $valuefield;

    /**
     * Constructor for db cache class.
     * @param String $tablename  Cache table name.
     * @param String $keyfield   "key" field.
     * @param String $valuefield "value" field.
     */
    public function __construct($tablename, $keyfield, $valuefield) {
        $this->cachetable = $tablename;
        $this->keyfield = $keyfield;
        $this->valuefield = $valuefield;
    }

    /**
     * Delete the given key from the cache
     * @param key The key to delete.
     * @throw Error On unexpected exception.
     */
    public function delete($key) {
    }

    /**
     * Deletes all the data in the cache.
     * @throw Error on unexpected exception.
     */
    // @codingStandardsIgnoreStart
    public function deleteAll() {
    // @codingStandardsIgnoreEnd
        global $DB;
        $DB->delete_records($this->cachetable, null);
    }

    /**
     * Retrieves the value for the given key for the cache.
     * @param key The key for for the data being requested.
     * @return Bytes The data retrieved from the cache. Returns null on cache miss or error.
     */
    public function get($key) {
        global $DB;

        if ($DB->record_exists($this->cachetable, array($this->keyfield => $key))) {
            $record = $DB->get_record($this->cachetable, array($this->keyfield => $key));
            // Cache interface returns an array of Bytes. When we are using the database to
            // store cache the data should be converted to a Bytes object.
            $valuefield = $this->valuefield;
            return haxe_io_Bytes::ofData(com_wiris_system_Utf8::toBytes($record->$valuefield));
        } else {
            return null;
        }

    }

    /**
     * Stores a (key, value) pair to the cache. If the key exists, updates the value.
     * @param key The key for the data being requested.
     * @param value The data to set against the key.
     * @throw Error On unexpected exception storing the value.
     */
    public function set($key, $value) {
        global $DB;
        if (!$DB->record_exists($this->cachetable, array($this->keyfield => $key))) {
            // Variable $value is a a array of bytes, we need the content of the array.
            try {
                $DB->insert_record($this->cachetable, array($this->keyfield => $key, $this->valuefield => $value->b));
            } catch (dml_exception $ex) {
                throw $ex;
            }
        } else {
            $record = $DB->get_record($this->cachetable, array($this->keyfield => $key));
            $record->value = $value->b;
            $DB->update_record($this->cachetable, $record);
        }
    }
}
