<?php

class com_wiris_plugin_impl_RenderImplIntegratedServices extends com_wiris_plugin_impl_RenderImpl {
	public function __construct($plugin) { if(!php_Boot::$skip_constructor) {
		parent::__construct($plugin);
	}}
	public function render($format, $mml, $latex, $properties, $outProperties) {
		$servicesClass = Type::resolveClass("com.wiris.editor.services.PublicServices");
		$getInstance = Reflect::field($servicesClass, "getInstance");
		$publicServices = Reflect::callMethod($servicesClass, $getInstance, null);
		$args = new _hx_array(array());
		$args->push($mml);
		$args->push($latex);
		$args->push($properties);
		$args->push($outProperties);
		try {
			if(_hx_index_of($format, "png", null) !== -1) {
				$renderPngMethod = Reflect::field($publicServices, "renderPng");
				$pngObject = Reflect::callMethod($publicServices, $renderPngMethod, $args);
				$pngBytes = $pngObject;
				return haxe_io_Bytes::ofData($pngBytes);
			} else {
				if(_hx_index_of($format, "svg", null) !== -1) {
					$renderSvgMethod = Reflect::field($publicServices, "renderSvg");
					$svgObject = Reflect::callMethod($publicServices, $renderSvgMethod, $args);
					$svgString = $svgObject;
					return haxe_io_Bytes::ofString($svgString);
				} else {
					throw new HException("Unexpected image format.");
				}
			}
		}catch(Exception $