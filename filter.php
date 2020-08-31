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
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();

require_once('subfilters/php.php');
require_once('subfilters/fullmathml.php');

class filter_wiris extends moodle_text_filter {
    public function filter($text, array $options = array()) {
        global $PAGE;

        switch (get_config('filter_wiris', 'rendertype')) {
            case 'mathjax':
                // Translate encoding chars from Full MathML to Standard MathML.
                // @see: https://docs.wiris.com/en/mathtype/mathtype_web/integrations/encoding-attributes.
                $subfilter = new filter_wiris_fullmathml($this->context, $this->localconfig);
                // Let the MathJax filter do the heavy-lifting from this point.
            break;
            case 'client':
                // Translate encoding chars from Full MathML to Standard MathML.
                // @see: https://docs.wiris.com/en/mathtype/mathtype_web/integrations/encoding-attributes.
                $subfilter = new filter_wiris_fullmathml($this->context, $this->localconfig);
                // Include the WIRISPlugins.js library with TECH = 'server'.
                $PAGE->requires->js( new moodle_url('/filter/wiris/render/WIRISplugins.js?viewer=image') );
            break;
            case 'php':
            default:
                $subfilter = new filter_wiris_php($this->context, $this->localconfig);
            break;
        }
        return $subfilter->filter($text, $options);
    }
}