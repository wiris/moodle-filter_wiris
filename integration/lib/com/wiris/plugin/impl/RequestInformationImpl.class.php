<?php

class com_wiris_plugin_impl_RequestInformationImpl implements com_wiris_plugin_api_RequestInformation{
	public function __construct() { 
	}
	public function setRequestHeaders($h) {
		if(com_wiris_plugin_impl_RequestInformationImpl::$requestAvailable) {
			$headerNames = com_wiris_plugin_impl_RequestInformationImpl::$headers->keys();
			while($headerNames->hasNext()) {
				$name = $headerNames->next();
				$h->setHeader($name, com_wiris_plugin_impl_RequestInformationImpl::$headers->get($name));
				unset($name);
			}
		}
	}
	public function getHeaders() {
		return com_wiris_plugin_impl_RequestInformationImpl::$headers;
	}
	public function setHeaders($headers) {
		com_wiris_plugin_impl_RequestInformationImpl::$headers = $headers;
	}
	public function setRequestAvailability($request) {
		com_wiris_plugin_impl_RequestInformationImpl::$requestAvailable = $request;
	}
	public function setRequest($request) {
		com_wiris_plugin_impl_RequestInformationImpl::$request = $request;
	}
	static $request;
	static $requestAvailable;
	static $headers;
	static function setStaticRequestHeaders($h) {
		if(com_wiris_plugin_impl_RequestInformationImpl::$requestAvailable) {
			$headerNames = com_wiris_plugin_impl_RequestInformationImpl::$headers->keys();
			while($headerNames->hasNext()) {
				$name = $headerNames->next();
				$h->setHeader($name, com_wiris_plugin_impl_RequestInformationImpl::$headers->get($name));
				unset($name);
			}
		}
	}
	function __toString() { return 'com.wiris.plugin.impl.RequestInformationImpl'; }
}
