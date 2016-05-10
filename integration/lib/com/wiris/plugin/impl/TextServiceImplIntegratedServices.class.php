<?php

class com_wiris_plugin_impl_TextServiceImplIntegratedServices extends com_wiris_plugin_impl_TextServiceImpl {
	public function __construct($plugin) { if(!php_Boot::$skip_constructor) {
		parent::__construct($plugin);
	}}
	public function serviceText($serviceName, $param) {
		$servicesClass = Type::resolveClass("com.wiris.editor.services.PublicServices");
		$getInstance = Reflect::field($servicesClass, "getInstance");
		$publicServices = Reflect::callMethod($servicesClass, $getInstance, null);
		$serviceMethod = Reflect::field($publicServices, $serviceName);
		$args = new _hx_array(array());
		try {
			if(_hx_index_of($serviceName, "mathml2accessible", null) !== -1) {
				$mml = com_wiris_system_PropertiesTools::getProperty($param, "mml", null);
				if($mml === null) {
					throw new HException("Missing mml");
				} else {
					$args->push($mml);
				}
				$lang = com_wiris_system_PropertiesTools::getProperty($param, "lang", "en");
				$args->push($lang);
				$args->push($param);
				$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
				return $serviceText;
			} else {
				if(_hx_index_of($serviceName, "mathml2latex", null) !== -1) {
					$mml = com_wiris_system_PropertiesTools::getProperty($param, "mml", null);
					if($mml === null) {
						throw new HException("Missing mml");
					} else {
						$args->push($mml);
					}
					$keepMathml = com_wiris_system_PropertiesTools::getProperty($param, "keepMathml", "false");
					if(_hx_index_of($keepMathml, "true", null) !== -1) {
						$args->push(true);
					} else {
						$args->push(false);
					}
					$args->push($param);
					$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
					return $serviceText;
				} else {
					if(_hx_index_of($serviceName, "latex2mathml", null) !== -1) {
						$latex = com_wiris_system_PropertiesTools::getProperty($param, "latex", null);
						if($latex === null) {
							throw new HException("Missing LaTeX");
						} else {
							$args->push($latex);
						}
						$keepLatex = com_wiris_system_PropertiesTools::getProperty($param, "saveLatex", "false");
						if(_hx_index_of($keepLatex, "false", null) !== -1) {
							$args->push(false);
						} else {
							$args->push(true);
						}
						$args->push($param);
						$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
						return $serviceText;
					} else {
						throw new HException("Unknow service " . $serviceName);
					}
				}
			}
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e = $_ex_;
			{
				throw new HException($e->getMessage());
			}
		}
	}
	public function service($serviceName, $param) {
		$digest = null;
		if(com_wiris_plugin_impl_TextServiceImpl::hasCache($serviceName)) {
			$digest = $this->plugin->newRender()->computeDigest(null, $param);
			$store = $this->plugin->getStorageAndCache();
			$ext = com_wiris_plugin_impl_TextServiceImpl::getDigestExtension($serviceName, $param);
			$s = $store->retreiveData($digest, $ext);
			if($s !== null) {
				return com_wiris_system_Utf8::fromBytes($s);
			}
		}
		$result = $this->serviceText($serviceName, $param);
		if($digest !== null) {
			$store = $this->plugin->getStorageAndCache();
			$ext = com_wiris_plugin_impl_TextServiceImpl::getDigestExtension($serviceName, $param);
			$store->storeData($digest, $ext, com_wiris_system_Utf8::toBytes($result));
		}
		return $result;
	}
	function __toString() { return 'com.wiris.plugin.impl.TextServiceImplIntegratedServices'; }
}
