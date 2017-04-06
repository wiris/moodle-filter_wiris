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

// BEGIN HELPERS FUNCTIONS.
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

function get_current_editor_data() {
    global $CFG;
    $data = [];

    $tinyeditor = new tinymce_texteditor();

    if ($CFG->version < 2012120300) {
        $data['plugin_path'] = '../../lib/editor/tinymce/tiny_mce/' . $tinyeditor->version . '/plugins/tiny_mce_wiris';
        $data['plugin_name'] = 'TinyMCE';
        return $data;
    }

    if ($CFG->version >= 2012120300 && $CFG->version < 2014051200) {
        $data['plugin_path'] = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce';
        $data['plugin_name'] = 'TinyMCE';
        return $data;
    }

    if ($CFG->version >= 2014051200) {
        $editors = array_flip(explode(',', $CFG->texteditors));
        if (count($editors) <= 0) {
            throw new Exception("There are not editors plugins installed", 1);
        }
        if (count($editors) == 1) {
            if (array_key_exists('textarea', $editors)) {
                throw new Exception("There are only a textarea editors plugin installed", 1);
            }
        }

        foreach ($editors as $editor => $value) {
            switch ($editor) {
                case 'atto':
                    $data['plugin_path'] = '../../lib/editor/atto/plugins/wiris';
                    $data['plugin_name'] = 'Atto';
                return $data;
                case 'tinymce':
                    $data['plugin_path'] = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce';
                    $data['plugin_name'] = 'TinyMCE';
                return $data;
            }
        }
    }

    return $data;
}

function check_if_wiris_button_are_in_toolbar($editor = null) {
    if ( is_null($editor) ) {
        throw new Exception("Editor name is expected on check_if_wiris_button_are_in_toolbar", 1);
    }

    switch ($editor) {
        case 'Atto':
            return check_if_wiris_button_are_in_atto_toolbar();
        case 'TinyMCE':
            return check_if_wiris_button_are_in_tinymce_toolbar();
        default:
            throw new Exception($editor . " is not a supported editor on check_if_wiris_button_are_in_toolbar", 1);
    }
}

function check_if_wiris_button_are_in_atto_toolbar() {
    $configvalue = get_config('editor_atto', 'toolbar');
    return (strpos($configvalue, 'wiris') !== false);
}

function check_if_wiris_button_are_in_tinymce_toolbar() {
    $configvalue = get_config('editor_tinymce', 'disabledsubplugins');
    return (strpos($configvalue, 'tiny_mce_wiris') === false);
}
// END HELPERS FUNCTIONS.

// BEGUIN PAGE PROLOGUE.
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
echo $output;
// END PAGE PROLOGUE.

// PREPARE TESTS.
$currenteditordata = get_current_editor_data();

// BEGIN TEST 1.
$output = '';
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
$testname = get_string('test1', 'filter_wiris');
$reporttext = get_string('report1', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/docs/moodle/moodle-2.0';
$actualfolder = realpath(dirname(__FILE__));
$correctfolder = realpath($CFG->dirroot . '/filter/wiris');
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $actualfolder == $correctfolder);
$output .= html_writer::end_tag('tr');
echo $output;
// END TEST 1.

// BEGIN TEST 2.
$output = '';
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
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
echo $output;
// END TEST 2.

// BEGIN TEST 3.
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
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
echo $output;
// END TEST 4.

// BEGIN TEST 5.
$output = '';
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
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
$testname = get_string('test5', 'filter_wiris') . $currenteditordata['plugin_name'];
$reporttext = get_string('report5.1', 'filter_wiris') . $currenteditordata['plugin_name'] . get_string('report5.2', 'filter_wiris');
$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
$wirisplugin = $currenteditordata['plugin_path'] . '/core';
$condition = file_exists($wirisplugin);
if (!$condition) {
    $wirisplugin = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/core';
    $condition = file_exists($wirisplugin);
}
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');
echo $output;
// END TEST 5.

// BEGIN TEST 6.
$output = '';
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
$wirisplugin = filter_wiris_pluginwrapper::get_wiris_plugin();
$testname = get_string('test6', 'filter_wiris') . $currenteditordata['plugin_name'] . ' versions';
if (isset($plugin->release)) {
    $filterversion = $plugin->release;
} else {
    get_string('report6', 'filter_wiris');
}

// Using version.php to check release number.
if (strtolower($currenteditordata['plugin_name']) == 'tinymce') {
    require($currenteditordata['plugin_path'] . '/../version.php');
} else {
    require($currenteditordata['plugin_path'] . '/version.php');
}

if (isset($plugin->release)) {
    $pluginversion = $plugin->release;
} else {
    $pluginversion = "";
}

if ($filterversion == $pluginversion) {
    $reporttext = 'WIRIS plugin filter and WIRIS plugin for '. $currenteditordata['plugin_name'] .' have the same version';
    $condition = true;
} else {
    $reporttext = 'WIRIS plugin filter and WIRIS plugin for '. $currenteditordata['plugin_name'] .' versions don\'t match';
    $condition = false;
}

$solutionlink = 'http://www.wiris.com/plugins/moodle/download';
echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');
echo $output;
// END TEST 6.

// BEGIN TEST 7.
$output = '';
$output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));

$testname = get_string('test7', 'filter_wiris') . $currenteditordata['plugin_name'];
try {
    $condition = check_if_wiris_button_are_in_toolbar($currenteditordata['plugin_name']);
    $reporttext = ($condition) ? get_string('enabled', 'filter_wiris') : get_string('disabled', 'filter_wiris');
} catch (Exception $e) {
    $condition = false;
    $reporttext = $e->getMessage();
}

echo wrs_createtablerow($testname, $reporttext, $solutionlink, $condition);
$output .= html_writer::end_tag('tr');
// END TEST 7.

// START PAGE EPILOGUE.
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
// END PAGE EPILOGUE.
