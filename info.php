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
 * MathType filter test page.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once('../../config.php');
require_once($CFG->dirroot . '/filter/wiris/classes/pluginwrapper.php');
require_once($CFG->dirroot . '/lib/editorlib.php');

// BEGIN HELPERS FUNCTIONS.

function check_if_wiris_button_are_in_toolbar($editor = null) {
    if ( is_null($editor) ) {
        throw new Exception(get_string('editornameexpected', 'filter_wiris'), 1);
    }

    switch ($editor) {
        case 'Atto':
        case 'atto':
            return check_if_wiris_button_are_in_atto_toolbar();
        case 'TinyMCE':
        case 'tinymce':
        case 'tiny':
            return check_if_wiris_button_are_in_tinymce_toolbar($editor);
        default:
            throw new Exception($editor . '&nbsp;' . get_string('notsupportededitor', 'filter_wiris', 1));
    }
}

function check_if_wiris_button_are_in_atto_toolbar() {
    $configvalue = get_config('editor_atto', 'toolbar');
    return (strpos($configvalue, 'wiris') !== false);
}

function check_if_wiris_button_are_in_tinymce_toolbar($editor)
{
    if ($editor === 'tiny') {
        $configvalue = get_config("tiny_wiris/plugin", 'disabled');
        return (empty($configvalue) === true);
    } else {
        $configvalue = get_config('editor_tinymce', 'disabledsubplugins');
        return (strpos($configvalue, 'tiny_mce_wiris') === false);
    }
}

function warning_tiny_incompatibility() {
    global $CFG;

    if ($CFG->version < 2022112807) {
        return;
    }

    if (is_dir($CFG->dirroot.'/lib/editor/tinymce/plugins/tiny_mce_wiris')) {
        \core\notification::warning(get_string('tinymceincompatibility', 'filter_wiris'));
    }
}

function get_test_text($title, $editor = null) {
    if($editor == null) {
        return get_string($title, 'filter_wiris');
    } else {
        return get_string($title, 'filter_wiris', get_string($editor, 'filter_wiris'));
    }
}

