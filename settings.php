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
 * WIRIS Filter settings.
 *
 * @package    filter
 * @subpackage wiris
 * @copyright  Maths for More S.L. <info@wiris.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
    global $CFG;
    global $wirisconfigurationclass;

    require_once("$CFG->dirroot/filter/wiris/lib.php");
    // Automatic class loading not avaliable for Moodle 2.4 and 2.5.
    wrs_loadclasses();
    $wirisplugin = new filter_wiris_pluginwrapper();

    $editorplugininstalled = filter_wiris_pluginwrapper::get_wiris_plugin();
    if (!empty($editorplugininstalled)) {
        // Editor checkbox.
        $output = '';
        $wirisplugin->begin();
        $waseditorenabled = $wirisplugin->was_editor_enabled();
        $waschemeditorenabled = $wirisplugin->was_chem_editor_enabled();
        $conf = $wirisplugin->get_instance()->getConfiguration();
        $wirisplugin->end();

        // Backwards compatibility: some old installations could have the configuration
        // file into the editor plugin inestad of filter. Show a notification to advise
        // users to copy the file from the older location to the new one.
        if ($oldconfile = filter_wiris_pluginwrapper::get_old_configuration()) {
            $warningoutput = get_string('oldconfiguration', 'filter_wiris', $oldconfile);

            \core\notification::warning($warningoutput);
            $settings->add(new admin_setting_heading('filter_wiris_old_configuration', '', $warningoutput));
        }

        if ($waseditorenabled) {
            $settings->add(new admin_setting_configcheckbox('filter_wiris_editor_enable',
                                                            get_string('wirismatheditor', 'filter_wiris'), '', '1'));
        }

        if ($waschemeditorenabled) {
            $settings->add(new admin_setting_configcheckbox('filter_wiris_chem_editor_enable',
                                                            get_string('wirischemeditor', 'filter_wiris'), '', '0'));
        }

        // Allow WIRIS Editor plugin be enabled despite of the filter is disabled on a course.
        $settings->add(new admin_setting_configcheckbox('filter_wiris/allow_editorplugin_active_course',
                                                            get_string('alloweditorpluginactive', 'filter_wiris'),
                                                            get_string('alloweditorpluginactive_help', 'filter_wiris'), '0'));

    } else {
        if (!get_config('filter_wiris', 'filter_standalone')) {

            // Moodle notification API since Moodel 3.1.
            if ($CFG->version >= 2016052300) {
                // Due to Moodle doesn't support circular dependencies between plugins, if any editor plugin is installed
                // a warning message is shown as a notification.
                $message = '';
                $tinyurl = 'https://moodle.org/plugins/tinymce_tiny_mce_wiris';
                $attourl = 'https://moodle.org/plugins/atto_wiris';
                $linkattributes = array('target' => '_blank');
                $message .= html_writer::link($attourl, get_string('wirispluginforatto', 'filter_wiris'), $attributes);
                $message .= get_string('or', 'filter_wiris');
                $message .= html_writer::link($tinyurl, get_string('wirispluginfortinymce', 'filter_wiris'), $attributes);
                $message .= get_string('arenotinstalled', 'filter_wiris');
                $message .= get_string('furtherinformation', 'filter_wiris');

                $imageurl = "https://www.wiris.com/system/files/attachments/1689/WIRIS_manual_icon_17_17.png";
                $image = html_writer::empty_tag('img', array('src' => $imageurl, 'style' => 'vertical-align:-3px;'));
                $troubleshootingurl = 'http://www.wiris.com/plugins/docs/moodle/troubleshooting';
                $imagelink = html_writer::link($troubleshootingurl, $image, $linkattributes);

                $message .= $imagelink;

                // Moodle notification API: https://docs.moodle.org/dev/Notifications.
                \core\notification::warning($message);
            }

        }
        $settings->add(new admin_setting_configcheckbox('filter_wiris/filter_standalone',
                                                        get_string('filter_standalone',
                                                        'filter_wiris'),
                                                        get_string('filter_standalonedesc',
                                                        'filter_wiris'), false, true, false));
    }

    $wirisquizzes = dirname(__FILE__) . '/../../question/type/wq/';
    $quizzesinstalled = file_exists($wirisquizzes);

    if ($quizzesinstalled) {
        $url = $CFG->wwwroot . '/admin/settings.php?section=qtypesettingwq';
        $url = '<a href="' . $url . '">WIRIS quizzes settings</a>';
        $settings->add(new admin_setting_heading('filter_wirisquizzesheading', $url, ''));
    }

}
