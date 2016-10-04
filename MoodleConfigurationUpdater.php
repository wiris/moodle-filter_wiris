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

defined('MOODLE_INTERNAL') || die();

class com_wiris_plugin_configuration_MoodleConfigurationUpdater implements com_wiris_plugin_configuration_ConfigurationUpdater {

    public $waseditorenabled;
    public $wascasenabled;
    public $waschemeditorenabled;
    private $oldconfiguration;

    public $editorplugin;

    public function __construct() {
        $scriptname = explode('/', $_SERVER["SCRIPT_FILENAME"]);
        $scriptname = array_pop($scriptname);

        if ($scriptname == 'showimage.php') {
            return;
        }

        global $CFG;

        require_once('wirispluginwrapper.php');
        $this->editorplugin = WIRISpluginWrapper::get_wiris_plugin();
        $this->oldconfiguration = WIRISpluginWrapper::get_old_configuration();

    }

    public function init($obj) {
    }

    private function get_latex_status() {
        global $CFG;

        $filters = filter_get_globally_enabled();
        // Since Moodle 2.5 key is 'tex' not 'filter/tex'.
        $status = ($CFG->version >= 2013051400) ? array_key_exists('tex', $filters) : array_key_exists('filter/tex', $filters);
        return $status;
    }

    private function eval_parameter($param) {
        return ($param == 1 || $param == "true");
    }

    // @codingStandardsIgnoreStart
    // Can't change implemented interface method name.
    public function updateConfiguration(&$configuration) {
    // @codingStandardsIgnoreEnd
        global $CFG;

        // Old configuration.ini.
        if ($this->oldconfiguration) {
            $configuration['wirisconfigurationpath'] = $this->editorplugin->path;
        }

        // Cache folder.
        $configuration['wiriscachedirectory'] = $CFG->dataroot . '/filter/wiris/cache';
        if (!file_exists($configuration['wiriscachedirectory'])) {
            @mkdir($configuration['wiriscachedirectory'], 0755, true);
        }
        // Formulas folder.
        $configuration['wirisformuladirectory'] = $CFG->dataroot . '/filter/wiris/formulas';
        if (!file_exists($configuration['wirisformuladirectory'])) {
            @mkdir($configuration['wirisformuladirectory'], 0755, true);
        }
        $scriptname = explode('/', $_SERVER["SCRIPT_FILENAME"]);
        $scriptname = array_pop($scriptname);

        if ($scriptname == 'showimage.php') { // Minimal conf showing images.
            if (optional_param('refererquery', null, PARAM_RAW) != null) {
                $refererquery = implode('&', explode('/', optional_param('refererquery', null, PARAM_RAW)));
                $configuration['wirisreferer'] = $CFG->wwwroot . $refererquery;
            }
            return;
        }

        // Enable LaTeX.
        if ($this->get_latex_status()) {
            $configuration['wiriseditorparselatex'] = false;
        }
        // WIRIS editor.
        $filterenabled = filter_is_enabled('filter/wiris');
        $this->waseditorenabled = $this->eval_parameter($configuration['wiriseditorenabled']);
        if (isset($CFG->filter_wiris_editor_enable)) {
            $wiriseditorenabled = ($this->waseditorenabled &&
                                   $this->eval_parameter($CFG->filter_wiris_editor_enable) &&
                                   $filterenabled);
            $configuration['wiriseditorenabled'] = $wiriseditorenabled;
        } else {
            $configuration['wiriseditorenabled'] = false;
        }
        // WIRIS cas.
        $this->wascasenabled = $this->eval_parameter($configuration['wiriscasenabled']);
        if (isset($CFG->filter_wiris_cas_enable)) {
            $wiriscasenabled = ($this->wascasenabled && $this->eval_parameter($CFG->filter_wiris_cas_enable) && $filterenabled);
            $configuration['wiriscasenabled'] = $wiriscasenabled;
        } else {
            $configuration['wiriscasenabled'] = false;
        }

        // WIRIS Chem editor.
        $this->waschemeditorenabled = $this->eval_parameter($configuration['wirischemeditorenabled']);
        if (isset($CFG->filter_wiris_chem_editor_enable)) {
            $wirischemeditorenabled = $this->waschemeditorenabled &&
                                      $this->eval_parameter($CFG->filter_wiris_chem_editor_enable) &&
                                      $filterenabled;
            $configuration['wirischemeditorenabled'] = $wirischemeditorenabled;
        } else {
            $configuration['wirischemeditorenabled'] = false;
        }

        // Where is the plugin.
        $configuration['wiriscontextpath'] = $CFG->wwwroot . '/filter/wiris/';
        // Encoded XML.
        $configuration['wiriseditorsavemode'] = 'safeXml';
        $configuration['wirishostplatform'] = 'Moodle';
        $configuration['wirisversionplatform'] = $CFG->version;
        // Referer.
        global $COURSE;
        $query = '';
        if (isset($COURSE->id)) {
            $query .= '?course=' . $COURSE->id;
        }
        if (isset($COURSE->category)) {
            $query .= empty($query) ? '?' : '&';
            $query .= 'category=' . $COURSE->category;
        }

        $configuration['wirisreferer'] = $CFG->wwwroot . $query;

        $moodleproxyenabled = !empty($CFG->proxyhost);
        $proxyportenabled = !empty($CFG->proxyport);
        $proxyuserenabled = !empty($CFG->proxyuser);
        $proxypassenabled = !empty($CFG->proxypassword);

        if ($moodleproxyenabled) {
            $configuration['wirisproxy'] = "true";
            $configuration['wirisproxy_host'] = $CFG->proxyhost;
            $configuration['wirisproxy_port'] = $proxyportenabled ? $CFG->proxyport : null;
            $configuration['wirisproxy_user'] = $proxyuserenabled ? $CFG->proxyuser : null;
            $configuration['wirisproxy_password'] = $proxypassenabled ? $CFG->proxypassword : null;
        }
    }
}