function table_open() {
    $output = html_writer::tag('h1', get_string('title', 'filter_wiris'), array('class' => 'wrs_plugin wrs_filter'));

    $output .= html_writer::start_tag('table', array('id' => 'wrs_filter_info_table', 'class' => 'wrs_plugin wrs_filter'));

    $output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('th', 'Test', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('th', 'Test Outcome', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::end_tag('tr');

    echo $output;
}

// Create table row to show test and result
function create_table_row($test, $outcome, $index, $subindex) {
    if(is_null($outcome)) {
        // Dont show the empty infomation
        return;
    }

    $testname = "";

    if($subindex != 0) {
        $testname = "\t" . $index . '.' . $subindex ." - " . $test;
    } else {
        $testname = $index . " - " . $test;
    }

    $outcometext = $outcome;

    // If `$outcome` is a boolean, convert into "Yes" or "No", instead of 1 or 0
    if((is_bool($outcome))) {
        $outcometext = ($outcome)?  get_test_text('yes') :  get_test_text('no');
    }

    $testnamestyle = array('class' => 'wrs_plugin wrs_filter');
    if($subindex == 0) {
        $testnamestyle = array('class' => 'wrs_plugin wrs_filter title');
    }

    $output = html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('td', $testname, $testnamestyle);
    $output .= html_writer::tag('td', $outcometext, array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::end_tag('tr');

    echo $output;
}

function table_close($instalationresult) {
    // Prepare result text (success or failure)
    $statustext = '';
    if ($instalationresult) {
        $statustext .= html_writer::tag('span', get_test_text('success'), array('class' => 'wrs_ok wrs_plugin wrs_filter'));
    } else {
        $statustext .= html_writer::tag('span', get_test_text('failure'), array('class' => 'wrs_error wrs_plugin wrs_filter'));
    }

    // Show Instalation result
    $output = html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('td', get_test_text('integrationinstallation'), array('class' => 'wrs_plugin wrs_filter title'));
    $output .= html_writer::start_tag('td', array('class' => 'wrs_plugin wrs_filter'));
    $output .= $statustext;
    $output .= html_writer::end_tag('td');
    $output .= html_writer::end_tag('tr');

    // Close table
    $output .= html_writer::end_tag('table');

    $output .= html_writer::start_tag('p');
    $output .= html_writer::start_tag('br');

    echo $output;
}

// Function to increment index and subindex based on outcome
// &$current_subindex pass as reference in order to increment
function process_table_row($test, $outcome, $current_index, &$current_subindex) {
    create_table_row($test, $outcome, $current_index, $current_subindex);
    
    if (!is_null($outcome)) {
        $current_subindex++;
    }
}

// Reset subindex and increment index if starting a new group
// &$current_index, &$current_subindex pass as reference in order to increment or reset
function start_new_group(&$current_index, &$current_subindex) {
    // $current_index is not equal to 0 mean the previous test is not skipped
    if($current_subindex != 0) {
        $current_index++;
    }
    $current_subindex = 0;
}


// Functions to perform tests
// @return null|string|bool If it returns a string, it will return the requested text data (e.g., version number).
//                          If it returns a boolean, it will be true (test result is YES) or false (test result is NO).
//                          If it returns null, it means the entire test will be skipped and not displayed.
function get_moodle_version(){
    global $CFG;
    return $CFG->release;
}

function get_exists_mt_filter($plugins){
    return isset($plugins['filter']); 
}

function get_mt_filter_version($existsfilter, $plugins){
    if(!$existsfilter) {
        return null;
    }

    return $plugins['filter']['release'];
}


function get_mt_filter_enabled($existsfilter){
    if(!$existsfilter) {
        return null;
    }

    $filterenabled = filter_is_enabled('filter/wiris');

    return $filterenabled;
}

function get_exists_editor($editorname) {
    global $CFG;

    if ($editorname === 'tinymce' && $CFG->branch > 402 ) {
        // if Moodle version is 4.1 or prior, do not check if tiny (legacy) exists
        return null;
    }

    // get_texteditor returns (boolean)false if not exists or an object if the editor exists
    $editor = get_texteditor($editorname);

    if ($editor === false) {
        return false;
    } else {
        return true;
    }
}

function get_exists_mt_editor($existeditor, $plugins, $editorname) {
    if(!$existeditor) {
        return null;
    }

    return isset($plugins[$editorname]);
}

function get_mt_editor_version($exismtteditor, $plugins, $editorname) {
    if(!$exismtteditor) {
        return null;
    }

    return $plugins[$editorname]['release'];
}

function get_mt_editor_enabled($existsmteditor, $editorname) {
    if(!$existsmteditor){
        return null;
    }

    try {
        $condition = check_if_wiris_button_are_in_toolbar($editorname);
        return ($condition);
    } catch (Exception $e) {
        return null;
    }
}

function get_instalation_check($filterenabled, $filterversion, $enabledpluginsversion) {
    // Precondition - all plugins passed as the argument $enabledpluginsversion have been checked and are enabled.

    // Condition 1 - at least 1 editor installed and enabled
    $editorinstalledenabled = (count($enabledpluginsversion) > 0) ? true : false;

    // Condition 2 - filter enabled - passed as argument

    // Condition 3 - filter version same as one of enabled editor
    $sameversion = false;

    foreach ($enabledpluginsversion as $pluginversion) {
        if ($pluginversion == $filterversion) {
            $sameversion = true;
        }
    }

    $instalationsuccess = ($editorinstalledenabled && $filterenabled && $sameversion);

    return $instalationsuccess;
}

// Page prologue.
$PAGE->set_context(context_system::instance());
$PAGE->set_title(get_string('title', 'filter_wiris'));
$PAGE->set_url('/filter/wiris/info.php', array());

echo $OUTPUT->header();
warning_tiny_incompatibility();

global $CFG;
$plugin = new stdClass();
require($CFG->dirroot . '/filter/wiris/version.php');
// Array of arrays witch contains all necesaty information for testing
$plugins = filter_wiris_pluginwrapper::get_wiris_plugins_information();

// Save version of all enabled plugins for test
$enabledplugins = [];

// Start to check all tests
$moodleversion = get_moodle_version();
$existsfilter = get_exists_mt_filter($plugins);
$filterversion = get_mt_filter_version($existsfilter, $plugins);
$filterenabled = get_mt_filter_enabled($existsfilter);

$exisatto = get_exists_editor('atto');
$existsmtatto = get_exists_mt_editor($exisatto, $plugins, 'atto');
$mtattoversion = get_mt_editor_version($existsmtatto, $plugins, 'atto');
$mtattoenabled = get_mt_editor_enabled($existsmtatto, 'atto');
$enabledplugins['atto'] = ($mtattoenabled) ? $mtattoversion : null;

$existstinylegacy = get_exists_editor('tinymce');
$existsmttinylegacy = get_exists_mt_editor($existstinylegacy,  $plugins, 'tinymce');
$mttinylegacyversion = get_mt_editor_version($existsmttinylegacy,  $plugins, 'tinymce');
$mttinylegacyenabled = get_mt_editor_enabled($existsmttinylegacy, 'tinymce');
$enabledplugins['tinymce'] = ($mttinylegacyenabled) ? $mttinylegacyversion : null;

$existstinycurrent = get_exists_editor('tiny');
$existsmttinycurrent = get_exists_mt_editor($existstinycurrent, $plugins, 'tiny');
$mttinycurrentversion = get_mt_editor_version($existsmttinycurrent, $plugins, 'tiny');
$mttinycurrentenabled = get_mt_editor_enabled($existsmttinycurrent, 'tiny');
$enabledplugins['tiny'] = ($mttinycurrentenabled) ? $mttinycurrentversion : null;

$instalationresult = get_instalation_check($filterenabled,$filterversion, $enabledplugins);

// Construct table
table_open();

$current_index = 1;
$current_subindex = 0;

// Show all tests
process_table_row(get_test_text('moodleversion'), $moodleversion, $current_index, $current_subindex);

start_new_group($current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'themathtypefilter'), $existsfilter, $current_index, $current_subindex);
process_table_row(get_test_text('pluginversion', 'mathtypefilter'), $filterversion, $current_index, $current_subindex);
process_table_row(get_test_text('isenabled', 'themathtypefilter'), $filterenabled, $current_index, $current_subindex);

start_new_group($current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'atto'), $exisatto, $current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'mtatto'), $existsmtatto, $current_index, $current_subindex);
process_table_row(get_test_text('pluginversion', 'mtatto'), $mtattoversion, $current_index, $current_subindex);
process_table_row(get_test_text('isenabled', 'mtatto'), $mtattoenabled, $current_index, $current_subindex);

