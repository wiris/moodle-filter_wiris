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

namespace filter_wiris\subfilters;

use filter_wiris_pluginwrapper;

/**
 * This filter implements the default behaviour of the Wiris filter:
 * it uses the integration/ classes to make calls to the wiris.net services,
 * converting safeXML and XML math formulas to images.
 *
 * @package    filter_wiris
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class filter_wiris_php extends \core_filters\text_filter {
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

    /**
     * Filters the given text for math and applet elements using the Wiris plugin.
     *
     * @param string $text The text to filter.
     * @param array $options An array of options (optional).
     * @return string The filtered text.
     */
    public function filter($text, array $options = []) {
        global $CFG, $DB;

        $n0 = mb_stripos($text, '«math');
        $n1 = stripos($text, '<math');
        $n2 = mb_stripos($text, '«applet');

        // Find LateX.
        $matches = [];
        $latexpattern = '/\$\$(.*?)\$\$/';
        preg_match_all($latexpattern, $text, $matches);

        if ($n0 === false && $n1 === false && $n2 === false && count($matches[0]) == 0) {
            // Nothing to do.
            return $text;
        }

        require_once("$CFG->dirroot/filter/wiris/lib.php");

        // Automatic class loading not avaliable for Moodle 2.4 and 2.5.
        wrs_loadclasses();

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

        // If MathJax doesn't have preference and wiriseditorparselatex = true, parse LateX into MathML.
        if (!$this->mathjax_have_preference() && $wirispluginwrapper->wiris_editor_parse_latex()) {
            foreach ($matches[0] as $latex) {
                // For some reason, strayed `pi` LaTeX expressions are included in some Moodle pages by default.
                // This implies our services having to convert them into MathML and then rendering them as an image without the user even interacting with MathType to begin with.
                // To avoid this extra requests, which may impact our services, we just hardcoded it´s conversion to MathML.
                // NOTE: requests to latex2mahtml service aren't cached, worsening this situation.

                if ($latex === '$$\pi$$') {
                    $text = str_replace($latex, '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&pi;</mi></math>', $text);
                } else {
                    $response = $textservice->getMathML(null, $latex);

                    $decodedresponse = json_decode($response, true);

                    if (isset($decodedresponse['status']) && $decodedresponse['status'] === "ok") {
                        $mathml = $decodedresponse['result']['text'];

                        $text = str_replace($latex, $mathml, $text);
                    }
                }
            }
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

    /**
     * Returns true if MathJax filter is active in active context and
     * have preference over MathType filter
     * @return [bool] true if MathJax have preference over MathType filter. False otherwise.
     */
    private function mathjax_have_preference() {

        // The complex logic is working out the active state in the parent context,
        // so strip the current context from the list. We need avoid to call
        // filter_get_avaliable_in_context method if the context
        // is system context only.
        $contextids = explode('/', trim($this->context->path, '/'));
        array_pop($contextids);
        $contextids = implode(',', $contextids);
        // System context only.
        if (empty($contextids)) {
            return false;
        }

        $mathjaxpreference = false;
        $mathjaxfilteractive = false;
        $avaliablecontextfilters = filter_get_available_in_context($this->context);

        // First we need to know if MathJax filter is active in active context.
        if (array_key_exists('mathjaxloader', $avaliablecontextfilters)) {
            $mathjaxfilter = $avaliablecontextfilters['mathjaxloader'];
            $mathjaxfilteractive = $mathjaxfilter->localstate == TEXTFILTER_ON ||
                ($mathjaxfilter->localstate == TEXTFILTER_INHERIT &&
                    $mathjaxfilter->inheritedstate == TEXTFILTER_ON);
        }

        // Check filter orders.
        if ($mathjaxfilteractive) {
            $filterkeys = array_keys($avaliablecontextfilters);
            $mathjaxfilterorder = array_search('mathjaxloader', $filterkeys);
            $mathtypefilterorder = array_search('wiris', $filterkeys);

            if ($mathtypefilterorder > $mathjaxfilterorder) {
                $mathjaxpreference = true;
            }
        }

        return $mathjaxpreference;
    }
}
