<?php

defined('MOODLE_INTERNAL') || die();

/**
 * Return an array with the position of the tags named $name on $code variable.
 * @param  String  $code       html code.
 * @param  String  $name       tag name.
 * @param  String  $autoClosed indicates if the tag is autoclosed.
 * @param  boolean $all        indicates if the array should contain all the tags or only the first one.
 * @param  int     $offset      search will start this number of characters counted from the beginning of the string
 * @return array
 */
function wrs_getElementsByNameFromString($code, $name, $autoClosed, $all = false, $offset = 0) {
    $elements = array();
    $code = strtolower($code);
    $name = strtolower($name);
    $start = strpos($code, "<" . $name . " ", $offset);

    $i = 0;
    while ($start) {
        if ($autoClosed) {
            $endString = '>';
        }
        else {
            $endString = '</' . $name . '>';
        }

        $end = strpos($code, $endString, $start);

        if ($end) {
            $end += strlen($endString);
            $element = array();
            $element['start'] = $start;
            $element['end'] = $end;
            $elements[$i] = $element;
            $i++;
        }
        else {
            $end = $start + 1;
        }

        $start = strpos($code, '<' . $name . ' ', $end);
        if (!$all) {
        	break;
        }

    }

    return $elements;
}

/**
 * Create CAS initial session id.
 * @return String
 */
function wrs_createSessionId() {
	$template = array(8,4,4,4,12);
	$id = '';
	for ($j = 0; $j<count($template); $j++) {
		if ($j > 0) {
			$id .= '-';
		}
		for ($i = 0; $i<=$template[$j]; $i++) {
		$c = strtoupper(dechex((int)floor(mt_rand()/mt_getrandmax()*16)));
		$id .= $c;
		}
	}
	return $id;
}

/**
 * Set initial session on server
 * @param  String $sessionId WIRIS Cas session id.
 * @param  String $xml       xml session.
 */
function wrs_setInitialSession($sessionId, $xml) {
	$wrap = com_wiris_system_CallWrapper::getInstance();
	$wrap->start();
	$h = new com_wiris_plugin_impl_HttpImpl('http://www.wiris.net/demo/wiris/set', null);
	$h->setParameter('session_id', $sessionId);
	$h->setParameter('value', $xml);
	$h->setParameter('revision', 1);
	$post = true;
	$h->request($post);
	$wrap->stop();
}

/**
 * Includes a <nonapplet> tag on all the <APPLET> tags with an image linking a WIRIS cas jnlp containing the applet session. 
 * This allows to download WIRIS cas jnlp for chrome browsers.
 * @param  String $text with <APPLET_TAGS>
 * @return String Filtered text.
 */
function wrs_filterAppletToJnlp($text) {

	// An array containing the first applet tag. Don't get all because we use recursion on
	// $text and the long of the $text changes dynamically.
	$appletlist = wrs_getElementsByNameFromString($text, 'applet', false, false);
	$carry = 0;
	$i = 0;
	while(count($appletlist) != 0) {
		$output = '';
		$appletCode = htmlspecialchars_decode(substr($text, $appletlist[$i]['start'] + $carry, $appletlist[$i]['end'] + $carry));
		if (strpos($appletCode, ' src="')) {
			$sessionId = wrs_createSessionId();
			$srcStart = strpos($appletCode,' src="') + strlen(' src="');
			$srcEnd = strpos($appletCode, '.png"', 0);
			$src = substr($appletCode, $srcStart, $srcEnd - $srcStart + 4);
			$output .= html_writer::start_tag('a', array('href' => 'http://www.wiris.net/demo/wiris/wiriscas.jnlp?session_id=' . $sessionId));
			$img = '';
			if (method_exists('html_writer','img')) {
				$img = html_writer::img($src, 'WIRIS CAS');
			} else {
				$img .= html_writer::start_tag('img', array('src' => $src));
				$img .= html_writer::end_tag('img');
			}
			$output .= $img;
			$output .= html_writer::end_tag('a');
			// We add noapplet tag in order to see CAS image on Chrome browser.
			$output = '<noapplet>' . $output . '</noapplet>' . '</APPLET>';
			// Searching applet without </applet> close tag.
			$appletSubstring = substr($text, $appletlist[$i]['start'], $appletlist[$i]['end'] - $appletlist[$i]['start']-9);
			// Applet substring to be replaced.
			$search = substr($text, $appletlist[$i]['start'], $appletlist[$i]['end'] - $appletlist[$i]['start']);
			$output = $appletSubstring . $output;
			$text = str_replace($search, $output, $text);
			$appletlist = wrs_getElementsByNameFromString($text, 'applet', false, false, $appletlist[$i]['end']);

		}
		if (strpos($appletCode, 'value="<session')) {
			$xmlStart = strpos($appletCode, 'value="<session');
			$xmlEnd = strpos($appletCode, '/session>"');
			$xml = substr($appletCode, $xmlStart + 7, $xmlEnd - $xmlStart + 2);
		}
		wrs_setInitialSession($sessionId, $xml);
	}
	return $text;
}