start_new_group($current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'tinymcelegacy'), $existstinylegacy, $current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'mttinymcelegacy'), $existsmttinylegacy, $current_index, $current_subindex);
process_table_row(get_test_text('pluginversion', 'mttinymcelegacy'), $mttinylegacyversion, $current_index, $current_subindex);
process_table_row(get_test_text('isenabled', 'mttinymcelegacy'), $mttinylegacyenabled, $current_index, $current_subindex);

start_new_group($current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'tinymcecurrent'), $existstinycurrent, $current_index, $current_subindex);
process_table_row(get_test_text('existsinmoodle', 'mttinymcecurrent'), $existsmttinycurrent, $current_index, $current_subindex);
process_table_row(get_test_text('pluginversion', 'mttinymcecurrent'), $mttinycurrentversion, $current_index, $current_subindex);
process_table_row(get_test_text('isenabled', 'mttinymcecurrent'), $mttinycurrentenabled, $current_index, $current_subindex);

table_close($instalationresult);


// Footer information
$solutionlink = 'https://docs.wiris.com/mathtype/en/mathtype-for-lms/mathtype-for-moodle.html#install-mathtype-for-moodle?utm_source=moodle&utm_medium=referral';

$output = '';
echo get_test_text('clickwirisplugincorrectlyinstalled') . "<br/>";
$link = 'integration/test.php';
$input = '<input type="button" value="' . get_test_text('button1');
$input .= '" onClick="javascript:window.open(\'' . $link . '\');" /><br/>';
echo $input;

$wqversion = get_config('qtype_wq', 'version');
if (!empty($wqversion)) {
    echo get_string('clickwirisquizzescorrectlyinstalled', 'filter_wiris') . "<br/>";
    $link = '../../question/type/wq/info.php';
    $input = '<input type="button" value="' . get_string('button2', 'filter_wiris');
    $input .= '" onClick="javascript:window.open(\'' . $link . '\');" /><br/>';
    echo $input;
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
