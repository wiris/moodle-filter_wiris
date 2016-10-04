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

function writeconfiguration() {
    global $CFG;
    $configfile = $CFG->dataroot . "/cache/wiris/configuration.ini";
    $path = $CFG->wwwroot . "/lib/editor/tinymce/plugins/tiny_mce_wiris/tinymce/integration";
    if (!file_exists($configfile)) {
        $config = "wiriscontextpath=" . $path . "\r\n";
        $config .= 'wiriscachedirectory=' . $CFG->dataroot . '/filter/wiris/cache' . "\r\n";
        $config .= 'wirisformuladirectory=' . $CFG->dataroot . '/filter/wiris/formulas' . "\r\n";
        file_put_contents($configfile, $config);
    }
}
