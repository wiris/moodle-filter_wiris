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
 * MathType filter settings.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
    global $CFG;

    // 01. Editor settings.
    $settings->add(new admin_setting_heading('filter_wiris/editorsettings',
                                                        get_string('editorsettings', 'filter_wiris'),
                                                        get_string('editorsettings_text', 'filter_wiris')));

    // Math editor
    $settings->add(new admin_setting_configcheckbox('filter_wiris/editor_enable',
                                                        get_string('wirismatheditor', 'filter_wiris'),
                                                        get_string('wirismatheditor_help', 'filter_wiris'),
                                                        '1'));

    // Enable Chemistry editor.
    $settings->add(new admin_setting_configcheckbox('filter_wiris/chem_editor_enable',
                                                        get_string('wirischemeditor', 'filter_wiris'),
                                                        get_string('wirischemeditor_help', 'filter_wiris'),
                                                        '1'));

    // Allow MathType be enabled despite of the filter is disabled on a course.
    $settings->add(new admin_setting_configcheckbox('filter_wiris/allow_editorplugin_active_course',
                                                        get_string('alloweditorpluginactive', 'filter_wiris'),
                                                        get_string('alloweditorpluginactive_help', 'filter_wiris'), '0'));

    /* NO-JAVASCRIPT--changes. Remove ('php' => 'PHP') option */
    $settings->add(new admin_setting_configselect('filter_wiris/rendertype',
                                                            get_string('rendertype', 'filter_wiris'),
                                                            get_string('rendertype_help', 'filter_wiris'),
                                                            'default',
                                                            array('client' => 'Client')));

    // 02. Connection settings (Configuration.ini wrapper).
    $settings->add(new admin_setting_heading('filter_wiris/connectionsettings',
                                                        get_string('connectionsettings', 'filter_wiris'),
                                                        get_string('connectionsettings_text', 'filter_wiris')));

    $settings->add(new admin_setting_configtext('filter_wiris/imageservicehost',
                                                        get_string('imageservicehost', 'filter_wiris'),
                                                        get_string('imageservicehost_help', 'filter_wiris'),
                                                        'www.wiris.net',
                                                        PARAM_URL));

    $settings->add(new admin_setting_configtext('filter_wiris/imageservicepath',
                                                        get_string('imageservicepath', 'filter_wiris'),
                                                        get_string('imageservicepath_help', 'filter_wiris'),
                                                        '/demo/editor/render',
                                                        PARAM_LOCALURL));

    $settings->add(new admin_setting_configselect('filter_wiris/imageserviceprotocol',
                                                        get_string('imageserviceprotocol', 'filter_wiris'),
                                                        get_string('imageserviceprotocol_help', 'filter_wiris'),
                                                        'https',
                                                        array('http' => 'http', 'https' => 'https')));

    // 03. Image settings  (Configuration.ini wrapper).

    $settings->add(new admin_setting_heading('filter_wiris/imagesettings',
                                                        get_string('imagesettings', 'filter_wiris'),
                                                        get_string('imagesettings_text', 'filter_wiris')));


    $settings->add(new admin_setting_configselect('filter_wiris/imageformat',
                                                        get_string('imageformat', 'filter_wiris'),
                                                        get_string('imageformat_help', 'filter_wiris'),
                                                        'svg',
                                                        array('svg' => 'svg', 'png' => 'png')));

    $settings->add(new admin_setting_configcheckbox('filter_wiris/pluginperformance',
                                                        get_string('pluginperformance', 'filter_wiris'),
                                                        get_string('pluginperformance_help', 'filter_wiris'), '1'));

    // 04. Window Settings.

    $settings->add(new admin_setting_heading('filter_wiris/windowsettings',
                                                        get_string('windowsettings', 'filter_wiris'),
                                                        get_string('windowsettings_text', 'filter_wiris')));


    $settings->add(new admin_setting_configcheckbox('filter_wiris/editormodalwindowfullscreen',
                                                        get_string('editormodalwindowfullscreen', 'filter_wiris'),
                                                        get_string('editormodalwindowfullscreen_help', 'filter_wiris'), '0'));

    // Access Provider: If enabled MathType services can not be accessed from non logged users.

    // 05. Security Settings.
    $settings->add(new admin_setting_heading('securitysettings',
                                                        get_string('securitysettings', 'filter_wiris'),
                                                        get_string('securitysettings_text', 'filter_wiris')));

    $settings->add(new admin_setting_configcheckbox('filter_wiris/access_provider_enabled',
                                                        get_string('accessproviderenabled', 'filter_wiris'),
                                                        get_string('accessproviderenabled_help', 'filter_wiris'), '0'));


    $wirisquizzes = dirname(__FILE__) . '/../../question/type/wq/';
    $quizzesinstalled = file_exists($wirisquizzes);
    if ($quizzesinstalled) {
        $url = $CFG->wwwroot . '/admin/settings.php?section=qtypesettingwq';
        $url = '<a href="' . $url . '">Wiris Quizzes settings</a>';
        $settings->add(new admin_setting_heading('filter_wirisquizzesheading', $url, ''));
    }

}
