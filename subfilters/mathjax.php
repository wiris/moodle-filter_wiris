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

    private const tags = [
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
        $tags = (object) $this->tags;
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
                $fixUrl = new EReg("<a href=\"[^\"]*\"[^>]*>([^<]*)<\\/a>|<a href=\"[^\"]*\">", "");
                $sub = $fixUrl->replace($sub, "\$1");
                $sub = $this->html_entity_decode($sub);
                $sub = str_replace($tags->in_double_quote, $tags->out_double_quote, $sub);
                $sub = str_replace($tags->in_open, $tags->out_open, $sub);
                $sub = str_replace($tags->in_close, $tags->out_close, $sub);
                $sub = str_replace($tags->in_entity, $tags->out_entity, $sub);
                $sub = str_replace($tags->in_quote, $tags->out_quote, $sub);
                $n0 = $n1;
                $output->add($sub);
                $n1 = $this->_hx_index_of($text, $tags->in_mathopen, $n0);
                unset($subtext,$e);
            }
        }
        $output->add($this->_hx_substr($text, $n0, null));
        return $output->b;
    }

    private function _hx_index_of($s, $value, $startIndex = null) {
        $x = strpos($s, $value, $startIndex);
        if($x === false)
            return -1;
        else
            return $x;
    }

    private function _hx_substr($s, $pos, $len) {
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

    private function _hx_last_index_of($s, $value, $startIndex = null) {
        $x = strrpos($s, $value, $startIndex === null ? null : strlen($s) - $startIndex);
        if($x === false)
            return -1;
        else
            return $x;
    }

    private function html_entity_decode($str) {
        $str = str_replace("&lt;", "<", $str);
        $str = str_replace("&gt;", ">", $str);
        $str = str_replace("&quot;", "\"", $str);
        $str = str_replace("&nbsp;", mb_convert_encoding('&#160;', 'UTF-8', 'HTML-ENTITIES'), $str);
        $str = str_replace("&amp;", "&", $str);
        return $str;
    }
}
