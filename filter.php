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
 * It is a filter that allows to visualize applets that use WIRIS CAS and
 * images (of formulas) generated through the WIRIS Formula Image Service.
 *
 * Replaces all substrings  '«applet ... «/applet»' and '<applet ... </applet>'
 * generated  with WIRIS CAS by the corresponding WIRIS
 * applet image.
 * Replaces all substrings '«math ... «/math»' '<math ... </math>'
 * generated with WIRIS Editor by the corresponding image.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/* ---------------------------------------------------------------------------- */
// General description:                                                         //
// Applet: An applet is a Java program designed to be executed in a web page    //
// through a navigator who supports Java. All the last versions of Netscape or  //
// Microsoft Internet Explorer include it by defect.                            //
// WIRIS CAS (Computer Algebra System): mathematical calculation Tool that      //
// works through an applet.                                                     //
// Web Service: A web service is a component of software that can describe      //
// itself and provides certain functionality to other applications, through an  //
// Internet connection.                                                         //
// WIRIS EDITOR: Formulas publisher who allows to generate images of these      //
// formulas through a Web Service.                                              //
// Regular expression: A regular expression is a model or a form to compare     //
// with a chain of characters.                                                  //
/*                                                                              */
// Wiris Filter Description:                                                    //
// It is a filter that allows to visualize applets that use WIRIS CAS and       //
// images (of formulas) generated through the WIRIS Formula Image Service.      //
/*                                                                              */
// Replaces all substrings ''«applet ... «/applet»' by the corresponding WIRIS  //
// applet code: '<applet ... </applet>'                                         //
// Replaces all substrings '«math ... «/math»' by the corresponding MathML      //
// code: '<math ... </math>'                                                    //
/* ---------------------------------------------------------------------------- */



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
        // Not filter if MathJax filter order < WIRIS filter order.
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
