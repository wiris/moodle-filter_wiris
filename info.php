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
require_once($CFG->branch < 402 ? $CFG->dirroot . '/lib/editor/tinymce/lib.php' : $CFG->dirroot . '/lib/editor/tiny/lib.php');
require_once($CFG->dirroot . '/filter/wiris/classes/pluginwrapper.php');

// BEGIN HELPERS FUNCTIONS.
function wrs_assert($condition, $reporttext, $solutionlink) {
    if ($condition) {
        return $reporttext;
    } else {
        $result = html_writer::tag('span', $reporttext);
        $image = html_writer::empty_tag('img', array('src' => 'img/help.gif', 'class' => 'wrs_plugin wrs_filter'));
        $result .= html_writer::link($solutionlink, $image, array('target' => '_blank'));
        return $result;
    }
}

function wrs_getstatus($condition) {
    $statustext = '';
    if ($condition) {
        $text = get_string('ok', 'filter_wiris');
        $statustext .= html_writer::tag('span', $text, array('class' => 'wrs_ok wrs_plugin wrs_filter'));
        return $statustext;
    } else {
        $text = get_string('error', 'filter_wiris');
        $statustext .= html_writer::tag('span', $text, array('class' => 'wrs_error wrs_plugin wrs_filter'));
        return $statustext;
    }
}

function wrs_createtablerow($testname, $reporttext, $solutionlink, $condition) {
    $output = html_writer::tag('td', $testname, array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('td', wrs_assert($condition, $reporttext, $solutionlink),
                                array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('td',  wrs_getstatus($condition), array('class' => 'wrs_plugin wrs_filter'));
    return $output;
}

function get_current_editor_data($branch, $version, $texteditors) {
    $data = array();

    $editors = array_flip(explode(',', $texteditors));
    $editorcount = count($editors);

    if ($editorcount === 0) {
        throw new Exception(get_string('noteditorspluginsinstalled', 'filter_wiris'), 1);
    } else if ($editorcount === 1 && array_key_exists('textarea', $editors)) {
        throw new Exception(get_string('onlytextareaeditorinstalled', 'filter_wiris'), 1);
    }

    if ($branch < 402) {
        $tinyeditor = new tinymce_texteditor();

        if ($version < 2012120300) {
            $data['plugin_path'] = '../../lib/editor/tinymce/tiny_mce/' . $tinyeditor->version . '/plugins/tiny_mce_wiris';
            $data['plugin_name'] = get_string('tinymce', 'filter_wiris');
        } else if ($version >= 2012120300 && $version < 2014051200) {
            $data['plugin_path'] = '../../lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce';
            $data['plugin_name'] = get_string('tinymce', 'filter_wiris');
        } else if ($version >= 2014051200 && isset($editors['atto'])) {
            $data['plugin_path'] = '../../lib/editor/atto/plugins/wiris';
            $data['plugin_name'] = get_string('atto', 'filter_wiris');
        } else if ($version >= 2014051200 && isset($editors['tinymce'])) {
            $data['plugin_path'] = '../../lib/editor/tinymce/plugins/wiris';
            $data['plugin_name'] = get_string('tinymce', 'filter_wiris');
        }
    } else {
        if (isset($editors['atto'])) {
            $data['plugin_path'] = '../../lib/editor/atto/plugins/wiris';
            $data['plugin_name'] = get_string('atto', 'filter_wiris');
        } else if (isset($editors['tinymce'])) {
            $data['plugin_path'] = '../../lib/editor/tinymce/plugins/wiris';
            $data['plugin_name'] = get_string('tinymce', 'filter_wiris');
        }
    }

    return $data;
}

function check_if_wiris_button_are_in_toolbar($editor = null) {
    if ( is_null($editor) ) {
        throw new Exception(get_string('editornameexpected', 'filter_wiris'), 1);
    }

    switch ($editor) {
        case 'Atto':
            return check_if_wiris_button_are_in_atto_toolbar();
        case 'TinyMCE':
            return check_if_wiris_button_are_in_tinymce_toolbar();
        default:
            throw new Exception($editor . '&nbsp;' . get_string('notsupportededitor', 'filter_wiris', 1));
    }
}

function check_if_wiris_button_are_in_atto_toolbar() {
    $configvalue = get_config('editor_atto', 'toolbar');
    return (strpos($configvalue, 'wiris') !== false);
}

function check_if_wiris_button_are_in_tinymce_toolbar() {
    global $CFG;

    if ($CFG->branch < 402) {
        $configvalue = get_config('editor_tinymce', 'disabledsubplugins');
        return (strpos($configvalue, 'tiny_mce_wiris') === false);
    } else {
        $configvalue = get_config("tiny_wiris/plugin", 'disabled');
        return (empty($configvalue) === true);
    }
}

// Create info table.
function create_info_header() {
    $output = html_writer::tag('h1', get_string('title', 'filter_wiris'), array('class' => 'wrs_plugin wrs_filter'));

    $output .= html_writer::start_tag('table', array('id' => 'wrs_filter_info_table', 'class' => 'wrs_plugin wrs_filter'));

    $output .= html_writer::start_tag('tr', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('th', 'Test', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('th', 'Report', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::tag('th', 'Status', array('class' => 'wrs_plugin wrs_filter'));
    $output .= html_writer::end_tag('tr');

    echo $output;
}

function create_filter_files_row($solutionlink = null) {
    $testname = get_string('lookingforfilterfiles', 'filter_wiris');
    $reporttext = get_string('wirispluginfiltermustbeinstalled', 'filter_wiris');
    $filterfiles = array('filter.php', 'version.php');
    $exist = array_reduce($filterfiles, function ($carry, $value) {
        return $carry && file_exists($value);
    }, true);

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $exist));
}

function create_filter_version_row($solutionlink = null) {
    global $CFG;

    $plugin = new stdClass();
    require($CFG->dirroot . '/filter/wiris/version.php');
    $testname = get_string('lookingforwirisfilterversion', 'filter_wiris');

    if (isset($plugin->release)) {
        $reporttext = $plugin->release;
        $condition = true;
    } else if ($plugin->maturity == MATURITY_BETA) {
         $reporttext = $plugin->version;
        $condition = true;
    } else {
        $reporttext = get_string('impossibletofindwirisfilterversion', 'filter_wiris');
        $condition = false;
    }

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));
}

function create_filter_enabled_row($solutionlink = null) {
    global $CFG;

    $testname = get_string('pluginname', 'filter_wiris');
    $filterenabled = filter_is_enabled('filter/wiris');
    if ($filterenabled) {
        $reporttext = get_string('enabled', 'filter_wiris');
    } else {
        $reporttext = get_string('disabled', 'filter_wiris');
    }

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $filterenabled), array('class' => 'wrs_plugin wrs_filter'));
}

