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

        $safeXmlCharactersEntities = [
            'tagOpener' => '&laquo;',
            'tagCloser' => '&raquo;',
            'doubleQuote' => '&uml;',
            'realDoubleQuote' => '&quot;',
        ];

        $safeXmlCharacters = [
            'tagOpener' => '«',
            'tagCloser' => '»',
            'doubleQuote' => '¨',
            'ampersand' => '§',
            'quote' => '`',
            'realDoubleQuote' => '¨',
        ];

        $xmlCharacters = [
            'tagOpener' => '<',
            'tagCloser' => '>',
            'doubleQuote' => '"',
            'ampersand' => '&',
            'quote' => '\'',
        ];

        // Decoding entities.
        $text = implode($safeXmlCharacters['tagOpener'], explode($safeXmlCharactersEntities['tagOpener'], $text));
        $text = implode($safeXmlCharacters['tagCloser'], explode($safeXmlCharactersEntities['tagCloser'], $text));
        $text = implode($safeXmlCharacters['doubleQuote'], explode($safeXmlCharactersEntities['doubleQuote'], $text));
        $text = implode($safeXmlCharacters['realDoubleQuote'], explode($safeXmlCharactersEntities['realDoubleQuote'], $text));

        // Replace safe XML characters with actual XML characters
        $text = implode($xmlCharacters['tagOpener'], explode($safeXmlCharacters['tagOpener'], $text));
        $text = implode($xmlCharacters['tagCloser'], explode($safeXmlCharacters['tagCloser'], $text));
        $text = implode($xmlCharacters['doubleQuote'], explode($safeXmlCharacters['doubleQuote'], $text));
        $text = implode($xmlCharacters['ampersand'], explode($safeXmlCharacters['ampersand'], $text));
        $text = implode($xmlCharacters['quote'], explode($safeXmlCharacters['quote'], $text));

        // We are replacing $ by & when its part of an entity for retrocompatibility.
        // Now, the standard is replace § by &.
        $returnValue = '';
        $currentEntity = null;

        $array = str_split($text);

        for ($i = 0; $i < count($array); $i++) {
            $character = $array[$i];
            if ($currentEntity === null) {
                if ($character === '$') {
                    $currentEntity = '';
                } else {
                    $returnValue .= $character;
                }
            } elseif ($character === ';') {
                $returnValue += "&$currentEntity";
                $currentEntity = null;
            } elseif (preg_match("([a-zA-Z0-9#._-] | '-')", $character)) { // Character is part of an entity.
                $currentEntity .= $character;
            } else {
                $returnValue .= "$$currentEntity"; // Is not an entity.
                $currentEntity = null;
                $i -= 1; // Parse again the current character.
            }
        }

        return $returnValue;

    }

}
