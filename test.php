<?php
function create_atto_compatibility_row($currenteditordata = null, $solutionlink = null) {
    // Get Wiris plugin instance
    $wirisplugin = filter_wiris_pluginwrapper::get_wiris_plugin();
    
    // Prepare test name
    $testname = get_string('wirispluginfilterfor', 'filter_wiris') . '&nbsp;' . $currenteditordata['plugin_name'] . ' versions';

    // Get plugin version
    $pluginversion = '';
    $versionFile = (strtolower($currenteditordata['plugin_name']) == 'tinymce' || strtolower($currenteditordata['plugin_name']) == 'tiny')
        ? $currenteditordata['plugin_path'] . '/../version.php'
        : $currenteditordata['plugin_path'] . '/version.php';

    if (file_exists($versionFile)) {
        require($versionFile);
        if (isset($plugin->version)) {
            $pluginversion = $plugin->version;
        }
    }

    // Get filter version
    $filterversion = isset($plugin->version) ? $plugin->version : '';

    // Check compatibility
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

    // Return the HTML output as a string
    return html_writer::tag('tr', wrs_createtablerow($testname, $reporttext, $solutionlink, $condition), array('class' => 'wrs_plugin wrs_filter'));
}