function create_atto_installed_row($currenteditordata = null, $solutionlink = null) {
    $testname = get_string('lookingforwirisplugin', 'filter_wiris') . '&nbsp;'  . $currenteditordata['plugin_name'];
    $reporttext = get_string('wirispluginfor', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'] . '&nbsp;' .
                    get_string('mustbeinstalled', 'filter_wiris');
    $wirisplugin = $currenteditordata['plugin_path'];
    $condition = file_exists($wirisplugin);

    echo html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));

    return $condition;
}

function create_atto_compatibility_row($currenteditordata = null, $solutionlink = null) {
    global $CFG;

    $plugin = new stdClass();
    require($CFG->dirroot . '/filter/wiris/version.php');
    $wirisplugin = filter_wiris_pluginwrapper::get_wiris_plugin();
    $testname = get_string('wirispluginfilterfor', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'] . ' versions';

    // Get filter version.
    $filterversion = isset($plugin->version) ? $plugin->version : '';

    // Using version.php to check release number.
    if (strtolower($currenteditordata['plugin_name']) == 'tinymce' || strtolower($currenteditordata['plugin_name']) == 'tiny') {
        require($currenteditordata['plugin_path'] . '/../version.php');
    } else {
        require($currenteditordata['plugin_path'] . '/version.php');
    }

    if (isset($plugin->version)) {
        $pluginversion = $plugin->version;
    } else {
        $pluginversion = "";
    }

    if ($filterversion == $pluginversion) {
        $reporttext = get_string('wirispluginfilterfor', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'] . '&nbsp;' .
                        get_string('havesameversion', 'filter_wiris');
        $condition = true;
    } else {
        $reporttext = get_string('wirispluginfilterfor', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'] . '&nbsp;' .
                        get_string('versionsdontmatch', 'filter_wiris');
        $reporttext .= "<br>" . get_string('wirisfilterversion', 'filter_wiris') . '&nbsp;' . $filterversion;
        $reporttext .= "<br>" . get_string('wirispluginfor', 'filter_wiris') . '&nbsp;' .  $currenteditordata['plugin_name'] .
                        '&nbsp;' . get_string('version', 'filter_wiris'). ' = ' . $pluginversion;
        $condition = false;
    }

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));
}

function create_atto_enabled_row($currenteditordata = null, $solutionlink = null) {
    $testname = get_string('lookingforwirispluginenabled', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'];
    try {
        $condition = check_if_wiris_button_are_in_toolbar($currenteditordata['plugin_name']);
        $reporttext = ($condition) ? get_string('enabled', 'filter_wiris') : get_string('disabled', 'filter_wiris');
    } catch (Exception $e) {
        $condition = false;
        $reporttext = $e->getMessage();
    }

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));
}

