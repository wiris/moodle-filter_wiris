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
 * This class implements WIRIS StorageAndCache interface
 * to store WIRIS data on MUC and Moodle database.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

global $CFG;

require_once($CFG->dirroot . '/filter/wiris/integration/lib/com/wiris/plugin/storage/StorageAndCache.interface.php');

class filter_wiris_storageandcache implements com_wiris_plugin_storage_StorageAndCache {

    /**
     * Delete all cache stored in MUC and database.
     *
     */
    // Implementing a non Moodle interface with camelCAse methods.
    // @codingStandardsIgnoreStart
    public function deleteCache() {
    // @codingStandardsIgnoreEnd
        global $DB;

        $cache = cache::make('filter_wiris', 'wirisformulas');
        // Delete MUC cache.
        $cache->purge();
        // Delete DB cache.
        $DB->delete_records('filter_wiris_formulas', null);
    }

    /**
     * Associates a data stream with a computed digest. Note that data are not shared by different service. Thus,
     * the pair digest and service must be the "primary key" of the data.
     * @param digest A computed digest.
     * @param service The service that stores data
     * @param stream The data to be stored.
     */
    // Implementing a non Moodle interface with camelCAse methods.
    // @codingStandardsIgnoreStart
    public function storeData($digest, $service, $stream) {
    // @codingStandardsIgnoreEnd
        $cache = cache::make('filter_wiris', 'wirisformulas');
        $bytes = haxe_io_Bytes::ofData($stream);
        $cache->set($digest . $service, $bytes);
    }

    /**
     * Given a computed digest, returns the stored data associated with it.
     * This should be a cache system. As a cache there is a contract between the implementation and the caller:
     *
     * If the data is not found, the caller is responsible to regenerate and store the data.</li>
     * The cache is free to remove any data
     *
     * @param digest A computed digest.
     * @param service The service that request the data
     * @return The data associated with the digest. If it is not found, this method should return null.
     */
    // Implementing a non Moodle interface with camelCAse methods.
    // @codingStandardsIgnoreStart
    public function retreiveData($digest, $service) {
    // @codingStandardsIgnoreEnd
        $cache = cache::make('filter_wiris', 'wirisformulas');
        $value = $cache->get($digest . $service);
        if ($value) {
            return $value->getData();
        } else {
            return null;
        }

    }

    /**
     * Given a computed digest, returns the respective content.
     * You might need to store the relation digest content during the codeDigest.
     *
     * @param digest A computed digest.
     * @return The content associated to the computed digest. If it is not found, this method should return null.
     */
    // Implementing a non Moodle interface with camelCAse methods.
    // @codingStandardsIgnoreStart
    public function decodeDigest($digest) {
    // @codingStandardsIgnoreEnd
        global $DB;
        if ($DB->record_exists('filter_wiris_formulas', array('md5' => $digest))) {
                $record = $DB->get_record('filter_wiris_formulas', array('md5' => $digest));
            return $record->content;
        }
    }

    /**
     * Given a content, computes a digest of it. This digest must be unique in order to use it as identifier of the content.
     * For example, the digest can be the md5 sum of the content.
     *
     * @param content
     * @return A computed digest of the content.
     */
    // Implementing a non Moodle interface with camelCAse methods.
    // @codingStandardsIgnoreStart
    public function codeDigest($content) {
    // @codingStandardsIgnoreEnd
        global $DB;

        $digest = com_wiris_system_Md5Tools::encodeString($content);
        if (!$DB->record_exists('filter_wiris_formulas', array('md5' => $digest))) {
            $DB->insert_record('filter_wiris_formulas', array('md5' => $digest, 'content' => $content));
        }
        return $digest;
    }
    /**
     * Initializes the storage and cache system. This method is called before any call to other methods.
     *
     * @param config WIRIS plugin configuration loaded from configuration.ini.
     */
    public function init($obj, $config) {
        $this->config = $config;
    }
    public $config;
}
