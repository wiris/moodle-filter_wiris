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
 * This filter doesn't make any calls to the wiris.net services, instead
 * converting safeXML into normal XML and allowing MathJax to render the
 * formulas.
 *
 * This can be used for improved performance in servers with lots of
 * network connections.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();


class filter_wiris_mathjax extends moodle_text_filter {

    /**
     * Set any context-specific configuration for this filter.
     *
     * @param context $context The current context.
     * @param array $localconfig Any context-specific configuration for this filter.
     */
    public function __construct($context, array $localconfig) {
        $this->context = $context;
        $this->localconfig = $localconfig;
    }

    public function filter($text, array $options = array()) {
        $safexmlentities = [
            'tagOpener' => '&laquo;',
            'tagCloser' => '&raquo;',
            'doubleQuote' => '&uml;',
            'realDoubleQuote' => '&quot;',
        ];

        $safexml = [
            'tagOpener' => '«',
            'tagCloser' => '»',
            'doubleQuote' => '¨',
            'ampersand' => '§',
            'quote' => '`',
            'realDoubleQuote' => '¨',
        ];

        $xml = [
            'tagOpener' => '<',
            'tagCloser' => '>',
            'doubleQuote' => '"',
            'ampersand' => '&',
            'quote' => '\'',
        ];

        // Replace Wiris Graph constructions by placeholders
        $constructions = array();
        $construction_position = strpos($text, "data-wirisconstruction", 0);
        while ($construction_position !== false) {
            $i = 0;
            
            $construction_position += strlen("data-wirisconstruction=\"");
            $construction_end = strpos($text, "\"", $construction_position);
            $construction = substr($text, $construction_position, $construction_end - $construction_position);
            $constructions[$i] = $construction;

            $i++;
            if ($construction_end === false) {
                // This should not happen.
                break;
            }

            $construction_position = strpos($text, "data-wirisconstruction", $construction_end);
        }
        for ($i = 0; $i < count($constructions); $i++) {
            $text = $this->replace_first_occurrence($text, $constructions[$i], "construction-placeholder-" . $i);
        }
        
        // Decoding entities.
        $text = implode($safexml['tagOpener'], explode($safexmlentities['tagOpener'], $text));
        $text = implode($safexml['tagCloser'], explode($safexmlentities['tagCloser'], $text));
        $text = implode($safexml['doubleQuote'], explode($safexmlentities['doubleQuote'], $text));
        $text = implode($safexml['realDoubleQuote'], explode($safexmlentities['realDoubleQuote'], $text));

        // Replace safe XML characters with actual XML characters.
        $text = implode($xml['tagOpener'], explode($safexml['tagOpener'], $text));
        $text = implode($xml['tagCloser'], explode($safexml['tagCloser'], $text));
        $text = implode($xml['doubleQuote'], explode($safexml['doubleQuote'], $text));
        $text = implode($xml['ampersand'], explode($safexml['ampersand'], $text));
        $text = implode($xml['quote'], explode($safexml['quote'], $text));

        // We are replacing $ by & when its part of an entity for retrocompatibility.
        // Now, the standard is replace § by &.
        $return = '';
        $currententity = null;

        $array = str_split($text);

        for ($i = 0; $i < count($array); $i++) {
            $character = $array[$i];
            if ($currententity === null) {
                if ($character === '$') {
                    $currententity = '';
                } else {
                    $return .= $character;
                }
            } else if ($character === ';') {
                $return += "&$currententity";
                $currententity = null;
            } else if (preg_match("([a-zA-Z0-9#._-] | '-')", $character)) { // Character is part of an entity.
                $currententity .= $character;
            } else {
                $return .= "$$currententity"; // Is not an entity.
                $currententity = null;
                $i -= 1; // Parse again the current character.
            }
        }

        if ($currententity !== null) {
            // It was not an entity, so we add it to the returned text using the dollar
            $return .= "$$currententity";
        }


        // Replace the placeholders by the Wiris Graph constructions
        for ($i = 0; $i < count($constructions); $i++) {
            $return = $this->replace_first_occurrence($return, "construction-placeholder-" . $i, $constructions[$i]);
        }

        return $return;

    }

    // We replace only the first occurrence because otherwise replacing construction-placeholder-1 would also
    // replace the construction-placeholder-10. By replacing only the first occurence we avoid this problem.
    private function replace_first_occurrence($haystack, $needle, $replace) {
        $pos = strpos($haystack, $needle);
        if ($pos !== false) {
            $newstring = substr_replace($haystack, $replace, $pos, strlen($needle));
            return $newstring;
        }

        return $haystack;
    }

}
