<?php
//
//  Copyright (c) 2011, Maths for More S.L. http://www.wiris.com
//  This file is part of Moodle WIRIS Plugin.
//
//  Moodle WIRIS Plugin is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  Moodle WIRIS Plugin is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with Moodle WIRIS Plugin. If not, see <http://www.gnu.org/licenses/>.
//

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
    global $CFG;
    global $wirisconfigurationclass;

    require_once('wirispluginwrapper.php');

    $wirisplugin = new WIRISpluginWrapper();

    $editor_plugin_installed = WIRISpluginWrapper::get_wiris_plugin();
    if (!empty($editor_plugin_installed)) {
        //Editor and CAS checkbox
        $output = '';
        $wirisplugin->begin();
        $was_editor_enabled = $wirisplugin->was_editor_enabled();
        $was_cas_enabled = $wirisplugin->was_cas_enabled();
        $was_chem_editor_enabled = $wirisplugin->was_chem_editor_enabled();
        $conf = $wirisplugin->get_instance()->getConfiguration();
        $cache = $conf->getProperty("wiriscachedirectory",null);
        $formula = $conf->getProperty("wirisformuladirectory",null);
        $wirisplugin->end();

        if ($oldconfile = WIRISpluginWrapper::get_old_configuration()) {
            $warning_output =
                '<center><br />
                <div style="border-style: solid; border-color: red;">'.
                'An old configuration.ini file has been detected on ' . $oldconfile .
                '<br> Please move it to ' .  $CFG->wwwroot . '/filter/wiris/configuration.ini.' . 'For further information go to: xxx' .
                '</div></center>';
            $settings->add(new admin_setting_heading('filter_wiris_old_configuration', '', $warning_output));
        }

        //Text to be shown when editor and cas are disabled in MoodleConfigurationUpdater
        if (!$was_editor_enabled) {
            $output = '<div class="form-item clearfix">'.
                '<div class="form-label" style="color:#aaaaaa;" >WIRIS editor<span class="form-shortname" style="color:#aaaaaa;">'.
                'filter_wiris_editor_enable</span></div><div class="form-setting"><div class="form-checkbox defaultsnext">'.
                '<input type="checkbox" disabled="disabled"></div></div><div class="form-description"></div></div>';
        }

        $output = '';
        if ($was_editor_enabled) {
            $settings->add(new admin_setting_configcheckbox('filter_wiris_editor_enable', get_string('wirismatheditor', 'filter_wiris'), '', '1'));
        } else {
            if (isset($CFG->filter_wiris_editor_enable) && $CFG->filter_wiris_editor_enable) {
                set_config('filter_wiris_editor_enable', 0, 'config');
                $CFG->filter_wiris_editor_enable = false;
            }
        }

        if ($was_chem_editor_enabled) {
            $settings->add(new admin_setting_configcheckbox('filter_wiris_chem_editor_enable', get_string('wirischemeditor', 'filter_wiris'), '', '0'));
        } else {
            if (isset($CFG->filter_wiris_chem_editor_enable) && $CFG->filter_wiris_chem_editor_enable) {
                set_config('filter_wiris_chem_editor_enable', 0, 'config');
                $CFG->filter_wiris_chem_editor_enable = false;
            }
        }

        if ($was_cas_enabled) {
            $settings->add(new admin_setting_configcheckbox('filter_wiris_cas_enable', get_string('wiriscas', 'filter_wiris'), '', '0'));
        } else {
            if (isset($CFG->filter_wiris_cas_enable) && $CFG->filter_wiris_cas_enable) {
                set_config('filter_wiris_cas_enable', 0, 'config');
                $CFG->filter_wiris_cas_enable = false;
            }
        }

    } else {
        if (!get_config('filter_wiris', 'filter_standalone')) {
            $output =
                '<center><br />
                <div style="border-style: solid; border-color: red;">A plugin dependency is broken:  WIRIS filter requires that either <a target="_blank" href="https://moodle.org/plugins/atto_wiris">WIRIS plugin for Atto</a> or <a target="_blank" href="https://moodle.org/plugins/tinymce_tiny_mce_wiris">WIRIS plugin for TinyMCE</a> is installed. For further information see our documentation page <a target="_blank" href="http://www.wiris.com/plugins/docs/moodle/troubleshooting">'.
                '<img style="vertical-align:-3px;" alt="" src="https://www.wiris.com/system/files/attachments/1689/WIRIS_manual_icon_17_17.png" />'.
                '</a>'.
                '</div></center>';
            $settings->add(new admin_setting_heading('filter_wiris_disabled', '', $output));
            if (strrpos($_SERVER["SCRIPT_FILENAME"], 'upgradesettings.php')) {
               echo $output;
            }
        }
        $settings->add(new admin_setting_configcheckbox('filter_wiris/filter_standalone', get_string('filter_standalone', 'filter_wiris'), get_string('filter_standalonedesc', 'filter_wiris'), false, true, false));
    }

    // Clearing cache.
    if (get_config('filter_wiris', 'clear_cache')) {
        if (isset($cache) && !is_null($cache)) {
            $wirisplugin->clear_folder($cache);
        }
        if (isset($formula) && !is_null($formula)) {
            $wirisplugin->clear_folder($formula);
        }
        reset_text_filters_cache();

        // Disabling the cache clearing for the next request.
        set_config('clear_cache', false, 'filter_wiris');
        $CFG->filter_wiris_clear_cache = false;
    }

    if ($CFG->version>=2012120300) {
        $settings->add(new admin_setting_configcheckbox('filter_wiris/clear_cache', get_string('clearcache', 'filter_wiris'), get_string('clearcachedesc', 'filter_wiris'), false, true, false));
    }


    //$output = '<a href="../filter/wiris/info.php">Visit plugin test page.</a>';
    //$settings->add(new admin_setting_heading('filter_wiris_link_test', '', $output));

    $wiris_quizzes = dirname(__FILE__) . '/../../question/type/wq/';
    $quizzes_installed = file_exists($wiris_quizzes);

    if ($quizzes_installed){
        $url = $CFG->wwwroot . '/admin/settings.php?section=qtypesettingwq';
        $url = '<a href="' . $url . '">WIRIS quizzes settings</a>';
        $settings->add(new admin_setting_heading('filter_wirisquizzesheading', $url, ''));
    }

}