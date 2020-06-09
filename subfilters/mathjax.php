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
        $n0 = mb_stripos($text, '«math');

        if ($n0 === false) {
            // Nothing to do.
            return $text;
        }

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

        // Replace Wiris Graph constructions by placeholders.
        $constructions = array();
        $constructionposition = strpos($text, "data-wirisconstruction", 0);
        while ($constructionposition !== false) {
            $i = 0;

            $constructionposition += strlen("data-wirisconstruction=\"");
            $constructionend = strpos($text, "\"", $constructionposition);
            $construction = substr($text, $constructionposition, $constructionend - $constructionposition);
            $constructions[$i] = $construction;

            $i++;
            if ($constructionend === false) {
                // This should not happen.
                break;
            }

            $constructionposition = strpos($text, "data-wirisconstruction", $constructionend);
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

        $return = $text;

        // Add <mrow> tags after the <semantics> tag in LaTeX-annotated MathML to make it standard MathML.
        $semanticposition = strpos($return, "<semantics>", 0);
        while ($semanticposition !== false) {
            $semanticposition += strlen("<semantics>");
            $annotationposition = strpos($return, "<annotation", $semanticposition);

            if ($annotationposition !== false) {
                $return = substr_replace(substr_replace($return, "</mrow>", $annotationposition, 0),
                 "<mrow>", $semanticposition, 0);
                $semanticposition = strpos($return, "<semantics>", $annotationposition + strlen("<mrow></mrow>"));
            } else {
                break;
            }
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