function create_tiny_installed_row($solutionlink = null) {
    global $CFG;

    $testname = get_string('lookingforwirisplugin', 'filter_wiris') . '&nbsp; TinyMCE';
    $reporttext = get_string('wirispluginfor', 'filter_wiris') . '&nbsp; TinyMCE &nbsp;' .
                    get_string('mustbeinstalled', 'filter_wiris');
    $wirisplugin = '';
    $condition = file_exists($wirisplugin);

    if (!$condition) {
        if ($CFG->branch < 402) {
            $wirisplugin = '../../lib/editor/tinymce/plugins/tiny_mce_wiris';
        } else {
            $wirisplugin = '../../lib/editor/tiny/plugins/wiris';
        }
        $condition = file_exists($wirisplugin);
    }

    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));
}

function create_table_close() {
    $output = '';
    $output .= html_writer::end_tag('table');

    $output .= html_writer::start_tag('p');
    $output .= html_writer::start_tag('br');
    return $output;
}

function warning_tiny_incompatibility() {
    global $CFG;

    if ($CFG->version < 20230424) {
        return;
    }

    if (is_dir($CFG->dirroot.'/lib/editor/tinymce/plugins/tiny_mce_wiris')) {
        \core\notification::warning(get_string('tinymceincompatibility', 'filter_wiris'));
    }
}

// Page prologue.
$PAGE->set_context(context_system::instance());
$PAGE->set_title(get_string('title', 'filter_wiris'));
$PAGE->set_url('/filter/wiris/info.php', array());
echo $OUTPUT->header();

// Get editor data for tests.
$currenteditordata = get_current_editor_data($CFG->branch, $CFG->version, $CFG->texteditors);

$solutionlink = 'https://docs.wiris.com/mathtype/en/mathtype-for-lms/mathtype-for-moodle.html#install-mathtype-for-moodle?utm_source=moodle&utm_medium=referral';

warning_tiny_incompatibility();

// Create info table.
create_info_header();

// Filter files tests.
echo create_filter_files_row($solutionlink);

// Filter version existance test.
echo create_filter_version_row($solutionlink);

// Filter enabled.
echo create_filter_enabled_row($solutionlink);

// Atto is installed.
if (create_atto_installed_row($currenteditordata, $solutionlink)) {
    // Version compatibility test.
    echo create_atto_compatibility_row($currenteditordata, $solutionlink);

    // MathType enabled test.
    echo create_atto_enabled_row($currenteditordata, $solutionlink);
}

// Tiny is installed.
echo create_tiny_installed_row($solutionlink);

// Close table.
echo create_table_close();

$output = '';
echo get_string('clickwirisplugincorrectlyinstalled', 'filter_wiris') . "<br/>";
$link = 'integration/test.php';
$input = '<input type="button" value="' . get_string('button1', 'filter_wiris');
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
