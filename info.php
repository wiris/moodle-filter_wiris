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
 * WIRIS filter test page.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once('../../config.php');
require_once($CFG->dirroot . '/lib/editor/tinymce/lib.php');
require_once($CFG->dirroot . '/filter/wiris/classes/pluginwrapper.php');
function wrs_assert($condition, $reporttext, $solutionlink) {
    if ($condition) {
        return $reporttext;
    } else {
        $result = '<span class="error wrs_plugin wrs_filter">' . $reporttext . '</span>' . '<a target="_blank" href="';
        $result .= $solutionlink . '"><img class="wrs_plugin wrs_filter" alt="" src="img/help.gif" /></a>';
        return $result;
    }
}

function wrs_getstatus($condition) {
    if ($condition) {
        return '<span class="ok wrs_plugin wrs_filter">OK</span>';
    } else {
        return '<span class="error wrs_plugin wrs_filter">ERROR</span>';
    }
}

function wrs_createtablerow($testname, $reporttext, $solutionlink, $condition) {
    $output = '<td class="wrs_plugin wrs_filter">' . $testname . '</td>';
    $output .= '<td class="wrs_plugin wrs_filter">' . wrs_assert($condition, $reporttext, $solutionlink) . '</td>';
    $output .= '<td class="wrs_plugin wrs_filter">' . wrs_getstatus($condition) . '</td>';
    return $output;
}

// Used to find the position of WIRIS plugin (Starting from Moodle 2.4 it changes the folder used to install the plugins).
$tinyeditor = new tinymce_texteditor();
$tinyversion = $tinyeditor->version;

$wirispluginbase = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce';
$wirispluginbasestring = 'TinyMCE';
if ($CFG->version >= 2014051200) {
    $editors = array_flip(explode(',', $CFG->texteditors));
    if (array_key_exists('atto', $editors) && (($editors['atto'] < $editors['tinymce'])) ||
            !array_key_exists('tinymce', $editors)) {
        $wirispluginbase = '../../lib/editor/atto/plugins/wiris';
        $wirispluginbasestring = 'Atto';
    }
} else if ($CFG->version < 2012120300) {
    $wirispluginbase = '../../lib/editor/tinymce/tiny_mce/' . $tinyversion . '/plugins/tiny_mce_wiris';
}

$PAGE->set_context(context_system::instance());
$PAGE->set_title(get_string('title', 'filter_wiris'));
$PAGE->set_url('/filter/wiris/info.php', array());
echo $OUTPUT->header();

$output = '';
$output .= html_writer::start_tag('h1');
$output .= get_string('title', 'filter_wiris');
$output .= html_writer::end_tag('h1');

$output .= html_writer::start_tag('table', array('id' => 'wrs_filter_info_table', 'class' => 'wrs_plugin wrs_filter'));

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
$output .= html_writer::start_tag('th', array('class' => 'wrs_plugin wrs_filter'));
$output .= "Test";
$output .= html_writer::end_tag('th');
$output .= html_writer::start_tag('th', array('class' => 'wrs_plugin wrs_filter'));
$output .= "Report";
$output .= html_writer::end_tag('th');
$output .= html_writer::start_tag('th', array('class' => 'wrs_plugin wrs_filter'));
$output .= "Status";
$output .= html_writer::end_tag('th');
$output .= html_writer::end_tag('tr');


$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';

$testname = get_string('test1', 'filter_wiris');
$reporttext = get_string('report1', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/docs/moodle/moodle-2.0';
$actualfolder = realpath(dirname(__FILE__));
$correctfolder = realpath($CFG->dirroot . '/filter/wiris');
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $actualfolder == $correctfolder);
$output .= html_writer::end_tag('tr');

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';
$testname = get_string('test2', 'filter_wiris');
$reporttext = get_string('report2', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
$filterfiles = Array('filter.php', 'version.php');
$exist = true;
foreach ($filterfiles as $value) {
    $condition = file_exists($value);
    if (!$condition) {
        $exist = false;
    }
}
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $exist);
$output .= html_writer::end_tag('tr');

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';
$plugin = new stdClass();
require($CFG->dirroot . '/filter/wiris/version.php');
$testname = get_string('test3', 'filter_wiris');
if (isset($plugin->release)) {
    $reporttext = '<span>' . $plugin->release . '</span>';
    $condition = true;
} else {
    $reporttext = get_string('report3', 'filter_wiris');
    $condition = false;
}
$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';
$testname = get_string('test4', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/docs/moodle/moodle-2.0';
$filterenabled = filter_is_enabled('filter/wiris');
if ($filterenabled) {
    $reporttext = get_string('report4.1', 'filter_wiris');
} else {
    $reporttext = get_string('report4.2', 'filter_wiris');
}
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $filterenabled);
$output .= html_writer::end_tag('tr');

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';
$testname = get_string('test5', 'filter_wiris') . $wirispluginbasestring;
$reporttext = get_string('report5.1', 'filter_wiris') . $wirispluginbasestring . get_string('report5.2', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
$wirisplugin = $wirispluginbase. '/core';
$condition = file_exists($wirisplugin);
if (!$condition) {
    $wirisplugin = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/core';
    $condition = file_exists($wirisplugin);
}
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');

$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
echo $output;
$output = '';

$wirisplugin = filter_wiris_pluginwrapper::get_wiris_plugin();
$testname = get_string('test6', 'filter_wiris').$wirispluginbasestring.' versions';
if (isset($plugin->release)) {
    $filterversion = $plugin->release;
} else {
    get_string('report6', 'filter_wiris');
}

// Using version.php to check release number.
if (strtolower($wirispluginbasestring) == 'tinymce') {
    require($wirispluginbase . '/../version.php');
} else {
    require($wirispluginbase . '/version.php');
}

if (isset($plugin->release)) {
    $pluginversion = $plugin->release;
} else {
    $pluginversion = "";
}

if ($filterversion == $pluginversion) {
    $reporttext = 'WIRIS plugin filter and WIRIS plugin for '.$wirispluginbasestring.' have the same version';
    $condition = true;
} else {
    $reporttext = 'WIRIS plugin filter and WIRIS plugin for '.$wirispluginbasestring.' versions don\'t match';
    $condition = false;
}

$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');

$output .= html_writer::end_tag('table');

$output .= html_writer::start_tag('p');
$output .= html_writer::start_tag('br');
echo $output;
$output = '';
echo get_string('textBeforeButton1', 'filter_wiris') . "<br/>";
$link = 'integration/test.php';
echo '<input type="button" value="' . get_string('button1', 'filter_wiris') . '" onClick="javascript:window.open(\'' . $link . '\');" /><br/>';

$wqversion = get_config('qtype_wq', 'version');
if (!empty($wqversion)) {
    echo get_string('textBeforeButton2', 'filter_wiris') . "<br/>";
    $link = '../../question/type/wq/info.php';
    echo '<input type="button" value="' . get_string('button2', 'filter_wiris') . '" onClick="javascript:window.open(\'' . $link . '\');" /><br/>';
}
$output .= html_writer::end_tag('br');
$output .= html_writer::end_tag('p');

$output .= html_writer::start_tag('p');
$output .= html_writer::start_tag('br');
$output .= html_writer::start_tag('span', array('style' => 'font-size:14px; font-weight:normal;'));
$output .= get_string('contact', 'filter_wiris');
$output .= " (<a href=\"mailto:support@wiris.com\">support@wiris.com</a>)";
$output .= html_writer::end_tag('span');
$output .= html_writer::end_tag('br');
$output .= html_writer::end_tag('p');

echo $output;
