/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/dompurify/dist/purify.js":
/*!***************************************************!*\
  !*** ../../node_modules/dompurify/dist/purify.js ***!
  \***************************************************/
/***/ (function(module) {

/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;

    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.7';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */


      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (value) {
        return false;
      } else ;

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }

              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var properties_1 = __webpack_require__(/*! ./properties */ "./src/properties.ts");
var latex_1 = __webpack_require__(/*! ./latex */ "./src/latex.ts");
var mathml_1 = __webpack_require__(/*! ./mathml */ "./src/mathml.ts");
var retro_1 = __webpack_require__(/*! ./retro */ "./src/retro.ts");
main(window);
function main(w) {
    return __awaiter(this, void 0, void 0, function () {
        var properties, document, start;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, properties_1.Properties.generate()];
                case 1:
                    properties = _a.sent();
                    w.viewer = {
                        properties: properties,
                    };
                    document = w.document;
                    properties.render = function () { return __awaiter(_this, void 0, void 0, function () {
                        var element;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    element = document.querySelector(properties.element);
                                    if (!element) return [3, 3];
                                    return [4, (0, latex_1.renderLatex)(properties, element)];
                                case 1:
                                    _a.sent();
                                    return [4, (0, mathml_1.renderMathML)(properties, element)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2];
                            }
                        });
                    }); };
                    start = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            properties.render();
                            return [2];
                        });
                    }); };
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", start);
                    }
                    else {
                        start();
                    }
                    (0, retro_1.bypassEncapsulation)(properties, w);
                    document.dispatchEvent(new Event('viewerLoaded'));
                    return [2];
            }
        });
    });
}


/***/ }),

/***/ "./src/latex.ts":
/*!**********************!*\
  !*** ./src/latex.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderLatex = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
function renderLatex(properties, root) {
    return __awaiter(this, void 0, void 0, function () {
        var latexNodes, latexNodes_1, latexNodes_1_1, latexNode, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (properties.viewer !== 'image' && properties.viewer !== 'latex') {
                        return [2];
                    }
                    latexNodes = findLatexTextNodes(root);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    latexNodes_1 = __values(latexNodes), latexNodes_1_1 = latexNodes_1.next();
                    _b.label = 2;
                case 2:
                    if (!!latexNodes_1_1.done) return [3, 5];
                    latexNode = latexNodes_1_1.value;
                    return [4, replaceLatexInTextNode(properties, latexNode)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    latexNodes_1_1 = latexNodes_1.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (latexNodes_1_1 && !latexNodes_1_1.done && (_a = latexNodes_1.return)) _a.call(latexNodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2];
            }
        });
    });
}
exports.renderLatex = renderLatex;
function replaceLatexInTextNode(properties, node) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var textContent, pos, nextLatexPosition, leftText, leftTextNode, latex, response, fragment, text, textNode;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    textContent = node.textContent || '';
                    pos = 0;
                    _e.label = 1;
                case 1:
                    if (!(pos < textContent.length)) return [3, 5];
                    nextLatexPosition = getNextLatexPos(pos, textContent);
                    if (!nextLatexPosition) return [3, 3];
                    leftText = textContent.substring(pos, nextLatexPosition.start);
                    leftTextNode = document.createTextNode(leftText);
                    (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(leftTextNode, node);
                    node.nodeValue = node.nodeValue.substring(pos, nextLatexPosition.start);
                    latex = textContent.substring(nextLatexPosition.start + '$$'.length, nextLatexPosition.end);
                    return [4, (0, services_1.latexToMathml)(latex, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 2:
                    response = _e.sent();
                    fragment = document.createRange().createContextualFragment(response.text);
                    (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(fragment, node);
                    node.nodeValue = node.nodeValue.substring(nextLatexPosition.start, nextLatexPosition.end);
                    pos = nextLatexPosition.end + '$$'.length;
                    return [3, 4];
                case 3:
                    text = textContent.substring(pos);
                    textNode = document.createTextNode(text);
                    (_c = node.parentNode) === null || _c === void 0 ? void 0 : _c.insertBefore(textNode, node);
                    node.nodeValue = '';
                    pos = textContent.length;
                    _e.label = 4;
                case 4: return [3, 1];
                case 5:
                    (_d = node.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(node);
                    return [2];
            }
        });
    });
}
function findLatexTextNodes(root) {
    var nodeIterator = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, function (node) { return /(\$\$)(.*)(\$\$)/.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; });
    var latexNodes = [];
    var currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        latexNodes.push(currentNode);
    }
    return latexNodes;
}
function getNextLatexPos(pos, text) {
    var firstLatexTags = text.indexOf('$$', pos);
    var secondLatexTags = firstLatexTags == -1 ? -1 : text.indexOf('$$', firstLatexTags + '$$'.length);
    return firstLatexTags != -1 && secondLatexTags != -1 ? { 'start': firstLatexTags, 'end': secondLatexTags } : null;
}


/***/ }),

/***/ "./src/mathml.ts":
/*!***********************!*\
  !*** ./src/mathml.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderMathML = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var mathml_1 = __importDefault(__webpack_require__(/*! @wiris/mathtype-html-integration-devkit/src/mathml */ "../devkit/src/mathml.js"));
function decodeSafeMathML(properties, root) {
    var e_1, _a;
    var _b, _c;
    console.log('decodeSafeMathML');
    var safeNodes = findSafeMathMLTextNodes(root);
    try {
        for (var safeNodes_1 = __values(safeNodes), safeNodes_1_1 = safeNodes_1.next(); !safeNodes_1_1.done; safeNodes_1_1 = safeNodes_1.next()) {
            var safeNode = safeNodes_1_1.value;
            var mathml = mathml_1.default.safeXmlDecode(safeNode.textContent);
            var fragment = document.createRange().createContextualFragment(mathml);
            (_b = safeNode.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(fragment, safeNode);
            (_c = safeNode.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(safeNode);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (safeNodes_1_1 && !safeNodes_1_1.done && (_a = safeNodes_1.return)) _a.call(safeNodes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function findSafeMathMLTextNodes(root) {
    var nodeIterator = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, function (node) { return /«math(.*?)«\/math»/g.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; });
    var safeNodes = [];
    var currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        safeNodes.push(currentNode);
    }
    return safeNodes;
}
function renderMathML(properties, root) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, mathElement, mml, result, url, img, e_2_1;
        var e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (properties.viewer !== 'image' && properties.viewer !== 'mathml') {
                        return [2];
                    }
                    decodeSafeMathML(properties, root);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 11, 12, 13]);
                    _b = __values(__spreadArray([], __read(root.getElementsByTagName('math')), false)), _c = _b.next();
                    _e.label = 2;
                case 2:
                    if (!!_c.done) return [3, 10];
                    mathElement = _c.value;
                    mml = (0, utils_1.htmlEntitiesToXmlEntities)(mathElement.outerHTML);
                    result = void 0;
                    if (!(properties.wirispluginperformance === 'true')) return [3, 4];
                    return [4, (0, services_1.showImage)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 3:
                    result = _e.sent();
                    return [3, 7];
                case 4: return [4, (0, services_1.createImage)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 5:
                    url = _e.sent();
                    url = url.replace('pluginsapp', 'plugins/app');
                    return [4, (0, services_1.processJsonResponse)(fetch(url))];
                case 6:
                    result = _e.sent();
                    _e.label = 7;
                case 7: return [4, setImageProperties(properties, result, mml)];
                case 8:
                    img = _e.sent();
                    (_a = mathElement.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(img, mathElement);
                    _e.label = 9;
                case 9:
                    _c = _b.next();
                    return [3, 2];
                case 10: return [3, 13];
                case 11:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 13: return [2];
            }
        });
    });
}
exports.renderMathML = renderMathML;
;
function setImageProperties(properties, data, mml) {
    return __awaiter(this, void 0, void 0, function () {
        var img, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    img = document.createElement('img');
                    img.src = "data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(data.content));
                    img.setAttribute(properties.wiriseditormathmlattribute, mml);
                    img.setAttribute('class', 'Wirisformula');
                    img.setAttribute('role', 'math');
                    if (+data.height > 0) {
                        img.style.verticalAlign = "-" + (+data.height - +data.baseline) + "px";
                        img.height = +data.height;
                        img.width = +data.width;
                    }
                    if (!!utils_1.corruptMathML.some(function (corruptMathML) { return mml.includes(corruptMathML); })) return [3, 2];
                    return [4, (0, services_1.mathml2accessible)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 1:
                    text = (_a.sent()).text;
                    img.alt = text;
                    _a.label = 2;
                case 2: return [2, img];
            }
        });
    });
}


/***/ }),

/***/ "./src/properties.ts":
/*!***************************!*\
  !*** ./src/properties.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Properties = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
var defaultValues = {
    editorServicesRoot: 'https://www.wiris.net/demo/plugins/app/',
    editorServicesExtension: '',
    backendConfig: {
        wirispluginperformance: 'true',
        wiriseditormathmlattribute: 'data-mathml'
    },
    dpi: 96,
    element: 'body',
    lang: 'en',
    viewer: 'none',
    zoom: 1,
};
var Properties = (function () {
    function Properties() {
        var _this = this;
        this.render = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2];
        }); }); };
        this.config = defaultValues;
    }
    Properties.prototype.new = function () { };
    Properties.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance, pluginName, script, pluginNamePosition, params, urlParams, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        instance = new Properties();
                        pluginName = 'WIRISplugins.js';
                        script = document.querySelector("script[src*=\"".concat(pluginName, "\"]"));
                        if (!!script) {
                            pluginNamePosition = script.src.lastIndexOf(pluginName);
                            params = script.src.substring(pluginNamePosition + pluginName.length);
                            urlParams = new URLSearchParams(params);
                            if (urlParams.get('dpi') !== null && urlParams.get('dpi') !== undefined) {
                                instance.config.dpi = +urlParams.get('dpi');
                            }
                            if (urlParams.get('element') !== null && urlParams.get('element') !== undefined) {
                                instance.config.element = urlParams.get('element');
                            }
                            if (urlParams.get('lang') !== null && urlParams.get('lang') !== undefined) {
                                instance.config.lang = urlParams.get('lang');
                            }
                            if (urlParams.get('viewer') !== null && urlParams.get('viewer') !== undefined) {
                                instance.config.viewer = urlParams.get('viewer');
                            }
                            if (urlParams.get('zoom') !== null && urlParams.get('zoom') !== undefined) {
                                instance.config.zoom = +urlParams.get('zoom');
                            }
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = instance.config;
                        return [4, (0, services_1.configurationJson)(['wirispluginperformance', 'wiriseditormathmlattribute'], instance.editorServicesRoot, instance.editorServicesExtension)];
                    case 2:
                        _a.backendConfig = _b.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof services_1.StatusError) {
                            console.error(e_1);
                        }
                        else {
                            throw e_1;
                        }
                        return [3, 4];
                    case 4: return [2, instance];
                }
            });
        });
    };
    Object.defineProperty(Properties.prototype, "editorServicesRoot", {
        get: function () {
            return this.config.editorServicesRoot ||
                defaultValues.editorServicesRoot;
        },
        set: function (editorServicesRoot) {
            this.config.editorServicesRoot = editorServicesRoot;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "editorServicesExtension", {
        get: function () {
            return this.config.editorServicesExtension ||
                defaultValues.editorServicesExtension;
        },
        set: function (editorServicesExtension) {
            this.config.editorServicesExtension = editorServicesExtension;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "lang", {
        get: function () {
            var configLang = (this.config.lang === 'inherit') ? null : this.config.lang;
            return configLang ||
                document.getElementsByTagName('html')[0].lang ||
                navigator.language ||
                defaultValues.lang;
        },
        set: function (lang) {
            this.config.lang = lang;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "viewer", {
        get: function () {
            return this.config.viewer ||
                defaultValues.viewer;
        },
        set: function (viewer) {
            this.config.viewer = viewer;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "dpi", {
        get: function () {
            return this.config.dpi ||
                defaultValues.dpi;
        },
        set: function (dpi) {
            this.config.dpi = dpi;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "zoom", {
        get: function () {
            return this.config.zoom ||
                defaultValues.zoom;
        },
        set: function (zoom) {
            this.config.zoom = zoom;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "element", {
        get: function () {
            return this.config.element ||
                defaultValues.element;
        },
        set: function (element) {
            this.config.element = element;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "wirispluginperformance", {
        get: function () {
            return this.config.backendConfig.wirispluginperformance ||
                defaultValues.backendConfig.wirispluginperformance;
        },
        set: function (wirispluginperformance) {
            this.config.backendConfig.wirispluginperformance = wirispluginperformance;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "wiriseditormathmlattribute", {
        get: function () {
            return this.config.backendConfig.wiriseditormathmlattribute ||
                defaultValues.backendConfig.wiriseditormathmlattribute;
        },
        set: function (wiriseditormathmlattribute) {
            this.config.backendConfig.wiriseditormathmlattribute = wiriseditormathmlattribute;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return Properties;
}());
exports.Properties = Properties;


/***/ }),

/***/ "./src/retro.ts":
/*!**********************!*\
  !*** ./src/retro.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bypassEncapsulation = void 0;
var latex_1 = __webpack_require__(/*! ./latex */ "./src/latex.ts");
var mathml_1 = __webpack_require__(/*! ./mathml */ "./src/mathml.ts");
function bypassEncapsulation(properties, w) {
    var wany = w;
    if (typeof wany.com === 'undefined') {
        wany.com = {};
    }
    if (typeof wany.com.wiris === 'undefined') {
        wany.com.wiris = {};
    }
    if (typeof wany.com.wiris.js === 'undefined') {
        wany.com.wiris.js = {};
    }
    if (typeof wany.com.wiris.js.JsPluginViewer === 'undefined') {
        wany.com.wiris.js.JsPluginViewer = JsPluginViewer.getInstance();
        JsPluginViewer.properties = properties;
    }
}
exports.bypassEncapsulation = bypassEncapsulation;
var JsPluginViewer = (function () {
    function JsPluginViewer() {
    }
    JsPluginViewer.getInstance = function () {
        if (JsPluginViewer.instance == null) {
            JsPluginViewer.instance = new JsPluginViewer();
        }
        return JsPluginViewer.instance;
    };
    JsPluginViewer.prototype.parseSafeMathMLElement = function (element, asynchronously, callbackFunc) {
        var mathmlPositions = [];
        JsPluginViewer.getMathMLPositionsAtElementAndChildren(element, mathmlPositions);
        for (var i = 0; i < mathmlPositions.length; i++) {
            var mathmlPosition = mathmlPositions[i];
            var newNode = document.createElement("math");
            mathmlPosition.nextElement.parentNode.insertBefore(newNode, mathmlPosition.nextElement);
            newNode.outerHTML = JsPluginViewer.decodeSafeMathML(mathmlPosition.safeMML);
        }
    };
    JsPluginViewer.prototype.parseDocument = function (asynchronously, callbackFunc, safeXml) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, mathml_1.renderMathML)(JsPluginViewer.properties, document.documentElement)];
            });
        });
    };
    JsPluginViewer.prototype.parseElement = function (element, asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, mathml_1.renderMathML)(JsPluginViewer.properties, element)];
            });
        });
    };
    JsPluginViewer.prototype.parseLatexDocument = function (asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, latex_1.renderLatex)(JsPluginViewer.properties, document.documentElement)];
            });
        });
    };
    JsPluginViewer.prototype.parseLatexElement = function (element, asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, latex_1.renderLatex)(JsPluginViewer.properties, element)];
            });
        });
    };
    JsPluginViewer.decodeSafeMathML = function (input) {
        var safeXMLCharactersEntities = JsCharacters.getSafeXMLCharactersEntities();
        var xmlCharacters = JsCharacters.getXMLCharacters();
        var safeXMLCharacters = JsCharacters.getSafeXMLCharacters();
        var tagOpenerEntity = safeXMLCharactersEntities.tagOpener;
        var tagCloserEntity = safeXMLCharactersEntities.tagCloser;
        var doubleQuoteEntity = safeXMLCharactersEntities.doubleQuote;
        var realDoubleQuoteEntity = safeXMLCharactersEntities.realDoubleQuote;
        var inputCopy = input.slice();
        inputCopy = inputCopy.split(tagOpenerEntity).join(safeXMLCharacters.tagOpener);
        inputCopy = inputCopy.split(tagCloserEntity).join(safeXMLCharacters.tagCloser);
        inputCopy = inputCopy.split(doubleQuoteEntity).join(safeXMLCharacters.doubleQuote);
        inputCopy = inputCopy.split(realDoubleQuoteEntity).join(safeXMLCharacters.realDoubleQuote);
        var tagOpener = safeXMLCharacters.tagOpener;
        var tagCloser = safeXMLCharacters.tagCloser;
        var doubleQuote = safeXMLCharacters.doubleQuote;
        var realDoubleQuote = safeXMLCharacters.realDoubleQuote;
        var ampersand = safeXMLCharacters.ampersand;
        var quote = safeXMLCharacters.quote;
        inputCopy = inputCopy.split(tagOpener).join(xmlCharacters.tagOpener);
        inputCopy = inputCopy.split(tagCloser).join(xmlCharacters.tagCloser);
        inputCopy = inputCopy.split(doubleQuote).join(xmlCharacters.doubleQuote);
        inputCopy = inputCopy.split(ampersand).join(xmlCharacters.ampersand);
        inputCopy = inputCopy.split(quote).join(xmlCharacters.quote);
        var returnValue = '';
        var currentEntity = null;
        var i = 0;
        while (i < inputCopy.length) {
            var character = inputCopy.charAt(i);
            if (currentEntity == null) {
                if (character == '$') {
                    currentEntity = '';
                }
                else {
                    returnValue += character;
                }
            }
            else if (character == ';') {
                returnValue += '&' + currentEntity;
                currentEntity = null;
            }
            else if (character.match(/([a-zA-Z0-9#._-] | '-')/)) {
                currentEntity += character;
            }
            else {
                returnValue += '$' + 'currentEntity';
                currentEntity = null;
                i -= 1;
            }
            i++;
        }
        return returnValue;
    };
    JsPluginViewer.getMathMLPositionsAtElementAndChildren = function (element, mathmlPositions) {
        JsPluginViewer.getMathMLPositionsAtNode(element, mathmlPositions);
        var childNodes = Array.from(element.childNodes);
        if (childNodes.length > 0) {
            for (var i = 0; i < childNodes.length; i++) {
                var child = childNodes[i];
                JsPluginViewer.getMathMLPositionsAtElementAndChildren(child, mathmlPositions);
            }
        }
    };
    JsPluginViewer.getMathMLPositionsAtNode = function (node, mathmlPositions) {
        var safeXMLCharacters = JsCharacters.getSafeXMLCharacters();
        if (node.nodeType == 3) {
            var startMathmlTag = safeXMLCharacters.tagOpener + "math";
            var endMathmlTag = safeXMLCharacters.tagOpener + "/math" + safeXMLCharacters.tagCloser;
            var start = node.textContent.indexOf(startMathmlTag);
            var end = 0;
            while (start != -1) {
                end = node.textContent.indexOf(endMathmlTag, start + startMathmlTag.length);
                if (end == -1)
                    break;
                var nextMathML = node.textContent.indexOf(startMathmlTag, end + endMathmlTag.length);
                if (nextMathML >= 0 && end > nextMathML)
                    break;
                var safeMathml = node.textContent.substring(start, end + endMathmlTag.length);
                node.textContent = node.textContent.substring(0, start) + node.textContent.substring(end + endMathmlTag.length);
                node = node.splitText(start);
                start = node.textContent.indexOf(startMathmlTag);
                mathmlPositions.push({
                    safeMML: safeMathml,
                    nextElement: node
                });
            }
        }
    };
    return JsPluginViewer;
}());
var JsCharacters = (function () {
    function JsCharacters() {
    }
    JsCharacters.getSafeXMLCharactersEntities = function () {
        return {
            tagOpener: '&laquo;',
            tagCloser: '&raquo;',
            doubleQuote: '&uml;',
            realDoubleQuote: '&quot;',
        };
    };
    JsCharacters.getXMLCharacters = function () {
        return {
            id: 'xmlCharacters',
            tagOpener: '<',
            tagCloser: '>',
            doubleQuote: '"',
            ampersand: '&',
            quote: '\'',
        };
    };
    JsCharacters.getSafeXMLCharacters = function () {
        return {
            id: 'safeXmlCharacters',
            tagOpener: '«',
            tagCloser: '»',
            doubleQuote: '¨',
            ampersand: '§',
            quote: '`',
            realDoubleQuote: '¨',
        };
    };
    return JsCharacters;
}());


/***/ }),

/***/ "./src/services.ts":
/*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configurationJson = exports.latexToMathml = exports.createImage = exports.showImage = exports.mathml2accessible = exports.callService = exports.processJsonResponse = exports.StatusError = void 0;
var parser_1 = __importDefault(__webpack_require__(/*! @wiris/mathtype-html-integration-devkit/src/parser */ "../devkit/src/parser.js"));
var MethodType;
(function (MethodType) {
    MethodType["Post"] = "POST";
    MethodType["Get"] = "GET";
})(MethodType || (MethodType = {}));
var StatusError = (function (_super) {
    __extends(StatusError, _super);
    function StatusError(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, StatusError.prototype);
        return _this;
    }
    return StatusError;
}(Error));
exports.StatusError = StatusError;
function processJsonResponse(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, status_1, result, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4, response];
                case 1: return [4, (_b.sent()).json()];
                case 2:
                    _a = _b.sent(), status_1 = _a.status, result = _a.result;
                    if (status_1 !== 'ok') {
                        throw new StatusError('Service responded with a non-ok status');
                    }
                    return [2, result];
                case 3:
                    e_1 = _b.sent();
                    throw e_1;
                case 4: return [2];
            }
        });
    });
}
exports.processJsonResponse = processJsonResponse;
function callService(query, serviceName, method, serverURL, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var url, init, _a, _b, _c, key, value;
        var e_2, _d;
        return __generator(this, function (_e) {
            try {
                url = new URL(serviceName + extension, serverURL);
                init = {
                    method: method,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                };
                if (method === MethodType.Get) {
                    try {
                        for (_a = __values(Object.entries(query)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                            url.searchParams.set(key, value);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    init.body = new URLSearchParams(__assign({}, query));
                }
                return [2, fetch(url.toString(), init)];
            }
            catch (e) {
                throw e;
            }
            return [2];
        });
    });
}
exports.callService = callService;
function mathml2accessible(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'service': 'mathml2accessible',
                'mml': mml,
                'metrics': 'true',
                'centerbaseline': 'false',
                'lang': lang,
                'ignoreStyles': 'true',
            };
            response = callService(params, 'service', MethodType.Post, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.mathml2accessible = mathml2accessible;
function showImage(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, getParams, getResponse, e_3, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        'mml': mml,
                        'metrics': 'true',
                        'centerbaseline': 'false',
                        'lang': lang,
                    };
                    getParams = parser_1.default.createShowImageSrcData({ mml: mml }, lang);
                    getResponse = callService(getParams, 'showimage', MethodType.Get, url, extension);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, processJsonResponse(getResponse)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_3 = _a.sent();
                    if (e_3 instanceof StatusError) {
                    }
                    else {
                        throw e_3;
                    }
                    return [3, 4];
                case 4:
                    response = callService(params, 'showimage', MethodType.Post, url, extension);
                    return [2, processJsonResponse(response)];
            }
        });
    });
}
exports.showImage = showImage;
;
function createImage(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        'mml': mml,
                        'metrics': 'true',
                        'centerbaseline': 'false',
                        'lang': lang,
                    };
                    response = callService(params, 'createimage', MethodType.Get, url, extension);
                    return [4, response];
                case 1: return [2, (_a.sent()).text()];
            }
        });
    });
}
exports.createImage = createImage;
;
function latexToMathml(latex, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'service': 'latex2mathml',
                'latex': latex,
            };
            response = callService(params, 'service', MethodType.Post, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.latexToMathml = latexToMathml;
function configurationJson(variablekeys, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'variablekeys': variablekeys.join(','),
            };
            response = callService(params, 'configurationjson', MethodType.Get, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.configurationJson = configurationJson;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corruptMathML = exports.htmlEntitiesToXmlEntities = void 0;
function decodeEntities(text) {
    var element = document.createElement('textarea');
    element.innerHTML = text;
    return element.value;
}
function htmlEntitiesToXmlEntities(text) {
    text = decodeEntities(text);
    text = text.split('"<"').join('"&lt;"')
        .split('">"')
        .join('"&gt;"')
        .split('><<')
        .join('>&lt;<');
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i);
        if (text.charCodeAt(i) > 128) {
            result += '&#' + text.charCodeAt(i) + ';';
        }
        else {
            result += character;
        }
    }
    return result;
}
exports.htmlEntitiesToXmlEntities = htmlEntitiesToXmlEntities;
exports.corruptMathML = ['⟦', '&#10214;', '⟧', '&#10215;', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow'];


/***/ }),

/***/ "../devkit/src/accessibility.js":
/*!**************************************!*\
  !*** ../devkit/src/accessibility.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accessibility)
/* harmony export */ });
/* harmony import */ var _textcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textcache */ "../devkit/src/textcache.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _stringmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringmanager */ "../devkit/src/stringmanager.js");





/**
 * @classdesc
 * This class represents MathType accessible class. Converts MathML to accessible text and manages
 * the associated client-side cache.
 */
class Accessibility {
  /**
  * Static property.
  * Accessibility cache, each entry contains a MathML and its correspondent accessibility text.
  * @type {TextCache}
  */
  static get cache() {
    return Accessibility._cache;
  }

  /**
   * Static property setter.
   * Set accessibility cache.
   * @param {TextCahe} value - The property value.
   * @ignore
   */
  static set cache(value) {
    Accessibility._cache = value;
  }

  /**
   * Converts MathML strings to its accessible text representation.
   * @param {String} mathML - MathML to be converted to accessible text.
   * @param {String} [language] - Language of the accessible text. 'en' by default.
   * @param {Array.<String>} [data] - Parameters to send to mathml2accessible service.
   * @return {String} Accessibility text.
   */
  static mathMLToAccessible(mathML, language, data) {
    if (typeof language === 'undefined') {
      language = 'en';
    }
    // Check MathML class. If the class is chemistry,
    // we add chemistry to data to force accessibility service
    // to load chemistry grammar.
    if (_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].containClass(mathML, 'wrs_chemistry')) {
      data.mode = 'chemistry';
    }
    // Ignore accesibility styles
    data.ignoreStyles = true;
    let accessibleText = '';
    if (Accessibility.cache.get(mathML)) {
      accessibleText = Accessibility.cache.get(mathML);
    } else {
      data.service = 'mathml2accessible';
      data.lang = language;
      const accessibleJsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_1__["default"].getService('service', data));
      if (accessibleJsonResponse.status !== 'error') {
        accessibleText = accessibleJsonResponse.result.text;
        Accessibility.cache.populate(mathML, accessibleText);
      } else {
        accessibleText = _stringmanager__WEBPACK_IMPORTED_MODULE_3__["default"].get('error_convert_accessibility');
      }
    }
    return accessibleText;
  }
}

/**
 * Contains an instance of TextCache class to manage the JavaScript accessible cache.
 * Each entry of the cache object contains the MathML and it's correspondent accessibility text.
 * @private
 * @type {TextCache}
 */
Accessibility._cache = new _textcache__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "../devkit/src/configuration.js":
/*!**************************************!*\
  !*** ../devkit/src/configuration.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Configuration)
/* harmony export */ });
/**
 * This class represents the configuration class.
 * Usually used to retrieve configuration properties generated in the backend into the frontend.
 */
class Configuration {
  /**
   * Adds a properties object to {@link Configuration.properties}.
   * @param {Object} properties - properties to append to current properties.
   */
  static addConfiguration(properties) {
    Object.assign(Configuration.properties, properties);
  }

  /**
  * Static property.
  * The configuration properties object.
  * @private
  * @type {Object}
  */
  static get properties() {
    return Configuration._properties;
  }

  /**
   * Static property setter.
   * Set configuration properties.
   * @param {Object} value - The property value.
   * @ignore
   */
  static set properties(value) {
    Configuration._properties = value;
  }

  /**
   * Returns the value of a property key.
   * @param {String} key - Property key
   * @returns {String} Property value
   */
  static get(key) {
    if (!Object.prototype.hasOwnProperty.call(Configuration.properties, key)) {
      // Backwards compatibility.
      if (Object.prototype.hasOwnProperty.call(Configuration.properties, '_wrs_conf_')) {
        return Configuration.properties[`_wrs_conf_${key}`];
      }
      return false;
    }
    return Configuration.properties[key];
  }

  /**
   * Adds a new property to Configuration class.
   * @param {String} key - Property key.
   * @param {Object} value - Property value.
   */
  static set(key, value) {
    Configuration.properties[key] = value;
  }

  /**
   * Updates a property object value with new values.
   * @param {String} key - The property key to be updated.
   * @param {Object} propertyValue - Object containing the new values.
   */
  static update(key, propertyValue) {
    if (!Configuration.get(key)) {
      Configuration.set(key, propertyValue);
    } else {
      const updateProperty = Object.assign(Configuration.get(key), propertyValue);
      Configuration.set(key, updateProperty);
    }
  }
}

/**
 * Static properties object. Stores all configuration properties.
 * Needed to attribute accessors.
 * @private
 * @type {Object}
 */
Configuration._properties = {};

/***/ }),

/***/ "../devkit/src/constants.js":
/*!**********************************!*\
  !*** ../devkit/src/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Constants)
/* harmony export */ });
/**
 * This class represents all the constants needed in a MathType integration among different classes.
 * If a constant should be used across different classes should be defined using attribute
 * accessors.
 */
class Constants {
  /**
   * Safe XML entities.
   * @type {Object}
   */
  static get safeXmlCharactersEntities() {
    return {
      tagOpener: '&laquo;',
      tagCloser: '&raquo;',
      doubleQuote: '&uml;',
      realDoubleQuote: '&quot;'
    };
  }

  /**
   * Blackboard invalid safe characters.
   * @type {Object}
   */
  static get safeBadBlackboardCharacters() {
    return {
      ltElement: '«mo»<«/mo»',
      gtElement: '«mo»>«/mo»',
      ampElement: '«mo»&«/mo»'
    };
  }

  /**
   * Blackboard valid safe characters.
   * @type{Object}
   */
  static get safeGoodBlackboardCharacters() {
    return {
      ltElement: '«mo»§lt;«/mo»',
      gtElement: '«mo»§gt;«/mo»',
      ampElement: '«mo»§amp;«/mo»'
    };
  }

  /**
   * Standard XML special characters.
   * @type {Object}
   */
  static get xmlCharacters() {
    return {
      id: 'xmlCharacters',
      tagOpener: '<',
      // Hex: \x3C.
      tagCloser: '>',
      // Hex: \x3E.
      doubleQuote: '"',
      // Hex: \x22.
      ampersand: '&',
      // Hex: \x26.
      quote: '\'' // Hex: \x27.
    };
  }

  /**
  * Safe XML special characters. This characters are used instead the standard
  * the standard to parse the  MathML if safeXML save mode is enable. Each XML
  * special character have a UTF-8 representation.
  * @type {Object}
  */
  static get safeXmlCharacters() {
    return {
      id: 'safeXmlCharacters',
      tagOpener: '«',
      // Hex: \xAB.
      tagCloser: '»',
      // Hex: \xBB.
      doubleQuote: '¨',
      // Hex: \xA8.
      ampersand: '§',
      // Hex: \xA7.
      quote: '`',
      // Hex: \x60.
      realDoubleQuote: '¨'
    };
  }
}

/***/ }),

/***/ "../devkit/src/image.js":
/*!******************************!*\
  !*** ../devkit/src/image.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");



/**
 * @classdesc
 * This class represents MathType Image class. Contains all the logic related
 * to MathType images manipulation.
 * All MathType images are generated using the appropriate MathType
 * integration service: showimage or createimage.
 *
 * There are two available image formats:
 * - svg (default)
 * - png
 *
 * There are two formats for the image src attribute:
 * - A data-uri scheme containing the URL-encoded SVG or a PNG's base64.
 * - A link to the showimage service.
 */
class Image {
  /**
   * Removes data attributes from an image.
   * @param {HTMLImageElement} img - Image where remove data attributes.
   */
  static removeImgDataAttributes(img) {
    const attributesToRemove = [];
    const {
      attributes
    } = img;
    Object.keys(attributes).forEach(key => {
      const attribute = attributes[key];
      if (attribute !== undefined && attribute.name !== undefined && attribute.name.indexOf('data-') === 0) {
        // Is preferred keep an array and remove after the search
        // because when attribute is removed the array of attributes
        // is modified.
        attributesToRemove.push(attribute.name);
      }
    });
    attributesToRemove.forEach(attribute => {
      img.removeAttribute(attribute);
    });
  }

  /**
   * @static
   * Clones all MathType image attributes from a HTMLImageElement to another.
   * @param {HTMLImageElement} originImg - The original image.
   * @param {HTMLImageElement} destImg - The destination image.
   */
  static clone(originImg, destImg) {
    const customEditorAttributeName = _configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageCustomEditorName');
    if (!originImg.hasAttribute(customEditorAttributeName)) {
      destImg.removeAttribute(customEditorAttributeName);
    }
    const mathmlAttributeName = _configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageMathmlAttribute');
    const imgAttributes = [mathmlAttributeName, customEditorAttributeName, 'alt', 'height', 'width', 'style', 'src', 'role'];
    imgAttributes.forEach(iterator => {
      const originAttribute = originImg.getAttribute(iterator);
      if (originAttribute) {
        destImg.setAttribute(iterator, originAttribute);
      }
    });
  }

  /**
  * Calculates the metrics of a MathType image given the the service response and the image format.
  * @param {HTMLImageElement} img - The HTMLImageElement.
  * @param {String} uri - The URI generated by the image service: can be a data URI scheme or a URL.
  * @param {Boolean} jsonResponse - True the response of the image service is a
  * JSON object. False otherwise.
  */
  static setImgSize(img, uri, jsonResponse) {
    let ar;
    let base64String;
    let bytes;
    let svgString;
    if (jsonResponse) {
      // Cleaning data:image/png;base64.
      if (_configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageFormat') === 'svg') {
        // SVG format.
        // If SVG is encoded in base64 we need to convert the base64 bytes into a SVG string.
        if (_configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('saveMode') !== 'base64') {
          ar = Image.getMetricsFromSvgString(uri);
        } else {
          base64String = img.src.substr(img.src.indexOf('base64,') + 7, img.src.length);
          svgString = '';
          bytes = _util__WEBPACK_IMPORTED_MODULE_1__["default"].b64ToByteArray(base64String, base64String.length);
          for (let i = 0; i < bytes.length; i += 1) {
            svgString += String.fromCharCode(bytes[i]);
          }
          ar = Image.getMetricsFromSvgString(svgString);
        }
        // PNG format: we store all metrics information in the first 88 bytes.
      } else {
        base64String = img.src.substr(img.src.indexOf('base64,') + 7, img.src.length);
        bytes = _util__WEBPACK_IMPORTED_MODULE_1__["default"].b64ToByteArray(base64String, 88);
        ar = Image.getMetricsFromBytes(bytes);
      }
      // Backwards compatibility: we store the metrics into createimage response.
    } else {
      ar = _util__WEBPACK_IMPORTED_MODULE_1__["default"].urlToAssArray(uri);
    }
    let width = ar.cw;
    if (!width) {
      return;
    }
    let height = ar.ch;
    let baseline = ar.cb;
    const {
      dpi
    } = ar;
    if (dpi) {
      width = width * 96 / dpi;
      height = height * 96 / dpi;
      baseline = baseline * 96 / dpi;
    }
    img.width = width;
    img.height = height;
    img.style.verticalAlign = `-${height - baseline}px`;
  }

  /**
   * Calculates the metrics of an image which has been resized. Is used to restore the original
   * metrics of a resized image.
   * @param {HTMLImageElement } img - The resized HTMLImageElement.
   */
  static fixAfterResize(img) {
    img.removeAttribute('style');
    img.removeAttribute('width');
    img.removeAttribute('height');
    // In order to avoid resize with max-width css property.
    img.style.maxWidth = 'none';
    const processImg = img => {
      if (img.src.indexOf('data:image') !== -1) {
        if (img.src.indexOf('data:image/svg+xml') !== -1) {
          // Image is in base64
          if (img.src.indexOf('data:image/svg+xml;base64,') !== -1) {
            // 'data:image/svg+xml;base64,'.length === 26
            const base64String = img.getAttribute('src').substring(26);
            const svgString = window.atob(base64String);
            const encodedSvgString = encodeURIComponent(svgString);
            img.setAttribute('src', `data:image/svg+xml;charset=utf8,${encodedSvgString}`);
          }

          // 'data:image/svg+xml;charset=utf8,'.length === 32.
          const svg = decodeURIComponent(img.src.substring(32, img.src.length));
          Image.setImgSize(img, svg, true);
        } else {
          // 'data:image/png;base64,' === 22.
          const base64 = img.src.substring(22, img.src.length);
          Image.setImgSize(img, base64, true);
        }
      } else {
        Image.setImgSize(img, img.src);
      }
    };

    // If the image doesn't contain a blob, just process it normally
    if (img.src.indexOf('blob:') === -1) {
      processImg(img);
      // if it does contain a blob, then read that, replace the src with the decoded content, and process it
    } else {
      let reader = new FileReader();
      reader.onload = function () {
        img.setAttribute('src', reader.result);
        processImg(img);
      };
      fetch(img.src).then(r => r.blob()).then(blob => {
        reader.readAsDataURL(blob);
      });
    }
  }

  /**
   * Returns the metrics (height, width and baseline) contained in a SVG image generated
   * by the MathType image service. This image contains as an extra custom attribute:
   * the baseline (wrs:baseline).
   * @param {String} svgString - The SVG image.
   * @return {Array} - The image metrics.
   */
  static getMetricsFromSvgString(svgString) {
    let first = svgString.indexOf('height="');
    let last = svgString.indexOf('"', first + 8, svgString.length);
    const height = svgString.substring(first + 8, last);
    first = svgString.indexOf('width="');
    last = svgString.indexOf('"', first + 7, svgString.length);
    const width = svgString.substring(first + 7, last);
    first = svgString.indexOf('wrs:baseline="');
    last = svgString.indexOf('"', first + 14, svgString.length);
    const baseline = svgString.substring(first + 14, last);
    if (typeof width !== 'undefined') {
      const arr = [];
      arr.cw = width;
      arr.ch = height;
      if (typeof baseline !== 'undefined') {
        arr.cb = baseline;
      }
      return arr;
    }
    return [];
  }

  /**
   * Returns the metrics (width, height, baseline and dpi) contained in a PNG byte array.
   * @param  {Array.<Bytes>} bytes - png byte array.
   * @return {Array} The png metrics.
   */
  static getMetricsFromBytes(bytes) {
    _util__WEBPACK_IMPORTED_MODULE_1__["default"].readBytes(bytes, 0, 8);
    let width;
    let height;
    let typ;
    let baseline;
    let dpi;
    while (bytes.length >= 4) {
      typ = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
      if (typ === 0x49484452) {
        width = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        height = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        // Read 5 bytes.
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readByte(bytes);
      } else if (typ === 0x62615345) {
        // Baseline: 'baSE'.
        baseline = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
      } else if (typ === 0x70485973) {
        // Dpis: 'pHYs'.
        dpi = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        dpi = Math.round(dpi / 39.37);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readByte(bytes);
      }
      _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
    }
    if (typeof width !== 'undefined') {
      const arr = [];
      arr.cw = width;
      arr.ch = height;
      arr.dpi = dpi;
      if (baseline) {
        arr.cb = baseline;
      }
      return arr;
    }
    return [];
  }
}

/***/ }),

/***/ "../devkit/src/latex.js":
/*!******************************!*\
  !*** ../devkit/src/latex.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Latex)
/* harmony export */ });
/* harmony import */ var _textcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textcache */ "../devkit/src/textcache.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");






/**
 * @classdesc
 * This class represents a LaTeX parser. Manages the services which allows to convert
 * LaTeX into MathML and MathML into LaTeX.
 */
class Latex {
  /**
   * Static property.
   * Return latex cache.
   * @private
   * @type {Cache}
   */
  static get cache() {
    return Latex._cache;
  }

  /**
   * Static property setter.
   * Set latex cache.
   * @param {Cache} value - The property value.
   * @ignore
  */
  static set cache(value) {
    Latex._cache = value;
  }

  /**
   * Converts MathML to LaTeX by calling mathml2latex service. For text services
   * we call a text service with the param mathml2latex.
   * @param {String} mathml - MathML String.
   * @return {String} LaTeX string generated by the MathML argument.
   */
  static getLatexFromMathML(mathml) {
    const mathmlWithoutSemantics = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].removeSemantics(mathml);
    /**
     * @type {TextCache}
     */
    const {
      cache
    } = Latex;
    const data = {
      service: 'mathml2latex',
      mml: mathmlWithoutSemantics
    };
    const jsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_2__["default"].getService('service', data));

    // TODO: Error handling.
    let latex = '';
    if (jsonResponse.status === 'ok') {
      latex = jsonResponse.result.text;
      const latexHtmlEntitiesEncoded = _util__WEBPACK_IMPORTED_MODULE_4__["default"].htmlEntities(latex);
      // Inserting LaTeX semantics.
      const mathmlWithSemantics = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].addAnnotation(mathml, latexHtmlEntitiesEncoded, 'LaTeX');
      cache.populate(latex, mathmlWithSemantics);
    }
    return latex;
  }

  /**
   * Converts LaTeX to MathML by calling latex2mathml service. For text services
   * we call a text service with the param latex2mathml.
   * @param {String} latex - String containing a LaTeX formula.
   * @param {Boolean} includeLatexOnSemantics
   * - If true LaTeX would me included into MathML semantics.
   * @return {String} MathML string generated by the LaTeX argument.
   */
  static getMathMLFromLatex(latex, includeLatexOnSemantics) {
    /**
     * @type {TextCache}
     */
    const latexCache = Latex.cache;
    if (Latex.cache.get(latex)) {
      return Latex.cache.get(latex);
    }
    const data = {
      service: 'latex2mathml',
      latex
    };
    if (includeLatexOnSemantics) {
      data.saveLatex = '';
    }
    const jsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_2__["default"].getService('service', data));
    let output;
    if (jsonResponse.status === 'ok') {
      let mathml = jsonResponse.result.text;
      mathml = mathml.split('\r').join('').split('\n').join(' ');

      // Populate LatexCache.
      if (mathml.indexOf('semantics') === -1 && mathml.indexOf('annotation') === -1) {
        const content = _util__WEBPACK_IMPORTED_MODULE_4__["default"].htmlEntities(latex);
        mathml = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].addAnnotation(mathml, content, 'LaTeX');
        output = mathml;
      } else {
        output = mathml;
      }
      if (!latexCache.get(latex)) {
        latexCache.populate(latex, mathml);
      }
    } else {
      output = `$$${latex}$$`;
    }
    return output;
  }

  /**
   * Converts all occurrences of MathML code to LaTeX.
   * The MathML code should containing <annotation encoding="LaTeX"/> to be converted.
   * @param {String} content - A string containing MathML valid code.
   * @param {Object} characters - An object containing special characters.
   * @return {String} A string containing all MathML annotated occurrences
   * replaced by the corresponding LaTeX code.
   */
  static parseMathmlToLatex(content, characters) {
    let output = '';
    const mathTagBegin = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    const openTarget = `${characters.tagOpener}annotation encoding=${characters.doubleQuote}LaTeX${characters.doubleQuote}${characters.tagCloser}`;
    const closeTarget = `${characters.tagOpener}/annotation${characters.tagCloser}`;
    let start = content.indexOf(mathTagBegin);
    let end = 0;
    let mathml;
    let startAnnotation;
    let closeAnnotation;
    while (start !== -1) {
      output += content.substring(end, start);
      end = content.indexOf(mathTagEnd, start);
      if (end === -1) {
        end = content.length - 1;
      } else {
        end += mathTagEnd.length;
      }
      mathml = content.substring(start, end);
      startAnnotation = mathml.indexOf(openTarget);
      if (startAnnotation !== -1) {
        startAnnotation += openTarget.length;
        closeAnnotation = mathml.indexOf(closeTarget);
        let latex = mathml.substring(startAnnotation, closeAnnotation);
        if (characters === _constants__WEBPACK_IMPORTED_MODULE_3__["default"].safeXmlCharacters) {
          latex = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlDecode(latex);
        }
        output += `$$${latex}$$`;
        // Populate latex into cache.

        Latex.cache.populate(latex, mathml);
      } else {
        output += mathml;
      }
      start = content.indexOf(mathTagBegin, end);
    }
    output += content.substring(end, content.length);
    return output;
  }

  /**
   * Extracts the latex of a determined position in a text.
   * @param {Node} textNode - textNode to extract the LaTeX
   * @param {Number} caretPosition - Starting position to find LaTeX.
   * @param {Object} latexTags - Optional parameter representing tags between latex is inserted.
   * It has the 'open' attribute for the open tag and the 'close' attribute for the close tag.
   * "$$" by default.
   * @return {Object} An object with 3 keys: 'latex', 'start' and 'end'. Null if latex is not found.
   * @static
   */
  static getLatexFromTextNode(textNode, caretPosition, latexTags) {
    // TODO: Set LaTeX Tags as Core variable. Fix the call to this function (third argument).
    // Tags used for LaTeX formulas.
    const defaultLatexTags = {
      open: '$$',
      close: '$$'
    };
    // latexTags is an optional parameter. If is not set, use default latexTags.
    if (typeof latexTags === 'undefined' || latexTags == null) {
      latexTags = defaultLatexTags;
    }
    // Looking for the first textNode.
    let startNode = textNode;
    while (startNode.previousSibling && startNode.previousSibling.nodeType === 3) {
      // TEXT_NODE.
      startNode = startNode.previousSibling;
    }

    /**
     * Returns the next latex position and node from a specific node and position.
     * @param {Node} currentNode - Node where searching latex.
     * @param {Number} currentPosition - Current position inside the currentNode.
     * @param {Object} latexTagsToUse - Tags used at latex beginning and latex final.
     * "$$" by default.
     * @param {Boolean} tag - Tag containing the current search.
     * @returns {Object} Object containing the current node and the position.
     */
    function getNextLatexPosition(currentNode, currentPosition, tag) {
      let position = currentNode.nodeValue.indexOf(tag, currentPosition);
      while (position === -1) {
        currentNode = currentNode.nextSibling;
        if (!currentNode) {
          // TEXT_NODE.
          return null; // Not found.
        }

        position = currentNode.nodeValue ? currentNode.nodeValue.indexOf(latexTags.close) : -1;
      }
      return {
        node: currentNode,
        position
      };
    }

    /**
     * Determines if a node is previous, or not, to a second one.
     * @param {Node} node - Start node.
     * @param {Number} position - Start node position.
     * @param {Node} endNode - End node.
     * @param {Number} endPosition - End node position.
     * @returns {Boolean} True if the starting node is previous thant the en node. false otherwise.
     */
    function isPrevious(node, position, endNode, endPosition) {
      if (node === endNode) {
        return position <= endPosition;
      }
      while (node && node !== endNode) {
        node = node.nextSibling;
      }
      return node === endNode;
    }
    let start;
    let end = {
      node: startNode,
      position: 0
    };
    // Is supposed that open and close tags has the same length.
    const tagLength = latexTags.open.length;
    do {
      start = getNextLatexPosition(end.node, end.position, latexTags.open);
      if (start == null || isPrevious(textNode, caretPosition, start.node, start.position)) {
        return null;
      }
      end = getNextLatexPosition(start.node, start.position + tagLength, latexTags.close);
      if (end == null) {
        return null;
      }
      end.position += tagLength;
    } while (isPrevious(end.node, end.position, textNode, caretPosition));

    // Isolating latex.
    let latex;
    if (start.node === end.node) {
      latex = start.node.nodeValue.substring(start.position + tagLength, end.position - tagLength);
    } else {
      const index = start.position + tagLength;
      latex = start.node.nodeValue.substring(index, start.node.nodeValue.length);
      let currentNode = start.node;
      do {
        currentNode = currentNode.nextSibling;
        if (currentNode === end.node) {
          latex += end.node.nodeValue.substring(0, end.position - tagLength);
        } else {
          latex += currentNode.nodeValue ? currentNode.nodeValue : '';
        }
      } while (currentNode !== end.node);
    }
    return {
      latex,
      startNode: start.node,
      startPosition: start.position,
      endNode: end.node,
      endPosition: end.position
    };
  }
}

/**
 * Text cache. Stores all processed LaTeX strings and it's correspondent MathML string.
 * @type {Cache}
 * @static
 */
Latex._cache = new _textcache__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "../devkit/src/listeners.js":
/*!**********************************!*\
  !*** ../devkit/src/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Listeners)
/* harmony export */ });
/**
 * This object represents a custom listener.
 * @typedef {Object} Listener
 * @property {String} Listener.eventName - The listener name.
 * @property {Function} Listener.callback - The listener callback function.
 */

class Listeners {
  /**
   * @classdesc
   * This class represents a custom listeners manager.
   * @constructs
   */
  constructor() {
    /**
     * Array containing all custom listeners.
     * @type {Object[]}
     */
    this.listeners = [];
  }

  /**
   * Add a listener to Listener class.
   * @param {Object} listener - A listener object.
   */
  add(listener) {
    this.listeners.push(listener);
  }

  /**
   * Fires MathType event listeners
   * @param {String} eventName - event name
   * @param {Event} event - event object.
   * @return {boolean} false if event has been prevented. true otherwise.
   */
  fire(eventName, event) {
    for (let i = 0; i < this.listeners.length && !event.cancelled; i += 1) {
      if (this.listeners[i].eventName === eventName) {
        // Calling listener.
        this.listeners[i].callback(event);
      }
    }
    return event.defaultPrevented;
  }

  /**
   * Creates a new listener object.
   * @param {string} eventName - Event name.
   * @param {Object} callback - Callback function.
   * @returns {object} the listener object.
   */
  static newListener(eventName, callback) {
    const listener = {};
    listener.eventName = eventName;
    listener.callback = callback;
    return listener;
  }
}

/***/ }),

/***/ "../devkit/src/mathml.js":
/*!*******************************!*\
  !*** ../devkit/src/mathml.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MathML)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");



/**
 * @classdesc
 * This class represents a class to manage MathML objects.
 */
class MathML {
  /**
   * Checks if the mathml at position i is inside an HTML attribute or not.
   * @param {string} content - a string containing MathML code.
   * @param {number} i -  search index.
   * @return {boolean} true if is inside an HTML attribute. false otherwise.
   */
  static isMathmlInAttribute(content, i) {
    // Regex =
    // '^[\'"][\\s]*=[\\s]*[\\w-]+([\\s]*("[^"]*"|\'[^\']*\')[\\s]*
    // =[\\s]*[\\w-]+[\\s]*)*[\\s]+gmi<';
    const mathAtt = '[\'"][\\s]*=[\\s]*[\\w-]+'; // "=att OR '=att
    const attContent = '"[^"]*"|\'[^\']*\''; // "blabla" OR 'blabla'
    const att = `[\\s]*(${attContent})[\\s]*=[\\s]*[\\w-]+[\\s]*`; // "blabla"=att OR 'blabla'=att
    const atts = `('${att}')*`; // "blabla"=att1 "blabla"=att2
    const regex = `^${mathAtt}${atts}[\\s]+gmi<`; // "=att "blabla"=att1 "blabla"=att2 gmi< .
    const expression = new RegExp(regex);
    const actualContent = content.substring(0, i);
    const reversed = actualContent.split('').reverse().join('');
    const exists = expression.test(reversed);
    return exists;
  }

  /**
   * Decodes an encoded MathML with standard XML tags.
   * We use these entities because IE doesn't support html entities
   * on its attributes sometimes. Yes, sometimes.
   * @param {string} input - string to be decoded.
   * @return {string} decoded string.
   */
  static safeXmlDecode(input) {
    let {
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      realDoubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    // Decoding entities.
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.doubleQuote);
    // Added to fix problem due to import from 1.9.x.
    input = input.split(realDoubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.realDoubleQuote);

    // Blackboard.
    const {
      ltElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    const {
      gtElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    const {
      ampElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    if ('_wrs_blackboard' in window && window._wrs_blackboard) {
      input = input.split(ltElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.ltElement);
      input = input.split(gtElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.gtElement);
      input = input.split(ampElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.ampElement);
    }
    ({
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      realDoubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    const {
      ampersand
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters;
    const {
      quote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters;

    // Decoding characters.
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.doubleQuote);
    input = input.split(ampersand).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.ampersand);
    input = input.split(quote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.quote);

    // We are replacing $ by & when its part of an entity for retro-compatibility.
    // Now, the standard is replace § by &.
    let returnValue = '';
    let currentEntity = null;
    for (let i = 0; i < input.length; i += 1) {
      const character = input.charAt(i);
      if (currentEntity == null) {
        if (character === '$') {
          currentEntity = '';
        } else {
          returnValue += character;
        }
      } else if (character === ';') {
        returnValue += `&${currentEntity}`;
        currentEntity = null;
      } else if (character.match(/([a-zA-Z0-9#._-] | '-')/)) {
        // Character is part of an entity.
        currentEntity += character;
      } else {
        returnValue += `$${currentEntity}`; // Is not an entity.
        currentEntity = null;
        i -= 1; // Parse again the current character.
      }
    }

    return returnValue;
  }

  /**
   * Encodes a MathML with standard XML tags to a MMathML encoded with safe XML tags.
   * We use these entities because IE doesn't support html entities on its attributes sometimes.
   * @param {string} input - input string to be encoded
   * @returns {string} encoded string.
   */
  static safeXmlEncode(input) {
    const {
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      ampersand
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      quote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.doubleQuote);
    input = input.split(ampersand).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.ampersand);
    input = input.split(quote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.quote);
    return input;
  }

  /**
   * Converts special symbols (> 128) to entities and replaces all textual
   * entities by its number entities.
   * @param {string} mathml - MathML string containing - or not - special symbols
   * @returns {string} MathML with all textual entities replaced.
   */
  static mathMLEntities(mathml) {
    let toReturn = '';
    for (let i = 0; i < mathml.length; i += 1) {
      const character = mathml.charAt(i);

      // Parsing > 128 characters.
      if (mathml.codePointAt(i) > 128) {
        toReturn += `&#${mathml.codePointAt(i)};`;
        // For UTF-32 characters we need to move the index one position.
        if (mathml.codePointAt(i) > 0xffff) {
          i += 1;
        }
      } else if (character === '&') {
        const end = mathml.indexOf(';', i + 1);
        if (end >= 0) {
          const container = document.createElement('span');
          container.innerHTML = mathml.substring(i, end + 1);
          toReturn += `&#${_util__WEBPACK_IMPORTED_MODULE_1__["default"].fixedCharCodeAt(container.textContent || container.innerText, 0)};`;
          i = end;
        } else {
          toReturn += character;
        }
      } else {
        toReturn += character;
      }
    }
    return toReturn;
  }

  /**
   * Add a custom editor name with the prefix wrs_ to a MathML class attribute.
   * @param {string} mathml - a MathML string created with a custom editor, like chemistry.
   * @param {string} customEditor - custom editor name.
   * @returns {string} MathML string with his class containing the editor toolbar string.
   */
  static addCustomEditorClassAttribute(mathml, customEditor) {
    let toReturn = '';
    const start = mathml.indexOf('<math');
    if (start === 0) {
      const end = mathml.indexOf('>');
      if (mathml.indexOf('class') === -1) {
        // Adding custom editor type.
        toReturn = `${mathml.substr(start, end)} class="wrs_${customEditor}">`;
        toReturn += mathml.substr(end + 1, mathml.length);
        return toReturn;
      }
    }
    return mathml;
  }

  /**
   * Remove a custom editor name from the MathML class attribute.
   * @param {string} mathml - a MathML string.
   * @param {string} customEditor - custom editor name.
   * @returns {string} The input MathML without customEditor name in his class.
   */
  static removeCustomEditorClassAttribute(mathml, customEditor) {
    // Discard MathML without the specified class.
    if (mathml.indexOf('class') === -1 || mathml.indexOf(`wrs_${customEditor}`) === -1) {
      return mathml;
    }

    // Trivial case: class attribute value equal to editor name. Then
    // class attribute is removed.
    // First try to remove it with a space before if there is one
    // Otherwise without the space
    if (mathml.indexOf(` class="wrs_${customEditor}"`) !== -1) {
      return mathml.replace(` class="wrs_${customEditor}"`, '');
    } else if (mathml.indexOf(`class="wrs_${customEditor}"`) !== -1) {
      return mathml.replace(`class="wrs_${customEditor}"`, '');
    }

    // Non Trivial case: class attribute contains editor name.
    return mathml.replace(`wrs_${customEditor}`, '');
  }

  /**
   * Adds annotation tag in MathML element.
   * @param {String} mathml - valid MathML.
   * @param {String} content - value to put inside annotation tag.
   * @param {String} annotationEncoding - annotation encoding.
   * @returns {String} - 'mathml' with an annotation that contains
   * 'content' and encoding 'encoding'.
   */
  static addAnnotation(mathml, content, annotationEncoding) {
    // If contains annotation, also contains semantics tag.
    const containsAnnotation = mathml.indexOf('<annotation');
    let mathmlWithAnnotation = '';
    if (containsAnnotation !== -1) {
      const closeSemanticsIndex = mathml.indexOf('</semantics>');
      mathmlWithAnnotation = `${mathml.substring(0, closeSemanticsIndex)}<annotation encoding="${annotationEncoding}">${content}</annotation>${mathml.substring(closeSemanticsIndex)}`;
    } else if (MathML.isEmpty(mathml)) {
      const endIndexInline = mathml.indexOf('/>');
      const endIndexNonInline = mathml.indexOf('>');
      const endIndex = endIndexNonInline === endIndexInline ? endIndexInline : endIndexNonInline;
      mathmlWithAnnotation = `${mathml.substring(0, endIndex)}><semantics><annotation encoding="${annotationEncoding}">${content}</annotation></semantics></math>`;
    } else {
      const beginMathMLContent = mathml.indexOf('>') + 1;
      const endMathmlContent = mathml.lastIndexOf('</math>');
      const mathmlContent = mathml.substring(beginMathMLContent, endMathmlContent);
      mathmlWithAnnotation = `${mathml.substring(0, beginMathMLContent)}<semantics><mrow>${mathmlContent}</mrow><annotation encoding="${annotationEncoding}">${content}</annotation></semantics></math>`; // eslint-disable-line max-len
    }

    return mathmlWithAnnotation;
  }

  /**
   * Removes specific annotation tag in MathML element.
   * In case of remove the unique annotation, also is removed semantics tag.
   * @param {String} mathml - valid MathML.
   * @param {String} annotationEncoding - annotation encoding to remove.
   * @returns {String} - 'mathml' without the annotation encoding specified.
   */
  static removeAnnotation(mathml, annotationEncoding) {
    let mathmlWithoutAnnotation = mathml;
    const openAnnotationTag = `<annotation encoding="${annotationEncoding}">`;
    const closeAnnotationTag = '</annotation>';
    const startAnnotationIndex = mathml.indexOf(openAnnotationTag);
    if (startAnnotationIndex !== -1) {
      let differentAnnotationFound = false;
      let differentAnnotationIndex = mathml.indexOf('<annotation');
      while (differentAnnotationIndex !== -1) {
        if (differentAnnotationIndex !== startAnnotationIndex) {
          differentAnnotationFound = true;
        }
        differentAnnotationIndex = mathml.indexOf('<annotation', differentAnnotationIndex + 1);
      }
      if (differentAnnotationFound) {
        const closeIndex = mathml.indexOf(closeAnnotationTag, startAnnotationIndex);
        const endAnnotationIndex = closeIndex + closeAnnotationTag.length;
        const startIndex = mathml.substring(0, startAnnotationIndex);
        mathmlWithoutAnnotation = startIndex + mathml.substring(endAnnotationIndex);
      } else {
        mathmlWithoutAnnotation = MathML.removeSemantics(mathml);
      }
    }
    return mathmlWithoutAnnotation;
  }

  /**
   * Removes semantics tag to mathml.
   * When using Hand to create formulas, it adds the mrow tag due to the semantics one, this one is also removed.
   * @param {string} mathml - MathML string.
   * @returns {string} - 'mathml' without semantics tag.
   */
  static removeSemantics(mathml) {
    // If `mrow` is found right before the `semantics` starting tag, it's removed as well 
    const semanticsStartingTagRegex = /<semantics>\s*?(<mrow>)?/gm;

    // If `mrow` is found right after the `annotation` ending tag, it's removed as well
    // alongside `semantics` closing tag and the whole `annotation` tag and its contents.
    const semanticsEndingTagRegex = /(<\/mrow>)?\s*<annotation[\W\w]*?<\/semantics>/gm;
    return mathml.replace(semanticsStartingTagRegex, '').replace(semanticsEndingTagRegex, '');
  }

  /**
   * Transforms all xml mathml occurrences that contain semantics to the same
   * xml mathml occurrences without semantics.
   * @param {string} text - string that can contain xml mathml occurrences.
   * @param {Constants} [characters] - Constant object containing xmlCharacters
   * or safeXmlCharacters relation.
   * xmlCharacters by default.
   * @returns {string} - 'text' with all xml mathml occurrences without annotation tag.
   */
  static removeSemanticsOcurrences(text, characters = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters) {
    const mathTagStart = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    const mathTagEndline = `/${characters.tagCloser}`;
    const {
      tagCloser
    } = characters;
    const semanticsTagStart = `${characters.tagOpener}semantics${characters.tagCloser}`;
    const annotationTagStart = `${characters.tagOpener}annotation encoding=`;
    let output = '';
    let start = text.indexOf(mathTagStart);
    let end = 0;
    while (start !== -1) {
      output += text.substring(end, start);

      // MathML can be written as '<math></math>' or '<math />'.
      const mathTagEndIndex = text.indexOf(mathTagEnd, start);
      const mathTagEndlineIndex = text.indexOf(mathTagEndline, start);
      const firstTagCloser = text.indexOf(tagCloser, start);
      if (mathTagEndIndex !== -1) {
        end = mathTagEndIndex;
      } else if (mathTagEndlineIndex === firstTagCloser - 1) {
        end = mathTagEndlineIndex;
      }
      const semanticsIndex = text.indexOf(semanticsTagStart, start);
      if (semanticsIndex !== -1) {
        const mmlTagStart = text.substring(start, semanticsIndex);
        const annotationIndex = text.indexOf(annotationTagStart, start);
        if (annotationIndex !== -1) {
          const startIndex = semanticsIndex + semanticsTagStart.length;
          const mmlContent = text.substring(startIndex, annotationIndex);
          output += mmlTagStart + mmlContent + mathTagEnd;
          start = text.indexOf(mathTagStart, start + mathTagStart.length);
          end += mathTagEnd.length;
        } else {
          end = start;
          start = text.indexOf(mathTagStart, start + mathTagStart.length);
        }
      } else {
        end = start;
        start = text.indexOf(mathTagStart, start + mathTagStart.length);
      }
    }
    output += text.substring(end, text.length);
    return output;
  }

  /**
   * Returns true if a MathML contains a certain class.
   * @param {string} mathML - input MathML.
   * @param {string} className - className.
   * @returns {boolean} true if the input MathML contains the input class.
   * false otherwise.
   * @static
   */
  static containClass(mathML, className) {
    const classIndex = mathML.indexOf('class');
    if (classIndex === -1) {
      return false;
    }
    const classTagEndIndex = mathML.indexOf('>', classIndex);
    const classTag = mathML.substring(classIndex, classTagEndIndex);
    if (classTag.indexOf(className) !== -1) {
      return true;
    }
    return false;
  }

  /**
   * Returns true if mathml is empty. Otherwise, false.
   * @param {string} mathml - valid MathML with standard XML tags.
   * @returns {boolean} - true if mathml is empty. Otherwise, false.
   */
  static isEmpty(mathml) {
    // MathML can have the shape <math></math> or '<math />'.
    const closeTag = '>';
    const closeTagInline = '/>';
    const firstCloseTagIndex = mathml.indexOf(closeTag);
    const firstCloseTagInlineIndex = mathml.indexOf(closeTagInline);
    let empty = false;
    // MathML is always empty in the second shape.
    if (firstCloseTagInlineIndex !== -1) {
      if (firstCloseTagInlineIndex === firstCloseTagIndex - 1) {
        empty = true;
      }
    }

    // MathML is always empty in the first shape when there aren't elements
    // between math tags.
    if (!empty) {
      const mathTagEndRegex = new RegExp('</(.+:)?math>');
      const mathTagEndArray = mathTagEndRegex.exec(mathml);
      if (mathTagEndArray) {
        empty = firstCloseTagIndex + 1 === mathTagEndArray.index;
      }
    }
    return empty;
  }

  /**
   * Encodes html entities inside properties.
   * @param {String} mathml - valid MathML with standard XML tags.
   * @returns {String} - 'mathml' with property entities encoded.
   */
  static encodeProperties(mathml) {
    // Search all the properties.
    const regex = /\w+=".*?"/g;
    // Encode html entities.
    const replacer = match => {
      // It has the shape:
      // <math propertyOne="somethingOne"><children propertyTwo="somethingTwo"></children></math>.
      const quoteIndex = match.indexOf('"');
      const propertyValue = match.substring(quoteIndex + 1, match.length - 1);
      const propertyValueEncoded = _util__WEBPACK_IMPORTED_MODULE_1__["default"].htmlEntities(propertyValue);
      const matchEncoded = `${match.substring(0, quoteIndex + 1)}${propertyValueEncoded}"`;
      return matchEncoded;
    };
    const mathmlEncoded = mathml.replace(regex, replacer);
    return mathmlEncoded;
  }
}

/***/ }),

/***/ "../devkit/src/md5.js":
/*!****************************!*\
  !*** ../devkit/src/md5.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var md5;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);
(function () {
  var HxOverrides = function () {};
  HxOverrides.__name__ = true;
  HxOverrides.dateStr = function (date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
  };
  HxOverrides.strDate = function (s) {
    switch (s.length) {
      case 8:
        var k = s.split(":");
        var d = new Date();
        d.setTime(0);
        d.setUTCHours(k[0]);
        d.setUTCMinutes(k[1]);
        d.setUTCSeconds(k[2]);
        return d;
      case 10:
        var k = s.split("-");
        return new Date(k[0], k[1] - 1, k[2], 0, 0, 0);
      case 19:
        var k = s.split(" ");
        var y = k[0].split("-");
        var t = k[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s;
    }
  };
  HxOverrides.cca = function (s, index) {
    var x = s.charCodeAt(index);
    if (x != x) return undefined;
    return x;
  };
  HxOverrides.substr = function (s, pos, len) {
    if (pos != null && pos != 0 && len != null && len < 0) return "";
    if (len == null) len = s.length;
    if (pos < 0) {
      pos = s.length + pos;
      if (pos < 0) pos = 0;
    } else if (len < 0) len = s.length + len - pos;
    return s.substr(pos, len);
  };
  HxOverrides.remove = function (a, obj) {
    var i = 0;
    var l = a.length;
    while (i < l) {
      if (a[i] == obj) {
        a.splice(i, 1);
        return true;
      }
      i++;
    }
    return false;
  };
  HxOverrides.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur < this.arr.length;
      },
      next: function () {
        return this.arr[this.cur++];
      }
    };
  };
  var IntIter = function (min, max) {
    this.min = min;
    this.max = max;
  };
  IntIter.__name__ = true;
  IntIter.prototype = {
    next: function () {
      return this.min++;
    },
    hasNext: function () {
      return this.min < this.max;
    },
    __class__: IntIter
  };
  var Std = function () {};
  Std.__name__ = true;
  Std["is"] = function (v, t) {
    return js.Boot.__instanceof(v, t);
  };
  Std.string = function (s) {
    return js.Boot.__string_rec(s, "");
  };
  Std["int"] = function (x) {
    return x | 0;
  };
  Std.parseInt = function (x) {
    var v = parseInt(x, 10);
    if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
    if (isNaN(v)) return null;
    return v;
  };
  Std.parseFloat = function (x) {
    return parseFloat(x);
  };
  Std.random = function (x) {
    return Math.floor(Math.random() * x);
  };
  var com = com || {};
  if (!com.wiris) com.wiris = {};
  if (!com.wiris.js) com.wiris.js = {};
  com.wiris.js.JsPluginTools = function () {
    this.tryReady();
  };
  com.wiris.js.JsPluginTools.__name__ = true;
  com.wiris.js.JsPluginTools.main = function () {
    var ev;
    ev = com.wiris.js.JsPluginTools.getInstance();
    haxe.Timer.delay($bind(ev, ev.tryReady), 100);
  };
  com.wiris.js.JsPluginTools.getInstance = function () {
    if (com.wiris.js.JsPluginTools.instance == null) com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools();
    return com.wiris.js.JsPluginTools.instance;
  };
  com.wiris.js.JsPluginTools.bypassEncapsulation = function () {
    if (window.com == null) window.com = {};
    if (window.com.wiris == null) window.com.wiris = {};
    if (window.com.wiris.js == null) window.com.wiris.js = {};
    if (window.com.wiris.js.JsPluginTools == null) window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance();
  };
  com.wiris.js.JsPluginTools.prototype = {
    md5encode: function (content) {
      return haxe.Md5.encode(content);
    },
    doLoad: function () {
      this.ready = true;
      com.wiris.js.JsPluginTools.instance = this;
      com.wiris.js.JsPluginTools.bypassEncapsulation();
    },
    tryReady: function () {
      this.ready = false;
      if (js.Lib.document.readyState) {
        this.doLoad();
        this.ready = true;
      }
      if (!this.ready) haxe.Timer.delay($bind(this, this.tryReady), 100);
    },
    __class__: com.wiris.js.JsPluginTools
  };
  var haxe = haxe || {};
  haxe.Log = function () {};
  haxe.Log.__name__ = true;
  haxe.Log.trace = function (v, infos) {
    js.Boot.__trace(v, infos);
  };
  haxe.Log.clear = function () {
    js.Boot.__clear_trace();
  };
  haxe.Md5 = function () {};
  haxe.Md5.__name__ = true;
  haxe.Md5.encode = function (s) {
    return new haxe.Md5().doEncode(s);
  };
  haxe.Md5.prototype = {
    doEncode: function (str) {
      var x = this.str2blks(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var step;
      var i = 0;
      while (i < x.length) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        step = 0;
        a = this.ff(a, b, c, d, x[i], 7, -680876936);
        d = this.ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.gg(b, c, d, a, x[i], 20, -373897302);
        a = this.gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.hh(d, a, b, c, x[i], 11, -358537222);
        c = this.hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.ii(a, b, c, d, x[i], 6, -198630844);
        d = this.ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.addme(a, olda);
        b = this.addme(b, oldb);
        c = this.addme(c, oldc);
        d = this.addme(d, oldd);
        i += 16;
      }
      return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
    },
    ii: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, x, s, t);
    },
    hh: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, x, s, t);
    },
    gg: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, x, s, t);
    },
    ff: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, x, s, t);
    },
    cmn: function (q, a, b, x, s, t) {
      return this.addme(this.rol(this.addme(this.addme(a, q), this.addme(x, t)), s), b);
    },
    rol: function (num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    },
    str2blks: function (str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array();
      var _g1 = 0,
        _g = nblk * 16;
      while (_g1 < _g) {
        var i = _g1++;
        blks[i] = 0;
      }
      var i = 0;
      while (i < str.length) {
        blks[i >> 2] |= HxOverrides.cca(str, i) << (str.length * 8 + i) % 4 * 8;
        i++;
      }
      blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
      var l = str.length * 8;
      var k = nblk * 16 - 2;
      blks[k] = l & 255;
      blks[k] |= (l >>> 8 & 255) << 8;
      blks[k] |= (l >>> 16 & 255) << 16;
      blks[k] |= (l >>> 24 & 255) << 24;
      return blks;
    },
    rhex: function (num) {
      var str = "";
      var hex_chr = "0123456789abcdef";
      var _g = 0;
      while (_g < 4) {
        var j = _g++;
        str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
      }
      return str;
    },
    addme: function (x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    },
    bitAND: function (a, b) {
      var lsb = a & 1 & (b & 1);
      var msb31 = a >>> 1 & b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitXOR: function (a, b) {
      var lsb = a & 1 ^ b & 1;
      var msb31 = a >>> 1 ^ b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitOR: function (a, b) {
      var lsb = a & 1 | b & 1;
      var msb31 = a >>> 1 | b >>> 1;
      return msb31 << 1 | lsb;
    },
    __class__: haxe.Md5
  };
  haxe.Timer = function (time_ms) {
    var me = this;
    this.id = window.setInterval(function () {
      me.run();
    }, time_ms);
  };
  haxe.Timer.__name__ = true;
  haxe.Timer.delay = function (f, time_ms) {
    var t = new haxe.Timer(time_ms);
    t.run = function () {
      t.stop();
      f();
    };
    return t;
  };
  haxe.Timer.measure = function (f, pos) {
    var t0 = haxe.Timer.stamp();
    var r = f();
    haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos);
    return r;
  };
  haxe.Timer.stamp = function () {
    return new Date().getTime() / 1000;
  };
  haxe.Timer.prototype = {
    run: function () {},
    stop: function () {
      if (this.id == null) return;
      window.clearInterval(this.id);
      this.id = null;
    },
    __class__: haxe.Timer
  };
  var js = js || {};
  js.Boot = function () {};
  js.Boot.__name__ = true;
  js.Boot.__unhtml = function (s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  };
  js.Boot.__trace = function (v, i) {
    var msg = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
    msg += js.Boot.__string_rec(v, "");
    var d;
    if (typeof document != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";else if (typeof console != "undefined" && console.log != null) console.log(msg);
  };
  js.Boot.__clear_trace = function () {
    var d = document.getElementById("haxe:trace");
    if (d != null) d.innerHTML = "";
  };
  js.Boot.isClass = function (o) {
    return o.__name__;
  };
  js.Boot.isEnum = function (e) {
    return e.__ename__;
  };
  js.Boot.getClass = function (o) {
    return o.__class__;
  };
  js.Boot.__string_rec = function (o, s) {
    if (o == null) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof o;
    if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
    switch (t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (o.length == 2) return o[0];
            var str = o[0] + "(";
            s += "\t";
            var _g1 = 2,
              _g = o.length;
            while (_g1 < _g) {
              var i = _g1++;
              if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);else str += js.Boot.__string_rec(o[i], s);
            }
            return str + ")";
          }
          var l = o.length;
          var i;
          var str = "[";
          s += "\t";
          var _g = 0;
          while (_g < l) {
            var i1 = _g++;
            str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
          }
          str += "]";
          return str;
        }
        var tostr;
        try {
          tostr = o.toString;
        } catch (e) {
          return "???";
        }
        if (tostr != null && tostr != Object.toString) {
          var s2 = o.toString();
          if (s2 != "[object Object]") return s2;
        }
        var k = null;
        var str = "{\n";
        s += "\t";
        var hasp = o.hasOwnProperty != null;
        for (var k in o) {
          ;
          if (hasp && !o.hasOwnProperty(k)) {
            continue;
          }
          if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
            continue;
          }
          if (str.length != 2) str += ", \n";
          str += s + k + " : " + js.Boot.__string_rec(o[k], s);
        }
        s = s.substring(1);
        str += "\n" + s + "}";
        return str;
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o);
    }
  };
  js.Boot.__interfLoop = function (cc, cl) {
    if (cc == null) return false;
    if (cc == cl) return true;
    var intf = cc.__interfaces__;
    if (intf != null) {
      var _g1 = 0,
        _g = intf.length;
      while (_g1 < _g) {
        var i = _g1++;
        var i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
      }
    }
    return js.Boot.__interfLoop(cc.__super__, cl);
  };
  js.Boot.__instanceof = function (o, cl) {
    try {
      if (o instanceof cl) {
        if (cl == Array) return o.__enum__ == null;
        return true;
      }
      if (js.Boot.__interfLoop(o.__class__, cl)) return true;
    } catch (e) {
      if (cl == null) return false;
    }
    switch (cl) {
      case Int:
        return Math.ceil(o % 2147483648.0) === o;
      case Float:
        return typeof o == "number";
      case Bool:
        return o === true || o === false;
      case String:
        return typeof o == "string";
      case Dynamic:
        return true;
      default:
        if (o == null) return false;
        if (cl == Class && o.__name__ != null) return true;else null;
        if (cl == Enum && o.__ename__ != null) return true;else null;
        return o.__enum__ == cl;
    }
  };
  js.Boot.__cast = function (o, t) {
    if (js.Boot.__instanceof(o, t)) return o;else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
  };
  js.Lib = function () {};
  js.Lib.__name__ = true;
  js.Lib.debug = function () {
    debugger;
  };
  js.Lib.alert = function (v) {
    alert(js.Boot.__string_rec(v, ""));
  };
  js.Lib.eval = function (code) {
    return eval(code);
  };
  js.Lib.setErrorHandler = function (f) {
    js.Lib.onerror = f;
  };
  var $_;
  function $bind(o, m) {
    var f = function () {
      return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
  }
  ;
  if (Array.prototype.indexOf) HxOverrides.remove = function (a, o) {
    var i = a.indexOf(o);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };else null;
  Math.__name__ = ["Math"];
  Math.NaN = Number.NaN;
  Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  Math.isFinite = function (i) {
    return isFinite(i);
  };
  Math.isNaN = function (i) {
    return isNaN(i);
  };
  String.prototype.__class__ = String;
  String.__name__ = true;
  Array.prototype.__class__ = Array;
  Array.__name__ = true;
  Date.prototype.__class__ = Date;
  Date.__name__ = ["Date"];
  var Int = {
    __name__: ["Int"]
  };
  var Dynamic = {
    __name__: ["Dynamic"]
  };
  var Float = Number;
  Float.__name__ = ["Float"];
  var Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = {
    __name__: ["Class"]
  };
  var Enum = {};
  var Void = {
    __ename__: ["Void"]
  };
  if (typeof document != "undefined") js.Lib.document = document;
  if (typeof window != "undefined") {
    js.Lib.window = window;
    js.Lib.window.onerror = function (msg, url, line) {
      var f = js.Lib.onerror;
      if (f == null) return false;
      return f(msg, [url + ":" + line]);
    };
  }
  com.wiris.js.JsPluginTools.main();
  delete Array.prototype.__class__;
})();
(function () {
  var HxOverrides = function () {};
  HxOverrides.__name__ = true;
  HxOverrides.dateStr = function (date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
  };
  HxOverrides.strDate = function (s) {
    switch (s.length) {
      case 8:
        var k = s.split(":");
        var d = new Date();
        d.setTime(0);
        d.setUTCHours(k[0]);
        d.setUTCMinutes(k[1]);
        d.setUTCSeconds(k[2]);
        return d;
      case 10:
        var k = s.split("-");
        return new Date(k[0], k[1] - 1, k[2], 0, 0, 0);
      case 19:
        var k = s.split(" ");
        var y = k[0].split("-");
        var t = k[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s;
    }
  };
  HxOverrides.cca = function (s, index) {
    var x = s.charCodeAt(index);
    if (x != x) return undefined;
    return x;
  };
  HxOverrides.substr = function (s, pos, len) {
    if (pos != null && pos != 0 && len != null && len < 0) return "";
    if (len == null) len = s.length;
    if (pos < 0) {
      pos = s.length + pos;
      if (pos < 0) pos = 0;
    } else if (len < 0) len = s.length + len - pos;
    return s.substr(pos, len);
  };
  HxOverrides.remove = function (a, obj) {
    var i = 0;
    var l = a.length;
    while (i < l) {
      if (a[i] == obj) {
        a.splice(i, 1);
        return true;
      }
      i++;
    }
    return false;
  };
  HxOverrides.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur < this.arr.length;
      },
      next: function () {
        return this.arr[this.cur++];
      }
    };
  };
  var IntIter = function (min, max) {
    this.min = min;
    this.max = max;
  };
  IntIter.__name__ = true;
  IntIter.prototype = {
    next: function () {
      return this.min++;
    },
    hasNext: function () {
      return this.min < this.max;
    },
    __class__: IntIter
  };
  var Std = function () {};
  Std.__name__ = true;
  Std["is"] = function (v, t) {
    return js.Boot.__instanceof(v, t);
  };
  Std.string = function (s) {
    return js.Boot.__string_rec(s, "");
  };
  Std["int"] = function (x) {
    return x | 0;
  };
  Std.parseInt = function (x) {
    var v = parseInt(x, 10);
    if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
    if (isNaN(v)) return null;
    return v;
  };
  Std.parseFloat = function (x) {
    return parseFloat(x);
  };
  Std.random = function (x) {
    return Math.floor(Math.random() * x);
  };
  var com = com || {};
  if (!com.wiris) com.wiris = {};
  if (!com.wiris.js) com.wiris.js = {};
  com.wiris.js.JsPluginTools = function () {
    this.tryReady();
  };
  com.wiris.js.JsPluginTools.__name__ = true;
  com.wiris.js.JsPluginTools.main = function () {
    var ev;
    ev = com.wiris.js.JsPluginTools.getInstance();
    haxe.Timer.delay($bind(ev, ev.tryReady), 100);
  };
  com.wiris.js.JsPluginTools.getInstance = function () {
    if (com.wiris.js.JsPluginTools.instance == null) com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools();
    return com.wiris.js.JsPluginTools.instance;
  };
  com.wiris.js.JsPluginTools.bypassEncapsulation = function () {
    if (window.com == null) window.com = {};
    if (window.com.wiris == null) window.com.wiris = {};
    if (window.com.wiris.js == null) window.com.wiris.js = {};
    if (window.com.wiris.js.JsPluginTools == null) window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance();
  };
  com.wiris.js.JsPluginTools.prototype = {
    md5encode: function (content) {
      return haxe.Md5.encode(content);
    },
    doLoad: function () {
      this.ready = true;
      com.wiris.js.JsPluginTools.instance = this;
      com.wiris.js.JsPluginTools.bypassEncapsulation();
    },
    tryReady: function () {
      this.ready = false;
      if (js.Lib.document.readyState) {
        this.doLoad();
        this.ready = true;
      }
      if (!this.ready) haxe.Timer.delay($bind(this, this.tryReady), 100);
    },
    __class__: com.wiris.js.JsPluginTools
  };
  var haxe = haxe || {};
  haxe.Log = function () {};
  haxe.Log.__name__ = true;
  haxe.Log.trace = function (v, infos) {
    js.Boot.__trace(v, infos);
  };
  haxe.Log.clear = function () {
    js.Boot.__clear_trace();
  };
  haxe.Md5 = function () {};
  haxe.Md5.__name__ = true;
  haxe.Md5.encode = function (s) {
    return new haxe.Md5().doEncode(s);
  };
  haxe.Md5.prototype = {
    doEncode: function (str) {
      var x = this.str2blks(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var step;
      var i = 0;
      while (i < x.length) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        step = 0;
        a = this.ff(a, b, c, d, x[i], 7, -680876936);
        d = this.ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.gg(b, c, d, a, x[i], 20, -373897302);
        a = this.gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.hh(d, a, b, c, x[i], 11, -358537222);
        c = this.hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.ii(a, b, c, d, x[i], 6, -198630844);
        d = this.ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.addme(a, olda);
        b = this.addme(b, oldb);
        c = this.addme(c, oldc);
        d = this.addme(d, oldd);
        i += 16;
      }
      return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
    },
    ii: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, x, s, t);
    },
    hh: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, x, s, t);
    },
    gg: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, x, s, t);
    },
    ff: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, x, s, t);
    },
    cmn: function (q, a, b, x, s, t) {
      return this.addme(this.rol(this.addme(this.addme(a, q), this.addme(x, t)), s), b);
    },
    rol: function (num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    },
    str2blks: function (str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array();
      var _g1 = 0,
        _g = nblk * 16;
      while (_g1 < _g) {
        var i = _g1++;
        blks[i] = 0;
      }
      var i = 0;
      while (i < str.length) {
        blks[i >> 2] |= HxOverrides.cca(str, i) << (str.length * 8 + i) % 4 * 8;
        i++;
      }
      blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
      var l = str.length * 8;
      var k = nblk * 16 - 2;
      blks[k] = l & 255;
      blks[k] |= (l >>> 8 & 255) << 8;
      blks[k] |= (l >>> 16 & 255) << 16;
      blks[k] |= (l >>> 24 & 255) << 24;
      return blks;
    },
    rhex: function (num) {
      var str = "";
      var hex_chr = "0123456789abcdef";
      var _g = 0;
      while (_g < 4) {
        var j = _g++;
        str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
      }
      return str;
    },
    addme: function (x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    },
    bitAND: function (a, b) {
      var lsb = a & 1 & (b & 1);
      var msb31 = a >>> 1 & b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitXOR: function (a, b) {
      var lsb = a & 1 ^ b & 1;
      var msb31 = a >>> 1 ^ b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitOR: function (a, b) {
      var lsb = a & 1 | b & 1;
      var msb31 = a >>> 1 | b >>> 1;
      return msb31 << 1 | lsb;
    },
    __class__: haxe.Md5
  };
  haxe.Timer = function (time_ms) {
    var me = this;
    this.id = window.setInterval(function () {
      me.run();
    }, time_ms);
  };
  haxe.Timer.__name__ = true;
  haxe.Timer.delay = function (f, time_ms) {
    var t = new haxe.Timer(time_ms);
    t.run = function () {
      t.stop();
      f();
    };
    return t;
  };
  haxe.Timer.measure = function (f, pos) {
    var t0 = haxe.Timer.stamp();
    var r = f();
    haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos);
    return r;
  };
  haxe.Timer.stamp = function () {
    return new Date().getTime() / 1000;
  };
  haxe.Timer.prototype = {
    run: function () {},
    stop: function () {
      if (this.id == null) return;
      window.clearInterval(this.id);
      this.id = null;
    },
    __class__: haxe.Timer
  };
  var js = js || {};
  js.Boot = function () {};
  js.Boot.__name__ = true;
  js.Boot.__unhtml = function (s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  };
  js.Boot.__trace = function (v, i) {
    var msg = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
    msg += js.Boot.__string_rec(v, "");
    var d;
    if (typeof document != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";else if (typeof console != "undefined" && console.log != null) console.log(msg);
  };
  js.Boot.__clear_trace = function () {
    var d = document.getElementById("haxe:trace");
    if (d != null) d.innerHTML = "";
  };
  js.Boot.isClass = function (o) {
    return o.__name__;
  };
  js.Boot.isEnum = function (e) {
    return e.__ename__;
  };
  js.Boot.getClass = function (o) {
    return o.__class__;
  };
  js.Boot.__string_rec = function (o, s) {
    if (o == null) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof o;
    if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
    switch (t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (o.length == 2) return o[0];
            var str = o[0] + "(";
            s += "\t";
            var _g1 = 2,
              _g = o.length;
            while (_g1 < _g) {
              var i = _g1++;
              if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);else str += js.Boot.__string_rec(o[i], s);
            }
            return str + ")";
          }
          var l = o.length;
          var i;
          var str = "[";
          s += "\t";
          var _g = 0;
          while (_g < l) {
            var i1 = _g++;
            str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
          }
          str += "]";
          return str;
        }
        var tostr;
        try {
          tostr = o.toString;
        } catch (e) {
          return "???";
        }
        if (tostr != null && tostr != Object.toString) {
          var s2 = o.toString();
          if (s2 != "[object Object]") return s2;
        }
        var k = null;
        var str = "{\n";
        s += "\t";
        var hasp = o.hasOwnProperty != null;
        for (var k in o) {
          ;
          if (hasp && !o.hasOwnProperty(k)) {
            continue;
          }
          if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
            continue;
          }
          if (str.length != 2) str += ", \n";
          str += s + k + " : " + js.Boot.__string_rec(o[k], s);
        }
        s = s.substring(1);
        str += "\n" + s + "}";
        return str;
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o);
    }
  };
  js.Boot.__interfLoop = function (cc, cl) {
    if (cc == null) return false;
    if (cc == cl) return true;
    var intf = cc.__interfaces__;
    if (intf != null) {
      var _g1 = 0,
        _g = intf.length;
      while (_g1 < _g) {
        var i = _g1++;
        var i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
      }
    }
    return js.Boot.__interfLoop(cc.__super__, cl);
  };
  js.Boot.__instanceof = function (o, cl) {
    try {
      if (o instanceof cl) {
        if (cl == Array) return o.__enum__ == null;
        return true;
      }
      if (js.Boot.__interfLoop(o.__class__, cl)) return true;
    } catch (e) {
      if (cl == null) return false;
    }
    switch (cl) {
      case Int:
        return Math.ceil(o % 2147483648.0) === o;
      case Float:
        return typeof o == "number";
      case Bool:
        return o === true || o === false;
      case String:
        return typeof o == "string";
      case Dynamic:
        return true;
      default:
        if (o == null) return false;
        if (cl == Class && o.__name__ != null) return true;else null;
        if (cl == Enum && o.__ename__ != null) return true;else null;
        return o.__enum__ == cl;
    }
  };
  js.Boot.__cast = function (o, t) {
    if (js.Boot.__instanceof(o, t)) return o;else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
  };
  js.Lib = function () {};
  js.Lib.__name__ = true;
  js.Lib.debug = function () {
    debugger;
  };
  js.Lib.alert = function (v) {
    alert(js.Boot.__string_rec(v, ""));
  };
  js.Lib.eval = function (code) {
    return eval(code);
  };
  js.Lib.setErrorHandler = function (f) {
    js.Lib.onerror = f;
  };
  var $_;
  function $bind(o, m) {
    var f = function () {
      return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
  }
  ;
  if (Array.prototype.indexOf) HxOverrides.remove = function (a, o) {
    var i = a.indexOf(o);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };else null;
  Math.__name__ = ["Math"];
  Math.NaN = Number.NaN;
  Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  Math.isFinite = function (i) {
    return isFinite(i);
  };
  Math.isNaN = function (i) {
    return isNaN(i);
  };
  String.prototype.__class__ = String;
  String.__name__ = true;
  Array.prototype.__class__ = Array;
  Array.__name__ = true;
  Date.prototype.__class__ = Date;
  Date.__name__ = ["Date"];
  var Int = {
    __name__: ["Int"]
  };
  var Dynamic = {
    __name__: ["Dynamic"]
  };
  var Float = Number;
  Float.__name__ = ["Float"];
  var Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = {
    __name__: ["Class"]
  };
  var Enum = {};
  var Void = {
    __ename__: ["Void"]
  };
  if (typeof document != "undefined") js.Lib.document = document;
  if (typeof window != "undefined") {
    js.Lib.window = window;
    js.Lib.window.onerror = function (msg, url, line) {
      var f = js.Lib.onerror;
      if (f == null) return false;
      return f(msg, [url + ":" + line]);
    };
  }
  com.wiris.js.JsPluginTools.main();
})();
delete Array.prototype.__class__;
// @codingStandardsIgnoreEnd

/***/ }),

/***/ "../devkit/src/parser.js":
/*!*******************************!*\
  !*** ../devkit/src/parser.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");
/* harmony import */ var _latex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latex */ "../devkit/src/latex.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "../devkit/src/image.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessibility */ "../devkit/src/accessibility.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md5 */ "../devkit/src/md5.js");








// eslint-disable-next-line no-unused-vars


/**
 * @classdesc
 * This class represent a MahML parser. Converts MathML into formulas depending on the
 * image format (SVG, PNG, base64) and the save mode (XML, safeXML, Image) configured
 * in the backend.
 */
class Parser {
  /**
   * Converts a MathML string to an img element.
   * @param {Document} creator - Document object to call createElement method.
   * @param {string} mathml - MathML code
   * @param {Object[]} wirisProperties - object containing WIRIS custom properties
   * @param {language} language - custom language for accessibility.
   * @returns {HTMLImageElement} the formula image corresponding to initial MathML string.
   * @static
   */
  static mathmlToImgObject(creator, mathml, wirisProperties, language) {
    const imgObject = creator.createElement('img');
    imgObject.align = 'middle';
    imgObject.style.maxWidth = 'none';
    let data = wirisProperties || {};

    // Take into account the backend config
    const wirisEditorProperties = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get("editorParameters");
    data = {
      ...wirisEditorProperties,
      ...data
    };
    data.mml = mathml;
    data.lang = language;
    // Request metrics of the generated image.
    data.metrics = 'true';
    data.centerbaseline = 'false';

    // Full base64 method (edit & save).
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default') {
      data.base64 = true;
    }

    // Render js params: _wrs_int_wirisProperties contains some js render params.
    // Since MathML can support render params, js params should be send only to editor.

    imgObject.className = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName');
    if (mathml.indexOf('class="') !== -1) {
      // We check here if the MathML has been created from a customEditor (such chemistry)
      // to add custom editor name attribute to img object (if necessary).
      let mathmlSubstring = mathml.substring(mathml.indexOf('class="') + 'class="'.length, mathml.length);
      mathmlSubstring = mathmlSubstring.substring(0, mathmlSubstring.indexOf('"'));
      mathmlSubstring = mathmlSubstring.substring(4, mathmlSubstring.length);
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageCustomEditorName'), mathmlSubstring);
    }

    // Performance enabled.
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('wirisPluginPerformance') && (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml' || _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml')) {
      let result = JSON.parse(Parser.createShowImageSrc(data, language));
      if (result.status === 'warning') {
        // POST call.
        // if the mathml is malformed, this function will throw an exception.
        try {
          result = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('showimage', data));
        } catch (e) {
          return null;
        }
      }
      ({
        result
      } = result);
      if (result.format === 'png') {
        imgObject.src = `data:image/png;base64,${result.content}`;
      } else {
        imgObject.src = `data:image/svg+xml;charset=utf8,${_util__WEBPACK_IMPORTED_MODULE_0__["default"].urlEncode(result.content)}`;
      }
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'), _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlEncode(mathml));
      _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgObject, result.content, true);
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('enableAccessibility')) {
        if (typeof result.alt === 'undefined') {
          imgObject.alt = _accessibility__WEBPACK_IMPORTED_MODULE_4__["default"].mathMLToAccessible(mathml, language, data);
        } else {
          imgObject.alt = result.alt;
        }
      }
    } else {
      const result = Parser.createImageSrc(mathml, data);
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'), _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlEncode(mathml));
      imgObject.src = result;
      _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgObject, result, _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default');
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('enableAccessibility')) {
        imgObject.alt = _accessibility__WEBPACK_IMPORTED_MODULE_4__["default"].mathMLToAccessible(mathml, language, data);
      }
    }
    if (typeof Parser.observer !== 'undefined') {
      Parser.observer.observe(imgObject);
    }

    // Role math https://www.w3.org/TR/wai-aria/roles#math.
    imgObject.setAttribute('role', 'math');
    return imgObject;
  }

  /**
   * Returns the source to showimage service by calling createimage service. The
   * output of the createimage service is a URL path pointing to showimage service.
   * This method is called when performance is disabled.
   * @param {string} mathml - MathML code.
   * @param {Object[]} data - data object containing service parameters.
   * @returns {string} the showimage path.
   */
  static createImageSrc(mathml, data) {
    // Full base64 method (edit & save).
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default') {
      data.base64 = true;
    }
    let result = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('createimage', data);
    if (result.indexOf('@BASE@') !== -1) {
      // Replacing '@BASE@' with the base URL of createimage.
      const baseParts = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getServicePath('createimage').split('/');
      baseParts.pop();
      result = result.split('@BASE@').join(baseParts.join('/'));
    }
    return result;
  }

  /**
   * Parses initial HTML code. If the HTML contains data generated by WIRIS,
   * this data would be converted as following:
   * <pre>
   * MathML code: Image containing the corresponding MathML formulas.
   * MathML code with LaTeX annotation : LaTeX string.
   * </pre>
   * @param {string} code - HTML code containing MathML data.
   * @param {string} language - language to create image alt text.
   * @returns {string} HTML code with the original MathML converted into LaTeX and images.
   */
  static initParse(code, language) {
    /* Note: The code inside this function has been inverted.
    If you invert again the code then you cannot use correctly LaTeX
    in Moodle.
    */
    code = Parser.initParseSaveMode(code, language);
    return Parser.initParseEditMode(code);
  }

  /**
   * Parses initial HTML code depending on the save mode. Transforms all MathML
   * occurrences for it's correspondent image or LaTeX.
   * @param {string} code - HTML code to be parsed
   * @param {string} language - language to create image alt text.
   * @returns {string} HTML code parsed.
   */
  static initParseSaveMode(code, language) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
      // Converting XML to tags.
      code = _latex__WEBPACK_IMPORTED_MODULE_1__["default"].parseMathmlToLatex(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters);
      code = _latex__WEBPACK_IMPORTED_MODULE_1__["default"].parseMathmlToLatex(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].xmlCharacters);
      code = Parser.parseMathmlToImg(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters, language);
      code = Parser.parseMathmlToImg(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].xmlCharacters, language);
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'image') {
        code = Parser.codeImgTransform(code, 'base642showimage');
      }
    }
    return code;
  }

  /**
   * Parses initial HTML code depending on the edit mode.
   * If 'latex' parseMode is enabled all MathML containing an annotation with encoding='LaTeX' will
   * be converted into a LaTeX string instead of an image.
   * @param {string} code - HTML code containing MathML.
   * @returns {string} parsed HTML code.
   */
  static initParseEditMode(code) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('parseModes').indexOf('latex') !== -1) {
      const imgList = _util__WEBPACK_IMPORTED_MODULE_0__["default"].getElementsByNameFromString(code, 'img', true);
      const token = 'encoding="LaTeX">';
      // While replacing images with latex, the indexes of the found images changes
      // respecting the original code, so this carry is needed.
      let carry = 0;
      for (let i = 0; i < imgList.length; i += 1) {
        const imgCode = code.substring(imgList[i].start + carry, imgList[i].end + carry);
        if (imgCode.indexOf(` class="${_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName')}"`) !== -1) {
          let mathmlStartToken = ` ${_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute')}="`;
          let mathmlStart = imgCode.indexOf(mathmlStartToken);
          if (mathmlStart === -1) {
            mathmlStartToken = ' alt="';
            mathmlStart = imgCode.indexOf(mathmlStartToken);
          }
          if (mathmlStart !== -1) {
            mathmlStart += mathmlStartToken.length;
            const mathmlEnd = imgCode.indexOf('"', mathmlStart);
            const mathml = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlSanitize(_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(imgCode.substring(mathmlStart, mathmlEnd)));
            let latexStartPosition = mathml.indexOf(token);
            if (latexStartPosition !== -1) {
              latexStartPosition += token.length;
              const latexEndPosition = mathml.indexOf('</annotation>', latexStartPosition);
              const latex = mathml.substring(latexStartPosition, latexEndPosition);
              const replaceText = `$$${_util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEntitiesDecode(latex)}$$`;
              const start = code.substring(0, imgList[i].start + carry);
              const end = code.substring(imgList[i].end + carry);
              code = start + replaceText + end;
              carry += replaceText.length - (imgList[i].end - imgList[i].start);
            }
          }
        }
      }
    }
    return code;
  }

  /**
   * Parses end HTML code. The end HTML code is HTML code with embedded images
   * or LaTeX formulas created with MathType. <br>
   * By default this method converts the formula images and LaTeX strings in MathML. <br>
   * If image mode is enabled the images will not be converted into MathML. For further information see {@link https://docs.wiris.com/mathtype/en/mathtype-integrations/mathtype-web-interface-features/full-mathml-mode---wirisplugins-js.html}.
   * @param {string} code - HTML to be parsed
   * @returns {string} the HTML code parsed.
   */
  static endParse(code) {
    // Transform LaTeX ocurrences to MathML elements.
    const codeEndParsedEditMode = Parser.endParseEditMode(code);
    // Transform img elements to MathML elements.
    const codeEndParseSaveMode = Parser.endParseSaveMode(codeEndParsedEditMode);
    return codeEndParseSaveMode;
  }

  /**
   * Parses end HTML code depending on the edit mode.
   * - LaTeX is an enabled parse mode, all LaTeX occurrences will be converted into MathML.
   * @param {string} code - HTML code to be parsed.
   * @returns {string} HTML code parsed.
   */
  static endParseEditMode(code) {
    // Converting LaTeX to images.
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('parseModes').indexOf('latex') !== -1) {
      let output = '';
      let endPosition = 0;
      let startPosition = code.indexOf('$$');
      while (startPosition !== -1) {
        output += code.substring(endPosition, startPosition);
        endPosition = code.indexOf('$$', startPosition + 2);
        if (endPosition !== -1) {
          // Before, it was a condition here to execute the next codelines
          // 'latex.indexOf('<') == -1'.
          // We don't know why it was used, but seems to have a conflict with
          // latex formulas that contains '<'.
          const latex = code.substring(startPosition + 2, endPosition);
          const decodedLatex = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEntitiesDecode(latex);
          let mathml = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlSanitize(_latex__WEBPACK_IMPORTED_MODULE_1__["default"].getMathMLFromLatex(decodedLatex, true));
          if (!_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveHandTraces')) {
            // Remove hand traces.
            mathml = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].removeAnnotation(mathml, 'application/json');
          }
          output += mathml;
          endPosition += 2;
        } else {
          output += '$$';
          endPosition = startPosition + 2;
        }
        startPosition = code.indexOf('$$', endPosition);
      }
      output += code.substring(endPosition, code.length);
      code = output;
    }
    return code;
  }

  /**
   * Parses end HTML code depending on the save mode. Converts all
   * images into the element determined by the save mode:
   * - xml: Parses images formulas into MathML.
   * - safeXml: Parses images formulas into safeMAthML
   * - base64: Parses images into base64 images.
   * - image: Parse images into images (no parsing)
   * @param {string} code - HTML code to be parsed
   * @returns {string} HTML code parsed.
   */
  static endParseSaveMode(code) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml') {
        code = Parser.codeImgTransform(code, 'img2mathml');
      } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml') {
        code = Parser.codeImgTransform(code, 'img2mathml');
      } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'image') {
        code = Parser.codeImgTransform(code, 'img264');
      }
    }
    return code;
  }

  /**
   * Auxiliar function that builds the data object to send to the showimage endpoint
   * @param {Object[]} data - object containing showimage service parameters.
   * @param {string} language - string containing the language of the formula.
   * @returns {Object} JSON object with the data to send to showimage.
   */
  static createShowImageSrcData(data, language) {
    const dataMd5 = {};
    const renderParams = ['mml', 'color', 'centerbaseline', 'zoom', 'dpi', 'fontSize', 'fontFamily', 'defaultStretchy', 'backgroundColor', 'format'];
    renderParams.forEach(param => {
      if (typeof data[param] !== 'undefined') {
        dataMd5[param] = data[param];
      }
    });
    // Data variables to get.
    const dataObject = {};
    Object.keys(data).forEach(key => {
      // We don't need mathml in this request we try to get cached.
      // Only need the formula md5 calculated before.
      if (key !== 'mml') {
        dataObject[key] = data[key];
      }
    });
    dataObject.formula = com.wiris.js.JsPluginTools.md5encode(_util__WEBPACK_IMPORTED_MODULE_0__["default"].propertiesToString(dataMd5));
    dataObject.lang = typeof language === 'undefined' ? 'en' : language;
    dataObject.version = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('version');
    return dataObject;
  }

  /**
   * Returns the result to call showimage service with the formula md5 as parameter.
   *  The result could be:
   * - {'status' : warning'} : The image associated to the MathML md5 is not in cache.
   * - {'status' : 'ok' ...} : The image associated to the MathML md5 is in cache.
   * @param {Object[]} data - object containing showimage service parameters.
   * @param {string} language - string containing the language of the formula.
   * @returns {Object} JSON object containing showimage response.
   */
  static createShowImageSrc(data, language) {
    const dataObject = this.createShowImageSrcData(data, language);
    const result = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('showimage', _util__WEBPACK_IMPORTED_MODULE_0__["default"].httpBuildQuery(dataObject), true);
    return result;
  }

  /**
   * Transform html img tags inside a html code to mathml, base64 img tags (i.e with base64 on src)
   * or showimage img tags (i.e with showimage.php on src)
   * @param  {string} code - HTML code
   * @param  {string} mode - base642showimage or img2mathml or img264 transform.
   * @returns {string} html - code transformed.
   */
  static codeImgTransform(code, mode) {
    let output = '';
    let endPosition = 0;
    const pattern = /<img/gi;
    const patternLength = pattern.source.length;
    while (pattern.test(code)) {
      const startPosition = pattern.lastIndex - patternLength;
      output += code.substring(endPosition, startPosition);
      let i = startPosition + 1;
      while (i < code.length && endPosition <= startPosition) {
        const character = code.charAt(i);
        if (character === '"' || character === '\'') {
          const characterNextPosition = code.indexOf(character, i + 1);
          if (characterNextPosition === -1) {
            i = code.length; // End while.
          } else {
            i = characterNextPosition;
          }
        } else if (character === '>') {
          endPosition = i + 1;
        }
        i += 1;
      }
      if (endPosition < startPosition) {
        // The img tag is stripped.
        output += code.substring(startPosition, code.length);
        return output;
      }
      let imgCode = code.substring(startPosition, endPosition);
      const imgObject = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObject(imgCode);
      let xmlCode = imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'));
      let convertToXml;
      let convertToSafeXml;
      if (mode === 'base642showimage') {
        if (xmlCode == null) {
          xmlCode = imgObject.getAttribute('alt');
        }
        xmlCode = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(xmlCode);
        imgCode = Parser.mathmlToImgObject(document, xmlCode, null, null);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(imgCode);
      } else if (mode === 'img2mathml') {
        if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
          if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml') {
            convertToXml = true;
            convertToSafeXml = true;
          } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml') {
            convertToXml = true;
            convertToSafeXml = false;
          }
        }
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getWIRISImageOutput(imgCode, convertToXml, convertToSafeXml);
      } else if (mode === 'img264') {
        if (xmlCode === null) {
          xmlCode = imgObject.getAttribute('alt');
        }
        xmlCode = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(xmlCode);
        const properties = {};
        properties.base64 = 'true';
        imgCode = Parser.mathmlToImgObject(document, xmlCode, properties, null);
        // Metrics.
        _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgCode, imgCode.src, true);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(imgCode);
      }
    }
    output += code.substring(endPosition, code.length);
    return output;
  }

  /**
   * Converts all occurrences of MathML to the corresponding image.
   * @param {string} content - string with valid MathML code.
   * The MathML code doesn't contain semantics.
   * @param {Constants} characters - Constant object containing xmlCharacters
   * or safeXmlCharacters relation.
   * @param {string} language - a valid language code
   * in order to generate formula accessibility.
   * @returns {string} The input string with all the MathML
   * occurrences replaced by the corresponding image.
   */
  static parseMathmlToImg(content, characters, language) {
    let output = '';
    const mathTagBegin = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    let start = content.indexOf(mathTagBegin);
    let end = 0;
    while (start !== -1) {
      output += content.substring(end, start);
      // Avoid WIRIS images to be parsed.
      const imageMathmlAtrribute = content.indexOf(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'));
      end = content.indexOf(mathTagEnd, start);
      if (end === -1) {
        end = content.length - 1;
      } else if (imageMathmlAtrribute !== -1) {
        // First close tag of img attribute
        // If a mathmlAttribute exists should be inside a img tag.
        end += content.indexOf('/>', start);
      } else {
        end += mathTagEnd.length;
      }
      if (!_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].isMathmlInAttribute(content, start) && imageMathmlAtrribute === -1) {
        let mathml = content.substring(start, end);
        mathml = characters.id === _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters.id ? _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(mathml) : _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].mathMLEntities(mathml);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(Parser.mathmlToImgObject(document, mathml, null, language));
      } else {
        output += content.substring(start, end);
      }
      start = content.indexOf(mathTagBegin, end);
    }
    output += content.substring(end, content.length);
    return output;
  }
}

// Mutation observers to avoid wiris image formulas class be removed.
if (typeof MutationObserver !== 'undefined') {
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.oldValue === _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName') && mutation.attributeName === 'class' && mutation.target.className.indexOf(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName')) === -1) {
        mutation.target.className = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName');
      }
    });
  });
  Parser.observer = Object.create(mutationObserver);
  Parser.observer.Config = {
    attributes: true,
    attributeOldValue: true
  };
  // We use own default config.
  Parser.observer.observe = function (target) {
    Object.getPrototypeOf(this).observe(target, this.Config);
  };
}

/***/ }),

/***/ "../devkit/src/serviceprovider.js":
/*!****************************************!*\
  !*** ../devkit/src/serviceprovider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceProvider)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "../devkit/src/listeners.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");




/**
 * @typedef {Object} ServiceProviderProperties
 * @property {String} URI - Service URI.
 * @property {String} server - Service server language.
 */

/**
 * @classdesc
 * Class representing a serviceProvider. A serviceProvider is a class containing
 * an arbitrary number of services with the correspondent path.
 */
class ServiceProvider {
  /**
   * Returns Service Provider listeners.
   * @type {Listeners}
   */
  static get listeners() {
    return ServiceProvider._listeners;
  }

  /**
   * Adds a {@link Listener} instance to {@link ServiceProvider} class.
   * @param {Listener} listener - Instance of {@link Listener}.
   */
  static addListener(listener) {
    ServiceProvider.listeners.add(listener);
  }

  /**
   * Fires events in Service Provider.
   * @param {String} eventName - Event name.
   * @param {Event} event - Event object.
   */
  static fireEvent(eventName, event) {
    ServiceProvider.listeners.fire(eventName, event);
  }

  /**
   * Service parameters.
   * @type {ServiceProviderProperties}
   *
   */
  static get parameters() {
    return ServiceProvider._parameters;
  }

  /**
   * Service parameters.
   * @private
   * @type {ServiceProviderProperties}
   */
  static set parameters(parameters) {
    ServiceProvider._parameters = parameters;
  }

  /**
   * Static property.
   * Return service provider paths.
   * @private
   * @type {String}
   */
  static get servicePaths() {
    return ServiceProvider._servicePaths;
  }

  /**
   * Static property setter.
   * Set service paths.
   * @param {String} value - The property value.
   * @ignore
   */
  static set servicePaths(value) {
    ServiceProvider._servicePaths = value;
  }

  /**
   * Adds a new service to the ServiceProvider.
   * @param {String} service - Service name.
   * @param {String} path - Service path.
   * @static
   */
  static setServicePath(service, path) {
    ServiceProvider.servicePaths[service] = path;
  }

  /**
   * Returns the service path for a certain service.
   * @param {String} serviceName - Service name.
   * @returns {String} The service path.
   * @static
   */
  static getServicePath(serviceName) {
    return ServiceProvider.servicePaths[serviceName];
  }

  /**
   * Static property.
   * Service provider integration path.
   * @type {String}
   */
  static get integrationPath() {
    return ServiceProvider._integrationPath;
  }

  /**
   * Static property setter.
   * Set service provider integration path.
   * @param {String} value - The property value.
   * @ignore
   */
  static set integrationPath(value) {
    ServiceProvider._integrationPath = value;
  }

  /**
   * Returns the server URL in the form protocol://serverName:serverPort.
   * @return {String} The client side server path.
   */
  static getServerURL() {
    const url = window.location.href;
    const arr = url.split('/');
    const result = `${arr[0]}//${arr[2]}`;
    return result;
  }

  /**
   * Inits {@link this} class. Uses {@link this.integrationPath} as
   * base path to generate all backend services paths.
   * @param {Object} parameters - Function parameters.
   * @param {String} parameters.integrationPath - Service path.
   */
  static init(parameters) {
    ServiceProvider.parameters = parameters;
    // Services path (tech dependant).
    let configurationURI = ServiceProvider.createServiceURI('configurationjs');
    let createImageURI = ServiceProvider.createServiceURI('createimage');
    let showImageURI = ServiceProvider.createServiceURI('showimage');
    let getMathMLURI = ServiceProvider.createServiceURI('getmathml');
    let serviceURI = ServiceProvider.createServiceURI('service');

    // Some backend integrations (like Java o Ruby) have an absolute backend path,
    // for example: /app/service. For them we calculate the absolute URL path, i.e
    // protocol://domain:port/app/service
    if (ServiceProvider.parameters.URI.indexOf('/') === 0) {
      const serverPath = ServiceProvider.getServerURL();
      configurationURI = serverPath + configurationURI;
      showImageURI = serverPath + showImageURI;
      createImageURI = serverPath + createImageURI;
      getMathMLURI = serverPath + getMathMLURI;
      serviceURI = serverPath + serviceURI;
    }
    ServiceProvider.setServicePath('configurationjs', configurationURI);
    ServiceProvider.setServicePath('showimage', showImageURI);
    ServiceProvider.setServicePath('createimage', createImageURI);
    ServiceProvider.setServicePath('service', serviceURI);
    ServiceProvider.setServicePath('getmathml', getMathMLURI);
    ServiceProvider.setServicePath('configurationjs', configurationURI);
    ServiceProvider.listeners.fire('onInit', {});
  }

  /**
   * Gets the content from an URL.
   * @param {String} url - Target URL.
   * @param {Object} [postVariables] - Object containing post variables.
   * null if a GET query should be done.
   * @returns {String} Content of the target URL.
   * @private
   * @static
   */
  static getUrl(url, postVariables) {
    const currentPath = window.location.toString().substr(0, window.location.toString().lastIndexOf('/') + 1);
    const httpRequest = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createHttpRequest();
    if (httpRequest) {
      if (typeof postVariables === 'undefined' || typeof postVariables === 'undefined') {
        httpRequest.open('GET', url, false);
      } else if (url.substr(0, 1) === '/' || url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://') {
        httpRequest.open('POST', url, false);
      } else {
        httpRequest.open('POST', currentPath + url, false);
      }
      let header = _configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('customHeaders');
      if (header) {
        header = header.toString();
        header.split(",").map(element => element.trim().split('=')).forEach(([key, val]) => httpRequest.setRequestHeader(key, val));
      }
      if (typeof postVariables !== 'undefined' && postVariables) {
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        httpRequest.send(_util__WEBPACK_IMPORTED_MODULE_0__["default"].httpBuildQuery(postVariables));
      } else {
        httpRequest.send(null);
      }
      return httpRequest.responseText;
    }
    return '';
  }

  /**
   * Returns the response text of a certain service.
   * @param {String} service - Service name.
   * @param {String} postVariables - Post variables.
   * @param {Boolean} get - True if the request is GET instead of POST. false otherwise.
   * @returns {String} Service response text.
   */
  static getService(service, postVariables, get) {
    let response;
    if (get === true) {
      const getVariables = postVariables ? `?${postVariables}` : '';
      const serviceUrl = `${ServiceProvider.getServicePath(service)}${getVariables}`;
      response = ServiceProvider.getUrl(serviceUrl);
    } else {
      const serviceUrl = ServiceProvider.getServicePath(service);
      response = ServiceProvider.getUrl(serviceUrl, postVariables);
    }
    return response;
  }

  /**
   * Returns the server language of a certain service. The possible values
   * are: php, aspx, java and ruby.
   * This method has backward compatibility purposes.
   * @param {String} service - The configuration service.
   * @returns {String} - The server technology associated with the configuration service.
   */
  static getServerLanguageFromService(service) {
    if (service.indexOf('.php') !== -1) {
      return 'php';
    }
    if (service.indexOf('.aspx') !== -1) {
      return 'aspx';
    }
    if (service.indexOf('wirispluginengine') !== -1) {
      return 'ruby';
    }
    return 'java';
  }

  /**
   * Returns the URI associated with a certain service.
   * @param {String} service - The service name.
   * @return {String} The service path.
   */
  static createServiceURI(service) {
    const extension = ServiceProvider.serverExtension();
    return _util__WEBPACK_IMPORTED_MODULE_0__["default"].concatenateUrl(ServiceProvider.parameters.URI, service) + extension;
  }
  static serverExtension() {
    if (ServiceProvider.parameters.server.indexOf('php') !== -1) {
      return '.php';
    }
    if (ServiceProvider.parameters.server.indexOf('aspx') !== -1) {
      return '.aspx';
    }
    return '';
  }
}

/**
 * @property {String} service - The service name.
 * @property {String} path - The service path.
 * @static
 */
ServiceProvider._servicePaths = {};

/**
 * The integration path. Contains the path of the configuration service.
 * Used to define the path for all services.
 * @type {String}
 * @private
 */
ServiceProvider._integrationPath = '';

/**
 * ServiceProvider static listeners.
 * @type {Listeners}
 * @private
 */
ServiceProvider._listeners = new _listeners__WEBPACK_IMPORTED_MODULE_1__["default"]();

/**
 * Service provider parameters.
 * @type {ServiceProviderParameters}
 */
ServiceProvider._parameters = {};

/***/ }),

/***/ "../devkit/src/stringmanager.js":
/*!**************************************!*\
  !*** ../devkit/src/stringmanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringManager)
/* harmony export */ });
/* harmony import */ var _lang_strings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/strings.json */ "../devkit/lang/strings.json");

/**
 * This class represents a string manager. It's used to load localized strings.
 */
class StringManager {
  constructor() {
    throw new Error('Static class StringManager can not be instantiated.');
  }

  /**
   * Returns the associated value of certain string key. If the associated value
   * doesn't exits returns the original key.
   * @param {string} key - string key
   * @param {string} lang - DEFAULT = null. Specify the language to translate the string
   * @returns {string} correspondent value. If doesn't exists original key.
   */
  static get(key, lang) {
    // Default language definition
    let {
      language
    } = this;

    // If parameter language, use it
    if (lang) {
      language = lang;
    }

    // Cut down on strings. e.g. en_US -> en
    if (language && language.length > 2) {
      language = language.slice(0, 2);
    }

    // Check if we support the language
    if (!this.strings.hasOwnProperty(language)) {
      // eslint-disable-line no-prototype-builtins
      console.warn(`Unknown language ${language} set in StringManager.`);
      language = 'en';
    }

    // Check if the key is supported in the given language
    if (!this.strings[language].hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      console.warn(`Unknown key ${key} for language ${language} in StringManager.`);
      return key;
    }
    return this.strings[language][key];
  }
}

/**
 * Dictionary of dictionaries:
 * Key: language code
 * Value: Key: id of the string
 *        Value: translation of the string
 */
StringManager.strings = _lang_strings_json__WEBPACK_IMPORTED_MODULE_0__;

/**
 * Language of the translations; English by default
 */
StringManager.language = 'en';

/***/ }),

/***/ "../devkit/src/textcache.js":
/*!**********************************!*\
  !*** ../devkit/src/textcache.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextCache)
/* harmony export */ });
class TextCache {
  /**
   * @classdesc
   * This class represent a client-side text cache class. Contains pairs of
   * strings (key/value) which can be retrieved in any moment. Usually used
   * to store AJAX responses for text services like mathml2latex
   * (c.f {@link Latex} class) or mathml2accessible (c.f {@link Accessibility} class).
   * @constructs
   */
  constructor() {
    /**
     * Cache array property storing the cache entries.
     * @type {Array.<String>}
     */
    this.cache = [];
  }

  /**
   * This method populates a key/value pair into the {@link this.cache} property.
   * @param {String} key - Cache key, usually the service string parameter.
   * @param {String} value - Cache value, usually the service response.
   */
  populate(key, value) {
    this.cache[key] = value;
  }

  /**
   * Returns the cache value associated to certain cache key.
   * @param {String} key - Cache key, usually the service string parameter.
   * @return {String} value - Cache value, if exists. False otherwise.
   */
  get(key) {
    if (Object.prototype.hasOwnProperty.call(this.cache, key)) {
      return this.cache[key];
    }
    return false;
  }
}

/***/ }),

/***/ "../devkit/src/util.js":
/*!*****************************!*\
  !*** ../devkit/src/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "../../node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _latex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latex */ "../devkit/src/latex.js");
/* harmony import */ var _stringmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stringmanager */ "../devkit/src/stringmanager.js");
/* eslint-disable no-bitwise */






/**
 * This class represents an utility class.
 */
class Util {
  /**
   * Fires an event in a target.
   * @param {EventTarget} eventTarget - target where event should be fired.
   * @param {string} eventName event to fire.
   * @static
   */
  static fireEvent(eventTarget, eventName) {
    if (document.createEvent) {
      const eventObject = document.createEvent('HTMLEvents');
      eventObject.initEvent(eventName, true, true);
      return !eventTarget.dispatchEvent(eventObject);
    }
    const eventObject = document.createEventObject();
    return eventTarget.fireEvent(`on${eventName}`, eventObject);
  }

  /**
   * Cross-browser addEventListener/attachEvent function.
   * @param {EventTarget} eventTarget - target to add the event.
   * @param {string} eventName - specifies the type of event.
   * @param {Function} callBackFunction - callback function.
   * @static
   */
  static addEvent(eventTarget, eventName, callBackFunction) {
    if (eventTarget.addEventListener) {
      eventTarget.addEventListener(eventName, callBackFunction, true);
    } else if (eventTarget.attachEvent) {
      // Backwards compatibility.
      eventTarget.attachEvent(`on${eventName}`, callBackFunction);
    }
  }

  /**
   * Cross-browser removeEventListener/detachEvent function.
   * @param {EventTarget} eventTarget - target to add the event.
   * @param {string} eventName - specifies the type of event.
   * @param {Function} callBackFunction - function to remove from the event target.
   * @static
   */
  static removeEvent(eventTarget, eventName, callBackFunction) {
    if (eventTarget.removeEventListener) {
      eventTarget.removeEventListener(eventName, callBackFunction, true);
    } else if (eventTarget.detachEvent) {
      eventTarget.detachEvent(`on${eventName}`, callBackFunction);
    }
  }

  /**
   * Adds the a callback function, for a certain event target, to the following event types:
   * - dblclick
   * - mousedown
   * - mouseup
   * @param {EventTarget} eventTarget - event target.
   * @param {Function} doubleClickHandler - function to run when on dblclick event.
   * @param {Function} mousedownHandler - function to run when on mousedown event.
   * @param {Function} mouseupHandler - function to run when on mouseup event.
   * @static
   */
  static addElementEvents(eventTarget, doubleClickHandler, mousedownHandler, mouseupHandler) {
    if (doubleClickHandler) {
      this.callbackDblclick = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        doubleClickHandler(element, realEvent);
      };
      Util.addEvent(eventTarget, 'dblclick', this.callbackDblclick);
    }
    if (mousedownHandler) {
      this.callbackMousedown = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        mousedownHandler(element, realEvent);
      };
      Util.addEvent(eventTarget, 'mousedown', this.callbackMousedown);
    }
    if (mouseupHandler) {
      this.callbackMouseup = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        mouseupHandler(element, realEvent);
      };
      // Chrome doesn't trigger this event for eventTarget if we release the mouse button
      // while the mouse is outside the editor text field.
      // This is a workaround: we trigger the event independently of where the mouse
      // is when we release its button.
      Util.addEvent(document, 'mouseup', this.callbackMouseup);
      Util.addEvent(eventTarget, 'mouseup', this.callbackMouseup);
    }
  }

  /**
   * Remove all callback function, for a certain event target, to the following event types:
   * - dblclick
   * - mousedown
   * - mouseup
   * @param {EventTarget} eventTarget - event target.
   * @static
   */
  static removeElementEvents(eventTarget) {
    Util.removeEvent(eventTarget, 'dblclick', this.callbackDblclick);
    Util.removeEvent(eventTarget, 'mousedown', this.callbackMousedown);
    Util.removeEvent(document, 'mouseup', this.callbackMouseup);
    Util.removeEvent(eventTarget, 'mouseup', this.callbackMouseup);
  }

  /**
   * Adds a class name to a HTMLElement.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the class name.
   * @static
   */
  static addClass(element, className) {
    if (!Util.containsClass(element, className)) {
      element.className += ` ${className}`;
    }
  }

  /**
   * Checks if a HTMLElement contains a certain class.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the className.
   * @returns {boolean} true if the HTMLElement contains the class name. false otherwise.
   * @static
   */
  static containsClass(element, className) {
    if (element == null || !('className' in element)) {
      return false;
    }
    const currentClasses = element.className.split(' ');
    for (let i = currentClasses.length - 1; i >= 0; i -= 1) {
      if (currentClasses[i] === className) {
        return true;
      }
    }
    return false;
  }

  /**
   * Remove a certain class for a HTMLElement.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the class name.
   * @static
   */
  static removeClass(element, className) {
    let newClassName = '';
    const classes = element.className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      if (classes[i] !== className) {
        newClassName += `${classes[i]} `;
      }
    }
    element.className = newClassName.trim();
  }

  /**
   * Converts old xml initial text attribute (with «») to the correct one(with §lt;§gt;). It's
   * used to parse old applets.
   * @param {string} text - string containing safeXml characters
   * @returns {string} a string with safeXml characters parsed.
   * @static
   */
  static convertOldXmlinitialtextAttribute(text) {
    // Used to fix a bug with Cas imported from Moodle 1.9 to Moodle 2.x.
    // This could be removed in future.
    const val = 'value=';
    const xitpos = text.indexOf('xmlinitialtext');
    const valpos = text.indexOf(val, xitpos);
    const quote = text.charAt(valpos + val.length);
    const startquote = valpos + val.length + 1;
    const endquote = text.indexOf(quote, startquote);
    const value = text.substring(startquote, endquote);
    let newvalue = value.split('«').join('§lt;');
    newvalue = newvalue.split('»').join('§gt;');
    newvalue = newvalue.split('&').join('§');
    newvalue = newvalue.split('¨').join('§quot;');
    text = text.split(value).join(newvalue);
    return text;
  }

  /**
   * Cross-browser solution for creating new elements.
   * @param {string} tagName - tag name of the wished element.
   * @param {Object} attributes - an object where each key is a wished
   * attribute name and each value is its value.
   * @param {Object} [creator] - if supplied, this function will use
   * the "createElement" method from this param. Otherwise
   * document will be used as creator.
   * @returns {Element} The DOM element with the specified attributes assigned.
   * @static
   */
  static createElement(tagName, attributes, creator) {
    if (attributes === undefined) {
      attributes = {};
    }
    if (creator === undefined) {
      creator = document;
    }
    let element;

    /*
    * Internet Explorer fix:
    * If you create a new object dynamically, you can't set a non-standard attribute.
    * For example, you can't set the "src" attribute on an "applet" object.
    * Other browsers will throw an exception and will run the standard code.
    */
    try {
      let html = `<${tagName}`;
      Object.keys(attributes).forEach(attributeName => {
        html += ` ${attributeName}="${Util.htmlEntities(attributes[attributeName])}"`;
      });
      html += '>';
      element = creator.createElement(html);
    } catch (e) {
      element = creator.createElement(tagName);
      Object.keys(attributes).forEach(attributeName => {
        element.setAttribute(attributeName, attributes[attributeName]);
      });
    }
    return element;
  }

  /**
   * Creates new HTML from it's HTML code as string.
   * @param {string} objectCode - html code
   * @returns {Element} the HTML element.
   * @static
   */
  static createObject(objectCode, creator) {
    if (creator === undefined) {
      creator = document;
    }

    // Internet Explorer can't include "param" tag when is setting an innerHTML property.
    objectCode = objectCode.split('<applet ').join('<span wirisObject="WirisApplet" ').split('<APPLET ').join('<span wirisObject="WirisApplet" '); // It is a 'span' because 'span' objects can contain 'br' nodes.
    objectCode = objectCode.split('</applet>').join('</span>').split('</APPLET>').join('</span>');
    objectCode = objectCode.split('<param ').join('<br wirisObject="WirisParam" ').split('<PARAM ').join('<br wirisObject="WirisParam" '); // It is a 'br' because 'br' can't contain nodes.
    objectCode = objectCode.split('</param>').join('</br>').split('</PARAM>').join('</br>');
    const container = Util.createElement('div', {}, creator);
    container.innerHTML = objectCode;
    function recursiveParamsFix(object) {
      if (object.getAttribute && object.getAttribute('wirisObject') === 'WirisParam') {
        const attributesParsed = {};
        for (let i = 0; i < object.attributes.length; i += 1) {
          if (object.attributes[i].nodeValue !== null) {
            attributesParsed[object.attributes[i].nodeName] = object.attributes[i].nodeValue;
          }
        }
        const param = Util.createElement('param', attributesParsed, creator);

        // IE fix.
        if (param.NAME) {
          param.name = param.NAME;
          param.value = param.VALUE;
        }
        param.removeAttribute('wirisObject');
        object.parentNode.replaceChild(param, object);
      } else if (object.getAttribute && object.getAttribute('wirisObject') === 'WirisApplet') {
        const attributesParsed = {};
        for (let i = 0; i < object.attributes.length; i += 1) {
          if (object.attributes[i].nodeValue !== null) {
            attributesParsed[object.attributes[i].nodeName] = object.attributes[i].nodeValue;
          }
        }
        const applet = Util.createElement('applet', attributesParsed, creator);
        applet.removeAttribute('wirisObject');
        for (let i = 0; i < object.childNodes.length; i += 1) {
          recursiveParamsFix(object.childNodes[i]);
          if (object.childNodes[i].nodeName.toLowerCase() === 'param') {
            applet.appendChild(object.childNodes[i]);
            i -= 1; // When we insert the object child into the applet, object loses one child.
          }
        }

        object.parentNode.replaceChild(applet, object);
      } else {
        for (let i = 0; i < object.childNodes.length; i += 1) {
          recursiveParamsFix(object.childNodes[i]);
        }
      }
    }
    recursiveParamsFix(container);
    return container.firstChild;
  }

  /**
   * Converts an Element to its HTML code.
   * @param {Element} element - entry element.
   * @return {string} the HTML code of the input element.
   * @static
   */
  static createObjectCode(element) {
    // In case that the image was not created, the object can be null or undefined.
    if (typeof element === 'undefined' || element === null) {
      return null;
    }
    if (element.nodeType === 1) {
      // ELEMENT_NODE.
      let output = `<${element.tagName}`;
      for (let i = 0; i < element.attributes.length; i += 1) {
        if (element.attributes[i].specified) {
          output += ` ${element.attributes[i].name}="${Util.htmlEntities(element.attributes[i].value)}"`;
        }
      }
      if (element.childNodes.length > 0) {
        output += '>';
        for (let i = 0; i < element.childNodes.length; i += 1) {
          output += Util.createObject(element.childNodes[i]);
        }
        output += `</${element.tagName}>`;
      } else if (element.nodeName === 'DIV' || element.nodeName === 'SCRIPT') {
        output += `></${element.tagName}>`;
      } else {
        output += '/>';
      }
      return output;
    }
    if (element.nodeType === 3) {
      // TEXT_NODE.
      return Util.htmlEntities(element.nodeValue);
    }
    return '';
  }

  /**
   * Concatenates two URL paths.
   * @param {string} path1 - first URL path
   * @param {string} path2 - second URL path
   * @returns {string} new URL.
   */
  static concatenateUrl(path1, path2) {
    let separator = '';
    if (path1.indexOf('/') !== path1.length && path2.indexOf('/') !== 0) {
      separator = '/';
    }
    return (path1 + separator + path2).replace(/([^:]\/)\/+/g, '$1');
  }

  /**
   * Parses a text and replaces all HTML special characters by their correspondent entities.
   * @param {string} input - text to be parsed.
   * @returns {string} the input text with all their special characters replaced by their entities.
   * @static
   */
  static htmlEntities(input) {
    return input.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
  }

  /**
   * Sanitize HTML to prevent XSS injections.
   * @param {string} html - html to be sanitize.
   * @returns {string} html sanitized.
   * @static
   */
  static htmlSanitize(html) {
    let annotationRegex = /\<annotation.+\<\/annotation\>/;
    // Get all the annotation content including the tags.
    let annotation = html.match(annotationRegex);
    // Sanitize html code without removing the <semantics> and <annotation> tags.
    html = dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(html, {
      ADD_TAGS: ['semantics', 'annotation'],
      ALLOWED_ATTR: ['mathvariant', 'class', 'linebreak', 'open', 'close']
    });
    // Readd old annotation content.
    return html.replace(annotationRegex, annotation);
  }

  /**
   * Parses a text and replaces all the HTML entities by their characters.
   * @param {string} input - text to be parsed
   * @returns {string} the input text with all their entities replaced by characters.
   * @static
   */
  static htmlEntitiesDecode(input) {
    // Textarea element decodes when inner html is set.
    const textarea = document.createElement('textarea');
    textarea.innerHTML = input;
    return textarea.value;
  }

  /**
   * Returns a cross-browser http request.
   * @return {object} httpRequest request object.
   * @returns {XMLHttpRequest|ActiveXObject} the proper request object.
   */
  static createHttpRequest() {
    const currentPath = window.location.toString().substr(0, window.location.toString().lastIndexOf('/') + 1);
    if (currentPath.substr(0, 7) === 'file://') {
      throw _stringmanager__WEBPACK_IMPORTED_MODULE_4__["default"].get('exception_cross_site');
    }
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    }
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (oc) {
        return null;
      }
    }
  }

  /**
   * Converts a hash to a HTTP query.
   * @param {Object[]} properties - a key/value object.
   * @returns {string} a HTTP query containing all the key value pairs with
   * all the special characters replaced by their entities.
   * @static
   */
  static httpBuildQuery(properties) {
    let result = '';
    Object.keys(properties).forEach(i => {
      if (properties[i] != null) {
        result += `${Util.urlEncode(i)}=${Util.urlEncode(properties[i])}&`;
      }
    });

    // Deleting last '&' empty character.
    if (result.substring(result.length - 1) === '&') {
      result = result.substring(0, result.length - 1);
    }
    return result;
  }

  /**
   * Convert a hash to string sorting keys to get a deterministic output
   * @param {Object[]} hash - a key/value object.
   * @returns {string} a string with the form key1=value1...keyn=valuen
   * @static
   */
  static propertiesToString(hash) {
    // 1. Sort keys. We sort the keys because we want a deterministic output.
    const keys = [];
    Object.keys(hash).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(hash, key)) {
        keys.push(key);
      }
    });
    const n = keys.length;
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        const s1 = keys[i];
        const s2 = keys[j];
        if (Util.compareStrings(s1, s2) > 0) {
          // Swap.
          keys[i] = s2;
          keys[j] = s1;
        }
      }
    }

    // 2. Generate output.
    let output = '';
    for (let i = 0; i < n; i += 1) {
      const key = keys[i];
      output += key;
      output += '=';
      let value = hash[key];
      value = value.replace('\\', '\\\\');
      value = value.replace('\n', '\\n');
      value = value.replace('\r', '\\r');
      value = value.replace('\t', '\\t');
      output += value;
      output += '\n';
    }
    return output;
  }

  /**
   * Compare two strings using charCodeAt method
   * @param {string} a - first string to compare.
   * @param {string} b - second string to compare.
   * @returns {number} the difference between a and b
   * @static
   */
  static compareStrings(a, b) {
    let i;
    const an = a.length;
    const bn = b.length;
    const n = an > bn ? bn : an;
    for (i = 0; i < n; i += 1) {
      const c = Util.fixedCharCodeAt(a, i) - Util.fixedCharCodeAt(b, i);
      if (c !== 0) {
        return c;
      }
    }
    return a.length - b.length;
  }

  /**
   * Fix charCodeAt() JavaScript function to handle non-Basic-Multilingual-Plane characters.
   * @param {string} string - input string
   * @param {number} idx - an integer greater than or equal to 0
   * and less than the length of the string
   * @returns {number} an integer representing the UTF-16 code of the string at the given index.
   * @static
   */
  static fixedCharCodeAt(string, idx) {
    idx = idx || 0;
    const code = string.charCodeAt(idx);
    let hi;
    let low;

    /* High surrogate (could change last hex to 0xDB7F to treat high
    private surrogates as single characters) */

    if (code >= 0xD800 && code <= 0xDBFF) {
      hi = code;
      low = string.charCodeAt(idx + 1);
      if (Number.isNaN(low)) {
        throw _stringmanager__WEBPACK_IMPORTED_MODULE_4__["default"].get('exception_high_surrogate');
      }
      return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
    }
    if (code >= 0xDC00 && code <= 0xDFFF) {
      // Low surrogate.
      /* We return false to allow loops to skip this iteration since should have
      already handled high surrogate above in the previous iteration. */
      return false;
    }
    return code;
  }

  /**
   * Returns an URL with it's query params converted into array.
   * @param {string} url - input URL.
   * @returns {Object[]} an array containing all URL query params.
   * @static
   */
  static urlToAssArray(url) {
    let i;
    i = url.indexOf('?');
    if (i > 0) {
      const query = url.substring(i + 1);
      const ss = query.split('&');
      const h = {};
      for (i = 0; i < ss.length; i += 1) {
        const s = ss[i];
        const kv = s.split('=');
        if (kv.length > 1) {
          h[kv[0]] = decodeURIComponent(kv[1].replace(/\+/g, ' '));
        }
      }
      return h;
    }
    return {};
  }

  /**
   * Returns an encoded URL by replacing each instance of certain characters by
   * one, two, three or four escape sequences using encodeURIComponent method.
   * !'()* . will not be encoded.
   *
   * @param {string} clearString - URL string to be encoded
   * @returns {string} URL with it's special characters replaced.
   * @static
   */
  static urlEncode(clearString) {
    let output = '';
    // Method encodeURIComponent doesn't encode !'()*~ .
    output = encodeURIComponent(clearString);
    return output;
  }

  // TODO: To parser?
  /**
   * Converts the HTML of a image into the output code that WIRIS must return.
   * By default returns the MathML stored on data-mahml attribute (if imgCode is a formula)
   * or the Wiriscas attribute of a WIRIS applet.
   * @param {string} imgCode - the html code from a formula or a CAS image.
   * @param {boolean} convertToXml - true if the image should be converted to XML.
   * @param {boolean} convertToSafeXml - true if the image should be converted to safeXML.
   * @returns {string} the XML or safeXML of a WIRIS image.
   * @static
   */
  static getWIRISImageOutput(imgCode, convertToXml, convertToSafeXml) {
    const imgObject = Util.createObject(imgCode);
    if (imgObject) {
      if (imgObject.className === _configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageClassName') || imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageMathmlAttribute'))) {
        if (!convertToXml) {
          return imgCode;
        }
        const dataMathML = imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageMathmlAttribute'));
        // To handle annotations, first we need the MathML in XML.
        let mathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlDecode(dataMathML);
        if (!_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('saveHandTraces')) {
          mathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].removeAnnotation(mathML, 'application/json');
        }
        if (mathML == null) {
          mathML = imgObject.getAttribute('alt');
        }
        if (convertToSafeXml) {
          const safeMathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlEncode(mathML);
          return safeMathML;
        }
        return mathML;
      }
    }
    return imgCode;
  }

  /**
   * Gets the node length in characters.
   * @param {Node} node - HTML node.
   * @returns {number} node length.
   * @static
   */
  static getNodeLength(node) {
    const staticNodeLengths = {
      IMG: 1,
      BR: 1
    };
    if (node.nodeType === 3) {
      // TEXT_NODE.
      return node.nodeValue.length;
    }
    if (node.nodeType === 1) {
      // ELEMENT_NODE.
      let length = staticNodeLengths[node.nodeName.toUpperCase()];
      if (length === undefined) {
        length = 0;
      }
      for (let i = 0; i < node.childNodes.length; i += 1) {
        length += Util.getNodeLength(node.childNodes[i]);
      }
      return length;
    }
    return 0;
  }

  /**
   * Gets a selected node or text from an editable HTMLElement.
   * If the caret is on a text node, concatenates it with all the previous and next text nodes.
   * @param {HTMLElement} target - the editable HTMLElement.
   * @param {boolean} isIframe  - specifies if the target is an iframe or not
   * @param {boolean} forceGetSelection - if true, ignores IE system to get
   * the current selection and uses window.getSelection()
   * @returns {object} an object with the 'node' key set if the item is an
   * element or the keys 'node' and 'caretPosition' if the element is text.
   * @static
   */
  static getSelectedItem(target, isIframe, forceGetSelection) {
    let windowTarget;
    if (isIframe) {
      windowTarget = target.contentWindow;
      windowTarget.focus();
    } else {
      windowTarget = window;
      target.focus();
    }
    if (document.selection && !forceGetSelection) {
      const range = windowTarget.document.selection.createRange();
      if (range.parentElement) {
        if (range.htmlText.length > 0) {
          if (range.text.length === 0) {
            return Util.getSelectedItem(target, isIframe, true);
          }
          return null;
        }
        windowTarget.document.execCommand('InsertImage', false, '#');
        let temporalObject = range.parentElement();
        if (temporalObject.nodeName.toUpperCase() !== 'IMG') {
          // IE9 fix: parentElement() does not return the IMG node,
          // returns the parent DIV node. In IE < 9, pasteHTML does not work well.
          range.pasteHTML('<span id="wrs_openEditorWindow_temporalObject"></span>');
          temporalObject = windowTarget.document.getElementById('wrs_openEditorWindow_temporalObject');
        }
        let node;
        let caretPosition;
        if (temporalObject.nextSibling && temporalObject.nextSibling.nodeType === 3) {
          // TEXT_NODE.
          node = temporalObject.nextSibling;
          caretPosition = 0;
        } else if (temporalObject.previousSibling && temporalObject.previousSibling.nodeType === 3) {
          node = temporalObject.previousSibling;
          caretPosition = node.nodeValue.length;
        } else {
          node = windowTarget.document.createTextNode('');
          temporalObject.parentNode.insertBefore(node, temporalObject);
          caretPosition = 0;
        }
        temporalObject.parentNode.removeChild(temporalObject);
        return {
          node,
          caretPosition
        };
      }
      if (range.length > 1) {
        return null;
      }
      return {
        node: range.item(0)
      };
    }
    if (windowTarget.getSelection) {
      let range;
      const selection = windowTarget.getSelection();
      try {
        range = selection.getRangeAt(0);
      } catch (e) {
        range = windowTarget.document.createRange();
      }
      const node = range.startContainer;
      if (node.nodeType === 3) {
        // TEXT_NODE.
        return {
          node,
          caretPosition: range.startOffset
        };
      }
      if (node !== range.endContainer) {
        return null;
      }
      if (node.nodeType === 1) {
        // ELEMENT_NODE.
        const position = range.startOffset;
        if (node.childNodes[position]) {
          // In case that a formula is detected but not selected,
          // we create an empty span where we could insert the new formula.
          if (range.startOffset === range.endOffset) {
            if (position !== 0 && node.childNodes[position - 1].localName === 'span' && node.childNodes[position].classList.contains('Wirisformula')) {
              node.childNodes[position - 1].remove();
              return Util.getSelectedItem(target, isIframe, forceGetSelection);
            } else if (node.childNodes[position].classList?.contains('Wirisformula')) {
              if (position > 0 && node.childNodes[position - 1].classList.contains('Wirisformula') || position === 0) {
                var emptySpan = document.createElement('span');
                node.insertBefore(emptySpan, node.childNodes[position]);
                return {
                  node: node.childNodes[position]
                };
              }
            }
          }
          return {
            node: node.childNodes[position]
          };
        }
      }
    }
    return null;
  }

  /**
   * Returns null if there isn't any item or if it is malformed.
   * Otherwise returns an object containing the node with the MathML image
   * and the cursor position inside the textarea.
   * @param {HTMLTextAreaElement} textarea - textarea element.
   * @returns {Object} An object containing the node, the index of the
   * beginning  of the selected text, caret position and the start and end position of the
   * text node.
   * @static
   */
  static getSelectedItemOnTextarea(textarea) {
    const textNode = document.createTextNode(textarea.value);
    const textNodeValues = _latex__WEBPACK_IMPORTED_MODULE_3__["default"].getLatexFromTextNode(textNode, textarea.selectionStart);
    if (textNodeValues === null) {
      return null;
    }
    return {
      node: textNode,
      caretPosition: textarea.selectionStart,
      startPosition: textNodeValues.startPosition,
      endPosition: textNodeValues.endPosition
    };
  }

  /**
   * Looks for elements that match the given name in a HTML code string.
   * Important: this function is very concrete for WIRIS code.
   * It takes as preconditions lots of behaviors that are not the general case.
   * @param {string} code -  HTML code.
   * @param {string} name - element name.
   * @param {boolean} autoClosed - true if the elements are autoClosed.
   * @return {Object[]} an object containing all HTML elements of code matching the name argument.
   * @static
   */
  static getElementsByNameFromString(code, name, autoClosed) {
    const elements = [];
    code = code.toLowerCase();
    name = name.toLowerCase();
    let start = code.indexOf(`<${name} `);
    while (start !== -1) {
      // Look for nodes.
      let endString;
      if (autoClosed) {
        endString = '>';
      } else {
        endString = `</${name}>`;
      }
      let end = code.indexOf(endString, start);
      if (end !== -1) {
        end += endString.length;
        elements.push({
          start,
          end
        });
      } else {
        end = start + 1;
      }
      start = code.indexOf(`<${name} `, end);
    }
    return elements;
  }

  /**
   * Returns the numeric value of a base64 character.
   * @param  {string} character - base64 character.
   * @returns {number} base64 character numeric value.
   * @static
   */
  static decode64(character) {
    const PLUS = '+'.charCodeAt(0);
    const SLASH = '/'.charCodeAt(0);
    const NUMBER = '0'.charCodeAt(0);
    const LOWER = 'a'.charCodeAt(0);
    const UPPER = 'A'.charCodeAt(0);
    const PLUS_URL_SAFE = '-'.charCodeAt(0);
    const SLASH_URL_SAFE = '_'.charCodeAt(0);
    const code = character.charCodeAt(0);
    if (code === PLUS || code === PLUS_URL_SAFE) {
      return 62; // Char '+'.
    }

    if (code === SLASH || code === SLASH_URL_SAFE) {
      return 63; // Char '/'.
    }

    if (code < NUMBER) {
      return -1; // No match.
    }

    if (code < NUMBER + 10) {
      return code - NUMBER + 26 + 26;
    }
    if (code < UPPER + 26) {
      return code - UPPER;
    }
    if (code < LOWER + 26) {
      return code - LOWER + 26;
    }
    return null;
  }

  /**
   * Converts a base64 string to a array of bytes.
   * @param {string} b64String - base64 string.
   * @param {number} length - dimension of byte array (by default whole string).
   * @return {Object[]} the resultant byte array.
   * @static
   */
  static b64ToByteArray(b64String, length) {
    let tmp;
    if (b64String.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4'); // Tipped base64. Length is fixed.
    }

    const arr = [];
    let l;
    let placeHolders;
    if (!length) {
      // All b64String string.
      if (b64String.charAt(b64String.length - 2) === '=') {
        placeHolders = 2;
      } else if (b64String.charAt(b64String.length - 1) === '=') {
        placeHolders = 1;
      } else {
        placeHolders = 0;
      }
      l = placeHolders > 0 ? b64String.length - 4 : b64String.length;
    } else {
      l = length;
    }
    let i;
    for (i = 0; i < l; i += 4) {
      // Ignoring code checker standards (bitewise operators).
      // See https://tracker.moodle.org/browse/CONTRIB-5862 for further information.
      // @codingStandardsIgnoreStart
      // eslint-disable-next-line max-len
      tmp = Util.decode64(b64String.charAt(i)) << 18 | Util.decode64(b64String.charAt(i + 1)) << 12 | Util.decode64(b64String.charAt(i + 2)) << 6 | Util.decode64(b64String.charAt(i + 3));
      arr.push(tmp >> 16 & 0xFF);
      arr.push(tmp >> 8 & 0xFF);
      arr.push(tmp & 0xFF);
      // @codingStandardsIgnoreEnd
    }

    if (placeHolders) {
      if (placeHolders === 2) {
        // Ignoring code checker standards (bitewise operators).
        // @codingStandardsIgnoreStart
        // eslint-disable-next-line max-len
        tmp = Util.decode64(b64String.charAt(i)) << 2 | Util.decode64(b64String.charAt(i + 1)) >> 4;
        arr.push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        // eslint-disable-next-line max-len
        tmp = Util.decode64(b64String.charAt(i)) << 10 | Util.decode64(b64String.charAt(i + 1)) << 4 | Util.decode64(b64String.charAt(i + 2)) >> 2;
        arr.push(tmp >> 8 & 0xFF);
        arr.push(tmp & 0xFF);
        // @codingStandardsIgnoreEnd
      }
    }

    return arr;
  }

  /**
   * Returns the first 32-bit signed integer from a byte array.
   * @param {Object[]} bytes - array of bytes.
   * @returns {number} the 32-bit signed integer.
   * @static
   */
  static readInt32(bytes) {
    if (bytes.length < 4) {
      return false;
    }
    const int32 = bytes.splice(0, 4);
    // @codingStandardsIgnoreStart¡
    return int32[0] << 24 | int32[1] << 16 | int32[2] << 8 | int32[3] << 0;
    // @codingStandardsIgnoreEnd
  }

  /**
   * Read the first byte from a byte array.
   * @param {Object} bytes - input byte array.
   * @returns {number} first byte of the byte array.
   * @static
   */
  static readByte(bytes) {
    // @codingStandardsIgnoreStart
    return bytes.shift() << 0;
    // @codingStandardsIgnoreEnd
  }

  /**
   * Read an arbitrary number of bytes, from a fixed position on a byte array.
   * @param  {Object[]} bytes - byte array.
   * @param  {number} pos - start position.
   * @param  {number} len - number of bytes to read.
   * @returns {Object[]} the byte array.
   * @static
   */
  static readBytes(bytes, pos, len) {
    return bytes.splice(pos, len);
  }

  /**
   * Inserts or modifies formulas or CAS on a textarea.
   * @param {HTMLTextAreaElement} textarea - textarea target.
   * @param {string} text - text to add in the textarea. For example, to add the link to the image,
   * call this function as (textarea, Parser.createImageSrc(mathml));
   * @static
   */
  static updateTextArea(textarea, text) {
    if (textarea && text) {
      textarea.focus();
      if (textarea.selectionStart != null) {
        const {
          selectionEnd
        } = textarea;
        const selectionStart = textarea.value.substring(0, textarea.selectionStart);
        const selectionEndSub = textarea.value.substring(selectionEnd, textarea.value.length);
        textarea.value = selectionStart + text + selectionEndSub;
        textarea.selectionEnd = selectionEnd + text.length;
      } else {
        const selection = document.selection.createRange();
        selection.text = text;
      }
    }
  }

  /**
   * Modifies existing formula on a textarea.
   * @param {HTMLTextAreaElement} textarea - text area target.
   * @param {string} text - text to add in the textarea. For example, if you want to add the link
   * to the image,you can call this function as
   * Util.updateTextarea(textarea, Parser.createImageSrc(mathml));
   * @param {number} start - beginning index from textarea where it needs to be replaced by text.
   * @param {number} end - ending index from textarea where it needs to be replaced by text
   * @static
   */
  static updateExistingTextOnTextarea(textarea, text, start, end) {
    textarea.focus();
    const textareaStart = textarea.value.substring(0, start);
    textarea.value = textareaStart + text + textarea.value.substring(end, textarea.value.length);
    textarea.selectionEnd = start + text.length;
  }

  /**
   * Add a parameter with it's correspondent value to an URL (GET).
   * @param {string} path - URL path
   * @param {string} parameter - parameter
   * @param {string} value - value
   * @static
   */
  static addArgument(path, parameter, value) {
    let sep;
    if (path.indexOf('?') > 0) {
      sep = '&';
    } else {
      sep = '?';
    }
    return `${path + sep + parameter}=${value}`;
  }
}

/***/ }),

/***/ "../devkit/lang/strings.json":
/*!***********************************!*\
  !*** ../devkit/lang/strings.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ar":{"latex":"LaTeX","cancel":"إلغاء","accept":"إدراج","manual":"الدليل","insert_math":"إدراج صيغة رياضية - MathType","insert_chem":"إدراج صيغة كيميائية - ChemType","minimize":"تصغير","maximize":"تكبير","fullscreen":"ملء الشاشة","exit_fullscreen":"الخروج من ملء الشاشة","close":"إغلاق","mathtype":"MathType","title_modalwindow":"نافذة MathType مشروطة","close_modal_warning":"هل تريد المغادرة بالتأكيد؟ ستُفقد التغييرات التي أجريتها.","latex_name_label":"صيغة Latex","browser_no_compatible":"المستعرض غير متوافق مع تقنية AJAX. الرجاء استخدام أحدث إصدار من Mozilla Firefox.","error_convert_accessibility":"حدث خطأ أثناء التحويل من MathML إلى نص قابل للاستخدام.","exception_cross_site":"البرمجة النصية للمواقع المشتركة مسموح بها لـ HTTP فقط.","exception_high_surrogate":"المركّب المرتفع غير متبوع بمركّب منخفض في fixedCharCodeAt()‎","exception_string_length":"سلسلة غير صالحة. يجب أن يكون الطول من مضاعفات العدد 4","exception_key_nonobject":"Object.keys مستدعاة على غير كائن","exception_null_or_undefined":" هذا فارغ أو غير محدد","exception_not_function":" ليست دالة","exception_invalid_date_format":"تنسيق تاريخ غير صالح: ","exception_casting":"لا يمكن الصياغة ","exception_casting_to":" إلى "},"ca":{"latex":"LaTeX","cancel":"Cancel·lar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemàtica - MathType","insert_chem":"Inserir fórmula química - ChemType","minimize":"Minimitza","maximize":"Maximitza","fullscreen":"Pantalla completa","exit_fullscreen":"Sortir de la pantalla complera","close":"Tanca","mathtype":"MathType","title_modalwindow":" Finestra modal de MathType","close_modal_warning":"N\'estàs segur que vols sortir? Es perdran els canvis que has fet.","latex_name_label":"Fórmula en Latex","browser_no_compatible":"El teu navegador no és compatible amb AJAX. Si us plau, usa la darrera versió de Mozilla Firefox.","error_convert_accessibility":"Error en convertir de MathML a text accessible.","exception_cross_site":"Els scripts de llocs creuats només estan permesos per HTTP.","exception_high_surrogate":"Subrogat alt no seguit de subrogat baix a fixedCharCodeAt()","exception_string_length":"Cadena invàlida. La longitud ha de ser un múltiple de 4","exception_key_nonobject":"Object.keys anomenat a non-object","exception_null_or_undefined":" això és null o no definit","exception_not_function":" no és una funció","exception_invalid_date_format":"Format de data invàlid : ","exception_casting":"No es pot emetre ","exception_casting_to":" a "},"cs":{"latex":"LaTeX","cancel":"Storno","accept":"Vložit","manual":"Příručka","insert_math":"Vložit matematický vzorec - MathType","insert_chem":"Vložení chemického vzorce – ChemType","minimize":"Minimalizovat","maximize":"Maximalizovat","fullscreen":"Celá obrazovka","exit_fullscreen":"Opustit režim celé obrazovky","close":"Zavřít","mathtype":"MathType","title_modalwindow":"Modální okno MathType","close_modal_warning":"Opravdu chcete okno zavřít? Provedené změny budou ztraceny.","latex_name_label":"Vzorec v LaTeXu","browser_no_compatible":"Váš prohlížeč nepodporuje technologii AJAX. Použijte nejnovější verzi prohlížeče Mozilla Firefox.","error_convert_accessibility":"Při převodu kódu MathML na čitelný text došlo k chybě.","exception_cross_site":"Skriptování mezi více servery je povoleno jen v HTTP.","exception_high_surrogate":"Ve funkci fixedCharCodeAt() nenásleduje po první části kódu znaku druhá část","exception_string_length":"Neplatný řetězec. Délka musí být násobkem 4.","exception_key_nonobject":"Funkce Object.keys byla použita pro prvek, který není objektem","exception_null_or_undefined":" hodnota je null nebo není definovaná","exception_not_function":" není funkce","exception_invalid_date_format":"Neplatný formát data: ","exception_casting":"Nelze přetypovat ","exception_casting_to":" na "},"da":{"latex":"LaTeX","cancel":"Annuller","accept":"Indsæt","manual":"Brugervejledning","insert_math":"Indsæt matematisk formel - MathType","insert_chem":"Indsæt en kemisk formel - ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fuld skærm","exit_fullscreen":"Afslut Fuld skærm","close":"Luk","mathtype":"MathType","title_modalwindow":"MathType-modalvindue","close_modal_warning":"Er du sikker på, du vil lukke? Dine ændringer går tabt.","latex_name_label":"LaTex-formel","browser_no_compatible":"Din browser er ikke kompatibel med AJAX-teknologi. Brug den nyeste version af Mozilla Firefox.","error_convert_accessibility":"Fejl under konvertering fra MathML til tilgængelig tekst.","exception_cross_site":"Scripts på tværs af websteder er kun tilladt for HTTP.","exception_high_surrogate":"Et højt erstatningstegn er ikke fulgt af et lavt erstatningstegn i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Længden skal være et multiplum af 4","exception_key_nonobject":"Object.keys kaldet ved ikke-objekt","exception_null_or_undefined":" dette er nul eller ikke defineret","exception_not_function":" er ikke en funktion","exception_invalid_date_format":"Ugyldigt datoformat: ","exception_casting":"Kan ikke beregne ","exception_casting_to":" til "},"de":{"latex":"LaTeX","cancel":"Abbrechen","accept":"Einfügen","manual":"Handbuch","insert_math":"Mathematische Formel einfügen - MathType","insert_chem":"Eine chemische Formel einfügen – ChemType","minimize":"Verkleinern","maximize":"Vergrößern","fullscreen":"Vollbild","exit_fullscreen":"Vollbild schließen","close":"Schließen","mathtype":"MathType","title_modalwindow":"Modales MathType-Fenster","close_modal_warning":"Bist du sicher, dass du das Programm verlassen willst? Alle vorgenommenen Änderungen gehen damit verloren.","latex_name_label":"Latex-Formel","browser_no_compatible":"Dein Browser ist nicht mit der AJAX-Technologie kompatibel. Verwende bitte die neueste Version von Mozilla Firefox.","error_convert_accessibility":"Fehler beim Konvertieren von MathML in barrierefreien Text.","exception_cross_site":"Cross-Site-Scripting ist nur bei HTTP zulässig.","exception_high_surrogate":"Hoher Ersatz bei bei festerZeichenkodierungbei() nicht von niedrigem Ersatz befolgt.","exception_string_length":"Ungültige Zeichenfolge. Länge muss ein Vielfaches von 4 sein.","exception_key_nonobject":"Object.keys wurde für ein Nicht-Objekt aufgerufen.","exception_null_or_undefined":" Das ist Null oder nicht definiert.","exception_not_function":" ist keine Funktion","exception_invalid_date_format":"Ungültiges Datumsformat: ","exception_casting":"Umwandlung nicht möglich ","exception_casting_to":" zu "},"el":{"latex":"LaTeX","cancel":"Άκυρο","accept":"Εισαγωγή","manual":"Χειροκίνητα","insert_math":"Εισαγωγή μαθηματικού τύπου - MathType","insert_chem":"Εισαγωγή χημικού τύπου - ChemType","minimize":"Ελαχιστοποίηση","maximize":"Μεγιστοποίηση","fullscreen":"Πλήρης οθόνη","exit_fullscreen":"Έξοδος από πλήρη οθόνη","close":"Κλείσιμο","mathtype":"MathType","title_modalwindow":"Τροπικό παράθυρο MathType","close_modal_warning":"Επιθυμείτε σίγουρα αποχώρηση; Θα χαθούν οι αλλαγές που έχετε κάνει.","latex_name_label":"Τύπος LaTeX","browser_no_compatible":"Το πρόγραμμα περιήγησής σας δεν είναι συμβατό με την τεχνολογία AJAX. Χρησιμοποιήστε την πιο πρόσφατη έκδοση του Mozilla Firefox.","error_convert_accessibility":"Σφάλμα κατά τη μετατροπή από MathML σε προσβάσιμο κείμενο.","exception_cross_site":"Το XSS (Cross site scripting) επιτρέπεται μόνο για HTTP.","exception_high_surrogate":"Το υψηλό υποκατάστατο δεν ακολουθείται από χαμηλό υποκατάστατο στο fixedCharCodeAt()","exception_string_length":"Μη έγκυρη συμβολοσειρά. Το μήκος πρέπει να είναι πολλαπλάσιο του 4","exception_key_nonobject":"Έγινε κλήση του Object.keys σε μη αντικείμενο","exception_null_or_undefined":" αυτό είναι μηδενικό ή δεν έχει οριστεί","exception_not_function":" δεν είναι συνάρτηση","exception_invalid_date_format":"Μη έγκυρη μορφή ημερομηνίας: ","exception_casting":"Δεν είναι δυνατή η μετατροπή ","exception_casting_to":" σε "},"en":{"latex":"LaTeX","cancel":"Cancel","accept":"Insert","manual":"Manual","insert_math":"Insert a math equation - MathType","insert_chem":"Insert a chemistry formula - ChemType","minimize":"Minimize","maximize":"Maximize","fullscreen":"Full-screen","exit_fullscreen":"Exit full-screen","close":"Close","mathtype":"MathType","title_modalwindow":"MathType modal window","close_modal_warning":"Are you sure you want to leave? The changes you made will be lost.","latex_name_label":"Latex Formula","browser_no_compatible":"Your browser is not compatible with AJAX technology. Please, use the latest version of Mozilla Firefox.","error_convert_accessibility":"Error converting from MathML to accessible text.","exception_cross_site":"Cross site scripting is only allowed for HTTP.","exception_high_surrogate":"High surrogate not followed by low surrogate in fixedCharCodeAt()","exception_string_length":"Invalid string. Length must be a multiple of 4","exception_key_nonobject":"Object.keys called on non-object","exception_null_or_undefined":" this is null or not defined","exception_not_function":" is not a function","exception_invalid_date_format":"Invalid date format : ","exception_casting":"Cannot cast ","exception_casting_to":" to "},"es":{"latex":"LaTeX","cancel":"Cancelar","accept":"Insertar","manual":"Manual","insert_math":"Insertar fórmula matemática - MathType","insert_chem":"Insertar fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Pantalla completa","exit_fullscreen":"Salir de pantalla completa","close":"Cerrar","mathtype":"MathType","title_modalwindow":"Ventana modal de MathType","close_modal_warning":"Seguro que quieres cerrar? Los cambios que has hecho se perderán","latex_name_label":"Formula en Latex","browser_no_compatible":"Tu navegador no es complatible con AJAX. Por favor, usa la última version de Mozilla Firefox.","error_convert_accessibility":"Error conviertiendo una fórmula MathML a texto accesible.","exception_cross_site":"Cross site scripting solo está permitido para HTTP.","exception_high_surrogate":"Subrogado alto no seguido por subrogado bajo en fixedCharCodeAt()","exception_string_length":"Cadena no válida. La longitud debe ser múltiplo de 4","exception_key_nonobject":"Object.keys called on non-object","exception_null_or_undefined":" esto es null o no definido","exception_not_function":" no es una función","exception_invalid_date_format":"Formato de fecha inválido: ","exception_casting":"No se puede emitir","exception_casting_to":" a "},"et":{"latex":"LaTeX","cancel":"Loobu","accept":"Lisa","manual":"Käsiraamat","insert_math":"Lisa matemaatiline valem – WIRIS","insert_chem":"Lisa keemiline valem – ChemType","minimize":"Minimeeri","maximize":"Maksimeeri","fullscreen":"Täiskuva","exit_fullscreen":"Välju täiskuvalt","close":"Sule","mathtype":"MathType","title_modalwindow":"MathType\'i modaalaken","close_modal_warning":"Kas soovite kindlasti lahkuda? Tehtud muudatused lähevad kaduma.","latex_name_label":"Latexi valem","browser_no_compatible":"Teie brauser ei ühildu AJAXi tehnoloogiaga. Palun kasutage Mozilla Firefoxi uusimat versiooni.","error_convert_accessibility":"Tõrge teisendamisel MathML-ist muudetavaks tekstiks.","exception_cross_site":"Ristskriptimine on lubatud ainult HTTP kasutamisel.","exception_high_surrogate":"Funktsioonis fixedCharCodeAt() ei järgne kõrgemale asendusliikmele madalam asendusliige.","exception_string_length":"Vigane string. Pikkus peab olema 4 kordne.","exception_key_nonobject":"Protseduur Object.keys kutsuti mitteobjekti korral.","exception_null_or_undefined":" see on null või määramata","exception_not_function":" ei ole funktsioon","exception_invalid_date_format":"Sobimatu kuupäeva kuju: ","exception_casting":"Esitamine ei õnnestu ","exception_casting_to":" – "},"eu":{"latex":"LaTeX","cancel":"Ezeztatu","accept":"Txertatu","manual":"Gida","insert_math":"Txertatu matematikako formula - MathType","insert_chem":"Txertatu formula kimiko bat - ChemType","minimize":"Ikonotu","maximize":"Maximizatu","fullscreen":"Pantaila osoa","exit_fullscreen":"Irten pantaila osotik","close":"Itxi","mathtype":"MathType","title_modalwindow":"MathType leiho modala","close_modal_warning":"Ziur irten nahi duzula? Egiten dituzun aldaketak galdu egingo dira.","latex_name_label":"LaTex Formula","browser_no_compatible":"Zure arakatzailea ez da bateragarria AJAX teknologiarekin. Erabili Mozilla Firefoxen azken bertsioa.","error_convert_accessibility":"Errorea MathMLtik testu irisgarrira bihurtzean.","exception_cross_site":"Gune arteko scriptak HTTPrako soilik onartzen dira.","exception_high_surrogate":"Ordezko baxuak ez dio ordezko altuari jarraitzen, hemen: fixedCharCodeAt()","exception_string_length":"Kate baliogabea. Luzerak 4ren multiploa izan behar du","exception_key_nonobject":"Object.keys deitu zaio objektua ez den zerbaiti","exception_null_or_undefined":" nulua edo definitu gabea da","exception_not_function":" ez da funtzio bat","exception_invalid_date_format":"Data-formatu baliogabea : ","exception_casting":"Ezin da igorri ","exception_casting_to":" honi "},"fi":{"latex":"LaTeX","cancel":"Peruuta","accept":"Lisää","manual":"Manual","insert_math":"Liitä matemaattinen kaava - MathType","insert_chem":"Lisää kemian kaava - ChemType","minimize":"Pienennä","maximize":"Suurenna","fullscreen":"Koko ruutu","exit_fullscreen":"Poistu koko ruudun tilasta","close":"Sulje","mathtype":"MathType","title_modalwindow":"MathTypen modaalinen ikkuna","close_modal_warning":"Oletko varma, että haluat poistua? Menetät tekemäsi muutokset.","latex_name_label":"Latex-kaava","browser_no_compatible":"Selaimesi ei tue AJAX-tekniikkaa. Ole hyvä ja käytä uusinta Firefox-versiota.","error_convert_accessibility":"Virhe muunnettaessa MathML:stä tekstiksi.","exception_cross_site":"Cross site scripting sallitaan vain HTTP:llä.","exception_high_surrogate":"fixedCharCodeAt(): yläsijaismerkkiä ei seurannut alasijaismerkki","exception_string_length":"Epäkelpo merkkijono. Pituuden on oltava 4:n kerrannainen","exception_key_nonobject":"Object.keys kutsui muuta kuin oliota","exception_null_or_undefined":" tämä on null tai ei määritelty","exception_not_function":" ei ole funktio","exception_invalid_date_format":"Virheellinen päivämäärämuoto : ","exception_casting":"Ei voida muuntaa tyyppiä ","exception_casting_to":" tyyppiin "},"fr":{"latex":"LaTeX","cancel":"Annuler","accept":"Insérer","manual":"Manuel","insert_math":"Insérer une formule mathématique - MathType","insert_chem":"Insérer une formule chimique - ChemType","minimize":"Minimiser","maximize":"Maximiser","fullscreen":"Plein écran","exit_fullscreen":"Quitter le plein écran","close":"Fermer","mathtype":"MathType","title_modalwindow":"Fenêtre modale MathType","close_modal_warning":"Confirmez-vous vouloir fermer ? Les changements effectués seront perdus.","latex_name_label":"Formule LaTeX","browser_no_compatible":"Votre navigateur n’est pas compatible avec la technologie AJAX. Veuillez utiliser la dernière version de Mozilla Firefox.","error_convert_accessibility":"Une erreur de conversion du format MathML en texte accessible est survenue.","exception_cross_site":"Le cross-site scripting n’est autorisé que pour HTTP.","exception_high_surrogate":"Substitut élevé non suivi d’un substitut inférieur dans fixedCharCodeAt()","exception_string_length":"Chaîne non valide. Longueur limitée aux multiples de 4","exception_key_nonobject":"Object.keys appelé sur un non-objet","exception_null_or_undefined":" nul ou non défini","exception_not_function":" n’est pas une fonction","exception_invalid_date_format":"Format de date non valide : ","exception_casting":"Impossible de convertir ","exception_casting_to":" sur "},"gl":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir unha fórmula matemática - MathType","insert_chem":"Inserir unha fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Pantalla completa","exit_fullscreen":"Saír da pantalla completa","close":"Pechar","mathtype":"MathType","title_modalwindow":"Ventá modal de MathType","close_modal_warning":"Seguro que quere saír? Perderanse os cambios realizados.","latex_name_label":"Fórmula Latex","browser_no_compatible":"O seu explorador non é compatible coa tecnoloxía AJAX. Use a versión máis recente de Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML a texto accesible.","exception_cross_site":"Os scripts de sitios só se permiten para HTTP.","exception_high_surrogate":"Suplente superior non seguido por suplente inferior en fixedCharCodeAt()","exception_string_length":"Cadea non válida. A lonxitude debe ser un múltiplo de 4","exception_key_nonobject":"Claves de obxecto chamadas en non obxecto","exception_null_or_undefined":" nulo ou non definido","exception_not_function":" non é unha función","exception_invalid_date_format":"Formato de data non válido: ","exception_casting":"Non se pode converter ","exception_casting_to":" a "},"he":{"latex":"LaTeX","cancel":"ביטול","accept":"עדכון","manual":"ידני","insert_math":"הוספת נוסחה מתמטית - MathType","insert_chem":"הוספת כתיבה כימית - ChemType","minimize":"מזערי","maximize":"מרבי","fullscreen":"מסך מלא","exit_fullscreen":"יציאה ממצב מסך מלא","close":"סגירה","mathtype":"MathType","title_modalwindow":"חלון מודאלי של MathType","close_modal_warning":"האם לצאת? שינויים אשר בוצעו ימחקו.","latex_name_label":"נוסחת Latex","browser_no_compatible":"הדפדפן שלך אינו תואם לטכנולוגיית AJAX. יש להשתמש בגרסה העדכנית ביותר של Mozilla Firefox.","error_convert_accessibility":"שגיאה בהמרה מ-MathML לטקסט נגיש.","exception_cross_site":"סקריפטינג חוצה-אתרים מורשה עבור HTTP בלבד.","exception_high_surrogate":"ערך ממלא מקום גבוה אינו מופיע אחרי ערך ממלא מקום נמוך ב-fixedCharCodeAt()‎","exception_string_length":"מחרוזת לא חוקית. האורך חייב להיות כפולה של 4","exception_key_nonobject":"בוצעה קריאה אל Object.keys ברכיב שאינו אובייקט","exception_null_or_undefined":" הוא Null או לא מוגדר","exception_not_function":"איננה פונקציה","exception_invalid_date_format":"תסדיר תאריך אינו תקין : ","exception_casting":"לא ניתן להמיר ","exception_casting_to":" ל "},"hr":{"latex":"LaTeX","cancel":"Poništi","accept":"Umetni","manual":"Priručnik","insert_math":"Umetnite matematičku formulu - MathType","insert_chem":"Umetnite kemijsku formulu - ChemType","minimize":"Minimiziraj","maximize":"Maksimiziraj","fullscreen":"Cijeli zaslon","exit_fullscreen":"Izlaz iz prikaza na cijelom zaslonu","close":"Zatvori","mathtype":"MathType","title_modalwindow":"MathType modalni prozor","close_modal_warning":"Sigurno želite zatvoriti? Izgubit će se unesene promjene.","latex_name_label":"Latex formula","browser_no_compatible":"Vaš preglednik nije kompatibilan s AJAX tehnologijom. Upotrijebite najnoviju verziju Mozilla Firefoxa.","error_convert_accessibility":"Pogreška konverzije iz MathML-a u dostupni tekst.","exception_cross_site":"Skriptiranje na različitim web-mjestima dopušteno je samo za HTTP.","exception_high_surrogate":"Iza visoke zamjene ne slijedi niska zamjena u fixedCharCodeAt()","exception_string_length":"Nevažeći niz. Duljina mora biti višekratnik broja 4","exception_key_nonobject":"Object.keys pozvano na ne-objekt","exception_null_or_undefined":" ovo je nula ili nije definirano","exception_not_function":" nije funkcija","exception_invalid_date_format":"Nevažeći format datuma : ","exception_casting":"Ne može se poslati ","exception_casting_to":" na "},"hu":{"latex":"LaTeX","cancel":"Mégsem","accept":"Beszúrás","manual":"Kézikönyv","insert_math":"Matematikai képlet beszúrása - MathType","insert_chem":"Kémiai képet beillesztése - ChemType","minimize":"Kis méret","maximize":"Nagy méret","fullscreen":"Teljes képernyő","exit_fullscreen":"Teljes képernyő elhagyása","close":"Bezárás","mathtype":"MathType","title_modalwindow":"MathType modális ablak","close_modal_warning":"Biztosan kilép? A módosítások el fognak veszni.","latex_name_label":"Latex képlet","browser_no_compatible":"A böngészője nem kompatibilis az AJAX technológiával. Használja a Mozilla Firefox legújabb verzióját.","error_convert_accessibility":"Hiba lépett fel a MathML szöveggé történő konvertálása során.","exception_cross_site":"Az oldalak közti scriptelés csak HTTP esetén engedélyezett.","exception_high_surrogate":"A magas helyettesítő karaktert nem alacsony helyettesítő karakter követi a fixedCharCodeAt() esetében","exception_string_length":"Érvénytelen karakterlánc. A hossznak a 4 többszörösének kell lennie","exception_key_nonobject":"Az Object.keys egy nem objektumra került meghívásra","exception_null_or_undefined":" null vagy nem definiált","exception_not_function":" nem függvény","exception_invalid_date_format":"Érvénytelen dátumformátum: ","exception_casting":"Nem alkalmazható ","exception_casting_to":" erre "},"id":{"latex":"LaTeX","cancel":"Membatalkan","accept":"Masukkan","manual":"Manual","insert_math":"Masukkan rumus matematika - MathType","insert_chem":"Masukkan rumus kimia - ChemType","minimize":"Minikan","maximize":"Perbesar","fullscreen":"Layar penuh","exit_fullscreen":"Keluar layar penuh","close":"Tutup","mathtype":"MathType","title_modalwindow":"Jendela modal MathType","close_modal_warning":"Anda yakin ingin keluar? Anda akan kehilangan perubahan yang Anda buat.","latex_name_label":"Rumus Latex","browser_no_compatible":"Penjelajah Anda tidak kompatibel dengan teknologi AJAX. Harap gunakan Mozilla Firefox versi terbaru.","error_convert_accessibility":"Kesalahan konversi dari MathML menjadi teks yang dapat diakses.","exception_cross_site":"Skrip lintas situs hanya diizinkan untuk HTTP.","exception_high_surrogate":"Pengganti tinggi tidak diikuti oleh pengganti rendah di fixedCharCodeAt()","exception_string_length":"String tidak valid. Panjang harus kelipatan 4","exception_key_nonobject":"Object.keys meminta nonobjek","exception_null_or_undefined":" ini tidak berlaku atau tidak didefinisikan","exception_not_function":" bukan sebuah fungsi","exception_invalid_date_format":"Format tanggal tidak valid : ","exception_casting":"Tidak dapat mentransmisikan ","exception_casting_to":" untuk "},"it":{"latex":"LaTeX","cancel":"Annulla","accept":"Inserisci","manual":"Manuale","insert_math":"Inserisci una formula matematica - MathType","insert_chem":"Inserisci una formula chimica - ChemType","minimize":"Riduci a icona","maximize":"Ingrandisci","fullscreen":"Schermo intero","exit_fullscreen":"Esci da schermo intero","close":"Chiudi","mathtype":"MathType","title_modalwindow":"Finestra modale di MathType","close_modal_warning":"Confermi di voler uscire? Le modifiche effettuate andranno perse.","latex_name_label":"Formula LaTeX","browser_no_compatible":"Il tuo browser non è compatibile con la tecnologia AJAX. Utilizza la versione più recente di Mozilla Firefox.","error_convert_accessibility":"Errore durante la conversione da MathML in testo accessibile.","exception_cross_site":"Lo scripting tra siti è consentito solo per HTTP.","exception_high_surrogate":"Surrogato alto non seguito da surrogato basso in fixedCharCodeAt()","exception_string_length":"Stringa non valida. La lunghezza deve essere un multiplo di 4","exception_key_nonobject":"Metodo Object.keys richiamato in un elemento non oggetto","exception_null_or_undefined":" questo è un valore null o non definito","exception_not_function":" non è una funzione","exception_invalid_date_format":"Formato di data non valido: ","exception_casting":"Impossibile eseguire il cast ","exception_casting_to":" a "},"ja":{"latex":"LaTeX","cancel":"キャンセル","accept":"挿入","manual":"マニュアル","insert_math":"数式を挿入 - MathType","insert_chem":"化学式を挿入 - ChemType","minimize":"最小化","maximize":"最大化","fullscreen":"全画面表示","exit_fullscreen":"全画面表示を解除","close":"閉じる","mathtype":"MathType","title_modalwindow":"MathType モードウィンドウ","close_modal_warning":"このページから移動してもよろしいですか？変更内容は失われます。","latex_name_label":"LaTeX 数式","browser_no_compatible":"お使いのブラウザは、AJAX 技術と互換性がありません。Mozilla Firefox の最新バージョンをご使用ください。","error_convert_accessibility":"MathML からアクセシブルなテキストへの変換中にエラーが発生しました。","exception_cross_site":"クロスサイトスクリプティングは、HTTP のみに許可されています。","exception_high_surrogate":"fixedCharCodeAt（）で上位サロゲートの後に下位サロゲートがありません","exception_string_length":"無効な文字列です。長さは4の倍数である必要があります","exception_key_nonobject":"Object.keys が非オブジェクトで呼び出されました","exception_null_or_undefined":" null であるか、定義されていません","exception_not_function":" は関数ではありません","exception_invalid_date_format":"無効な日付形式: ","exception_casting":"次にキャスト ","exception_casting_to":" できません "},"ko":{"latex":"LaTeX","cancel":"취소","accept":"삽입","manual":"설명서","insert_math":"수학 공식 삽입 - MathType","insert_chem":"화학 공식 입력하기 - ChemType","minimize":"최소화","maximize":"최대화","fullscreen":"전체 화면","exit_fullscreen":"전체 화면 나가기","close":"닫기","mathtype":"MathType","title_modalwindow":"MathType 모달 창","close_modal_warning":"정말로 나가시겠습니까? 변경 사항이 손실됩니다.","latex_name_label":"Latex 공식","browser_no_compatible":"사용자의 브라우저는 AJAX 기술과 호환되지 않습니다. Mozilla Firefox 최신 버전을 사용하십시오.","error_convert_accessibility":"MathML로부터 접근 가능한 텍스트로 오류 변환.","exception_cross_site":"사이트 교차 스크립팅은 HTTP 환경에서만 사용할 수 있습니다.","exception_high_surrogate":"fixedCharCodeAt()에서는 상위 서러게이트 뒤에 하위 서러게이트가 붙지 않습니다","exception_string_length":"유효하지 않은 스트링입니다. 길이는 4의 배수여야 합니다","exception_key_nonobject":"Object.keys가 non-object를 요청하였습니다","exception_null_or_undefined":" Null값이거나 정의되지 않았습니다","exception_not_function":" 함수가 아닙니다","exception_invalid_date_format":"유효하지 않은 날짜 포맷 : ","exception_casting":"캐스팅할 수 없습니다 ","exception_casting_to":" (으)로 "},"nl":{"latex":"LaTeX","cancel":"Annuleren","insert_chem":"Een scheikundige formule invoegen - ChemType","minimize":"Minimaliseer","maximize":"Maximaliseer","fullscreen":"Schermvullend","exit_fullscreen":"Verlaat volledig scherm","close":"Sluit","mathtype":"MathType","title_modalwindow":"Modaal venster MathType","close_modal_warning":"Weet je zeker dat je de app wilt sluiten? De gemaakte wijzigingen gaan verloren.","latex_name_label":"LaTeX-formule","browser_no_compatible":"Je browser is niet compatibel met AJAX-technologie. Gebruik de meest recente versie van Mozilla Firefox.","error_convert_accessibility":"Fout bij conversie van MathML naar toegankelijke tekst.","exception_cross_site":"Cross-site scripting is alleen toegestaan voor HTTP.","exception_high_surrogate":"Hoog surrogaat niet gevolgd door laag surrogaat in fixedCharCodeAt()","exception_string_length":"Ongeldige tekenreeks. Lengte moet een veelvoud van 4 zijn","exception_key_nonobject":"Object.keys opgeroepen voor niet-object","exception_null_or_undefined":" dit is nul of niet gedefinieerd","exception_not_function":" is geen functie","exception_invalid_date_format":"Ongeldige datumnotatie: ","exception_casting":"Kan niet weergeven ","exception_casting_to":" op "},"no":{"latex":"LaTeX","cancel":"Avbryt","accept":"Set inn","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Set inn ein kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringane du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettlesaren er ikkje kompatibel med AJAX-teknologien. Bruk den nyaste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering frå MathML til tilgjengeleg tekst.","exception_cross_site":"Skripting på tvers av nettstadar er bere tillaten med HTTP.","exception_high_surrogate":"Høgt surrogat er ikkje etterfølgt av lågt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengda må vera deleleg på 4","exception_key_nonobject":"Object.keys kalla på eit ikkje-objekt","exception_null_or_undefined":" dette er null eller ikkje definert","exception_not_function":" er ikkje ein funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikkje bruka casting ","exception_casting_to":" til "},"nb":{"latex":"LaTeX","cancel":"Avbryt","accept":"Insert","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Sett inn en kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringene du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettleseren er ikke kompatibel med AJAX-teknologien. Bruk den nyeste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering fra MathML til tilgjengelig tekst.","exception_cross_site":"Skripting på tvers av nettsteder er bare tillatt med HTTP.","exception_high_surrogate":"Høyt surrogat etterfølges ikke av lavt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengden må være delelig på 4","exception_key_nonobject":"Object.keys kalte på et ikke-objekt","exception_null_or_undefined":" dette er null eller ikke definert","exception_not_function":" er ikke en funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikke bruke casting ","exception_casting_to":" til "},"nn":{"latex":"LaTeX","cancel":"Avbryt","accept":"Set inn","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Set inn ein kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringane du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettlesaren er ikkje kompatibel med AJAX-teknologien. Bruk den nyaste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering frå MathML til tilgjengeleg tekst.","exception_cross_site":"Skripting på tvers av nettstadar er bere tillaten med HTTP.","exception_high_surrogate":"Høgt surrogat er ikkje etterfølgt av lågt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengda må vera deleleg på 4","exception_key_nonobject":"Object.keys kalla på eit ikkje-objekt","exception_null_or_undefined":" dette er null eller ikkje definert","exception_not_function":" er ikkje ein funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikkje bruka casting ","exception_casting_to":" til "},"pl":{"latex":"LaTeX","cancel":"Anuluj","accept":"Wstaw","manual":"Instrukcja","insert_math":"Wstaw formułę matematyczną - MathType","insert_chem":"Wstaw wzór chemiczny — ChemType","minimize":"Minimalizuj","maximize":"Maksymalizuj","fullscreen":"Pełny ekran","exit_fullscreen":"Opuść tryb pełnoekranowy","close":"Zamknij","mathtype":"MathType","title_modalwindow":"Okno modalne MathType","close_modal_warning":"Czy na pewno chcesz zamknąć? Wprowadzone zmiany zostaną utracone.","latex_name_label":"Wzór Latex","browser_no_compatible":"Twoja przeglądarka jest niezgodna z technologią AJAX Użyj najnowszej wersji Mozilla Firefox.","error_convert_accessibility":"Błąd podczas konwertowania z formatu MathML na dostępny tekst.","exception_cross_site":"Krzyżowanie skryptów witryny jest dozwolone tylko dla HTTP.","exception_high_surrogate":"Brak niskiego surogatu po wysokim surogacie w fixedCharCodeAt()","exception_string_length":"Niewłaściwy ciąg znaków. Długość musi być wielokrotnością liczby 4.","exception_key_nonobject":"Argumentem wywołanej funkcji Object.key nie jest obiekt.","exception_null_or_undefined":" jest zerowy lub niezdefiniowany","exception_not_function":" nie jest funkcją","exception_invalid_date_format":"Nieprawidłowy format daty: ","exception_casting":"Nie można rzutować ","exception_casting_to":" na "},"pt":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemática - MathType","insert_chem":"Inserir uma fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Ecrã completo","exit_fullscreen":"Sair do ecrã completo","close":"Fechar","mathtype":"MathType","title_modalwindow":"Janela modal do MathType","close_modal_warning":"Pretende sair? As alterações efetuadas serão perdidas.","latex_name_label":"Fórmula Latex","browser_no_compatible":"O seu navegador não é compatível com a tecnologia AJAX. Utilize a versão mais recente do Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML para texto acessível.","exception_cross_site":"O processamento de scripts em vários sites só é permitido para HTTP.","exception_high_surrogate":"Substituto alto não seguido por um substituto baixo em fixedCharCodeAt()","exception_string_length":"Cadeia inválida. O comprimento tem de ser um múltiplo de 4","exception_key_nonobject":"Object.keys chamou um não-objeto","exception_null_or_undefined":" é nulo ou não está definido","exception_not_function":" não é uma função","exception_invalid_date_format":"Formato de data inválido: ","exception_casting":"Não é possível adicionar ","exception_casting_to":" até "},"pt_br":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemática - MathType","insert_chem":"Insira uma fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Tela cheia","exit_fullscreen":"Sair de tela cheia","close":"Fechar","mathtype":"MathType","title_modalwindow":"Janela modal do MathType","close_modal_warning":"Tem certeza de que deseja sair? Todas as alterações serão perdidas.","latex_name_label":"Fórmula LaTeX","browser_no_compatible":"O navegador não é compatível com a tecnologia AJAX. Use a versão mais recente do Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML para texto acessível.","exception_cross_site":"O uso de scripts entre sites só é permitido para HTTP.","exception_high_surrogate":"High surrogate não seguido de low surrogate em fixedCharCodeAt()","exception_string_length":"String inválida. O comprimento deve ser um múltiplo de 4","exception_key_nonobject":"Object.keys chamados em não objeto","exception_null_or_undefined":" isto é nulo ou não definido","exception_not_function":" não é uma função","exception_invalid_date_format":"Formato de data inválido: ","exception_casting":"Não é possível transmitir ","exception_casting_to":" para "},"ro":{"latex":"LaTeX","cancel":"Anulare","accept":"Inserați","manual":"Ghid","insert_math":"Inserați o formulă matematică - MathType","insert_chem":"Inserați o formulă chimică - ChemType","minimize":"Minimizați","maximize":"Maximizați","fullscreen":"Afișați pe tot ecranul","exit_fullscreen":"Opriți afișarea pe tot ecranul","close":"Închideți","mathtype":"MathType","title_modalwindow":"Fereastră modală MathType","close_modal_warning":"Sigur doriți să ieșiți? Modificările realizate se vor pierde.","latex_name_label":"Formulă Latex","browser_no_compatible":"Browserul dvs. nu este compatibil cu tehnologia AJAX. Utilizați cea mai recentă versiune de Mozilla Firefox.","error_convert_accessibility":"Eroare la convertirea din MathML în text accesibil.","exception_cross_site":"Scriptarea între site‑uri este permisă doar pentru HTTP.","exception_high_surrogate":"Surogatul superior nu este urmat de un surogat inferior în fixedCharCodeAt()","exception_string_length":"Șir nevalid. Lungimea trebuie să fie multiplu de 4","exception_key_nonobject":"Object.keys a apelat un non-obiect","exception_null_or_undefined":" este null sau nu este definit","exception_not_function":" nu este funcție","exception_invalid_date_format":"Format de dată nevalid: ","exception_casting":"nu se poate difuza ","exception_casting_to":" către "},"ru":{"latex":"LaTeX","cancel":"отмена","accept":"Вставка","manual":"вручную","insert_math":"Вставить математическую формулу: WIRIS","insert_chem":"Вставить химическую формулу — ChemType","minimize":"Свернуть","maximize":"Развернуть","fullscreen":"На весь экран","exit_fullscreen":"Выйти из полноэкранного режима","close":"Закрыть","mathtype":"MathType","title_modalwindow":"Режимное окно MathType","close_modal_warning":"Вы уверены, что хотите выйти? Все внесенные изменения будут утрачены.","latex_name_label":"Формула Latex","browser_no_compatible":"Ваш браузер несовместим с технологией AJAX. Используйте последнюю версию Mozilla Firefox.","error_convert_accessibility":"При преобразовании формулы в текст допустимого формата произошла ошибка.","exception_cross_site":"Межсайтовые сценарии доступны только для HTTP.","exception_high_surrogate":"Младший символ-заместитель не сопровождает старший символ-заместитель в исправленном методе CharCodeAt()","exception_string_length":"Недопустимая строка. Длинна должна быть кратной 4.","exception_key_nonobject":"Метод Object.keys вызван не для объекта","exception_null_or_undefined":" значение пустое или не определено","exception_not_function":" не функция","exception_invalid_date_format":"Недопустимый формат даты: ","exception_casting":"Не удается привести ","exception_casting_to":" к "},"sv":{"latex":"LaTeX","cancel":"Avbryt","accept":"Infoga","manual":"Bruksanvisning","insert_math":"Infoga matematisk formel - MathType","insert_chem":"Infoga en kemiformel – ChemType","minimize":"Minimera","maximize":"Maximera","fullscreen":"Helskärm","exit_fullscreen":"Stäng helskärm","close":"Stäng","mathtype":"MathType","title_modalwindow":"MathType modulfönster","close_modal_warning":"Vill du avsluta? Inga ändringar kommer att sparas.","latex_name_label":"Latex-formel","browser_no_compatible":"Din webbläsare är inte kompatibel med AJAX-teknik. Använd den senaste versionen av Mozilla Firefox.","error_convert_accessibility":"Det uppstod ett fel vid konvertering från MathML till åtkomlig text.","exception_cross_site":"Skriptkörning över flera sajter är endast tillåtet för HTTP.","exception_high_surrogate":"Hög surrogat följs inte av låg surrogat i fixedCharCodeAt()","exception_string_length":"Ogiltig sträng. Längden måste vara en multipel av 4","exception_key_nonobject":"Object.keys anropade icke-objekt","exception_null_or_undefined":" det är null eller inte definierat","exception_not_function":" är inte en funktion","exception_invalid_date_format":"Ogiltigt datumformat: ","exception_casting":"Går inte att konvertera ","exception_casting_to":" till "},"tr":{"latex":"LaTeX","cancel":"Vazgeç","accept":"Ekle","manual":"Kılavuz","insert_math":"Matematik formülü ekle - MathType","insert_chem":"Kimya formülü ekleyin - ChemType","minimize":"Simge Durumuna Küçült","maximize":"Ekranı Kapla","fullscreen":"Tam Ekran","exit_fullscreen":"Tam Ekrandan Çık","close":"Kapat","mathtype":"MathType","title_modalwindow":"MathType kalıcı penceresi","close_modal_warning":"Çıkmak istediğinizden emin misiniz? Yaptığınız değişiklikler kaybolacak.","latex_name_label":"Latex Formülü","browser_no_compatible":"Tarayıcınız AJAX teknolojisiyle uyumlu değil. Lütfen en güncel Mozilla Firefox sürümünü kullanın.","error_convert_accessibility":"MathML biçiminden erişilebilir metne dönüştürme hatası.","exception_cross_site":"Siteler arası komut dosyası yazma işlemine yalnızca HTTP için izin verilir.","exception_high_surrogate":"fixedCharCodeAt() fonksiyonunda üst vekilin ardından alt vekil gelmiyor","exception_string_length":"Geçersiz dizgi. Uzunluk, 4\'ün katlarından biri olmalıdır","exception_key_nonobject":"Nesne olmayan öğe üzerinde Object.keys çağrıldı","exception_null_or_undefined":" bu değer boş veya tanımlanmamış","exception_not_function":" bir fonksiyon değil","exception_invalid_date_format":"Geçersiz tarih biçimi: ","exception_casting":"Tür dönüştürülemiyor ","exception_casting_to":" hedef: "},"zh":{"latex":"LaTeX","cancel":"取消","accept":"插入","manual":"手册","insert_math":"插入数学公式 - MathType","insert_chem":"插入化学分子式 - ChemType","minimize":"最小化","maximize":"最大化","fullscreen":"全屏幕","exit_fullscreen":"退出全屏幕","close":"关闭","mathtype":"MathType","title_modalwindow":"MathType 模式窗口","close_modal_warning":"您确定要离开吗？您所做的修改将丢失。","latex_name_label":"Latex 分子式","browser_no_compatible":"您的浏览器不兼容 AJAX 技术。请使用最新版 Mozilla Firefox。","error_convert_accessibility":"将 MathML 转换为可访问文本时出错。","exception_cross_site":"仅 HTTP 允许跨站脚本。","exception_high_surrogate":"fixedCharCodeAt() 中的高位代理之后未跟随低位代理","exception_string_length":"无效字符串。长度必须是 4 的倍数","exception_key_nonobject":"非对象调用了 Object.keys","exception_null_or_undefined":" 该值为空或未定义","exception_not_function":" 不是一个函数","exception_invalid_date_format":"无效日期格式： ","exception_casting":"无法转换 ","exception_casting_to":" 为 "},"":{}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNB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RUFBRSxFQUFFLFVBQVUsQ0FBQztRQUNqRDBSLENBQUMsR0FBRyxJQUFJLENBQUNRLEVBQUUsQ0FBQ1IsQ0FBQyxFQUFFOUUsQ0FBQyxFQUFFd0IsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFMUQsQ0FBQyxDQUFDL04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNqRHlSLENBQUMsR0FBRyxJQUFJLENBQUNTLEVBQUUsQ0FBQ1QsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUV3QixDQUFDLEVBQUVMLENBQUMsQ0FBQy9OLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDbkRvTyxDQUFDLEdBQUcsSUFBSSxDQUFDOEQsRUFBRSxDQUFDOUQsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUVtQixDQUFDLENBQUMvTixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztRQUNoRDRNLENBQUMsR0FBRyxJQUFJLENBQUNzRixFQUFFLENBQUN0RixDQUFDLEVBQUV3QixDQUFDLEVBQUVxRCxDQUFDLEVBQUVDLENBQUMsRUFBRTNELENBQUMsQ0FBQy9OLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUM3QzBSLENBQUMsR0FBRyxJQUFJLENBQUNRLEVBQUUsQ0FBQ1IsQ0FBQyxFQUFFOUUsQ0FBQyxFQUFFd0IsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFMUQsQ0FBQyxDQUFDL04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNqRHlSLENBQUMsR0FBRyxJQUFJLENBQUNTLEVBQUUsQ0FBQ1QsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUV3QixDQUFDLEVBQUVMLENBQUMsQ0FBQy9OLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO1FB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Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9qQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uLy4uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvZGlzdC9wdXJpZnkuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9sYXRleC50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL21hdGhtbC50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL3Byb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9yZXRyby50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL3NlcnZpY2VzLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2NvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2xhdGV4LmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL21hdGhtbC5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvbWQ1LmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL3NlcnZpY2Vwcm92aWRlci5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvc3RyaW5nbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvdGV4dGNhY2hlLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy91dGlsLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGxpY2Vuc2UgRE9NUHVyaWZ5IDIuNC43IHwgKGMpIEN1cmU1MyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwgUmVsZWFzZWQgdW5kZXIgdGhlIEFwYWNoZSBsaWNlbnNlIDIuMCBhbmQgTW96aWxsYSBQdWJsaWMgTGljZW5zZSAyLjAgfCBnaXRodWIuY29tL2N1cmU1My9ET01QdXJpZnkvYmxvYi8yLjQuNy9MSUNFTlNFICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH0sIF90eXBlb2Yob2JqKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgICByZXR1cm4gbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5LFxuICAgICAgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsXG4gICAgICBpc0Zyb3plbiA9IE9iamVjdC5pc0Zyb3plbixcbiAgICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgdmFyIGZyZWV6ZSA9IE9iamVjdC5mcmVlemUsXG4gICAgICBzZWFsID0gT2JqZWN0LnNlYWwsXG4gICAgICBjcmVhdGUgPSBPYmplY3QuY3JlYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0LFxuICAgICAgYXBwbHkgPSBfcmVmLmFwcGx5LFxuICAgICAgY29uc3RydWN0ID0gX3JlZi5jb25zdHJ1Y3Q7XG5cbiAgaWYgKCFhcHBseSkge1xuICAgIGFwcGx5ID0gZnVuY3Rpb24gYXBwbHkoZnVuLCB0aGlzVmFsdWUsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFmcmVlemUpIHtcbiAgICBmcmVlemUgPSBmdW5jdGlvbiBmcmVlemUoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghc2VhbCkge1xuICAgIHNlYWwgPSBmdW5jdGlvbiBzZWFsKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIWNvbnN0cnVjdCkge1xuICAgIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIGNvbnN0cnVjdChGdW5jLCBhcmdzKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChGdW5jLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgIH07XG4gIH1cblxuICB2YXIgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG4gIHZhciBhcnJheVBvcCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnBvcCk7XG4gIHZhciBhcnJheVB1c2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAgdmFyIHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbiAgdmFyIHN0cmluZ1RvU3RyaW5nID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nKTtcbiAgdmFyIHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbiAgdmFyIHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG4gIHZhciBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuICB2YXIgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcbiAgdmFyIHJlZ0V4cFRlc3QgPSB1bmFwcGx5KFJlZ0V4cC5wcm90b3R5cGUudGVzdCk7XG4gIHZhciB0eXBlRXJyb3JDcmVhdGUgPSB1bmNvbnN0cnVjdChUeXBlRXJyb3IpO1xuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHVuY29uc3RydWN0KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbiAgICB9O1xuICB9XG4gIC8qIEFkZCBwcm9wZXJ0aWVzIHRvIGEgbG9va3VwIHRhYmxlICovXG5cbiAgZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSwgdHJhbnNmb3JtQ2FzZUZ1bmMpIHtcbiAgICB2YXIgX3RyYW5zZm9ybUNhc2VGdW5jO1xuXG4gICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPSAoX3RyYW5zZm9ybUNhc2VGdW5jID0gdHJhbnNmb3JtQ2FzZUZ1bmMpICE9PSBudWxsICYmIF90cmFuc2Zvcm1DYXNlRnVuYyAhPT0gdm9pZCAwID8gX3RyYW5zZm9ybUNhc2VGdW5jIDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgICAgLy8gaW5kZXBlbmRlbnQgb2YgYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiBPYmplY3QucHJvdG90eXBlLlxuICAgICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGxjRWxlbWVudCA9IHRyYW5zZm9ybUNhc2VGdW5jKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzZXQ7XG4gIH1cbiAgLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cblxuICBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgICB2YXIgbmV3T2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuICAgIHZhciBwcm9wZXJ0eTtcblxuICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoYXBwbHkoaGFzT3duUHJvcGVydHksIG9iamVjdCwgW3Byb3BlcnR5XSkgPT09IHRydWUpIHtcbiAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuICAvKiBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBfX2xvb2t1cEdldHRlcl9fIHNvIGxldHMnXG4gICAqIHNpbXVsYXRlIGl0LiBJdCBhbHNvIGF1dG9tYXRpY2FsbHkgY2hlY2tzXG4gICAqIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlc1xuICAgKiBhY2NvcmRpbmdseS4gKi9cblxuICBmdW5jdGlvbiBsb29rdXBHZXR0ZXIob2JqZWN0LCBwcm9wKSB7XG4gICAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcblxuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgfVxuXG4gIHZhciBodG1sJDEgPSBmcmVlemUoWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlY29yYXRvcicsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInXSk7IC8vIFNWR1xuXG4gIHZhciBzdmckMSA9IGZyZWV6ZShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZXcnLCAndmtlcm4nXSk7XG4gIHZhciBzdmdGaWx0ZXJzID0gZnJlZXplKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVJbWFnZScsICdmZU1lcmdlJywgJ2ZlTWVyZ2VOb2RlJywgJ2ZlTW9ycGhvbG9neScsICdmZU9mZnNldCcsICdmZVBvaW50TGlnaHQnLCAnZmVTcGVjdWxhckxpZ2h0aW5nJywgJ2ZlU3BvdExpZ2h0JywgJ2ZlVGlsZScsICdmZVR1cmJ1bGVuY2UnXSk7IC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuXG4gIHZhciBzdmdEaXNhbGxvd2VkID0gZnJlZXplKFsnYW5pbWF0ZScsICdjb2xvci1wcm9maWxlJywgJ2N1cnNvcicsICdkaXNjYXJkJywgJ2ZlZHJvcHNoYWRvdycsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XG4gIHZhciBtYXRoTWwkMSA9IGZyZWV6ZShbJ21hdGgnLCAnbWVuY2xvc2UnLCAnbWVycm9yJywgJ21mZW5jZWQnLCAnbWZyYWMnLCAnbWdseXBoJywgJ21pJywgJ21sYWJlbGVkdHInLCAnbW11bHRpc2NyaXB0cycsICdtbicsICdtbycsICdtb3ZlcicsICdtcGFkZGVkJywgJ21waGFudG9tJywgJ21yb290JywgJ21yb3cnLCAnbXMnLCAnbXNwYWNlJywgJ21zcXJ0JywgJ21zdHlsZScsICdtc3ViJywgJ21zdXAnLCAnbXN1YnN1cCcsICdtdGFibGUnLCAnbXRkJywgJ210ZXh0JywgJ210cicsICdtdW5kZXInLCAnbXVuZGVyb3ZlciddKTsgLy8gU2ltaWxhcmx5IHRvIFNWRywgd2Ugd2FudCB0byBrbm93IGFsbCBNYXRoTUwgZWxlbWVudHMsXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuXG4gIHZhciBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xuICB2YXIgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIHZhciBodG1sID0gZnJlZXplKFsnYWNjZXB0JywgJ2FjdGlvbicsICdhbGlnbicsICdhbHQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9waWN0dXJlaW5waWN0dXJlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYmdjb2xvcicsICdib3JkZXInLCAnY2FwdHVyZScsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2NvbnRyb2xzJywgJ2NvbnRyb2xzbGlzdCcsICdjb29yZHMnLCAnY3Jvc3NvcmlnaW4nLCAnZGF0ZXRpbWUnLCAnZGVjb2RpbmcnLCAnZGVmYXVsdCcsICdkaXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLCAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsICdlbmN0eXBlJywgJ2VudGVya2V5aGludCcsICdmYWNlJywgJ2ZvcicsICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZsYW5nJywgJ2lkJywgJ2lucHV0bW9kZScsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAna2luZCcsICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9hZGluZycsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJywgJ25hbWUnLCAnbm9uY2UnLCAnbm9zaGFkZScsICdub3ZhbGlkYXRlJywgJ25vd3JhcCcsICdvcGVuJywgJ29wdGltdW0nLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwbGF5c2lubGluZScsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwdWJkYXRlJywgJ3JhZGlvZ3JvdXAnLCAncmVhZG9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldicsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd3MnLCAncm93c3BhbicsICdzcGVsbGNoZWNrJywgJ3Njb3BlJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcmNsYW5nJywgJ3N0YXJ0JywgJ3NyYycsICdzcmNzZXQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JywgJ3RhYmluZGV4JywgJ3RpdGxlJywgJ3RyYW5zbGF0ZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAneG1sbnMnLCAnc2xvdCddKTtcbiAgdmFyIHN2ZyA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcbiAgdmFyIG1hdGhNbCA9IGZyZWV6ZShbJ2FjY2VudCcsICdhY2NlbnR1bmRlcicsICdhbGlnbicsICdiZXZlbGxlZCcsICdjbG9zZScsICdjb2x1bW5zYWxpZ24nLCAnY29sdW1ubGluZXMnLCAnY29sdW1uc3BhbicsICdkZW5vbWFsaWduJywgJ2RlcHRoJywgJ2RpcicsICdkaXNwbGF5JywgJ2Rpc3BsYXlzdHlsZScsICdlbmNvZGluZycsICdmZW5jZScsICdmcmFtZScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdsYXJnZW9wJywgJ2xlbmd0aCcsICdsaW5ldGhpY2tuZXNzJywgJ2xzcGFjZScsICdscXVvdGUnLCAnbWF0aGJhY2tncm91bmQnLCAnbWF0aGNvbG9yJywgJ21hdGhzaXplJywgJ21hdGh2YXJpYW50JywgJ21heHNpemUnLCAnbWluc2l6ZScsICdtb3ZhYmxlbGltaXRzJywgJ25vdGF0aW9uJywgJ251bWFsaWduJywgJ29wZW4nLCAncm93YWxpZ24nLCAncm93bGluZXMnLCAncm93c3BhY2luZycsICdyb3dzcGFuJywgJ3JzcGFjZScsICdycXVvdGUnLCAnc2NyaXB0bGV2ZWwnLCAnc2NyaXB0bWluc2l6ZScsICdzY3JpcHRzaXplbXVsdGlwbGllcicsICdzZWxlY3Rpb24nLCAnc2VwYXJhdG9yJywgJ3NlcGFyYXRvcnMnLCAnc3RyZXRjaHknLCAnc3Vic2NyaXB0c2hpZnQnLCAnc3Vwc2NyaXB0c2hpZnQnLCAnc3ltbWV0cmljJywgJ3ZvZmZzZXQnLCAnd2lkdGgnLCAneG1sbnMnXSk7XG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgdmFyIE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5cbiAgdmFyIEVSQl9FWFBSID0gc2VhbCgvPCVbXFx3XFxXXSp8W1xcd1xcV10qJT4vZ20pO1xuICB2YXIgVE1QTElUX0VYUFIgPSBzZWFsKC9cXCR7W1xcd1xcV10qfS9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG4gIHZhciBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxuICB2YXIgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfGNpZHx4bXBwKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgKTtcbiAgdmFyIElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuICB2YXIgQVRUUl9XSElURVNQQUNFID0gc2VhbCgvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNUZcXHUzMDAwXS9nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuICApO1xuICB2YXIgRE9DVFlQRV9OQU1FID0gc2VhbCgvXmh0bWwkL2kpO1xuXG4gIHZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbiAgfTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKiBEb24ndCBleHBvcnQgdGhpcyBmdW5jdGlvbiBvdXRzaWRlIHRoaXMgbW9kdWxlIVxuICAgKiBAcGFyYW0gez9UcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9IHRydXN0ZWRUeXBlcyBUaGUgcG9saWN5IGZhY3RvcnkuXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpXG4gICAqIEByZXR1cm4gez9UcnVzdGVkVHlwZVBvbGljeX0gVGhlIHBvbGljeSBjcmVhdGVkIChvciBudWxsLCBpZiBUcnVzdGVkIFR5cGVzXG4gICAqIGFyZSBub3Qgc3VwcG9ydGVkKS5cbiAgICovXG5cblxuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmIChfdHlwZW9mKHRydXN0ZWRUeXBlcykgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIEFsbG93IHRoZSBjYWxsZXJzIHRvIGNvbnRyb2wgdGhlIHVuaXF1ZSBwb2xpY3kgbmFtZVxuICAgIC8vIGJ5IGFkZGluZyBhIGRhdGEtdHQtcG9saWN5LXN1ZmZpeCB0byB0aGUgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgRE9NUHVyaWZ5LlxuICAgIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cblxuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuXG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKSkge1xuICAgICAgc3VmZml4ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgICB9XG5cbiAgICB2YXIgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IGZ1bmN0aW9uIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVTY3JpcHRVUkw6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFVSTChzY3JpcHRVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAvLyBQb2xpY3kgY3JlYXRpb24gZmFpbGVkIChtb3N0IGxpa2VseSBhbm90aGVyIERPTVB1cmlmeSBzY3JpcHQgaGFzXG4gICAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgICAvLyBpZiBUVCBhcmUgZW5mb3JjZWQuXG4gICAgICBjb25zb2xlLndhcm4oJ1RydXN0ZWRUeXBlcyBwb2xpY3kgJyArIHBvbGljeU5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjcmVhdGVkLicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSgpIHtcbiAgICB2YXIgd2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBnZXRHbG9iYWwoKTtcblxuICAgIHZhciBET01QdXJpZnkgPSBmdW5jdGlvbiBET01QdXJpZnkocm9vdCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURPTVB1cmlmeShyb290KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMi40LjcnO1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICAgKi9cblxuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgICAgLy8gc28gdGhhdCB5b3UgY2FuIHBhc3MgeW91ciBvd24gV2luZG93XG4gICAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBET01QdXJpZnk7XG4gICAgfVxuXG4gICAgdmFyIG9yaWdpbmFsRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdm9pZCAwID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICAgIHRydXN0ZWRUeXBlcyA9IHdpbmRvdy50cnVzdGVkVHlwZXM7XG4gICAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICB2YXIgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICB2YXIgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgICB2YXIgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpOyAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcbiAgICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAgIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gICAgLy8gaXMgaW5oZXJpdGVkLlxuXG4gICAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcblxuICAgIHZhciBlbXB0eUhUTUwgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCgnJykgOiAnJztcbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuICAgIHZhciBkb2N1bWVudE1vZGUgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudE1vZGUgPSBjbG9uZShkb2N1bWVudCkuZG9jdW1lbnRNb2RlID8gZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDoge307XG4gICAgfSBjYXRjaCAoXykge31cblxuICAgIHZhciBob29rcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICAgKi9cblxuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IHR5cGVvZiBnZXRQYXJlbnROb2RlID09PSAnZnVuY3Rpb24nICYmIGltcGxlbWVudGF0aW9uICYmIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gdW5kZWZpbmVkICYmIGRvY3VtZW50TW9kZSAhPT0gOTtcbiAgICB2YXIgTVVTVEFDSEVfRVhQUiQxID0gTVVTVEFDSEVfRVhQUixcbiAgICAgICAgRVJCX0VYUFIkMSA9IEVSQl9FWFBSLFxuICAgICAgICBUTVBMSVRfRVhQUiQxID0gVE1QTElUX0VYUFIsXG4gICAgICAgIERBVEFfQVRUUiQxID0gREFUQV9BVFRSLFxuICAgICAgICBBUklBX0FUVFIkMSA9IEFSSUFfQVRUUixcbiAgICAgICAgSVNfU0NSSVBUX09SX0RBVEEkMSA9IElTX1NDUklQVF9PUl9EQVRBLFxuICAgICAgICBBVFRSX1dISVRFU1BBQ0UkMSA9IEFUVFJfV0hJVEVTUEFDRTtcbiAgICB2YXIgSVNfQUxMT1dFRF9VUkkkMSA9IElTX0FMTE9XRURfVVJJO1xuICAgIC8qKlxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgICAqL1xuXG4gICAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG5cbiAgICB2YXIgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnRmlsdGVycyksIF90b0NvbnN1bWFibGVBcnJheShtYXRoTWwkMSksIF90b0NvbnN1bWFibGVBcnJheSh0ZXh0KSkpO1xuICAgIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG5cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2ZyksIF90b0NvbnN1bWFibGVBcnJheShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkoeG1sKSkpO1xuICAgIC8qXG4gICAgICogQ29uZmlndXJlIGhvdyBET01QVXJpZnkgc2hvdWxkIGhhbmRsZSBjdXN0b20gZWxlbWVudHMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYXMgd2VsbCBhcyBjdXN0b21pemVkIGJ1aWx0LWluIGVsZW1lbnRzLlxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IHRhZ05hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgY3VzdG9tIGVsZW1lbnRzKVxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IGF0dHJpYnV0ZU5hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgYXR0cmlidXRlcyBub3Qgb24gdGhlIGFsbG93IGxpc3QpXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgYWxsb3cgY3VzdG9tIGVsZW1lbnRzIGRlcml2ZWQgZnJvbSBidWlsdC1pbnMgaWYgdGhleSBwYXNzIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjay4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cblxuICAgIHZhciBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgICAgdGFnTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0pKTtcbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiB0YWdzIChvdmVycmlkZXMgQUxMT1dFRF9UQUdTL0FERF9UQUdTKSAqL1xuXG4gICAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuXG4gICAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcbiAgICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcbiAgICAvKiBEZWNpZGUgaWYgY3VzdG9tIGRhdGEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuXG4gICAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG4gICAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgc2VsZi1jbG9zaW5nIHRhZ3MgaW4gYXR0cmlidXRlcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBVc3VhbGx5IHJlbW92ZWQgZHVlIHRvIGEgbVhTUyBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG5cbiAgICB2YXIgQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSID0gdHJ1ZTtcbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICAgKi9cblxuICAgIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG5cbiAgICB2YXIgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcbiAgICAvKiBUcmFjayB3aGV0aGVyIGNvbmZpZyBpcyBhbHJlYWR5IHNldCBvbiB0aGlzIGluc3RhbmNlIG9mIERPTVB1cmlmeS4gKi9cblxuICAgIHZhciBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGFsbCBlbGVtZW50cyAoZS5nLiBzdHlsZSwgc2NyaXB0KSBtdXN0IGJlIGNoaWxkcmVuIG9mXG4gICAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cblxuICAgIHZhciBGT1JDRV9CT0RZID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkuXG4gICAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAgICovXG5cbiAgICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkgKi9cblxuICAgIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG4gICAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAgICogY2FzZSBUcnVzdGVkIFR5cGVzIGFyZSBub3Qgc3VwcG9ydGVkICAqL1xuXG4gICAgdmFyIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgICAqIFRoaXMgc2FuaXRpemVzIG1hcmt1cHMgbmFtZWQgd2l0aCBjb2xsaWRpbmcsIGNsb2JiZXJhYmxlIGJ1aWx0LWluIERPTSBBUElzLlxuICAgICAqL1xuXG4gICAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG4gICAgLyogQWNoaWV2ZSBmdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gYnkgaXNvbGF0aW5nIHRoZSBuYW1lc3BhY2Ugb2YgbmFtZWRcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBKUyB2YXJpYWJsZXMsIG1pdGlnYXRpbmcgYXR0YWNrcyB0aGF0IGFidXNlIHRoZSBIVE1ML0RPTSBzcGVjIHJ1bGVzLlxuICAgICAqXG4gICAgICogSFRNTC9ET00gc3BlYyBydWxlcyB0aGF0IGVuYWJsZSBET00gQ2xvYmJlcmluZzpcbiAgICAgKiAgIC0gTmFtZWQgQWNjZXNzIG9uIFdpbmRvdyAowqc3LjMuMylcbiAgICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgICAqICAgLSBGb3JtIEVsZW1lbnQgUGFyZW50LUNoaWxkIFJlbGF0aW9ucyAowqc0LjEwLjMpXG4gICAgICogICAtIElmcmFtZSBzcmNkb2MgLyBOZXN0ZWQgV2luZG93UHJveGllcyAowqc0LjguNSlcbiAgICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAgICpcbiAgICAgKiBOYW1lc3BhY2UgaXNvbGF0aW9uIGlzIGltcGxlbWVudGVkIGJ5IHByZWZpeGluZyBgaWRgIGFuZCBgbmFtZWAgYXR0cmlidXRlc1xuICAgICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgICAqL1xuXG4gICAgdmFyIFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gICAgdmFyIFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG5cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcbiAgICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuXG4gICAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG4gICAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuXG4gICAgdmFyIFVTRV9QUk9GSUxFUyA9IHt9O1xuICAgIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuXG4gICAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG5cbiAgICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG4gICAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cblxuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuICAgIHZhciBNQVRITUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuICAgIHZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB2YXIgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gICAgLyogRG9jdW1lbnQgbmFtZXNwYWNlICovXG5cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgdmFyIElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG4gICAgLyogQWxsb3dlZCBYSFRNTCtYTUwgbmFtZXNwYWNlcyAqL1xuXG4gICAgdmFyIEFMTE9XRURfTkFNRVNQQUNFUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoe30sIFtNQVRITUxfTkFNRVNQQUNFLCBTVkdfTkFNRVNQQUNFLCBIVE1MX05BTUVTUEFDRV0sIHN0cmluZ1RvU3RyaW5nKTtcbiAgICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cblxuICAgIHZhciBQQVJTRVJfTUVESUFfVFlQRTtcbiAgICB2YXIgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUyA9IFsnYXBwbGljYXRpb24veGh0bWwreG1sJywgJ3RleHQvaHRtbCddO1xuICAgIHZhciBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFID0gJ3RleHQvaHRtbCc7XG4gICAgdmFyIHRyYW5zZm9ybUNhc2VGdW5jO1xuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cblxuICAgIHZhciBDT05GSUcgPSBudWxsO1xuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cblxuICAgIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxuICAgIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIHZhciBpc1JlZ2V4T3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzUmVnZXhPckZ1bmN0aW9uKHRlc3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRlc3RWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fCB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gX3BhcnNlQ29uZmlnKGNmZykge1xuICAgICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cblxuXG4gICAgICBpZiAoIWNmZyB8fCBfdHlwZW9mKGNmZykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gcHJvdG90eXBlIHBvbGx1dGlvbiAqL1xuXG5cbiAgICAgIGNmZyA9IGNsb25lKGNmZyk7XG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7IC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cblxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgPyBzdHJpbmdUb1N0cmluZyA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuICAgICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgICBBTExPV0VEX0FUVFIgPSAnQUxMT1dFRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgICBBTExPV0VEX05BTUVTUEFDRVMgPSAnQUxMT1dFRF9OQU1FU1BBQ0VTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfTkFNRVNQQUNFUywgc3RyaW5nVG9TdHJpbmcpIDogREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVM7XG4gICAgICBVUklfU0FGRV9BVFRSSUJVVEVTID0gJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgICAgREFUQV9VUklfVEFHUyA9ICdBRERfREFUQV9VUklfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIGNmZy5BRERfREFUQV9VUklfVEFHUywgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICAgIEZPUkJJRF9DT05URU5UUyA9ICdGT1JCSURfQ09OVEVOVFMnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcbiAgICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcbiAgICAgIFVTRV9QUk9GSUxFUyA9ICdVU0VfUFJPRklMRVMnIGluIGNmZyA/IGNmZy5VU0VfUFJPRklMRVMgOiBmYWxzZTtcbiAgICAgIEFMTE9XX0FSSUFfQVRUUiA9IGNmZy5BTExPV19BUklBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSBjZmcuQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFNBTklUSVpFX0RPTSA9IGNmZy5TQU5JVElaRV9ET00gIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgU0FOSVRJWkVfTkFNRURfUFJPUFMgPSBjZmcuU0FOSVRJWkVfTkFNRURfUFJPUFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBJTl9QTEFDRSA9IGNmZy5JTl9QTEFDRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBJU19BTExPV0VEX1VSSSQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSSQxO1xuICAgICAgTkFNRVNQQUNFID0gY2ZnLk5BTUVTUEFDRSB8fCBIVE1MX05BTUVTUEFDRTtcbiAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HIHx8IHt9O1xuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG5cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgICBBTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgX3RvQ29uc3VtYWJsZUFycmF5KHRleHQpKTtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gW107XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLm1hdGhNbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgbWF0aE1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuXG5cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfQVRUUikge1xuICAgICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICAgIEFMTE9XRURfQVRUUiA9IGNsb25lKEFMTE9XRURfQVRUUik7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGNmZy5BRERfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICAgIGFkZFRvU2V0KFVSSV9TQUZFX0FUVFJJQlVURVMsIGNmZy5BRERfVVJJX1NBRkVfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgICBpZiAoRk9SQklEX0NPTlRFTlRTID09PSBERUZBVUxUX0ZPUkJJRF9DT05URU5UUykge1xuICAgICAgICAgIEZPUkJJRF9DT05URU5UUyA9IGNsb25lKEZPUkJJRF9DT05URU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChGT1JCSURfQ09OVEVOVFMsIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cbiAgICAgIC8qIEFkZCAjdGV4dCBpbiBjYXNlIEtFRVBfQ09OVEVOVCBpcyBzZXQgdG8gdHJ1ZSAqL1xuXG5cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIEFkZCBodG1sLCBoZWFkIGFuZCBib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIFdIT0xFX0RPQ1VNRU5UIGlzIHRydWUgKi9cblxuXG4gICAgICBpZiAoV0hPTEVfRE9DVU1FTlQpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ2h0bWwnLCAnaGVhZCcsICdib2R5J10pO1xuICAgICAgfVxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuXG5cbiAgICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ3Rib2R5J10pO1xuICAgICAgICBkZWxldGUgRk9SQklEX1RBR1MudGJvZHk7XG4gICAgICB9IC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuXG5cbiAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgZnJlZXplKGNmZyk7XG4gICAgICB9XG5cbiAgICAgIENPTkZJRyA9IGNmZztcbiAgICB9O1xuXG4gICAgdmFyIE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ21pJywgJ21vJywgJ21uJywgJ21zJywgJ210ZXh0J10pO1xuICAgIHZhciBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTsgLy8gQ2VydGFpbiBlbGVtZW50cyBhcmUgYWxsb3dlZCBpbiBib3RoIFNWRyBhbmQgSFRNTFxuICAgIC8vIG5hbWVzcGFjZS4gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZW0gZXhwbGljaXRseVxuICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25lb3VzbHkgZGVsZXRlZCBmcm9tXG4gICAgLy8gSFRNTCBuYW1lc3BhY2UuXG5cbiAgICB2YXIgQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UUyA9IGFkZFRvU2V0KHt9LCBbJ3RpdGxlJywgJ3N0eWxlJywgJ2ZvbnQnLCAnYScsICdzY3JpcHQnXSk7XG4gICAgLyogS2VlcCB0cmFjayBvZiBhbGwgcG9zc2libGUgU1ZHIGFuZCBNYXRoTUwgdGFnc1xuICAgICAqIHNvIHRoYXQgd2UgY2FuIHBlcmZvcm0gdGhlIG5hbWVzcGFjZSBjaGVja3NcbiAgICAgKiBjb3JyZWN0bHkuICovXG5cbiAgICB2YXIgQUxMX1NWR19UQUdTID0gYWRkVG9TZXQoe30sIHN2ZyQxKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG4gICAgdmFyIEFMTF9NQVRITUxfVEFHUyA9IGFkZFRvU2V0KHt9LCBtYXRoTWwkMSk7XG4gICAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBtYXRoTWxEaXNhbGxvd2VkKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCBhIERPTSBlbGVtZW50IHdob3NlIG5hbWVzcGFjZSBpcyBiZWluZyBjaGVja2VkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgICAqICBuYW1lc3BhY2UgdGhhdCBhIHNwZWMtY29tcGxpYW50IHBhcnNlciB3b3VsZCBuZXZlclxuICAgICAqICByZXR1cm4uIFJldHVybiB0cnVlIG90aGVyd2lzZS5cbiAgICAgKi9cblxuICAgIHZhciBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpOyAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cblxuICAgICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC50YWdOYW1lKSB7XG4gICAgICAgIHBhcmVudCA9IHtcbiAgICAgICAgICBuYW1lc3BhY2VVUkk6IE5BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIUFMTE9XRURfTkFNRVNQQUNFU1tlbGVtZW50Lm5hbWVzcGFjZVVSSV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgICAvLyBpcyB2aWEgPHN2Zz4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnO1xuICAgICAgICB9IC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYWBcbiAgICAgICAgLy8gc3ZnIGlmIHBhcmVudCBpcyBlaXRoZXIgPGFubm90YXRpb24teG1sPiBvciBNYXRoTUxcbiAgICAgICAgLy8gdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHMuXG5cblxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9IC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBTVkdcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBTVkcgbmFtZXNwYWNlLlxuXG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBNYXRoTUxcbiAgICAgICAgLy8gaXMgdmlhIDxtYXRoPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ21hdGgnO1xuICAgICAgICB9IC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG5cblxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCcgJiYgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV07XG4gICAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIE1hdGhNTFxuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIE1hdGhNTCBuYW1lc3BhY2UuXG5cblxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gSFRNTCBpcyB2aWFcbiAgICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UgJiYgIUhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAvLyBXZSBkaXNhbGxvdyB0YWdzIHRoYXQgYXJlIHNwZWNpZmljIGZvciBNYXRoTUxcbiAgICAgICAgLy8gb3IgU1ZHIGFuZCBzaG91bGQgbmV2ZXIgYXBwZWFyIGluIEhUTUwgbmFtZXNwYWNlXG5cblxuICAgICAgICByZXR1cm4gIUFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSAmJiAoQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UU1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH0gLy8gRm9yIFhIVE1MIGFuZCBYTUwgZG9jdW1lbnRzIHRoYXQgc3VwcG9ydCBjdXN0b20gbmFtZXNwYWNlc1xuXG5cbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcsIE1hdGhNTCBvciBhbGxvd2VkIHZpYSBBTExPV0VEX05BTUVTUEFDRVMpLlxuICAgICAgLy8gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cblxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfZm9yY2VSZW1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBlbGVtZW50OiBub2RlXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBlbXB0eUhUTUw7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfcmVtb3ZlQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgIGF0dHJpYnV0ZTogbnVsbCxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgLy8gV2Ugdm9pZCBhdHRyaWJ1dGUgdmFsdWVzIGZvciB1bnJlbW92YWJsZSBcImlzXCJcIiBhdHRyaWJ1dGVzXG5cbiAgICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET00gfHwgUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pbml0RG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZGlydHkgYSBzdHJpbmcgb2YgZGlydHkgbWFya3VwXG4gICAgICogQHJldHVybiB7RG9jdW1lbnR9IGEgRE9NLCBmaWxsZWQgd2l0aCB0aGUgZGlydHkgbWFya3VwXG4gICAgICovXG5cblxuICAgIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGRvYztcbiAgICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZTtcblxuICAgICAgaWYgKEZPUkNFX0JPRFkpIHtcbiAgICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBJZiBGT1JDRV9CT0RZIGlzbid0IHVzZWQsIGxlYWRpbmcgd2hpdGVzcGFjZSBuZWVkcyB0byBiZSBwcmVzZXJ2ZWQgbWFudWFsbHkgKi9cbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzdHJpbmdNYXRjaChkaXJ0eSwgL15bXFxyXFxuXFx0IF0rLyk7XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnICYmIE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gUm9vdCBvZiBYSFRNTCBkb2MgbXVzdCBjb250YWluIHhtbG5zIGRlY2xhcmF0aW9uIChzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hodG1sMS9ub3JtYXRpdmUuaHRtbCNzdHJpY3QpXG4gICAgICAgIGRpcnR5ID0gJzxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPjxoZWFkPjwvaGVhZD48Ym9keT4nICsgZGlydHkgKyAnPC9ib2R5PjwvaHRtbD4nO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlydHlQYXlsb2FkID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICAvKlxuICAgICAgICogVXNlIHRoZSBET01QYXJzZXIgQVBJIGJ5IGRlZmF1bHQsIGZhbGxiYWNrIGxhdGVyIGlmIG5lZWRzIGJlXG4gICAgICAgKiBET01QYXJzZXIgbm90IHdvcmsgZm9yIHN2ZyB3aGVuIGhhcyBtdWx0aXBsZSByb290IGVsZW1lbnQuXG4gICAgICAgKi9cblxuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5UGF5bG9hZCwgUEFSU0VSX01FRElBX1RZUEUpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuICAgICAgLyogVXNlIGNyZWF0ZUhUTUxEb2N1bWVudCBpbiBjYXNlIERPTVBhcnNlciBpcyBub3QgYXZhaWxhYmxlICovXG5cblxuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gSVNfRU1QVFlfSU5QVVQgPyBlbXB0eUhUTUwgOiBkaXJ0eVBheWxvYWQ7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHsvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbCk7XG4gICAgICB9XG4gICAgICAvKiBXb3JrIG9uIHdob2xlIGRvY3VtZW50IG9yIGp1c3QgaXRzIGJvZHkgKi9cblxuXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFdIT0xFX0RPQ1VNRU5UID8gZG9jLmRvY3VtZW50RWxlbWVudCA6IGJvZHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICAgKi9cblxuXG4gICAgdmFyIF9jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uIF9jcmVhdGVJdGVyYXRvcihyb290KSB7XG4gICAgICByZXR1cm4gY3JlYXRlTm9kZUl0ZXJhdG9yLmNhbGwocm9vdC5vd25lckRvY3VtZW50IHx8IHJvb3QsIHJvb3QsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG5cblxuICAgIHZhciBfaXNDbG9iYmVyZWQgPSBmdW5jdGlvbiBfaXNDbG9iYmVyZWQoZWxtKSB7XG4gICAgICByZXR1cm4gZWxtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLmhhc0NoaWxkTm9kZXMgIT09ICdmdW5jdGlvbicpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2lzTm9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pc05vZGUgPSBmdW5jdGlvbiBfaXNOb2RlKG9iamVjdCkge1xuICAgICAgcmV0dXJuIF90eXBlb2YoTm9kZSkgPT09ICdvYmplY3QnID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IG9iamVjdCAmJiBfdHlwZW9mKG9iamVjdCkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2V4ZWN1dGVIb29rXG4gICAgICogRXhlY3V0ZSB1c2VyIGNvbmZpZ3VyYWJsZSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSBub2RlIHRvIHdvcmsgb24gd2l0aCB0aGUgaG9va1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgICAqL1xuXG5cbiAgICB2YXIgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gX2V4ZWN1dGVIb29rKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXJyYXlGb3JFYWNoKGhvb2tzW2VudHJ5UG9pbnRdLCBmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICBob29rLmNhbGwoRE9NUHVyaWZ5LCBjdXJyZW50Tm9kZSwgZGF0YSwgQ09ORklHKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG5cblxuICAgIHZhciBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSB7XG4gICAgICB2YXIgY29udGVudDtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgICAgLyogQ2hlY2sgaWYgZWxlbWVudCBpcyBjbG9iYmVyZWQgb3IgY2FuIGNsb2JiZXIgKi9cblxuXG4gICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG5cblxuICAgICAgaWYgKHJlZ0V4cFRlc3QoL1tcXHUwMDgwLVxcdUZGRkZdLywgY3VycmVudE5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG5cblxuICAgICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGFsbG93ZWRUYWdzOiBBTExPV0VEX1RBR1NcbiAgICAgIH0pO1xuICAgICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG5cblxuICAgICAgaWYgKGN1cnJlbnROb2RlLmhhc0NoaWxkTm9kZXMoKSAmJiAhX2lzTm9kZShjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCkgJiYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQpIHx8ICFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLmlubmVySFRNTCkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIE1pdGlnYXRlIGEgcHJvYmxlbSB3aXRoIHRlbXBsYXRlcyBpbnNpZGUgc2VsZWN0ICovXG5cblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnICYmIHJlZ0V4cFRlc3QoLzx0ZW1wbGF0ZS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBSZW1vdmUgZWxlbWVudCBpZiBhbnl0aGluZyBmb3JiaWRzIGl0cyBwcmVzZW5jZSAqL1xuXG5cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYSBjdXN0b20gZWxlbWVudCB0byBoYW5kbGUgKi9cbiAgICAgICAgaWYgKCFGT1JCSURfVEFHU1t0YWdOYW1lXSAmJiBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCh0YWdOYW1lKSkge1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHRhZ05hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cblxuXG4gICAgICAgIGlmIChLRUVQX0NPTlRFTlQgJiYgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXSkge1xuICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb3VudCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSwgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogQ2hlY2sgd2hldGhlciBlbGVtZW50IGhhcyBhIHZhbGlkIG5hbWVzcGFjZSAqL1xuXG5cbiAgICAgIGlmIChjdXJyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgIV9jaGVja1ZhbGlkTmFtZXNwYWNlKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogTWFrZSBzdXJlIHRoYXQgb2xkZXIgYnJvd3NlcnMgZG9uJ3QgZ2V0IGZhbGxiYWNrLXRhZyBtWFNTICovXG5cblxuICAgICAgaWYgKCh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8IHRhZ05hbWUgPT09ICdub2VtYmVkJyB8fCB0YWdOYW1lID09PSAnbm9mcmFtZXMnKSAmJiByZWdFeHBUZXN0KC88XFwvbm8oc2NyaXB0fGVtYmVkfGZyYW1lcykvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgVE1QTElUX0VYUFIkMSwgJyAnKTtcblxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG4gICAgdmFyIF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cbiAgICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKiBBbGxvdyB2YWxpZCBkYXRhLSogYXR0cmlidXRlczogQXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhZnRlciBcIi1cIlxuICAgICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgICAgWE1MLWNvbXBhdGlibGUgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjeG1sLWNvbXBhdGlibGUgYW5kIGh0dHA6Ly93d3cudzMub3JnL1RSL3htbC8jZDBlODA0KVxuICAgICAgICAgIFdlIGRvbid0IG5lZWQgdG8gY2hlY2sgdGhlIHZhbHVlOyBpdCdzIGFsd2F5cyBVUkkgc2FmZS4gKi9cblxuXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJDEsIGxjTmFtZSkpIDsgZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIHJlZ0V4cFRlc3QoQVJJQV9BVFRSJDEsIGxjTmFtZSkpIDsgZWxzZSBpZiAoIUFMTE9XRURfQVRUUltsY05hbWVdIHx8IEZPUkJJRF9BVFRSW2xjTmFtZV0pIHtcbiAgICAgICAgaWYgKCAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHwgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgbGNOYW1lID09PSAnaXMnICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB2YWx1ZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHZhbHVlKSkpIDsgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSQxLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJDEsICcnKSkpIDsgZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfYmFzaWNDdXN0b21FbGVtZW50Q2hlY2tcbiAgICAgKiBjaGVja3MgaWYgYXQgbGVhc3Qgb25lIGRhc2ggaXMgaW5jbHVkZWQgaW4gdGFnTmFtZSwgYW5kIGl0J3Mgbm90IHRoZSBmaXJzdCBjaGFyXG4gICAgICogZm9yIG1vcmUgc29waGlzdGljYXRlZCBjaGVja2luZyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy92YWxpZGF0ZS1lbGVtZW50LW5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBuYW1lIG9mIHRoZSB0YWcgb2YgdGhlIG5vZGUgdG8gc2FuaXRpemVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKSB7XG4gICAgICB2YXIgYXR0cjtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciBsY05hbWU7XG4gICAgICB2YXIgbDtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gY3VycmVudE5vZGUuYXR0cmlidXRlcztcbiAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cblxuICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhvb2tFdmVudCA9IHtcbiAgICAgICAgYXR0ck5hbWU6ICcnLFxuICAgICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgICAgYWxsb3dlZEF0dHJpYnV0ZXM6IEFMTE9XRURfQVRUUlxuICAgICAgfTtcbiAgICAgIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDtcbiAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG5cbiAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgYXR0ciA9IGF0dHJpYnV0ZXNbbF07XG4gICAgICAgIHZhciBfYXR0ciA9IGF0dHIsXG4gICAgICAgICAgICBuYW1lID0gX2F0dHIubmFtZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZVVSSSA9IF9hdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFsdWUgPSBuYW1lID09PSAndmFsdWUnID8gYXR0ci52YWx1ZSA6IHN0cmluZ1RyaW0oYXR0ci52YWx1ZSk7XG4gICAgICAgIGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKG5hbWUpO1xuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgICAgaG9va0V2ZW50LmF0dHJOYW1lID0gbGNOYW1lO1xuICAgICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICAgIGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyID0gdW5kZWZpbmVkOyAvLyBBbGxvd3MgZGV2ZWxvcGVycyB0byBzZWUgdGhpcyBpcyBhIHByb3BlcnR5IHRoZXkgY2FuIHNldFxuXG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XG5cbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cblxuICAgICAgICBpZiAoaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG5cblxuICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG5cblxuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuXG5cbiAgICAgICAgaWYgKCFBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgJiYgcmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFNhbml0aXplIGF0dHJpYnV0ZSBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIE1VU1RBQ0hFX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIEVSQl9FWFBSJDEsICcgJyk7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBUTVBMSVRfRVhQUiQxLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIC8qIElzIGB2YWx1ZWAgdmFsaWQgZm9yIHRoaXMgYXR0cmlidXRlPyAqL1xuXG5cbiAgICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmICghX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogRnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIHZpYSBuYW1lc3BhY2UgaXNvbGF0aW9uLFxuICAgICAgICAgKiBQcmVmaXggaWQgYW5kIG5hbWUgYXR0cmlidXRlcyB3aXRoIGB1c2VyLWNvbnRlbnQtYFxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGlmIChTQU5JVElaRV9OQU1FRF9QUk9QUyAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSkge1xuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhpcyB2YWx1ZVxuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpOyAvLyBQcmVmaXggdGhlIHZhbHVlIGFuZCBsYXRlciByZS1jcmVhdGUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW5pdGl6ZWQgdmFsdWVcblxuXG4gICAgICAgICAgdmFsdWUgPSBTQU5JVElaRV9OQU1FRF9QUk9QU19QUkVGSVggKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBIYW5kbGUgYXR0cmlidXRlcyB0aGF0IHJlcXVpcmUgVHJ1c3RlZCBUeXBlcyAqL1xuXG5cbiAgICAgICAgaWYgKHRydXN0ZWRUeXBlc1BvbGljeSAmJiBfdHlwZW9mKHRydXN0ZWRUeXBlcykgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIDsgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlKGxjVGFnLCBsY05hbWUpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRIVE1MJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYXNlICdUcnVzdGVkU2NyaXB0VVJMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVTY3JpcHRVUkwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBIYW5kbGUgaW52YWxpZCBkYXRhLSogYXR0cmlidXRlIHNldCBieSB0cnktY2F0Y2hpbmcgaXQgKi9cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICovXG5cblxuICAgIHZhciBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbiBfc2FuaXRpemVTaGFkb3dET00oZnJhZ21lbnQpIHtcbiAgICAgIHZhciBzaGFkb3dOb2RlO1xuXG4gICAgICB2YXIgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoZnJhZ21lbnQpO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG5cbiAgICAgIHdoaWxlIChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogRGVlcCBzaGFkb3cgRE9NIGRldGVjdGVkICovXG5cblxuICAgICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuXG5cbiAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhzaGFkb3dOb2RlKTtcbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZVxuICAgICAqIFB1YmxpYyBtZXRob2QgcHJvdmlkaW5nIGNvcmUgc2FuaXRhdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBkaXJ0eSBzdHJpbmcgb3IgRE9NIG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHkpIHtcbiAgICAgIHZhciBjZmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGJvZHk7XG4gICAgICB2YXIgaW1wb3J0ZWROb2RlO1xuICAgICAgdmFyIGN1cnJlbnROb2RlO1xuICAgICAgdmFyIG9sZE5vZGU7XG4gICAgICB2YXIgcmV0dXJuTm9kZTtcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG5cbiAgICAgIElTX0VNUFRZX0lOUFVUID0gIWRpcnR5O1xuXG4gICAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgICAgZGlydHkgPSAnPCEtLT4nO1xuICAgICAgfVxuICAgICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuXG5cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIHdlIGNhbiBydW4uIE90aGVyd2lzZSBmYWxsIGJhY2sgb3IgaWdub3JlICovXG5cblxuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuICAgICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG5cblxuICAgICAgaWYgKCFTRVRfQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgfVxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG4gICAgICAvKiBDaGVjayBpZiBkaXJ0eSBpcyBjb3JyZWN0bHkgdHlwZWQgZm9yIElOX1BMQUNFICovXG5cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgICAvKiBEbyBzb21lIGVhcmx5IHByZS1zYW5pdGl6YXRpb24gdG8gYXZvaWQgdW5zYWZlIHJvb3Qgbm9kZXMgKi9cbiAgICAgICAgaWYgKGRpcnR5Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhkaXJ0eS5ub2RlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgIC8qIE5vZGUgaXMgYWxyZWFkeSBhIGJvZHksIHVzZSBhcyBpcyAqL1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgICB9XG4gICAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cblxuXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcbiAgICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cblxuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG5cblxuICAgICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG5cblxuICAgICAgdmFyIG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG4gICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cblxuXG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG5cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgICBvbGROb2RlID0gY3VycmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIG9sZE5vZGUgPSBudWxsO1xuICAgICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cbiAgICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuXG5cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCB8fCBBTExPV0VEX0FUVFIuc2hhZG93cm9vdG1vZCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG4gICAgICAvKiBTZXJpYWxpemUgZG9jdHlwZSBpZiBhbGxvd2VkICovXG5cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCAmJiBBTExPV0VEX1RBR1NbJyFkb2N0eXBlJ10gJiYgYm9keS5vd25lckRvY3VtZW50ICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgJiYgcmVnRXhwVGVzdChET0NUWVBFX05BTUUsIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUpKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gJzwhRE9DVFlQRSAnICsgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSArICc+XFxuJyArIHNlcmlhbGl6ZWRIVE1MO1xuICAgICAgfVxuICAgICAgLyogU2FuaXRpemUgZmluYWwgc3RyaW5nIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIEVSQl9FWFBSJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgVE1QTElUX0VYUFIkMSwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAgICogc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICBfcGFyc2VDb25maWcoY2ZnKTtcblxuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSB0aGUgY29uZmlndXJhdGlvblxuICAgICAqIGNsZWFyQ29uZmlnXG4gICAgICpcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uICh0YWcsIGF0dHIsIHZhbHVlKSB7XG4gICAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgICBpZiAoIUNPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoe30pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyh0YWcpO1xuICAgICAgdmFyIGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGF0dHIpO1xuICAgICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gcmVtb3ZlXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IHJlbW92ZWQocG9wcGVkKSBob29rXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm4gYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhvb2tzID0ge307XG4gICAgfTtcblxuICAgIHJldHVybiBET01QdXJpZnk7XG4gIH1cblxuICB2YXIgcHVyaWZ5ID0gY3JlYXRlRE9NUHVyaWZ5KCk7XG5cbiAgcmV0dXJuIHB1cmlmeTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVyaWZ5LmpzLm1hcFxuIiwiaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gJy4vcHJvcGVydGllcyc7XG5pbXBvcnQgeyByZW5kZXJMYXRleCB9IGZyb20gJy4vbGF0ZXgnO1xuaW1wb3J0IHsgcmVuZGVyTWF0aE1MIH0gZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IHsgYnlwYXNzRW5jYXBzdWxhdGlvbiB9IGZyb20gJy4vcmV0cm8nO1xuXG4vLyBUaGlzIHNob3VsZCBiZSB0aGUgb25seSBjb2RlIGV4ZWN1dGVkIG91dHNpZGUgb2YgYSBmdW5jdGlvblxuLy8gYW5kIHRoZSBvbmx5IGNvZGUgY29udGFpbmluZyBicm93c2VyIGdsb2JhbHMgKGUuZy4gd2luZG93KVxuLy8gVE9ETyB0cnkgdG8gc2V0IHVwIHRoZSBsaW50ZXIgdG8gY2hlY2sgdGhlc2UgdHdvIGNvbnN0cmFpbnRzXG5tYWluKHdpbmRvdyk7XG5cbi8qKlxuICogSW5pdGlhbCBmdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkaW5nIHRoZSBzY3JpcHQuXG4gKiBAcGFyYW0ge1dpbmRvd30gdyAtIFRoZSB3aW5kb3cgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1haW4odzogV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgY29uc3QgcHJvcGVydGllczogUHJvcGVydGllcyA9IGF3YWl0IFByb3BlcnRpZXMuZ2VuZXJhdGUoKTtcblxuICAvLyBFeHBvc2UgdGhlIGdsb2JhbHMgdG8gdGhlIGJyb3dzZXJcbiAgKHcgYXMgYW55KS52aWV3ZXIgPSB7XG4gICAgcHJvcGVydGllcyxcbiAgfTtcblxuICBjb25zdCBkb2N1bWVudCA9IHcuZG9jdW1lbnQ7XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBET00gbG9va2luZyBmb3IgTGFUZVggYW5kIDxtYXRoPiBlbGVtZW50cy5cbiAgICogUmVwbGFjZXMgdGhlbSB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHJlbmRlcmVkIGltYWdlcyB3aXRoaW4gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IC0gVGhlIERPTSBkb2N1bWVudCBpbiB3aGljaCB0byBzZWFyY2ggZm9yIHRoZSByZW5kZXJpbmcgcm9vdC5cbiAgICogQHBhcmFtIHtNdXRhdGlvbk9ic2VydmVyfSBvYnNlcnZlciAtIE11dGF0aW9uIG9ic2VydmVyIHRvIGFjdGl2YXRlIG9yIHJlYWN0aXZhdGUgZXZlcnkgdGltZSB0aGUgcmVuZGVyaW5nIHJvb3QgY2hhbmdlcy5cbiAgICovXG4gIHByb3BlcnRpZXMucmVuZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9wZXJ0aWVzLmVsZW1lbnQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBhd2FpdCByZW5kZXJMYXRleChwcm9wZXJ0aWVzLCBlbGVtZW50KTtcbiAgICAgIGF3YWl0IHJlbmRlck1hdGhNTChwcm9wZXJ0aWVzLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSW5pdGlhbCBmdW5jdGlvbiB0byBjYWxsIG9uY2UgZG9jdW1lbnQgaXMgbG9hZGVkXG4gIC8vIFJlbmRlcnMgZm9ybXVsYXMgYW5kIHNldHMgb2JzZXJ2ZXJcbiAgY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRmlyc3QgcmVuZGVyXG4gICAgcHJvcGVydGllcy5yZW5kZXIoKTtcblxuICAgIC8vIENhbGxiYWNrIGNhbGxlZCBldmVyeSB0aW1lIHRoZXJlIGlzIGEgbXV0YXRpb24gaW4gdGhlIHdhdGNoZWQgRE9NIGVsZW1lbnRcbiAgICAvLyBGZWF0dXJlIHRlbXBvcmFyaWx5IGRpc2FibGVkIGR1ZSB0byBLQi0zNzgzNFxuICAgIC8vIG5ldyBNdXRhdGlvbk9ic2VydmVyKGFzeW5jIChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgLy8gICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgIC8vICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgIC8vICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAvLyAgICAgICAgIGF3YWl0IHByb3BlcnRpZXMucmVuZGVyKCk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICAvLyAvLyBXZSBuZWVkIHRvIHdhdGNoIG92ZXIgdGhlIHdob2xlIGRvY3VtZW50LCBpbiBjYXNlIHRoZSBQcm9wZXJ0aWVzLmVsZW1lbnQgaXMgaW5zZXJ0ZWRcbiAgICAvLyAvLyBlLmcuIHdlIHNldCBQcm9wZXJ0aWVzLmVsZW1lbnQgPSAnI3JlbmRlckFyZWEnIGFuZCB0aGVuIHdlIGFwcGVuZCA8ZGl2IGlkPVwicmVuZGVyQXJlYVwiPiQkMisyPTQkJDwvZGl2PiB0byB0aGUgZG9jdW1lbnRcbiAgICAvLyAub2JzZXJ2ZShkb2N1bWVudCwge1xuICAgIC8vICAgYXR0cmlidXRlczogdHJ1ZSwgLy8gSW4gY2FzZSBhbiBhdHRyaWJ1dGUgaXMgY2hhbmdlZCBpbiBhIDxtYXRoPiBub2RlLCBmb3IgaW5zdGFuY2VcbiAgICAvLyAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8gSW4gY2FzZSBhIG5ldyA8bWF0aD4gb3IgJCRsYXRleCQkIG5vZGUgaXMgYWRkZWQsIGZvciBpbnN0YW5jZVxuICAgIC8vICAgc3VidHJlZTogdHJ1ZSwgLy8gSW4gY2FzZSBhIDxtYXRoPiBub2RlIGlzIGFkZGVkIGFzIGEgZGVzY2VuZGFudCBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudCwgZm9yIGluc3RhbmNlXG4gICAgLy8gfSk7XG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L0RPTUNvbnRlbnRMb2FkZWRfZXZlbnQjY2hlY2tpbmdfd2hldGhlcl9sb2FkaW5nX2lzX2FscmVhZHlfY29tcGxldGVcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgLy8gTG9hZGluZyBoYXNuJ3QgZmluaXNoZWQgeWV0XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc3RhcnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGBET01Db250ZW50TG9hZGVkYCBoYXMgYWxyZWFkeSBmaXJlZFxuICAgIHN0YXJ0KCk7XG4gIH1cblxuICAvLyBFeHBvc2UgdGhlIG9sZCBWaWV3ZXIgQVBJIGFzIGEgZ2xvYmFsXG4gIGJ5cGFzc0VuY2Fwc3VsYXRpb24ocHJvcGVydGllcywgdyk7XG5cbiAgLy8gRGlzcGF0Y2ggYW4gZXZlbnQgbm90aWZ5aW5nIHRoYXQgdGhlIHZpZXdlciBoYXMgYmVlbiBsb2FkZWRcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZpZXdlckxvYWRlZCcpKTtcbn1cbiIsImltcG9ydCB7IGxhdGV4VG9NYXRobWwgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnRpZXMnO1xuXG5pbnRlcmZhY2UgTGF0ZXhQb3NpdGlvbiB7XG4gIHN0YXJ0OiBudW1iZXIsXG4gIGVuZDogbnVtYmVyLFxufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBET00gbG9va2luZyBmb3IgTGFUZVggbm9kZXMgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCB0aGUgY29ycmVzcG9uZGluZyByZW5kZXJlZCBpbWFnZXMuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gQW55IERPTSBlbGVtZW50IHRoYXQgY2FuIGNvbnRhaW4gTWF0aE1MLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyTGF0ZXgocHJvcGVydGllczogUHJvcGVydGllcywgcm9vdDogSFRNTEVsZW1lbnQpIHtcblxuICBpZiAocHJvcGVydGllcy52aWV3ZXIgIT09ICdpbWFnZScgJiYgcHJvcGVydGllcy52aWV3ZXIgIT09ICdsYXRleCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsYXRleE5vZGVzID0gZmluZExhdGV4VGV4dE5vZGVzKHJvb3QpO1xuXG4gIGZvciAoY29uc3QgbGF0ZXhOb2RlIG9mIGxhdGV4Tm9kZXMpIHtcbiAgICBhd2FpdCByZXBsYWNlTGF0ZXhJblRleHROb2RlKHByb3BlcnRpZXMsIGxhdGV4Tm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIExhVGVYIGluc3RhbmNlcyB3aXRoIE1hdGhNTCBpbnNpZGUgYSBnaXZlbiBub2RlLlxuICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllcyBvZiB0aGUgdmlld2VyLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGV4dCBub2RlIGluIHdoaWNoIHRvIHNlYXJjaCBhbmQgcmVwbGFjZSBMYVRlWCBpbnN0YW5jZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcGxhY2VMYXRleEluVGV4dE5vZGUocHJvcGVydGllczogUHJvcGVydGllcywgbm9kZTogTm9kZSkge1xuICBjb25zdCB0ZXh0Q29udGVudDogc3RyaW5nID0gbm9kZS50ZXh0Q29udGVudCB8fCAnJztcbiAgbGV0IHBvczogbnVtYmVyID0gMDtcblxuICB3aGlsZSAocG9zIDwgdGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgY29uc3QgbmV4dExhdGV4UG9zaXRpb246IExhdGV4UG9zaXRpb24gPSBnZXROZXh0TGF0ZXhQb3MocG9zLCB0ZXh0Q29udGVudCk7XG4gICAgaWYgKG5leHRMYXRleFBvc2l0aW9uKSB7XG4gICAgICAvLyBHZXQgbGVmdCBub24gTGFUZVggdGV4dC5cbiAgICAgIGNvbnN0IGxlZnRUZXh0OiBzdHJpbmcgPSB0ZXh0Q29udGVudC5zdWJzdHJpbmcocG9zLCBuZXh0TGF0ZXhQb3NpdGlvbi5zdGFydCk7XG4gICAgICBjb25zdCBsZWZ0VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWZ0VGV4dCk7XG4gICAgICAvLyBDcmVhdGUgYSBub2RlIHdpdGggbGVmdCB0ZXh0LlxuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUobGVmdFRleHROb2RlLCBub2RlKTtcbiAgICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5ub2RlVmFsdWUuc3Vic3RyaW5nKHBvcywgbmV4dExhdGV4UG9zaXRpb24uc3RhcnQpO1xuXG4gICAgICAvLyBHZXQgTGFUZVggdGV4dC5cbiAgICAgIGNvbnN0IGxhdGV4ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKG5leHRMYXRleFBvc2l0aW9uLnN0YXJ0ICsgJyQkJy5sZW5ndGgsIG5leHRMYXRleFBvc2l0aW9uLmVuZCk7XG4gICAgICAvLyBDb252ZXJ0IExhVGVYIHRvIG1hdGhtbC5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGF0ZXhUb01hdGhtbChsYXRleCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc1Jvb3QsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNFeHRlbnNpb24pO1xuICAgICAgLy8gSW5zZXJ0IG1hdGhtbCBub2RlLlxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChyZXNwb25zZS50ZXh0KTtcblxuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIG5vZGUpO1xuICAgICAgbm9kZS5ub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcobmV4dExhdGV4UG9zaXRpb24uc3RhcnQsIG5leHRMYXRleFBvc2l0aW9uLmVuZCk7XG5cbiAgICAgIHBvcyA9IG5leHRMYXRleFBvc2l0aW9uLmVuZCArICckJCcubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBtb3JlIExhVGVYIG5vZGUgZm91bmQuXG4gICAgICBjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHBvcyk7XG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGUpO1xuICAgICAgbm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgIHBvcyA9IHRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvLyBEZWxldGUgb3JpZ2luYWwgdGV4dCBub2RlLlxuICBub2RlLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSB3aXRoIGFsbCBIVE1MIExhVGVYIG5vZGVzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIEFueSBET00gZWxlbWVudCB0aGF0IGNhbiBjb250YWluIExhVGVYLlxuICogQHJldHVybnMge05vZGVbXX0gQXJyYXkgd2l0aCBhbGwgSFRNTCBMYVRlWCBub2RlcyBpbnNpZGUgcm9vdC5cbiAqL1xuZnVuY3Rpb24gZmluZExhdGV4VGV4dE5vZGVzKHJvb3Q6IGFueSk6IE5vZGVbXSB7XG4gIGNvbnN0IG5vZGVJdGVyYXRvcjogTm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKFxuICAgIHJvb3QsXG4gICAgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgbm9kZSA9PiAvKFxcJFxcJCkoLiopKFxcJFxcJCkvLnRlc3Qobm9kZS5ub2RlVmFsdWUgfHwgJycpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUXG4gICk7XG4gIGNvbnN0IGxhdGV4Tm9kZXMgOiBOb2RlW10gPSBbXTtcblxuICBsZXQgY3VycmVudE5vZGU6IE5vZGUgfCBudWxsO1xuICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgIGxhdGV4Tm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGF0ZXhOb2Rlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB7c3RhcnQsIGVuZH0gd2l0aCB0aGUgc3RhcnQgYW5kIGVuZCBsYXRleCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgLSBDdXJyZW50IHBvc2l0aW9uIGluc2lkZSB0aGUgdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB3aGVyZSB0aGUgbmV4dCBsYXRleCBpdCB3aWxsIGJlIHNlYXJjaGVkLlxuICogQFxuICovXG5mdW5jdGlvbiBnZXROZXh0TGF0ZXhQb3MocG9zOiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IExhdGV4UG9zaXRpb24ge1xuICBjb25zdCBmaXJzdExhdGV4VGFncyA9IHRleHQuaW5kZXhPZignJCQnLCBwb3MpO1xuICBjb25zdCBzZWNvbmRMYXRleFRhZ3MgPSBmaXJzdExhdGV4VGFncyA9PSAtMSA/IC0xIDogdGV4dC5pbmRleE9mKCckJCcsIGZpcnN0TGF0ZXhUYWdzICsgJyQkJy5sZW5ndGgpO1xuICByZXR1cm4gZmlyc3RMYXRleFRhZ3MgIT0gLTEgJiYgc2Vjb25kTGF0ZXhUYWdzICE9IC0xID8geydzdGFydCc6IGZpcnN0TGF0ZXhUYWdzLCAnZW5kJzogc2Vjb25kTGF0ZXhUYWdzfSA6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgc2hvd0ltYWdlLCBjcmVhdGVJbWFnZSwgbWF0aG1sMmFjY2Vzc2libGUsIHByb2Nlc3NKc29uUmVzcG9uc2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IGh0bWxFbnRpdGllc1RvWG1sRW50aXRpZXMsIGNvcnJ1cHRNYXRoTUwgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBNYXRoTUwgZnJvbSAnQHdpcmlzL21hdGh0eXBlLWh0bWwtaW50ZWdyYXRpb24tZGV2a2l0L3NyYy9tYXRobWwnO1xuXG4vKipcbiAqIERhdGEgb2J0YWluZWQgd2hlbiByZW5kZXJpbmcgaW1hZ2UuIERhdGEgbmVlZGVkIHRvIHNldCB0aGUgZm9ybXVsYSBpbWFnZSBwYXJhbWV0ZXJzLlxuICovXG5pbnRlcmZhY2UgRm9ybXVsYURhdGEge1xuICBjb250ZW50OiBzdHJpbmcsXG4gIGJhc2VsaW5lOiBzdHJpbmcsXG4gIGhlaWdodDogc3RyaW5nLFxuICB3aWR0aDogc3RyaW5nLFxufVxuXG5mdW5jdGlvbiBkZWNvZGVTYWZlTWF0aE1MKHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIHJvb3Q6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKCdkZWNvZGVTYWZlTWF0aE1MJyk7XG4gIGNvbnN0IHNhZmVOb2RlcyA9IGZpbmRTYWZlTWF0aE1MVGV4dE5vZGVzKHJvb3QpO1xuXG4gIGZvciAoY29uc3Qgc2FmZU5vZGUgb2Ygc2FmZU5vZGVzKSB7XG4gICAgLy8gYXdhaXQgcmVwbGFjZVNhZmVJblRleHROb2RlKHByb3BlcnRpZXMsIHNhZmVOb2RlKTtcbiAgICBjb25zdCBtYXRobWwgPSBNYXRoTUwuc2FmZVhtbERlY29kZShzYWZlTm9kZS50ZXh0Q29udGVudCk7XG4gICAgLy8gSW5zZXJ0IG1hdGhtbCBub2RlLlxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobWF0aG1sKTtcblxuICAgIHNhZmVOb2RlLnBhcmVudE5vZGU/Lmluc2VydEJlZm9yZShmcmFnbWVudCwgc2FmZU5vZGUpO1xuICAgIHNhZmVOb2RlLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHNhZmVOb2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2FmZU1hdGhNTFRleHROb2Rlcyhyb290OiBhbnkpOiBOb2RlW10ge1xuICBjb25zdCBub2RlSXRlcmF0b3I6IE5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcbiAgICByb290LFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIG5vZGUgPT4gL8KrbWF0aCguKj8pwqtcXC9tYXRowrsvZy50ZXN0KG5vZGUubm9kZVZhbHVlIHx8ICcnKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVFxuICApO1xuICBjb25zdCBzYWZlTm9kZXMgOiBOb2RlW10gPSBbXTtcblxuICBsZXQgY3VycmVudE5vZGU6IE5vZGUgfCBudWxsO1xuICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgIHNhZmVOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzYWZlTm9kZXM7XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIERPTSBsb29raW5nIGZvciA8bWF0aD4gZWxlbWVudHMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHJlbmRlcmVkIGltYWdlcyB3aXRoaW4gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gQW55IERPTSBlbGVtZW50IHRoYXQgY2FuIGNvbnRhaW4gTWF0aE1MLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyTWF0aE1MKHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIHJvb3Q6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgaWYgKHByb3BlcnRpZXMudmlld2VyICE9PSAnaW1hZ2UnICYmIHByb3BlcnRpZXMudmlld2VyICE9PSAnbWF0aG1sJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlY29kZVNhZmVNYXRoTUwocHJvcGVydGllcywgcm9vdCk7XG5cbiAgZm9yKGNvbnN0IG1hdGhFbGVtZW50IG9mIFsuLi5yb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXRoJyldKSB7XG4gICAgY29uc3QgbW1sID0gaHRtbEVudGl0aWVzVG9YbWxFbnRpdGllcyhtYXRoRWxlbWVudC5vdXRlckhUTUwpO1xuXG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmIChwcm9wZXJ0aWVzLndpcmlzcGx1Z2lucGVyZm9ybWFuY2UgPT09ICd0cnVlJykge1xuICAgICAgLy8gVHJhbnNmb3JtIG1tbCB0byBpbWcuXG4gICAgICByZXN1bHQgPSBhd2FpdCBzaG93SW1hZ2UobW1sLCBwcm9wZXJ0aWVzLmxhbmcsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNSb290LCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY3JlYXRlaW1hZ2UgcmV0dXJucyB0aGUgVVJMIHRvIHNob3dpbWFnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBpbWFnZVxuICAgICAgbGV0IHVybCA9IGF3YWl0IGNyZWF0ZUltYWdlKG1tbCwgcHJvcGVydGllcy5sYW5nLCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzUm9vdCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbik7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgbmVjZXNzYXJ5IGR1ZSB0byBhIGJ1ZyBpbiBob3cgdGhlIHNlcnZpY2VzIGludGVyb3BlcmF0ZS5cbiAgICAgIC8vIFRPRE8gZml4IHRoZSBjYXVzaW5nIGJ1Z1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJ3BsdWdpbnNhcHAnLCAncGx1Z2lucy9hcHAnKTtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NKc29uUmVzcG9uc2UoZmV0Y2godXJsKSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGltZyBwcm9wZXJ0aWVzLlxuICAgIGNvbnN0IGltZyA9IGF3YWl0IHNldEltYWdlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCByZXN1bHQsIG1tbCk7XG4gICAgLy8gY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChkYXRhLnJlc3VsdC5jb250ZW50KTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIE1hdGhNTCBmb3IgdGhlIGdlbmVyYXRlZCBmb3JtdWxhIGltYWdlLlxuICAgIG1hdGhFbGVtZW50LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChpbWcsIG1hdGhFbGVtZW50KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltYWdlIGZvcm11bGEgY29udGFpbmluZyBhbGwgTWF0aFR5cGUgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcGVydGllcyAtIFByb3BlcnRpZXMgb2YgdGhlIHZpZXdlci5cbiAqIEBwYXJhbSB7Rm9ybXVsYURhdGF9IGRhdGEgLSBPYmplY3QgY29udGFpbmluZyBpbWFnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW1sIC0gVGhlIE1hdGhNTCBvZiB0aGUgZm9ybXVsYSBpbWFnZSBiZWVpbmcgY3JlYXRlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSAtIEZvcm11bGEgaW1hZ2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldEltYWdlUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzLCBkYXRhOiBGb3JtdWxhRGF0YSwgbW1sOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcblxuICAvLyBDcmVhdGUgaW1hZyBlbGVtZW50LlxuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgLy8gU2V0IGltYWdlIHNyYy4gRW5jb2RlIHRoZSByZXN1bHQgc3ZnLlxuICBpbWcuc3JjID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YS5jb250ZW50KX1gO1xuXG4gIC8vIFNldCBvdGhlciBpbWFnZSBwcm9wZXJ0aWVzLlxuICBpbWcuc2V0QXR0cmlidXRlKHByb3BlcnRpZXMud2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUsIG1tbCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1dpcmlzZm9ybXVsYScpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21hdGgnKTtcblxuICAvLyBJZiB0aGUgcmVuZGVyIHJldHVybnMgZGltZW5zaW9ucyBwcm9wZXJ0aWVzLCBzZXQgdGhlbSB0byB0aGUgaW1hZ2UuXG4gIGlmICgrZGF0YS5oZWlnaHQgPiAwKSB7XG4gICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIi1cIiArICgrZGF0YS5oZWlnaHQgLSArZGF0YS5iYXNlbGluZSkgKyBcInB4XCI7XG4gICAgaW1nLmhlaWdodCA9ICtkYXRhLmhlaWdodDtcbiAgICBpbWcud2lkdGggPSArZGF0YS53aWR0aDtcbiAgfVxuXG4gIC8vIFNldCB0aGUgYWx0IHRleHQgd2hlbmV2ZXIgdGhlcmUncyBhIHRyYW5zbGF0aW9uIGZvciB0aGUgY2hhcmFjdGVycyBhbmQgTWF0aE1MIG9uIHRoZSBtbWwuXG4gIGlmICghY29ycnVwdE1hdGhNTC5zb21lKGNvcnJ1cHRNYXRoTUwgPT4gbW1sLmluY2x1ZGVzKGNvcnJ1cHRNYXRoTUwpKSkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgbWF0aG1sMmFjY2Vzc2libGUobW1sLCBwcm9wZXJ0aWVzLmxhbmcsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNSb290LCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uKTtcbiAgICBpbWcuYWx0ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiBpbWc7XG5cbn1cbiIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb25Kc29uLCBTdGF0dXNFcnJvciB9IGZyb20gJy4vc2VydmljZXMnO1xuXG4vLyBIZWxwZXIgdHlwZXMgZm9yIENvbmZpZyBiZWxvd1xudHlwZSBWaWV3ZXIgPSAnbm9uZScgfCAnaW1hZ2UnIHwgJ21hdGhtbCcgfCAnbGF0ZXgnO1xudHlwZSBXaXJpc3BsdWdpbnBlcmZvcm1hbmNlID0gJ3RydWUnIHwgJ2ZhbHNlJztcblxuLyoqXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbGwgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB2aWV3ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgZWRpdG9yU2VydmljZXNSb290Pzogc3RyaW5nLFxuICBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbj86IHN0cmluZyxcbiAgYmFja2VuZENvbmZpZz86IHtcbiAgICB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlPzogV2lyaXNwbHVnaW5wZXJmb3JtYW5jZSxcbiAgICB3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZT86IHN0cmluZyxcbiAgfSxcbiAgZHBpPzogbnVtYmVyLFxuICBlbGVtZW50Pzogc3RyaW5nLFxuICBsYW5nPzogc3RyaW5nLFxuICB2aWV3ZXI/OiBWaWV3ZXIsXG4gIHpvb20/OiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEZhbGxiYWNrIHZhbHVlcyBmb3IgdGhlIGNvbmZpZ3VyYXRpb25zIHRoYXQgYXJlIG5vdCBzZXQuXG4gKi9cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IENvbmZpZyA9IHtcbiAgZWRpdG9yU2VydmljZXNSb290OiAnaHR0cHM6Ly93d3cud2lyaXMubmV0L2RlbW8vcGx1Z2lucy9hcHAvJyxcbiAgZWRpdG9yU2VydmljZXNFeHRlbnNpb246ICcnLFxuICBiYWNrZW5kQ29uZmlnOiB7XG4gICAgd2lyaXNwbHVnaW5wZXJmb3JtYW5jZTogJ3RydWUnLFxuICAgIHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlOiAnZGF0YS1tYXRobWwnXG4gIH0sXG4gIGRwaTogOTYsXG4gIGVsZW1lbnQ6ICdib2R5JyxcbiAgbGFuZzogJ2VuJyxcbiAgdmlld2VyOiAnbm9uZScsXG4gIHpvb206IDEsXG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyB3aWxsIGhhbmRsZSB0aGUgcGFyYW1ldGVycyBkZWZpbmVkIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydGllcyB7XG5cbiAgcmVuZGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+ID0gYXN5bmMgKCkgPT4ge307XG5cbiAgLy8gR2V0IFVSTCBwcm9wZXJ0aWVzIChyZXRyb2NvbXBhdGliaWxpdHkpLlxuICBjb25maWc6IENvbmZpZyA9IGRlZmF1bHRWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEluc3RlYWQsIHVzZSB7QGxpbmsgUHJvcGVydGllcy5nZW5lcmF0ZX0uXG4gICAqIENvbnN0cnVjdG9ycyBjYW5ub3QgYmUgYXN5bmMgc28gd2UgbWFrZSBpdCBwcml2YXRlIGFuZCBmb3JjZSBpbnN0YW50aWF0aW9uIHRocm91Z2ggYW4gYWx0ZXJuYXRpdmUgc3RhdGljIG1ldGhvZC5cbiAgICovXG4gIHByaXZhdGUgbmV3KCkge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgc2V0cyB1cCBhIG5ldyBpbnN0YW5jZSBvZiBjbGFzcyBQcm9wZXJ0aWVzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGUoKTogUHJvbWlzZTxQcm9wZXJ0aWVzPiB7XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQcm9wZXJ0aWVzKCk7XG5cbiAgICAvLyBHZXQgVVJMIHBhcmFtZXRlcnMgZnJvbSA8c2NyaXB0PlxuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSAnV0lSSVNwbHVnaW5zLmpzJztcbiAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3BsdWdpbk5hbWV9XCJdYCk7XG5cbiAgICBpZiAoISFzY3JpcHQpIHtcblxuICAgICAgY29uc3QgcGx1Z2luTmFtZVBvc2l0aW9uOiBudW1iZXIgPSBzY3JpcHQuc3JjLmxhc3RJbmRleE9mKHBsdWdpbk5hbWUpO1xuICAgICAgY29uc3QgcGFyYW1zOiBzdHJpbmcgPSBzY3JpcHQuc3JjLnN1YnN0cmluZyhwbHVnaW5OYW1lUG9zaXRpb24gKyBwbHVnaW5OYW1lLmxlbmd0aCk7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XG5cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCdkcGknKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCdkcGknKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy5kcGkgPSArdXJsUGFyYW1zLmdldCgnZHBpJyk7XG4gICAgICB9XG4gICAgICBpZiAodXJsUGFyYW1zLmdldCgnZWxlbWVudCcpICE9PSBudWxsICYmIHVybFBhcmFtcy5nZXQoJ2VsZW1lbnQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy5lbGVtZW50ID0gdXJsUGFyYW1zLmdldCgnZWxlbWVudCcpO1xuICAgICAgfVxuICAgICAgaWYgKHVybFBhcmFtcy5nZXQoJ2xhbmcnKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCdsYW5nJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5jb25maWcubGFuZyA9IHVybFBhcmFtcy5nZXQoJ2xhbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCd2aWV3ZXInKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCd2aWV3ZXInKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy52aWV3ZXIgPSAodXJsUGFyYW1zLmdldCgndmlld2VyJykgYXMgVmlld2VyKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCd6b29tJykgIT09IG51bGwgJiYgdXJsUGFyYW1zLmdldCgnem9vbScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuY29uZmlnLnpvb20gPSArdXJsUGFyYW1zLmdldCgnem9vbScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gR2V0IGJhY2tlbmQgcGFyYW1ldGVycyBjYWxsaW5nIHRoZSBjb25maWd1cmF0aW9uanNvbiBzZXJ2aWNlXG4gICAgdHJ5IHtcbiAgICAgIGluc3RhbmNlLmNvbmZpZy5iYWNrZW5kQ29uZmlnID0gYXdhaXQgY29uZmlndXJhdGlvbkpzb24oXG4gICAgICAgIFsnd2lyaXNwbHVnaW5wZXJmb3JtYW5jZScsICd3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSddLFxuICAgICAgICBpbnN0YW5jZS5lZGl0b3JTZXJ2aWNlc1Jvb3QsXG4gICAgICAgIGluc3RhbmNlLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uLFxuICAgICAgKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgU3RhdHVzRXJyb3IpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZzsgbGVhdmUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlZGl0b3JTZXJ2aWNlc1Jvb3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNSb290IHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmVkaXRvclNlcnZpY2VzUm9vdDtcbiAgfVxuXG4gIHNldCBlZGl0b3JTZXJ2aWNlc1Jvb3QoZWRpdG9yU2VydmljZXNSb290OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5lZGl0b3JTZXJ2aWNlc1Jvb3QgPSBlZGl0b3JTZXJ2aWNlc1Jvb3Q7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbiB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjtcbiAgfVxuXG4gIHNldCBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbihlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNFeHRlbnNpb24gPSBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFuZ3VhZ2UuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgbGFuZyBwYXJhbWV0ZXIgc2V0IGluIHRoZSA8c2NyaXB0PiAoV0lSSVNwbHVnaW4uanM/bGFuZz0uLi4pXG4gICAqIC0gVGhlIEhUTUwgZG9jdW1lbnQgbGFuZ3VhZ2UgKDxodG1sIGxhbmc9Li4uPikuXG4gICAqIC0gVGhlIGxhbmd1YWdlIG9mIHRoZSBicm93c2VyLlxuICAgKiAtIEVuZ2xpc2gsIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgbGFuZ3VhZ2Ugc3RyaW5nLlxuICAgKi9cbiAgZ2V0IGxhbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWdMYW5nID0gKHRoaXMuY29uZmlnLmxhbmcgPT09ICdpbmhlcml0JykgPyBudWxsIDogdGhpcy5jb25maWcubGFuZztcbiAgICByZXR1cm4gY29uZmlnTGFuZyB8fFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5sYW5nIHx8XG4gICAgICBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMubGFuZztcbiAgfVxuXG4gIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmxhbmcgPSBsYW5nO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2aWV3ZXIgbW9kZSBmb3IgdGhlIE1hdGhNTC5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSB2aWV3ZXIgcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP3ZpZXdlcj0uLi4pXG4gICAqIC0gbm9uZSwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCB2aWV3ZXIoKTogVmlld2VyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudmlld2VyIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLnZpZXdlcjtcbiAgfVxuXG4gIHNldCB2aWV3ZXIodmlld2VyOiBWaWV3ZXIpIHtcbiAgICB0aGlzLmNvbmZpZy52aWV3ZXIgPSB2aWV3ZXI7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRwaSBvZiB0aGUgaW1hZ2VzLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIGRwaSBwYXJhbWV0ZXIgc2V0IGluIHRoZSA8c2NyaXB0PiAoV0lSSVNwbHVnaW4uanM/ZHBpPS4uLilcbiAgICogLSA5NiwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCBkcGkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZHBpIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmRwaTtcbiAgfVxuXG4gIHNldCBkcGkoZHBpOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5kcGkgPSBkcGk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHpvb20gb2YgdGhlIGltYWdlcy5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSB6b29tIHBhcmFtZXRlciBzZXQgaW4gdGhlIDxzY3JpcHQ+IChXSVJJU3BsdWdpbi5qcz96b29tPS4uLilcbiAgICogLSAxLCBieSBkZWZhdWx0LlxuICAgKi9cbiAgZ2V0IHpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuem9vbSB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy56b29tO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuem9vbSA9IHpvb207XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGVsZW1lbnQgaW4gd2hpY2ggdG8gcmVuZGVyIGZvcm11bGFzLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIHpvb20gcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP2VsZW1lbnQ9Li4uKVxuICAgKiAtICdib2R5JywgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCBlbGVtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVsZW1lbnQgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuZWxlbWVudDtcbiAgfVxuXG4gIHNldCBlbGVtZW50KGVsZW1lbnQ6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBXaXJpcyBwbHVnaW4gcGVyZm9ybWFuY2UuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqIC0gdHJ1ZSwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlKCk6IFdpcmlzcGx1Z2lucGVyZm9ybWFuY2Uge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kQ29uZmlnLndpcmlzcGx1Z2lucGVyZm9ybWFuY2UgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuYmFja2VuZENvbmZpZy53aXJpc3BsdWdpbnBlcmZvcm1hbmNlO1xuICB9XG5cbiAgc2V0IHdpcmlzcGx1Z2lucGVyZm9ybWFuY2Uod2lyaXNwbHVnaW5wZXJmb3JtYW5jZTogV2lyaXNwbHVnaW5wZXJmb3JtYW5jZSkge1xuICAgIHRoaXMuY29uZmlnLmJhY2tlbmRDb25maWcud2lyaXNwbHVnaW5wZXJmb3JtYW5jZSA9IHdpcmlzcGx1Z2lucGVyZm9ybWFuY2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIFdpcmlzIE1hdGhNTCBhdHRyaWJ1dGUuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqIC0gZGF0YS1tYXRobWwsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZENvbmZpZy53aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5iYWNrZW5kQ29uZmlnLndpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlO1xuICB9XG5cbiAgc2V0IHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlKHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5iYWNrZW5kQ29uZmlnLndpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlID0gd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyTGF0ZXggfSBmcm9tIFwiLi9sYXRleFwiO1xuaW1wb3J0IHsgcmVuZGVyTWF0aE1MIH0gZnJvbSBcIi4vbWF0aG1sXCI7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vcHJvcGVydGllc1wiO1xuXG4vKipcbiAqIEV4cG9zZXMgdGhlIHtAbGluayBKc1BsdWdpblZpZXdlcn0gc2luZ2xldG9uIGluc3RhbmNlIGFzIHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5WaWV3ZXIuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge1dpbmRvd30gdyAtIEluc3RhbmNlIG9mIHRoZSBnbG9iYWwgd2luZG93LlxuICogQGRlcHJlY2F0ZWQgQ29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlckxhdGV4fSBvciB7QGxpbmsgcmVuZGVyTWF0aE1MfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc0VuY2Fwc3VsYXRpb24ocHJvcGVydGllczogUHJvcGVydGllcywgdzogV2luZG93KSB7XG4gIGNvbnN0IHdhbnkgPSB3IGFzIGFueTtcblxuICBpZiAodHlwZW9mIHdhbnkuY29tID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzLmpzID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzLmpzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzLmpzLkpzUGx1Z2luVmlld2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzLmpzLkpzUGx1Z2luVmlld2VyID0gSnNQbHVnaW5WaWV3ZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBKc1BsdWdpblZpZXdlci5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBjb21wYXRpYmlsaXR5IGxheWVyIHdpdGggdGhlIG9sZCBWaWV3ZXIuXG4gKiBTZWUgaGF4ZS9zcmMtaGF4ZS9jb20vd2lyaXMvanMvSnNQbHVnaW5WaWV3ZXIuaHggaW4gaW4gdGhlIHJlcG8gd2lyaXMvcGx1Z2lucyBwcmV2aW91cyB0byBjb21taXQgZGYxMjQ4YS5cbiAqXG4gKiBXQVJOSU5HOiB0aGUgbWV0aG9kcyBpbiB0aGlzIGNsYXNzIG1heSBjb250YWluIGRpcmVjdCByZWZlcmVuY2VzIHRvIGdsb2JhbHMgc3VjaCBhcyB3aW5kb3cgYW5kIGRvY3VtZW50LlxuICpcbiAqIEBkZXByZWNhdGVkIENvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0gb3Ige0BsaW5rIHJlbmRlck1hdGhNTH0uXG4gKi9cbmNsYXNzIEpzUGx1Z2luVmlld2VyIHtcbiAgc3RhdGljIGluc3RhbmNlOiBKc1BsdWdpblZpZXdlcjtcbiAgc3RhdGljIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IEpzUGx1Z2luVmlld2VyIHtcbiAgICBpZiAoSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2UgPSBuZXcgSnNQbHVnaW5WaWV3ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFsbCB0aGUgZm9ybXVsYXMgd3JpdHRlbiBpbiBTYWZlTWF0aE1MIGluc2lkZSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byByZW5kZXIgU2FmZU1hdGhNTCBmb3JtdWxhcy5cbiAgICogQHBhcmFtIGFzeW5jaHJvbm91c2x5IC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBkZXByZWNhdGVkIFRoZXJlIGlzIGN1cnJlbnRseSBubyByZXBsYWNlbWVudCBmb3IgcmVuZGVyaW5nIFNhZmVNYXRoTUwgZm9ybXVsYXMuXG4gICAqIFBsZWFzZSBjb25zaWRlciB1c2luZyB7QGxpbmsgcmVuZGVyTGF0ZXh9IG9yIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICAgKi9cbiAgcGFyc2VTYWZlTWF0aE1MRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdmFyIG1hdGhtbFBvc2l0aW9ucyA9IFtdO1xuICAgIEpzUGx1Z2luVmlld2VyLmdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKGVsZW1lbnQsIG1hdGhtbFBvc2l0aW9ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRobWxQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtYXRobWxQb3NpdGlvbiA9IG1hdGhtbFBvc2l0aW9uc1tpXTtcbiAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1hdGhcIik7XG4gICAgICBtYXRobWxQb3NpdGlvbi5uZXh0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBtYXRobWxQb3NpdGlvbi5uZXh0RWxlbWVudCk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IEpzUGx1Z2luVmlld2VyLmRlY29kZVNhZmVNYXRoTUwobWF0aG1sUG9zaXRpb24uc2FmZU1NTCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgdGhlIGZvcm11bGFzIGluIHRoZSBkb2N1bWVudC5cbiAgICogQHBhcmFtIGFzeW5jaHJvbm91c2x5IC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBzYWZlWG1sIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICAgKi9cbiAgYXN5bmMgcGFyc2VEb2N1bWVudChhc3luY2hyb25vdXNseT86IGJvb2xlYW4sIGNhbGxiYWNrRnVuYz86ICgpID0+IHZvaWQsIHNhZmVYbWw/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlbmRlck1hdGhNTChKc1BsdWdpblZpZXdlci5wcm9wZXJ0aWVzLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgdGhlIGZvcm11bGFzIGluc2lkZSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byByZW5kZXIgZm9ybXVsYXMuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgY29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlck1hdGhNTH0uXG4gICAqL1xuICBhc3luYyBwYXJzZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFzeW5jaHJvbm91c2x5PzogYm9vbGVhbiwgY2FsbGJhY2tGdW5jPzogKCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiByZW5kZXJNYXRoTUwoSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcywgZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhbGwgdGhlIExhVGVYIGZvcm11bGFzIGluIHRoZSBkb2N1bWVudCB0byBNYXRoTUwuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgY29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlckxhdGV4fS5cbiAgICovXG4gIGFzeW5jIHBhcnNlTGF0ZXhEb2N1bWVudChhc3luY2hyb25vdXNseT86IGJvb2xlYW4sIGNhbGxiYWNrRnVuYz86ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVuZGVyTGF0ZXgoSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcywgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFsbCB0aGUgTGFUZVggZm9ybXVsYXMgaW5zaWRlIHRoZSBnaXZlbiBlbGVtZW50IHRvIE1hdGhNTC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byBjb252ZXJ0IGZvcm11bGFzLlxuICAgKiBAcGFyYW0gYXN5bmNocm9ub3VzbHkgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tGdW5jIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0uXG4gICAqL1xuICBhc3luYyBwYXJzZUxhdGV4RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlbmRlckxhdGV4KEpzUGx1Z2luVmlld2VyLnByb3BlcnRpZXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZGVjb2RlU2FmZU1hdGhNTChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgc2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcyA9IEpzQ2hhcmFjdGVycy5nZXRTYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzKCk7XG4gICAgdmFyIHhtbENoYXJhY3RlcnMgPSBKc0NoYXJhY3RlcnMuZ2V0WE1MQ2hhcmFjdGVycygpO1xuICAgIHZhciBzYWZlWE1MQ2hhcmFjdGVycyA9IEpzQ2hhcmFjdGVycy5nZXRTYWZlWE1MQ2hhcmFjdGVycygpO1xuXG4gICAgdmFyIHRhZ09wZW5lckVudGl0eSA9IHNhZmVYTUxDaGFyYWN0ZXJzRW50aXRpZXMudGFnT3BlbmVyO1xuICAgIHZhciB0YWdDbG9zZXJFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLnRhZ0Nsb3NlcjtcbiAgICB2YXIgZG91YmxlUXVvdGVFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLmRvdWJsZVF1b3RlO1xuICAgIHZhciByZWFsRG91YmxlUXVvdGVFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLnJlYWxEb3VibGVRdW90ZTtcblxuXG4gICAgLy8gSW1wb3J0YW50IHRvIG5vdCBjaGFuZ2UgZnVuY3Rpb24gcGFyYW1ldGVyLlxuICAgIHZhciBpbnB1dENvcHkgPSBpbnB1dC5zbGljZSgpO1xuXG4gICAgLy8gRGVjb2RpbmcgZW50aXRpZXMuXG4gICAgaW5wdXRDb3B5ID0gaW5wdXRDb3B5LnNwbGl0KHRhZ09wZW5lckVudGl0eSkuam9pbihzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdDbG9zZXJFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMudGFnQ2xvc2VyKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQoZG91YmxlUXVvdGVFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdChyZWFsRG91YmxlUXVvdGVFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlKTtcblxuICAgIHZhciB0YWdPcGVuZXIgPSBzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXI7XG4gICAgdmFyIHRhZ0Nsb3NlciA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ0Nsb3NlcjtcbiAgICB2YXIgZG91YmxlUXVvdGUgPSBzYWZlWE1MQ2hhcmFjdGVycy5kb3VibGVRdW90ZTtcbiAgICB2YXIgcmVhbERvdWJsZVF1b3RlID0gc2FmZVhNTENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlO1xuICAgIHZhciBhbXBlcnNhbmQgPSBzYWZlWE1MQ2hhcmFjdGVycy5hbXBlcnNhbmQ7XG4gICAgdmFyIHF1b3RlID0gc2FmZVhNTENoYXJhY3RlcnMucXVvdGU7XG5cbiAgICAvLyBEZWNvZGluZyBjaGFyYWN0ZXJzLlxuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oeG1sQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oeG1sQ2hhcmFjdGVycy50YWdDbG9zZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdChkb3VibGVRdW90ZSkuam9pbih4bWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQoYW1wZXJzYW5kKS5qb2luKHhtbENoYXJhY3RlcnMuYW1wZXJzYW5kKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQocXVvdGUpLmpvaW4oeG1sQ2hhcmFjdGVycy5xdW90ZSk7XG5cbiAgICAvLyBXZSBhcmUgcmVwbGFjaW5nICQgYnkgJiB3aGVuIGl0cyBwYXJ0IG9mIGFuIGVudGl0eSBmb3IgcmV0cm9jb21wYXRpYmlsaXR5LlxuICAgIC8vIE5vdywgdGhlIHN0YW5kYXJkIGlzIHJlcGxhY2UgwqcgYnkgJi5cbiAgICB2YXIgcmV0dXJuVmFsdWUgPSAnJztcbiAgICB2YXIgY3VycmVudEVudGl0eSA9IG51bGw7XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBpbnB1dENvcHkubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hhcmFjdGVyID0gaW5wdXRDb3B5LmNoYXJBdChpKTtcbiAgICAgIGlmIChjdXJyZW50RW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PSAnJCcpIHtcbiAgICAgICAgICBjdXJyZW50RW50aXR5ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PSAnOycpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gJyYnICsgY3VycmVudEVudGl0eTtcbiAgICAgICAgY3VycmVudEVudGl0eSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5tYXRjaCgvKFthLXpBLVowLTkjLl8tXSB8ICctJykvKSkgeyAvLyBDaGFyYWN0ZXIgaXMgcGFydCBvZiBhbiBlbnRpdHkuXG4gICAgICAgIGN1cnJlbnRFbnRpdHkgKz0gY2hhcmFjdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gJyQnICsgJ2N1cnJlbnRFbnRpdHknOyAvLyBJcyBub3QgYW4gZW50aXR5LlxuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgICAgaSAtPSAxOyAvLyBQYXJzZSBhZ2FpbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0TWF0aE1MUG9zaXRpb25zQXRFbGVtZW50QW5kQ2hpbGRyZW4oZWxlbWVudDogTm9kZSwgbWF0aG1sUG9zaXRpb25zKSB7XG4gICAgSnNQbHVnaW5WaWV3ZXIuZ2V0TWF0aE1MUG9zaXRpb25zQXROb2RlKGVsZW1lbnQsIG1hdGhtbFBvc2l0aW9ucyk7XG4gICAgLy8gQ29weSBjdXJyZW50IGNoaWxkcmVuIGJlY2F1c2UgRE9NIHdpbGwgYmUgY2hhbmdlZCBhbmQgZWxlbWVudC5jaGlsZE5vZGVzIHdvbid0IGJlXG4gICAgLy8gY29uc2lzdGVudCBvbiBjYWxsIGdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKCkuXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIEpzUGx1Z2luVmlld2VyLmdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKGNoaWxkLCBtYXRobWxQb3NpdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldE1hdGhNTFBvc2l0aW9uc0F0Tm9kZShub2RlOiBOb2RlLCBtYXRobWxQb3NpdGlvbnMpIHtcbiAgICB2YXIgc2FmZVhNTENoYXJhY3RlcnMgPSBKc0NoYXJhY3RlcnMuZ2V0U2FmZVhNTENoYXJhY3RlcnMoKTtcbiAgICBpZihub2RlLm5vZGVUeXBlID09IDMpIHtcbiAgICAgIHZhciBzdGFydE1hdGhtbFRhZyA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ09wZW5lciArIFwibWF0aFwiO1xuICAgICAgdmFyIGVuZE1hdGhtbFRhZyA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ09wZW5lciArIFwiL21hdGhcIiArIHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ0Nsb3NlcjtcbiAgICAgIHZhciBzdGFydCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihzdGFydE1hdGhtbFRhZyk7XG4gICAgICB2YXIgZW5kID0gMDtcbiAgICAgIHdoaWxlKHN0YXJ0ICE9IC0xKSB7XG4gICAgICAgIGVuZCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihlbmRNYXRobWxUYWcsc3RhcnQgKyBzdGFydE1hdGhtbFRhZy5sZW5ndGgpO1xuXG4gICAgICAgIGlmKGVuZCA9PSAtMSkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG5leHRNYXRoTUwgPSBub2RlLnRleHRDb250ZW50LmluZGV4T2Yoc3RhcnRNYXRobWxUYWcsZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG5cbiAgICAgICAgaWYobmV4dE1hdGhNTCA+PSAwICYmIGVuZCA+IG5leHRNYXRoTUwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBzYWZlTWF0aG1sID0gbm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoc3RhcnQsZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG5cbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsc3RhcnQpICsgbm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG4gICAgICAgIG5vZGUgPSAobm9kZSBhcyBUZXh0KS5zcGxpdFRleHQoc3RhcnQpO1xuICAgICAgICBzdGFydCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihzdGFydE1hdGhtbFRhZyk7XG5cbiAgICAgICAgbWF0aG1sUG9zaXRpb25zLnB1c2goe1xuICAgICAgICAgIHNhZmVNTUw6IHNhZmVNYXRobWwsXG4gICAgICAgICAgbmV4dEVsZW1lbnQ6IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgSnNDaGFyYWN0ZXJzIHtcbiAgc3RhdGljIGdldFNhZmVYTUxDaGFyYWN0ZXJzRW50aXRpZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnT3BlbmVyOiAnJmxhcXVvOycsXG4gICAgICB0YWdDbG9zZXI6ICcmcmFxdW87JyxcbiAgICAgIGRvdWJsZVF1b3RlOiAnJnVtbDsnLFxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnJnF1b3Q7JyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFhNTENoYXJhY3RlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICd4bWxDaGFyYWN0ZXJzJyxcbiAgICAgIHRhZ09wZW5lcjogJzwnLCAvLyBIZXg6IFxceDNDLlxuICAgICAgdGFnQ2xvc2VyOiAnPicsIC8vIEhleDogXFx4M0UuXG4gICAgICBkb3VibGVRdW90ZTogJ1wiJywgLy8gSGV4OiBcXHgyMi5cbiAgICAgIGFtcGVyc2FuZDogJyYnLCAvLyBIZXg6IFxceDI2LlxuICAgICAgcXVvdGU6ICdcXCcnLCAvLyBIZXg6IFxceDI3LlxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0U2FmZVhNTENoYXJhY3RlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICdzYWZlWG1sQ2hhcmFjdGVycycsXG4gICAgICB0YWdPcGVuZXI6ICfCqycsIC8vIEhleDogXFx4QUIuXG4gICAgICB0YWdDbG9zZXI6ICfCuycsIC8vIEhleDogXFx4QkIuXG4gICAgICBkb3VibGVRdW90ZTogJ8KoJywgLy8gSGV4OiBcXHhBOC5cbiAgICAgIGFtcGVyc2FuZDogJ8KnJywgLy8gSGV4OiBcXHhBNy5cbiAgICAgIHF1b3RlOiAnYCcsIC8vIEhleDogXFx4NjAuXG4gICAgICByZWFsRG91YmxlUXVvdGU6ICfCqCcsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhcnNlciBmcm9tICdAd2lyaXMvbWF0aHR5cGUtaHRtbC1pbnRlZ3JhdGlvbi1kZXZraXQvc3JjL3BhcnNlcic7XG5cbmVudW0gTWV0aG9kVHlwZSB7XG4gIFBvc3QgPSBcIlBPU1RcIixcbiAgR2V0ID0gXCJHRVRcIixcbn1cblxuLyoqXG4gKiBUaHJvd24gd2hlbiBhIHNlcnZpY2UgcmV0dXJucyBhIEpTT04gd2l0aCBhIG5vbi1vayBzdGF0dXMgdmFsdWUgaW4gaXRzIEpTT04gYm9keVxuICovXG5leHBvcnQgY2xhc3MgU3RhdHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU3RhdHVzRXJyb3IucHJvdG90eXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm9jZXNzIHJlc3BvbnNlcyBmcm9tIHRoZSBlZGl0b3Igc2VydmljZXMuXG4gKiBUaGVzZSB1c3VhbGx5IGNvbWUgd3JhcHBlZCBpbiBhIEpTT04gd2l0aCBhIHN0YXR1cyBmaWVsZCB0aGF0IGNhbiBiZSBlaXRoZXIgXCJva1wiIG9yIFwid2FybmluZ1wiLlxuICogSWYgc3RhdHVzIGlzIFwib2tcIiwgcmV0dXJuIHRoZSByZXN1bHQgdmFsdWUgYWxvbmcgaXQuIE90aGVyd2lzZSwgdGhyb3cgYSBTdGF0dXNFcnJvci5cbiAqIEBwYXJhbSB7UHJvbWlzZTxSZXNwb25zZT59IHJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIGdpdmVuIGJ5IHRoZSBzZXJ2aWNlLlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHVud3JhcHBlZCByZXN1bHQgb2YgdGhlIHJlc3BvbnNlLCBpZiB2YWxpZC5cbiAqIEB0aHJvd3Mge1N0YXR1c0Vycm9yfSBTZXJ2aWNlIHJlc3BvbmRlZCB3aXRoIGEgbm9uLW9rIHN0YXR1cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2U6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0YXR1cywgcmVzdWx0IH0gPSBhd2FpdCAoYXdhaXQgcmVzcG9uc2UpLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgIHRocm93IG5ldyBTdGF0dXNFcnJvcignU2VydmljZSByZXNwb25kZWQgd2l0aCBhIG5vbi1vayBzdGF0dXMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoKGUpIHtcbiAgICAvLyBUT0RPIG1hbmFnZSBuZXR3b3JrIGFuZCBzdGF0dXMgbm9uLW9rIGVycm9yc1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxscyB0aGUgZW5kcG9pbnQgc2VydmljZW5hbWUgYW5kIHJldHVybnMgaXRzIHJlc3BvbnNlLlxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IC0gT2JqZWN0IG9mIHBhcmFtZXRlcnMgdG8gcGFzcyBhcyB0aGUgYm9keSByZXF1ZXN0IG9yIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VOYW1lIC0gTmFtZSBvZiB0aGUgc2VydmljZSB0byBiZSBjYWxsZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmVyVVJMIC0gVXJsIG9mIHRoZSBzZXJ2ZXIgd2hlcmUgd2Ugd2FudCB0byBjYWxsIHRoZSBzZXJ2aWNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuc2lvbiAtIEV4dGVuc2lvbiB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgc2VydmljZU5hbWUgKGluY2x1ZGluZyB0aGUgZG90IGlmIG5lY2Vzc2FyeSkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59IFRoZSByZXF1ZXN0IHJlc3BvbnNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbFNlcnZpY2UocXVlcnk6IG9iamVjdCwgc2VydmljZU5hbWU6IHN0cmluZywgbWV0aG9kOiBNZXRob2RUeXBlLCBzZXJ2ZXJVUkw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNlcnZpY2VOYW1lICsgZXh0ZW5zaW9uLCBzZXJ2ZXJVUkwpO1xuICAgIGNvbnN0IGluaXQ6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAobWV0aG9kID09PSBNZXRob2RUeXBlLkdldCkge1xuICAgICAgLy8gQWRkIHRoZSBxdWVyeSBhcyBzZWFyY2ggcGFyYW1zXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhxdWVyeSkpIHtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCB0aGUgcXVlcnkgYXMgdGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICAgIGluaXQuYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoey4uLnF1ZXJ5fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybC50b1N0cmluZygpLCBpbml0KTtcbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gVE9ETyBtYW5hZ2UgbmV0d29yayBhbmQgc3RhdHVzIG5vbi1vayBlcnJvcnNcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYWx0IHRleHQgb2YgdGhlIE1hdGhNTCBwYXNzZWQgYXMgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIE1hdGhNTCB0byBiZSB0cmFuc2Zvcm1lZCBpbnRvIGFsdCB0ZXh0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBMYW5ndWFnZSBvZiB0aGUgYWNjZXNzaWJsZSB0ZXh0LlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCBvZiB0aGUgc2VydmVyIHdoZXJlIHdlIHdhbnQgdG8gY2FsbCB0aGUgc2VydmljZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSBUaGUgbWF0aG1sMmFjY2Vzc2libGUgc2VydmljZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hdGhtbDJhY2Nlc3NpYmxlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICAvLyBTZXQgdGhlIG5lZWRlZCBwYXJhbXMgdG8gcmV0cmlldmUgdGhlIGFsdCB0ZXh0LlxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ3NlcnZpY2UnOiAnbWF0aG1sMmFjY2Vzc2libGUnLFxuICAgICdtbWwnOiBtbWwsXG4gICAgJ21ldHJpY3MnOiAndHJ1ZScsXG4gICAgJ2NlbnRlcmJhc2VsaW5lJzogJ2ZhbHNlJyxcbiAgICAnbGFuZyc6IGxhbmcsXG4gICAgJ2lnbm9yZVN0eWxlcyc6ICd0cnVlJyxcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gY2FsbFNlcnZpY2UocGFyYW1zLCAnc2VydmljZScsIE1ldGhvZFR5cGUuUG9zdCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gcHJvY2Vzc0pzb25SZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogQ2FsbHMgdGhlIHNob3dJbWFnZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIE1hdGhNTCBhbmQgcmV0dXJucyB0aGUgcmVjZWl2ZWQgUmVzcG9uc2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIE1hdGhNTCB0byByZW5kZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZyAtIExhbmd1YWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCBvZiB0aGUgc2VydmVyIHdoZXJlIHdlIHdhbnQgdG8gY2FsbCB0aGUgc2VydmljZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSB0aGUgUmVzcG9uc2Ugb2JqZWN0IHRvIHRoZSBwZXRpdGlvbiBtYWRlIHRvIHNob3dJbWFnZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd0ltYWdlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnbW1sJzogbW1sLFxuICAgICdtZXRyaWNzJzogJ3RydWUnLFxuICAgICdjZW50ZXJiYXNlbGluZSc6ICdmYWxzZScsXG4gICAgJ2xhbmcnOmxhbmcsXG4gIH1cblxuICAvLyBUcnkgdG8gb2J0YWluIHRoZSBpbWFnZSB2aWEgR0VUXG4gIGNvbnN0IGdldFBhcmFtcyA9IFBhcnNlci5jcmVhdGVTaG93SW1hZ2VTcmNEYXRhKHsgbW1sIH0sIGxhbmcpO1xuICBjb25zdCBnZXRSZXNwb25zZSA9IGNhbGxTZXJ2aWNlKGdldFBhcmFtcywgJ3Nob3dpbWFnZScsIE1ldGhvZFR5cGUuR2V0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHByb2Nlc3NKc29uUmVzcG9uc2UoZ2V0UmVzcG9uc2UpO1xuICB9IGNhdGNoKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN0YXR1c0Vycm9yKSB7XG4gICAgICAvLyBGb3JtdWxhIHdhcyBub3QgaW4gY2FjaGU7IHByb2NlZWQgd2l0aCBjYWxsaW5nIHNob3dpbWFnZSB2aWEgUE9TVFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIEdFVCByZXF1ZXN0IGZhaWxzLCBpdCBtZWFucyB0aGF0IHRoZSBmb3JtdWxhIHdhcyBub3QgaW4gY2FjaGUuIFByb2NlZWQgd2l0aCBQT1NUOlxuICBjb25zdCByZXNwb25zZSA9IGNhbGxTZXJ2aWNlKHBhcmFtcywgJ3Nob3dpbWFnZScsIE1ldGhvZFR5cGUuUG9zdCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gcHJvY2Vzc0pzb25SZXNwb25zZShyZXNwb25zZSk7XG5cbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGNyZWF0ZUltYWdlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gTWF0aE1MIGFuZCByZXR1cm5zIHRoZSByZWNlaXZlZCBSZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW1sIC0gTWF0aE1MIHRvIHJlbmRlclxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBMYW5ndWFnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gdGhlIFJlc3BvbnNlIG9iamVjdCB0byB0aGUgcGV0aXRpb24gbWFkZSB0byBzaG93SW1hZ2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUltYWdlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnbW1sJzogbW1sLFxuICAgICdtZXRyaWNzJzogJ3RydWUnLFxuICAgICdjZW50ZXJiYXNlbGluZSc6ICdmYWxzZScsXG4gICAgJ2xhbmcnOiBsYW5nLFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdjcmVhdGVpbWFnZScsIE1ldGhvZFR5cGUuR2V0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHJldHVybiAoYXdhaXQgcmVzcG9uc2UpLnRleHQoKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGxhdGV4Mm1hdGhtbCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIExhVGVYIGFuZCByZXR1cm5zIHRoZSByZWNlaXZlZCBSZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF0ZXggLSBMYVRlWCB0byByZW5kZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVcmwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gdGhlIFJlc3BvbnNlIG9iamVjdCB0byB0aGUgcGV0aXRpb24gbWFkZSB0byBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsYXRleFRvTWF0aG1sKGxhdGV4OiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnc2VydmljZSc6ICdsYXRleDJtYXRobWwnLFxuICAgICdsYXRleCc6IGxhdGV4LFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdzZXJ2aWNlJywgTWV0aG9kVHlwZS5Qb3N0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHJldHVybiBwcm9jZXNzSnNvblJlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGJhY2tlbmQuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB2YXJpYWJsZWtleXMgLSBMaXN0IG9mIHRoZSBrZXkgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyB0byBmZXRjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSBUaGUgY29uZmlndXJhdGlvbmpzb24gc2VydmljZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25Kc29uKHZhcmlhYmxla2V5czogc3RyaW5nW10sIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ3ZhcmlhYmxla2V5cyc6IHZhcmlhYmxla2V5cy5qb2luKCcsJyksXG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGNhbGxTZXJ2aWNlKHBhcmFtcywgJ2NvbmZpZ3VyYXRpb25qc29uJywgTWV0aG9kVHlwZS5HZXQsIHVybCwgZXh0ZW5zaW9uKTtcbiAgcmV0dXJuIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBwb3NzaWJseSBjb250YWluaW5nIGVuY29kZWQgZW50aXRpZXMgKGUuZy4gJm5ic3A7ICYjMTYwOykgYW5kXG4gKiByZXR1cm5zIHRoZSBzYW1lIHN0cmluZyB3aXRoIHRoZXNlIHJlcGxhY2VkIGJ5IHRoZSBVVEYtOCBjaGFyYWN0ZXJzIHRoZXkgcmVwcmVzZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgd2l0aCBlbmNvZGVkIGVudGl0aWVzXG4gKiBAcmV0dXJucyB0aGUgc2FtZSBzdHJpbmcgd2l0aCB0aGUgZW50aXRpZXMgZGVjb2RlZFxuICovXG5mdW5jdGlvbiBkZWNvZGVFbnRpdGllcyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBwb3NzaWJseSBjb250YWluaW5nIGVuY29kZWQgbmFtZWQgSFRNTCBlbnRpdGllcyAoZS5nLiAmbmJzcDspIGFuZFxuICogcmV0dXJucyB0aGUgc2FtZSBzdHJpbmcgd2l0aCB0aGVzZSByZXBsYWNlZCBieSB0aGUgZW5jb2RpbmcgdGhhdCB1c2VzIG51bWJlcnMgKGUuZy4gJiMxNjA7KS5cbiAqIEJ5IGl0cyBpbXBsZW1lbnRhdGlvbiwgdGhpcyBtZXRob2QgYWxzbyBwb3NzaWJseSBlbmNvZGVzIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdlcmVcbiAqIHByZXZpb3VzbHkgdW5lbmNvZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHdpdGggZW5jb2RlZCBlbnRpdGllc1xuICogQHJldHVybnMgdGhlIHNhbWUgc3RyaW5nIHdpdGggdGhlIGVudGl0aWVzIGRlY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh0bWxFbnRpdGllc1RvWG1sRW50aXRpZXModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgdGV4dCA9IGRlY29kZUVudGl0aWVzKHRleHQpO1xuXG4gIC8vIFJlcGxhY2VzIHRoZSA8ICYgPiBjaGFyYWN0ZXJzIHRvIGl0cyBIVE1MRW50aXR5IHRvIGF2b2lkIHJlbmRlciBpc3N1ZXMuXG4gIHRleHQgPSB0ZXh0LnNwbGl0KCdcIjxcIicpLmpvaW4oJ1wiJmx0O1wiJylcbiAgICAuc3BsaXQoJ1wiPlwiJylcbiAgICAuam9pbignXCImZ3Q7XCInKVxuICAgIC5zcGxpdCgnPjw8JylcbiAgICAuam9pbignPiZsdDs8Jyk7XG5cbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB0ZXh0LmNoYXJBdChpKTtcbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID4gMTI4KSB7XG4gICAgICByZXN1bHQgKz0gJyYjJyArIHRleHQuY2hhckNvZGVBdChpKSArICc7JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gU2V0IG9mIG1hdGhtbCBhbmQgY2hhcmFjdGVycyB3aGljaCBkb24ndCBoYXZlIGFuIGFjY2Vzc2libGUgdGV4dCBhc3NvY2lhdGVkXG4vLyBhbmQgY2FuIG5vdCBiZSB0cmFuc2xhdGVkIG9yIHRyYW5zZm9ybWVkIHRvIExhVGVYLlxuZXhwb3J0IGNvbnN0IGNvcnJ1cHRNYXRoTUwgPSBbJ+KfpicsICcmIzEwMjE0OycsICfin6cnLCAnJiMxMDIxNTsnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93J107XG4iLCJpbXBvcnQgVGV4dENhY2hlIGZyb20gJy4vdGV4dGNhY2hlJztcbmltcG9ydCBTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9zZXJ2aWNlcHJvdmlkZXInO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgU3RyaW5nTWFuYWdlciBmcm9tICcuL3N0cmluZ21hbmFnZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBNYXRoVHlwZSBhY2Nlc3NpYmxlIGNsYXNzLiBDb252ZXJ0cyBNYXRoTUwgdG8gYWNjZXNzaWJsZSB0ZXh0IGFuZCBtYW5hZ2VzXG4gKiB0aGUgYXNzb2NpYXRlZCBjbGllbnQtc2lkZSBjYWNoZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjZXNzaWJpbGl0eSB7XG4gIC8qKlxuICAqIFN0YXRpYyBwcm9wZXJ0eS5cbiAgKiBBY2Nlc3NpYmlsaXR5IGNhY2hlLCBlYWNoIGVudHJ5IGNvbnRhaW5zIGEgTWF0aE1MIGFuZCBpdHMgY29ycmVzcG9uZGVudCBhY2Nlc3NpYmlsaXR5IHRleHQuXG4gICogQHR5cGUge1RleHRDYWNoZX1cbiAgKi9cbiAgc3RhdGljIGdldCBjYWNoZSgpIHtcbiAgICByZXR1cm4gQWNjZXNzaWJpbGl0eS5fY2FjaGU7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IHNldHRlci5cbiAgICogU2V0IGFjY2Vzc2liaWxpdHkgY2FjaGUuXG4gICAqIEBwYXJhbSB7VGV4dENhaGV9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IGNhY2hlKHZhbHVlKSB7XG4gICAgQWNjZXNzaWJpbGl0eS5fY2FjaGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBNYXRoTUwgc3RyaW5ncyB0byBpdHMgYWNjZXNzaWJsZSB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWF0aE1MIC0gTWF0aE1MIHRvIGJlIGNvbnZlcnRlZCB0byBhY2Nlc3NpYmxlIHRleHQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbGFuZ3VhZ2VdIC0gTGFuZ3VhZ2Ugb2YgdGhlIGFjY2Vzc2libGUgdGV4dC4gJ2VuJyBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBbZGF0YV0gLSBQYXJhbWV0ZXJzIHRvIHNlbmQgdG8gbWF0aG1sMmFjY2Vzc2libGUgc2VydmljZS5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBY2Nlc3NpYmlsaXR5IHRleHQuXG4gICAqL1xuICBzdGF0aWMgbWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhNTCwgbGFuZ3VhZ2UsIGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIChsYW5ndWFnZSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsYW5ndWFnZSA9ICdlbic7XG4gICAgfVxuICAgIC8vIENoZWNrIE1hdGhNTCBjbGFzcy4gSWYgdGhlIGNsYXNzIGlzIGNoZW1pc3RyeSxcbiAgICAvLyB3ZSBhZGQgY2hlbWlzdHJ5IHRvIGRhdGEgdG8gZm9yY2UgYWNjZXNzaWJpbGl0eSBzZXJ2aWNlXG4gICAgLy8gdG8gbG9hZCBjaGVtaXN0cnkgZ3JhbW1hci5cbiAgICBpZiAoTWF0aE1MLmNvbnRhaW5DbGFzcyhtYXRoTUwsICd3cnNfY2hlbWlzdHJ5JykpIHtcbiAgICAgIGRhdGEubW9kZSA9ICdjaGVtaXN0cnknO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgYWNjZXNpYmlsaXR5IHN0eWxlc1xuICAgIGRhdGEuaWdub3JlU3R5bGVzID0gdHJ1ZTtcbiAgICBsZXQgYWNjZXNzaWJsZVRleHQgPSAnJztcblxuICAgIGlmIChBY2Nlc3NpYmlsaXR5LmNhY2hlLmdldChtYXRoTUwpKSB7XG4gICAgICBhY2Nlc3NpYmxlVGV4dCA9IEFjY2Vzc2liaWxpdHkuY2FjaGUuZ2V0KG1hdGhNTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuc2VydmljZSA9ICdtYXRobWwyYWNjZXNzaWJsZSc7XG4gICAgICBkYXRhLmxhbmcgPSBsYW5ndWFnZTtcbiAgICAgIGNvbnN0IGFjY2Vzc2libGVKc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzZXJ2aWNlJywgZGF0YSkpO1xuICAgICAgaWYgKGFjY2Vzc2libGVKc29uUmVzcG9uc2Uuc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgIGFjY2Vzc2libGVUZXh0ID0gYWNjZXNzaWJsZUpzb25SZXNwb25zZS5yZXN1bHQudGV4dDtcbiAgICAgICAgQWNjZXNzaWJpbGl0eS5jYWNoZS5wb3B1bGF0ZShtYXRoTUwsIGFjY2Vzc2libGVUZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY2Vzc2libGVUZXh0ID0gU3RyaW5nTWFuYWdlci5nZXQoJ2Vycm9yX2NvbnZlcnRfYWNjZXNzaWJpbGl0eScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2Nlc3NpYmxlVGV4dDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGFuIGluc3RhbmNlIG9mIFRleHRDYWNoZSBjbGFzcyB0byBtYW5hZ2UgdGhlIEphdmFTY3JpcHQgYWNjZXNzaWJsZSBjYWNoZS5cbiAqIEVhY2ggZW50cnkgb2YgdGhlIGNhY2hlIG9iamVjdCBjb250YWlucyB0aGUgTWF0aE1MIGFuZCBpdCdzIGNvcnJlc3BvbmRlbnQgYWNjZXNzaWJpbGl0eSB0ZXh0LlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gKi9cbkFjY2Vzc2liaWxpdHkuX2NhY2hlID0gbmV3IFRleHRDYWNoZSgpO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmZpZ3VyYXRpb24gY2xhc3MuXG4gKiBVc3VhbGx5IHVzZWQgdG8gcmV0cmlldmUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIGdlbmVyYXRlZCBpbiB0aGUgYmFja2VuZCBpbnRvIHRoZSBmcm9udGVuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvcGVydGllcyBvYmplY3QgdG8ge0BsaW5rIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc30uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gcHJvcGVydGllcyB0byBhcHBlbmQgdG8gY3VycmVudCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc3RhdGljIGFkZENvbmZpZ3VyYXRpb24ocHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIC8qKlxuICAqIFN0YXRpYyBwcm9wZXJ0eS5cbiAgKiBUaGUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIG9iamVjdC5cbiAgKiBAcHJpdmF0ZVxuICAqIEB0eXBlIHtPYmplY3R9XG4gICovXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gQ29uZmlndXJhdGlvbi5fcHJvcGVydGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0YXRpYyBzZXQgcHJvcGVydGllcyh2YWx1ZSkge1xuICAgIENvbmZpZ3VyYXRpb24uX3Byb3BlcnRpZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGtleS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFByb3BlcnR5IGtleVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBQcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc3RhdGljIGdldChrZXkpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDb25maWd1cmF0aW9uLnByb3BlcnRpZXMsIGtleSkpIHtcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDb25maWd1cmF0aW9uLnByb3BlcnRpZXMsICdfd3JzX2NvbmZfJykpIHtcbiAgICAgICAgcmV0dXJuIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc1tgX3dyc19jb25mXyR7a2V5fWBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBwcm9wZXJ0eSB0byBDb25maWd1cmF0aW9uIGNsYXNzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gUHJvcGVydHkga2V5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSBQcm9wZXJ0eSB2YWx1ZS5cbiAgICovXG4gIHN0YXRpYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc1trZXldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhIHByb3BlcnR5IG9iamVjdCB2YWx1ZSB3aXRoIG5ldyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgcHJvcGVydHkga2V5IHRvIGJlIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0eVZhbHVlIC0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5ldyB2YWx1ZXMuXG4gICAqL1xuICBzdGF0aWMgdXBkYXRlKGtleSwgcHJvcGVydHlWYWx1ZSkge1xuICAgIGlmICghQ29uZmlndXJhdGlvbi5nZXQoa2V5KSkge1xuICAgICAgQ29uZmlndXJhdGlvbi5zZXQoa2V5LCBwcm9wZXJ0eVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlUHJvcGVydHkgPSBPYmplY3QuYXNzaWduKENvbmZpZ3VyYXRpb24uZ2V0KGtleSksIHByb3BlcnR5VmFsdWUpO1xuICAgICAgQ29uZmlndXJhdGlvbi5zZXQoa2V5LCB1cGRhdGVQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU3RhdGljIHByb3BlcnRpZXMgb2JqZWN0LiBTdG9yZXMgYWxsIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcy5cbiAqIE5lZWRlZCB0byBhdHRyaWJ1dGUgYWNjZXNzb3JzLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbkNvbmZpZ3VyYXRpb24uX3Byb3BlcnRpZXMgPSB7fTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGFsbCB0aGUgY29uc3RhbnRzIG5lZWRlZCBpbiBhIE1hdGhUeXBlIGludGVncmF0aW9uIGFtb25nIGRpZmZlcmVudCBjbGFzc2VzLlxuICogSWYgYSBjb25zdGFudCBzaG91bGQgYmUgdXNlZCBhY3Jvc3MgZGlmZmVyZW50IGNsYXNzZXMgc2hvdWxkIGJlIGRlZmluZWQgdXNpbmcgYXR0cmlidXRlXG4gKiBhY2Nlc3NvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50cyB7XG4gIC8qKlxuICAgKiBTYWZlIFhNTCBlbnRpdGllcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgc2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnT3BlbmVyOiAnJmxhcXVvOycsXG4gICAgICB0YWdDbG9zZXI6ICcmcmFxdW87JyxcbiAgICAgIGRvdWJsZVF1b3RlOiAnJnVtbDsnLFxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnJnF1b3Q7JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJsYWNrYm9hcmQgaW52YWxpZCBzYWZlIGNoYXJhY3RlcnMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVCYWRCbGFja2JvYXJkQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbHRFbGVtZW50OiAnwqttb8K7PMKrL21vwrsnLFxuICAgICAgZ3RFbGVtZW50OiAnwqttb8K7PsKrL21vwrsnLFxuICAgICAgYW1wRWxlbWVudDogJ8KrbW/CuybCqy9tb8K7JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJsYWNrYm9hcmQgdmFsaWQgc2FmZSBjaGFyYWN0ZXJzLlxuICAgKiBAdHlwZXtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGx0RWxlbWVudDogJ8KrbW/Cu8KnbHQ7wqsvbW/CuycsXG4gICAgICBndEVsZW1lbnQ6ICfCq21vwrvCp2d0O8KrL21vwrsnLFxuICAgICAgYW1wRWxlbWVudDogJ8KrbW/Cu8KnYW1wO8KrL21vwrsnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhbmRhcmQgWE1MIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgeG1sQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICd4bWxDaGFyYWN0ZXJzJyxcbiAgICAgIHRhZ09wZW5lcjogJzwnLCAvLyBIZXg6IFxceDNDLlxuICAgICAgdGFnQ2xvc2VyOiAnPicsIC8vIEhleDogXFx4M0UuXG4gICAgICBkb3VibGVRdW90ZTogJ1wiJywgLy8gSGV4OiBcXHgyMi5cbiAgICAgIGFtcGVyc2FuZDogJyYnLCAvLyBIZXg6IFxceDI2LlxuICAgICAgcXVvdGU6ICdcXCcnLCAvLyBIZXg6IFxceDI3LlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgKiBTYWZlIFhNTCBzcGVjaWFsIGNoYXJhY3RlcnMuIFRoaXMgY2hhcmFjdGVycyBhcmUgdXNlZCBpbnN0ZWFkIHRoZSBzdGFuZGFyZFxuICAqIHRoZSBzdGFuZGFyZCB0byBwYXJzZSB0aGUgIE1hdGhNTCBpZiBzYWZlWE1MIHNhdmUgbW9kZSBpcyBlbmFibGUuIEVhY2ggWE1MXG4gICogc3BlY2lhbCBjaGFyYWN0ZXIgaGF2ZSBhIFVURi04IHJlcHJlc2VudGF0aW9uLlxuICAqIEB0eXBlIHtPYmplY3R9XG4gICovXG4gIHN0YXRpYyBnZXQgc2FmZVhtbENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnc2FmZVhtbENoYXJhY3RlcnMnLFxuICAgICAgdGFnT3BlbmVyOiAnwqsnLCAvLyBIZXg6IFxceEFCLlxuICAgICAgdGFnQ2xvc2VyOiAnwrsnLCAvLyBIZXg6IFxceEJCLlxuICAgICAgZG91YmxlUXVvdGU6ICfCqCcsIC8vIEhleDogXFx4QTguXG4gICAgICBhbXBlcnNhbmQ6ICfCpycsIC8vIEhleDogXFx4QTcuXG4gICAgICBxdW90ZTogJ2AnLCAvLyBIZXg6IFxceDYwLlxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnwqgnLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBNYXRoVHlwZSBJbWFnZSBjbGFzcy4gQ29udGFpbnMgYWxsIHRoZSBsb2dpYyByZWxhdGVkXG4gKiB0byBNYXRoVHlwZSBpbWFnZXMgbWFuaXB1bGF0aW9uLlxuICogQWxsIE1hdGhUeXBlIGltYWdlcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBNYXRoVHlwZVxuICogaW50ZWdyYXRpb24gc2VydmljZTogc2hvd2ltYWdlIG9yIGNyZWF0ZWltYWdlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYXZhaWxhYmxlIGltYWdlIGZvcm1hdHM6XG4gKiAtIHN2ZyAoZGVmYXVsdClcbiAqIC0gcG5nXG4gKlxuICogVGhlcmUgYXJlIHR3byBmb3JtYXRzIGZvciB0aGUgaW1hZ2Ugc3JjIGF0dHJpYnV0ZTpcbiAqIC0gQSBkYXRhLXVyaSBzY2hlbWUgY29udGFpbmluZyB0aGUgVVJMLWVuY29kZWQgU1ZHIG9yIGEgUE5HJ3MgYmFzZTY0LlxuICogLSBBIGxpbmsgdG8gdGhlIHNob3dpbWFnZSBzZXJ2aWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIGRhdGEgYXR0cmlidXRlcyBmcm9tIGFuIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZyAtIEltYWdlIHdoZXJlIHJlbW92ZSBkYXRhIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlSW1nRGF0YUF0dHJpYnV0ZXMoaW1nKSB7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvUmVtb3ZlID0gW107XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBpbWc7XG5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCAmJiBhdHRyaWJ1dGUubmFtZSAhPT0gdW5kZWZpbmVkICYmIGF0dHJpYnV0ZS5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDApIHtcbiAgICAgICAgLy8gSXMgcHJlZmVycmVkIGtlZXAgYW4gYXJyYXkgYW5kIHJlbW92ZSBhZnRlciB0aGUgc2VhcmNoXG4gICAgICAgIC8vIGJlY2F1c2Ugd2hlbiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCB0aGUgYXJyYXkgb2YgYXR0cmlidXRlc1xuICAgICAgICAvLyBpcyBtb2RpZmllZC5cbiAgICAgICAgYXR0cmlidXRlc1RvUmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXR0cmlidXRlc1RvUmVtb3ZlLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaW1nLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQ2xvbmVzIGFsbCBNYXRoVHlwZSBpbWFnZSBhdHRyaWJ1dGVzIGZyb20gYSBIVE1MSW1hZ2VFbGVtZW50IHRvIGFub3RoZXIuXG4gICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gb3JpZ2luSW1nIC0gVGhlIG9yaWdpbmFsIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGRlc3RJbWcgLSBUaGUgZGVzdGluYXRpb24gaW1hZ2UuXG4gICAqL1xuICBzdGF0aWMgY2xvbmUob3JpZ2luSW1nLCBkZXN0SW1nKSB7XG4gICAgY29uc3QgY3VzdG9tRWRpdG9yQXR0cmlidXRlTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUN1c3RvbUVkaXRvck5hbWUnKTtcbiAgICBpZiAoIW9yaWdpbkltZy5oYXNBdHRyaWJ1dGUoY3VzdG9tRWRpdG9yQXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIGRlc3RJbWcucmVtb3ZlQXR0cmlidXRlKGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGhtbEF0dHJpYnV0ZU5hbWUgPSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKTtcbiAgICBjb25zdCBpbWdBdHRyaWJ1dGVzID0gW1xuICAgICAgbWF0aG1sQXR0cmlidXRlTmFtZSxcbiAgICAgIGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUsXG4gICAgICAnYWx0JyxcbiAgICAgICdoZWlnaHQnLFxuICAgICAgJ3dpZHRoJyxcbiAgICAgICdzdHlsZScsXG4gICAgICAnc3JjJyxcbiAgICAgICdyb2xlJyxcbiAgICBdO1xuXG4gICAgaW1nQXR0cmlidXRlcy5mb3JFYWNoKChpdGVyYXRvcikgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luQXR0cmlidXRlID0gb3JpZ2luSW1nLmdldEF0dHJpYnV0ZShpdGVyYXRvcik7XG4gICAgICBpZiAob3JpZ2luQXR0cmlidXRlKSB7XG4gICAgICAgIGRlc3RJbWcuc2V0QXR0cmlidXRlKGl0ZXJhdG9yLCBvcmlnaW5BdHRyaWJ1dGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsY3VsYXRlcyB0aGUgbWV0cmljcyBvZiBhIE1hdGhUeXBlIGltYWdlIGdpdmVuIHRoZSB0aGUgc2VydmljZSByZXNwb25zZSBhbmQgdGhlIGltYWdlIGZvcm1hdC5cbiAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZyAtIFRoZSBIVE1MSW1hZ2VFbGVtZW50LlxuICAqIEBwYXJhbSB7U3RyaW5nfSB1cmkgLSBUaGUgVVJJIGdlbmVyYXRlZCBieSB0aGUgaW1hZ2Ugc2VydmljZTogY2FuIGJlIGEgZGF0YSBVUkkgc2NoZW1lIG9yIGEgVVJMLlxuICAqIEBwYXJhbSB7Qm9vbGVhbn0ganNvblJlc3BvbnNlIC0gVHJ1ZSB0aGUgcmVzcG9uc2Ugb2YgdGhlIGltYWdlIHNlcnZpY2UgaXMgYVxuICAqIEpTT04gb2JqZWN0LiBGYWxzZSBvdGhlcndpc2UuXG4gICovXG4gIHN0YXRpYyBzZXRJbWdTaXplKGltZywgdXJpLCBqc29uUmVzcG9uc2UpIHtcbiAgICBsZXQgYXI7XG4gICAgbGV0IGJhc2U2NFN0cmluZztcbiAgICBsZXQgYnl0ZXM7XG4gICAgbGV0IHN2Z1N0cmluZztcbiAgICBpZiAoanNvblJlc3BvbnNlKSB7XG4gICAgICAvLyBDbGVhbmluZyBkYXRhOmltYWdlL3BuZztiYXNlNjQuXG4gICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlRm9ybWF0JykgPT09ICdzdmcnKSB7XG4gICAgICAgIC8vIFNWRyBmb3JtYXQuXG4gICAgICAgIC8vIElmIFNWRyBpcyBlbmNvZGVkIGluIGJhc2U2NCB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhlIGJhc2U2NCBieXRlcyBpbnRvIGEgU1ZHIHN0cmluZy5cbiAgICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpICE9PSAnYmFzZTY0Jykge1xuICAgICAgICAgIGFyID0gSW1hZ2UuZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcodXJpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYXNlNjRTdHJpbmcgPSBpbWcuc3JjLnN1YnN0cihpbWcuc3JjLmluZGV4T2YoJ2Jhc2U2NCwnKSArIDcsIGltZy5zcmMubGVuZ3RoKTtcbiAgICAgICAgICBzdmdTdHJpbmcgPSAnJztcbiAgICAgICAgICBieXRlcyA9IFV0aWwuYjY0VG9CeXRlQXJyYXkoYmFzZTY0U3RyaW5nLCBiYXNlNjRTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBzdmdTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyID0gSW1hZ2UuZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcoc3ZnU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQTkcgZm9ybWF0OiB3ZSBzdG9yZSBhbGwgbWV0cmljcyBpbmZvcm1hdGlvbiBpbiB0aGUgZmlyc3QgODggYnl0ZXMuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBpbWcuc3JjLnN1YnN0cihpbWcuc3JjLmluZGV4T2YoJ2Jhc2U2NCwnKSArIDcsIGltZy5zcmMubGVuZ3RoKTtcbiAgICAgICAgYnl0ZXMgPSBVdGlsLmI2NFRvQnl0ZUFycmF5KGJhc2U2NFN0cmluZywgODgpO1xuICAgICAgICBhciA9IEltYWdlLmdldE1ldHJpY3NGcm9tQnl0ZXMoYnl0ZXMpO1xuICAgICAgfVxuICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHk6IHdlIHN0b3JlIHRoZSBtZXRyaWNzIGludG8gY3JlYXRlaW1hZ2UgcmVzcG9uc2UuXG4gICAgfSBlbHNlIHtcbiAgICAgIGFyID0gVXRpbC51cmxUb0Fzc0FycmF5KHVyaSk7XG4gICAgfVxuICAgIGxldCB3aWR0aCA9IGFyLmN3O1xuICAgIGlmICghd2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGhlaWdodCA9IGFyLmNoO1xuICAgIGxldCBiYXNlbGluZSA9IGFyLmNiO1xuICAgIGNvbnN0IHsgZHBpIH0gPSBhcjtcbiAgICBpZiAoZHBpKSB7XG4gICAgICB3aWR0aCA9IHdpZHRoICogOTYgLyBkcGk7XG4gICAgICBoZWlnaHQgPSBoZWlnaHQgKiA5NiAvIGRwaTtcbiAgICAgIGJhc2VsaW5lID0gYmFzZWxpbmUgKiA5NiAvIGRwaTtcbiAgICB9XG4gICAgaW1nLndpZHRoID0gd2lkdGg7XG4gICAgaW1nLmhlaWdodCA9IGhlaWdodDtcbiAgICBpbWcuc3R5bGUudmVydGljYWxBbGlnbiA9IGAtJHtoZWlnaHQgLSBiYXNlbGluZX1weGA7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbWV0cmljcyBvZiBhbiBpbWFnZSB3aGljaCBoYXMgYmVlbiByZXNpemVkLiBJcyB1c2VkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsXG4gICAqIG1ldHJpY3Mgb2YgYSByZXNpemVkIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnQgfSBpbWcgLSBUaGUgcmVzaXplZCBIVE1MSW1hZ2VFbGVtZW50LlxuICAgKi9cbiAgc3RhdGljIGZpeEFmdGVyUmVzaXplKGltZykge1xuICAgIGltZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaW1nLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCByZXNpemUgd2l0aCBtYXgtd2lkdGggY3NzIHByb3BlcnR5LlxuICAgIGltZy5zdHlsZS5tYXhXaWR0aCA9ICdub25lJztcblxuICAgIGNvbnN0IHByb2Nlc3NJbWcgPSAoaW1nKSA9PiB7XG4gICAgICBpZiAoaW1nLnNyYy5pbmRleE9mKCdkYXRhOmltYWdlJykgIT09IC0xKSB7XG4gICAgICAgIGlmIChpbWcuc3JjLmluZGV4T2YoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCcpICE9PSAtMSkge1xuXG4gICAgICAgICAgLy8gSW1hZ2UgaXMgaW4gYmFzZTY0XG4gICAgICAgICAgaWYgKGltZy5zcmMuaW5kZXhPZignZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcubGVuZ3RoID09PSAyNlxuICAgICAgICAgICAgY29uc3QgYmFzZTY0U3RyaW5nID0gaW1nLmdldEF0dHJpYnV0ZSgnc3JjJykuc3Vic3RyaW5nKDI2KTtcbiAgICAgICAgICAgIGNvbnN0IHN2Z1N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NFN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkU3ZnU3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KHN2Z1N0cmluZyk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwke2VuY29kZWRTdmdTdHJpbmd9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJy5sZW5ndGggPT09IDMyLlxuICAgICAgICAgIGNvbnN0IHN2ZyA9IGRlY29kZVVSSUNvbXBvbmVudChpbWcuc3JjLnN1YnN0cmluZygzMiwgaW1nLnNyYy5sZW5ndGgpKTtcbiAgICAgICAgICBJbWFnZS5zZXRJbWdTaXplKGltZywgc3ZnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgPT09IDIyLlxuICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGltZy5zcmMuc3Vic3RyaW5nKDIyLCBpbWcuc3JjLmxlbmd0aCk7XG4gICAgICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWcsIGJhc2U2NCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEltYWdlLnNldEltZ1NpemUoaW1nLCBpbWcuc3JjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSWYgdGhlIGltYWdlIGRvZXNuJ3QgY29udGFpbiBhIGJsb2IsIGp1c3QgcHJvY2VzcyBpdCBub3JtYWxseVxuICAgIGlmIChpbWcuc3JjLmluZGV4T2YoJ2Jsb2I6JykgPT09IC0xKSB7XG4gICAgICBwcm9jZXNzSW1nKGltZyk7XG4gICAgLy8gaWYgaXQgZG9lcyBjb250YWluIGEgYmxvYiwgdGhlbiByZWFkIHRoYXQsIHJlcGxhY2UgdGhlIHNyYyB3aXRoIHRoZSBkZWNvZGVkIGNvbnRlbnQsIGFuZCBwcm9jZXNzIGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZWFkZXIucmVzdWx0KTtcbiAgICAgICAgcHJvY2Vzc0ltZyhpbWcpO1xuICAgICAgfTtcbiAgICAgIGZldGNoKGltZy5zcmMpLnRoZW4ociA9PiByLmJsb2IoKSkudGhlbihibG9iID0+IHtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWV0cmljcyAoaGVpZ2h0LCB3aWR0aCBhbmQgYmFzZWxpbmUpIGNvbnRhaW5lZCBpbiBhIFNWRyBpbWFnZSBnZW5lcmF0ZWRcbiAgICogYnkgdGhlIE1hdGhUeXBlIGltYWdlIHNlcnZpY2UuIFRoaXMgaW1hZ2UgY29udGFpbnMgYXMgYW4gZXh0cmEgY3VzdG9tIGF0dHJpYnV0ZTpcbiAgICogdGhlIGJhc2VsaW5lICh3cnM6YmFzZWxpbmUpLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3ZnU3RyaW5nIC0gVGhlIFNWRyBpbWFnZS5cbiAgICogQHJldHVybiB7QXJyYXl9IC0gVGhlIGltYWdlIG1ldHJpY3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcoc3ZnU3RyaW5nKSB7XG4gICAgbGV0IGZpcnN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ2hlaWdodD1cIicpO1xuICAgIGxldCBsYXN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ1wiJywgZmlyc3QgKyA4LCBzdmdTdHJpbmcubGVuZ3RoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBzdmdTdHJpbmcuc3Vic3RyaW5nKGZpcnN0ICsgOCwgbGFzdCk7XG5cbiAgICBmaXJzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCd3aWR0aD1cIicpO1xuICAgIGxhc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignXCInLCBmaXJzdCArIDcsIHN2Z1N0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IHdpZHRoID0gc3ZnU3RyaW5nLnN1YnN0cmluZyhmaXJzdCArIDcsIGxhc3QpO1xuXG4gICAgZmlyc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignd3JzOmJhc2VsaW5lPVwiJyk7XG4gICAgbGFzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCdcIicsIGZpcnN0ICsgMTQsIHN2Z1N0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGJhc2VsaW5lID0gc3ZnU3RyaW5nLnN1YnN0cmluZyhmaXJzdCArIDE0LCBsYXN0KTtcblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGFyci5jdyA9IHdpZHRoO1xuICAgICAgYXJyLmNoID0gaGVpZ2h0O1xuICAgICAgaWYgKHR5cGVvZiBiYXNlbGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJyLmNiID0gYmFzZWxpbmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWV0cmljcyAod2lkdGgsIGhlaWdodCwgYmFzZWxpbmUgYW5kIGRwaSkgY29udGFpbmVkIGluIGEgUE5HIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSAge0FycmF5LjxCeXRlcz59IGJ5dGVzIC0gcG5nIGJ5dGUgYXJyYXkuXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgcG5nIG1ldHJpY3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWV0cmljc0Zyb21CeXRlcyhieXRlcykge1xuICAgIFV0aWwucmVhZEJ5dGVzKGJ5dGVzLCAwLCA4KTtcbiAgICBsZXQgd2lkdGg7XG4gICAgbGV0IGhlaWdodDtcbiAgICBsZXQgdHlwO1xuICAgIGxldCBiYXNlbGluZTtcbiAgICBsZXQgZHBpO1xuICAgIHdoaWxlIChieXRlcy5sZW5ndGggPj0gNCkge1xuICAgICAgdHlwID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgaWYgKHR5cCA9PT0gMHg0OTQ4NDQ1Mikge1xuICAgICAgICB3aWR0aCA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgaGVpZ2h0ID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgICAvLyBSZWFkIDUgYnl0ZXMuXG4gICAgICAgIFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgVXRpbC5yZWFkQnl0ZShieXRlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cCA9PT0gMHg2MjYxNTM0NSkgeyAvLyBCYXNlbGluZTogJ2JhU0UnLlxuICAgICAgICBiYXNlbGluZSA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwID09PSAweDcwNDg1OTczKSB7IC8vIERwaXM6ICdwSFlzJy5cbiAgICAgICAgZHBpID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgICBkcGkgPSAoTWF0aC5yb3VuZChkcGkgLyAzOS4zNykpO1xuICAgICAgICBVdGlsLnJlYWRJbnQzMihieXRlcyk7XG4gICAgICAgIFV0aWwucmVhZEJ5dGUoYnl0ZXMpO1xuICAgICAgfVxuICAgICAgVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGFyci5jdyA9IHdpZHRoO1xuICAgICAgYXJyLmNoID0gaGVpZ2h0O1xuICAgICAgYXJyLmRwaSA9IGRwaTtcbiAgICAgIGlmIChiYXNlbGluZSkge1xuICAgICAgICBhcnIuY2IgPSBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iLCJpbXBvcnQgVGV4dENhY2hlIGZyb20gJy4vdGV4dGNhY2hlJztcbmltcG9ydCBNYXRoTUwgZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IFNlcnZpY2VQcm92aWRlciBmcm9tICcuL3NlcnZpY2Vwcm92aWRlcic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgTGFUZVggcGFyc2VyLiBNYW5hZ2VzIHRoZSBzZXJ2aWNlcyB3aGljaCBhbGxvd3MgdG8gY29udmVydFxuICogTGFUZVggaW50byBNYXRoTUwgYW5kIE1hdGhNTCBpbnRvIExhVGVYLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRleCB7XG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICAqIFJldHVybiBsYXRleCBjYWNoZS5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0NhY2hlfVxuICAgKi9cbiAgc3RhdGljIGdldCBjYWNoZSgpIHtcbiAgICByZXR1cm4gTGF0ZXguX2NhY2hlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAqIFNldCBsYXRleCBjYWNoZS5cbiAgICogQHBhcmFtIHtDYWNoZX0gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgKi9cbiAgc3RhdGljIHNldCBjYWNoZSh2YWx1ZSkge1xuICAgIExhdGV4Ll9jYWNoZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIE1hdGhNTCB0byBMYVRlWCBieSBjYWxsaW5nIG1hdGhtbDJsYXRleCBzZXJ2aWNlLiBGb3IgdGV4dCBzZXJ2aWNlc1xuICAgKiB3ZSBjYWxsIGEgdGV4dCBzZXJ2aWNlIHdpdGggdGhlIHBhcmFtIG1hdGhtbDJsYXRleC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBTdHJpbmcuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gTGFUZVggc3RyaW5nIGdlbmVyYXRlZCBieSB0aGUgTWF0aE1MIGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIGdldExhdGV4RnJvbU1hdGhNTChtYXRobWwpIHtcbiAgICBjb25zdCBtYXRobWxXaXRob3V0U2VtYW50aWNzID0gTWF0aE1MLnJlbW92ZVNlbWFudGljcyhtYXRobWwpO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gICAgICovXG4gICAgY29uc3QgeyBjYWNoZSB9ID0gTGF0ZXg7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2VydmljZTogJ21hdGhtbDJsYXRleCcsXG4gICAgICBtbWw6IG1hdGhtbFdpdGhvdXRTZW1hbnRpY3MsXG4gICAgfTtcblxuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ3NlcnZpY2UnLCBkYXRhKSk7XG5cbiAgICAvLyBUT0RPOiBFcnJvciBoYW5kbGluZy5cbiAgICBsZXQgbGF0ZXggPSAnJztcblxuICAgIGlmIChqc29uUmVzcG9uc2Uuc3RhdHVzID09PSAnb2snKSB7XG4gICAgICBsYXRleCA9IGpzb25SZXNwb25zZS5yZXN1bHQudGV4dDtcbiAgICAgIGNvbnN0IGxhdGV4SHRtbEVudGl0aWVzRW5jb2RlZCA9IFV0aWwuaHRtbEVudGl0aWVzKGxhdGV4KTtcbiAgICAgIC8vIEluc2VydGluZyBMYVRlWCBzZW1hbnRpY3MuXG4gICAgICBjb25zdCBtYXRobWxXaXRoU2VtYW50aWNzID0gTWF0aE1MLmFkZEFubm90YXRpb24obWF0aG1sLCBsYXRleEh0bWxFbnRpdGllc0VuY29kZWQsICdMYVRlWCcpO1xuICAgICAgY2FjaGUucG9wdWxhdGUobGF0ZXgsIG1hdGhtbFdpdGhTZW1hbnRpY3MpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBMYVRlWCB0byBNYXRoTUwgYnkgY2FsbGluZyBsYXRleDJtYXRobWwgc2VydmljZS4gRm9yIHRleHQgc2VydmljZXNcbiAgICogd2UgY2FsbCBhIHRleHQgc2VydmljZSB3aXRoIHRoZSBwYXJhbSBsYXRleDJtYXRobWwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsYXRleCAtIFN0cmluZyBjb250YWluaW5nIGEgTGFUZVggZm9ybXVsYS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlTGF0ZXhPblNlbWFudGljc1xuICAgKiAtIElmIHRydWUgTGFUZVggd291bGQgbWUgaW5jbHVkZWQgaW50byBNYXRoTUwgc2VtYW50aWNzLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1hdGhNTCBzdHJpbmcgZ2VuZXJhdGVkIGJ5IHRoZSBMYVRlWCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBnZXRNYXRoTUxGcm9tTGF0ZXgobGF0ZXgsIGluY2x1ZGVMYXRleE9uU2VtYW50aWNzKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1RleHRDYWNoZX1cbiAgICAgKi9cbiAgICBjb25zdCBsYXRleENhY2hlID0gTGF0ZXguY2FjaGU7XG5cbiAgICBpZiAoTGF0ZXguY2FjaGUuZ2V0KGxhdGV4KSkge1xuICAgICAgcmV0dXJuIExhdGV4LmNhY2hlLmdldChsYXRleCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzZXJ2aWNlOiAnbGF0ZXgybWF0aG1sJyxcbiAgICAgIGxhdGV4LFxuICAgIH07XG5cbiAgICBpZiAoaW5jbHVkZUxhdGV4T25TZW1hbnRpY3MpIHtcbiAgICAgIGRhdGEuc2F2ZUxhdGV4ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnc2VydmljZScsIGRhdGEpKTtcblxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKGpzb25SZXNwb25zZS5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgIGxldCBtYXRobWwgPSBqc29uUmVzcG9uc2UucmVzdWx0LnRleHQ7XG4gICAgICBtYXRobWwgPSBtYXRobWwuc3BsaXQoJ1xccicpLmpvaW4oJycpLnNwbGl0KCdcXG4nKS5qb2luKCcgJyk7XG5cbiAgICAgIC8vIFBvcHVsYXRlIExhdGV4Q2FjaGUuXG4gICAgICBpZiAobWF0aG1sLmluZGV4T2YoJ3NlbWFudGljcycpID09PSAtMSAmJiBtYXRobWwuaW5kZXhPZignYW5ub3RhdGlvbicpID09PSAtMSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gVXRpbC5odG1sRW50aXRpZXMobGF0ZXgpO1xuICAgICAgICBtYXRobWwgPSBNYXRoTUwuYWRkQW5ub3RhdGlvbihtYXRobWwsIGNvbnRlbnQsICdMYVRlWCcpO1xuICAgICAgICBvdXRwdXQgPSBtYXRobWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBtYXRobWw7XG4gICAgICB9XG4gICAgICBpZiAoIWxhdGV4Q2FjaGUuZ2V0KGxhdGV4KSkge1xuICAgICAgICBsYXRleENhY2hlLnBvcHVsYXRlKGxhdGV4LCBtYXRobWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBgJCQke2xhdGV4fSQkYDtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgb2NjdXJyZW5jZXMgb2YgTWF0aE1MIGNvZGUgdG8gTGFUZVguXG4gICAqIFRoZSBNYXRoTUwgY29kZSBzaG91bGQgY29udGFpbmluZyA8YW5ub3RhdGlvbiBlbmNvZGluZz1cIkxhVGVYXCIvPiB0byBiZSBjb252ZXJ0ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50IC0gQSBzdHJpbmcgY29udGFpbmluZyBNYXRoTUwgdmFsaWQgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNoYXJhY3RlcnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgTWF0aE1MIGFubm90YXRlZCBvY2N1cnJlbmNlc1xuICAgKiByZXBsYWNlZCBieSB0aGUgY29ycmVzcG9uZGluZyBMYVRlWCBjb2RlLlxuICAgKi9cbiAgc3RhdGljIHBhcnNlTWF0aG1sVG9MYXRleChjb250ZW50LCBjaGFyYWN0ZXJzKSB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGNvbnN0IG1hdGhUYWdCZWdpbiA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfW1hdGhgO1xuICAgIGNvbnN0IG1hdGhUYWdFbmQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn0vbWF0aCR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCBvcGVuVGFyZ2V0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9YW5ub3RhdGlvbiBlbmNvZGluZz0ke2NoYXJhY3RlcnMuZG91YmxlUXVvdGV9TGFUZVgke2NoYXJhY3RlcnMuZG91YmxlUXVvdGV9JHtjaGFyYWN0ZXJzLnRhZ0Nsb3Nlcn1gO1xuICAgIGNvbnN0IGNsb3NlVGFyZ2V0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L2Fubm90YXRpb24ke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgbGV0IHN0YXJ0ID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdCZWdpbik7XG4gICAgbGV0IGVuZCA9IDA7XG4gICAgbGV0IG1hdGhtbDtcbiAgICBsZXQgc3RhcnRBbm5vdGF0aW9uO1xuICAgIGxldCBjbG9zZUFubm90YXRpb247XG5cbiAgICB3aGlsZSAoc3RhcnQgIT09IC0xKSB7XG4gICAgICBvdXRwdXQgKz0gY29udGVudC5zdWJzdHJpbmcoZW5kLCBzdGFydCk7XG4gICAgICBlbmQgPSBjb250ZW50LmluZGV4T2YobWF0aFRhZ0VuZCwgc3RhcnQpO1xuXG4gICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgKz0gbWF0aFRhZ0VuZC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG1hdGhtbCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXG4gICAgICBzdGFydEFubm90YXRpb24gPSBtYXRobWwuaW5kZXhPZihvcGVuVGFyZ2V0KTtcbiAgICAgIGlmIChzdGFydEFubm90YXRpb24gIT09IC0xKSB7XG4gICAgICAgIHN0YXJ0QW5ub3RhdGlvbiArPSBvcGVuVGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgY2xvc2VBbm5vdGF0aW9uID0gbWF0aG1sLmluZGV4T2YoY2xvc2VUYXJnZXQpO1xuICAgICAgICBsZXQgbGF0ZXggPSBtYXRobWwuc3Vic3RyaW5nKHN0YXJ0QW5ub3RhdGlvbiwgY2xvc2VBbm5vdGF0aW9uKTtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMgPT09IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycykge1xuICAgICAgICAgIGxhdGV4ID0gTWF0aE1MLnNhZmVYbWxEZWNvZGUobGF0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBgJCQke2xhdGV4fSQkYDtcbiAgICAgICAgLy8gUG9wdWxhdGUgbGF0ZXggaW50byBjYWNoZS5cblxuICAgICAgICBMYXRleC5jYWNoZS5wb3B1bGF0ZShsYXRleCwgbWF0aG1sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBtYXRobWw7XG4gICAgICB9XG4gICAgICBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgY29udGVudC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGxhdGV4IG9mIGEgZGV0ZXJtaW5lZCBwb3NpdGlvbiBpbiBhIHRleHQuXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGV4dE5vZGUgLSB0ZXh0Tm9kZSB0byBleHRyYWN0IHRoZSBMYVRlWFxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FyZXRQb3NpdGlvbiAtIFN0YXJ0aW5nIHBvc2l0aW9uIHRvIGZpbmQgTGFUZVguXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsYXRleFRhZ3MgLSBPcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHRhZ3MgYmV0d2VlbiBsYXRleCBpcyBpbnNlcnRlZC5cbiAgICogSXQgaGFzIHRoZSAnb3BlbicgYXR0cmlidXRlIGZvciB0aGUgb3BlbiB0YWcgYW5kIHRoZSAnY2xvc2UnIGF0dHJpYnV0ZSBmb3IgdGhlIGNsb3NlIHRhZy5cbiAgICogXCIkJFwiIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggMyBrZXlzOiAnbGF0ZXgnLCAnc3RhcnQnIGFuZCAnZW5kJy4gTnVsbCBpZiBsYXRleCBpcyBub3QgZm91bmQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRMYXRleEZyb21UZXh0Tm9kZSh0ZXh0Tm9kZSwgY2FyZXRQb3NpdGlvbiwgbGF0ZXhUYWdzKSB7XG4gICAgLy8gVE9ETzogU2V0IExhVGVYIFRhZ3MgYXMgQ29yZSB2YXJpYWJsZS4gRml4IHRoZSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24gKHRoaXJkIGFyZ3VtZW50KS5cbiAgICAvLyBUYWdzIHVzZWQgZm9yIExhVGVYIGZvcm11bGFzLlxuICAgIGNvbnN0IGRlZmF1bHRMYXRleFRhZ3MgPSB7XG4gICAgICBvcGVuOiAnJCQnLFxuICAgICAgY2xvc2U6ICckJCcsXG4gICAgfTtcbiAgICAvLyBsYXRleFRhZ3MgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyLiBJZiBpcyBub3Qgc2V0LCB1c2UgZGVmYXVsdCBsYXRleFRhZ3MuXG4gICAgaWYgKHR5cGVvZiBsYXRleFRhZ3MgPT09ICd1bmRlZmluZWQnIHx8IGxhdGV4VGFncyA9PSBudWxsKSB7XG4gICAgICBsYXRleFRhZ3MgPSBkZWZhdWx0TGF0ZXhUYWdzO1xuICAgIH1cbiAgICAvLyBMb29raW5nIGZvciB0aGUgZmlyc3QgdGV4dE5vZGUuXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHRleHROb2RlO1xuXG4gICAgd2hpbGUgKHN0YXJ0Tm9kZS5wcmV2aW91c1NpYmxpbmcgJiYgc3RhcnROb2RlLnByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgbGF0ZXggcG9zaXRpb24gYW5kIG5vZGUgZnJvbSBhIHNwZWNpZmljIG5vZGUgYW5kIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gY3VycmVudE5vZGUgLSBOb2RlIHdoZXJlIHNlYXJjaGluZyBsYXRleC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY3VycmVudFBvc2l0aW9uIC0gQ3VycmVudCBwb3NpdGlvbiBpbnNpZGUgdGhlIGN1cnJlbnROb2RlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsYXRleFRhZ3NUb1VzZSAtIFRhZ3MgdXNlZCBhdCBsYXRleCBiZWdpbm5pbmcgYW5kIGxhdGV4IGZpbmFsLlxuICAgICAqIFwiJCRcIiBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdGFnIC0gVGFnIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgc2VhcmNoLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBjdXJyZW50IG5vZGUgYW5kIHRoZSBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXROZXh0TGF0ZXhQb3NpdGlvbihjdXJyZW50Tm9kZSwgY3VycmVudFBvc2l0aW9uLCB0YWcpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLm5vZGVWYWx1ZS5pbmRleE9mKHRhZywgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgd2hpbGUgKHBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICghY3VycmVudE5vZGUpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgICAgIHJldHVybiBudWxsOyAvLyBOb3QgZm91bmQuXG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLm5vZGVWYWx1ZSA/IGN1cnJlbnROb2RlLm5vZGVWYWx1ZS5pbmRleE9mKGxhdGV4VGFncy5jbG9zZSkgOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogY3VycmVudE5vZGUsXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBwcmV2aW91cywgb3Igbm90LCB0byBhIHNlY29uZCBvbmUuXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gU3RhcnQgbm9kZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBTdGFydCBub2RlIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZW5kTm9kZSAtIEVuZCBub2RlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBlbmRQb3NpdGlvbiAtIEVuZCBub2RlIHBvc2l0aW9uLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBzdGFydGluZyBub2RlIGlzIHByZXZpb3VzIHRoYW50IHRoZSBlbiBub2RlLiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmV2aW91cyhub2RlLCBwb3NpdGlvbiwgZW5kTm9kZSwgZW5kUG9zaXRpb24pIHtcbiAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiAocG9zaXRpb24gPD0gZW5kUG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChub2RlID09PSBlbmROb2RlKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZCA9IHtcbiAgICAgIG5vZGU6IHN0YXJ0Tm9kZSxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgIH07XG4gICAgLy8gSXMgc3VwcG9zZWQgdGhhdCBvcGVuIGFuZCBjbG9zZSB0YWdzIGhhcyB0aGUgc2FtZSBsZW5ndGguXG4gICAgY29uc3QgdGFnTGVuZ3RoID0gbGF0ZXhUYWdzLm9wZW4ubGVuZ3RoO1xuICAgIGRvIHtcbiAgICAgIHN0YXJ0ID0gZ2V0TmV4dExhdGV4UG9zaXRpb24oZW5kLm5vZGUsIGVuZC5wb3NpdGlvbiwgbGF0ZXhUYWdzLm9wZW4pO1xuXG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBpc1ByZXZpb3VzKHRleHROb2RlLCBjYXJldFBvc2l0aW9uLCBzdGFydC5ub2RlLCBzdGFydC5wb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGVuZCA9IGdldE5leHRMYXRleFBvc2l0aW9uKHN0YXJ0Lm5vZGUsIHN0YXJ0LnBvc2l0aW9uICsgdGFnTGVuZ3RoLCBsYXRleFRhZ3MuY2xvc2UpO1xuXG4gICAgICBpZiAoZW5kID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGVuZC5wb3NpdGlvbiArPSB0YWdMZW5ndGg7XG4gICAgfSB3aGlsZSAoaXNQcmV2aW91cyhlbmQubm9kZSwgZW5kLnBvc2l0aW9uLCB0ZXh0Tm9kZSwgY2FyZXRQb3NpdGlvbikpO1xuXG4gICAgLy8gSXNvbGF0aW5nIGxhdGV4LlxuICAgIGxldCBsYXRleDtcblxuICAgIGlmIChzdGFydC5ub2RlID09PSBlbmQubm9kZSkge1xuICAgICAgbGF0ZXggPSBzdGFydC5ub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcoc3RhcnQucG9zaXRpb24gKyB0YWdMZW5ndGgsIGVuZC5wb3NpdGlvbiAtIHRhZ0xlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhcnQucG9zaXRpb24gKyB0YWdMZW5ndGg7XG4gICAgICBsYXRleCA9IHN0YXJ0Lm5vZGUubm9kZVZhbHVlLnN1YnN0cmluZyhpbmRleCwgc3RhcnQubm9kZS5ub2RlVmFsdWUubGVuZ3RoKTtcbiAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHN0YXJ0Lm5vZGU7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlID09PSBlbmQubm9kZSkge1xuICAgICAgICAgIGxhdGV4ICs9IGVuZC5ub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcoMCwgZW5kLnBvc2l0aW9uIC0gdGFnTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXRleCArPSBjdXJyZW50Tm9kZS5ub2RlVmFsdWUgPyBjdXJyZW50Tm9kZS5ub2RlVmFsdWUgOiAnJztcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoY3VycmVudE5vZGUgIT09IGVuZC5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGF0ZXgsXG4gICAgICBzdGFydE5vZGU6IHN0YXJ0Lm5vZGUsXG4gICAgICBzdGFydFBvc2l0aW9uOiBzdGFydC5wb3NpdGlvbixcbiAgICAgIGVuZE5vZGU6IGVuZC5ub2RlLFxuICAgICAgZW5kUG9zaXRpb246IGVuZC5wb3NpdGlvbixcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogVGV4dCBjYWNoZS4gU3RvcmVzIGFsbCBwcm9jZXNzZWQgTGFUZVggc3RyaW5ncyBhbmQgaXQncyBjb3JyZXNwb25kZW50IE1hdGhNTCBzdHJpbmcuXG4gKiBAdHlwZSB7Q2FjaGV9XG4gKiBAc3RhdGljXG4gKi9cbkxhdGV4Ll9jYWNoZSA9IG5ldyBUZXh0Q2FjaGUoKTtcbiIsIi8qKlxuICogVGhpcyBvYmplY3QgcmVwcmVzZW50cyBhIGN1c3RvbSBsaXN0ZW5lci5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IExpc3RlbmVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gTGlzdGVuZXIuZXZlbnROYW1lIC0gVGhlIGxpc3RlbmVyIG5hbWUuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBMaXN0ZW5lci5jYWxsYmFjayAtIFRoZSBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lcnMge1xuICAvKipcbiAgICogQGNsYXNzZGVzY1xuICAgKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBjdXN0b20gbGlzdGVuZXJzIG1hbmFnZXIuXG4gICAqIEBjb25zdHJ1Y3RzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBBcnJheSBjb250YWluaW5nIGFsbCBjdXN0b20gbGlzdGVuZXJzLlxuICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRvIExpc3RlbmVyIGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIG9iamVjdC5cbiAgICovXG4gIGFkZChsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIE1hdGhUeXBlIGV2ZW50IGxpc3RlbmVyc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIC0gZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIGV2ZW50IG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgaWYgZXZlbnQgaGFzIGJlZW4gcHJldmVudGVkLiB0cnVlIG90aGVyd2lzZS5cbiAgICovXG4gIGZpcmUoZXZlbnROYW1lLCBldmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoICYmICFldmVudC5jYW5jZWxsZWQ7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2ldLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XG4gICAgICAgIC8vIENhbGxpbmcgbGlzdGVuZXIuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBsaXN0ZW5lciBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIGxpc3RlbmVyIG9iamVjdC5cbiAgICovXG4gIHN0YXRpYyBuZXdMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB7fTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cbn1cbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBjbGFzcyB0byBtYW5hZ2UgTWF0aE1MIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhNTCB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIG1hdGhtbCBhdCBwb3NpdGlvbiBpIGlzIGluc2lkZSBhbiBIVE1MIGF0dHJpYnV0ZSBvciBub3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gYSBzdHJpbmcgY29udGFpbmluZyBNYXRoTUwgY29kZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGkgLSAgc2VhcmNoIGluZGV4LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGlzIGluc2lkZSBhbiBIVE1MIGF0dHJpYnV0ZS4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgc3RhdGljIGlzTWF0aG1sSW5BdHRyaWJ1dGUoY29udGVudCwgaSkge1xuICAgIC8vIFJlZ2V4ID1cbiAgICAvLyAnXltcXCdcIl1bXFxcXHNdKj1bXFxcXHNdKltcXFxcdy1dKyhbXFxcXHNdKihcIlteXCJdKlwifFxcJ1teXFwnXSpcXCcpW1xcXFxzXSpcbiAgICAvLyA9W1xcXFxzXSpbXFxcXHctXStbXFxcXHNdKikqW1xcXFxzXStnbWk8JztcbiAgICBjb25zdCBtYXRoQXR0ID0gJ1tcXCdcIl1bXFxcXHNdKj1bXFxcXHNdKltcXFxcdy1dKyc7IC8vIFwiPWF0dCBPUiAnPWF0dFxuICAgIGNvbnN0IGF0dENvbnRlbnQgPSAnXCJbXlwiXSpcInxcXCdbXlxcJ10qXFwnJzsgLy8gXCJibGFibGFcIiBPUiAnYmxhYmxhJ1xuICAgIGNvbnN0IGF0dCA9IGBbXFxcXHNdKigke2F0dENvbnRlbnR9KVtcXFxcc10qPVtcXFxcc10qW1xcXFx3LV0rW1xcXFxzXSpgOyAvLyBcImJsYWJsYVwiPWF0dCBPUiAnYmxhYmxhJz1hdHRcbiAgICBjb25zdCBhdHRzID0gYCgnJHthdHR9JykqYDsgLy8gXCJibGFibGFcIj1hdHQxIFwiYmxhYmxhXCI9YXR0MlxuICAgIGNvbnN0IHJlZ2V4ID0gYF4ke21hdGhBdHR9JHthdHRzfVtcXFxcc10rZ21pPGA7IC8vIFwiPWF0dCBcImJsYWJsYVwiPWF0dDEgXCJibGFibGFcIj1hdHQyIGdtaTwgLlxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHJlZ2V4KTtcblxuICAgIGNvbnN0IGFjdHVhbENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBpKTtcbiAgICBjb25zdCByZXZlcnNlZCA9IGFjdHVhbENvbnRlbnQuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICBjb25zdCBleGlzdHMgPSBleHByZXNzaW9uLnRlc3QocmV2ZXJzZWQpO1xuXG4gICAgcmV0dXJuIGV4aXN0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgTWF0aE1MIHdpdGggc3RhbmRhcmQgWE1MIHRhZ3MuXG4gICAqIFdlIHVzZSB0aGVzZSBlbnRpdGllcyBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBodG1sIGVudGl0aWVzXG4gICAqIG9uIGl0cyBhdHRyaWJ1dGVzIHNvbWV0aW1lcy4gWWVzLCBzb21ldGltZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHN0cmluZyB0byBiZSBkZWNvZGVkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGRlY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNhZmVYbWxEZWNvZGUoaW5wdXQpIHtcbiAgICBsZXQgeyB0YWdPcGVuZXIgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIGxldCB7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzRW50aXRpZXM7XG4gICAgbGV0IHsgZG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIGxldCB7IHJlYWxEb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzRW50aXRpZXM7XG4gICAgLy8gRGVjb2RpbmcgZW50aXRpZXMuXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChkb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIC8vIEFkZGVkIHRvIGZpeCBwcm9ibGVtIGR1ZSB0byBpbXBvcnQgZnJvbSAxLjkueC5cbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KHJlYWxEb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlKTtcblxuICAgIC8vIEJsYWNrYm9hcmQuXG4gICAgY29uc3QgeyBsdEVsZW1lbnQgfSA9IENvbnN0YW50cy5zYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBndEVsZW1lbnQgfSA9IENvbnN0YW50cy5zYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBhbXBFbGVtZW50IH0gPSBDb25zdGFudHMuc2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzO1xuICAgIGlmICgnX3dyc19ibGFja2JvYXJkJyBpbiB3aW5kb3cgJiYgd2luZG93Ll93cnNfYmxhY2tib2FyZCkge1xuICAgICAgaW5wdXQgPSBpbnB1dC5zcGxpdChsdEVsZW1lbnQpLmpvaW4oQ29uc3RhbnRzLnNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMubHRFbGVtZW50KTtcbiAgICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoZ3RFbGVtZW50KS5qb2luKENvbnN0YW50cy5zYWZlR29vZEJsYWNrYm9hcmRDaGFyYWN0ZXJzLmd0RWxlbWVudCk7XG4gICAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGFtcEVsZW1lbnQpLmpvaW4oQ29uc3RhbnRzLnNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMuYW1wRWxlbWVudCk7XG4gICAgfVxuXG4gICAgKHsgdGFnT3BlbmVyIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMpO1xuICAgICh7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzKTtcbiAgICAoeyBkb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzKTtcbiAgICAoeyByZWFsRG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgY29uc3QgeyBhbXBlcnNhbmQgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycztcbiAgICBjb25zdCB7IHF1b3RlIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnM7XG5cbiAgICAvLyBEZWNvZGluZyBjaGFyYWN0ZXJzLlxuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnT3BlbmVyKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMudGFnQ2xvc2VyKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGRvdWJsZVF1b3RlKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGFtcGVyc2FuZCkuam9pbihDb25zdGFudHMueG1sQ2hhcmFjdGVycy5hbXBlcnNhbmQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQocXVvdGUpLmpvaW4oQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMucXVvdGUpO1xuXG4gICAgLy8gV2UgYXJlIHJlcGxhY2luZyAkIGJ5ICYgd2hlbiBpdHMgcGFydCBvZiBhbiBlbnRpdHkgZm9yIHJldHJvLWNvbXBhdGliaWxpdHkuXG4gICAgLy8gTm93LCB0aGUgc3RhbmRhcmQgaXMgcmVwbGFjZSDCpyBieSAmLlxuICAgIGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50RW50aXR5ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGlucHV0LmNoYXJBdChpKTtcbiAgICAgIGlmIChjdXJyZW50RW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJyQnKSB7XG4gICAgICAgICAgY3VycmVudEVudGl0eSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09ICc7Jykge1xuICAgICAgICByZXR1cm5WYWx1ZSArPSBgJiR7Y3VycmVudEVudGl0eX1gO1xuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyLm1hdGNoKC8oW2EtekEtWjAtOSMuXy1dIHwgJy0nKS8pKSB7IC8vIENoYXJhY3RlciBpcyBwYXJ0IG9mIGFuIGVudGl0eS5cbiAgICAgICAgY3VycmVudEVudGl0eSArPSBjaGFyYWN0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5WYWx1ZSArPSBgJCR7Y3VycmVudEVudGl0eX1gOyAvLyBJcyBub3QgYW4gZW50aXR5LlxuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgICAgaSAtPSAxOyAvLyBQYXJzZSBhZ2FpbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBNYXRoTUwgd2l0aCBzdGFuZGFyZCBYTUwgdGFncyB0byBhIE1NYXRoTUwgZW5jb2RlZCB3aXRoIHNhZmUgWE1MIHRhZ3MuXG4gICAqIFdlIHVzZSB0aGVzZSBlbnRpdGllcyBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBodG1sIGVudGl0aWVzIG9uIGl0cyBhdHRyaWJ1dGVzIHNvbWV0aW1lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IC0gaW5wdXQgc3RyaW5nIHRvIGJlIGVuY29kZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gZW5jb2RlZCBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2FmZVhtbEVuY29kZShpbnB1dCkge1xuICAgIGNvbnN0IHsgdGFnT3BlbmVyIH0gPSBDb25zdGFudHMueG1sQ2hhcmFjdGVycztcbiAgICBjb25zdCB7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBkb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBhbXBlcnNhbmQgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgcXVvdGUgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChkb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoYW1wZXJzYW5kKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy5hbXBlcnNhbmQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQocXVvdGUpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnF1b3RlKTtcblxuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBzcGVjaWFsIHN5bWJvbHMgKD4gMTI4KSB0byBlbnRpdGllcyBhbmQgcmVwbGFjZXMgYWxsIHRleHR1YWxcbiAgICogZW50aXRpZXMgYnkgaXRzIG51bWJlciBlbnRpdGllcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBzdHJpbmcgY29udGFpbmluZyAtIG9yIG5vdCAtIHNwZWNpYWwgc3ltYm9sc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBNYXRoTUwgd2l0aCBhbGwgdGV4dHVhbCBlbnRpdGllcyByZXBsYWNlZC5cbiAgICovXG4gIHN0YXRpYyBtYXRoTUxFbnRpdGllcyhtYXRobWwpIHtcbiAgICBsZXQgdG9SZXR1cm4gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0aG1sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXIgPSBtYXRobWwuY2hhckF0KGkpO1xuXG4gICAgICAvLyBQYXJzaW5nID4gMTI4IGNoYXJhY3RlcnMuXG4gICAgICBpZiAobWF0aG1sLmNvZGVQb2ludEF0KGkpID4gMTI4KSB7XG4gICAgICAgIHRvUmV0dXJuICs9IGAmIyR7bWF0aG1sLmNvZGVQb2ludEF0KGkpfTtgO1xuICAgICAgICAvLyBGb3IgVVRGLTMyIGNoYXJhY3RlcnMgd2UgbmVlZCB0byBtb3ZlIHRoZSBpbmRleCBvbmUgcG9zaXRpb24uXG4gICAgICAgIGlmIChtYXRobWwuY29kZVBvaW50QXQoaSkgPiAweGZmZmYpIHtcbiAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnJicpIHtcbiAgICAgICAgY29uc3QgZW5kID0gbWF0aG1sLmluZGV4T2YoJzsnLCBpICsgMSk7XG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWF0aG1sLnN1YnN0cmluZyhpLCBlbmQgKyAxKTtcbiAgICAgICAgICB0b1JldHVybiArPSBgJiMke1V0aWwuZml4ZWRDaGFyQ29kZUF0KChjb250YWluZXIudGV4dENvbnRlbnQgfHwgY29udGFpbmVyLmlubmVyVGV4dCksIDApfTtgO1xuICAgICAgICAgIGkgPSBlbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9SZXR1cm4gKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b1JldHVybiArPSBjaGFyYWN0ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvUmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSBlZGl0b3IgbmFtZSB3aXRoIHRoZSBwcmVmaXggd3JzXyB0byBhIE1hdGhNTCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBhIE1hdGhNTCBzdHJpbmcgY3JlYXRlZCB3aXRoIGEgY3VzdG9tIGVkaXRvciwgbGlrZSBjaGVtaXN0cnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21FZGl0b3IgLSBjdXN0b20gZWRpdG9yIG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE1hdGhNTCBzdHJpbmcgd2l0aCBoaXMgY2xhc3MgY29udGFpbmluZyB0aGUgZWRpdG9yIHRvb2xiYXIgc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIGFkZEN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlKG1hdGhtbCwgY3VzdG9tRWRpdG9yKSB7XG4gICAgbGV0IHRvUmV0dXJuID0gJyc7XG5cbiAgICBjb25zdCBzdGFydCA9IG1hdGhtbC5pbmRleE9mKCc8bWF0aCcpO1xuICAgIGlmIChzdGFydCA9PT0gMCkge1xuICAgICAgY29uc3QgZW5kID0gbWF0aG1sLmluZGV4T2YoJz4nKTtcbiAgICAgIGlmIChtYXRobWwuaW5kZXhPZignY2xhc3MnKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gQWRkaW5nIGN1c3RvbSBlZGl0b3IgdHlwZS5cbiAgICAgICAgdG9SZXR1cm4gPSBgJHttYXRobWwuc3Vic3RyKHN0YXJ0LCBlbmQpfSBjbGFzcz1cIndyc18ke2N1c3RvbUVkaXRvcn1cIj5gO1xuICAgICAgICB0b1JldHVybiArPSBtYXRobWwuc3Vic3RyKGVuZCArIDEsIG1hdGhtbC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRobWw7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY3VzdG9tIGVkaXRvciBuYW1lIGZyb20gdGhlIE1hdGhNTCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBhIE1hdGhNTCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21FZGl0b3IgLSBjdXN0b20gZWRpdG9yIG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBpbnB1dCBNYXRoTUwgd2l0aG91dCBjdXN0b21FZGl0b3IgbmFtZSBpbiBoaXMgY2xhc3MuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlQ3VzdG9tRWRpdG9yQ2xhc3NBdHRyaWJ1dGUobWF0aG1sLCBjdXN0b21FZGl0b3IpIHtcbiAgICAvLyBEaXNjYXJkIE1hdGhNTCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgY2xhc3MuXG4gICAgaWYgKG1hdGhtbC5pbmRleE9mKCdjbGFzcycpID09PSAtMSB8fCBtYXRobWwuaW5kZXhPZihgd3JzXyR7Y3VzdG9tRWRpdG9yfWApID09PSAtMSkge1xuICAgICAgcmV0dXJuIG1hdGhtbDtcbiAgICB9XG5cbiAgICAvLyBUcml2aWFsIGNhc2U6IGNsYXNzIGF0dHJpYnV0ZSB2YWx1ZSBlcXVhbCB0byBlZGl0b3IgbmFtZS4gVGhlblxuICAgIC8vIGNsYXNzIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICAgIC8vIEZpcnN0IHRyeSB0byByZW1vdmUgaXQgd2l0aCBhIHNwYWNlIGJlZm9yZSBpZiB0aGVyZSBpcyBvbmVcbiAgICAvLyBPdGhlcndpc2Ugd2l0aG91dCB0aGUgc3BhY2VcbiAgICBpZiAobWF0aG1sLmluZGV4T2YoYCBjbGFzcz1cIndyc18ke2N1c3RvbUVkaXRvcn1cImApICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG1hdGhtbC5yZXBsYWNlKGAgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgLCAnJyk7XG4gICAgfSBlbHNlIGlmIChtYXRobWwuaW5kZXhPZihgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtYXRobWwucmVwbGFjZShgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gTm9uIFRyaXZpYWwgY2FzZTogY2xhc3MgYXR0cmlidXRlIGNvbnRhaW5zIGVkaXRvciBuYW1lLlxuICAgIHJldHVybiBtYXRobWwucmVwbGFjZShgd3JzXyR7Y3VzdG9tRWRpdG9yfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFubm90YXRpb24gdGFnIGluIE1hdGhNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWF0aG1sIC0gdmFsaWQgTWF0aE1MLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29udGVudCAtIHZhbHVlIHRvIHB1dCBpbnNpZGUgYW5ub3RhdGlvbiB0YWcuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbm5vdGF0aW9uRW5jb2RpbmcgLSBhbm5vdGF0aW9uIGVuY29kaW5nLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGggYW4gYW5ub3RhdGlvbiB0aGF0IGNvbnRhaW5zXG4gICAqICdjb250ZW50JyBhbmQgZW5jb2RpbmcgJ2VuY29kaW5nJy5cbiAgICovXG4gIHN0YXRpYyBhZGRBbm5vdGF0aW9uKG1hdGhtbCwgY29udGVudCwgYW5ub3RhdGlvbkVuY29kaW5nKSB7XG4gICAgLy8gSWYgY29udGFpbnMgYW5ub3RhdGlvbiwgYWxzbyBjb250YWlucyBzZW1hbnRpY3MgdGFnLlxuICAgIGNvbnN0IGNvbnRhaW5zQW5ub3RhdGlvbiA9IG1hdGhtbC5pbmRleE9mKCc8YW5ub3RhdGlvbicpO1xuXG4gICAgbGV0IG1hdGhtbFdpdGhBbm5vdGF0aW9uID0gJyc7XG4gICAgaWYgKGNvbnRhaW5zQW5ub3RhdGlvbiAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGNsb3NlU2VtYW50aWNzSW5kZXggPSBtYXRobWwuaW5kZXhPZignPC9zZW1hbnRpY3M+Jyk7XG4gICAgICBtYXRobWxXaXRoQW5ub3RhdGlvbiA9IGAke21hdGhtbC5zdWJzdHJpbmcoMCwgY2xvc2VTZW1hbnRpY3NJbmRleCl9PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPiR7bWF0aG1sLnN1YnN0cmluZyhjbG9zZVNlbWFudGljc0luZGV4KX1gO1xuICAgIH0gZWxzZSBpZiAoTWF0aE1MLmlzRW1wdHkobWF0aG1sKSkge1xuICAgICAgY29uc3QgZW5kSW5kZXhJbmxpbmUgPSBtYXRobWwuaW5kZXhPZignLz4nKTtcbiAgICAgIGNvbnN0IGVuZEluZGV4Tm9uSW5saW5lID0gbWF0aG1sLmluZGV4T2YoJz4nKTtcbiAgICAgIGNvbnN0IGVuZEluZGV4ID0gZW5kSW5kZXhOb25JbmxpbmUgPT09IGVuZEluZGV4SW5saW5lID8gZW5kSW5kZXhJbmxpbmUgOiBlbmRJbmRleE5vbklubGluZTtcbiAgICAgIG1hdGhtbFdpdGhBbm5vdGF0aW9uID0gYCR7bWF0aG1sLnN1YnN0cmluZygwLCBlbmRJbmRleCl9PjxzZW1hbnRpY3M+PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiZWdpbk1hdGhNTENvbnRlbnQgPSBtYXRobWwuaW5kZXhPZignPicpICsgMTtcbiAgICAgIGNvbnN0IGVuZE1hdGhtbENvbnRlbnQgPSBtYXRobWwubGFzdEluZGV4T2YoJzwvbWF0aD4nKTtcbiAgICAgIGNvbnN0IG1hdGhtbENvbnRlbnQgPSBtYXRobWwuc3Vic3RyaW5nKGJlZ2luTWF0aE1MQ29udGVudCwgZW5kTWF0aG1sQ29udGVudCk7XG4gICAgICBtYXRobWxXaXRoQW5ub3RhdGlvbiA9IGAke21hdGhtbC5zdWJzdHJpbmcoMCwgYmVnaW5NYXRoTUxDb250ZW50KX08c2VtYW50aWNzPjxtcm93PiR7bWF0aG1sQ29udGVudH08L21yb3c+PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD5gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0aG1sV2l0aEFubm90YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzcGVjaWZpYyBhbm5vdGF0aW9uIHRhZyBpbiBNYXRoTUwgZWxlbWVudC5cbiAgICogSW4gY2FzZSBvZiByZW1vdmUgdGhlIHVuaXF1ZSBhbm5vdGF0aW9uLCBhbHNvIGlzIHJlbW92ZWQgc2VtYW50aWNzIHRhZy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIHZhbGlkIE1hdGhNTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25FbmNvZGluZyAtIGFubm90YXRpb24gZW5jb2RpbmcgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGhvdXQgdGhlIGFubm90YXRpb24gZW5jb2Rpbmcgc3BlY2lmaWVkLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZUFubm90YXRpb24obWF0aG1sLCBhbm5vdGF0aW9uRW5jb2RpbmcpIHtcbiAgICBsZXQgbWF0aG1sV2l0aG91dEFubm90YXRpb24gPSBtYXRobWw7XG4gICAgY29uc3Qgb3BlbkFubm90YXRpb25UYWcgPSBgPGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj5gO1xuICAgIGNvbnN0IGNsb3NlQW5ub3RhdGlvblRhZyA9ICc8L2Fubm90YXRpb24+JztcbiAgICBjb25zdCBzdGFydEFubm90YXRpb25JbmRleCA9IG1hdGhtbC5pbmRleE9mKG9wZW5Bbm5vdGF0aW9uVGFnKTtcbiAgICBpZiAoc3RhcnRBbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICBsZXQgZGlmZmVyZW50QW5ub3RhdGlvbkZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ID0gbWF0aG1sLmluZGV4T2YoJzxhbm5vdGF0aW9uJyk7XG4gICAgICB3aGlsZSAoZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICBpZiAoZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICE9PSBzdGFydEFubm90YXRpb25JbmRleCkge1xuICAgICAgICAgIGRpZmZlcmVudEFubm90YXRpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ID0gbWF0aG1sLmluZGV4T2YoJzxhbm5vdGF0aW9uJywgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWZmZXJlbnRBbm5vdGF0aW9uRm91bmQpIHtcbiAgICAgICAgY29uc3QgY2xvc2VJbmRleCA9IG1hdGhtbC5pbmRleE9mKGNsb3NlQW5ub3RhdGlvblRhZywgc3RhcnRBbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRBbm5vdGF0aW9uSW5kZXggPSBjbG9zZUluZGV4ICsgY2xvc2VBbm5vdGF0aW9uVGFnLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IG1hdGhtbC5zdWJzdHJpbmcoMCwgc3RhcnRBbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgICBtYXRobWxXaXRob3V0QW5ub3RhdGlvbiA9IHN0YXJ0SW5kZXggKyBtYXRobWwuc3Vic3RyaW5nKGVuZEFubm90YXRpb25JbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRobWxXaXRob3V0QW5ub3RhdGlvbiA9IE1hdGhNTC5yZW1vdmVTZW1hbnRpY3MobWF0aG1sKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0aG1sV2l0aG91dEFubm90YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzZW1hbnRpY3MgdGFnIHRvIG1hdGhtbC5cbiAgICogV2hlbiB1c2luZyBIYW5kIHRvIGNyZWF0ZSBmb3JtdWxhcywgaXQgYWRkcyB0aGUgbXJvdyB0YWcgZHVlIHRvIHRoZSBzZW1hbnRpY3Mgb25lLCB0aGlzIG9uZSBpcyBhbHNvIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBNYXRoTUwgc3RyaW5nLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtICdtYXRobWwnIHdpdGhvdXQgc2VtYW50aWNzIHRhZy5cbiAgICovXG4gIHN0YXRpYyByZW1vdmVTZW1hbnRpY3MobWF0aG1sKSB7XG4gICAgLy8gSWYgYG1yb3dgIGlzIGZvdW5kIHJpZ2h0IGJlZm9yZSB0aGUgYHNlbWFudGljc2Agc3RhcnRpbmcgdGFnLCBpdCdzIHJlbW92ZWQgYXMgd2VsbCBcbiAgICBjb25zdCBzZW1hbnRpY3NTdGFydGluZ1RhZ1JlZ2V4ID0gLzxzZW1hbnRpY3M+XFxzKj8oPG1yb3c+KT8vZ207XG5cbiAgICAvLyBJZiBgbXJvd2AgaXMgZm91bmQgcmlnaHQgYWZ0ZXIgdGhlIGBhbm5vdGF0aW9uYCBlbmRpbmcgdGFnLCBpdCdzIHJlbW92ZWQgYXMgd2VsbFxuICAgIC8vIGFsb25nc2lkZSBgc2VtYW50aWNzYCBjbG9zaW5nIHRhZyBhbmQgdGhlIHdob2xlIGBhbm5vdGF0aW9uYCB0YWcgYW5kIGl0cyBjb250ZW50cy5cbiAgICBjb25zdCBzZW1hbnRpY3NFbmRpbmdUYWdSZWdleCA9IC8oPFxcL21yb3c+KT9cXHMqPGFubm90YXRpb25bXFxXXFx3XSo/PFxcL3NlbWFudGljcz4vZ207XG5cbiAgICByZXR1cm4gbWF0aG1sXG4gICAgLnJlcGxhY2Uoc2VtYW50aWNzU3RhcnRpbmdUYWdSZWdleCwgJycpXG4gICAgLnJlcGxhY2Uoc2VtYW50aWNzRW5kaW5nVGFnUmVnZXgsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGFsbCB4bWwgbWF0aG1sIG9jY3VycmVuY2VzIHRoYXQgY29udGFpbiBzZW1hbnRpY3MgdG8gdGhlIHNhbWVcbiAgICogeG1sIG1hdGhtbCBvY2N1cnJlbmNlcyB3aXRob3V0IHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBzdHJpbmcgdGhhdCBjYW4gY29udGFpbiB4bWwgbWF0aG1sIG9jY3VycmVuY2VzLlxuICAgKiBAcGFyYW0ge0NvbnN0YW50c30gW2NoYXJhY3RlcnNdIC0gQ29uc3RhbnQgb2JqZWN0IGNvbnRhaW5pbmcgeG1sQ2hhcmFjdGVyc1xuICAgKiBvciBzYWZlWG1sQ2hhcmFjdGVycyByZWxhdGlvbi5cbiAgICogeG1sQ2hhcmFjdGVycyBieSBkZWZhdWx0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtICd0ZXh0JyB3aXRoIGFsbCB4bWwgbWF0aG1sIG9jY3VycmVuY2VzIHdpdGhvdXQgYW5ub3RhdGlvbiB0YWcuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlU2VtYW50aWNzT2N1cnJlbmNlcyh0ZXh0LCBjaGFyYWN0ZXJzID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMpIHtcbiAgICBjb25zdCBtYXRoVGFnU3RhcnQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1tYXRoYDtcbiAgICBjb25zdCBtYXRoVGFnRW5kID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L21hdGgke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgY29uc3QgbWF0aFRhZ0VuZGxpbmUgPSBgLyR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCB7IHRhZ0Nsb3NlciB9ID0gY2hhcmFjdGVycztcbiAgICBjb25zdCBzZW1hbnRpY3NUYWdTdGFydCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfXNlbWFudGljcyR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCBhbm5vdGF0aW9uVGFnU3RhcnQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1hbm5vdGF0aW9uIGVuY29kaW5nPWA7XG5cbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgbGV0IHN0YXJ0ID0gdGV4dC5pbmRleE9mKG1hdGhUYWdTdGFydCk7XG4gICAgbGV0IGVuZCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkge1xuICAgICAgb3V0cHV0ICs9IHRleHQuc3Vic3RyaW5nKGVuZCwgc3RhcnQpO1xuXG4gICAgICAvLyBNYXRoTUwgY2FuIGJlIHdyaXR0ZW4gYXMgJzxtYXRoPjwvbWF0aD4nIG9yICc8bWF0aCAvPicuXG4gICAgICBjb25zdCBtYXRoVGFnRW5kSW5kZXggPSB0ZXh0LmluZGV4T2YobWF0aFRhZ0VuZCwgc3RhcnQpO1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZGxpbmVJbmRleCA9IHRleHQuaW5kZXhPZihtYXRoVGFnRW5kbGluZSwgc3RhcnQpO1xuICAgICAgY29uc3QgZmlyc3RUYWdDbG9zZXIgPSB0ZXh0LmluZGV4T2YodGFnQ2xvc2VyLCBzdGFydCk7XG4gICAgICBpZiAobWF0aFRhZ0VuZEluZGV4ICE9PSAtMSkge1xuICAgICAgICBlbmQgPSBtYXRoVGFnRW5kSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKG1hdGhUYWdFbmRsaW5lSW5kZXggPT09IGZpcnN0VGFnQ2xvc2VyIC0gMSkge1xuICAgICAgICBlbmQgPSBtYXRoVGFnRW5kbGluZUluZGV4O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZW1hbnRpY3NJbmRleCA9IHRleHQuaW5kZXhPZihzZW1hbnRpY3NUYWdTdGFydCwgc3RhcnQpO1xuICAgICAgaWYgKHNlbWFudGljc0luZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBtbWxUYWdTdGFydCA9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBzZW1hbnRpY3NJbmRleCk7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IHRleHQuaW5kZXhPZihhbm5vdGF0aW9uVGFnU3RhcnQsIHN0YXJ0KTtcbiAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gc2VtYW50aWNzSW5kZXggKyBzZW1hbnRpY3NUYWdTdGFydC5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgbW1sQ29udGVudCA9IHRleHQuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGFubm90YXRpb25JbmRleCk7XG4gICAgICAgICAgb3V0cHV0ICs9IG1tbFRhZ1N0YXJ0ICsgbW1sQ29udGVudCArIG1hdGhUYWdFbmQ7XG4gICAgICAgICAgc3RhcnQgPSB0ZXh0LmluZGV4T2YobWF0aFRhZ1N0YXJ0LCBzdGFydCArIG1hdGhUYWdTdGFydC5sZW5ndGgpO1xuICAgICAgICAgIGVuZCArPSBtYXRoVGFnRW5kLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmQgPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9IHRleHQuaW5kZXhPZihtYXRoVGFnU3RhcnQsIHN0YXJ0ICsgbWF0aFRhZ1N0YXJ0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IHRleHQuaW5kZXhPZihtYXRoVGFnU3RhcnQsIHN0YXJ0ICsgbWF0aFRhZ1N0YXJ0Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IHRleHQuc3Vic3RyaW5nKGVuZCwgdGV4dC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgTWF0aE1MIGNvbnRhaW5zIGEgY2VydGFpbiBjbGFzcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhNTCAtIGlucHV0IE1hdGhNTC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGlucHV0IE1hdGhNTCBjb250YWlucyB0aGUgaW5wdXQgY2xhc3MuXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNvbnRhaW5DbGFzcyhtYXRoTUwsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNsYXNzSW5kZXggPSBtYXRoTUwuaW5kZXhPZignY2xhc3MnKTtcbiAgICBpZiAoY2xhc3NJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NUYWdFbmRJbmRleCA9IG1hdGhNTC5pbmRleE9mKCc+JywgY2xhc3NJbmRleCk7XG4gICAgY29uc3QgY2xhc3NUYWcgPSBtYXRoTUwuc3Vic3RyaW5nKGNsYXNzSW5kZXgsIGNsYXNzVGFnRW5kSW5kZXgpO1xuICAgIGlmIChjbGFzc1RhZy5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBtYXRobWwgaXMgZW1wdHkuIE90aGVyd2lzZSwgZmFsc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSB2YWxpZCBNYXRoTUwgd2l0aCBzdGFuZGFyZCBYTUwgdGFncy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiBtYXRobWwgaXMgZW1wdHkuIE90aGVyd2lzZSwgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eShtYXRobWwpIHtcbiAgICAvLyBNYXRoTUwgY2FuIGhhdmUgdGhlIHNoYXBlIDxtYXRoPjwvbWF0aD4gb3IgJzxtYXRoIC8+Jy5cbiAgICBjb25zdCBjbG9zZVRhZyA9ICc+JztcbiAgICBjb25zdCBjbG9zZVRhZ0lubGluZSA9ICcvPic7XG4gICAgY29uc3QgZmlyc3RDbG9zZVRhZ0luZGV4ID0gbWF0aG1sLmluZGV4T2YoY2xvc2VUYWcpO1xuICAgIGNvbnN0IGZpcnN0Q2xvc2VUYWdJbmxpbmVJbmRleCA9IG1hdGhtbC5pbmRleE9mKGNsb3NlVGFnSW5saW5lKTtcbiAgICBsZXQgZW1wdHkgPSBmYWxzZTtcbiAgICAvLyBNYXRoTUwgaXMgYWx3YXlzIGVtcHR5IGluIHRoZSBzZWNvbmQgc2hhcGUuXG4gICAgaWYgKGZpcnN0Q2xvc2VUYWdJbmxpbmVJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChmaXJzdENsb3NlVGFnSW5saW5lSW5kZXggPT09IGZpcnN0Q2xvc2VUYWdJbmRleCAtIDEpIHtcbiAgICAgICAgZW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hdGhNTCBpcyBhbHdheXMgZW1wdHkgaW4gdGhlIGZpcnN0IHNoYXBlIHdoZW4gdGhlcmUgYXJlbid0IGVsZW1lbnRzXG4gICAgLy8gYmV0d2VlbiBtYXRoIHRhZ3MuXG4gICAgaWYgKCFlbXB0eSkge1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnPC8oLis6KT9tYXRoPicpO1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZEFycmF5ID0gbWF0aFRhZ0VuZFJlZ2V4LmV4ZWMobWF0aG1sKTtcbiAgICAgIGlmIChtYXRoVGFnRW5kQXJyYXkpIHtcbiAgICAgICAgZW1wdHkgPSBmaXJzdENsb3NlVGFnSW5kZXggKyAxID09PSBtYXRoVGFnRW5kQXJyYXkuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgaHRtbCBlbnRpdGllcyBpbnNpZGUgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIHZhbGlkIE1hdGhNTCB3aXRoIHN0YW5kYXJkIFhNTCB0YWdzLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGggcHJvcGVydHkgZW50aXRpZXMgZW5jb2RlZC5cbiAgICovXG4gIHN0YXRpYyBlbmNvZGVQcm9wZXJ0aWVzKG1hdGhtbCkge1xuICAgIC8vIFNlYXJjaCBhbGwgdGhlIHByb3BlcnRpZXMuXG4gICAgY29uc3QgcmVnZXggPSAvXFx3Kz1cIi4qP1wiL2c7XG4gICAgLy8gRW5jb2RlIGh0bWwgZW50aXRpZXMuXG4gICAgY29uc3QgcmVwbGFjZXIgPSAobWF0Y2gpID0+IHtcbiAgICAgIC8vIEl0IGhhcyB0aGUgc2hhcGU6XG4gICAgICAvLyA8bWF0aCBwcm9wZXJ0eU9uZT1cInNvbWV0aGluZ09uZVwiPjxjaGlsZHJlbiBwcm9wZXJ0eVR3bz1cInNvbWV0aGluZ1R3b1wiPjwvY2hpbGRyZW4+PC9tYXRoPi5cbiAgICAgIGNvbnN0IHF1b3RlSW5kZXggPSBtYXRjaC5pbmRleE9mKCdcIicpO1xuICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IG1hdGNoLnN1YnN0cmluZyhxdW90ZUluZGV4ICsgMSwgbWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlRW5jb2RlZCA9IFV0aWwuaHRtbEVudGl0aWVzKHByb3BlcnR5VmFsdWUpO1xuICAgICAgY29uc3QgbWF0Y2hFbmNvZGVkID0gYCR7bWF0Y2guc3Vic3RyaW5nKDAsIHF1b3RlSW5kZXggKyAxKX0ke3Byb3BlcnR5VmFsdWVFbmNvZGVkfVwiYDtcbiAgICAgIHJldHVybiBtYXRjaEVuY29kZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG1hdGhtbEVuY29kZWQgPSBtYXRobWwucmVwbGFjZShyZWdleCwgcmVwbGFjZXIpO1xuICAgIHJldHVybiBtYXRobWxFbmNvZGVkO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIG1kNTtcbmV4cG9ydCBkZWZhdWx0IG1kNTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEh4T3ZlcnJpZGVzID0gZnVuY3Rpb24gKCkgeyB9XG4gIEh4T3ZlcnJpZGVzLl9fbmFtZV9fID0gdHJ1ZTtcbiAgSHhPdmVycmlkZXMuZGF0ZVN0ciA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIHZhciBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdmFyIGggPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgdmFyIG1pID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAobSA8IDEwID8gXCIwXCIgKyBtIDogXCJcIiArIG0pICsgXCItXCIgKyAoZCA8IDEwID8gXCIwXCIgKyBkIDogXCJcIiArIGQpICsgXCIgXCIgKyAoaCA8IDEwID8gXCIwXCIgKyBoIDogXCJcIiArIGgpICsgXCI6XCIgKyAobWkgPCAxMCA/IFwiMFwiICsgbWkgOiBcIlwiICsgbWkpICsgXCI6XCIgKyAocyA8IDEwID8gXCIwXCIgKyBzIDogXCJcIiArIHMpO1xuICB9XG4gIEh4T3ZlcnJpZGVzLnN0ckRhdGUgPSBmdW5jdGlvbiAocykge1xuICAgIHN3aXRjaCAocy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldFRpbWUoMCk7XG4gICAgICAgIGQuc2V0VVRDSG91cnMoa1swXSk7XG4gICAgICAgIGQuc2V0VVRDTWludXRlcyhrWzFdKTtcbiAgICAgICAgZC5zZXRVVENTZWNvbmRzKGtbMl0pO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIi1cIik7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShrWzBdLCBrWzFdIC0gMSwga1syXSwgMCwgMCwgMCk7XG4gICAgICBjYXNlIDE5OlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgeSA9IGtbMF0uc3BsaXQoXCItXCIpO1xuICAgICAgICB2YXIgdCA9IGtbMV0uc3BsaXQoXCI6XCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeVswXSwgeVsxXSAtIDEsIHlbMl0sIHRbMF0sIHRbMV0sIHRbMl0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgXCJJbnZhbGlkIGRhdGUgZm9ybWF0IDogXCIgKyBzO1xuICAgIH1cbiAgfVxuICBIeE92ZXJyaWRlcy5jY2EgPSBmdW5jdGlvbiAocywgaW5kZXgpIHtcbiAgICB2YXIgeCA9IHMuY2hhckNvZGVBdChpbmRleCk7XG4gICAgaWYgKHggIT0geCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4geDtcbiAgfVxuICBIeE92ZXJyaWRlcy5zdWJzdHIgPSBmdW5jdGlvbiAocywgcG9zLCBsZW4pIHtcbiAgICBpZiAocG9zICE9IG51bGwgJiYgcG9zICE9IDAgJiYgbGVuICE9IG51bGwgJiYgbGVuIDwgMCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGxlbiA9PSBudWxsKSBsZW4gPSBzLmxlbmd0aDtcbiAgICBpZiAocG9zIDwgMCkge1xuICAgICAgcG9zID0gcy5sZW5ndGggKyBwb3M7XG4gICAgICBpZiAocG9zIDwgMCkgcG9zID0gMDtcbiAgICB9IGVsc2UgaWYgKGxlbiA8IDApIGxlbiA9IHMubGVuZ3RoICsgbGVuIC0gcG9zO1xuICAgIHJldHVybiBzLnN1YnN0cihwb3MsIGxlbik7XG4gIH1cbiAgSHhPdmVycmlkZXMucmVtb3ZlID0gZnVuY3Rpb24gKGEsIG9iaikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbCA9IGEubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgaWYgKGFbaV0gPT0gb2JqKSB7XG4gICAgICAgIGEuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEh4T3ZlcnJpZGVzLml0ZXIgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXI6IDAsIGFycjogYSwgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXIgPCB0aGlzLmFyci5sZW5ndGg7XG4gICAgICB9LCBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyclt0aGlzLmN1cisrXTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHZhciBJbnRJdGVyID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gIH07XG4gIEludEl0ZXIuX19uYW1lX18gPSB0cnVlO1xuICBJbnRJdGVyLnByb3RvdHlwZSA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW4rKztcbiAgICB9XG4gICAgLCBoYXNOZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW4gPCB0aGlzLm1heDtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IEludEl0ZXJcbiAgfVxuICB2YXIgU3RkID0gZnVuY3Rpb24gKCkgeyB9XG4gIFN0ZC5fX25hbWVfXyA9IHRydWU7XG4gIFN0ZFtcImlzXCJdID0gZnVuY3Rpb24gKHYsIHQpIHtcbiAgICByZXR1cm4ganMuQm9vdC5fX2luc3RhbmNlb2YodiwgdCk7XG4gIH1cbiAgU3RkLnN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIGpzLkJvb3QuX19zdHJpbmdfcmVjKHMsIFwiXCIpO1xuICB9XG4gIFN0ZFtcImludFwiXSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggfCAwO1xuICB9XG4gIFN0ZC5wYXJzZUludCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIHYgPSBwYXJzZUludCh4LCAxMCk7XG4gICAgaWYgKHYgPT0gMCAmJiAoSHhPdmVycmlkZXMuY2NhKHgsIDEpID09IDEyMCB8fCBIeE92ZXJyaWRlcy5jY2EoeCwgMSkgPT0gODgpKSB2ID0gcGFyc2VJbnQoeCk7XG4gICAgaWYgKGlzTmFOKHYpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdjtcbiAgfVxuICBTdGQucGFyc2VGbG9hdCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoeCk7XG4gIH1cbiAgU3RkLnJhbmRvbSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpO1xuICB9XG4gIHZhciBjb20gPSBjb20gfHwge31cbiAgaWYgKCFjb20ud2lyaXMpIGNvbS53aXJpcyA9IHt9XG4gIGlmICghY29tLndpcmlzLmpzKSBjb20ud2lyaXMuanMgPSB7fVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRyeVJlYWR5KCk7XG4gIH07XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLl9fbmFtZV9fID0gdHJ1ZTtcbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMubWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXY7XG4gICAgZXYgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSgpO1xuICAgIGhheGUuVGltZXIuZGVsYXkoJGJpbmQoZXYsIGV2LnRyeVJlYWR5KSwgMTAwKTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2UgPT0gbnVsbCkgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2UgPSBuZXcgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMoKTtcbiAgICByZXR1cm4gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2U7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuYnlwYXNzRW5jYXBzdWxhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmNvbSA9PSBudWxsKSB3aW5kb3cuY29tID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMgPT0gbnVsbCkgd2luZG93LmNvbS53aXJpcyA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzLmpzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMuanMgPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMucHJvdG90eXBlID0ge1xuICAgIG1kNWVuY29kZTogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBoYXhlLk1kNS5lbmNvZGUoY29udGVudCk7XG4gICAgfVxuICAgICwgZG9Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID0gdGhpcztcbiAgICAgIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmJ5cGFzc0VuY2Fwc3VsYXRpb24oKTtcbiAgICB9XG4gICAgLCB0cnlSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgaWYgKGpzLkxpYi5kb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMuZG9Mb2FkKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJlYWR5KSBoYXhlLlRpbWVyLmRlbGF5KCRiaW5kKHRoaXMsIHRoaXMudHJ5UmVhZHkpLCAxMDApO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHNcbiAgfVxuICB2YXIgaGF4ZSA9IGhheGUgfHwge31cbiAgaGF4ZS5Mb2cgPSBmdW5jdGlvbiAoKSB7IH1cbiAgaGF4ZS5Mb2cuX19uYW1lX18gPSB0cnVlO1xuICBoYXhlLkxvZy50cmFjZSA9IGZ1bmN0aW9uICh2LCBpbmZvcykge1xuICAgIGpzLkJvb3QuX190cmFjZSh2LCBpbmZvcyk7XG4gIH1cbiAgaGF4ZS5Mb2cuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAganMuQm9vdC5fX2NsZWFyX3RyYWNlKCk7XG4gIH1cbiAgaGF4ZS5NZDUgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGhheGUuTWQ1Ll9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5NZDUuZW5jb2RlID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gbmV3IGhheGUuTWQ1KCkuZG9FbmNvZGUocyk7XG4gIH1cbiAgaGF4ZS5NZDUucHJvdG90eXBlID0ge1xuICAgIGRvRW5jb2RlOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuc3RyMmJsa3Moc3RyKTtcbiAgICAgIHZhciBhID0gMTczMjU4NDE5MztcbiAgICAgIHZhciBiID0gLTI3MTczMzg3OTtcbiAgICAgIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gICAgICB2YXIgZCA9IDI3MTczMzg3ODtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCB4Lmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkYSA9IGE7XG4gICAgICAgIHZhciBvbGRiID0gYjtcbiAgICAgICAgdmFyIG9sZGMgPSBjO1xuICAgICAgICB2YXIgb2xkZCA9IGQ7XG4gICAgICAgIHN0ZXAgPSAwO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICAgICAgYSA9IHRoaXMuYWRkbWUoYSwgb2xkYSk7XG4gICAgICAgIGIgPSB0aGlzLmFkZG1lKGIsIG9sZGIpO1xuICAgICAgICBjID0gdGhpcy5hZGRtZShjLCBvbGRjKTtcbiAgICAgICAgZCA9IHRoaXMuYWRkbWUoZCwgb2xkZCk7XG4gICAgICAgIGkgKz0gMTY7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yaGV4KGEpICsgdGhpcy5yaGV4KGIpICsgdGhpcy5yaGV4KGMpICsgdGhpcy5yaGV4KGQpO1xuICAgIH1cbiAgICAsIGlpOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0WE9SKGMsIHRoaXMuYml0T1IoYiwgfmQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgaGg6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRYT1IodGhpcy5iaXRYT1IoYiwgYyksIGQpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBnZzogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdE9SKHRoaXMuYml0QU5EKGIsIGQpLCB0aGlzLmJpdEFORChjLCB+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBmZjogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdE9SKHRoaXMuYml0QU5EKGIsIGMpLCB0aGlzLmJpdEFORCh+YiwgZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBjbW46IGZ1bmN0aW9uIChxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRtZSh0aGlzLnJvbCh0aGlzLmFkZG1lKHRoaXMuYWRkbWUoYSwgcSksIHRoaXMuYWRkbWUoeCwgdCkpLCBzKSwgYik7XG4gICAgfVxuICAgICwgcm9sOiBmdW5jdGlvbiAobnVtLCBjbnQpIHtcbiAgICAgIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbiAgICB9XG4gICAgLCBzdHIyYmxrczogZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIG5ibGsgPSAoc3RyLmxlbmd0aCArIDggPj4gNikgKyAxO1xuICAgICAgdmFyIGJsa3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHZhciBfZzEgPSAwLCBfZyA9IG5ibGsgKiAxNjtcbiAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICBibGtzW2ldID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBibGtzW2kgPj4gMl0gfD0gSHhPdmVycmlkZXMuY2NhKHN0ciwgaSkgPDwgKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0ICogODtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgYmxrc1tpID4+IDJdIHw9IDEyOCA8PCAoc3RyLmxlbmd0aCAqIDggKyBpKSAlIDQgKiA4O1xuICAgICAgdmFyIGwgPSBzdHIubGVuZ3RoICogODtcbiAgICAgIHZhciBrID0gbmJsayAqIDE2IC0gMjtcbiAgICAgIGJsa3Nba10gPSBsICYgMjU1O1xuICAgICAgYmxrc1trXSB8PSAobCA+Pj4gOCAmIDI1NSkgPDwgODtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDE2ICYgMjU1KSA8PCAxNjtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDI0ICYgMjU1KSA8PCAyNDtcbiAgICAgIHJldHVybiBibGtzO1xuICAgIH1cbiAgICAsIHJoZXg6IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgdmFyIGhleF9jaHIgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICAgIHZhciBfZyA9IDA7XG4gICAgICB3aGlsZSAoX2cgPCA0KSB7XG4gICAgICAgIHZhciBqID0gX2crKztcbiAgICAgICAgc3RyICs9IGhleF9jaHIuY2hhckF0KG51bSA+PiBqICogOCArIDQgJiAxNSkgKyBoZXhfY2hyLmNoYXJBdChudW0gPj4gaiAqIDggJiAxNSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAsIGFkZG1lOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgdmFyIGxzdyA9ICh4ICYgNjU1MzUpICsgKHkgJiA2NTUzNSk7XG4gICAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgNjU1MzU7XG4gICAgfVxuICAgICwgYml0QU5EOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxICYgKGIgJiAxKTtcbiAgICAgIHZhciBtc2IzMSA9IGEgPj4+IDEgJiBiID4+PiAxO1xuICAgICAgcmV0dXJuIG1zYjMxIDw8IDEgfCBsc2I7XG4gICAgfVxuICAgICwgYml0WE9SOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxIF4gYiAmIDE7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxIF4gYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIGJpdE9SOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxIHwgYiAmIDE7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxIHwgYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogaGF4ZS5NZDVcbiAgfVxuICBoYXhlLlRpbWVyID0gZnVuY3Rpb24gKHRpbWVfbXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHRoaXMuaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgbWUucnVuKCk7XG4gICAgfSwgdGltZV9tcyk7XG4gIH07XG4gIGhheGUuVGltZXIuX19uYW1lX18gPSB0cnVlO1xuICBoYXhlLlRpbWVyLmRlbGF5ID0gZnVuY3Rpb24gKGYsIHRpbWVfbXMpIHtcbiAgICB2YXIgdCA9IG5ldyBoYXhlLlRpbWVyKHRpbWVfbXMpO1xuICAgIHQucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdC5zdG9wKCk7XG4gICAgICBmKCk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBoYXhlLlRpbWVyLm1lYXN1cmUgPSBmdW5jdGlvbiAoZiwgcG9zKSB7XG4gICAgdmFyIHQwID0gaGF4ZS5UaW1lci5zdGFtcCgpO1xuICAgIHZhciByID0gZigpO1xuICAgIGhheGUuTG9nLnRyYWNlKGhheGUuVGltZXIuc3RhbXAoKSAtIHQwICsgXCJzXCIsIHBvcyk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgaGF4ZS5UaW1lci5zdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICB9XG4gIGhheGUuVGltZXIucHJvdG90eXBlID0ge1xuICAgIHJ1bjogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgICAsIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmlkID09IG51bGwpIHJldHVybjtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBoYXhlLlRpbWVyXG4gIH1cbiAgdmFyIGpzID0ganMgfHwge31cbiAganMuQm9vdCA9IGZ1bmN0aW9uICgpIHsgfVxuICBqcy5Cb290Ll9fbmFtZV9fID0gdHJ1ZTtcbiAganMuQm9vdC5fX3VuaHRtbCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoXCImXCIpLmpvaW4oXCImYW1wO1wiKS5zcGxpdChcIjxcIikuam9pbihcIiZsdDtcIikuc3BsaXQoXCI+XCIpLmpvaW4oXCImZ3Q7XCIpO1xuICB9XG4gIGpzLkJvb3QuX190cmFjZSA9IGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG1zZyA9IGkgIT0gbnVsbCA/IGkuZmlsZU5hbWUgKyBcIjpcIiArIGkubGluZU51bWJlciArIFwiOiBcIiA6IFwiXCI7XG4gICAgbXNnICs9IGpzLkJvb3QuX19zdHJpbmdfcmVjKHYsIFwiXCIpO1xuICAgIHZhciBkO1xuICAgIGlmICh0eXBlb2YgKGRvY3VtZW50KSAhPSBcInVuZGVmaW5lZFwiICYmIChkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXhlOnRyYWNlXCIpKSAhPSBudWxsKSBkLmlubmVySFRNTCArPSBqcy5Cb290Ll9fdW5odG1sKG1zZykgKyBcIjxici8+XCI7IGVsc2UgaWYgKHR5cGVvZiAoY29uc29sZSkgIT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLmxvZyAhPSBudWxsKSBjb25zb2xlLmxvZyhtc2cpO1xuICB9XG4gIGpzLkJvb3QuX19jbGVhcl90cmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGF4ZTp0cmFjZVwiKTtcbiAgICBpZiAoZCAhPSBudWxsKSBkLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbiAganMuQm9vdC5pc0NsYXNzID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby5fX25hbWVfXztcbiAgfVxuICBqcy5Cb290LmlzRW51bSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUuX19lbmFtZV9fO1xuICB9XG4gIGpzLkJvb3QuZ2V0Q2xhc3MgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLl9fY2xhc3NfXztcbiAgfVxuICBqcy5Cb290Ll9fc3RyaW5nX3JlYyA9IGZ1bmN0aW9uIChvLCBzKSB7XG4gICAgaWYgKG8gPT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuICAgIGlmIChzLmxlbmd0aCA+PSA1KSByZXR1cm4gXCI8Li4uPlwiO1xuICAgIHZhciB0ID0gdHlwZW9mIChvKTtcbiAgICBpZiAodCA9PSBcImZ1bmN0aW9uXCIgJiYgKG8uX19uYW1lX18gfHwgby5fX2VuYW1lX18pKSB0ID0gXCJvYmplY3RcIjtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgaWYgKG8gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGlmIChvLl9fZW51bV9fKSB7XG4gICAgICAgICAgICBpZiAoby5sZW5ndGggPT0gMikgcmV0dXJuIG9bMF07XG4gICAgICAgICAgICB2YXIgc3RyID0gb1swXSArIFwiKFwiO1xuICAgICAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICAgICAgdmFyIF9nMSA9IDIsIF9nID0gby5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgICAgICAgaWYgKGkgIT0gMikgc3RyICs9IFwiLFwiICsganMuQm9vdC5fX3N0cmluZ19yZWMob1tpXSwgcyk7IGVsc2Ugc3RyICs9IGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baV0sIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0ciArIFwiKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciBzdHIgPSBcIltcIjtcbiAgICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgICAgdmFyIF9nID0gMDtcbiAgICAgICAgICB3aGlsZSAoX2cgPCBsKSB7XG4gICAgICAgICAgICB2YXIgaTEgPSBfZysrO1xuICAgICAgICAgICAgc3RyICs9IChpMSA+IDAgPyBcIixcIiA6IFwiXCIpICsganMuQm9vdC5fX3N0cmluZ19yZWMob1tpMV0sIHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHIgKz0gXCJdXCI7XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9zdHI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdG9zdHIgPSBvLnRvU3RyaW5nO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFwiPz8/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvc3RyICE9IG51bGwgJiYgdG9zdHIgIT0gT2JqZWN0LnRvU3RyaW5nKSB7XG4gICAgICAgICAgdmFyIHMyID0gby50b1N0cmluZygpO1xuICAgICAgICAgIGlmIChzMiAhPSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gczI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGsgPSBudWxsO1xuICAgICAgICB2YXIgc3RyID0gXCJ7XFxuXCI7XG4gICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgdmFyIGhhc3AgPSBvLmhhc093blByb3BlcnR5ICE9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbykge1xuICAgICAgICAgIDtcbiAgICAgICAgICBpZiAoaGFzcCAmJiAhby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrID09IFwicHJvdG90eXBlXCIgfHwgayA9PSBcIl9fY2xhc3NfX1wiIHx8IGsgPT0gXCJfX3N1cGVyX19cIiB8fCBrID09IFwiX19pbnRlcmZhY2VzX19cIiB8fCBrID09IFwiX19wcm9wZXJ0aWVzX19cIikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdHIubGVuZ3RoICE9IDIpIHN0ciArPSBcIiwgXFxuXCI7XG4gICAgICAgICAgc3RyICs9IHMgKyBrICsgXCIgOiBcIiArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9ba10sIHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgPSBzLnN1YnN0cmluZygxKTtcbiAgICAgICAgc3RyICs9IFwiXFxuXCIgKyBzICsgXCJ9XCI7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgcmV0dXJuIFwiPGZ1bmN0aW9uPlwiO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gbztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBTdHJpbmcobyk7XG4gICAgfVxuICB9XG4gIGpzLkJvb3QuX19pbnRlcmZMb29wID0gZnVuY3Rpb24gKGNjLCBjbCkge1xuICAgIGlmIChjYyA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGNjID09IGNsKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgaW50ZiA9IGNjLl9faW50ZXJmYWNlc19fO1xuICAgIGlmIChpbnRmICE9IG51bGwpIHtcbiAgICAgIHZhciBfZzEgPSAwLCBfZyA9IGludGYubGVuZ3RoO1xuICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgIHZhciBpMSA9IGludGZbaV07XG4gICAgICAgIGlmIChpMSA9PSBjbCB8fCBqcy5Cb290Ll9faW50ZXJmTG9vcChpMSwgY2wpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGpzLkJvb3QuX19pbnRlcmZMb29wKGNjLl9fc3VwZXJfXywgY2wpO1xuICB9XG4gIGpzLkJvb3QuX19pbnN0YW5jZW9mID0gZnVuY3Rpb24gKG8sIGNsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvIGluc3RhbmNlb2YgY2wpIHtcbiAgICAgICAgaWYgKGNsID09IEFycmF5KSByZXR1cm4gby5fX2VudW1fXyA9PSBudWxsO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChqcy5Cb290Ll9faW50ZXJmTG9vcChvLl9fY2xhc3NfXywgY2wpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoY2wgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNsKSB7XG4gICAgICBjYXNlIEludDpcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChvICUgMjE0NzQ4MzY0OC4wKSA9PT0gbztcbiAgICAgIGNhc2UgRmxvYXQ6XG4gICAgICAgIHJldHVybiB0eXBlb2YgKG8pID09IFwibnVtYmVyXCI7XG4gICAgICBjYXNlIEJvb2w6XG4gICAgICAgIHJldHVybiBvID09PSB0cnVlIHx8IG8gPT09IGZhbHNlO1xuICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgKG8pID09IFwic3RyaW5nXCI7XG4gICAgICBjYXNlIER5bmFtaWM6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKG8gPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoY2wgPT0gQ2xhc3MgJiYgby5fX25hbWVfXyAhPSBudWxsKSByZXR1cm4gdHJ1ZTsgZWxzZSBudWxsO1xuICAgICAgICBpZiAoY2wgPT0gRW51bSAmJiBvLl9fZW5hbWVfXyAhPSBudWxsKSByZXR1cm4gdHJ1ZTsgZWxzZSBudWxsO1xuICAgICAgICByZXR1cm4gby5fX2VudW1fXyA9PSBjbDtcbiAgICB9XG4gIH1cbiAganMuQm9vdC5fX2Nhc3QgPSBmdW5jdGlvbiAobywgdCkge1xuICAgIGlmIChqcy5Cb290Ll9faW5zdGFuY2VvZihvLCB0KSkgcmV0dXJuIG87IGVsc2UgdGhyb3cgXCJDYW5ub3QgY2FzdCBcIiArIFN0ZC5zdHJpbmcobykgKyBcIiB0byBcIiArIFN0ZC5zdHJpbmcodCk7XG4gIH1cbiAganMuTGliID0gZnVuY3Rpb24gKCkgeyB9XG4gIGpzLkxpYi5fX25hbWVfXyA9IHRydWU7XG4gIGpzLkxpYi5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuICBqcy5MaWIuYWxlcnQgPSBmdW5jdGlvbiAodikge1xuICAgIGFsZXJ0KGpzLkJvb3QuX19zdHJpbmdfcmVjKHYsIFwiXCIpKTtcbiAgfVxuICBqcy5MaWIuZXZhbCA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIGV2YWwoY29kZSk7XG4gIH1cbiAganMuTGliLnNldEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChmKSB7XG4gICAganMuTGliLm9uZXJyb3IgPSBmO1xuICB9XG4gIHZhciAkXztcbiAgZnVuY3Rpb24gJGJpbmQobywgbSkgeyB2YXIgZiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYubWV0aG9kLmFwcGx5KGYuc2NvcGUsIGFyZ3VtZW50cyk7IH07IGYuc2NvcGUgPSBvOyBmLm1ldGhvZCA9IG07IHJldHVybiBmOyB9O1xuICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIEh4T3ZlcnJpZGVzLnJlbW92ZSA9IGZ1bmN0aW9uIChhLCBvKSB7XG4gICAgdmFyIGkgPSBhLmluZGV4T2Yobyk7XG4gICAgaWYgKGkgPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBhLnNwbGljZShpLCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTsgZWxzZSBudWxsO1xuICBNYXRoLl9fbmFtZV9fID0gW1wiTWF0aFwiXTtcbiAgTWF0aC5OYU4gPSBOdW1iZXIuTmFOO1xuICBNYXRoLk5FR0FUSVZFX0lORklOSVRZID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICBNYXRoLlBPU0lUSVZFX0lORklOSVRZID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICBNYXRoLmlzRmluaXRlID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaXNGaW5pdGUoaSk7XG4gIH07XG4gIE1hdGguaXNOYU4gPSBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpc05hTihpKTtcbiAgfTtcbiAgU3RyaW5nLnByb3RvdHlwZS5fX2NsYXNzX18gPSBTdHJpbmc7XG4gIFN0cmluZy5fX25hbWVfXyA9IHRydWU7XG4gIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX18gPSBBcnJheTtcbiAgQXJyYXkuX19uYW1lX18gPSB0cnVlO1xuICBEYXRlLnByb3RvdHlwZS5fX2NsYXNzX18gPSBEYXRlO1xuICBEYXRlLl9fbmFtZV9fID0gW1wiRGF0ZVwiXTtcbiAgdmFyIEludCA9IHsgX19uYW1lX186IFtcIkludFwiXSB9O1xuICB2YXIgRHluYW1pYyA9IHsgX19uYW1lX186IFtcIkR5bmFtaWNcIl0gfTtcbiAgdmFyIEZsb2F0ID0gTnVtYmVyO1xuICBGbG9hdC5fX25hbWVfXyA9IFtcIkZsb2F0XCJdO1xuICB2YXIgQm9vbCA9IEJvb2xlYW47XG4gIEJvb2wuX19lbmFtZV9fID0gW1wiQm9vbFwiXTtcbiAgdmFyIENsYXNzID0geyBfX25hbWVfXzogW1wiQ2xhc3NcIl0gfTtcbiAgdmFyIEVudW0gPSB7fTtcbiAgdmFyIFZvaWQgPSB7IF9fZW5hbWVfXzogW1wiVm9pZFwiXSB9O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIpIGpzLkxpYi5kb2N1bWVudCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAganMuTGliLndpbmRvdyA9IHdpbmRvdztcbiAgICBqcy5MaWIud2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmUpIHtcbiAgICAgIHZhciBmID0ganMuTGliLm9uZXJyb3I7XG4gICAgICBpZiAoZiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZihtc2csIFt1cmwgKyBcIjpcIiArIGxpbmVdKTtcbiAgICB9O1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1haW4oKTtcbiAgZGVsZXRlIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX187XG59KCkpO1xuXG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBIeE92ZXJyaWRlcyA9IGZ1bmN0aW9uICgpIHsgfVxuICBIeE92ZXJyaWRlcy5fX25hbWVfXyA9IHRydWU7XG4gIEh4T3ZlcnJpZGVzLmRhdGVTdHIgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIHZhciBtaSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG0gPCAxMCA/IFwiMFwiICsgbSA6IFwiXCIgKyBtKSArIFwiLVwiICsgKGQgPCAxMCA/IFwiMFwiICsgZCA6IFwiXCIgKyBkKSArIFwiIFwiICsgKGggPCAxMCA/IFwiMFwiICsgaCA6IFwiXCIgKyBoKSArIFwiOlwiICsgKG1pIDwgMTAgPyBcIjBcIiArIG1pIDogXCJcIiArIG1pKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IFwiXCIgKyBzKTtcbiAgfVxuICBIeE92ZXJyaWRlcy5zdHJEYXRlID0gZnVuY3Rpb24gKHMpIHtcbiAgICBzd2l0Y2ggKHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIjpcIik7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKDApO1xuICAgICAgICBkLnNldFVUQ0hvdXJzKGtbMF0pO1xuICAgICAgICBkLnNldFVUQ01pbnV0ZXMoa1sxXSk7XG4gICAgICAgIGQuc2V0VVRDU2Vjb25kcyhrWzJdKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCItXCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoa1swXSwga1sxXSAtIDEsIGtbMl0sIDAsIDAsIDApO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdmFyIHkgPSBrWzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgdmFyIHQgPSBrWzFdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHlbMF0sIHlbMV0gLSAxLCB5WzJdLCB0WzBdLCB0WzFdLCB0WzJdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IFwiSW52YWxpZCBkYXRlIGZvcm1hdCA6IFwiICsgcztcbiAgICB9XG4gIH1cbiAgSHhPdmVycmlkZXMuY2NhID0gZnVuY3Rpb24gKHMsIGluZGV4KSB7XG4gICAgdmFyIHggPSBzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmICh4ICE9IHgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgSHhPdmVycmlkZXMuc3Vic3RyID0gZnVuY3Rpb24gKHMsIHBvcywgbGVuKSB7XG4gICAgaWYgKHBvcyAhPSBudWxsICYmIHBvcyAhPSAwICYmIGxlbiAhPSBudWxsICYmIGxlbiA8IDApIHJldHVybiBcIlwiO1xuICAgIGlmIChsZW4gPT0gbnVsbCkgbGVuID0gcy5sZW5ndGg7XG4gICAgaWYgKHBvcyA8IDApIHtcbiAgICAgIHBvcyA9IHMubGVuZ3RoICsgcG9zO1xuICAgICAgaWYgKHBvcyA8IDApIHBvcyA9IDA7XG4gICAgfSBlbHNlIGlmIChsZW4gPCAwKSBsZW4gPSBzLmxlbmd0aCArIGxlbiAtIHBvcztcbiAgICByZXR1cm4gcy5zdWJzdHIocG9zLCBsZW4pO1xuICB9XG4gIEh4T3ZlcnJpZGVzLnJlbW92ZSA9IGZ1bmN0aW9uIChhLCBvYmopIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGwpIHtcbiAgICAgIGlmIChhW2ldID09IG9iaikge1xuICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBIeE92ZXJyaWRlcy5pdGVyID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VyOiAwLCBhcnI6IGEsIGhhc05leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyIDwgdGhpcy5hcnIubGVuZ3RoO1xuICAgICAgfSwgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJbdGhpcy5jdXIrK107XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB2YXIgSW50SXRlciA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICB9O1xuICBJbnRJdGVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgSW50SXRlci5wcm90b3R5cGUgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluKys7XG4gICAgfVxuICAgICwgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluIDwgdGhpcy5tYXg7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBJbnRJdGVyXG4gIH1cbiAgdmFyIFN0ZCA9IGZ1bmN0aW9uICgpIHsgfVxuICBTdGQuX19uYW1lX18gPSB0cnVlO1xuICBTdGRbXCJpc1wiXSA9IGZ1bmN0aW9uICh2LCB0KSB7XG4gICAgcmV0dXJuIGpzLkJvb3QuX19pbnN0YW5jZW9mKHYsIHQpO1xuICB9XG4gIFN0ZC5zdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBqcy5Cb290Ll9fc3RyaW5nX3JlYyhzLCBcIlwiKTtcbiAgfVxuICBTdGRbXCJpbnRcIl0gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4IHwgMDtcbiAgfVxuICBTdGQucGFyc2VJbnQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciB2ID0gcGFyc2VJbnQoeCwgMTApO1xuICAgIGlmICh2ID09IDAgJiYgKEh4T3ZlcnJpZGVzLmNjYSh4LCAxKSA9PSAxMjAgfHwgSHhPdmVycmlkZXMuY2NhKHgsIDEpID09IDg4KSkgdiA9IHBhcnNlSW50KHgpO1xuICAgIGlmIChpc05hTih2KSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHY7XG4gIH1cbiAgU3RkLnBhcnNlRmxvYXQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHgpO1xuICB9XG4gIFN0ZC5yYW5kb20gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KTtcbiAgfVxuICB2YXIgY29tID0gY29tIHx8IHt9XG4gIGlmICghY29tLndpcmlzKSBjb20ud2lyaXMgPSB7fVxuICBpZiAoIWNvbS53aXJpcy5qcykgY29tLndpcmlzLmpzID0ge31cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50cnlSZWFkeSgpO1xuICB9O1xuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5fX25hbWVfXyA9IHRydWU7XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2O1xuICAgIGV2ID0gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UoKTtcbiAgICBoYXhlLlRpbWVyLmRlbGF5KCRiaW5kKGV2LCBldi50cnlSZWFkeSksIDEwMCk7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID09IG51bGwpIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID0gbmV3IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzKCk7XG4gICAgcmV0dXJuIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmJ5cGFzc0VuY2Fwc3VsYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5jb20gPT0gbnVsbCkgd2luZG93LmNvbSA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMgPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcy5qcyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLnByb3RvdHlwZSA9IHtcbiAgICBtZDVlbmNvZGU6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICByZXR1cm4gaGF4ZS5NZDUuZW5jb2RlKGNvbnRlbnQpO1xuICAgIH1cbiAgICAsIGRvTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5ieXBhc3NFbmNhcHN1bGF0aW9uKCk7XG4gICAgfVxuICAgICwgdHJ5UmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmIChqcy5MaWIuZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLmRvTG9hZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5yZWFkeSkgaGF4ZS5UaW1lci5kZWxheSgkYmluZCh0aGlzLCB0aGlzLnRyeVJlYWR5KSwgMTAwKTtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzXG4gIH1cbiAgdmFyIGhheGUgPSBoYXhlIHx8IHt9XG4gIGhheGUuTG9nID0gZnVuY3Rpb24gKCkgeyB9XG4gIGhheGUuTG9nLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5Mb2cudHJhY2UgPSBmdW5jdGlvbiAodiwgaW5mb3MpIHtcbiAgICBqcy5Cb290Ll9fdHJhY2UodiwgaW5mb3MpO1xuICB9XG4gIGhheGUuTG9nLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGpzLkJvb3QuX19jbGVhcl90cmFjZSgpO1xuICB9XG4gIGhheGUuTWQ1ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBoYXhlLk1kNS5fX25hbWVfXyA9IHRydWU7XG4gIGhheGUuTWQ1LmVuY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIG5ldyBoYXhlLk1kNSgpLmRvRW5jb2RlKHMpO1xuICB9XG4gIGhheGUuTWQ1LnByb3RvdHlwZSA9IHtcbiAgICBkb0VuY29kZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIHggPSB0aGlzLnN0cjJibGtzKHN0cik7XG4gICAgICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gICAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gICAgICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICAgICAgdmFyIGQgPSAyNzE3MzM4Nzg7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgeC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9sZGEgPSBhO1xuICAgICAgICB2YXIgb2xkYiA9IGI7XG4gICAgICAgIHZhciBvbGRjID0gYztcbiAgICAgICAgdmFyIG9sZGQgPSBkO1xuICAgICAgICBzdGVwID0gMDtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSB0aGlzLmFkZG1lKGEsIG9sZGEpO1xuICAgICAgICBiID0gdGhpcy5hZGRtZShiLCBvbGRiKTtcbiAgICAgICAgYyA9IHRoaXMuYWRkbWUoYywgb2xkYyk7XG4gICAgICAgIGQgPSB0aGlzLmFkZG1lKGQsIG9sZGQpO1xuICAgICAgICBpICs9IDE2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmhleChhKSArIHRoaXMucmhleChiKSArIHRoaXMucmhleChjKSArIHRoaXMucmhleChkKTtcbiAgICB9XG4gICAgLCBpaTogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdFhPUihjLCB0aGlzLmJpdE9SKGIsIH5kKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGhoOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0WE9SKHRoaXMuYml0WE9SKGIsIGMpLCBkKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZ2c6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBkKSwgdGhpcy5iaXRBTkQoYywgfmQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZmY6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBjKSwgdGhpcy5iaXRBTkQofmIsIGQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgY21uOiBmdW5jdGlvbiAocSwgYSwgYiwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkbWUodGhpcy5yb2wodGhpcy5hZGRtZSh0aGlzLmFkZG1lKGEsIHEpLCB0aGlzLmFkZG1lKHgsIHQpKSwgcyksIGIpO1xuICAgIH1cbiAgICAsIHJvbDogZnVuY3Rpb24gKG51bSwgY250KSB7XG4gICAgICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG4gICAgfVxuICAgICwgc3RyMmJsa3M6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciBuYmxrID0gKHN0ci5sZW5ndGggKyA4ID4+IDYpICsgMTtcbiAgICAgIHZhciBibGtzID0gbmV3IEFycmF5KCk7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBuYmxrICogMTY7XG4gICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgYmxrc1tpXSA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgYmxrc1tpID4+IDJdIHw9IEh4T3ZlcnJpZGVzLmNjYShzdHIsIGkpIDw8IChzdHIubGVuZ3RoICogOCArIGkpICUgNCAqIDg7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGJsa3NbaSA+PiAyXSB8PSAxMjggPDwgKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0ICogODtcbiAgICAgIHZhciBsID0gc3RyLmxlbmd0aCAqIDg7XG4gICAgICB2YXIgayA9IG5ibGsgKiAxNiAtIDI7XG4gICAgICBibGtzW2tdID0gbCAmIDI1NTtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDggJiAyNTUpIDw8IDg7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAxNiAmIDI1NSkgPDwgMTY7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAyNCAmIDI1NSkgPDwgMjQ7XG4gICAgICByZXR1cm4gYmxrcztcbiAgICB9XG4gICAgLCByaGV4OiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIHZhciBoZXhfY2hyID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICB2YXIgX2cgPSAwO1xuICAgICAgd2hpbGUgKF9nIDwgNCkge1xuICAgICAgICB2YXIgaiA9IF9nKys7XG4gICAgICAgIHN0ciArPSBoZXhfY2hyLmNoYXJBdChudW0gPj4gaiAqIDggKyA0ICYgMTUpICsgaGV4X2Noci5jaGFyQXQobnVtID4+IGogKiA4ICYgMTUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLCBhZGRtZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBsc3cgPSAoeCAmIDY1NTM1KSArICh5ICYgNjU1MzUpO1xuICAgICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgICAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDY1NTM1O1xuICAgIH1cbiAgICAsIGJpdEFORDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSAmIChiICYgMSk7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxICYgYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIGJpdFhPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSBeIGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSBeIGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBiaXRPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSB8IGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSB8IGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGhheGUuTWQ1XG4gIH1cbiAgaGF4ZS5UaW1lciA9IGZ1bmN0aW9uICh0aW1lX21zKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB0aGlzLmlkID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lLnJ1bigpO1xuICAgIH0sIHRpbWVfbXMpO1xuICB9O1xuICBoYXhlLlRpbWVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5UaW1lci5kZWxheSA9IGZ1bmN0aW9uIChmLCB0aW1lX21zKSB7XG4gICAgdmFyIHQgPSBuZXcgaGF4ZS5UaW1lcih0aW1lX21zKTtcbiAgICB0LnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc3RvcCgpO1xuICAgICAgZigpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgaGF4ZS5UaW1lci5tZWFzdXJlID0gZnVuY3Rpb24gKGYsIHBvcykge1xuICAgIHZhciB0MCA9IGhheGUuVGltZXIuc3RhbXAoKTtcbiAgICB2YXIgciA9IGYoKTtcbiAgICBoYXhlLkxvZy50cmFjZShoYXhlLlRpbWVyLnN0YW1wKCkgLSB0MCArIFwic1wiLCBwb3MpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGhheGUuVGltZXIuc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgfVxuICBoYXhlLlRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gICAgLCBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5pZCA9PSBudWxsKSByZXR1cm47XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogaGF4ZS5UaW1lclxuICB9XG4gIHZhciBqcyA9IGpzIHx8IHt9XG4gIGpzLkJvb3QgPSBmdW5jdGlvbiAoKSB7IH1cbiAganMuQm9vdC5fX25hbWVfXyA9IHRydWU7XG4gIGpzLkJvb3QuX191bmh0bWwgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnNwbGl0KFwiJlwiKS5qb2luKFwiJmFtcDtcIikuc3BsaXQoXCI8XCIpLmpvaW4oXCImbHQ7XCIpLnNwbGl0KFwiPlwiKS5qb2luKFwiJmd0O1wiKTtcbiAgfVxuICBqcy5Cb290Ll9fdHJhY2UgPSBmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBtc2cgPSBpICE9IG51bGwgPyBpLmZpbGVOYW1lICsgXCI6XCIgKyBpLmxpbmVOdW1iZXIgKyBcIjogXCIgOiBcIlwiO1xuICAgIG1zZyArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKTtcbiAgICB2YXIgZDtcbiAgICBpZiAodHlwZW9mIChkb2N1bWVudCkgIT0gXCJ1bmRlZmluZWRcIiAmJiAoZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGF4ZTp0cmFjZVwiKSkgIT0gbnVsbCkgZC5pbm5lckhUTUwgKz0ganMuQm9vdC5fX3VuaHRtbChtc2cpICsgXCI8YnIvPlwiOyBlbHNlIGlmICh0eXBlb2YgKGNvbnNvbGUpICE9IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS5sb2cgIT0gbnVsbCkgY29uc29sZS5sb2cobXNnKTtcbiAgfVxuICBqcy5Cb290Ll9fY2xlYXJfdHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhheGU6dHJhY2VcIik7XG4gICAgaWYgKGQgIT0gbnVsbCkgZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG4gIGpzLkJvb3QuaXNDbGFzcyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8uX19uYW1lX187XG4gIH1cbiAganMuQm9vdC5pc0VudW0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLl9fZW5hbWVfXztcbiAgfVxuICBqcy5Cb290LmdldENsYXNzID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby5fX2NsYXNzX187XG4gIH1cbiAganMuQm9vdC5fX3N0cmluZ19yZWMgPSBmdW5jdGlvbiAobywgcykge1xuICAgIGlmIChvID09IG51bGwpIHJldHVybiBcIm51bGxcIjtcbiAgICBpZiAocy5sZW5ndGggPj0gNSkgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICB2YXIgdCA9IHR5cGVvZiAobyk7XG4gICAgaWYgKHQgPT0gXCJmdW5jdGlvblwiICYmIChvLl9fbmFtZV9fIHx8IG8uX19lbmFtZV9fKSkgdCA9IFwib2JqZWN0XCI7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIGlmIChvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBpZiAoby5fX2VudW1fXykge1xuICAgICAgICAgICAgaWYgKG8ubGVuZ3RoID09IDIpIHJldHVybiBvWzBdO1xuICAgICAgICAgICAgdmFyIHN0ciA9IG9bMF0gKyBcIihcIjtcbiAgICAgICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgICAgIHZhciBfZzEgPSAyLCBfZyA9IG8ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgICAgICAgIGlmIChpICE9IDIpIHN0ciArPSBcIixcIiArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baV0sIHMpOyBlbHNlIHN0ciArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2ldLCBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICB2YXIgc3RyID0gXCJbXCI7XG4gICAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICAgIHZhciBfZyA9IDA7XG4gICAgICAgICAgd2hpbGUgKF9nIDwgbCkge1xuICAgICAgICAgICAgdmFyIGkxID0gX2crKztcbiAgICAgICAgICAgIHN0ciArPSAoaTEgPiAwID8gXCIsXCIgOiBcIlwiKSArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baTFdLCBzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IFwiXVwiO1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvc3RyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRvc3RyID0gby50b1N0cmluZztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBcIj8/P1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3N0ciAhPSBudWxsICYmIHRvc3RyICE9IE9iamVjdC50b1N0cmluZykge1xuICAgICAgICAgIHZhciBzMiA9IG8udG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAoczIgIT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIHMyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IFwie1xcblwiO1xuICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgIHZhciBoYXNwID0gby5oYXNPd25Qcm9wZXJ0eSAhPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgaWYgKGhhc3AgJiYgIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoayA9PSBcInByb3RvdHlwZVwiIHx8IGsgPT0gXCJfX2NsYXNzX19cIiB8fCBrID09IFwiX19zdXBlcl9fXCIgfHwgayA9PSBcIl9faW50ZXJmYWNlc19fXCIgfHwgayA9PSBcIl9fcHJvcGVydGllc19fXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCAhPSAyKSBzdHIgKz0gXCIsIFxcblwiO1xuICAgICAgICAgIHN0ciArPSBzICsgayArIFwiIDogXCIgKyBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2tdLCBzKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHN0ciArPSBcIlxcblwiICsgcyArIFwifVwiO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgIHJldHVybiBcIjxmdW5jdGlvbj5cIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gU3RyaW5nKG8pO1xuICAgIH1cbiAgfVxuICBqcy5Cb290Ll9faW50ZXJmTG9vcCA9IGZ1bmN0aW9uIChjYywgY2wpIHtcbiAgICBpZiAoY2MgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjYyA9PSBjbCkgcmV0dXJuIHRydWU7XG4gICAgdmFyIGludGYgPSBjYy5fX2ludGVyZmFjZXNfXztcbiAgICBpZiAoaW50ZiAhPSBudWxsKSB7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBpbnRmLmxlbmd0aDtcbiAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICB2YXIgaTEgPSBpbnRmW2ldO1xuICAgICAgICBpZiAoaTEgPT0gY2wgfHwganMuQm9vdC5fX2ludGVyZkxvb3AoaTEsIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqcy5Cb290Ll9faW50ZXJmTG9vcChjYy5fX3N1cGVyX18sIGNsKTtcbiAgfVxuICBqcy5Cb290Ll9faW5zdGFuY2VvZiA9IGZ1bmN0aW9uIChvLCBjbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAobyBpbnN0YW5jZW9mIGNsKSB7XG4gICAgICAgIGlmIChjbCA9PSBBcnJheSkgcmV0dXJuIG8uX19lbnVtX18gPT0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoanMuQm9vdC5fX2ludGVyZkxvb3Aoby5fX2NsYXNzX18sIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGNsID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoIChjbCkge1xuICAgICAgY2FzZSBJbnQ6XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobyAlIDIxNDc0ODM2NDguMCkgPT09IG87XG4gICAgICBjYXNlIEZsb2F0OlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcIm51bWJlclwiO1xuICAgICAgY2FzZSBCb29sOlxuICAgICAgICByZXR1cm4gbyA9PT0gdHJ1ZSB8fCBvID09PSBmYWxzZTtcbiAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcInN0cmluZ1wiO1xuICAgICAgY2FzZSBEeW5hbWljOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChvID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNsID09IENsYXNzICYmIG8uX19uYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgaWYgKGNsID09IEVudW0gJiYgby5fX2VuYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgcmV0dXJuIG8uX19lbnVtX18gPT0gY2w7XG4gICAgfVxuICB9XG4gIGpzLkJvb3QuX19jYXN0ID0gZnVuY3Rpb24gKG8sIHQpIHtcbiAgICBpZiAoanMuQm9vdC5fX2luc3RhbmNlb2YobywgdCkpIHJldHVybiBvOyBlbHNlIHRocm93IFwiQ2Fubm90IGNhc3QgXCIgKyBTdGQuc3RyaW5nKG8pICsgXCIgdG8gXCIgKyBTdGQuc3RyaW5nKHQpO1xuICB9XG4gIGpzLkxpYiA9IGZ1bmN0aW9uICgpIHsgfVxuICBqcy5MaWIuX19uYW1lX18gPSB0cnVlO1xuICBqcy5MaWIuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWdnZXI7XG4gIH1cbiAganMuTGliLmFsZXJ0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICBhbGVydChqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKSk7XG4gIH1cbiAganMuTGliLmV2YWwgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgIHJldHVybiBldmFsKGNvZGUpO1xuICB9XG4gIGpzLkxpYi5zZXRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZikge1xuICAgIGpzLkxpYi5vbmVycm9yID0gZjtcbiAgfVxuICB2YXIgJF87XG4gIGZ1bmN0aW9uICRiaW5kKG8sIG0pIHsgdmFyIGYgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmLm1ldGhvZC5hcHBseShmLnNjb3BlLCBhcmd1bWVudHMpOyB9OyBmLnNjb3BlID0gbzsgZi5tZXRob2QgPSBtOyByZXR1cm4gZjsgfTtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSBIeE92ZXJyaWRlcy5yZW1vdmUgPSBmdW5jdGlvbiAoYSwgbykge1xuICAgIHZhciBpID0gYS5pbmRleE9mKG8pO1xuICAgIGlmIChpID09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07IGVsc2UgbnVsbDtcbiAgTWF0aC5fX25hbWVfXyA9IFtcIk1hdGhcIl07XG4gIE1hdGguTmFOID0gTnVtYmVyLk5hTjtcbiAgTWF0aC5ORUdBVElWRV9JTkZJTklUWSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgTWF0aC5QT1NJVElWRV9JTkZJTklUWSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgTWF0aC5pc0Zpbml0ZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKGkpO1xuICB9O1xuICBNYXRoLmlzTmFOID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaXNOYU4oaSk7XG4gIH07XG4gIFN0cmluZy5wcm90b3R5cGUuX19jbGFzc19fID0gU3RyaW5nO1xuICBTdHJpbmcuX19uYW1lX18gPSB0cnVlO1xuICBBcnJheS5wcm90b3R5cGUuX19jbGFzc19fID0gQXJyYXk7XG4gIEFycmF5Ll9fbmFtZV9fID0gdHJ1ZTtcbiAgRGF0ZS5wcm90b3R5cGUuX19jbGFzc19fID0gRGF0ZTtcbiAgRGF0ZS5fX25hbWVfXyA9IFtcIkRhdGVcIl07XG4gIHZhciBJbnQgPSB7IF9fbmFtZV9fOiBbXCJJbnRcIl0gfTtcbiAgdmFyIER5bmFtaWMgPSB7IF9fbmFtZV9fOiBbXCJEeW5hbWljXCJdIH07XG4gIHZhciBGbG9hdCA9IE51bWJlcjtcbiAgRmxvYXQuX19uYW1lX18gPSBbXCJGbG9hdFwiXTtcbiAgdmFyIEJvb2wgPSBCb29sZWFuO1xuICBCb29sLl9fZW5hbWVfXyA9IFtcIkJvb2xcIl07XG4gIHZhciBDbGFzcyA9IHsgX19uYW1lX186IFtcIkNsYXNzXCJdIH07XG4gIHZhciBFbnVtID0ge307XG4gIHZhciBWb2lkID0geyBfX2VuYW1lX186IFtcIlZvaWRcIl0gfTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiKSBqcy5MaWIuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGpzLkxpYi53aW5kb3cgPSB3aW5kb3c7XG4gICAganMuTGliLndpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKG1zZywgdXJsLCBsaW5lKSB7XG4gICAgICB2YXIgZiA9IGpzLkxpYi5vbmVycm9yO1xuICAgICAgaWYgKGYgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGYobXNnLCBbdXJsICsgXCI6XCIgKyBsaW5lXSk7XG4gICAgfTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5tYWluKCk7XG59KCkpO1xuZGVsZXRlIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX187XG4vLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IExhdGV4IGZyb20gJy4vbGF0ZXgnO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQWNjZXNzaWJpbGl0eSBmcm9tICcuL2FjY2Vzc2liaWxpdHknO1xuaW1wb3J0IFNlcnZpY2VQcm92aWRlciBmcm9tICcuL3NlcnZpY2Vwcm92aWRlcic7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50IGEgTWFoTUwgcGFyc2VyLiBDb252ZXJ0cyBNYXRoTUwgaW50byBmb3JtdWxhcyBkZXBlbmRpbmcgb24gdGhlXG4gKiBpbWFnZSBmb3JtYXQgKFNWRywgUE5HLCBiYXNlNjQpIGFuZCB0aGUgc2F2ZSBtb2RlIChYTUwsIHNhZmVYTUwsIEltYWdlKSBjb25maWd1cmVkXG4gKiBpbiB0aGUgYmFja2VuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTWF0aE1MIHN0cmluZyB0byBhbiBpbWcgZWxlbWVudC5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gY3JlYXRvciAtIERvY3VtZW50IG9iamVjdCB0byBjYWxsIGNyZWF0ZUVsZW1lbnQgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gTWF0aE1MIGNvZGVcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gd2lyaXNQcm9wZXJ0aWVzIC0gb2JqZWN0IGNvbnRhaW5pbmcgV0lSSVMgY3VzdG9tIHByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtsYW5ndWFnZX0gbGFuZ3VhZ2UgLSBjdXN0b20gbGFuZ3VhZ2UgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqIEByZXR1cm5zIHtIVE1MSW1hZ2VFbGVtZW50fSB0aGUgZm9ybXVsYSBpbWFnZSBjb3JyZXNwb25kaW5nIHRvIGluaXRpYWwgTWF0aE1MIHN0cmluZy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIG1hdGhtbFRvSW1nT2JqZWN0KGNyZWF0b3IsIG1hdGhtbCwgd2lyaXNQcm9wZXJ0aWVzLCBsYW5ndWFnZSkge1xuICAgIGNvbnN0IGltZ09iamVjdCA9IGNyZWF0b3IuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nT2JqZWN0LmFsaWduID0gJ21pZGRsZSc7XG4gICAgaW1nT2JqZWN0LnN0eWxlLm1heFdpZHRoID0gJ25vbmUnO1xuICAgIGxldCBkYXRhID0gd2lyaXNQcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdGhlIGJhY2tlbmQgY29uZmlnXG4gICAgY29uc3Qgd2lyaXNFZGl0b3JQcm9wZXJ0aWVzID0gQ29uZmlndXJhdGlvbi5nZXQoXCJlZGl0b3JQYXJhbWV0ZXJzXCIpO1xuICAgIGRhdGEgPSB7IC4uLndpcmlzRWRpdG9yUHJvcGVydGllcywgLi4uZGF0YSB9O1xuXG4gICAgZGF0YS5tbWwgPSBtYXRobWw7XG4gICAgZGF0YS5sYW5nID0gbGFuZ3VhZ2U7XG4gICAgLy8gUmVxdWVzdCBtZXRyaWNzIG9mIHRoZSBnZW5lcmF0ZWQgaW1hZ2UuXG4gICAgZGF0YS5tZXRyaWNzID0gJ3RydWUnO1xuICAgIGRhdGEuY2VudGVyYmFzZWxpbmUgPSAnZmFsc2UnO1xuXG4gICAgLy8gRnVsbCBiYXNlNjQgbWV0aG9kIChlZGl0ICYgc2F2ZSkuXG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBkYXRhLmJhc2U2NCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGpzIHBhcmFtczogX3dyc19pbnRfd2lyaXNQcm9wZXJ0aWVzIGNvbnRhaW5zIHNvbWUganMgcmVuZGVyIHBhcmFtcy5cbiAgICAvLyBTaW5jZSBNYXRoTUwgY2FuIHN1cHBvcnQgcmVuZGVyIHBhcmFtcywganMgcGFyYW1zIHNob3VsZCBiZSBzZW5kIG9ubHkgdG8gZWRpdG9yLlxuXG4gICAgaW1nT2JqZWN0LmNsYXNzTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpO1xuXG4gICAgaWYgKG1hdGhtbC5pbmRleE9mKCdjbGFzcz1cIicpICE9PSAtMSkge1xuICAgICAgLy8gV2UgY2hlY2sgaGVyZSBpZiB0aGUgTWF0aE1MIGhhcyBiZWVuIGNyZWF0ZWQgZnJvbSBhIGN1c3RvbUVkaXRvciAoc3VjaCBjaGVtaXN0cnkpXG4gICAgICAvLyB0byBhZGQgY3VzdG9tIGVkaXRvciBuYW1lIGF0dHJpYnV0ZSB0byBpbWcgb2JqZWN0IChpZiBuZWNlc3NhcnkpLlxuICAgICAgbGV0IG1hdGhtbFN1YnN0cmluZyA9IG1hdGhtbC5zdWJzdHJpbmcobWF0aG1sLmluZGV4T2YoJ2NsYXNzPVwiJykgKyAnY2xhc3M9XCInLmxlbmd0aCwgbWF0aG1sLmxlbmd0aCk7XG4gICAgICBtYXRobWxTdWJzdHJpbmcgPSBtYXRobWxTdWJzdHJpbmcuc3Vic3RyaW5nKDAsIG1hdGhtbFN1YnN0cmluZy5pbmRleE9mKCdcIicpKTtcbiAgICAgIG1hdGhtbFN1YnN0cmluZyA9IG1hdGhtbFN1YnN0cmluZy5zdWJzdHJpbmcoNCwgbWF0aG1sU3Vic3RyaW5nLmxlbmd0aCk7XG4gICAgICBpbWdPYmplY3Quc2V0QXR0cmlidXRlKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUN1c3RvbUVkaXRvck5hbWUnKSwgbWF0aG1sU3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtYW5jZSBlbmFibGVkLlxuICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnd2lyaXNQbHVnaW5QZXJmb3JtYW5jZScpICYmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcgfHwgQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdzYWZlWG1sJykpIHtcbiAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKFBhcnNlci5jcmVhdGVTaG93SW1hZ2VTcmMoZGF0YSwgbGFuZ3VhZ2UpKTtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnd2FybmluZycpIHtcbiAgICAgICAgLy8gUE9TVCBjYWxsLlxuICAgICAgICAvLyBpZiB0aGUgbWF0aG1sIGlzIG1hbGZvcm1lZCwgdGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzaG93aW1hZ2UnLCBkYXRhKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKHsgcmVzdWx0IH0gPSByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5mb3JtYXQgPT09ICdwbmcnKSB7XG4gICAgICAgIGltZ09iamVjdC5zcmMgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7cmVzdWx0LmNvbnRlbnR9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltZ09iamVjdC5zcmMgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwke1V0aWwudXJsRW5jb2RlKHJlc3VsdC5jb250ZW50KX1gO1xuICAgICAgfVxuICAgICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSwgTWF0aE1MLnNhZmVYbWxFbmNvZGUobWF0aG1sKSk7XG4gICAgICBJbWFnZS5zZXRJbWdTaXplKGltZ09iamVjdCwgcmVzdWx0LmNvbnRlbnQsIHRydWUpO1xuXG4gICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ2VuYWJsZUFjY2Vzc2liaWxpdHknKSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5hbHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaW1nT2JqZWN0LmFsdCA9IEFjY2Vzc2liaWxpdHkubWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhtbCwgbGFuZ3VhZ2UsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltZ09iamVjdC5hbHQgPSByZXN1bHQuYWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhcnNlci5jcmVhdGVJbWFnZVNyYyhtYXRobWwsIGRhdGEpO1xuICAgICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSwgTWF0aE1MLnNhZmVYbWxFbmNvZGUobWF0aG1sKSk7XG4gICAgICBpbWdPYmplY3Quc3JjID0gcmVzdWx0O1xuICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWdPYmplY3QsIHJlc3VsdCwgQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdiYXNlNjQnICYmIENvbmZpZ3VyYXRpb24uZ2V0KCdiYXNlNjRzYXZlbW9kZScpID09PSAnZGVmYXVsdCcpO1xuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdlbmFibGVBY2Nlc3NpYmlsaXR5JykpIHtcbiAgICAgICAgaW1nT2JqZWN0LmFsdCA9IEFjY2Vzc2liaWxpdHkubWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhtbCwgbGFuZ3VhZ2UsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgUGFyc2VyLm9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgUGFyc2VyLm9ic2VydmVyLm9ic2VydmUoaW1nT2JqZWN0KTtcbiAgICB9XG5cbiAgICAvLyBSb2xlIG1hdGggaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhL3JvbGVzI21hdGguXG4gICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdtYXRoJyk7XG4gICAgcmV0dXJuIGltZ09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzb3VyY2UgdG8gc2hvd2ltYWdlIHNlcnZpY2UgYnkgY2FsbGluZyBjcmVhdGVpbWFnZSBzZXJ2aWNlLiBUaGVcbiAgICogb3V0cHV0IG9mIHRoZSBjcmVhdGVpbWFnZSBzZXJ2aWNlIGlzIGEgVVJMIHBhdGggcG9pbnRpbmcgdG8gc2hvd2ltYWdlIHNlcnZpY2UuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHBlcmZvcm1hbmNlIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gTWF0aE1MIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGEgLSBkYXRhIG9iamVjdCBjb250YWluaW5nIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHNob3dpbWFnZSBwYXRoLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUltYWdlU3JjKG1hdGhtbCwgZGF0YSkge1xuICAgIC8vIEZ1bGwgYmFzZTY0IG1ldGhvZCAoZWRpdCAmIHNhdmUpLlxuICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ2Jhc2U2NCcgJiYgQ29uZmlndXJhdGlvbi5nZXQoJ2Jhc2U2NHNhdmVtb2RlJykgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZGF0YS5iYXNlNjQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnY3JlYXRlaW1hZ2UnLCBkYXRhKTtcblxuICAgIGlmIChyZXN1bHQuaW5kZXhPZignQEJBU0VAJykgIT09IC0xKSB7XG4gICAgICAvLyBSZXBsYWNpbmcgJ0BCQVNFQCcgd2l0aCB0aGUgYmFzZSBVUkwgb2YgY3JlYXRlaW1hZ2UuXG4gICAgICBjb25zdCBiYXNlUGFydHMgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZVBhdGgoJ2NyZWF0ZWltYWdlJykuc3BsaXQoJy8nKTtcbiAgICAgIGJhc2VQYXJ0cy5wb3AoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdCgnQEJBU0VAJykuam9pbihiYXNlUGFydHMuam9pbignLycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbml0aWFsIEhUTUwgY29kZS4gSWYgdGhlIEhUTUwgY29udGFpbnMgZGF0YSBnZW5lcmF0ZWQgYnkgV0lSSVMsXG4gICAqIHRoaXMgZGF0YSB3b3VsZCBiZSBjb252ZXJ0ZWQgYXMgZm9sbG93aW5nOlxuICAgKiA8cHJlPlxuICAgKiBNYXRoTUwgY29kZTogSW1hZ2UgY29udGFpbmluZyB0aGUgY29ycmVzcG9uZGluZyBNYXRoTUwgZm9ybXVsYXMuXG4gICAqIE1hdGhNTCBjb2RlIHdpdGggTGFUZVggYW5ub3RhdGlvbiA6IExhVGVYIHN0cmluZy5cbiAgICogPC9wcmU+XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIGNvbnRhaW5pbmcgTWF0aE1MIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSAtIGxhbmd1YWdlIHRvIGNyZWF0ZSBpbWFnZSBhbHQgdGV4dC5cbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHdpdGggdGhlIG9yaWdpbmFsIE1hdGhNTCBjb252ZXJ0ZWQgaW50byBMYVRlWCBhbmQgaW1hZ2VzLlxuICAgKi9cbiAgc3RhdGljIGluaXRQYXJzZShjb2RlLCBsYW5ndWFnZSkge1xuICAgIC8qIE5vdGU6IFRoZSBjb2RlIGluc2lkZSB0aGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGludmVydGVkLlxuICAgIElmIHlvdSBpbnZlcnQgYWdhaW4gdGhlIGNvZGUgdGhlbiB5b3UgY2Fubm90IHVzZSBjb3JyZWN0bHkgTGFUZVhcbiAgICBpbiBNb29kbGUuXG4gICAgKi9cbiAgICBjb2RlID0gUGFyc2VyLmluaXRQYXJzZVNhdmVNb2RlKGNvZGUsIGxhbmd1YWdlKTtcbiAgICByZXR1cm4gUGFyc2VyLmluaXRQYXJzZUVkaXRNb2RlKGNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbml0aWFsIEhUTUwgY29kZSBkZXBlbmRpbmcgb24gdGhlIHNhdmUgbW9kZS4gVHJhbnNmb3JtcyBhbGwgTWF0aE1MXG4gICAqIG9jY3VycmVuY2VzIGZvciBpdCdzIGNvcnJlc3BvbmRlbnQgaW1hZ2Ugb3IgTGFUZVguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIHRvIGJlIHBhcnNlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBsYW5ndWFnZSB0byBjcmVhdGUgaW1hZ2UgYWx0IHRleHQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgY29kZSBwYXJzZWQuXG4gICAqL1xuICBzdGF0aWMgaW5pdFBhcnNlU2F2ZU1vZGUoY29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykpIHtcbiAgICAgIC8vIENvbnZlcnRpbmcgWE1MIHRvIHRhZ3MuXG4gICAgICBjb2RlID0gTGF0ZXgucGFyc2VNYXRobWxUb0xhdGV4KGNvZGUsIENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgICBjb2RlID0gTGF0ZXgucGFyc2VNYXRobWxUb0xhdGV4KGNvZGUsIENvbnN0YW50cy54bWxDaGFyYWN0ZXJzKTtcbiAgICAgIGNvZGUgPSBQYXJzZXIucGFyc2VNYXRobWxUb0ltZyhjb2RlLCBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMsIGxhbmd1YWdlKTtcbiAgICAgIGNvZGUgPSBQYXJzZXIucGFyc2VNYXRobWxUb0ltZyhjb2RlLCBDb25zdGFudHMueG1sQ2hhcmFjdGVycywgbGFuZ3VhZ2UpO1xuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb2RlID0gUGFyc2VyLmNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgJ2Jhc2U2NDJzaG93aW1hZ2UnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGluaXRpYWwgSFRNTCBjb2RlIGRlcGVuZGluZyBvbiB0aGUgZWRpdCBtb2RlLlxuICAgKiBJZiAnbGF0ZXgnIHBhcnNlTW9kZSBpcyBlbmFibGVkIGFsbCBNYXRoTUwgY29udGFpbmluZyBhbiBhbm5vdGF0aW9uIHdpdGggZW5jb2Rpbmc9J0xhVGVYJyB3aWxsXG4gICAqIGJlIGNvbnZlcnRlZCBpbnRvIGEgTGFUZVggc3RyaW5nIGluc3RlYWQgb2YgYW4gaW1hZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIGNvbnRhaW5pbmcgTWF0aE1MLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwYXJzZWQgSFRNTCBjb2RlLlxuICAgKi9cbiAgc3RhdGljIGluaXRQYXJzZUVkaXRNb2RlKGNvZGUpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3BhcnNlTW9kZXMnKS5pbmRleE9mKCdsYXRleCcpICE9PSAtMSkge1xuICAgICAgY29uc3QgaW1nTGlzdCA9IFV0aWwuZ2V0RWxlbWVudHNCeU5hbWVGcm9tU3RyaW5nKGNvZGUsICdpbWcnLCB0cnVlKTtcbiAgICAgIGNvbnN0IHRva2VuID0gJ2VuY29kaW5nPVwiTGFUZVhcIj4nO1xuICAgICAgLy8gV2hpbGUgcmVwbGFjaW5nIGltYWdlcyB3aXRoIGxhdGV4LCB0aGUgaW5kZXhlcyBvZiB0aGUgZm91bmQgaW1hZ2VzIGNoYW5nZXNcbiAgICAgIC8vIHJlc3BlY3RpbmcgdGhlIG9yaWdpbmFsIGNvZGUsIHNvIHRoaXMgY2FycnkgaXMgbmVlZGVkLlxuICAgICAgbGV0IGNhcnJ5ID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGltZ0NvZGUgPSBjb2RlLnN1YnN0cmluZyhpbWdMaXN0W2ldLnN0YXJ0ICsgY2FycnksIGltZ0xpc3RbaV0uZW5kICsgY2FycnkpO1xuXG4gICAgICAgIGlmIChpbWdDb2RlLmluZGV4T2YoYCBjbGFzcz1cIiR7Q29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlQ2xhc3NOYW1lJyl9XCJgKSAhPT0gLTEpIHtcbiAgICAgICAgICBsZXQgbWF0aG1sU3RhcnRUb2tlbiA9IGAgJHtDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKX09XCJgO1xuICAgICAgICAgIGxldCBtYXRobWxTdGFydCA9IGltZ0NvZGUuaW5kZXhPZihtYXRobWxTdGFydFRva2VuKTtcblxuICAgICAgICAgIGlmIChtYXRobWxTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hdGhtbFN0YXJ0VG9rZW4gPSAnIGFsdD1cIic7XG4gICAgICAgICAgICBtYXRobWxTdGFydCA9IGltZ0NvZGUuaW5kZXhPZihtYXRobWxTdGFydFRva2VuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0aG1sU3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgICBtYXRobWxTdGFydCArPSBtYXRobWxTdGFydFRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IG1hdGhtbEVuZCA9IGltZ0NvZGUuaW5kZXhPZignXCInLCBtYXRobWxTdGFydCk7XG4gICAgICAgICAgICBjb25zdCBtYXRobWwgPSBVdGlsLmh0bWxTYW5pdGl6ZShNYXRoTUwuc2FmZVhtbERlY29kZShpbWdDb2RlLnN1YnN0cmluZyhtYXRobWxTdGFydCwgbWF0aG1sRW5kKSkpO1xuICAgICAgICAgICAgbGV0IGxhdGV4U3RhcnRQb3NpdGlvbiA9IG1hdGhtbC5pbmRleE9mKHRva2VuKTtcblxuICAgICAgICAgICAgaWYgKGxhdGV4U3RhcnRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgbGF0ZXhTdGFydFBvc2l0aW9uICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgY29uc3QgbGF0ZXhFbmRQb3NpdGlvbiA9IG1hdGhtbC5pbmRleE9mKCc8L2Fubm90YXRpb24+JywgbGF0ZXhTdGFydFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgY29uc3QgbGF0ZXggPSBtYXRobWwuc3Vic3RyaW5nKGxhdGV4U3RhcnRQb3NpdGlvbiwgbGF0ZXhFbmRQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZVRleHQgPSBgJCQke1V0aWwuaHRtbEVudGl0aWVzRGVjb2RlKGxhdGV4KX0kJGA7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29kZS5zdWJzdHJpbmcoMCwgaW1nTGlzdFtpXS5zdGFydCArIGNhcnJ5KTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kID0gY29kZS5zdWJzdHJpbmcoaW1nTGlzdFtpXS5lbmQgKyBjYXJyeSk7XG4gICAgICAgICAgICAgIGNvZGUgPSBzdGFydCArIHJlcGxhY2VUZXh0ICsgZW5kO1xuICAgICAgICAgICAgICBjYXJyeSArPSByZXBsYWNlVGV4dC5sZW5ndGggLSAoaW1nTGlzdFtpXS5lbmQgLSBpbWdMaXN0W2ldLnN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgZW5kIEhUTUwgY29kZS4gVGhlIGVuZCBIVE1MIGNvZGUgaXMgSFRNTCBjb2RlIHdpdGggZW1iZWRkZWQgaW1hZ2VzXG4gICAqIG9yIExhVGVYIGZvcm11bGFzIGNyZWF0ZWQgd2l0aCBNYXRoVHlwZS4gPGJyPlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgbWV0aG9kIGNvbnZlcnRzIHRoZSBmb3JtdWxhIGltYWdlcyBhbmQgTGFUZVggc3RyaW5ncyBpbiBNYXRoTUwuIDxicj5cbiAgICogSWYgaW1hZ2UgbW9kZSBpcyBlbmFibGVkIHRoZSBpbWFnZXMgd2lsbCBub3QgYmUgY29udmVydGVkIGludG8gTWF0aE1MLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy53aXJpcy5jb20vbWF0aHR5cGUvZW4vbWF0aHR5cGUtaW50ZWdyYXRpb25zL21hdGh0eXBlLXdlYi1pbnRlcmZhY2UtZmVhdHVyZXMvZnVsbC1tYXRobWwtbW9kZS0tLXdpcmlzcGx1Z2lucy1qcy5odG1sfS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSBIVE1MIHRvIGJlIHBhcnNlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZShjb2RlKSB7XG4gICAgLy8gVHJhbnNmb3JtIExhVGVYIG9jdXJyZW5jZXMgdG8gTWF0aE1MIGVsZW1lbnRzLlxuICAgIGNvbnN0IGNvZGVFbmRQYXJzZWRFZGl0TW9kZSA9IFBhcnNlci5lbmRQYXJzZUVkaXRNb2RlKGNvZGUpO1xuICAgIC8vIFRyYW5zZm9ybSBpbWcgZWxlbWVudHMgdG8gTWF0aE1MIGVsZW1lbnRzLlxuICAgIGNvbnN0IGNvZGVFbmRQYXJzZVNhdmVNb2RlID0gUGFyc2VyLmVuZFBhcnNlU2F2ZU1vZGUoY29kZUVuZFBhcnNlZEVkaXRNb2RlKTtcbiAgICByZXR1cm4gY29kZUVuZFBhcnNlU2F2ZU1vZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGVuZCBIVE1MIGNvZGUgZGVwZW5kaW5nIG9uIHRoZSBlZGl0IG1vZGUuXG4gICAqIC0gTGFUZVggaXMgYW4gZW5hYmxlZCBwYXJzZSBtb2RlLCBhbGwgTGFUZVggb2NjdXJyZW5jZXMgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBNYXRoTUwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIHRvIGJlIHBhcnNlZC5cbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZUVkaXRNb2RlKGNvZGUpIHtcbiAgICAvLyBDb252ZXJ0aW5nIExhVGVYIHRvIGltYWdlcy5cbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3BhcnNlTW9kZXMnKS5pbmRleE9mKCdsYXRleCcpICE9PSAtMSkge1xuICAgICAgbGV0IG91dHB1dCA9ICcnO1xuICAgICAgbGV0IGVuZFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gY29kZS5pbmRleE9mKCckJCcpO1xuICAgICAgd2hpbGUgKHN0YXJ0UG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbik7XG4gICAgICAgIGVuZFBvc2l0aW9uID0gY29kZS5pbmRleE9mKCckJCcsIHN0YXJ0UG9zaXRpb24gKyAyKTtcblxuICAgICAgICBpZiAoZW5kUG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgLy8gQmVmb3JlLCBpdCB3YXMgYSBjb25kaXRpb24gaGVyZSB0byBleGVjdXRlIHRoZSBuZXh0IGNvZGVsaW5lc1xuICAgICAgICAgIC8vICdsYXRleC5pbmRleE9mKCc8JykgPT0gLTEnLlxuICAgICAgICAgIC8vIFdlIGRvbid0IGtub3cgd2h5IGl0IHdhcyB1c2VkLCBidXQgc2VlbXMgdG8gaGF2ZSBhIGNvbmZsaWN0IHdpdGhcbiAgICAgICAgICAvLyBsYXRleCBmb3JtdWxhcyB0aGF0IGNvbnRhaW5zICc8Jy5cbiAgICAgICAgICBjb25zdCBsYXRleCA9IGNvZGUuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24gKyAyLCBlbmRQb3NpdGlvbik7XG4gICAgICAgICAgY29uc3QgZGVjb2RlZExhdGV4ID0gVXRpbC5odG1sRW50aXRpZXNEZWNvZGUobGF0ZXgpO1xuICAgICAgICAgIGxldCBtYXRobWwgPSBVdGlsLmh0bWxTYW5pdGl6ZShMYXRleC5nZXRNYXRoTUxGcm9tTGF0ZXgoZGVjb2RlZExhdGV4LCB0cnVlKSk7XG4gICAgICAgICAgaWYgKCFDb25maWd1cmF0aW9uLmdldCgnc2F2ZUhhbmRUcmFjZXMnKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGhhbmQgdHJhY2VzLlxuICAgICAgICAgICAgbWF0aG1sID0gTWF0aE1MLnJlbW92ZUFubm90YXRpb24obWF0aG1sLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXRwdXQgKz0gbWF0aG1sO1xuICAgICAgICAgIGVuZFBvc2l0aW9uICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0ICs9ICckJCc7XG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBjb2RlLmluZGV4T2YoJyQkJywgZW5kUG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgKz0gY29kZS5zdWJzdHJpbmcoZW5kUG9zaXRpb24sIGNvZGUubGVuZ3RoKTtcbiAgICAgIGNvZGUgPSBvdXRwdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGVuZCBIVE1MIGNvZGUgZGVwZW5kaW5nIG9uIHRoZSBzYXZlIG1vZGUuIENvbnZlcnRzIGFsbFxuICAgKiBpbWFnZXMgaW50byB0aGUgZWxlbWVudCBkZXRlcm1pbmVkIGJ5IHRoZSBzYXZlIG1vZGU6XG4gICAqIC0geG1sOiBQYXJzZXMgaW1hZ2VzIGZvcm11bGFzIGludG8gTWF0aE1MLlxuICAgKiAtIHNhZmVYbWw6IFBhcnNlcyBpbWFnZXMgZm9ybXVsYXMgaW50byBzYWZlTUF0aE1MXG4gICAqIC0gYmFzZTY0OiBQYXJzZXMgaW1hZ2VzIGludG8gYmFzZTY0IGltYWdlcy5cbiAgICogLSBpbWFnZTogUGFyc2UgaW1hZ2VzIGludG8gaW1hZ2VzIChubyBwYXJzaW5nKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSB0byBiZSBwYXJzZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZVNhdmVNb2RlKGNvZGUpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykpIHtcbiAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3NhZmVYbWwnKSB7XG4gICAgICAgIGNvZGUgPSBQYXJzZXIuY29kZUltZ1RyYW5zZm9ybShjb2RlLCAnaW1nMm1hdGhtbCcpO1xuICAgICAgfSBlbHNlIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcpIHtcbiAgICAgICAgY29kZSA9IFBhcnNlci5jb2RlSW1nVHJhbnNmb3JtKGNvZGUsICdpbWcybWF0aG1sJyk7XG4gICAgICB9IGVsc2UgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb2RlID0gUGFyc2VyLmNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgJ2ltZzI2NCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cblxuICAvKipcbiAgICogQXV4aWxpYXIgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIGRhdGEgb2JqZWN0IHRvIHNlbmQgdG8gdGhlIHNob3dpbWFnZSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhIC0gb2JqZWN0IGNvbnRhaW5pbmcgc2hvd2ltYWdlIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIC0gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxhbmd1YWdlIG9mIHRoZSBmb3JtdWxhLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBKU09OIG9iamVjdCB3aXRoIHRoZSBkYXRhIHRvIHNlbmQgdG8gc2hvd2ltYWdlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVNob3dJbWFnZVNyY0RhdGEoZGF0YSwgbGFuZ3VhZ2UpIHtcbiAgICBjb25zdCBkYXRhTWQ1ID0ge307XG4gICAgY29uc3QgcmVuZGVyUGFyYW1zID0gWydtbWwnLCAnY29sb3InLCAnY2VudGVyYmFzZWxpbmUnLCAnem9vbScsICdkcGknLCAnZm9udFNpemUnLCAnZm9udEZhbWlseScsICdkZWZhdWx0U3RyZXRjaHknLCAnYmFja2dyb3VuZENvbG9yJywgJ2Zvcm1hdCddO1xuICAgIHJlbmRlclBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGF0YU1kNVtwYXJhbV0gPSBkYXRhW3BhcmFtXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBEYXRhIHZhcmlhYmxlcyB0byBnZXQuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCBtYXRobWwgaW4gdGhpcyByZXF1ZXN0IHdlIHRyeSB0byBnZXQgY2FjaGVkLlxuICAgICAgLy8gT25seSBuZWVkIHRoZSBmb3JtdWxhIG1kNSBjYWxjdWxhdGVkIGJlZm9yZS5cbiAgICAgIGlmIChrZXkgIT09ICdtbWwnKSB7XG4gICAgICAgIGRhdGFPYmplY3Rba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRhdGFPYmplY3QuZm9ybXVsYSA9IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1kNWVuY29kZShVdGlsLnByb3BlcnRpZXNUb1N0cmluZyhkYXRhTWQ1KSk7XG4gICAgZGF0YU9iamVjdC5sYW5nID0gKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3VuZGVmaW5lZCcpID8gJ2VuJyA6IGxhbmd1YWdlO1xuICAgIGRhdGFPYmplY3QudmVyc2lvbiA9IENvbmZpZ3VyYXRpb24uZ2V0KCd2ZXJzaW9uJyk7XG5cbiAgICByZXR1cm4gZGF0YU9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgdG8gY2FsbCBzaG93aW1hZ2Ugc2VydmljZSB3aXRoIHRoZSBmb3JtdWxhIG1kNSBhcyBwYXJhbWV0ZXIuXG4gICAqICBUaGUgcmVzdWx0IGNvdWxkIGJlOlxuICAgKiAtIHsnc3RhdHVzJyA6IHdhcm5pbmcnfSA6IFRoZSBpbWFnZSBhc3NvY2lhdGVkIHRvIHRoZSBNYXRoTUwgbWQ1IGlzIG5vdCBpbiBjYWNoZS5cbiAgICogLSB7J3N0YXR1cycgOiAnb2snIC4uLn0gOiBUaGUgaW1hZ2UgYXNzb2NpYXRlZCB0byB0aGUgTWF0aE1MIG1kNSBpcyBpbiBjYWNoZS5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YSAtIG9iamVjdCBjb250YWluaW5nIHNob3dpbWFnZSBzZXJ2aWNlIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSAtIHN0cmluZyBjb250YWluaW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgZm9ybXVsYS5cbiAgICogQHJldHVybnMge09iamVjdH0gSlNPTiBvYmplY3QgY29udGFpbmluZyBzaG93aW1hZ2UgcmVzcG9uc2UuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlU2hvd0ltYWdlU3JjKGRhdGEsIGxhbmd1YWdlKSB7XG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHRoaXMuY3JlYXRlU2hvd0ltYWdlU3JjRGF0YShkYXRhLCBsYW5ndWFnZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ3Nob3dpbWFnZScsIFV0aWwuaHR0cEJ1aWxkUXVlcnkoZGF0YU9iamVjdCksIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGh0bWwgaW1nIHRhZ3MgaW5zaWRlIGEgaHRtbCBjb2RlIHRvIG1hdGhtbCwgYmFzZTY0IGltZyB0YWdzIChpLmUgd2l0aCBiYXNlNjQgb24gc3JjKVxuICAgKiBvciBzaG93aW1hZ2UgaW1nIHRhZ3MgKGkuZSB3aXRoIHNob3dpbWFnZS5waHAgb24gc3JjKVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGUgLSBIVE1MIGNvZGVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBtb2RlIC0gYmFzZTY0MnNob3dpbWFnZSBvciBpbWcybWF0aG1sIG9yIGltZzI2NCB0cmFuc2Zvcm0uXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGh0bWwgLSBjb2RlIHRyYW5zZm9ybWVkLlxuICAgKi9cbiAgc3RhdGljIGNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgbW9kZSkge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBsZXQgZW5kUG9zaXRpb24gPSAwO1xuICAgIGNvbnN0IHBhdHRlcm4gPSAvPGltZy9naTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5zb3VyY2UubGVuZ3RoO1xuXG4gICAgd2hpbGUgKHBhdHRlcm4udGVzdChjb2RlKSkge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHBhdHRlcm4ubGFzdEluZGV4IC0gcGF0dGVybkxlbmd0aDtcbiAgICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbik7XG5cbiAgICAgIGxldCBpID0gc3RhcnRQb3NpdGlvbiArIDE7XG5cbiAgICAgIHdoaWxlIChpIDwgY29kZS5sZW5ndGggJiYgZW5kUG9zaXRpb24gPD0gc3RhcnRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBjb2RlLmNoYXJBdChpKTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnXCInIHx8IGNoYXJhY3RlciA9PT0gJ1xcJycpIHtcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJOZXh0UG9zaXRpb24gPSBjb2RlLmluZGV4T2YoY2hhcmFjdGVyLCBpICsgMSk7XG5cbiAgICAgICAgICBpZiAoY2hhcmFjdGVyTmV4dFBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgaSA9IGNvZGUubGVuZ3RoOyAvLyBFbmQgd2hpbGUuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBjaGFyYWN0ZXJOZXh0UG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gJz4nKSB7XG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBvc2l0aW9uIDwgc3RhcnRQb3NpdGlvbikgeyAvLyBUaGUgaW1nIHRhZyBpcyBzdHJpcHBlZC5cbiAgICAgICAgb3V0cHV0ICs9IGNvZGUuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGNvZGUubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH1cbiAgICAgIGxldCBpbWdDb2RlID0gY29kZS5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuICAgICAgY29uc3QgaW1nT2JqZWN0ID0gVXRpbC5jcmVhdGVPYmplY3QoaW1nQ29kZSk7XG4gICAgICBsZXQgeG1sQ29kZSA9IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpO1xuICAgICAgbGV0IGNvbnZlcnRUb1htbDtcbiAgICAgIGxldCBjb252ZXJ0VG9TYWZlWG1sO1xuXG4gICAgICBpZiAobW9kZSA9PT0gJ2Jhc2U2NDJzaG93aW1hZ2UnKSB7XG4gICAgICAgIGlmICh4bWxDb2RlID09IG51bGwpIHtcbiAgICAgICAgICB4bWxDb2RlID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgeG1sQ29kZSA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKHhtbENvZGUpO1xuICAgICAgICBpbWdDb2RlID0gUGFyc2VyLm1hdGhtbFRvSW1nT2JqZWN0KGRvY3VtZW50LCB4bWxDb2RlLCBudWxsLCBudWxsKTtcbiAgICAgICAgb3V0cHV0ICs9IFV0aWwuY3JlYXRlT2JqZWN0Q29kZShpbWdDb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2ltZzJtYXRobWwnKSB7XG4gICAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSkge1xuICAgICAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3NhZmVYbWwnKSB7XG4gICAgICAgICAgICBjb252ZXJ0VG9YbWwgPSB0cnVlO1xuICAgICAgICAgICAgY29udmVydFRvU2FmZVhtbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcpIHtcbiAgICAgICAgICAgIGNvbnZlcnRUb1htbCA9IHRydWU7XG4gICAgICAgICAgICBjb252ZXJ0VG9TYWZlWG1sID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBVdGlsLmdldFdJUklTSW1hZ2VPdXRwdXQoaW1nQ29kZSwgY29udmVydFRvWG1sLCBjb252ZXJ0VG9TYWZlWG1sKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2ltZzI2NCcpIHtcbiAgICAgICAgaWYgKHhtbENvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB4bWxDb2RlID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgeG1sQ29kZSA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKHhtbENvZGUpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgcHJvcGVydGllcy5iYXNlNjQgPSAndHJ1ZSc7XG4gICAgICAgIGltZ0NvZGUgPSBQYXJzZXIubWF0aG1sVG9JbWdPYmplY3QoZG9jdW1lbnQsIHhtbENvZGUsIHByb3BlcnRpZXMsIG51bGwpO1xuICAgICAgICAvLyBNZXRyaWNzLlxuICAgICAgICBJbWFnZS5zZXRJbWdTaXplKGltZ0NvZGUsIGltZ0NvZGUuc3JjLCB0cnVlKTtcbiAgICAgICAgb3V0cHV0ICs9IFV0aWwuY3JlYXRlT2JqZWN0Q29kZShpbWdDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0ICs9IGNvZGUuc3Vic3RyaW5nKGVuZFBvc2l0aW9uLCBjb2RlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgb2NjdXJyZW5jZXMgb2YgTWF0aE1MIHRvIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIHN0cmluZyB3aXRoIHZhbGlkIE1hdGhNTCBjb2RlLlxuICAgKiBUaGUgTWF0aE1MIGNvZGUgZG9lc24ndCBjb250YWluIHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtDb25zdGFudHN9IGNoYXJhY3RlcnMgLSBDb25zdGFudCBvYmplY3QgY29udGFpbmluZyB4bWxDaGFyYWN0ZXJzXG4gICAqIG9yIHNhZmVYbWxDaGFyYWN0ZXJzIHJlbGF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBhIHZhbGlkIGxhbmd1YWdlIGNvZGVcbiAgICogaW4gb3JkZXIgdG8gZ2VuZXJhdGUgZm9ybXVsYSBhY2Nlc3NpYmlsaXR5LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaW5wdXQgc3RyaW5nIHdpdGggYWxsIHRoZSBNYXRoTUxcbiAgICogb2NjdXJyZW5jZXMgcmVwbGFjZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2UuXG4gICAqL1xuICBzdGF0aWMgcGFyc2VNYXRobWxUb0ltZyhjb250ZW50LCBjaGFyYWN0ZXJzLCBsYW5ndWFnZSkge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBjb25zdCBtYXRoVGFnQmVnaW4gPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1tYXRoYDtcbiAgICBjb25zdCBtYXRoVGFnRW5kID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L21hdGgke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgbGV0IHN0YXJ0ID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdCZWdpbik7XG4gICAgbGV0IGVuZCA9IDA7XG5cbiAgICB3aGlsZSAoc3RhcnQgIT09IC0xKSB7XG4gICAgICBvdXRwdXQgKz0gY29udGVudC5zdWJzdHJpbmcoZW5kLCBzdGFydCk7XG4gICAgICAvLyBBdm9pZCBXSVJJUyBpbWFnZXMgdG8gYmUgcGFyc2VkLlxuICAgICAgY29uc3QgaW1hZ2VNYXRobWxBdHJyaWJ1dGUgPSBjb250ZW50LmluZGV4T2YoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpO1xuICAgICAgZW5kID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdFbmQsIHN0YXJ0KTtcblxuICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChpbWFnZU1hdGhtbEF0cnJpYnV0ZSAhPT0gLTEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2xvc2UgdGFnIG9mIGltZyBhdHRyaWJ1dGVcbiAgICAgICAgLy8gSWYgYSBtYXRobWxBdHRyaWJ1dGUgZXhpc3RzIHNob3VsZCBiZSBpbnNpZGUgYSBpbWcgdGFnLlxuICAgICAgICBlbmQgKz0gY29udGVudC5pbmRleE9mKCcvPicsIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCArPSBtYXRoVGFnRW5kLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFNYXRoTUwuaXNNYXRobWxJbkF0dHJpYnV0ZShjb250ZW50LCBzdGFydCkgJiYgaW1hZ2VNYXRobWxBdHJyaWJ1dGUgPT09IC0xKSB7XG4gICAgICAgIGxldCBtYXRobWwgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgbWF0aG1sID0gKGNoYXJhY3RlcnMuaWQgPT09IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy5pZClcbiAgICAgICAgICA/IE1hdGhNTC5zYWZlWG1sRGVjb2RlKG1hdGhtbClcbiAgICAgICAgICA6IE1hdGhNTC5tYXRoTUxFbnRpdGllcyhtYXRobWwpO1xuICAgICAgICBvdXRwdXQgKz0gVXRpbC5jcmVhdGVPYmplY3RDb2RlKFBhcnNlci5tYXRobWxUb0ltZ09iamVjdChkb2N1bWVudCwgbWF0aG1sLCBudWxsLCBsYW5ndWFnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgY29udGVudC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cblxuLy8gTXV0YXRpb24gb2JzZXJ2ZXJzIHRvIGF2b2lkIHdpcmlzIGltYWdlIGZvcm11bGFzIGNsYXNzIGJlIHJlbW92ZWQuXG5pZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICBpZiAobXV0YXRpb24ub2xkVmFsdWUgPT09IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpXG4gICAgICAgICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcydcbiAgICAgICAgJiYgbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpKSA9PT0gLTEpIHtcbiAgICAgICAgbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBQYXJzZXIub2JzZXJ2ZXIgPSBPYmplY3QuY3JlYXRlKG11dGF0aW9uT2JzZXJ2ZXIpO1xuICBQYXJzZXIub2JzZXJ2ZXIuQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9O1xuICAvLyBXZSB1c2Ugb3duIGRlZmF1bHQgY29uZmlnLlxuICBQYXJzZXIub2JzZXJ2ZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykub2JzZXJ2ZSh0YXJnZXQsIHRoaXMuQ29uZmlnKTtcbiAgfTtcbn1cbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgTGlzdGVuZXJzIGZyb20gJy4vbGlzdGVuZXJzJztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2VydmljZVByb3ZpZGVyUHJvcGVydGllc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFVSSSAtIFNlcnZpY2UgVVJJLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHNlcnZlciAtIFNlcnZpY2Ugc2VydmVyIGxhbmd1YWdlLlxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc2VydmljZVByb3ZpZGVyLiBBIHNlcnZpY2VQcm92aWRlciBpcyBhIGNsYXNzIGNvbnRhaW5pbmdcbiAqIGFuIGFyYml0cmFyeSBudW1iZXIgb2Ygc2VydmljZXMgd2l0aCB0aGUgY29ycmVzcG9uZGVudCBwYXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlUHJvdmlkZXIge1xuICAvKipcbiAgICogUmV0dXJucyBTZXJ2aWNlIFByb3ZpZGVyIGxpc3RlbmVycy5cbiAgICogQHR5cGUge0xpc3RlbmVyc31cbiAgICovXG4gIHN0YXRpYyBnZXQgbGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX2xpc3RlbmVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEge0BsaW5rIExpc3RlbmVyfSBpbnN0YW5jZSB0byB7QGxpbmsgU2VydmljZVByb3ZpZGVyfSBjbGFzcy5cbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgLSBJbnN0YW5jZSBvZiB7QGxpbmsgTGlzdGVuZXJ9LlxuICAgKi9cbiAgc3RhdGljIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZW50cyBpbiBTZXJ2aWNlIFByb3ZpZGVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBFdmVudCBvYmplY3QuXG4gICAqL1xuICBzdGF0aWMgZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIubGlzdGVuZXJzLmZpcmUoZXZlbnROYW1lLCBldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2VydmljZSBwYXJhbWV0ZXJzLlxuICAgKiBAdHlwZSB7U2VydmljZVByb3ZpZGVyUHJvcGVydGllc31cbiAgICpcbiAgICovXG4gIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1NlcnZpY2VQcm92aWRlclByb3BlcnRpZXN9XG4gICAqL1xuICBzdGF0aWMgc2V0IHBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIFNlcnZpY2VQcm92aWRlci5fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5LlxuICAgKiBSZXR1cm4gc2VydmljZSBwcm92aWRlciBwYXRocy5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgc2VydmljZVBhdGhzKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX3NlcnZpY2VQYXRocztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgc2VydmljZSBwYXRocy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IHNlcnZpY2VQYXRocyh2YWx1ZSkge1xuICAgIFNlcnZpY2VQcm92aWRlci5fc2VydmljZVBhdGhzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBzZXJ2aWNlIHRvIHRoZSBTZXJ2aWNlUHJvdmlkZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZXJ2aWNlIC0gU2VydmljZSBuYW1lLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCAtIFNlcnZpY2UgcGF0aC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHNldFNlcnZpY2VQYXRoKHNlcnZpY2UsIHBhdGgpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2VydmljZVBhdGhzW3NlcnZpY2VdID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIHBhdGggZm9yIGEgY2VydGFpbiBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZU5hbWUgLSBTZXJ2aWNlIG5hbWUuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzZXJ2aWNlIHBhdGguXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlUGF0aChzZXJ2aWNlTmFtZSkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuc2VydmljZVBhdGhzW3NlcnZpY2VOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICAqIFNlcnZpY2UgcHJvdmlkZXIgaW50ZWdyYXRpb24gcGF0aC5cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgaW50ZWdyYXRpb25QYXRoKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX2ludGVncmF0aW9uUGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgc2VydmljZSBwcm92aWRlciBpbnRlZ3JhdGlvbiBwYXRoLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0YXRpYyBzZXQgaW50ZWdyYXRpb25QYXRoKHZhbHVlKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLl9pbnRlZ3JhdGlvblBhdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2ZXIgVVJMIGluIHRoZSBmb3JtIHByb3RvY29sOi8vc2VydmVyTmFtZTpzZXJ2ZXJQb3J0LlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjbGllbnQgc2lkZSBzZXJ2ZXIgcGF0aC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2ZXJVUkwoKSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgYXJyID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYCR7YXJyWzBdfS8vJHthcnJbMl19YDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHtAbGluayB0aGlzfSBjbGFzcy4gVXNlcyB7QGxpbmsgdGhpcy5pbnRlZ3JhdGlvblBhdGh9IGFzXG4gICAqIGJhc2UgcGF0aCB0byBnZW5lcmF0ZSBhbGwgYmFja2VuZCBzZXJ2aWNlcyBwYXRocy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgLSBGdW5jdGlvbiBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1ldGVycy5pbnRlZ3JhdGlvblBhdGggLSBTZXJ2aWNlIHBhdGguXG4gICAqL1xuICBzdGF0aWMgaW5pdChwYXJhbWV0ZXJzKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIC8vIFNlcnZpY2VzIHBhdGggKHRlY2ggZGVwZW5kYW50KS5cbiAgICBsZXQgY29uZmlndXJhdGlvblVSSSA9IFNlcnZpY2VQcm92aWRlci5jcmVhdGVTZXJ2aWNlVVJJKCdjb25maWd1cmF0aW9uanMnKTtcbiAgICBsZXQgY3JlYXRlSW1hZ2VVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnY3JlYXRlaW1hZ2UnKTtcbiAgICBsZXQgc2hvd0ltYWdlVVJJID0gU2VydmljZVByb3ZpZGVyLmNyZWF0ZVNlcnZpY2VVUkkoJ3Nob3dpbWFnZScpO1xuICAgIGxldCBnZXRNYXRoTUxVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnZ2V0bWF0aG1sJyk7XG4gICAgbGV0IHNlcnZpY2VVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnc2VydmljZScpO1xuXG4gICAgLy8gU29tZSBiYWNrZW5kIGludGVncmF0aW9ucyAobGlrZSBKYXZhIG8gUnVieSkgaGF2ZSBhbiBhYnNvbHV0ZSBiYWNrZW5kIHBhdGgsXG4gICAgLy8gZm9yIGV4YW1wbGU6IC9hcHAvc2VydmljZS4gRm9yIHRoZW0gd2UgY2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSBVUkwgcGF0aCwgaS5lXG4gICAgLy8gcHJvdG9jb2w6Ly9kb21haW46cG9ydC9hcHAvc2VydmljZVxuICAgIGlmIChTZXJ2aWNlUHJvdmlkZXIucGFyYW1ldGVycy5VUkkuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICBjb25zdCBzZXJ2ZXJQYXRoID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZlclVSTCgpO1xuICAgICAgY29uZmlndXJhdGlvblVSSSA9IHNlcnZlclBhdGggKyBjb25maWd1cmF0aW9uVVJJO1xuICAgICAgc2hvd0ltYWdlVVJJID0gc2VydmVyUGF0aCArIHNob3dJbWFnZVVSSTtcbiAgICAgIGNyZWF0ZUltYWdlVVJJID0gc2VydmVyUGF0aCArIGNyZWF0ZUltYWdlVVJJO1xuICAgICAgZ2V0TWF0aE1MVVJJID0gc2VydmVyUGF0aCArIGdldE1hdGhNTFVSSTtcbiAgICAgIHNlcnZpY2VVUkkgPSBzZXJ2ZXJQYXRoICsgc2VydmljZVVSSTtcbiAgICB9XG5cbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NvbmZpZ3VyYXRpb25qcycsIGNvbmZpZ3VyYXRpb25VUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnc2hvd2ltYWdlJywgc2hvd0ltYWdlVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NyZWF0ZWltYWdlJywgY3JlYXRlSW1hZ2VVUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnc2VydmljZScsIHNlcnZpY2VVUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnZ2V0bWF0aG1sJywgZ2V0TWF0aE1MVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NvbmZpZ3VyYXRpb25qcycsIGNvbmZpZ3VyYXRpb25VUkkpO1xuXG4gICAgU2VydmljZVByb3ZpZGVyLmxpc3RlbmVycy5maXJlKCdvbkluaXQnLCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29udGVudCBmcm9tIGFuIFVSTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIFRhcmdldCBVUkwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcG9zdFZhcmlhYmxlc10gLSBPYmplY3QgY29udGFpbmluZyBwb3N0IHZhcmlhYmxlcy5cbiAgICogbnVsbCBpZiBhIEdFVCBxdWVyeSBzaG91bGQgYmUgZG9uZS5cbiAgICogQHJldHVybnMge1N0cmluZ30gQ29udGVudCBvZiB0aGUgdGFyZ2V0IFVSTC5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldFVybCh1cmwsIHBvc3RWYXJpYWJsZXMpIHtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnN1YnN0cigwLCB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgY29uc3QgaHR0cFJlcXVlc3QgPSBVdGlsLmNyZWF0ZUh0dHBSZXF1ZXN0KCk7XG5cbiAgICBpZiAoaHR0cFJlcXVlc3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcG9zdFZhcmlhYmxlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHBvc3RWYXJpYWJsZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh1cmwuc3Vic3RyKDAsIDEpID09PSAnLycgfHwgdXJsLnN1YnN0cigwLCA3KSA9PT0gJ2h0dHA6Ly8nIHx8IHVybC5zdWJzdHIoMCwgOCkgPT09ICdodHRwczovLycpIHtcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsIHVybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsIGN1cnJlbnRQYXRoICsgdXJsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXIgPSBDb25maWd1cmF0aW9uLmdldCgnY3VzdG9tSGVhZGVycycpO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIgPSBoZWFkZXIudG9TdHJpbmcoKVxuICAgICAgICBoZWFkZXIuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQudHJpbSgpLnNwbGl0KCc9JykpXG4gICAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbF0pID0+IGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwb3N0VmFyaWFibGVzICE9PSAndW5kZWZpbmVkJyAmJiBwb3N0VmFyaWFibGVzKSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgaHR0cFJlcXVlc3Quc2VuZChVdGlsLmh0dHBCdWlsZFF1ZXJ5KHBvc3RWYXJpYWJsZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgICB9XG4gICBcbiAgICAgIHJldHVybiBodHRwUmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNwb25zZSB0ZXh0IG9mIGEgY2VydGFpbiBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFNlcnZpY2UgbmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RWYXJpYWJsZXMgLSBQb3N0IHZhcmlhYmxlcy5cbiAgICogQHBhcmFtIHtCb29sZWFufSBnZXQgLSBUcnVlIGlmIHRoZSByZXF1ZXN0IGlzIEdFVCBpbnN0ZWFkIG9mIFBPU1QuIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHJldHVybnMge1N0cmluZ30gU2VydmljZSByZXNwb25zZSB0ZXh0LlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2Uoc2VydmljZSwgcG9zdFZhcmlhYmxlcywgZ2V0KSB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGlmIChnZXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdldFZhcmlhYmxlcyA9IHBvc3RWYXJpYWJsZXMgPyBgPyR7cG9zdFZhcmlhYmxlc31gIDogJyc7XG4gICAgICBjb25zdCBzZXJ2aWNlVXJsID0gYCR7U2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2VQYXRoKHNlcnZpY2UpfSR7Z2V0VmFyaWFibGVzfWA7XG4gICAgICByZXNwb25zZSA9IFNlcnZpY2VQcm92aWRlci5nZXRVcmwoc2VydmljZVVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VVcmwgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZVBhdGgoc2VydmljZSk7XG4gICAgICByZXNwb25zZSA9IFNlcnZpY2VQcm92aWRlci5nZXRVcmwoc2VydmljZVVybCwgcG9zdFZhcmlhYmxlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2ZXIgbGFuZ3VhZ2Ugb2YgYSBjZXJ0YWluIHNlcnZpY2UuIFRoZSBwb3NzaWJsZSB2YWx1ZXNcbiAgICogYXJlOiBwaHAsIGFzcHgsIGphdmEgYW5kIHJ1YnkuXG4gICAqIFRoaXMgbWV0aG9kIGhhcyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFRoZSBjb25maWd1cmF0aW9uIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gVGhlIHNlcnZlciB0ZWNobm9sb2d5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29uZmlndXJhdGlvbiBzZXJ2aWNlLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZlckxhbmd1YWdlRnJvbVNlcnZpY2Uoc2VydmljZSkge1xuICAgIGlmIChzZXJ2aWNlLmluZGV4T2YoJy5waHAnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAncGhwJztcbiAgICB9XG4gICAgaWYgKHNlcnZpY2UuaW5kZXhPZignLmFzcHgnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnYXNweCc7XG4gICAgfVxuICAgIGlmIChzZXJ2aWNlLmluZGV4T2YoJ3dpcmlzcGx1Z2luZW5naW5lJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3J1YnknO1xuICAgIH1cbiAgICByZXR1cm4gJ2phdmEnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVSSSBhc3NvY2lhdGVkIHdpdGggYSBjZXJ0YWluIHNlcnZpY2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZXJ2aWNlIC0gVGhlIHNlcnZpY2UgbmFtZS5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgc2VydmljZSBwYXRoLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVNlcnZpY2VVUkkoc2VydmljZSkge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IFNlcnZpY2VQcm92aWRlci5zZXJ2ZXJFeHRlbnNpb24oKTtcbiAgICByZXR1cm4gVXRpbC5jb25jYXRlbmF0ZVVybChTZXJ2aWNlUHJvdmlkZXIucGFyYW1ldGVycy5VUkksIHNlcnZpY2UpICsgZXh0ZW5zaW9uO1xuICB9XG5cbiAgc3RhdGljIHNlcnZlckV4dGVuc2lvbigpIHtcbiAgICBpZiAoU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMuc2VydmVyLmluZGV4T2YoJ3BocCcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcucGhwJztcbiAgICB9XG4gICAgaWYgKFNlcnZpY2VQcm92aWRlci5wYXJhbWV0ZXJzLnNlcnZlci5pbmRleE9mKCdhc3B4JykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJy5hc3B4JztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qKlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHNlcnZpY2UgLSBUaGUgc2VydmljZSBuYW1lLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHBhdGggLSBUaGUgc2VydmljZSBwYXRoLlxuICogQHN0YXRpY1xuICovXG5TZXJ2aWNlUHJvdmlkZXIuX3NlcnZpY2VQYXRocyA9IHt9O1xuXG4vKipcbiAqIFRoZSBpbnRlZ3JhdGlvbiBwYXRoLiBDb250YWlucyB0aGUgcGF0aCBvZiB0aGUgY29uZmlndXJhdGlvbiBzZXJ2aWNlLlxuICogVXNlZCB0byBkZWZpbmUgdGhlIHBhdGggZm9yIGFsbCBzZXJ2aWNlcy5cbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5TZXJ2aWNlUHJvdmlkZXIuX2ludGVncmF0aW9uUGF0aCA9ICcnO1xuXG4vKipcbiAqIFNlcnZpY2VQcm92aWRlciBzdGF0aWMgbGlzdGVuZXJzLlxuICogQHR5cGUge0xpc3RlbmVyc31cbiAqIEBwcml2YXRlXG4gKi9cblNlcnZpY2VQcm92aWRlci5fbGlzdGVuZXJzID0gbmV3IExpc3RlbmVycygpO1xuXG4vKipcbiAqIFNlcnZpY2UgcHJvdmlkZXIgcGFyYW1ldGVycy5cbiAqIEB0eXBlIHtTZXJ2aWNlUHJvdmlkZXJQYXJhbWV0ZXJzfVxuICovXG5TZXJ2aWNlUHJvdmlkZXIuX3BhcmFtZXRlcnMgPSB7fTtcbiIsImltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi4vbGFuZy9zdHJpbmdzLmpzb24nO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzdHJpbmcgbWFuYWdlci4gSXQncyB1c2VkIHRvIGxvYWQgbG9jYWxpemVkIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXRpYyBjbGFzcyBTdHJpbmdNYW5hZ2VyIGNhbiBub3QgYmUgaW5zdGFudGlhdGVkLicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgdmFsdWUgb2YgY2VydGFpbiBzdHJpbmcga2V5LiBJZiB0aGUgYXNzb2NpYXRlZCB2YWx1ZVxuICAgKiBkb2Vzbid0IGV4aXRzIHJldHVybnMgdGhlIG9yaWdpbmFsIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHN0cmluZyBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBERUZBVUxUID0gbnVsbC4gU3BlY2lmeSB0aGUgbGFuZ3VhZ2UgdG8gdHJhbnNsYXRlIHRoZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ30gY29ycmVzcG9uZGVudCB2YWx1ZS4gSWYgZG9lc24ndCBleGlzdHMgb3JpZ2luYWwga2V5LlxuICAgKi9cbiAgc3RhdGljIGdldChrZXksIGxhbmcpIHtcblxuICAgIC8vIERlZmF1bHQgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuICAgIGxldCB7bGFuZ3VhZ2V9ID0gdGhpcztcblxuICAgIC8vIElmIHBhcmFtZXRlciBsYW5ndWFnZSwgdXNlIGl0XG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIGxhbmd1YWdlID0gbGFuZztcbiAgICB9XG5cbiAgICAvLyBDdXQgZG93biBvbiBzdHJpbmdzLiBlLmcuIGVuX1VTIC0+IGVuXG4gICAgaWYgKGxhbmd1YWdlICYmIGxhbmd1YWdlLmxlbmd0aCA+IDIpIHtcbiAgICAgIGxhbmd1YWdlID0gbGFuZ3VhZ2Uuc2xpY2UoMCwgMik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2Ugc3VwcG9ydCB0aGUgbGFuZ3VhZ2VcbiAgICBpZiAoIXRoaXMuc3RyaW5ncy5oYXNPd25Qcm9wZXJ0eShsYW5ndWFnZSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBsYW5ndWFnZSAke2xhbmd1YWdlfSBzZXQgaW4gU3RyaW5nTWFuYWdlci5gKTtcbiAgICAgIGxhbmd1YWdlID0gJ2VuJztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUga2V5IGlzIHN1cHBvcnRlZCBpbiB0aGUgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICBpZiAoIXRoaXMuc3RyaW5nc1tsYW5ndWFnZV0uaGFzT3duUHJvcGVydHkoa2V5KSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSAke2tleX0gZm9yIGxhbmd1YWdlICR7bGFuZ3VhZ2V9IGluIFN0cmluZ01hbmFnZXIuYCk7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmluZ3NbbGFuZ3VhZ2VdW2tleV07XG4gIH1cbn1cblxuLyoqXG4gKiBEaWN0aW9uYXJ5IG9mIGRpY3Rpb25hcmllczpcbiAqIEtleTogbGFuZ3VhZ2UgY29kZVxuICogVmFsdWU6IEtleTogaWQgb2YgdGhlIHN0cmluZ1xuICogICAgICAgIFZhbHVlOiB0cmFuc2xhdGlvbiBvZiB0aGUgc3RyaW5nXG4gKi9cblN0cmluZ01hbmFnZXIuc3RyaW5ncyA9IHRyYW5zbGF0aW9ucztcblxuLyoqXG4gKiBMYW5ndWFnZSBvZiB0aGUgdHJhbnNsYXRpb25zOyBFbmdsaXNoIGJ5IGRlZmF1bHRcbiAqL1xuU3RyaW5nTWFuYWdlci5sYW5ndWFnZSA9ICdlbic7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q2FjaGUge1xuICAvKipcbiAgICogQGNsYXNzZGVzY1xuICAgKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIGNsaWVudC1zaWRlIHRleHQgY2FjaGUgY2xhc3MuIENvbnRhaW5zIHBhaXJzIG9mXG4gICAqIHN0cmluZ3MgKGtleS92YWx1ZSkgd2hpY2ggY2FuIGJlIHJldHJpZXZlZCBpbiBhbnkgbW9tZW50LiBVc3VhbGx5IHVzZWRcbiAgICogdG8gc3RvcmUgQUpBWCByZXNwb25zZXMgZm9yIHRleHQgc2VydmljZXMgbGlrZSBtYXRobWwybGF0ZXhcbiAgICogKGMuZiB7QGxpbmsgTGF0ZXh9IGNsYXNzKSBvciBtYXRobWwyYWNjZXNzaWJsZSAoYy5mIHtAbGluayBBY2Nlc3NpYmlsaXR5fSBjbGFzcykuXG4gICAqIEBjb25zdHJ1Y3RzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBDYWNoZSBhcnJheSBwcm9wZXJ0eSBzdG9yaW5nIHRoZSBjYWNoZSBlbnRyaWVzLlxuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn1cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlID0gW107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcG9wdWxhdGVzIGEga2V5L3ZhbHVlIHBhaXIgaW50byB0aGUge0BsaW5rIHRoaXMuY2FjaGV9IHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gQ2FjaGUga2V5LCB1c3VhbGx5IHRoZSBzZXJ2aWNlIHN0cmluZyBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIENhY2hlIHZhbHVlLCB1c3VhbGx5IHRoZSBzZXJ2aWNlIHJlc3BvbnNlLlxuICAgKi9cbiAgcG9wdWxhdGUoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhY2hlIHZhbHVlIGFzc29jaWF0ZWQgdG8gY2VydGFpbiBjYWNoZSBrZXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBDYWNoZSBrZXksIHVzdWFsbHkgdGhlIHNlcnZpY2Ugc3RyaW5nIHBhcmFtZXRlci5cbiAgICogQHJldHVybiB7U3RyaW5nfSB2YWx1ZSAtIENhY2hlIHZhbHVlLCBpZiBleGlzdHMuIEZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuaW1wb3J0IERPTVB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IExhdGV4IGZyb20gJy4vbGF0ZXgnO1xuaW1wb3J0IFN0cmluZ01hbmFnZXIgZnJvbSAnLi9zdHJpbmdtYW5hZ2VyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gdXRpbGl0eSBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG4gIC8qKlxuICAgKiBGaXJlcyBhbiBldmVudCBpbiBhIHRhcmdldC5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgLSB0YXJnZXQgd2hlcmUgZXZlbnQgc2hvdWxkIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIGV2ZW50IHRvIGZpcmUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBmaXJlRXZlbnQoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgZXZlbnRPYmplY3QuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gIWV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnRPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICByZXR1cm4gZXZlbnRUYXJnZXQuZmlyZUV2ZW50KGBvbiR7ZXZlbnROYW1lfWAsIGV2ZW50T2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1icm93c2VyIGFkZEV2ZW50TGlzdGVuZXIvYXR0YWNoRXZlbnQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gdGFyZ2V0IHRvIGFkZCB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBzcGVjaWZpZXMgdGhlIHR5cGUgb2YgZXZlbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxCYWNrRnVuY3Rpb24gLSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGFkZEV2ZW50KGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGNhbGxCYWNrRnVuY3Rpb24pIHtcbiAgICBpZiAoZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxCYWNrRnVuY3Rpb24sIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnRUYXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgZXZlbnRUYXJnZXQuYXR0YWNoRXZlbnQoYG9uJHtldmVudE5hbWV9YCwgY2FsbEJhY2tGdW5jdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyb3NzLWJyb3dzZXIgcmVtb3ZlRXZlbnRMaXN0ZW5lci9kZXRhY2hFdmVudCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgLSB0YXJnZXQgdG8gYWRkIHRoZSBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIHNwZWNpZmllcyB0aGUgdHlwZSBvZiBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbEJhY2tGdW5jdGlvbiAtIGZ1bmN0aW9uIHRvIHJlbW92ZSBmcm9tIHRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZW1vdmVFdmVudChldmVudFRhcmdldCwgZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uKSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmRldGFjaEV2ZW50KSB7XG4gICAgICBldmVudFRhcmdldC5kZXRhY2hFdmVudChgb24ke2V2ZW50TmFtZX1gLCBjYWxsQmFja0Z1bmN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgYSBjYWxsYmFjayBmdW5jdGlvbiwgZm9yIGEgY2VydGFpbiBldmVudCB0YXJnZXQsIHRvIHRoZSBmb2xsb3dpbmcgZXZlbnQgdHlwZXM6XG4gICAqIC0gZGJsY2xpY2tcbiAgICogLSBtb3VzZWRvd25cbiAgICogLSBtb3VzZXVwXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gZXZlbnQgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb3VibGVDbGlja0hhbmRsZXIgLSBmdW5jdGlvbiB0byBydW4gd2hlbiBvbiBkYmxjbGljayBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW91c2Vkb3duSGFuZGxlciAtIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIG9uIG1vdXNlZG93biBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW91c2V1cEhhbmRsZXIgLSBmdW5jdGlvbiB0byBydW4gd2hlbiBvbiBtb3VzZXVwIGV2ZW50LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkRWxlbWVudEV2ZW50cyhldmVudFRhcmdldCwgZG91YmxlQ2xpY2tIYW5kbGVyLCBtb3VzZWRvd25IYW5kbGVyLCBtb3VzZXVwSGFuZGxlcikge1xuICAgIGlmIChkb3VibGVDbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tEYmxjbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWFsRXZlbnQgPSAoZXZlbnQpIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlYWxFdmVudC5zcmNFbGVtZW50ID8gcmVhbEV2ZW50LnNyY0VsZW1lbnQgOiByZWFsRXZlbnQudGFyZ2V0O1xuICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIoZWxlbWVudCwgcmVhbEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIFV0aWwuYWRkRXZlbnQoZXZlbnRUYXJnZXQsICdkYmxjbGljaycsIHRoaXMuY2FsbGJhY2tEYmxjbGljayk7XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlZG93bkhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tNb3VzZWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhbEV2ZW50ID0gKGV2ZW50KSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsRXZlbnQuc3JjRWxlbWVudCA/IHJlYWxFdmVudC5zcmNFbGVtZW50IDogcmVhbEV2ZW50LnRhcmdldDtcbiAgICAgICAgbW91c2Vkb3duSGFuZGxlcihlbGVtZW50LCByZWFsRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgVXRpbC5hZGRFdmVudChldmVudFRhcmdldCwgJ21vdXNlZG93bicsIHRoaXMuY2FsbGJhY2tNb3VzZWRvd24pO1xuICAgIH1cblxuICAgIGlmIChtb3VzZXVwSGFuZGxlcikge1xuICAgICAgdGhpcy5jYWxsYmFja01vdXNldXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhbEV2ZW50ID0gKGV2ZW50KSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsRXZlbnQuc3JjRWxlbWVudCA/IHJlYWxFdmVudC5zcmNFbGVtZW50IDogcmVhbEV2ZW50LnRhcmdldDtcbiAgICAgICAgbW91c2V1cEhhbmRsZXIoZWxlbWVudCwgcmVhbEV2ZW50KTtcbiAgICAgIH07XG4gICAgICAvLyBDaHJvbWUgZG9lc24ndCB0cmlnZ2VyIHRoaXMgZXZlbnQgZm9yIGV2ZW50VGFyZ2V0IGlmIHdlIHJlbGVhc2UgdGhlIG1vdXNlIGJ1dHRvblxuICAgICAgLy8gd2hpbGUgdGhlIG1vdXNlIGlzIG91dHNpZGUgdGhlIGVkaXRvciB0ZXh0IGZpZWxkLlxuICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQ6IHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluZGVwZW5kZW50bHkgb2Ygd2hlcmUgdGhlIG1vdXNlXG4gICAgICAvLyBpcyB3aGVuIHdlIHJlbGVhc2UgaXRzIGJ1dHRvbi5cbiAgICAgIFV0aWwuYWRkRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5jYWxsYmFja01vdXNldXApO1xuICAgICAgVXRpbC5hZGRFdmVudChldmVudFRhcmdldCwgJ21vdXNldXAnLCB0aGlzLmNhbGxiYWNrTW91c2V1cCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2FsbGJhY2sgZnVuY3Rpb24sIGZvciBhIGNlcnRhaW4gZXZlbnQgdGFyZ2V0LCB0byB0aGUgZm9sbG93aW5nIGV2ZW50IHR5cGVzOlxuICAgKiAtIGRibGNsaWNrXG4gICAqIC0gbW91c2Vkb3duXG4gICAqIC0gbW91c2V1cFxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCAtIGV2ZW50IHRhcmdldC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlbW92ZUVsZW1lbnRFdmVudHMoZXZlbnRUYXJnZXQpIHtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGV2ZW50VGFyZ2V0LCAnZGJsY2xpY2snLCB0aGlzLmNhbGxiYWNrRGJsY2xpY2spO1xuICAgIFV0aWwucmVtb3ZlRXZlbnQoZXZlbnRUYXJnZXQsICdtb3VzZWRvd24nLCB0aGlzLmNhbGxiYWNrTW91c2Vkb3duKTtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuY2FsbGJhY2tNb3VzZXVwKTtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGV2ZW50VGFyZ2V0LCAnbW91c2V1cCcsIHRoaXMuY2FsbGJhY2tNb3VzZXVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgbmFtZSB0byBhIEhUTUxFbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIHRoZSBjbGFzcyBuYW1lLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFVdGlsLmNvbnRhaW5zQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBIVE1MRWxlbWVudCBjb250YWlucyBhIGNlcnRhaW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSB0aGUgSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzTmFtZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIEhUTUxFbGVtZW50IGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLiBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjb250YWluc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwgfHwgISgnY2xhc3NOYW1lJyBpbiBlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICAgIGZvciAobGV0IGkgPSBjdXJyZW50Q2xhc3Nlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzW2ldID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGNlcnRhaW4gY2xhc3MgZm9yIGEgSFRNTEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSB0aGUgSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzIG5hbWUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lID0gJyc7XG4gICAgY29uc3QgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjbGFzc2VzW2ldICE9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3Q2xhc3NOYW1lICs9IGAke2NsYXNzZXNbaV19IGA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lLnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBvbGQgeG1sIGluaXRpYWwgdGV4dCBhdHRyaWJ1dGUgKHdpdGggwqvCuykgdG8gdGhlIGNvcnJlY3Qgb25lKHdpdGggwqdsdDvCp2d0OykuIEl0J3NcbiAgICogdXNlZCB0byBwYXJzZSBvbGQgYXBwbGV0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBzdHJpbmcgY29udGFpbmluZyBzYWZlWG1sIGNoYXJhY3RlcnNcbiAgICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgd2l0aCBzYWZlWG1sIGNoYXJhY3RlcnMgcGFyc2VkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY29udmVydE9sZFhtbGluaXRpYWx0ZXh0QXR0cmlidXRlKHRleHQpIHtcbiAgICAvLyBVc2VkIHRvIGZpeCBhIGJ1ZyB3aXRoIENhcyBpbXBvcnRlZCBmcm9tIE1vb2RsZSAxLjkgdG8gTW9vZGxlIDIueC5cbiAgICAvLyBUaGlzIGNvdWxkIGJlIHJlbW92ZWQgaW4gZnV0dXJlLlxuICAgIGNvbnN0IHZhbCA9ICd2YWx1ZT0nO1xuXG4gICAgY29uc3QgeGl0cG9zID0gdGV4dC5pbmRleE9mKCd4bWxpbml0aWFsdGV4dCcpO1xuICAgIGNvbnN0IHZhbHBvcyA9IHRleHQuaW5kZXhPZih2YWwsIHhpdHBvcyk7XG4gICAgY29uc3QgcXVvdGUgPSB0ZXh0LmNoYXJBdCh2YWxwb3MgKyB2YWwubGVuZ3RoKTtcbiAgICBjb25zdCBzdGFydHF1b3RlID0gdmFscG9zICsgdmFsLmxlbmd0aCArIDE7XG4gICAgY29uc3QgZW5kcXVvdGUgPSB0ZXh0LmluZGV4T2YocXVvdGUsIHN0YXJ0cXVvdGUpO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0LnN1YnN0cmluZyhzdGFydHF1b3RlLCBlbmRxdW90ZSk7XG5cbiAgICBsZXQgbmV3dmFsdWUgPSB2YWx1ZS5zcGxpdCgnwqsnKS5qb2luKCfCp2x0OycpO1xuICAgIG5ld3ZhbHVlID0gbmV3dmFsdWUuc3BsaXQoJ8K7Jykuam9pbignwqdndDsnKTtcbiAgICBuZXd2YWx1ZSA9IG5ld3ZhbHVlLnNwbGl0KCcmJykuam9pbignwqcnKTtcbiAgICBuZXd2YWx1ZSA9IG5ld3ZhbHVlLnNwbGl0KCfCqCcpLmpvaW4oJ8KncXVvdDsnKTtcblxuICAgIHRleHQgPSB0ZXh0LnNwbGl0KHZhbHVlKS5qb2luKG5ld3ZhbHVlKTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1icm93c2VyIHNvbHV0aW9uIGZvciBjcmVhdGluZyBuZXcgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gdGFnIG5hbWUgb2YgdGhlIHdpc2hlZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtIGFuIG9iamVjdCB3aGVyZSBlYWNoIGtleSBpcyBhIHdpc2hlZFxuICAgKiBhdHRyaWJ1dGUgbmFtZSBhbmQgZWFjaCB2YWx1ZSBpcyBpdHMgdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3JlYXRvcl0gLSBpZiBzdXBwbGllZCwgdGhpcyBmdW5jdGlvbiB3aWxsIHVzZVxuICAgKiB0aGUgXCJjcmVhdGVFbGVtZW50XCIgbWV0aG9kIGZyb20gdGhpcyBwYXJhbS4gT3RoZXJ3aXNlXG4gICAqIGRvY3VtZW50IHdpbGwgYmUgdXNlZCBhcyBjcmVhdG9yLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFzc2lnbmVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjcmVhdG9yKSB7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXR0cmlidXRlcyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChjcmVhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNyZWF0b3IgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBsZXQgZWxlbWVudDtcblxuICAgIC8qXG4gICAgKiBJbnRlcm5ldCBFeHBsb3JlciBmaXg6XG4gICAgKiBJZiB5b3UgY3JlYXRlIGEgbmV3IG9iamVjdCBkeW5hbWljYWxseSwgeW91IGNhbid0IHNldCBhIG5vbi1zdGFuZGFyZCBhdHRyaWJ1dGUuXG4gICAgKiBGb3IgZXhhbXBsZSwgeW91IGNhbid0IHNldCB0aGUgXCJzcmNcIiBhdHRyaWJ1dGUgb24gYW4gXCJhcHBsZXRcIiBvYmplY3QuXG4gICAgKiBPdGhlciBicm93c2VycyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBhbmQgd2lsbCBydW4gdGhlIHN0YW5kYXJkIGNvZGUuXG4gICAgKi9cbiAgICB0cnkge1xuICAgICAgbGV0IGh0bWwgPSBgPCR7dGFnTmFtZX1gO1xuXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGh0bWwgKz0gYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHtVdGlsLmh0bWxFbnRpdGllcyhhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKX1cImA7XG4gICAgICB9KTtcbiAgICAgIGh0bWwgKz0gJz4nO1xuICAgICAgZWxlbWVudCA9IGNyZWF0b3IuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbGVtZW50ID0gY3JlYXRvci5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG5ldyBIVE1MIGZyb20gaXQncyBIVE1MIGNvZGUgYXMgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0Q29kZSAtIGh0bWwgY29kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU9iamVjdChvYmplY3RDb2RlLCBjcmVhdG9yKSB7XG4gICAgaWYgKGNyZWF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3JlYXRvciA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIGNhbid0IGluY2x1ZGUgXCJwYXJhbVwiIHRhZyB3aGVuIGlzIHNldHRpbmcgYW4gaW5uZXJIVE1MIHByb3BlcnR5LlxuICAgIG9iamVjdENvZGUgPSBvYmplY3RDb2RlLnNwbGl0KCc8YXBwbGV0ICcpLmpvaW4oJzxzcGFuIHdpcmlzT2JqZWN0PVwiV2lyaXNBcHBsZXRcIiAnKS5zcGxpdCgnPEFQUExFVCAnKS5qb2luKCc8c3BhbiB3aXJpc09iamVjdD1cIldpcmlzQXBwbGV0XCIgJyk7IC8vIEl0IGlzIGEgJ3NwYW4nIGJlY2F1c2UgJ3NwYW4nIG9iamVjdHMgY2FuIGNvbnRhaW4gJ2JyJyBub2Rlcy5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPC9hcHBsZXQ+Jykuam9pbignPC9zcGFuPicpLnNwbGl0KCc8L0FQUExFVD4nKS5qb2luKCc8L3NwYW4+Jyk7XG5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPHBhcmFtICcpLmpvaW4oJzxiciB3aXJpc09iamVjdD1cIldpcmlzUGFyYW1cIiAnKS5zcGxpdCgnPFBBUkFNICcpLmpvaW4oJzxiciB3aXJpc09iamVjdD1cIldpcmlzUGFyYW1cIiAnKTsgLy8gSXQgaXMgYSAnYnInIGJlY2F1c2UgJ2JyJyBjYW4ndCBjb250YWluIG5vZGVzLlxuICAgIG9iamVjdENvZGUgPSBvYmplY3RDb2RlLnNwbGl0KCc8L3BhcmFtPicpLmpvaW4oJzwvYnI+Jykuc3BsaXQoJzwvUEFSQU0+Jykuam9pbignPC9icj4nKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIGNyZWF0b3IpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBvYmplY3RDb2RlO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlUGFyYW1zRml4KG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdC5nZXRBdHRyaWJ1dGUgJiYgb2JqZWN0LmdldEF0dHJpYnV0ZSgnd2lyaXNPYmplY3QnKSA9PT0gJ1dpcmlzUGFyYW0nKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNQYXJzZWQgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKG9iamVjdC5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1BhcnNlZFtvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlTmFtZV0gPSBvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW0gPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJywgYXR0cmlidXRlc1BhcnNlZCwgY3JlYXRvcik7XG5cbiAgICAgICAgLy8gSUUgZml4LlxuICAgICAgICBpZiAocGFyYW0uTkFNRSkge1xuICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5OQU1FO1xuICAgICAgICAgIHBhcmFtLnZhbHVlID0gcGFyYW0uVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbS5yZW1vdmVBdHRyaWJ1dGUoJ3dpcmlzT2JqZWN0Jyk7XG4gICAgICAgIG9iamVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwYXJhbSwgb2JqZWN0KTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmdldEF0dHJpYnV0ZSAmJiBvYmplY3QuZ2V0QXR0cmlidXRlKCd3aXJpc09iamVjdCcpID09PSAnV2lyaXNBcHBsZXQnKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNQYXJzZWQgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKG9iamVjdC5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1BhcnNlZFtvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlTmFtZV0gPSBvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXBwbGV0ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdhcHBsZXQnLCBhdHRyaWJ1dGVzUGFyc2VkLCBjcmVhdG9yKTtcbiAgICAgICAgYXBwbGV0LnJlbW92ZUF0dHJpYnV0ZSgnd2lyaXNPYmplY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgcmVjdXJzaXZlUGFyYW1zRml4KG9iamVjdC5jaGlsZE5vZGVzW2ldKTtcblxuICAgICAgICAgIGlmIChvYmplY3QuY2hpbGROb2Rlc1tpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICBhcHBsZXQuYXBwZW5kQ2hpbGQob2JqZWN0LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgaSAtPSAxOyAvLyBXaGVuIHdlIGluc2VydCB0aGUgb2JqZWN0IGNoaWxkIGludG8gdGhlIGFwcGxldCwgb2JqZWN0IGxvc2VzIG9uZSBjaGlsZC5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYXBwbGV0LCBvYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJlY3Vyc2l2ZVBhcmFtc0ZpeChvYmplY3QuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVQYXJhbXNGaXgoY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gRWxlbWVudCB0byBpdHMgSFRNTCBjb2RlLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBlbnRyeSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBIVE1MIGNvZGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVPYmplY3RDb2RlKGVsZW1lbnQpIHtcbiAgICAvLyBJbiBjYXNlIHRoYXQgdGhlIGltYWdlIHdhcyBub3QgY3JlYXRlZCwgdGhlIG9iamVjdCBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCBlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkgeyAvLyBFTEVNRU5UX05PREUuXG4gICAgICBsZXQgb3V0cHV0ID0gYDwke2VsZW1lbnQudGFnTmFtZX1gO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5hdHRyaWJ1dGVzW2ldLnNwZWNpZmllZCkge1xuICAgICAgICAgIG91dHB1dCArPSBgICR7ZWxlbWVudC5hdHRyaWJ1dGVzW2ldLm5hbWV9PVwiJHtVdGlsLmh0bWxFbnRpdGllcyhlbGVtZW50LmF0dHJpYnV0ZXNbaV0udmFsdWUpfVwiYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3V0cHV0ICs9ICc+JztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG91dHB1dCArPSBVdGlsLmNyZWF0ZU9iamVjdChlbGVtZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0ICs9IGA8LyR7ZWxlbWVudC50YWdOYW1lfT5gO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnRElWJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICBvdXRwdXQgKz0gYD48LyR7ZWxlbWVudC50YWdOYW1lfT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9ICcvPic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgcmV0dXJuIFV0aWwuaHRtbEVudGl0aWVzKGVsZW1lbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIHR3byBVUkwgcGF0aHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoMSAtIGZpcnN0IFVSTCBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoMiAtIHNlY29uZCBVUkwgcGF0aFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBuZXcgVVJMLlxuICAgKi9cbiAgc3RhdGljIGNvbmNhdGVuYXRlVXJsKHBhdGgxLCBwYXRoMikge1xuICAgIGxldCBzZXBhcmF0b3IgPSAnJztcbiAgICBpZiAoKHBhdGgxLmluZGV4T2YoJy8nKSAhPT0gcGF0aDEubGVuZ3RoKSAmJiAocGF0aDIuaW5kZXhPZignLycpICE9PSAwKSkge1xuICAgICAgc2VwYXJhdG9yID0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gKHBhdGgxICsgc2VwYXJhdG9yICsgcGF0aDIpLnJlcGxhY2UoLyhbXjpdXFwvKVxcLysvZywgJyQxJyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGEgdGV4dCBhbmQgcmVwbGFjZXMgYWxsIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzIGJ5IHRoZWlyIGNvcnJlc3BvbmRlbnQgZW50aXRpZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHRleHQgdG8gYmUgcGFyc2VkLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgaW5wdXQgdGV4dCB3aXRoIGFsbCB0aGVpciBzcGVjaWFsIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlaXIgZW50aXRpZXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBodG1sRW50aXRpZXMoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoJyYnKS5qb2luKCcmYW1wOycpLnNwbGl0KCc8Jykuam9pbignJmx0OycpXG4gICAgICAuc3BsaXQoJz4nKVxuICAgICAgLmpvaW4oJyZndDsnKVxuICAgICAgLnNwbGl0KCdcIicpXG4gICAgICAuam9pbignJnF1b3Q7Jyk7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgSFRNTCB0byBwcmV2ZW50IFhTUyBpbmplY3Rpb25zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIGh0bWwgdG8gYmUgc2FuaXRpemUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGh0bWwgc2FuaXRpemVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaHRtbFNhbml0aXplKGh0bWwpIHtcbiAgICBsZXQgYW5ub3RhdGlvblJlZ2V4ID0gL1xcPGFubm90YXRpb24uK1xcPFxcL2Fubm90YXRpb25cXD4vXG4gICAgLy8gR2V0IGFsbCB0aGUgYW5ub3RhdGlvbiBjb250ZW50IGluY2x1ZGluZyB0aGUgdGFncy5cbiAgICBsZXQgYW5ub3RhdGlvbiA9IGh0bWwubWF0Y2goYW5ub3RhdGlvblJlZ2V4KTtcbiAgICAvLyBTYW5pdGl6ZSBodG1sIGNvZGUgd2l0aG91dCByZW1vdmluZyB0aGUgPHNlbWFudGljcz4gYW5kIDxhbm5vdGF0aW9uPiB0YWdzLlxuICAgIGh0bWwgPSBET01QdXJpZnkuc2FuaXRpemUoaHRtbCwgeyBBRERfVEFHUzogWydzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbiddLCBBTExPV0VEX0FUVFI6IFsnbWF0aHZhcmlhbnQnLCAnY2xhc3MnLCAnbGluZWJyZWFrJywgJ29wZW4nLCAnY2xvc2UnXX0pO1xuICAgIC8vIFJlYWRkIG9sZCBhbm5vdGF0aW9uIGNvbnRlbnQuXG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZShhbm5vdGF0aW9uUmVnZXgsIGFubm90YXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhIHRleHQgYW5kIHJlcGxhY2VzIGFsbCB0aGUgSFRNTCBlbnRpdGllcyBieSB0aGVpciBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgLSB0ZXh0IHRvIGJlIHBhcnNlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgaW5wdXQgdGV4dCB3aXRoIGFsbCB0aGVpciBlbnRpdGllcyByZXBsYWNlZCBieSBjaGFyYWN0ZXJzLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaHRtbEVudGl0aWVzRGVjb2RlKGlucHV0KSB7XG4gICAgLy8gVGV4dGFyZWEgZWxlbWVudCBkZWNvZGVzIHdoZW4gaW5uZXIgaHRtbCBpcyBzZXQuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLmlubmVySFRNTCA9IGlucHV0O1xuICAgIHJldHVybiB0ZXh0YXJlYS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY3Jvc3MtYnJvd3NlciBodHRwIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge29iamVjdH0gaHR0cFJlcXVlc3QgcmVxdWVzdCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdHxBY3RpdmVYT2JqZWN0fSB0aGUgcHJvcGVyIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkuc3Vic3RyKDAsIHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICBpZiAoY3VycmVudFBhdGguc3Vic3RyKDAsIDcpID09PSAnZmlsZTovLycpIHtcbiAgICAgIHRocm93IFN0cmluZ01hbmFnZXIuZ2V0KCdleGNlcHRpb25fY3Jvc3Nfc2l0ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgICB9IGNhdGNoIChvYykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBoYXNoIHRvIGEgSFRUUCBxdWVyeS5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gcHJvcGVydGllcyAtIGEga2V5L3ZhbHVlIG9iamVjdC5cbiAgICogQHJldHVybnMge3N0cmluZ30gYSBIVFRQIHF1ZXJ5IGNvbnRhaW5pbmcgYWxsIHRoZSBrZXkgdmFsdWUgcGFpcnMgd2l0aFxuICAgKiBhbGwgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGVpciBlbnRpdGllcy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGh0dHBCdWlsZFF1ZXJ5KHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpZiAocHJvcGVydGllc1tpXSAhPSBudWxsKSB7XG4gICAgICAgIHJlc3VsdCArPSBgJHtVdGlsLnVybEVuY29kZShpKX09JHtVdGlsLnVybEVuY29kZShwcm9wZXJ0aWVzW2ldKX0mYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERlbGV0aW5nIGxhc3QgJyYnIGVtcHR5IGNoYXJhY3Rlci5cbiAgICBpZiAocmVzdWx0LnN1YnN0cmluZyhyZXN1bHQubGVuZ3RoIC0gMSkgPT09ICcmJykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgaGFzaCB0byBzdHJpbmcgc29ydGluZyBrZXlzIHRvIGdldCBhIGRldGVybWluaXN0aWMgb3V0cHV0XG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGhhc2ggLSBhIGtleS92YWx1ZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHdpdGggdGhlIGZvcm0ga2V5MT12YWx1ZTEuLi5rZXluPXZhbHVlblxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcHJvcGVydGllc1RvU3RyaW5nKGhhc2gpIHtcbiAgICAvLyAxLiBTb3J0IGtleXMuIFdlIHNvcnQgdGhlIGtleXMgYmVjYXVzZSB3ZSB3YW50IGEgZGV0ZXJtaW5pc3RpYyBvdXRwdXQuXG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGhhc2gpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoYXNoLCBrZXkpKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbiA9IGtleXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgczEgPSBrZXlzW2ldO1xuICAgICAgICBjb25zdCBzMiA9IGtleXNbal07XG4gICAgICAgIGlmIChVdGlsLmNvbXBhcmVTdHJpbmdzKHMxLCBzMikgPiAwKSB7XG4gICAgICAgICAgLy8gU3dhcC5cbiAgICAgICAgICBrZXlzW2ldID0gczI7XG4gICAgICAgICAga2V5c1tqXSA9IHMxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gR2VuZXJhdGUgb3V0cHV0LlxuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIG91dHB1dCArPSBrZXk7XG4gICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgbGV0IHZhbHVlID0gaGFzaFtrZXldO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCdcXFxcJywgJ1xcXFxcXFxcJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJ1xcbicsICdcXFxcbicpO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCdcXHInLCAnXFxcXHInKTtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFx0JywgJ1xcXFx0Jyk7XG5cbiAgICAgIG91dHB1dCArPSB2YWx1ZTtcbiAgICAgIG91dHB1dCArPSAnXFxuJztcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIHR3byBzdHJpbmdzIHVzaW5nIGNoYXJDb2RlQXQgbWV0aG9kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhIC0gZmlyc3Qgc3RyaW5nIHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiIC0gc2Vjb25kIHN0cmluZyB0byBjb21wYXJlLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNvbXBhcmVTdHJpbmdzKGEsIGIpIHtcbiAgICBsZXQgaTtcbiAgICBjb25zdCBhbiA9IGEubGVuZ3RoO1xuICAgIGNvbnN0IGJuID0gYi5sZW5ndGg7XG4gICAgY29uc3QgbiA9IChhbiA+IGJuKSA/IGJuIDogYW47XG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgY29uc3QgYyA9IFV0aWwuZml4ZWRDaGFyQ29kZUF0KGEsIGkpIC0gVXRpbC5maXhlZENoYXJDb2RlQXQoYiwgaSk7XG4gICAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogRml4IGNoYXJDb2RlQXQoKSBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRvIGhhbmRsZSBub24tQmFzaWMtTXVsdGlsaW5ndWFsLVBsYW5lIGNoYXJhY3RlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBpbnB1dCBzdHJpbmdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCAtIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDBcbiAgICogYW5kIGxlc3MgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmdcbiAgICogQHJldHVybnMge251bWJlcn0gYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIFVURi0xNiBjb2RlIG9mIHRoZSBzdHJpbmcgYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZml4ZWRDaGFyQ29kZUF0KHN0cmluZywgaWR4KSB7XG4gICAgaWR4ID0gaWR4IHx8IDA7XG4gICAgY29uc3QgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGlkeCk7XG4gICAgbGV0IGhpO1xuICAgIGxldCBsb3c7XG5cbiAgICAvKiBIaWdoIHN1cnJvZ2F0ZSAoY291bGQgY2hhbmdlIGxhc3QgaGV4IHRvIDB4REI3RiB0byB0cmVhdCBoaWdoXG4gICAgcHJpdmF0ZSBzdXJyb2dhdGVzIGFzIHNpbmdsZSBjaGFyYWN0ZXJzKSAqL1xuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhEQkZGKSB7XG4gICAgICBoaSA9IGNvZGU7XG4gICAgICBsb3cgPSBzdHJpbmcuY2hhckNvZGVBdChpZHggKyAxKTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4obG93KSkge1xuICAgICAgICB0aHJvdyBTdHJpbmdNYW5hZ2VyLmdldCgnZXhjZXB0aW9uX2hpZ2hfc3Vycm9nYXRlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKChoaSAtIDB4RDgwMCkgKiAweDQwMCkgKyAobG93IC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEQzAwICYmIGNvZGUgPD0gMHhERkZGKSB7IC8vIExvdyBzdXJyb2dhdGUuXG4gICAgICAvKiBXZSByZXR1cm4gZmFsc2UgdG8gYWxsb3cgbG9vcHMgdG8gc2tpcCB0aGlzIGl0ZXJhdGlvbiBzaW5jZSBzaG91bGQgaGF2ZVxuICAgICAgYWxyZWFkeSBoYW5kbGVkIGhpZ2ggc3Vycm9nYXRlIGFib3ZlIGluIHRoZSBwcmV2aW91cyBpdGVyYXRpb24uICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gVVJMIHdpdGggaXQncyBxdWVyeSBwYXJhbXMgY29udmVydGVkIGludG8gYXJyYXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBpbnB1dCBVUkwuXG4gICAqIEByZXR1cm5zIHtPYmplY3RbXX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgVVJMIHF1ZXJ5IHBhcmFtcy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHVybFRvQXNzQXJyYXkodXJsKSB7XG4gICAgbGV0IGk7XG4gICAgaSA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHVybC5zdWJzdHJpbmcoaSArIDEpO1xuICAgICAgY29uc3Qgc3MgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgY29uc3QgaCA9IHt9O1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHMgPSBzc1tpXTtcbiAgICAgICAgY29uc3Qga3YgPSBzLnNwbGl0KCc9Jyk7XG4gICAgICAgIGlmIChrdi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgaFtrdlswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoa3ZbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaDtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZW5jb2RlZCBVUkwgYnkgcmVwbGFjaW5nIGVhY2ggaW5zdGFuY2Ugb2YgY2VydGFpbiBjaGFyYWN0ZXJzIGJ5XG4gICAqIG9uZSwgdHdvLCB0aHJlZSBvciBmb3VyIGVzY2FwZSBzZXF1ZW5jZXMgdXNpbmcgZW5jb2RlVVJJQ29tcG9uZW50IG1ldGhvZC5cbiAgICogIScoKSogLiB3aWxsIG5vdCBiZSBlbmNvZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xlYXJTdHJpbmcgLSBVUkwgc3RyaW5nIHRvIGJlIGVuY29kZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gVVJMIHdpdGggaXQncyBzcGVjaWFsIGNoYXJhY3RlcnMgcmVwbGFjZWQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cmxFbmNvZGUoY2xlYXJTdHJpbmcpIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgLy8gTWV0aG9kIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IGVuY29kZSAhJygpKn4gLlxuICAgIG91dHB1dCA9IGVuY29kZVVSSUNvbXBvbmVudChjbGVhclN0cmluZyk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8vIFRPRE86IFRvIHBhcnNlcj9cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBIVE1MIG9mIGEgaW1hZ2UgaW50byB0aGUgb3V0cHV0IGNvZGUgdGhhdCBXSVJJUyBtdXN0IHJldHVybi5cbiAgICogQnkgZGVmYXVsdCByZXR1cm5zIHRoZSBNYXRoTUwgc3RvcmVkIG9uIGRhdGEtbWFobWwgYXR0cmlidXRlIChpZiBpbWdDb2RlIGlzIGEgZm9ybXVsYSlcbiAgICogb3IgdGhlIFdpcmlzY2FzIGF0dHJpYnV0ZSBvZiBhIFdJUklTIGFwcGxldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGltZ0NvZGUgLSB0aGUgaHRtbCBjb2RlIGZyb20gYSBmb3JtdWxhIG9yIGEgQ0FTIGltYWdlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbnZlcnRUb1htbCAtIHRydWUgaWYgdGhlIGltYWdlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gWE1MLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbnZlcnRUb1NhZmVYbWwgLSB0cnVlIGlmIHRoZSBpbWFnZSBzaG91bGQgYmUgY29udmVydGVkIHRvIHNhZmVYTUwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBYTUwgb3Igc2FmZVhNTCBvZiBhIFdJUklTIGltYWdlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0V0lSSVNJbWFnZU91dHB1dChpbWdDb2RlLCBjb252ZXJ0VG9YbWwsIGNvbnZlcnRUb1NhZmVYbWwpIHtcbiAgICBjb25zdCBpbWdPYmplY3QgPSBVdGlsLmNyZWF0ZU9iamVjdChpbWdDb2RlKTtcbiAgICBpZiAoaW1nT2JqZWN0KSB7XG4gICAgICBpZiAoaW1nT2JqZWN0LmNsYXNzTmFtZSA9PT0gQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlQ2xhc3NOYW1lJykgfHwgaW1nT2JqZWN0LmdldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSkpIHtcbiAgICAgICAgaWYgKCFjb252ZXJ0VG9YbWwpIHtcbiAgICAgICAgICByZXR1cm4gaW1nQ29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGFNYXRoTUwgPSBpbWdPYmplY3QuZ2V0QXR0cmlidXRlKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZU1hdGhtbEF0dHJpYnV0ZScpKTtcbiAgICAgICAgLy8gVG8gaGFuZGxlIGFubm90YXRpb25zLCBmaXJzdCB3ZSBuZWVkIHRoZSBNYXRoTUwgaW4gWE1MLlxuICAgICAgICBsZXQgbWF0aE1MID0gTWF0aE1MLnNhZmVYbWxEZWNvZGUoZGF0YU1hdGhNTCk7XG5cbiAgICAgICAgaWYgKCFDb25maWd1cmF0aW9uLmdldCgnc2F2ZUhhbmRUcmFjZXMnKSkge1xuICAgICAgICAgIG1hdGhNTCA9IE1hdGhNTC5yZW1vdmVBbm5vdGF0aW9uKG1hdGhNTCwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRoTUwgPT0gbnVsbCkge1xuICAgICAgICAgIG1hdGhNTCA9IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnZlcnRUb1NhZmVYbWwpIHtcbiAgICAgICAgICBjb25zdCBzYWZlTWF0aE1MID0gTWF0aE1MLnNhZmVYbWxFbmNvZGUobWF0aE1MKTtcbiAgICAgICAgICByZXR1cm4gc2FmZU1hdGhNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRoTUw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWdDb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG5vZGUgbGVuZ3RoIGluIGNoYXJhY3RlcnMuXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIEhUTUwgbm9kZS5cbiAgICogQHJldHVybnMge251bWJlcn0gbm9kZSBsZW5ndGguXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXROb2RlTGVuZ3RoKG5vZGUpIHtcbiAgICBjb25zdCBzdGF0aWNOb2RlTGVuZ3RocyA9IHtcbiAgICAgIElNRzogMSxcbiAgICAgIEJSOiAxLFxuICAgIH07XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICByZXR1cm4gbm9kZS5ub2RlVmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7IC8vIEVMRU1FTlRfTk9ERS5cbiAgICAgIGxldCBsZW5ndGggPSBzdGF0aWNOb2RlTGVuZ3Roc1tub2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCldO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbGVuZ3RoICs9IFV0aWwuZ2V0Tm9kZUxlbmd0aChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHNlbGVjdGVkIG5vZGUgb3IgdGV4dCBmcm9tIGFuIGVkaXRhYmxlIEhUTUxFbGVtZW50LlxuICAgKiBJZiB0aGUgY2FyZXQgaXMgb24gYSB0ZXh0IG5vZGUsIGNvbmNhdGVuYXRlcyBpdCB3aXRoIGFsbCB0aGUgcHJldmlvdXMgYW5kIG5leHQgdGV4dCBub2Rlcy5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gdGhlIGVkaXRhYmxlIEhUTUxFbGVtZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSWZyYW1lICAtIHNwZWNpZmllcyBpZiB0aGUgdGFyZ2V0IGlzIGFuIGlmcmFtZSBvciBub3RcbiAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZUdldFNlbGVjdGlvbiAtIGlmIHRydWUsIGlnbm9yZXMgSUUgc3lzdGVtIHRvIGdldFxuICAgKiB0aGUgY3VycmVudCBzZWxlY3Rpb24gYW5kIHVzZXMgd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGFuIG9iamVjdCB3aXRoIHRoZSAnbm9kZScga2V5IHNldCBpZiB0aGUgaXRlbSBpcyBhblxuICAgKiBlbGVtZW50IG9yIHRoZSBrZXlzICdub2RlJyBhbmQgJ2NhcmV0UG9zaXRpb24nIGlmIHRoZSBlbGVtZW50IGlzIHRleHQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRTZWxlY3RlZEl0ZW0odGFyZ2V0LCBpc0lmcmFtZSwgZm9yY2VHZXRTZWxlY3Rpb24pIHtcbiAgICBsZXQgd2luZG93VGFyZ2V0O1xuXG4gICAgaWYgKGlzSWZyYW1lKSB7XG4gICAgICB3aW5kb3dUYXJnZXQgPSB0YXJnZXQuY29udGVudFdpbmRvdztcbiAgICAgIHdpbmRvd1RhcmdldC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3dUYXJnZXQgPSB3aW5kb3c7XG4gICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmICFmb3JjZUdldFNlbGVjdGlvbikge1xuICAgICAgY29uc3QgcmFuZ2UgPSB3aW5kb3dUYXJnZXQuZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgIGlmIChyYW5nZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChyYW5nZS5odG1sVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHJhbmdlLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbC5nZXRTZWxlY3RlZEl0ZW0odGFyZ2V0LCBpc0lmcmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3dUYXJnZXQuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0luc2VydEltYWdlJywgZmFsc2UsICcjJyk7XG4gICAgICAgIGxldCB0ZW1wb3JhbE9iamVjdCA9IHJhbmdlLnBhcmVudEVsZW1lbnQoKTtcblxuICAgICAgICBpZiAodGVtcG9yYWxPYmplY3Qubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0lNRycpIHtcbiAgICAgICAgICAvLyBJRTkgZml4OiBwYXJlbnRFbGVtZW50KCkgZG9lcyBub3QgcmV0dXJuIHRoZSBJTUcgbm9kZSxcbiAgICAgICAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgRElWIG5vZGUuIEluIElFIDwgOSwgcGFzdGVIVE1MIGRvZXMgbm90IHdvcmsgd2VsbC5cbiAgICAgICAgICByYW5nZS5wYXN0ZUhUTUwoJzxzcGFuIGlkPVwid3JzX29wZW5FZGl0b3JXaW5kb3dfdGVtcG9yYWxPYmplY3RcIj48L3NwYW4+Jyk7XG4gICAgICAgICAgdGVtcG9yYWxPYmplY3QgPSB3aW5kb3dUYXJnZXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyc19vcGVuRWRpdG9yV2luZG93X3RlbXBvcmFsT2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IGNhcmV0UG9zaXRpb247XG5cbiAgICAgICAgaWYgKHRlbXBvcmFsT2JqZWN0Lm5leHRTaWJsaW5nICYmIHRlbXBvcmFsT2JqZWN0Lm5leHRTaWJsaW5nLm5vZGVUeXBlID09PSAzKSB7IC8vIFRFWFRfTk9ERS5cbiAgICAgICAgICBub2RlID0gdGVtcG9yYWxPYmplY3QubmV4dFNpYmxpbmc7XG4gICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcG9yYWxPYmplY3QucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgJiYgdGVtcG9yYWxPYmplY3QucHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgbm9kZSA9IHRlbXBvcmFsT2JqZWN0LnByZXZpb3VzU2libGluZztcbiAgICAgICAgICBjYXJldFBvc2l0aW9uID0gbm9kZS5ub2RlVmFsdWUubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUgPSB3aW5kb3dUYXJnZXQuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgIHRlbXBvcmFsT2JqZWN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRlbXBvcmFsT2JqZWN0KTtcbiAgICAgICAgICBjYXJldFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBvcmFsT2JqZWN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcG9yYWxPYmplY3QpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBjYXJldFBvc2l0aW9uLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2UubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogcmFuZ2UuaXRlbSgwKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvd1RhcmdldC5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIGxldCByYW5nZTtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvd1RhcmdldC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmFuZ2UgPSB3aW5kb3dUYXJnZXQuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBjYXJldFBvc2l0aW9uOiByYW5nZS5zdGFydE9mZnNldCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgIT09IHJhbmdlLmVuZENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHsgLy8gRUxFTUVOVF9OT0RFLlxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dKSB7XG5cbiAgICAgICAgICAvLyBJbiBjYXNlIHRoYXQgYSBmb3JtdWxhIGlzIGRldGVjdGVkIGJ1dCBub3Qgc2VsZWN0ZWQsXG4gICAgICAgICAgLy8gd2UgY3JlYXRlIGFuIGVtcHR5IHNwYW4gd2hlcmUgd2UgY291bGQgaW5zZXJ0IHRoZSBuZXcgZm9ybXVsYS5cbiAgICAgICAgICBpZiAocmFuZ2Uuc3RhcnRPZmZzZXQgPT09IHJhbmdlLmVuZE9mZnNldCkge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAwICYmIG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbiAtIDFdLmxvY2FsTmFtZSA9PT0gJ3NwYW4nICYmIG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdXaXJpc2Zvcm11bGEnKSkge1xuICAgICAgICAgICAgICBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb24gLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZ2V0U2VsZWN0ZWRJdGVtKHRhcmdldCwgaXNJZnJhbWUsIGZvcmNlR2V0U2VsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbl0uY2xhc3NMaXN0Py5jb250YWlucygnV2lyaXNmb3JtdWxhJykpIHtcbiAgICAgICAgICAgICAgaWYgKChwb3NpdGlvbiA+IDAgJiYgbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdXaXJpc2Zvcm11bGEnKSkgfHwgcG9zaXRpb24gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVtcHR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbXB0eVNwYW4sIG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBub2RlOiBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZTogbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBudWxsIGlmIHRoZXJlIGlzbid0IGFueSBpdGVtIG9yIGlmIGl0IGlzIG1hbGZvcm1lZC5cbiAgICogT3RoZXJ3aXNlIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5vZGUgd2l0aCB0aGUgTWF0aE1MIGltYWdlXG4gICAqIGFuZCB0aGUgY3Vyc29yIHBvc2l0aW9uIGluc2lkZSB0aGUgdGV4dGFyZWEuXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dGFyZWEgLSB0ZXh0YXJlYSBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbm9kZSwgdGhlIGluZGV4IG9mIHRoZVxuICAgKiBiZWdpbm5pbmcgIG9mIHRoZSBzZWxlY3RlZCB0ZXh0LCBjYXJldCBwb3NpdGlvbiBhbmQgdGhlIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gb2YgdGhlXG4gICAqIHRleHQgbm9kZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldFNlbGVjdGVkSXRlbU9uVGV4dGFyZWEodGV4dGFyZWEpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRhcmVhLnZhbHVlKTtcbiAgICBjb25zdCB0ZXh0Tm9kZVZhbHVlcyA9IExhdGV4LmdldExhdGV4RnJvbVRleHROb2RlKHRleHROb2RlLCB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCk7XG4gICAgaWYgKHRleHROb2RlVmFsdWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICBjYXJldFBvc2l0aW9uOiB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCxcbiAgICAgIHN0YXJ0UG9zaXRpb246IHRleHROb2RlVmFsdWVzLnN0YXJ0UG9zaXRpb24sXG4gICAgICBlbmRQb3NpdGlvbjogdGV4dE5vZGVWYWx1ZXMuZW5kUG9zaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyBmb3IgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gbmFtZSBpbiBhIEhUTUwgY29kZSBzdHJpbmcuXG4gICAqIEltcG9ydGFudDogdGhpcyBmdW5jdGlvbiBpcyB2ZXJ5IGNvbmNyZXRlIGZvciBXSVJJUyBjb2RlLlxuICAgKiBJdCB0YWtlcyBhcyBwcmVjb25kaXRpb25zIGxvdHMgb2YgYmVoYXZpb3JzIHRoYXQgYXJlIG5vdCB0aGUgZ2VuZXJhbCBjYXNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtICBIVE1MIGNvZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gZWxlbWVudCBuYW1lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9DbG9zZWQgLSB0cnVlIGlmIHRoZSBlbGVtZW50cyBhcmUgYXV0b0Nsb3NlZC5cbiAgICogQHJldHVybiB7T2JqZWN0W119IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBIVE1MIGVsZW1lbnRzIG9mIGNvZGUgbWF0Y2hpbmcgdGhlIG5hbWUgYXJndW1lbnQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRFbGVtZW50c0J5TmFtZUZyb21TdHJpbmcoY29kZSwgbmFtZSwgYXV0b0Nsb3NlZCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgY29kZSA9IGNvZGUudG9Mb3dlckNhc2UoKTtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBzdGFydCA9IGNvZGUuaW5kZXhPZihgPCR7bmFtZX0gYCk7XG5cbiAgICB3aGlsZSAoc3RhcnQgIT09IC0xKSB7IC8vIExvb2sgZm9yIG5vZGVzLlxuICAgICAgbGV0IGVuZFN0cmluZztcblxuICAgICAgaWYgKGF1dG9DbG9zZWQpIHtcbiAgICAgICAgZW5kU3RyaW5nID0gJz4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kU3RyaW5nID0gYDwvJHtuYW1lfT5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW5kID0gY29kZS5pbmRleE9mKGVuZFN0cmluZywgc3RhcnQpO1xuXG4gICAgICBpZiAoZW5kICE9PSAtMSkge1xuICAgICAgICBlbmQgKz0gZW5kU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgZWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZW5kLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IHN0YXJ0ICsgMTtcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBjb2RlLmluZGV4T2YoYDwke25hbWV9IGAsIGVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNlNjQgY2hhcmFjdGVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNoYXJhY3RlciAtIGJhc2U2NCBjaGFyYWN0ZXIuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGJhc2U2NCBjaGFyYWN0ZXIgbnVtZXJpYyB2YWx1ZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGRlY29kZTY0KGNoYXJhY3Rlcikge1xuICAgIGNvbnN0IFBMVVMgPSAnKycuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBTTEFTSCA9ICcvJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IExPV0VSID0gJ2EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgVVBQRVIgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgU0xBU0hfVVJMX1NBRkUgPSAnXycuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBjb2RlID0gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICBpZiAoY29kZSA9PT0gUExVUyB8fCBjb2RlID09PSBQTFVTX1VSTF9TQUZFKSB7XG4gICAgICByZXR1cm4gNjI7IC8vIENoYXIgJysnLlxuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gU0xBU0ggfHwgY29kZSA9PT0gU0xBU0hfVVJMX1NBRkUpIHtcbiAgICAgIHJldHVybiA2MzsgLy8gQ2hhciAnLycuXG4gICAgfVxuICAgIGlmIChjb2RlIDwgTlVNQkVSKSB7XG4gICAgICByZXR1cm4gLTE7IC8vIE5vIG1hdGNoLlxuICAgIH1cbiAgICBpZiAoY29kZSA8IE5VTUJFUiArIDEwKSB7XG4gICAgICByZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjY7XG4gICAgfVxuICAgIGlmIChjb2RlIDwgVVBQRVIgKyAyNikge1xuICAgICAgcmV0dXJuIGNvZGUgLSBVUFBFUjtcbiAgICB9XG4gICAgaWYgKGNvZGUgPCBMT1dFUiArIDI2KSB7XG4gICAgICByZXR1cm4gY29kZSAtIExPV0VSICsgMjY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBiYXNlNjQgc3RyaW5nIHRvIGEgYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiNjRTdHJpbmcgLSBiYXNlNjQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gZGltZW5zaW9uIG9mIGJ5dGUgYXJyYXkgKGJ5IGRlZmF1bHQgd2hvbGUgc3RyaW5nKS5cbiAgICogQHJldHVybiB7T2JqZWN0W119IHRoZSByZXN1bHRhbnQgYnl0ZSBhcnJheS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGI2NFRvQnl0ZUFycmF5KGI2NFN0cmluZywgbGVuZ3RoKSB7XG4gICAgbGV0IHRtcDtcblxuICAgIGlmIChiNjRTdHJpbmcubGVuZ3RoICUgNCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpOyAvLyBUaXBwZWQgYmFzZTY0LiBMZW5ndGggaXMgZml4ZWQuXG4gICAgfVxuXG4gICAgY29uc3QgYXJyID0gW107XG5cbiAgICBsZXQgbDtcbiAgICBsZXQgcGxhY2VIb2xkZXJzO1xuICAgIGlmICghbGVuZ3RoKSB7IC8vIEFsbCBiNjRTdHJpbmcgc3RyaW5nLlxuICAgICAgaWYgKGI2NFN0cmluZy5jaGFyQXQoYjY0U3RyaW5nLmxlbmd0aCAtIDIpID09PSAnPScpIHtcbiAgICAgICAgcGxhY2VIb2xkZXJzID0gMjtcbiAgICAgIH0gZWxzZSBpZiAoYjY0U3RyaW5nLmNoYXJBdChiNjRTdHJpbmcubGVuZ3RoIC0gMSkgPT09ICc9Jykge1xuICAgICAgICBwbGFjZUhvbGRlcnMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VIb2xkZXJzID0gMDtcbiAgICAgIH1cbiAgICAgIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0U3RyaW5nLmxlbmd0aCAtIDQgOiBiNjRTdHJpbmcubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpICs9IDQpIHtcbiAgICAgIC8vIElnbm9yaW5nIGNvZGUgY2hlY2tlciBzdGFuZGFyZHMgKGJpdGV3aXNlIG9wZXJhdG9ycykuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly90cmFja2VyLm1vb2RsZS5vcmcvYnJvd3NlL0NPTlRSSUItNTg2MiBmb3IgZnVydGhlciBpbmZvcm1hdGlvbi5cbiAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVTdGFydFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgIHRtcCA9IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSkpIDw8IDE4KSB8IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDMpKTtcblxuICAgICAgYXJyLnB1c2goKHRtcCA+PiAxNikgJiAweEZGKTtcbiAgICAgIGFyci5wdXNoKCh0bXAgPj4gOCkgJiAweEZGKTtcbiAgICAgIGFyci5wdXNoKHRtcCAmIDB4RkYpO1xuICAgICAgLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZUVuZFxuICAgIH1cblxuICAgIGlmIChwbGFjZUhvbGRlcnMpIHtcbiAgICAgIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICAgICAgLy8gSWdub3JpbmcgY29kZSBjaGVja2VyIHN0YW5kYXJkcyAoYml0ZXdpc2Ugb3BlcmF0b3JzKS5cbiAgICAgICAgLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZVN0YXJ0XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHRtcCA9IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSkpIDw8IDIpIHwgKFV0aWwuZGVjb2RlNjQoYjY0U3RyaW5nLmNoYXJBdChpICsgMSkpID4+IDQpO1xuICAgICAgICBhcnIucHVzaCh0bXAgJiAweEZGKTtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHRtcCA9IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSkpIDw8IDEwKSB8IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDIpKSA+PiAyKTtcbiAgICAgICAgYXJyLnB1c2goKHRtcCA+PiA4KSAmIDB4RkYpO1xuICAgICAgICBhcnIucHVzaCh0bXAgJiAweEZGKTtcbiAgICAgICAgLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZUVuZFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IDMyLWJpdCBzaWduZWQgaW50ZWdlciBmcm9tIGEgYnl0ZSBhcnJheS5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gYnl0ZXMgLSBhcnJheSBvZiBieXRlcy5cbiAgICogQHJldHVybnMge251bWJlcn0gdGhlIDMyLWJpdCBzaWduZWQgaW50ZWdlci5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlYWRJbnQzMihieXRlcykge1xuICAgIGlmIChieXRlcy5sZW5ndGggPCA0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGludDMyID0gYnl0ZXMuc3BsaWNlKDAsIDQpO1xuICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVTdGFydMKhXG4gICAgcmV0dXJuIChpbnQzMlswXSA8PCAyNCB8IGludDMyWzFdIDw8IDE2IHwgaW50MzJbMl0gPDwgOCB8IGludDMyWzNdIDw8IDApO1xuICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBmaXJzdCBieXRlIGZyb20gYSBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gYnl0ZXMgLSBpbnB1dCBieXRlIGFycmF5LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBmaXJzdCBieXRlIG9mIHRoZSBieXRlIGFycmF5LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcmVhZEJ5dGUoYnl0ZXMpIHtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlU3RhcnRcbiAgICByZXR1cm4gYnl0ZXMuc2hpZnQoKSA8PCAwO1xuICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGFuIGFyYml0cmFyeSBudW1iZXIgb2YgYnl0ZXMsIGZyb20gYSBmaXhlZCBwb3NpdGlvbiBvbiBhIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSAge09iamVjdFtdfSBieXRlcyAtIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSAge251bWJlcn0gcG9zIC0gc3RhcnQgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge251bWJlcn0gbGVuIC0gbnVtYmVyIG9mIGJ5dGVzIHRvIHJlYWQuXG4gICAqIEByZXR1cm5zIHtPYmplY3RbXX0gdGhlIGJ5dGUgYXJyYXkuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZWFkQnl0ZXMoYnl0ZXMsIHBvcywgbGVuKSB7XG4gICAgcmV0dXJuIGJ5dGVzLnNwbGljZShwb3MsIGxlbik7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyBvciBtb2RpZmllcyBmb3JtdWxhcyBvciBDQVMgb24gYSB0ZXh0YXJlYS5cbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0YXJlYSAtIHRleHRhcmVhIHRhcmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIGFkZCBpbiB0aGUgdGV4dGFyZWEuIEZvciBleGFtcGxlLCB0byBhZGQgdGhlIGxpbmsgdG8gdGhlIGltYWdlLFxuICAgKiBjYWxsIHRoaXMgZnVuY3Rpb24gYXMgKHRleHRhcmVhLCBQYXJzZXIuY3JlYXRlSW1hZ2VTcmMobWF0aG1sKSk7XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cGRhdGVUZXh0QXJlYSh0ZXh0YXJlYSwgdGV4dCkge1xuICAgIGlmICh0ZXh0YXJlYSAmJiB0ZXh0KSB7XG4gICAgICB0ZXh0YXJlYS5mb2N1cygpO1xuXG4gICAgICBpZiAodGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGlvbkVuZCB9ID0gdGV4dGFyZWE7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKDAsIHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRW5kU3ViID0gdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKHNlbGVjdGlvbkVuZCwgdGV4dGFyZWEudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBzZWxlY3Rpb25TdGFydCArIHRleHQgKyBzZWxlY3Rpb25FbmRTdWI7XG4gICAgICAgIHRleHRhcmVhLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZCArIHRleHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHNlbGVjdGlvbi50ZXh0ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZpZXMgZXhpc3RpbmcgZm9ybXVsYSBvbiBhIHRleHRhcmVhLlxuICAgKiBAcGFyYW0ge0hUTUxUZXh0QXJlYUVsZW1lbnR9IHRleHRhcmVhIC0gdGV4dCBhcmVhIHRhcmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIGFkZCBpbiB0aGUgdGV4dGFyZWEuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byBhZGQgdGhlIGxpbmtcbiAgICogdG8gdGhlIGltYWdlLHlvdSBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uIGFzXG4gICAqIFV0aWwudXBkYXRlVGV4dGFyZWEodGV4dGFyZWEsIFBhcnNlci5jcmVhdGVJbWFnZVNyYyhtYXRobWwpKTtcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gYmVnaW5uaW5nIGluZGV4IGZyb20gdGV4dGFyZWEgd2hlcmUgaXQgbmVlZHMgdG8gYmUgcmVwbGFjZWQgYnkgdGV4dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAtIGVuZGluZyBpbmRleCBmcm9tIHRleHRhcmVhIHdoZXJlIGl0IG5lZWRzIHRvIGJlIHJlcGxhY2VkIGJ5IHRleHRcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHVwZGF0ZUV4aXN0aW5nVGV4dE9uVGV4dGFyZWEodGV4dGFyZWEsIHRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICAgIGNvbnN0IHRleHRhcmVhU3RhcnQgPSB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpO1xuICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWFTdGFydCArIHRleHQgKyB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoZW5kLCB0ZXh0YXJlYS52YWx1ZS5sZW5ndGgpO1xuICAgIHRleHRhcmVhLnNlbGVjdGlvbkVuZCA9IHN0YXJ0ICsgdGV4dC5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcGFyYW1ldGVyIHdpdGggaXQncyBjb3JyZXNwb25kZW50IHZhbHVlIHRvIGFuIFVSTCAoR0VUKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBVUkwgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyIC0gcGFyYW1ldGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBhZGRBcmd1bWVudChwYXRoLCBwYXJhbWV0ZXIsIHZhbHVlKSB7XG4gICAgbGV0IHNlcDtcbiAgICBpZiAocGF0aC5pbmRleE9mKCc/JykgPiAwKSB7XG4gICAgICBzZXAgPSAnJic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcCA9ICc/JztcbiAgICB9XG4gICAgcmV0dXJuIGAke3BhdGggKyBzZXAgKyBwYXJhbWV0ZXJ9PSR7dmFsdWV9YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJUZXh0Q2FjaGUiLCJTZXJ2aWNlUHJvdmlkZXIiLCJNYXRoTUwiLCJTdHJpbmdNYW5hZ2VyIiwiQWNjZXNzaWJpbGl0eSIsImNhY2hlIiwiX2NhY2hlIiwidmFsdWUiLCJtYXRoTUxUb0FjY2Vzc2libGUiLCJtYXRoTUwiLCJsYW5ndWFnZSIsImRhdGEiLCJjb250YWluQ2xhc3MiLCJtb2RlIiwiaWdub3JlU3R5bGVzIiwiYWNjZXNzaWJsZVRleHQiLCJnZXQiLCJzZXJ2aWNlIiwibGFuZyIsImFjY2Vzc2libGVKc29uUmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJnZXRTZXJ2aWNlIiwic3RhdHVzIiwicmVzdWx0IiwidGV4dCIsInBvcHVsYXRlIiwiQ29uZmlndXJhdGlvbiIsImFkZENvbmZpZ3VyYXRpb24iLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiX3Byb3BlcnRpZXMiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzZXQiLCJ1cGRhdGUiLCJwcm9wZXJ0eVZhbHVlIiwidXBkYXRlUHJvcGVydHkiLCJDb25zdGFudHMiLCJzYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzIiwidGFnT3BlbmVyIiwidGFnQ2xvc2VyIiwiZG91YmxlUXVvdGUiLCJyZWFsRG91YmxlUXVvdGUiLCJzYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnMiLCJsdEVsZW1lbnQiLCJndEVsZW1lbnQiLCJhbXBFbGVtZW50Iiwic2FmZUdvb2RCbGFja2JvYXJkQ2hhcmFjdGVycyIsInhtbENoYXJhY3RlcnMiLCJpZCIsImFtcGVyc2FuZCIsInF1b3RlIiwic2FmZVhtbENoYXJhY3RlcnMiLCJVdGlsIiwiSW1hZ2UiLCJyZW1vdmVJbWdEYXRhQXR0cmlidXRlcyIsImltZyIsImF0dHJpYnV0ZXNUb1JlbW92ZSIsImF0dHJpYnV0ZXMiLCJrZXlzIiwiZm9yRWFjaCIsImF0dHJpYnV0ZSIsInVuZGVmaW5lZCIsIm5hbWUiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUF0dHJpYnV0ZSIsImNsb25lIiwib3JpZ2luSW1nIiwiZGVzdEltZyIsImN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJtYXRobWxBdHRyaWJ1dGVOYW1lIiwiaW1nQXR0cmlidXRlcyIsIml0ZXJhdG9yIiwib3JpZ2luQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2V0SW1nU2l6ZSIsInVyaSIsImpzb25SZXNwb25zZSIsImFyIiwiYmFzZTY0U3RyaW5nIiwiYnl0ZXMiLCJzdmdTdHJpbmciLCJnZXRNZXRyaWNzRnJvbVN2Z1N0cmluZyIsInNyYyIsInN1YnN0ciIsImxlbmd0aCIsImI2NFRvQnl0ZUFycmF5IiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImdldE1ldHJpY3NGcm9tQnl0ZXMiLCJ1cmxUb0Fzc0FycmF5Iiwid2lkdGgiLCJjdyIsImhlaWdodCIsImNoIiwiYmFzZWxpbmUiLCJjYiIsImRwaSIsInN0eWxlIiwidmVydGljYWxBbGlnbiIsImZpeEFmdGVyUmVzaXplIiwibWF4V2lkdGgiLCJwcm9jZXNzSW1nIiwic3Vic3RyaW5nIiwid2luZG93IiwiYXRvYiIsImVuY29kZWRTdmdTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdmciLCJkZWNvZGVVUklDb21wb25lbnQiLCJiYXNlNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmV0Y2giLCJ0aGVuIiwiciIsImJsb2IiLCJyZWFkQXNEYXRhVVJMIiwiZmlyc3QiLCJsYXN0IiwiYXJyIiwicmVhZEJ5dGVzIiwidHlwIiwicmVhZEludDMyIiwicmVhZEJ5dGUiLCJNYXRoIiwicm91bmQiLCJMYXRleCIsImdldExhdGV4RnJvbU1hdGhNTCIsIm1hdGhtbCIsIm1hdGhtbFdpdGhvdXRTZW1hbnRpY3MiLCJyZW1vdmVTZW1hbnRpY3MiLCJtbWwiLCJsYXRleCIsImxhdGV4SHRtbEVudGl0aWVzRW5jb2RlZCIsImh0bWxFbnRpdGllcyIsIm1hdGhtbFdpdGhTZW1hbnRpY3MiLCJhZGRBbm5vdGF0aW9uIiwiZ2V0TWF0aE1MRnJvbUxhdGV4IiwiaW5jbHVkZUxhdGV4T25TZW1hbnRpY3MiLCJsYXRleENhY2hlIiwic2F2ZUxhdGV4Iiwib3V0cHV0Iiwic3BsaXQiLCJqb2luIiwiY29udGVudCIsInBhcnNlTWF0aG1sVG9MYXRleCIsImNoYXJhY3RlcnMiLCJtYXRoVGFnQmVnaW4iLCJtYXRoVGFnRW5kIiwib3BlblRhcmdldCIsImNsb3NlVGFyZ2V0Iiwic3RhcnQiLCJlbmQiLCJzdGFydEFubm90YXRpb24iLCJjbG9zZUFubm90YXRpb24iLCJzYWZlWG1sRGVjb2RlIiwiZ2V0TGF0ZXhGcm9tVGV4dE5vZGUiLCJ0ZXh0Tm9kZSIsImNhcmV0UG9zaXRpb24iLCJsYXRleFRhZ3MiLCJkZWZhdWx0TGF0ZXhUYWdzIiwib3BlbiIsImNsb3NlIiwic3RhcnROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJnZXROZXh0TGF0ZXhQb3NpdGlvbiIsImN1cnJlbnROb2RlIiwiY3VycmVudFBvc2l0aW9uIiwidGFnIiwicG9zaXRpb24iLCJub2RlVmFsdWUiLCJuZXh0U2libGluZyIsIm5vZGUiLCJpc1ByZXZpb3VzIiwiZW5kTm9kZSIsImVuZFBvc2l0aW9uIiwidGFnTGVuZ3RoIiwiaW5kZXgiLCJzdGFydFBvc2l0aW9uIiwiTGlzdGVuZXJzIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJhZGQiLCJsaXN0ZW5lciIsImZpcmUiLCJldmVudE5hbWUiLCJldmVudCIsImNhbmNlbGxlZCIsImNhbGxiYWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm5ld0xpc3RlbmVyIiwiaXNNYXRobWxJbkF0dHJpYnV0ZSIsIm1hdGhBdHQiLCJhdHRDb250ZW50IiwiYXR0IiwiYXR0cyIsInJlZ2V4IiwiZXhwcmVzc2lvbiIsIlJlZ0V4cCIsImFjdHVhbENvbnRlbnQiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJleGlzdHMiLCJ0ZXN0IiwiaW5wdXQiLCJfd3JzX2JsYWNrYm9hcmQiLCJyZXR1cm5WYWx1ZSIsImN1cnJlbnRFbnRpdHkiLCJjaGFyYWN0ZXIiLCJjaGFyQXQiLCJtYXRjaCIsInNhZmVYbWxFbmNvZGUiLCJtYXRoTUxFbnRpdGllcyIsInRvUmV0dXJuIiwiY29kZVBvaW50QXQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJmaXhlZENoYXJDb2RlQXQiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImFkZEN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlIiwiY3VzdG9tRWRpdG9yIiwicmVtb3ZlQ3VzdG9tRWRpdG9yQ2xhc3NBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYW5ub3RhdGlvbkVuY29kaW5nIiwiY29udGFpbnNBbm5vdGF0aW9uIiwibWF0aG1sV2l0aEFubm90YXRpb24iLCJjbG9zZVNlbWFudGljc0luZGV4IiwiaXNFbXB0eSIsImVuZEluZGV4SW5saW5lIiwiZW5kSW5kZXhOb25JbmxpbmUiLCJlbmRJbmRleCIsImJlZ2luTWF0aE1MQ29udGVudCIsImVuZE1hdGhtbENvbnRlbnQiLCJsYXN0SW5kZXhPZiIsIm1hdGhtbENvbnRlbnQiLCJyZW1vdmVBbm5vdGF0aW9uIiwibWF0aG1sV2l0aG91dEFubm90YXRpb24iLCJvcGVuQW5ub3RhdGlvblRhZyIsImNsb3NlQW5ub3RhdGlvblRhZyIsInN0YXJ0QW5ub3RhdGlvbkluZGV4IiwiZGlmZmVyZW50QW5ub3RhdGlvbkZvdW5kIiwiZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4IiwiY2xvc2VJbmRleCIsImVuZEFubm90YXRpb25JbmRleCIsInN0YXJ0SW5kZXgiLCJzZW1hbnRpY3NTdGFydGluZ1RhZ1JlZ2V4Iiwic2VtYW50aWNzRW5kaW5nVGFnUmVnZXgiLCJyZW1vdmVTZW1hbnRpY3NPY3VycmVuY2VzIiwibWF0aFRhZ1N0YXJ0IiwibWF0aFRhZ0VuZGxpbmUiLCJzZW1hbnRpY3NUYWdTdGFydCIsImFubm90YXRpb25UYWdTdGFydCIsIm1hdGhUYWdFbmRJbmRleCIsIm1hdGhUYWdFbmRsaW5lSW5kZXgiLCJmaXJzdFRhZ0Nsb3NlciIsInNlbWFudGljc0luZGV4IiwibW1sVGFnU3RhcnQiLCJhbm5vdGF0aW9uSW5kZXgiLCJtbWxDb250ZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NJbmRleCIsImNsYXNzVGFnRW5kSW5kZXgiLCJjbGFzc1RhZyIsImNsb3NlVGFnIiwiY2xvc2VUYWdJbmxpbmUiLCJmaXJzdENsb3NlVGFnSW5kZXgiLCJmaXJzdENsb3NlVGFnSW5saW5lSW5kZXgiLCJlbXB0eSIsIm1hdGhUYWdFbmRSZWdleCIsIm1hdGhUYWdFbmRBcnJheSIsImV4ZWMiLCJlbmNvZGVQcm9wZXJ0aWVzIiwicmVwbGFjZXIiLCJxdW90ZUluZGV4IiwicHJvcGVydHlWYWx1ZUVuY29kZWQiLCJtYXRjaEVuY29kZWQiLCJtYXRobWxFbmNvZGVkIiwibWQ1IiwiSHhPdmVycmlkZXMiLCJfX25hbWVfXyIsImRhdGVTdHIiLCJkYXRlIiwibSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtaSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImdldEZ1bGxZZWFyIiwic3RyRGF0ZSIsImsiLCJEYXRlIiwic2V0VGltZSIsInNldFVUQ0hvdXJzIiwic2V0VVRDTWludXRlcyIsInNldFVUQ1NlY29uZHMiLCJ5IiwidCIsImNjYSIsIngiLCJjaGFyQ29kZUF0IiwicG9zIiwibGVuIiwicmVtb3ZlIiwiYSIsIm9iaiIsImwiLCJzcGxpY2UiLCJpdGVyIiwiY3VyIiwiaGFzTmV4dCIsIm5leHQiLCJJbnRJdGVyIiwibWluIiwibWF4IiwiX19jbGFzc19fIiwiU3RkIiwidiIsImpzIiwiQm9vdCIsIl9faW5zdGFuY2VvZiIsInN0cmluZyIsIl9fc3RyaW5nX3JlYyIsInBhcnNlSW50IiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmFuZG9tIiwiZmxvb3IiLCJjb20iLCJ3aXJpcyIsIkpzUGx1Z2luVG9vbHMiLCJ0cnlSZWFkeSIsIm1haW4iLCJldiIsImdldEluc3RhbmNlIiwiaGF4ZSIsIlRpbWVyIiwiZGVsYXkiLCIkYmluZCIsImluc3RhbmNlIiwiYnlwYXNzRW5jYXBzdWxhdGlvbiIsIm1kNWVuY29kZSIsIk1kNSIsImVuY29kZSIsImRvTG9hZCIsInJlYWR5IiwiTGliIiwicmVhZHlTdGF0ZSIsIkxvZyIsInRyYWNlIiwiaW5mb3MiLCJfX3RyYWNlIiwiY2xlYXIiLCJfX2NsZWFyX3RyYWNlIiwiZG9FbmNvZGUiLCJzdHIiLCJzdHIyYmxrcyIsImIiLCJjIiwic3RlcCIsIm9sZGEiLCJvbGRiIiwib2xkYyIsIm9sZGQiLCJmZiIsImdnIiwiaGgiLCJpaSIsImFkZG1lIiwicmhleCIsImNtbiIsImJpdFhPUiIsImJpdE9SIiwiYml0QU5EIiwicSIsInJvbCIsIm51bSIsImNudCIsIm5ibGsiLCJibGtzIiwiQXJyYXkiLCJfZzEiLCJfZyIsImhleF9jaHIiLCJqIiwibHN3IiwibXN3IiwibHNiIiwibXNiMzEiLCJ0aW1lX21zIiwibWUiLCJzZXRJbnRlcnZhbCIsInJ1biIsImYiLCJzdG9wIiwibWVhc3VyZSIsInQwIiwic3RhbXAiLCJnZXRUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIl9fdW5odG1sIiwibXNnIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaXNDbGFzcyIsIm8iLCJpc0VudW0iLCJlIiwiX19lbmFtZV9fIiwiZ2V0Q2xhc3MiLCJfX2VudW1fXyIsImkxIiwidG9zdHIiLCJ0b1N0cmluZyIsInMyIiwiaGFzcCIsIl9faW50ZXJmTG9vcCIsImNjIiwiY2wiLCJpbnRmIiwiX19pbnRlcmZhY2VzX18iLCJfX3N1cGVyX18iLCJJbnQiLCJjZWlsIiwiRmxvYXQiLCJCb29sIiwiRHluYW1pYyIsIkNsYXNzIiwiRW51bSIsIl9fY2FzdCIsImRlYnVnIiwiYWxlcnQiLCJldmFsIiwiY29kZSIsInNldEVycm9ySGFuZGxlciIsIm9uZXJyb3IiLCIkXyIsIm1ldGhvZCIsImFwcGx5Iiwic2NvcGUiLCJhcmd1bWVudHMiLCJOYU4iLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsIlBPU0lUSVZFX0lORklOSVRZIiwiaXNGaW5pdGUiLCJCb29sZWFuIiwiVm9pZCIsInVybCIsImxpbmUiLCJQYXJzZXIiLCJtYXRobWxUb0ltZ09iamVjdCIsImNyZWF0b3IiLCJ3aXJpc1Byb3BlcnRpZXMiLCJpbWdPYmplY3QiLCJhbGlnbiIsIndpcmlzRWRpdG9yUHJvcGVydGllcyIsIm1ldHJpY3MiLCJjZW50ZXJiYXNlbGluZSIsIm1hdGhtbFN1YnN0cmluZyIsImNyZWF0ZVNob3dJbWFnZVNyYyIsImZvcm1hdCIsInVybEVuY29kZSIsImFsdCIsImNyZWF0ZUltYWdlU3JjIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwiYmFzZVBhcnRzIiwiZ2V0U2VydmljZVBhdGgiLCJwb3AiLCJpbml0UGFyc2UiLCJpbml0UGFyc2VTYXZlTW9kZSIsImluaXRQYXJzZUVkaXRNb2RlIiwicGFyc2VNYXRobWxUb0ltZyIsImNvZGVJbWdUcmFuc2Zvcm0iLCJpbWdMaXN0IiwiZ2V0RWxlbWVudHNCeU5hbWVGcm9tU3RyaW5nIiwidG9rZW4iLCJjYXJyeSIsImltZ0NvZGUiLCJtYXRobWxTdGFydFRva2VuIiwibWF0aG1sU3RhcnQiLCJtYXRobWxFbmQiLCJodG1sU2FuaXRpemUiLCJsYXRleFN0YXJ0UG9zaXRpb24iLCJsYXRleEVuZFBvc2l0aW9uIiwicmVwbGFjZVRleHQiLCJodG1sRW50aXRpZXNEZWNvZGUiLCJlbmRQYXJzZSIsImNvZGVFbmRQYXJzZWRFZGl0TW9kZSIsImVuZFBhcnNlRWRpdE1vZGUiLCJjb2RlRW5kUGFyc2VTYXZlTW9kZSIsImVuZFBhcnNlU2F2ZU1vZGUiLCJkZWNvZGVkTGF0ZXgiLCJjcmVhdGVTaG93SW1hZ2VTcmNEYXRhIiwiZGF0YU1kNSIsInJlbmRlclBhcmFtcyIsInBhcmFtIiwiZGF0YU9iamVjdCIsImZvcm11bGEiLCJwcm9wZXJ0aWVzVG9TdHJpbmciLCJ2ZXJzaW9uIiwiaHR0cEJ1aWxkUXVlcnkiLCJwYXR0ZXJuIiwicGF0dGVybkxlbmd0aCIsInNvdXJjZSIsImxhc3RJbmRleCIsImNoYXJhY3Rlck5leHRQb3NpdGlvbiIsImNyZWF0ZU9iamVjdCIsInhtbENvZGUiLCJjb252ZXJ0VG9YbWwiLCJjb252ZXJ0VG9TYWZlWG1sIiwiY3JlYXRlT2JqZWN0Q29kZSIsImdldFdJUklTSW1hZ2VPdXRwdXQiLCJpbWFnZU1hdGhtbEF0cnJpYnV0ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJvbGRWYWx1ZSIsImF0dHJpYnV0ZU5hbWUiLCJ0YXJnZXQiLCJjcmVhdGUiLCJDb25maWciLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImdldFByb3RvdHlwZU9mIiwiX2xpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiZmlyZUV2ZW50IiwicGFyYW1ldGVycyIsIl9wYXJhbWV0ZXJzIiwic2VydmljZVBhdGhzIiwiX3NlcnZpY2VQYXRocyIsInNldFNlcnZpY2VQYXRoIiwicGF0aCIsInNlcnZpY2VOYW1lIiwiaW50ZWdyYXRpb25QYXRoIiwiX2ludGVncmF0aW9uUGF0aCIsImdldFNlcnZlclVSTCIsImxvY2F0aW9uIiwiaHJlZiIsImluaXQiLCJjb25maWd1cmF0aW9uVVJJIiwiY3JlYXRlU2VydmljZVVSSSIsImNyZWF0ZUltYWdlVVJJIiwic2hvd0ltYWdlVVJJIiwiZ2V0TWF0aE1MVVJJIiwic2VydmljZVVSSSIsIlVSSSIsInNlcnZlclBhdGgiLCJnZXRVcmwiLCJwb3N0VmFyaWFibGVzIiwiY3VycmVudFBhdGgiLCJodHRwUmVxdWVzdCIsImNyZWF0ZUh0dHBSZXF1ZXN0IiwiaGVhZGVyIiwibWFwIiwiZWxlbWVudCIsInRyaW0iLCJ2YWwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwiZ2V0VmFyaWFibGVzIiwic2VydmljZVVybCIsImdldFNlcnZlckxhbmd1YWdlRnJvbVNlcnZpY2UiLCJleHRlbnNpb24iLCJzZXJ2ZXJFeHRlbnNpb24iLCJjb25jYXRlbmF0ZVVybCIsInNlcnZlciIsInRyYW5zbGF0aW9ucyIsIkVycm9yIiwic2xpY2UiLCJzdHJpbmdzIiwid2FybiIsIkRPTVB1cmlmeSIsImV2ZW50VGFyZ2V0IiwiY3JlYXRlRXZlbnQiLCJldmVudE9iamVjdCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImFkZEV2ZW50IiwiY2FsbEJhY2tGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiYWRkRWxlbWVudEV2ZW50cyIsImRvdWJsZUNsaWNrSGFuZGxlciIsIm1vdXNlZG93bkhhbmRsZXIiLCJtb3VzZXVwSGFuZGxlciIsImNhbGxiYWNrRGJsY2xpY2siLCJyZWFsRXZlbnQiLCJzcmNFbGVtZW50IiwiY2FsbGJhY2tNb3VzZWRvd24iLCJjYWxsYmFja01vdXNldXAiLCJyZW1vdmVFbGVtZW50RXZlbnRzIiwiYWRkQ2xhc3MiLCJjb250YWluc0NsYXNzIiwiY3VycmVudENsYXNzZXMiLCJyZW1vdmVDbGFzcyIsIm5ld0NsYXNzTmFtZSIsImNsYXNzZXMiLCJjb252ZXJ0T2xkWG1saW5pdGlhbHRleHRBdHRyaWJ1dGUiLCJ4aXRwb3MiLCJ2YWxwb3MiLCJzdGFydHF1b3RlIiwiZW5kcXVvdGUiLCJuZXd2YWx1ZSIsInRhZ05hbWUiLCJodG1sIiwib2JqZWN0Q29kZSIsInJlY3Vyc2l2ZVBhcmFtc0ZpeCIsIm9iamVjdCIsImF0dHJpYnV0ZXNQYXJzZWQiLCJub2RlTmFtZSIsIk5BTUUiLCJWQUxVRSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJhcHBsZXQiLCJjaGlsZE5vZGVzIiwidG9Mb3dlckNhc2UiLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJzcGVjaWZpZWQiLCJwYXRoMSIsInBhdGgyIiwic2VwYXJhdG9yIiwiYW5ub3RhdGlvblJlZ2V4IiwiYW5ub3RhdGlvbiIsInNhbml0aXplIiwiQUREX1RBR1MiLCJBTExPV0VEX0FUVFIiLCJ0ZXh0YXJlYSIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsIm9jIiwiaGFzaCIsIm4iLCJzMSIsImNvbXBhcmVTdHJpbmdzIiwiYW4iLCJibiIsImlkeCIsImhpIiwibG93IiwicXVlcnkiLCJzcyIsImt2IiwiY2xlYXJTdHJpbmciLCJkYXRhTWF0aE1MIiwic2FmZU1hdGhNTCIsImdldE5vZGVMZW5ndGgiLCJzdGF0aWNOb2RlTGVuZ3RocyIsIklNRyIsIkJSIiwidG9VcHBlckNhc2UiLCJnZXRTZWxlY3RlZEl0ZW0iLCJpc0lmcmFtZSIsImZvcmNlR2V0U2VsZWN0aW9uIiwid2luZG93VGFyZ2V0IiwiY29udGVudFdpbmRvdyIsImZvY3VzIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInBhcmVudEVsZW1lbnQiLCJodG1sVGV4dCIsImV4ZWNDb21tYW5kIiwidGVtcG9yYWxPYmplY3QiLCJwYXN0ZUhUTUwiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiaXRlbSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydENvbnRhaW5lciIsInN0YXJ0T2Zmc2V0IiwiZW5kQ29udGFpbmVyIiwiZW5kT2Zmc2V0IiwibG9jYWxOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbXB0eVNwYW4iLCJnZXRTZWxlY3RlZEl0ZW1PblRleHRhcmVhIiwidGV4dE5vZGVWYWx1ZXMiLCJzZWxlY3Rpb25TdGFydCIsImF1dG9DbG9zZWQiLCJlbGVtZW50cyIsImVuZFN0cmluZyIsImRlY29kZTY0IiwiUExVUyIsIlNMQVNIIiwiTlVNQkVSIiwiTE9XRVIiLCJVUFBFUiIsIlBMVVNfVVJMX1NBRkUiLCJTTEFTSF9VUkxfU0FGRSIsImI2NFN0cmluZyIsInRtcCIsInBsYWNlSG9sZGVycyIsImludDMyIiwic2hpZnQiLCJ1cGRhdGVUZXh0QXJlYSIsInNlbGVjdGlvbkVuZCIsInNlbGVjdGlvbkVuZFN1YiIsInVwZGF0ZUV4aXN0aW5nVGV4dE9uVGV4dGFyZWEiLCJ0ZXh0YXJlYVN0YXJ0IiwiYWRkQXJndW1lbnQiLCJwYXJhbWV0ZXIiLCJzZXAiXSwic291cmNlUm9vdCI6IiJ9