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
//

/**
 * It is a filter that allows to visualize formulas generated with
 * MathType image service.
 *
 * Replaces all substrings '«math ... «/math»' '<math ... </math>'
 * generated with MathType by the corresponding image.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class filter_wiris extends moodle_text_filter {

    public function filter($text, array $options = array()) {

        global $CFG, $DB;

        $n0 = stripos($text, '«math');
        $n1 = stripos($text, '<math');
        $n2 = stripos($text, '«applet');

        if ($n0 === false && $n1 === false && $n2 === false) {
            // Nothing to do.
            return $text;
        }

        require_once("$CFG->dirroot/filter/wiris/lib.php");

        // Automatic class loading not avaliable for Moodle 2.4 and 2.5.
        wrs_loadclasses();

        // MathJax and MathML
        // Not filter if MathJax filter order < MathType filter order.
        if ($n1 !== false && $wirisfilter = $DB->get_record('filter_active', array('filter' => 'wiris'))) {
            if ($mathjaxfilter = $DB->get_record('filter_active', array('filter' => 'mathjaxloader', 'active' => '1'))) {
                if ($mathjaxfilter->sortorder < $wirisfilter->sortorder) {
                    return $text;
                }
            }
        }

        $wirispluginwrapper = new filter_wiris_pluginwrapper();

        $wirispluginwrapper->begin();
        $textservice = $wirispluginwrapper->get_instance()->newTextService();

        $query = '';

        global $COURSE;

        if (isset($COURSE->id)) {
            $query .= '?course=' . $COURSE->id;
        }
        if (isset($COURSE->category)) {
            $query .= empty($query) ? '?' : '/';
            $query .= 'category=' . $COURSE->category;
        }

        $prop['refererquery'] = $query;
        $prop['lang'] = current_language();
        $prop['savemode'] = 'safeXml'; // ...safeXml filtering.
        $text = $textservice->filter($text, $prop);
        $prop['savemode'] = 'xml'; // ...xml filtering.
        $text = $textservice->filter($text, $prop);
        $wirispluginwrapper->end();

        // If a CAS session has been filtered.
        // We need to create a JNLP link for browsers non supporting JAVA.
        if ($n2) {
            $text = wrs_filterapplettojnlp($text);
        }

        return $text;
    }
}
