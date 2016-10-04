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

defined('MOODLE_INTERNAL') || die();

class WIRISpluginWrapper {
    private $isinit = false;
    private $installed = false;
    private $moodleconfig;
    private $instance;

    public function __construct() {
        $this->init();
    }

    public function begin() {
        com_wiris_system_CallWrapper::getInstance()->start();
    }

    public function end() {
        com_wiris_system_CallWrapper::getInstance()->stop();
    }

    public function is_installed() {
        $editorplugin = self::get_wiris_plugin();
        return !empty($editorplugin);
    }

    private function init() {
        if (!$this->isinit) {
            $this->isinit = true;

            global $CFG;
            // Init haxe environment.
            if (!class_exists('com_wiris_system_CallWrapper')) {
                require_once('integration/lib/com/wiris/system/CallWrapper.class.php');
            }
            com_wiris_system_CallWrapper::getInstance()->init($CFG->dirroot . '/filter/wiris/integration');

            // Start haxe environment.
            $this->begin();
            // Create PluginBuilder with Moodle specific configuration.
            require_once('MoodleConfigurationUpdater.php');
            $this->moodleConfig = new com_wiris_plugin_configuration_MoodleConfigurationUpdater();

            $this->instance = com_wiris_plugin_api_PluginBuilder::getInstance();
            $this->instance->addConfigurationUpdater($this->moodleConfig);
            $this->instance->addConfigurationUpdater(new com_wiris_plugin_web_PhpConfigurationUpdater());
            // Stop haxe environment.
            $this->end();
        }
    }

    public function get_instance() {
        $this->init();
        return $this->instance;
    }

    public function was_cas_enabled() {
        // Force configuration load.
        $this->get_instance()->getConfiguration()->getProperty("wiriscasenabled", null);
        return $this->moodleConfig->wascasenabled;
    }

    public function was_editor_enabled() {
        // Force configuration load.
        $this->get_instance()->getConfiguration()->getProperty("wiriseditorenabled", null);
        return $this->moodleConfig->waseditorenabled;
    }

    public function was_chem_editor_enabled() {
        // Force configuration load.
        $this->get_instance()->getConfiguration()->getProperty("wirischemeditorenabled", null);
        return $this->moodleConfig->waschemeditorenabled;
    }

    public function clear_folder($folder) {
        if (!is_null($folder)) {
            $dirstructure = (glob(rtrim($folder, "/").'/*'));
            if (is_array($dirstructure)) {
                foreach ($dirstructure as $direlement) {
                    if (is_file($direlement)) {
                            unlink($direlement);
                    } else if (is_dir($direlement)) {
                        $this->clear_folder($direlement);
                    }
                }
            }
            rmdir($folder);
        }
    }

    /**
     * Returns WIRIS plugin data from the plugin installed in the default Moodle
     * HTML editor (or the first available), or false if none found.
     *
     * Needs the Moodle to be started with $CFG variable defined.
     *
     * @return object
     *   An object with the following properties:
     *     - url: base url of the WIRIS plugin.
     *     - path: base path of the WIRIS plugin.
     *     - version: version of the WIRIS plugin.
     * */
    public static function get_wiris_plugin() {
        global $CFG;
        // Loop over atto, tinymce in the order defined by the configuration.
        $editors = explode(',', $CFG->texteditors);
        if (!in_array('atto', $editors)) {
            $editors[] = 'atto';
        }
        if (!in_array('tinymce', $editors)) {
            $editors[] = 'tinymce';
        }
        foreach ($editors as $editor) {
            if ($editor == 'atto') {
                $relativepath = '/lib/editor/atto/plugins/wiris';
                if (file_exists($CFG->dirroot . $relativepath . '/version.php')) {
                    $plugin = new stdClass();
                    $plugin->url = $CFG->wwwroot . $relativepath;
                    $plugin->path = $CFG->dirroot . $relativepath;
                    $plugin->version = get_config('atto_atto_wiris', 'version');
                    return $plugin;
                }
            } else if ($editor == 'tinymce') {
                require_once($CFG->dirroot . '/lib/editor/tinymce/lib.php');
                $tiny = new tinymce_texteditor();
                $tinyversion = $tiny->version;
                if ($CFG->version >= 2012120300) { // Location for Moodle 2.4 onwards .
                    $relativepath = '/lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce';
                } else { // Location for Moodle < 2.4 .
                    $relativepath = '/lib/editor/tinymce/tiny_mce/' . $tinyversion . '/plugins/tiny_mce_wiris';
                }
                if (!file_exists($CFG->dirroot . $relativepath . '/core')) {
                    // WIRIS plugin  >= 3.50 not installed.
                    continue;
                }
                $plugin = new stdClass();
                $plugin->url = $CFG->wwwroot . $relativepath;
                $plugin->path = $CFG->dirroot . $relativepath;
                $plugin->version = get_config('tinymce_tiny_mce_wiris', 'version');
                return $plugin;
            }
        }
        return false;
    }

    /**
     * Since version 2016030200 configuration.ini file is
     * has been moved from editor plugin folder to filte folder.
     * This method detects if a configuration.ini file is on the old location.
     * @return [type] [description]
     */
    public static function get_old_configuration() {
        global $CFG;
        if (file_exists($CFG->dirroot . '/filter/wiris/configuration.ini')) {
            return false;
        }
        if ($plugin = self::get_wiris_plugin()) {
            if (file_exists($plugin->path . '/configuration.ini')) {
                return $plugin->path . '/configuration.ini';
            } else {
                return false;
            }
        }
        return false;
    }
}
