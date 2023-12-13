<?php

class com_wiris_plugin_impl_TextServiceImplIntegratedServices extends com_wiris_plugin_impl_TextServiceImpl {
	public function __construct($plugin) { if(!php_Boot::$skip_constructor) {
		parent::__construct($plugin);
	}}
	public function mathml2accessible($mml, $lang, $param) {
		$servicesClass = Type::resolveClass("com.wiris.editor.services.PublicServices");
		$getInstance = Reflect::field($servicesClass, "getInstance");
		$publicServices = Reflect::callMethod($servicesClass, $getInstance, null);
		$serviceMethod = Reflect::field($publicServices, "mathml2accessible");
		$args = new _hx_array(array());
		if($mml === null) {
			throw new HException("Missing mml");
		} else {
			$args->push($mml);
		}
		$args->push($lang);
		$args->push($param);
		$serviceText = null;
		$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
		return $serviceText;
	}
	public function serviceText($serviceName, $provider) {
		$servicesClass = Type::resolveClass("com.wiris.editor.services.PublicServices");
		$getInstance = Reflect::field($servicesClass, "getInstance");
		$publicServices = Reflect::callMethod($servicesClass, $getInstance, null);
		$serviceMethod = Reflect::field($publicServices, $serviceName);
		$args = new _hx_array(array());
		$jsonResponse = new com_wiris_util_json_JsonAPIResponse();
		$result = new Hash();
		$serviceText = null;
		try {
			if(_hx_index_of($serviceName, "mathml2accessible", null) !== -1) {
				$mml = $provider->getParameter("mml", null);
				if($mml === null) {
					throw new HException("Missing mml");
				} else {
					$args->push($mml);
				}
				$lang = $provider->getParameter("lang", "en");
				$args->push($lang);
				$args->push($provider->getParameters());
				$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
			} else {
				if(_hx_index_of($serviceName, "mathml2latex", null) !== -1) {
					$mml = $provider->getParameter("mml", null);
					if($mml === null) {
						throw new HException("Missing mml");
					} else {
						$args->push($mml);
					}
					$keepMathml = $provider->getParameter("keepMathml", "false");
					if(_hx_index_of($keepMathml, "true", null) !== -1) {
						$args->push(true);
					} else {
						$args->push(false);
					}
					$args->push($provider->getParameters());
					$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
				} else {
					if(_hx_index_of($serviceName, "latex2mathml", null) !== -1) {
						$latex = $provider->getParameter("latex", null);
						if($latex === null) {
							throw new HException("Missing LaTeX");
						} else {
							$args->push($latex);
						}
						$keepLatex = $provider->getParameter("saveLatex", "false");
						if(_hx_index_of($keepLatex, "false", null) !== -1) {
							$args->push(false);
						} else {
							$args->push(true);
						}
						$args->push($provider->getParameters());
						$serviceText = Reflect::callMethod($publicServices, $serviceMethod, $args);
					} else {
						throw new HException("Unknow service " . $serviceName);
					}
				}
			}
			$result->set("text", $serviceText);
			$jsonResponse->setStatus(com_wiris_util_json_JsonAPIResponse::$STATUS_OK);
			$jsonResponse->setResult($result);
			return $jsonResponse->getResponse();
		}catch(Exception $