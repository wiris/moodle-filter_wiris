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


class filter_wiris extends moodle_text_filter {

    const tags = [
        "mathTag" => "math",
        "in_appletclose" => "«/APPLET»",
        "in_appletopen" => "«APPLET",
        "out_quote" => "'",
        "in_quote" => "`",
        "out_entity" => "&",
        "in_entity" => "§",
        "out_close" => ">",
        "in_close" => "»",
        "out_open" => "<",
        "in_open" => "«",
        "out_double_quote" => "\"",
        "in_double_quote" => "¨",
        "in_mathclose" => "«/math»",
        "in_mathopen" => "«math"
    ];

    public function filter($text, array $options = array()) {

        // $tags = com_wiris_plugin_impl_TextFilterTags::newSafeXml();
        return $this->filterMath((object)filter_wiris::tags, $text, null, true);

        global $CFG, $DB;

        $n0 = mb_stripos($text, '«math');
        $n1 = stripos($text, '<math');
        $n2 = mb_stripos($text, '«applet');

        if ($n0 === false && $n1 === false && $n2 === false) {
            // Nothing to do.
            return $text;
        }

        require_once("$CFG->dirroot/filter/wiris/lib.php");

        // Automatic class loading not avaliable for Moodle 2.4 and 2.5.
        wrs_loadclasses();

        // MathJax and MathML
        // Not filter if MathJax filter order < MathType filter order.
        if ($n1 !== false && $this->mathjax_have_preference()) {
            return $text;
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

    function _hx_index_of($s, $value, $startIndex = null) {
        $x = strpos($s, $value, $startIndex);
        if($x === false)
            return -1;
        else
            return $x;
    }

    function _hx_substr($s, $pos, $len) {
        if($pos !== null && $pos !== 0 && $len !== null && $len < 0) return '';
        if($len === null) $len = strlen($s);
        if($pos < 0) {
            $pos = strlen($s) + $pos;
            if($pos < 0) $pos = 0;
        } else if($len < 0 )
            $len = strlen($s) + $len - $pos;
        $s = substr($s, $pos, $len);
        if($s === false)
            return '';
        else
            return $s;
    }

    function _hx_last_index_of($s, $value, $startIndex = null) {
        $x = strrpos($s, $value, $startIndex === null ? null : strlen($s) - $startIndex);
        if($x === false)
            return -1;
        else
            return $x;
    }

    public function html_entity_decode($str) {
        $str = str_replace("&lt;", "<", $str);
        $str = str_replace("&gt;", ">", $str);
        $str = str_replace("&quot;", "\"", $str);
        $str = str_replace("&nbsp;", mb_convert_encoding('&#160;', 'UTF-8', 'HTML-ENTITIES'), $str);
        $str = str_replace("&amp;", "&", $str);
        return $str;
    }

    public function filterMath($tags, $text, $prop, $safeXML) {
        $n0 = null;
        $n1 = null;
        $m0 = null;
        $m1 = null;
        $output = null;
        $sub = null;
        $output = new StringBuf();
        $n0 = 0;
        $n1 = $this->_hx_index_of($text, $tags->in_mathopen, $n0);
        $tag = "data-mathml"; //$this->plugin->getConfiguration()->getProperty(com_wiris_plugin_api_ConfigurationKeys::$EDITOR_MATHML_ATTRIBUTE, "data-mathml");
        $dataMathml = $this->_hx_index_of($text, $tag, 0);
        while($n1 >= 0) {
            $m0 = $n0;
            $output->add($this->_hx_substr($text, $n0, $n1 - $n0));
            $n0 = $n1;
            $n1 = $this->_hx_index_of($text, $tags->in_mathclose, $n0);
            if($n1 >= 0) {
                $n1 = $n1 + strlen($tags->in_mathclose);
                $sub = $this->_hx_substr($text, $n0, $n1 - $n0);
                if($safeXML) {
                    if($dataMathml !== -1) {
                        $m1 = $this->_hx_index_of($text, "/>", $n1);
                        if($m1 === -1) {
                            $m1 = $this->_hx_index_of($text, ">", $n1);
                        }
                        if($m1 >= 0 && ($this->_hx_index_of($text, "<img", $n1) === -1 || $this->_hx_index_of($text, "<img", $n1) > $m1)) {
                            $m0 = $this->_hx_last_index_of($this->_hx_substr($text, $m0, $n0 - $m0), "<img", null);
                            if($m0 >= 0) {
                                if($this->_hx_index_of($text, $tag, $m0) > 0 && $this->_hx_index_of($text, $tag, $m0) < $n1) {
                                    $n0 = $n1;
                                    $output->add($sub);
                                    $n1 = $this->_hx_index_of($text, $tags->in_mathopen, $n0);
                                    $m0 = $m1;
                                    continue;
                                }
                            }
                        }
                    }
                    // if($thisfixUrl === null) {
                        $this->fixUrl = new EReg("<a href=\"[^\"]*\"[^>]*>([^<]*)<\\/a>|<a href=\"[^\"]*\">", "");
                    // }
                    $sub = $this->fixUrl->replace($sub, "\$1");
                    $sub = $this->html_entity_decode($sub);
                    $sub = str_replace($tags->in_double_quote, $tags->out_double_quote, $sub);
                    $sub = str_replace($tags->in_open, $tags->out_open, $sub);
                    $sub = str_replace($tags->in_close, $tags->out_close, $sub);
                    $sub = str_replace($tags->in_entity, $tags->out_entity, $sub);
                    $sub = str_replace($tags->in_quote, $tags->out_quote, $sub);
                }
                $subtext = null;
                try {
                    $subtext = $sub;
                    //$subtext = $this->math2Img($sub, $prop);
                }catch(Exception $�e) {
                    $_ex_ = ($�e instanceof HException) ? $�e->e : $�e;
                    $e = $_ex_;
                    {
                        $subtext = $sub;
                    }
                }
                $sub = $subtext;
                $n0 = $n1;
                $output->add($sub);
                $n1 = $this->_hx_index_of($text, $tags->in_mathopen, $n0);
                unset($subtext,$e);
            }
        }
        $output->add($this->_hx_substr($text, $n0, null));
        return $output->b;
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
