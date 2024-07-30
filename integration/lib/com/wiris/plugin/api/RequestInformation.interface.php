<?php

interface com_wiris_plugin_api_RequestInformation {
	function setRequestHeaders($h);
	function getHeaders();
	function setHeaders($headers);
	function setRequestAvailability($request);
	function setRequest($request);
}
