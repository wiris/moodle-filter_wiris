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
                        var _this = this;
                        return __generator(this, function (_a) {
                            properties.render();
                            new MutationObserver(function (mutationList, observer) { return __awaiter(_this, void 0, void 0, function () {
                                var mutationList_1, mutationList_1_1, mutation, _a, _b, node, e_1_1, e_2_1;
                                var e_2, _c, e_1, _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _e.trys.push([0, 11, 12, 13]);
                                            mutationList_1 = __values(mutationList), mutationList_1_1 = mutationList_1.next();
                                            _e.label = 1;
                                        case 1:
                                            if (!!mutationList_1_1.done) return [3, 10];
                                            mutation = mutationList_1_1.value;
                                            _e.label = 2;
                                        case 2:
                                            _e.trys.push([2, 7, 8, 9]);
                                            _a = (e_1 = void 0, __values(mutation.addedNodes)), _b = _a.next();
                                            _e.label = 3;
                                        case 3:
                                            if (!!_b.done) return [3, 6];
                                            node = _b.value;
                                            if (!(node instanceof HTMLElement)) return [3, 5];
                                            return [4, properties.render()];
                                        case 4:
                                            _e.sent();
                                            _e.label = 5;
                                        case 5:
                                            _b = _a.next();
                                            return [3, 3];
                                        case 6: return [3, 9];
                                        case 7:
                                            e_1_1 = _e.sent();
                                            e_1 = { error: e_1_1 };
                                            return [3, 9];
                                        case 8:
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                            return [7];
                                        case 9:
                                            mutationList_1_1 = mutationList_1.next();
                                            return [3, 1];
                                        case 10: return [3, 13];
                                        case 11:
                                            e_2_1 = _e.sent();
                                            e_2 = { error: e_2_1 };
                                            return [3, 13];
                                        case 12:
                                            try {
                                                if (mutationList_1_1 && !mutationList_1_1.done && (_c = mutationList_1.return)) _c.call(mutationList_1);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                            return [7];
                                        case 13: return [2];
                                    }
                                });
                            }); })
                                .observe(document, {
                                attributes: true,
                                childList: true,
                                subtree: true,
                            });
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
exports.renderMathML = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
function renderMathML(properties, root) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, mathElement, mml, result, url, img, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (properties.viewer !== 'image' && properties.viewer !== 'mathml') {
                        return [2];
                    }
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
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
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
      ALLOWED_ATTR: ['mathvariant', 'class', 'linebreak']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNB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QUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsT0FBT2tvQixXQUFXQSxDQUFDbkwsSUFBSSxFQUFFb0wsU0FBUyxFQUFFeHRCLEtBQUssRUFBRTtJQUN6QyxJQUFJeXRCLEdBQUc7SUFDUCxJQUFJckwsSUFBSSxDQUFDdmUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUN6QjRwQixHQUFHLEdBQUcsR0FBRztJQUNYLENBQUMsTUFBTTtNQUNMQSxHQUFHLEdBQUcsR0FBRztJQUNYO0lBQ0EsT0FBUSxHQUFFckwsSUFBSSxHQUFHcUwsR0FBRyxHQUFHRCxTQUFVLElBQUd4dEIsS0FBTSxFQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL2xhdGV4LnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvbWF0aG1sLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvcHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL3JldHJvLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvc2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvYWNjZXNzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvY29uZmlndXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvbGF0ZXguanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvbWF0aG1sLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9tZDUuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvc2VydmljZXByb3ZpZGVyLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9zdHJpbmdtYW5hZ2VyLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy90ZXh0Y2FjaGUuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBAbGljZW5zZSBET01QdXJpZnkgMi40LjcgfCAoYykgQ3VyZTUzIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIGxpY2Vuc2UgMi4wIGFuZCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIDIuMCB8IGdpdGh1Yi5jb20vY3VyZTUzL0RPTVB1cmlmeS9ibG9iLzIuNC43L0xJQ0VOU0UgKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuRE9NUHVyaWZ5ID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfSwgX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgaWYgKCFvKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHksXG4gICAgICBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZixcbiAgICAgIGlzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuLFxuICAgICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgZnJlZXplID0gT2JqZWN0LmZyZWV6ZSxcbiAgICAgIHNlYWwgPSBPYmplY3Quc2VhbCxcbiAgICAgIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QsXG4gICAgICBhcHBseSA9IF9yZWYuYXBwbHksXG4gICAgICBjb25zdHJ1Y3QgPSBfcmVmLmNvbnN0cnVjdDtcblxuICBpZiAoIWFwcGx5KSB7XG4gICAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWZyZWV6ZSkge1xuICAgIGZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFzZWFsKSB7XG4gICAgc2VhbCA9IGZ1bmN0aW9uIHNlYWwoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghY29uc3RydWN0KSB7XG4gICAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KEZ1bmMsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhcnJheUZvckVhY2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKTtcbiAgdmFyIGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbiAgdmFyIGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICB2YXIgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuICB2YXIgc3RyaW5nVG9TdHJpbmcgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcpO1xuICB2YXIgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuICB2YXIgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbiAgdmFyIHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG4gIHZhciBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuICB2YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcbiAgdmFyIHR5cGVFcnJvckNyZWF0ZSA9IHVuY29uc3RydWN0KFR5cGVFcnJvcik7XG4gIGZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cblxuICBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5LCB0cmFuc2Zvcm1DYXNlRnVuYykge1xuICAgIHZhciBfdHJhbnNmb3JtQ2FzZUZ1bmM7XG5cbiAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IChfdHJhbnNmb3JtQ2FzZUZ1bmMgPSB0cmFuc2Zvcm1DYXNlRnVuYykgIT09IG51bGwgJiYgX3RyYW5zZm9ybUNhc2VGdW5jICE9PSB2b2lkIDAgPyBfdHJhbnNmb3JtQ2FzZUZ1bmMgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcblxuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBhcnJheVtsXTtcblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbGNFbGVtZW50ID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuICAvKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG4gICAgdmFyIHByb3BlcnR5O1xuXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSA9PT0gdHJ1ZSkge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG4gIC8qIElFMTAgZG9lc24ndCBzdXBwb3J0IF9fbG9va3VwR2V0dGVyX18gc28gbGV0cydcbiAgICogc2ltdWxhdGUgaXQuIEl0IGFsc28gYXV0b21hdGljYWxseSBjaGVja3NcbiAgICogaWYgdGhlIHByb3AgaXMgZnVuY3Rpb24gb3IgZ2V0dGVyIGFuZCBiZWhhdmVzXG4gICAqIGFjY29yZGluZ2x5LiAqL1xuXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRlc2MudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xuICAgICAgY29uc29sZS53YXJuKCdmYWxsYmFjayB2YWx1ZSBmb3InLCBlbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICB9XG5cbiAgdmFyIGh0bWwkMSA9IGZyZWV6ZShbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVjb3JhdG9yJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0ZXInLCAnbmF2JywgJ25vYnInLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3diciddKTsgLy8gU1ZHXG5cbiAgdmFyIHN2ZyQxID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcbiAgdmFyIHN2Z0ZpbHRlcnMgPSBmcmVlemUoWydmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddKTsgLy8gTGlzdCBvZiBTVkcgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWxsb3dlZCBieSBkZWZhdWx0LlxuICAvLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2VcbiAgLy8gY2hlY2tzIHByb3Blcmx5IGluIGNhc2Ugb25lIHdhbnRzIHRvIGFkZCB0aGVtIHRvXG4gIC8vIGFsbG93LWxpc3QuXG5cbiAgdmFyIHN2Z0Rpc2FsbG93ZWQgPSBmcmVlemUoWydhbmltYXRlJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJywgJ2Rpc2NhcmQnLCAnZmVkcm9wc2hhZG93JywgJ2ZvbnQtZmFjZScsICdmb250LWZhY2UtZm9ybWF0JywgJ2ZvbnQtZmFjZS1uYW1lJywgJ2ZvbnQtZmFjZS1zcmMnLCAnZm9udC1mYWNlLXVyaScsICdmb3JlaWdub2JqZWN0JywgJ2hhdGNoJywgJ2hhdGNocGF0aCcsICdtZXNoJywgJ21lc2hncmFkaWVudCcsICdtZXNocGF0Y2gnLCAnbWVzaHJvdycsICdtaXNzaW5nLWdseXBoJywgJ3NjcmlwdCcsICdzZXQnLCAnc29saWRjb2xvcicsICd1bmtub3duJywgJ3VzZSddKTtcbiAgdmFyIG1hdGhNbCQxID0gZnJlZXplKFsnbWF0aCcsICdtZW5jbG9zZScsICdtZXJyb3InLCAnbWZlbmNlZCcsICdtZnJhYycsICdtZ2x5cGgnLCAnbWknLCAnbWxhYmVsZWR0cicsICdtbXVsdGlzY3JpcHRzJywgJ21uJywgJ21vJywgJ21vdmVyJywgJ21wYWRkZWQnLCAnbXBoYW50b20nLCAnbXJvb3QnLCAnbXJvdycsICdtcycsICdtc3BhY2UnLCAnbXNxcnQnLCAnbXN0eWxlJywgJ21zdWInLCAnbXN1cCcsICdtc3Vic3VwJywgJ210YWJsZScsICdtdGQnLCAnbXRleHQnLCAnbXRyJywgJ211bmRlcicsICdtdW5kZXJvdmVyJ10pOyAvLyBTaW1pbGFybHkgdG8gU1ZHLCB3ZSB3YW50IHRvIGtub3cgYWxsIE1hdGhNTCBlbGVtZW50cyxcbiAgLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG5cbiAgdmFyIG1hdGhNbERpc2FsbG93ZWQgPSBmcmVlemUoWydtYWN0aW9uJywgJ21hbGlnbmdyb3VwJywgJ21hbGlnbm1hcmsnLCAnbWxvbmdkaXYnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93JywgJ3NlbWFudGljcycsICdhbm5vdGF0aW9uJywgJ2Fubm90YXRpb24teG1sJywgJ21wcmVzY3JpcHRzJywgJ25vbmUnXSk7XG4gIHZhciB0ZXh0ID0gZnJlZXplKFsnI3RleHQnXSk7XG5cbiAgdmFyIGh0bWwgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuICB2YXIgc3ZnID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcHBhdGh1bml0cycsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJ1bml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncHJpbWl0aXZldW5pdHMnLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGFydG9mZnNldCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAnc3lzdGVtbGFuZ3VhZ2UnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm0tb3JpZ2luJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd0ZXh0bGVuZ3RoJywgJ3R5cGUnLCAndTEnLCAndTInLCAndW5pY29kZScsICd2YWx1ZXMnLCAndmlld2JveCcsICd2aXNpYmlsaXR5JywgJ3ZlcnNpb24nLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd2lkdGgnLCAnd29yZC1zcGFjaW5nJywgJ3dyYXAnLCAnd3JpdGluZy1tb2RlJywgJ3hjaGFubmVsc2VsZWN0b3InLCAneWNoYW5uZWxzZWxlY3RvcicsICd4JywgJ3gxJywgJ3gyJywgJ3htbG5zJywgJ3knLCAneTEnLCAneTInLCAneicsICd6b29tYW5kcGFuJ10pO1xuICB2YXIgbWF0aE1sID0gZnJlZXplKFsnYWNjZW50JywgJ2FjY2VudHVuZGVyJywgJ2FsaWduJywgJ2JldmVsbGVkJywgJ2Nsb3NlJywgJ2NvbHVtbnNhbGlnbicsICdjb2x1bW5saW5lcycsICdjb2x1bW5zcGFuJywgJ2Rlbm9tYWxpZ24nLCAnZGVwdGgnLCAnZGlyJywgJ2Rpc3BsYXknLCAnZGlzcGxheXN0eWxlJywgJ2VuY29kaW5nJywgJ2ZlbmNlJywgJ2ZyYW1lJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2xhcmdlb3AnLCAnbGVuZ3RoJywgJ2xpbmV0aGlja25lc3MnLCAnbHNwYWNlJywgJ2xxdW90ZScsICdtYXRoYmFja2dyb3VuZCcsICdtYXRoY29sb3InLCAnbWF0aHNpemUnLCAnbWF0aHZhcmlhbnQnLCAnbWF4c2l6ZScsICdtaW5zaXplJywgJ21vdmFibGVsaW1pdHMnLCAnbm90YXRpb24nLCAnbnVtYWxpZ24nLCAnb3BlbicsICdyb3dhbGlnbicsICdyb3dsaW5lcycsICdyb3dzcGFjaW5nJywgJ3Jvd3NwYW4nLCAncnNwYWNlJywgJ3JxdW90ZScsICdzY3JpcHRsZXZlbCcsICdzY3JpcHRtaW5zaXplJywgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJywgJ3NlbGVjdGlvbicsICdzZXBhcmF0b3InLCAnc2VwYXJhdG9ycycsICdzdHJldGNoeScsICdzdWJzY3JpcHRzaGlmdCcsICdzdXBzY3JpcHRzaGlmdCcsICdzeW1tZXRyaWMnLCAndm9mZnNldCcsICd3aWR0aCcsICd4bWxucyddKTtcbiAgdmFyIHhtbCA9IGZyZWV6ZShbJ3hsaW5rOmhyZWYnLCAneG1sOmlkJywgJ3hsaW5rOnRpdGxlJywgJ3htbDpzcGFjZScsICd4bWxuczp4bGluayddKTtcblxuICB2YXIgTVVTVEFDSEVfRVhQUiA9IHNlYWwoL1xce1xce1tcXHdcXFddKnxbXFx3XFxXXSpcXH1cXH0vZ20pOyAvLyBTcGVjaWZ5IHRlbXBsYXRlIGRldGVjdGlvbiByZWdleCBmb3IgU0FGRV9GT1JfVEVNUExBVEVTIG1vZGVcblxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHdcXFddKnxbXFx3XFxXXSolPi9nbSk7XG4gIHZhciBUTVBMSVRfRVhQUiA9IHNlYWwoL1xcJHtbXFx3XFxXXSp9L2dtKTtcbiAgdmFyIERBVEFfQVRUUiA9IHNlYWwoL15kYXRhLVtcXC1cXHcuXFx1MDBCNy1cXHVGRkZGXS8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cbiAgdmFyIEFSSUFfQVRUUiA9IHNlYWwoL15hcmlhLVtcXC1cXHddKyQvKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG4gIHZhciBET0NUWVBFX05BTUUgPSBzZWFsKC9eaHRtbCQvaSk7XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqIERvbid0IGV4cG9ydCB0aGlzIGZ1bmN0aW9uIG91dHNpZGUgdGhpcyBtb2R1bGUhXG4gICAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdCAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeClcbiAgICogQHJldHVybiB7P1RydXN0ZWRUeXBlUG9saWN5fSBUaGUgcG9saWN5IGNyZWF0ZWQgKG9yIG51bGwsIGlmIFRydXN0ZWQgVHlwZXNcbiAgICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICAgKi9cblxuXG4gIHZhciBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIGRvY3VtZW50KSB7XG4gICAgaWYgKF90eXBlb2YodHJ1c3RlZFR5cGVzKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXG4gICAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuXG5cbiAgICB2YXIgc3VmZml4ID0gbnVsbDtcbiAgICB2YXIgQVRUUl9OQU1FID0gJ2RhdGEtdHQtcG9saWN5LXN1ZmZpeCc7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgICBzdWZmaXggPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgIH1cblxuICAgIHZhciBwb2xpY3lOYW1lID0gJ2RvbXB1cmlmeScgKyAoc3VmZml4ID8gJyMnICsgc3VmZml4IDogJycpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTChodG1sKSB7XG4gICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogZnVuY3Rpb24gY3JlYXRlU2NyaXB0VVJMKHNjcmlwdFVybCkge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRVcmw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcbiAgICAgIC8vIGlmIFRUIGFyZSBlbmZvcmNlZC5cbiAgICAgIGNvbnNvbGUud2FybignVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KCkge1xuICAgIHZhciB3aW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldEdsb2JhbCgpO1xuXG4gICAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uIERPTVB1cmlmeShyb290KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xuICAgICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjQuNyc7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgICAqL1xuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgICB9XG5cbiAgICB2YXIgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIERvY3VtZW50RnJhZ21lbnQgPSB3aW5kb3cuRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgSFRNTFRlbXBsYXRlRWxlbWVudCA9IHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgICAgICBOb2RlID0gd2luZG93Lk5vZGUsXG4gICAgICAgIEVsZW1lbnQgPSB3aW5kb3cuRWxlbWVudCxcbiAgICAgICAgTm9kZUZpbHRlciA9IHdpbmRvdy5Ob2RlRmlsdGVyLFxuICAgICAgICBfd2luZG93JE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAsXG4gICAgICAgIE5hbWVkTm9kZU1hcCA9IF93aW5kb3ckTmFtZWROb2RlTWFwID09PSB2b2lkIDAgPyB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAgOiBfd2luZG93JE5hbWVkTm9kZU1hcCxcbiAgICAgICAgSFRNTEZvcm1FbGVtZW50ID0gd2luZG93LkhUTUxGb3JtRWxlbWVudCxcbiAgICAgICAgRE9NUGFyc2VyID0gd2luZG93LkRPTVBhcnNlcixcbiAgICAgICAgdHJ1c3RlZFR5cGVzID0gd2luZG93LnRydXN0ZWRUeXBlcztcbiAgICB2YXIgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIHZhciBjbG9uZU5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2Nsb25lTm9kZScpO1xuICAgIHZhciBnZXROZXh0U2libGluZyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnbmV4dFNpYmxpbmcnKTtcbiAgICB2YXIgZ2V0Q2hpbGROb2RlcyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2hpbGROb2RlcycpO1xuICAgIHZhciBnZXRQYXJlbnROb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdwYXJlbnROb2RlJyk7IC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAgIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAgIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gICAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgICAvLyBpcyBpbmhlcml0ZWQuXG5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJ1c3RlZFR5cGVzUG9saWN5ID0gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIG9yaWdpbmFsRG9jdW1lbnQpO1xuXG4gICAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKSA6ICcnO1xuICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgaW1wbGVtZW50YXRpb24gPSBfZG9jdW1lbnQuaW1wbGVtZW50YXRpb24sXG4gICAgICAgIGNyZWF0ZU5vZGVJdGVyYXRvciA9IF9kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgICAgIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBfZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBfZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG4gICAgdmFyIGltcG9ydE5vZGUgPSBvcmlnaW5hbERvY3VtZW50LmltcG9ydE5vZGU7XG4gICAgdmFyIGRvY3VtZW50TW9kZSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgdmFyIGhvb2tzID0ge307XG4gICAgLyoqXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgICAqL1xuXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSB1bmRlZmluZWQgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuICAgIHZhciBNVVNUQUNIRV9FWFBSJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgICBFUkJfRVhQUiQxID0gRVJCX0VYUFIsXG4gICAgICAgIFRNUExJVF9FWFBSJDEgPSBUTVBMSVRfRVhQUixcbiAgICAgICAgREFUQV9BVFRSJDEgPSBEQVRBX0FUVFIsXG4gICAgICAgIEFSSUFfQVRUUiQxID0gQVJJQV9BVFRSLFxuICAgICAgICBJU19TQ1JJUFRfT1JfREFUQSQxID0gSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICAgIEFUVFJfV0hJVEVTUEFDRSQxID0gQVRUUl9XSElURVNQQUNFO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSQxID0gSVNfQUxMT1dFRF9VUkk7XG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheShzdmckMSksIF90b0NvbnN1bWFibGVBcnJheShzdmdGaWx0ZXJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHRleHQpKSk7XG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX0FUVFIgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCksIF90b0NvbnN1bWFibGVBcnJheSh4bWwpKSk7XG4gICAgLypcbiAgICAgKiBDb25maWd1cmUgaG93IERPTVBVcmlmeSBzaG91bGQgaGFuZGxlIGN1c3RvbSBlbGVtZW50cyBhbmQgdGhlaXIgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIGN1c3RvbWl6ZWQgYnVpbHQtaW4gZWxlbWVudHMuXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gdGFnTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBjdXN0b20gZWxlbWVudHMpXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gYXR0cmlidXRlTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBhdHRyaWJ1dGVzIG5vdCBvbiB0aGUgYWxsb3cgbGlzdClcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyBhbGxvdyBjdXN0b20gZWxlbWVudHMgZGVyaXZlZCBmcm9tIGJ1aWx0LWlucyBpZiB0aGV5IHBhc3MgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgICAqL1xuXG4gICAgdmFyIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSkpO1xuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG5cbiAgICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG5cbiAgICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuICAgIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cblxuICAgIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cblxuICAgIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBzZWxmLWNsb3NpbmcgdGFncyBpbiBhdHRyaWJ1dGVzIGFyZSBhbGxvd2VkLlxuICAgICAqIFVzdWFsbHkgcmVtb3ZlZCBkdWUgdG8gYSBtWFNTIGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cblxuICAgIHZhciBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSB0cnVlO1xuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cblxuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuICAgIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuXG4gICAgdmFyIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuXG4gICAgdmFyIEZPUkNFX0JPRFkgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICAgKi9cblxuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG5cbiAgICB2YXIgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/XG4gICAgICogVGhpcyBzYW5pdGl6ZXMgbWFya3VwcyBuYW1lZCB3aXRoIGNvbGxpZGluZywgY2xvYmJlcmFibGUgYnVpbHQtaW4gRE9NIEFQSXMuXG4gICAgICovXG5cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcbiAgICAvKiBBY2hpZXZlIGZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiBieSBpc29sYXRpbmcgdGhlIG5hbWVzcGFjZSBvZiBuYW1lZFxuICAgICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAgICpcbiAgICAgKiBIVE1ML0RPTSBzcGVjIHJ1bGVzIHRoYXQgZW5hYmxlIERPTSBDbG9iYmVyaW5nOlxuICAgICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgICAqICAgLSBET00gVHJlZSBBY2Nlc3NvcnMgKMKnMy4xLjUpXG4gICAgICogICAtIEZvcm0gRWxlbWVudCBQYXJlbnQtQ2hpbGQgUmVsYXRpb25zICjCpzQuMTAuMylcbiAgICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgICAqICAgLSBIVE1MQ29sbGVjdGlvbiAowqc0LjIuMTAuMilcbiAgICAgKlxuICAgICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAgICogd2l0aCBhIGNvbnN0YW50IHN0cmluZywgaS5lLiwgYHVzZXItY29udGVudC1gXG4gICAgICovXG5cbiAgICB2YXIgU0FOSVRJWkVfTkFNRURfUFJPUFMgPSBmYWxzZTtcbiAgICB2YXIgU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYID0gJ3VzZXItY29udGVudC0nO1xuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cblxuICAgIHZhciBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG5cbiAgICB2YXIgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG5cbiAgICB2YXIgVVNFX1BST0ZJTEVTID0ge307XG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG5cbiAgICB2YXIgRk9SQklEX0NPTlRFTlRTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9GT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgWydhbm5vdGF0aW9uLXhtbCcsICdhdWRpbycsICdjb2xncm91cCcsICdkZXNjJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGVhZCcsICdpZnJhbWUnLCAnbWF0aCcsICdtaScsICdtbicsICdtbycsICdtcycsICdtdGV4dCcsICdub2VtYmVkJywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JywgJ3BsYWludGV4dCcsICdzY3JpcHQnLCAnc3R5bGUnLCAnc3ZnJywgJ3RlbXBsYXRlJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3ZpZGVvJywgJ3htcCddKTtcbiAgICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cblxuICAgIHZhciBEQVRBX1VSSV9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9EQVRBX1VSSV9UQUdTID0gYWRkVG9TZXQoe30sIFsnYXVkaW8nLCAndmlkZW8nLCAnaW1nJywgJ3NvdXJjZScsICdpbWFnZScsICd0cmFjayddKTtcbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuXG4gICAgdmFyIFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMgPSBhZGRUb1NldCh7fSwgWydhbHQnLCAnY2xhc3MnLCAnZm9yJywgJ2lkJywgJ2xhYmVsJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyb2xlJywgJ3N1bW1hcnknLCAndGl0bGUnLCAndmFsdWUnLCAnc3R5bGUnLCAneG1sbnMnXSk7XG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cblxuICAgIHZhciBOQU1FU1BBQ0UgPSBIVE1MX05BTUVTUEFDRTtcbiAgICB2YXIgSVNfRU1QVFlfSU5QVVQgPSBmYWxzZTtcbiAgICAvKiBBbGxvd2VkIFhIVE1MK1hNTCBuYW1lc3BhY2VzICovXG5cbiAgICB2YXIgQUxMT1dFRF9OQU1FU1BBQ0VTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVMgPSBhZGRUb1NldCh7fSwgW01BVEhNTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0UsIEhUTUxfTkFNRVNQQUNFXSwgc3RyaW5nVG9TdHJpbmcpO1xuICAgIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xuXG4gICAgdmFyIFBBUlNFUl9NRURJQV9UWVBFO1xuICAgIHZhciBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gICAgdmFyIERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcbiAgICB2YXIgdHJhbnNmb3JtQ2FzZUZ1bmM7XG4gICAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuXG4gICAgdmFyIENPTkZJRyA9IG51bGw7XG4gICAgLyogSWRlYWxseSwgZG8gbm90IHRvdWNoIGFueXRoaW5nIGJlbG93IHRoaXMgbGluZSAqL1xuXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgdmFyIGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNSZWdleE9yRnVuY3Rpb24odGVzdFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3BhcnNlQ29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNmZyBvcHRpb25hbCBjb25maWcgbGl0ZXJhbFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIHZhciBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoY2ZnKSB7XG4gICAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuXG5cbiAgICAgIGlmICghY2ZnIHx8IF90eXBlb2YoY2ZnKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2ZnID0ge307XG4gICAgICB9XG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG5cblxuICAgICAgY2ZnID0gY2xvbmUoY2ZnKTtcbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTLmluZGV4T2YoY2ZnLlBBUlNFUl9NRURJQV9UWVBFKSA9PT0gLTEgPyBQQVJTRVJfTUVESUFfVFlQRSA9IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgOiBQQVJTRVJfTUVESUFfVFlQRSA9IGNmZy5QQVJTRVJfTUVESUFfVFlQRTsgLy8gSFRNTCB0YWdzIGFuZCBhdHRyaWJ1dGVzIGFyZSBub3QgY2FzZS1zZW5zaXRpdmUsIGNvbnZlcnRpbmcgdG8gbG93ZXJjYXNlLiBLZWVwaW5nIFhIVE1MIGFzIGlzLlxuXG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyA/IHN0cmluZ1RvU3RyaW5nIDogc3RyaW5nVG9Mb3dlckNhc2U7XG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG5cbiAgICAgIEFMTE9XRURfVEFHUyA9ICdBTExPV0VEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICAgIEFMTE9XRURfTkFNRVNQQUNFUyA9ICdBTExPV0VEX05BTUVTUEFDRVMnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9OQU1FU1BBQ0VTLCBzdHJpbmdUb1N0cmluZykgOiBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUztcbiAgICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPSAnQUREX1VSSV9TQUZFX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgICBEQVRBX1VSSV9UQUdTID0gJ0FERF9EQVRBX1VSSV9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgY2ZnLkFERF9EQVRBX1VSSV9UQUdTLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIDogREVGQVVMVF9EQVRBX1VSSV9UQUdTO1xuICAgICAgRk9SQklEX0NPTlRFTlRTID0gJ0ZPUkJJRF9DT05URU5UUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTO1xuICAgICAgRk9SQklEX1RBR1MgPSAnRk9SQklEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IHt9O1xuICAgICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IGNmZy5BTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBXSE9MRV9ET0NVTUVOVCA9IGNmZy5XSE9MRV9ET0NVTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBjZmcuUkVUVVJOX1RSVVNURURfVFlQRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBTQU5JVElaRV9OQU1FRF9QUk9QUyA9IGNmZy5TQU5JVElaRV9OQU1FRF9QUk9QUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBLRUVQX0NPTlRFTlQgPSBjZmcuS0VFUF9DT05URU5UICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIElTX0FMTE9XRURfVVJJJDEgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJJDE7XG4gICAgICBOQU1FU1BBQ0UgPSBjZmcuTkFNRVNQQUNFIHx8IEhUTUxfTkFNRVNQQUNFO1xuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgfHwge307XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIHR5cGVvZiBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cblxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmckMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnRmlsdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG5cblxuICAgICAgaWYgKGNmZy5BRERfVEFHUykge1xuICAgICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGNmZy5BRERfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEZPUkJJRF9DT05URU5UUywgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG5cblxuICAgICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuXG5cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgICB9XG4gICAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXG5cblxuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH0gLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG5cblxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBmcmVlemUoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgQ09ORklHID0gY2ZnO1xuICAgIH07XG5cbiAgICB2YXIgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG4gICAgdmFyIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnZm9yZWlnbm9iamVjdCcsICdkZXNjJywgJ3RpdGxlJywgJ2Fubm90YXRpb24teG1sJ10pOyAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgLy8gc28gdGhhdCB0aGV5IGRvbid0IGdldCBlcnJvbmVvdXNseSBkZWxldGVkIGZyb21cbiAgICAvLyBIVE1MIG5hbWVzcGFjZS5cblxuICAgIHZhciBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFsndGl0bGUnLCAnc3R5bGUnLCAnZm9udCcsICdhJywgJ3NjcmlwdCddKTtcbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgICAqIGNvcnJlY3RseS4gKi9cblxuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnJDEpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBzdmdEaXNhbGxvd2VkKTtcbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCQxKTtcbiAgICBhZGRUb1NldChBTExfTUFUSE1MX1RBR1MsIG1hdGhNbERpc2FsbG93ZWQpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuXG4gICAgdmFyIF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7IC8vIEluIEpTRE9NLCBpZiB3ZSdyZSBpbnNpZGUgc2hhZG93IERPTSwgdGhlbiBwYXJlbnROb2RlXG4gICAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnRhZ05hbWUpIHtcbiAgICAgICAgcGFyZW50ID0ge1xuICAgICAgICAgIG5hbWVzcGFjZVVSSTogTkFNRVNQQUNFLFxuICAgICAgICAgIHRhZ05hbWU6ICd0ZW1wbGF0ZSdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xuICAgICAgdmFyIHBhcmVudFRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShwYXJlbnQudGFnTmFtZSk7XG5cbiAgICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gU1ZHXG4gICAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhYFxuICAgICAgICAvLyBzdmcgaWYgcGFyZW50IGlzIGVpdGhlciA8YW5ub3RhdGlvbi14bWw+IG9yIE1hdGhNTFxuICAgICAgICAvLyB0ZXh0IGludGVncmF0aW9uIHBvaW50cy5cblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnICYmIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSk7XG4gICAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG5cblxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIE1hdGhNTFxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBNYXRoTUwgaXMgdmlhXG4gICAgICAgIC8vIDxtYXRoPiBhbmQgSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHNcblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfSAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gTWF0aE1MIG5hbWVzcGFjZS5cblxuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxuICAgICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgICAgLy8gaXMgdmlhIE1hdGhNTCB0ZXh0IGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcblxuXG4gICAgICAgIHJldHVybiAhQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdICYmIChDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTW3RhZ05hbWVdIHx8ICFBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfSAvLyBGb3IgWEhUTUwgYW5kIFhNTCBkb2N1bWVudHMgdGhhdCBzdXBwb3J0IGN1c3RvbSBuYW1lc3BhY2VzXG5cblxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAgIC8vIEhUTUwsIFNWRywgTWF0aE1MIG9yIGFsbG93ZWQgdmlhIEFMTE9XRURfTkFNRVNQQUNFUykuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuXG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9mb3JjZVJlbW92ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGVsZW1lbnQ6IG5vZGVcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2RlLm91dGVySFRNTCA9IGVtcHR5SFRNTDtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcblxuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogX2luaXREb2N1bWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiBfaW5pdERvY3VtZW50KGRpcnR5KSB7XG4gICAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgICB2YXIgZG9jO1xuICAgICAgdmFyIGxlYWRpbmdXaGl0ZXNwYWNlO1xuXG4gICAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgICAgbGVhZGluZ1doaXRlc3BhY2UgPSBtYXRjaGVzICYmIG1hdGNoZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBSb290IG9mIFhIVE1MIGRvYyBtdXN0IGNvbnRhaW4geG1sbnMgZGVjbGFyYXRpb24gKHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveGh0bWwxL25vcm1hdGl2ZS5odG1sI3N0cmljdClcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIC8qXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgICAqIERPTVBhcnNlciBub3Qgd29yayBmb3Igc3ZnIHdoZW4gaGFzIG11bHRpcGxlIHJvb3QgZWxlbWVudC5cbiAgICAgICAqL1xuXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cblxuXG4gICAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChOQU1FU1BBQ0UsICd0ZW1wbGF0ZScsIG51bGwpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/IGVtcHR5SFRNTCA6IGRpcnR5UGF5bG9hZDtcbiAgICAgICAgfSBjYXRjaCAoXykgey8vIFN5bnRheCBlcnJvciBpZiBkaXJ0eVBheWxvYWQgaXMgaW52YWxpZCB4bWxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgYm9keSA9IGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChkaXJ0eSAmJiBsZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsKTtcbiAgICAgIH1cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuXG5cbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYywgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9jcmVhdGVJdGVyYXRvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnR9IHJvb3QgZG9jdW1lbnQvZnJhZ21lbnQgdG8gY3JlYXRlIGl0ZXJhdG9yIGZvclxuICAgICAqIEByZXR1cm4ge0l0ZXJhdG9yfSBpdGVyYXRvciBpbnN0YW5jZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2lzQ2xvYmJlcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBlbG0gZWxlbWVudCB0byBjaGVjayBmb3IgY2xvYmJlcmluZyBhdHRhY2tzXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uaGFzQ2hpbGROb2RlcyAhPT0gJ2Z1bmN0aW9uJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaXNOb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBvYmogb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyBvYmplY3QgaXMgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gX3R5cGVvZihOb2RlKSA9PT0gJ29iamVjdCcgPyBvYmplY3QgaW5zdGFuY2VvZiBOb2RlIDogb2JqZWN0ICYmIF90eXBlb2Yob2JqZWN0KSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG5cblxuICAgIHZhciBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbiBfZXhlY3V0ZUhvb2soZW50cnlQb2ludCwgY3VycmVudE5vZGUsIGRhdGEpIHtcbiAgICAgIGlmICghaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgICAqXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50O1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuXG5cbiAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayBpZiB0YWduYW1lIGNvbnRhaW5zIFVuaWNvZGUgKi9cblxuXG4gICAgICBpZiAocmVnRXhwVGVzdCgvW1xcdTAwODAtXFx1RkZGRl0vLCBjdXJyZW50Tm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cblxuXG4gICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG4gICAgICAvKiBEZXRlY3QgbVhTUyBhdHRlbXB0cyBhYnVzaW5nIG5hbWVzcGFjZSBjb25mdXNpb24gKi9cblxuXG4gICAgICBpZiAoY3VycmVudE5vZGUuaGFzQ2hpbGROb2RlcygpICYmICFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cblxuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcgJiYgcmVnRXhwVGVzdCgvPHRlbXBsYXRlL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG5cblxuICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhIGN1c3RvbSBlbGVtZW50IHRvIGhhbmRsZSAqL1xuICAgICAgICBpZiAoIUZPUkJJRF9UQUdTW3RhZ05hbWVdICYmIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHRhZ05hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG5cblxuICAgICAgaWYgKGN1cnJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiAhX2NoZWNrVmFsaWROYW1lc3BhY2UoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBNYWtlIHN1cmUgdGhhdCBvbGRlciBicm93c2VycyBkb24ndCBnZXQgZmFsbGJhY2stdGFnIG1YU1MgKi9cblxuXG4gICAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnIHx8IHRhZ05hbWUgPT09ICdub2ZyYW1lcycpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWR8ZnJhbWVzKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiQxLCAnICcpO1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBUTVBMSVRfRVhQUiQxLCAnICcpO1xuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgICAgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgICBYTUwtY29tcGF0aWJsZSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN4bWwtY29tcGF0aWJsZSBhbmQgaHR0cDovL3d3dy53My5vcmcvVFIveG1sLyNkMGU4MDQpXG4gICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuXG5cbiAgICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QobGNUYWcpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSB8fCAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG5cbiAgICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSA7IGVsc2UgaWYgKHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkkkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkMSwgJycpKSkgOyBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9iYXNpY0N1c3RvbUVsZW1lbnRDaGVja1xuICAgICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICAgKiBmb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGNoZWNraW5nIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3ZhbGlkYXRlLWVsZW1lbnQtbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QgPSBmdW5jdGlvbiBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCh0YWdOYW1lKSB7XG4gICAgICByZXR1cm4gdGFnTmFtZS5pbmRleE9mKCctJykgPiAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBhdHRyO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGxjTmFtZTtcbiAgICAgIHZhciBsO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuXG4gICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaG9va0V2ZW50ID0ge1xuICAgICAgICBhdHRyTmFtZTogJycsXG4gICAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICAgIGtlZXBBdHRyOiB0cnVlLFxuICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgICB9O1xuICAgICAgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuICAgICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cblxuICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICAgIG5hbWUgPSBfYXR0ci5uYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlVVJJID0gX2F0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICB2YWx1ZSA9IG5hbWUgPT09ICd2YWx1ZScgPyBhdHRyLnZhbHVlIDogc3RyaW5nVHJpbShhdHRyLnZhbHVlKTtcbiAgICAgICAgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaG9va0V2ZW50LmtlZXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG5cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcblxuICAgICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuXG4gICAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFJlbW92ZSBhdHRyaWJ1dGUgKi9cblxuXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cblxuXG4gICAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG5cblxuICAgICAgICBpZiAoIUFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiAmJiByZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIFRNUExJVF9FWFBSJDEsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG5cblxuICAgICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXG4gICAgICAgICAqIFByZWZpeCBpZCBhbmQgbmFtZSBhdHRyaWJ1dGVzIHdpdGggYHVzZXItY29udGVudC1gXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKFNBTklUSVpFX05BTUVEX1BST1BTICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7IC8vIFByZWZpeCB0aGUgdmFsdWUgYW5kIGxhdGVyIHJlLWNyZWF0ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhlIHNhbml0aXplZCB2YWx1ZVxuXG5cbiAgICAgICAgICB2YWx1ZSA9IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBUcnVzdGVkIFR5cGVzICovXG5cblxuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICYmIF90eXBlb2YodHJ1c3RlZFR5cGVzKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkgOyBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUobGNUYWcsIGxjTmFtZSkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZEhUTUwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFycmF5UG9wKERPTVB1cmlmeS5yZW1vdmVkKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGU7XG5cbiAgICAgIHZhciBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cblxuXG4gICAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSkge1xuICAgICAgdmFyIGNmZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgYm9keTtcbiAgICAgIHZhciBpbXBvcnRlZE5vZGU7XG4gICAgICB2YXIgY3VycmVudE5vZGU7XG4gICAgICB2YXIgb2xkTm9kZTtcbiAgICAgIHZhciByZXR1cm5Ob2RlO1xuICAgICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cblxuICAgICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XG5cbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG4gICAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG5cblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdkaXJ0eSBpcyBub3QgYSBzdHJpbmcsIGFib3J0aW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cblxuXG4gICAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgICBpZiAoX3R5cGVvZih3aW5kb3cudG9TdGF0aWNIVE1MKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHdpbmRvdy50b1N0YXRpY0hUTUwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICB9XG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cblxuXG4gICAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICB9XG4gICAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG5cblxuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcbiAgICAgIC8qIENoZWNrIGlmIGRpcnR5IGlzIGNvcnJlY3RseSB0eXBlZCBmb3IgSU5fUExBQ0UgKi9cblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcblxuICAgICAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3Jvb3Qgbm9kZSBpcyBmb3JiaWRkZW4gYW5kIGNhbm5vdCBiZSBzYW5pdGl6ZWQgaW4tcGxhY2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgICBlbGVtZW50cyBiZWluZyBzdHJpcHBlZCBieSB0aGUgcGFyc2VyICovXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tLS0+Jyk7XG4gICAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFTQUZFX0ZPUl9URU1QTEFURVMgJiYgIVdIT0xFX0RPQ1VNRU5UICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICAgIH1cbiAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuXG5cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuICAgICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuXG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IFJFVFVSTl9UUlVTVEVEX1RZUEUgPyBlbXB0eUhUTUwgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cblxuXG4gICAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cblxuXG4gICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcbiAgICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuXG5cbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cblxuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cblxuXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgb2xkTm9kZSA9IG51bGw7XG4gICAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuICAgICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG5cblxuICAgICAgaWYgKFJFVFVSTl9ET00pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudC5jYWxsKGJvZHkub3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFMTE9XRURfQVRUUi5zaGFkb3dyb290IHx8IEFMTE9XRURfQVRUUi5zaGFkb3dyb290bW9kKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgIEFkb3B0Tm9kZSgpIGlzIG5vdCB1c2VkIGJlY2F1c2UgaW50ZXJuYWwgc3RhdGUgaXMgbm90IHJlc2V0XG4gICAgICAgICAgICAoZS5nLiB0aGUgcGFzdCBuYW1lcyBtYXAgb2YgYSBIVE1MRm9ybUVsZW1lbnQpLCB0aGlzIGlzIHNhZmVcbiAgICAgICAgICAgIGluIHRoZW9yeSBidXQgd2Ugd291bGQgcmF0aGVyIG5vdCByaXNrIGFub3RoZXIgYXR0YWNrIHZlY3Rvci5cbiAgICAgICAgICAgIFRoZSBzdGF0ZSB0aGF0IGlzIGNsb25lZCBieSBpbXBvcnROb2RlKCkgaXMgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgICBieSB0aGUgc3BlY3MuXG4gICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm5Ob2RlID0gaW1wb3J0Tm9kZS5jYWxsKG9yaWdpbmFsRG9jdW1lbnQsIHJldHVybk5vZGUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJpYWxpemVkSFRNTCA9IFdIT0xFX0RPQ1VNRU5UID8gYm9keS5vdXRlckhUTUwgOiBib2R5LmlubmVySFRNTDtcbiAgICAgIC8qIFNlcmlhbGl6ZSBkb2N0eXBlIGlmIGFsbG93ZWQgKi9cblxuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UICYmIEFMTE9XRURfVEFHU1snIWRvY3R5cGUnXSAmJiBib2R5Lm93bmVyRG9jdW1lbnQgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSAmJiByZWdFeHBUZXN0KERPQ1RZUEVfTkFNRSwgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSkpIHtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSAnPCFET0NUWVBFICcgKyBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICsgJz5cXG4nICsgc2VyaWFsaXplZEhUTUw7XG4gICAgICB9XG4gICAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBNVVNUQUNIRV9FWFBSJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBUTVBMSVRfRVhQUiQxLCAnICcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTCkgOiBzZXJpYWxpemVkSFRNTDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICAgKiBzZXRDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuXG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogY2xlYXJDb25maWdcbiAgICAgKlxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuY2xlYXJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBDT05GSUcgPSBudWxsO1xuICAgICAgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICAgIGlmICghQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKHRhZyk7XG4gICAgICB2YXIgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XG4gICAgICByZXR1cm4gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gYWRkIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tGdW5jdGlvbiBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gcmVtb3ZlZChwb3BwZWQpIGhvb2tcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIHJldHVybiBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2tzID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlQWxsSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaG9va3MgPSB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIHZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuICByZXR1cm4gcHVyaWZ5O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXJpZnkuanMubWFwXG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi9wcm9wZXJ0aWVzJztcbmltcG9ydCB7IHJlbmRlckxhdGV4IH0gZnJvbSAnLi9sYXRleCc7XG5pbXBvcnQgeyByZW5kZXJNYXRoTUwgfSBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgeyBieXBhc3NFbmNhcHN1bGF0aW9uIH0gZnJvbSAnLi9yZXRybyc7XG5cbi8vIFRoaXMgc2hvdWxkIGJlIHRoZSBvbmx5IGNvZGUgZXhlY3V0ZWQgb3V0c2lkZSBvZiBhIGZ1bmN0aW9uXG4vLyBhbmQgdGhlIG9ubHkgY29kZSBjb250YWluaW5nIGJyb3dzZXIgZ2xvYmFscyAoZS5nLiB3aW5kb3cpXG4vLyBUT0RPIHRyeSB0byBzZXQgdXAgdGhlIGxpbnRlciB0byBjaGVjayB0aGVzZSB0d28gY29uc3RyYWludHNcbm1haW4od2luZG93KTtcblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWRpbmcgdGhlIHNjcmlwdC5cbiAqIEBwYXJhbSB7V2luZG93fSB3IC0gVGhlIHdpbmRvdyBpbnN0YW5jZSBvZiB0aGUgYnJvd3Nlci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWFpbih3OiBXaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcblxuICBjb25zdCBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzID0gYXdhaXQgUHJvcGVydGllcy5nZW5lcmF0ZSgpO1xuXG4gIC8vIEV4cG9zZSB0aGUgZ2xvYmFscyB0byB0aGUgYnJvd3NlclxuICAodyBhcyBhbnkpLnZpZXdlciA9IHtcbiAgICBwcm9wZXJ0aWVzLFxuICB9O1xuXG4gIGNvbnN0IGRvY3VtZW50ID0gdy5kb2N1bWVudDtcblxuICAvKipcbiAgICogUGFyc2UgdGhlIERPTSBsb29raW5nIGZvciBMYVRlWCBhbmQgPG1hdGg+IGVsZW1lbnRzLlxuICAgKiBSZXBsYWNlcyB0aGVtIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcmVuZGVyZWQgaW1hZ2VzIHdpdGhpbiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgLSBUaGUgRE9NIGRvY3VtZW50IGluIHdoaWNoIHRvIHNlYXJjaCBmb3IgdGhlIHJlbmRlcmluZyByb290LlxuICAgKiBAcGFyYW0ge011dGF0aW9uT2JzZXJ2ZXJ9IG9ic2VydmVyIC0gTXV0YXRpb24gb2JzZXJ2ZXIgdG8gYWN0aXZhdGUgb3IgcmVhY3RpdmF0ZSBldmVyeSB0aW1lIHRoZSByZW5kZXJpbmcgcm9vdCBjaGFuZ2VzLlxuICAgKi9cbiAgcHJvcGVydGllcy5yZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb3BlcnRpZXMuZWxlbWVudCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGF3YWl0IHJlbmRlckxhdGV4KHByb3BlcnRpZXMsIGVsZW1lbnQpO1xuICAgICAgYXdhaXQgcmVuZGVyTWF0aE1MKHByb3BlcnRpZXMsIGVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBJbml0aWFsIGZ1bmN0aW9uIHRvIGNhbGwgb25jZSBkb2N1bWVudCBpcyBsb2FkZWRcbiAgLy8gUmVuZGVycyBmb3JtdWxhcyBhbmQgc2V0cyBvYnNlcnZlclxuICBjb25zdCBzdGFydCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBGaXJzdCByZW5kZXJcbiAgICBwcm9wZXJ0aWVzLnJlbmRlcigpO1xuXG4gICAgLy8gQ2FsbGJhY2sgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlcmUgaXMgYSBtdXRhdGlvbiBpbiB0aGUgd2F0Y2hlZCBET00gZWxlbWVudFxuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGFzeW5jIChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGF3YWl0IHByb3BlcnRpZXMucmVuZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBXZSBuZWVkIHRvIHdhdGNoIG92ZXIgdGhlIHdob2xlIGRvY3VtZW50LCBpbiBjYXNlIHRoZSBQcm9wZXJ0aWVzLmVsZW1lbnQgaXMgaW5zZXJ0ZWRcbiAgICAvLyBlLmcuIHdlIHNldCBQcm9wZXJ0aWVzLmVsZW1lbnQgPSAnI3JlbmRlckFyZWEnIGFuZCB0aGVuIHdlIGFwcGVuZCA8ZGl2IGlkPVwicmVuZGVyQXJlYVwiPiQkMisyPTQkJDwvZGl2PiB0byB0aGUgZG9jdW1lbnRcbiAgICAub2JzZXJ2ZShkb2N1bWVudCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSwgLy8gSW4gY2FzZSBhbiBhdHRyaWJ1dGUgaXMgY2hhbmdlZCBpbiBhIDxtYXRoPiBub2RlLCBmb3IgaW5zdGFuY2VcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8gSW4gY2FzZSBhIG5ldyA8bWF0aD4gb3IgJCRsYXRleCQkIG5vZGUgaXMgYWRkZWQsIGZvciBpbnN0YW5jZVxuICAgICAgc3VidHJlZTogdHJ1ZSwgLy8gSW4gY2FzZSBhIDxtYXRoPiBub2RlIGlzIGFkZGVkIGFzIGEgZGVzY2VuZGFudCBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudCwgZm9yIGluc3RhbmNlXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L0RPTUNvbnRlbnRMb2FkZWRfZXZlbnQjY2hlY2tpbmdfd2hldGhlcl9sb2FkaW5nX2lzX2FscmVhZHlfY29tcGxldGVcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgLy8gTG9hZGluZyBoYXNuJ3QgZmluaXNoZWQgeWV0XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc3RhcnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGBET01Db250ZW50TG9hZGVkYCBoYXMgYWxyZWFkeSBmaXJlZFxuICAgIHN0YXJ0KCk7XG4gIH1cblxuICAvLyBFeHBvc2UgdGhlIG9sZCBWaWV3ZXIgQVBJIGFzIGEgZ2xvYmFsXG4gIGJ5cGFzc0VuY2Fwc3VsYXRpb24ocHJvcGVydGllcywgdyk7XG5cbiAgLy8gRGlzcGF0Y2ggYW4gZXZlbnQgbm90aWZ5aW5nIHRoYXQgdGhlIHZpZXdlciBoYXMgYmVlbiBsb2FkZWRcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZpZXdlckxvYWRlZCcpKTtcbn1cbiIsImltcG9ydCB7IGxhdGV4VG9NYXRobWwgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnRpZXMnO1xuXG5pbnRlcmZhY2UgTGF0ZXhQb3NpdGlvbiB7XG4gIHN0YXJ0OiBudW1iZXIsXG4gIGVuZDogbnVtYmVyLFxufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBET00gbG9va2luZyBmb3IgTGFUZVggbm9kZXMgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCB0aGUgY29ycmVzcG9uZGluZyByZW5kZXJlZCBpbWFnZXMuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gQW55IERPTSBlbGVtZW50IHRoYXQgY2FuIGNvbnRhaW4gTWF0aE1MLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyTGF0ZXgocHJvcGVydGllczogUHJvcGVydGllcywgcm9vdDogSFRNTEVsZW1lbnQpIHtcblxuICBpZiAocHJvcGVydGllcy52aWV3ZXIgIT09ICdpbWFnZScgJiYgcHJvcGVydGllcy52aWV3ZXIgIT09ICdsYXRleCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsYXRleE5vZGVzID0gZmluZExhdGV4VGV4dE5vZGVzKHJvb3QpO1xuXG4gIGZvciAoY29uc3QgbGF0ZXhOb2RlIG9mIGxhdGV4Tm9kZXMpIHtcbiAgICBhd2FpdCByZXBsYWNlTGF0ZXhJblRleHROb2RlKHByb3BlcnRpZXMsIGxhdGV4Tm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIExhVGVYIGluc3RhbmNlcyB3aXRoIE1hdGhNTCBpbnNpZGUgYSBnaXZlbiBub2RlLlxuICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllcyBvZiB0aGUgdmlld2VyLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGV4dCBub2RlIGluIHdoaWNoIHRvIHNlYXJjaCBhbmQgcmVwbGFjZSBMYVRlWCBpbnN0YW5jZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcGxhY2VMYXRleEluVGV4dE5vZGUocHJvcGVydGllczogUHJvcGVydGllcywgbm9kZTogTm9kZSkge1xuICBjb25zdCB0ZXh0Q29udGVudDogc3RyaW5nID0gbm9kZS50ZXh0Q29udGVudCB8fCAnJztcbiAgbGV0IHBvczogbnVtYmVyID0gMDtcblxuICB3aGlsZSAocG9zIDwgdGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgY29uc3QgbmV4dExhdGV4UG9zaXRpb246IExhdGV4UG9zaXRpb24gPSBnZXROZXh0TGF0ZXhQb3MocG9zLCB0ZXh0Q29udGVudCk7XG4gICAgaWYgKG5leHRMYXRleFBvc2l0aW9uKSB7XG4gICAgICAvLyBHZXQgbGVmdCBub24gTGFUZVggdGV4dC5cbiAgICAgIGNvbnN0IGxlZnRUZXh0OiBzdHJpbmcgPSB0ZXh0Q29udGVudC5zdWJzdHJpbmcocG9zLCBuZXh0TGF0ZXhQb3NpdGlvbi5zdGFydCk7XG4gICAgICBjb25zdCBsZWZ0VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWZ0VGV4dCk7XG4gICAgICAvLyBDcmVhdGUgYSBub2RlIHdpdGggbGVmdCB0ZXh0LlxuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUobGVmdFRleHROb2RlLCBub2RlKTtcbiAgICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5ub2RlVmFsdWUuc3Vic3RyaW5nKHBvcywgbmV4dExhdGV4UG9zaXRpb24uc3RhcnQpO1xuXG4gICAgICAvLyBHZXQgTGFUZVggdGV4dC5cbiAgICAgIGNvbnN0IGxhdGV4ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKG5leHRMYXRleFBvc2l0aW9uLnN0YXJ0ICsgJyQkJy5sZW5ndGgsIG5leHRMYXRleFBvc2l0aW9uLmVuZCk7XG4gICAgICAvLyBDb252ZXJ0IExhVGVYIHRvIG1hdGhtbC5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGF0ZXhUb01hdGhtbChsYXRleCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc1Jvb3QsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNFeHRlbnNpb24pO1xuICAgICAgLy8gSW5zZXJ0IG1hdGhtbCBub2RlLlxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChyZXNwb25zZS50ZXh0KTtcblxuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIG5vZGUpO1xuICAgICAgbm9kZS5ub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcobmV4dExhdGV4UG9zaXRpb24uc3RhcnQsIG5leHRMYXRleFBvc2l0aW9uLmVuZCk7XG5cbiAgICAgIHBvcyA9IG5leHRMYXRleFBvc2l0aW9uLmVuZCArICckJCcubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBtb3JlIExhVGVYIG5vZGUgZm91bmQuXG4gICAgICBjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHBvcyk7XG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGUpO1xuICAgICAgbm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgIHBvcyA9IHRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvLyBEZWxldGUgb3JpZ2luYWwgdGV4dCBub2RlLlxuICBub2RlLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSB3aXRoIGFsbCBIVE1MIExhVGVYIG5vZGVzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIEFueSBET00gZWxlbWVudCB0aGF0IGNhbiBjb250YWluIExhVGVYLlxuICogQHJldHVybnMge05vZGVbXX0gQXJyYXkgd2l0aCBhbGwgSFRNTCBMYVRlWCBub2RlcyBpbnNpZGUgcm9vdC5cbiAqL1xuZnVuY3Rpb24gZmluZExhdGV4VGV4dE5vZGVzKHJvb3Q6IGFueSk6IE5vZGVbXSB7XG4gIGNvbnN0IG5vZGVJdGVyYXRvcjogTm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKFxuICAgIHJvb3QsXG4gICAgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgbm9kZSA9PiAvKFxcJFxcJCkoLiopKFxcJFxcJCkvLnRlc3Qobm9kZS5ub2RlVmFsdWUgfHwgJycpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUXG4gICk7XG4gIGNvbnN0IGxhdGV4Tm9kZXMgOiBOb2RlW10gPSBbXTtcblxuICBsZXQgY3VycmVudE5vZGU6IE5vZGUgfCBudWxsO1xuICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgIGxhdGV4Tm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGF0ZXhOb2Rlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB7c3RhcnQsIGVuZH0gd2l0aCB0aGUgc3RhcnQgYW5kIGVuZCBsYXRleCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgLSBDdXJyZW50IHBvc2l0aW9uIGluc2lkZSB0aGUgdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB3aGVyZSB0aGUgbmV4dCBsYXRleCBpdCB3aWxsIGJlIHNlYXJjaGVkLlxuICogQFxuICovXG5mdW5jdGlvbiBnZXROZXh0TGF0ZXhQb3MocG9zOiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IExhdGV4UG9zaXRpb24ge1xuICBjb25zdCBmaXJzdExhdGV4VGFncyA9IHRleHQuaW5kZXhPZignJCQnLCBwb3MpO1xuICBjb25zdCBzZWNvbmRMYXRleFRhZ3MgPSBmaXJzdExhdGV4VGFncyA9PSAtMSA/IC0xIDogdGV4dC5pbmRleE9mKCckJCcsIGZpcnN0TGF0ZXhUYWdzICsgJyQkJy5sZW5ndGgpO1xuICByZXR1cm4gZmlyc3RMYXRleFRhZ3MgIT0gLTEgJiYgc2Vjb25kTGF0ZXhUYWdzICE9IC0xID8geydzdGFydCc6IGZpcnN0TGF0ZXhUYWdzLCAnZW5kJzogc2Vjb25kTGF0ZXhUYWdzfSA6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgc2hvd0ltYWdlLCBjcmVhdGVJbWFnZSwgbWF0aG1sMmFjY2Vzc2libGUsIHByb2Nlc3NKc29uUmVzcG9uc2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IGh0bWxFbnRpdGllc1RvWG1sRW50aXRpZXMsIGNvcnJ1cHRNYXRoTUwgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBEYXRhIG9idGFpbmVkIHdoZW4gcmVuZGVyaW5nIGltYWdlLiBEYXRhIG5lZWRlZCB0byBzZXQgdGhlIGZvcm11bGEgaW1hZ2UgcGFyYW1ldGVycy5cbiAqL1xuaW50ZXJmYWNlIEZvcm11bGFEYXRhIHtcbiAgY29udGVudDogc3RyaW5nLFxuICBiYXNlbGluZTogc3RyaW5nLFxuICBoZWlnaHQ6IHN0cmluZyxcbiAgd2lkdGg6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgRE9NIGxvb2tpbmcgZm9yIDxtYXRoPiBlbGVtZW50cyBhbmQgcmVwbGFjZSB0aGVtIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcmVuZGVyZWQgaW1hZ2VzIHdpdGhpbiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcGVydGllcyAtIFByb3BlcnRpZXMgb2YgdGhlIHZpZXdlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBBbnkgRE9NIGVsZW1lbnQgdGhhdCBjYW4gY29udGFpbiBNYXRoTUwuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJNYXRoTUwocHJvcGVydGllczogUHJvcGVydGllcywgcm9vdDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcblxuICBpZiAocHJvcGVydGllcy52aWV3ZXIgIT09ICdpbWFnZScgJiYgcHJvcGVydGllcy52aWV3ZXIgIT09ICdtYXRobWwnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yKGNvbnN0IG1hdGhFbGVtZW50IG9mIFsuLi5yb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXRoJyldKSB7XG4gICAgY29uc3QgbW1sID0gaHRtbEVudGl0aWVzVG9YbWxFbnRpdGllcyhtYXRoRWxlbWVudC5vdXRlckhUTUwpO1xuXG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmIChwcm9wZXJ0aWVzLndpcmlzcGx1Z2lucGVyZm9ybWFuY2UgPT09ICd0cnVlJykge1xuICAgICAgLy8gVHJhbnNmb3JtIG1tbCB0byBpbWcuXG4gICAgICByZXN1bHQgPSBhd2FpdCBzaG93SW1hZ2UobW1sLCBwcm9wZXJ0aWVzLmxhbmcsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNSb290LCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY3JlYXRlaW1hZ2UgcmV0dXJucyB0aGUgVVJMIHRvIHNob3dpbWFnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBpbWFnZVxuICAgICAgbGV0IHVybCA9IGF3YWl0IGNyZWF0ZUltYWdlKG1tbCwgcHJvcGVydGllcy5sYW5nLCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzUm9vdCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbik7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgbmVjZXNzYXJ5IGR1ZSB0byBhIGJ1ZyBpbiBob3cgdGhlIHNlcnZpY2VzIGludGVyb3BlcmF0ZS5cbiAgICAgIC8vIFRPRE8gZml4IHRoZSBjYXVzaW5nIGJ1Z1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJ3BsdWdpbnNhcHAnLCAncGx1Z2lucy9hcHAnKTtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NKc29uUmVzcG9uc2UoZmV0Y2godXJsKSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGltZyBwcm9wZXJ0aWVzLlxuICAgIGNvbnN0IGltZyA9IGF3YWl0IHNldEltYWdlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCByZXN1bHQsIG1tbCk7XG4gICAgLy8gY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChkYXRhLnJlc3VsdC5jb250ZW50KTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIE1hdGhNTCBmb3IgdGhlIGdlbmVyYXRlZCBmb3JtdWxhIGltYWdlLlxuICAgIG1hdGhFbGVtZW50LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChpbWcsIG1hdGhFbGVtZW50KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltYWdlIGZvcm11bGEgY29udGFpbmluZyBhbGwgTWF0aFR5cGUgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcGVydGllcyAtIFByb3BlcnRpZXMgb2YgdGhlIHZpZXdlci5cbiAqIEBwYXJhbSB7Rm9ybXVsYURhdGF9IGRhdGEgLSBPYmplY3QgY29udGFpbmluZyBpbWFnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW1sIC0gVGhlIE1hdGhNTCBvZiB0aGUgZm9ybXVsYSBpbWFnZSBiZWVpbmcgY3JlYXRlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+fSAtIEZvcm11bGEgaW1hZ2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldEltYWdlUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzLCBkYXRhOiBGb3JtdWxhRGF0YSwgbW1sOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcblxuICAvLyBDcmVhdGUgaW1hZyBlbGVtZW50LlxuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgLy8gU2V0IGltYWdlIHNyYy4gRW5jb2RlIHRoZSByZXN1bHQgc3ZnLlxuICBpbWcuc3JjID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YS5jb250ZW50KX1gO1xuXG4gIC8vIFNldCBvdGhlciBpbWFnZSBwcm9wZXJ0aWVzLlxuICBpbWcuc2V0QXR0cmlidXRlKHByb3BlcnRpZXMud2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUsIG1tbCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1dpcmlzZm9ybXVsYScpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21hdGgnKTtcblxuICAvLyBJZiB0aGUgcmVuZGVyIHJldHVybnMgZGltZW5zaW9ucyBwcm9wZXJ0aWVzLCBzZXQgdGhlbSB0byB0aGUgaW1hZ2UuXG4gIGlmICgrZGF0YS5oZWlnaHQgPiAwKSB7XG4gICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIi1cIiArICgrZGF0YS5oZWlnaHQgLSArZGF0YS5iYXNlbGluZSkgKyBcInB4XCI7XG4gICAgaW1nLmhlaWdodCA9ICtkYXRhLmhlaWdodDtcbiAgICBpbWcud2lkdGggPSArZGF0YS53aWR0aDtcbiAgfVxuXG4gIC8vIFNldCB0aGUgYWx0IHRleHQgd2hlbmV2ZXIgdGhlcmUncyBhIHRyYW5zbGF0aW9uIGZvciB0aGUgY2hhcmFjdGVycyBhbmQgTWF0aE1MIG9uIHRoZSBtbWwuXG4gIGlmICghY29ycnVwdE1hdGhNTC5zb21lKGNvcnJ1cHRNYXRoTUwgPT4gbW1sLmluY2x1ZGVzKGNvcnJ1cHRNYXRoTUwpKSkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgbWF0aG1sMmFjY2Vzc2libGUobW1sLCBwcm9wZXJ0aWVzLmxhbmcsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNSb290LCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uKTtcbiAgICBpbWcuYWx0ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiBpbWc7XG5cbn1cbiIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb25Kc29uLCBTdGF0dXNFcnJvciB9IGZyb20gJy4vc2VydmljZXMnO1xuXG4vLyBIZWxwZXIgdHlwZXMgZm9yIENvbmZpZyBiZWxvd1xudHlwZSBWaWV3ZXIgPSAnbm9uZScgfCAnaW1hZ2UnIHwgJ21hdGhtbCcgfCAnbGF0ZXgnO1xudHlwZSBXaXJpc3BsdWdpbnBlcmZvcm1hbmNlID0gJ3RydWUnIHwgJ2ZhbHNlJztcblxuLyoqXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbGwgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB2aWV3ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgZWRpdG9yU2VydmljZXNSb290Pzogc3RyaW5nLFxuICBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbj86IHN0cmluZyxcbiAgYmFja2VuZENvbmZpZz86IHtcbiAgICB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlPzogV2lyaXNwbHVnaW5wZXJmb3JtYW5jZSxcbiAgICB3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZT86IHN0cmluZyxcbiAgfSxcbiAgZHBpPzogbnVtYmVyLFxuICBlbGVtZW50Pzogc3RyaW5nLFxuICBsYW5nPzogc3RyaW5nLFxuICB2aWV3ZXI/OiBWaWV3ZXIsXG4gIHpvb20/OiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEZhbGxiYWNrIHZhbHVlcyBmb3IgdGhlIGNvbmZpZ3VyYXRpb25zIHRoYXQgYXJlIG5vdCBzZXQuXG4gKi9cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IENvbmZpZyA9IHtcbiAgZWRpdG9yU2VydmljZXNSb290OiAnaHR0cHM6Ly93d3cud2lyaXMubmV0L2RlbW8vcGx1Z2lucy9hcHAvJyxcbiAgZWRpdG9yU2VydmljZXNFeHRlbnNpb246ICcnLFxuICBiYWNrZW5kQ29uZmlnOiB7XG4gICAgd2lyaXNwbHVnaW5wZXJmb3JtYW5jZTogJ3RydWUnLFxuICAgIHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlOiAnZGF0YS1tYXRobWwnXG4gIH0sXG4gIGRwaTogOTYsXG4gIGVsZW1lbnQ6ICdib2R5JyxcbiAgbGFuZzogJ2VuJyxcbiAgdmlld2VyOiAnbm9uZScsXG4gIHpvb206IDEsXG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyB3aWxsIGhhbmRsZSB0aGUgcGFyYW1ldGVycyBkZWZpbmVkIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydGllcyB7XG5cbiAgcmVuZGVyOiAoKSA9PiBQcm9taXNlPHZvaWQ+ID0gYXN5bmMgKCkgPT4ge307XG5cbiAgLy8gR2V0IFVSTCBwcm9wZXJ0aWVzIChyZXRyb2NvbXBhdGliaWxpdHkpLlxuICBjb25maWc6IENvbmZpZyA9IGRlZmF1bHRWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEluc3RlYWQsIHVzZSB7QGxpbmsgUHJvcGVydGllcy5nZW5lcmF0ZX0uXG4gICAqIENvbnN0cnVjdG9ycyBjYW5ub3QgYmUgYXN5bmMgc28gd2UgbWFrZSBpdCBwcml2YXRlIGFuZCBmb3JjZSBpbnN0YW50aWF0aW9uIHRocm91Z2ggYW4gYWx0ZXJuYXRpdmUgc3RhdGljIG1ldGhvZC5cbiAgICovXG4gIHByaXZhdGUgbmV3KCkge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgc2V0cyB1cCBhIG5ldyBpbnN0YW5jZSBvZiBjbGFzcyBQcm9wZXJ0aWVzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGUoKTogUHJvbWlzZTxQcm9wZXJ0aWVzPiB7XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQcm9wZXJ0aWVzKCk7XG5cbiAgICAvLyBHZXQgVVJMIHBhcmFtZXRlcnMgZnJvbSA8c2NyaXB0PlxuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSAnV0lSSVNwbHVnaW5zLmpzJztcbiAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3BsdWdpbk5hbWV9XCJdYCk7XG5cbiAgICBpZiAoISFzY3JpcHQpIHtcblxuICAgICAgY29uc3QgcGx1Z2luTmFtZVBvc2l0aW9uOiBudW1iZXIgPSBzY3JpcHQuc3JjLmxhc3RJbmRleE9mKHBsdWdpbk5hbWUpO1xuICAgICAgY29uc3QgcGFyYW1zOiBzdHJpbmcgPSBzY3JpcHQuc3JjLnN1YnN0cmluZyhwbHVnaW5OYW1lUG9zaXRpb24gKyBwbHVnaW5OYW1lLmxlbmd0aCk7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XG5cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCdkcGknKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCdkcGknKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy5kcGkgPSArdXJsUGFyYW1zLmdldCgnZHBpJyk7XG4gICAgICB9XG4gICAgICBpZiAodXJsUGFyYW1zLmdldCgnZWxlbWVudCcpICE9PSBudWxsICYmIHVybFBhcmFtcy5nZXQoJ2VsZW1lbnQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy5lbGVtZW50ID0gdXJsUGFyYW1zLmdldCgnZWxlbWVudCcpO1xuICAgICAgfVxuICAgICAgaWYgKHVybFBhcmFtcy5nZXQoJ2xhbmcnKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCdsYW5nJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5jb25maWcubGFuZyA9IHVybFBhcmFtcy5nZXQoJ2xhbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCd2aWV3ZXInKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCd2aWV3ZXInKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy52aWV3ZXIgPSAodXJsUGFyYW1zLmdldCgndmlld2VyJykgYXMgVmlld2VyKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCd6b29tJykgIT09IG51bGwgJiYgdXJsUGFyYW1zLmdldCgnem9vbScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuY29uZmlnLnpvb20gPSArdXJsUGFyYW1zLmdldCgnem9vbScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gR2V0IGJhY2tlbmQgcGFyYW1ldGVycyBjYWxsaW5nIHRoZSBjb25maWd1cmF0aW9uanNvbiBzZXJ2aWNlXG4gICAgdHJ5IHtcbiAgICAgIGluc3RhbmNlLmNvbmZpZy5iYWNrZW5kQ29uZmlnID0gYXdhaXQgY29uZmlndXJhdGlvbkpzb24oXG4gICAgICAgIFsnd2lyaXNwbHVnaW5wZXJmb3JtYW5jZScsICd3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSddLFxuICAgICAgICBpbnN0YW5jZS5lZGl0b3JTZXJ2aWNlc1Jvb3QsXG4gICAgICAgIGluc3RhbmNlLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uLFxuICAgICAgKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgU3RhdHVzRXJyb3IpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZzsgbGVhdmUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBlZGl0b3JTZXJ2aWNlc1Jvb3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNSb290IHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmVkaXRvclNlcnZpY2VzUm9vdDtcbiAgfVxuXG4gIHNldCBlZGl0b3JTZXJ2aWNlc1Jvb3QoZWRpdG9yU2VydmljZXNSb290OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5lZGl0b3JTZXJ2aWNlc1Jvb3QgPSBlZGl0b3JTZXJ2aWNlc1Jvb3Q7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbiB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjtcbiAgfVxuXG4gIHNldCBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbihlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNFeHRlbnNpb24gPSBlZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFuZ3VhZ2UuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgbGFuZyBwYXJhbWV0ZXIgc2V0IGluIHRoZSA8c2NyaXB0PiAoV0lSSVNwbHVnaW4uanM/bGFuZz0uLi4pXG4gICAqIC0gVGhlIEhUTUwgZG9jdW1lbnQgbGFuZ3VhZ2UgKDxodG1sIGxhbmc9Li4uPikuXG4gICAqIC0gVGhlIGxhbmd1YWdlIG9mIHRoZSBicm93c2VyLlxuICAgKiAtIEVuZ2xpc2gsIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgbGFuZ3VhZ2Ugc3RyaW5nLlxuICAgKi9cbiAgZ2V0IGxhbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWdMYW5nID0gKHRoaXMuY29uZmlnLmxhbmcgPT09ICdpbmhlcml0JykgPyBudWxsIDogdGhpcy5jb25maWcubGFuZztcbiAgICByZXR1cm4gY29uZmlnTGFuZyB8fFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5sYW5nIHx8XG4gICAgICBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMubGFuZztcbiAgfVxuXG4gIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmxhbmcgPSBsYW5nO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2aWV3ZXIgbW9kZSBmb3IgdGhlIE1hdGhNTC5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSB2aWV3ZXIgcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP3ZpZXdlcj0uLi4pXG4gICAqIC0gbm9uZSwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCB2aWV3ZXIoKTogVmlld2VyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudmlld2VyIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLnZpZXdlcjtcbiAgfVxuXG4gIHNldCB2aWV3ZXIodmlld2VyOiBWaWV3ZXIpIHtcbiAgICB0aGlzLmNvbmZpZy52aWV3ZXIgPSB2aWV3ZXI7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRwaSBvZiB0aGUgaW1hZ2VzLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIGRwaSBwYXJhbWV0ZXIgc2V0IGluIHRoZSA8c2NyaXB0PiAoV0lSSVNwbHVnaW4uanM/ZHBpPS4uLilcbiAgICogLSA5NiwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCBkcGkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZHBpIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmRwaTtcbiAgfVxuXG4gIHNldCBkcGkoZHBpOiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5kcGkgPSBkcGk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHpvb20gb2YgdGhlIGltYWdlcy5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSB6b29tIHBhcmFtZXRlciBzZXQgaW4gdGhlIDxzY3JpcHQ+IChXSVJJU3BsdWdpbi5qcz96b29tPS4uLilcbiAgICogLSAxLCBieSBkZWZhdWx0LlxuICAgKi9cbiAgZ2V0IHpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuem9vbSB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy56b29tO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuem9vbSA9IHpvb207XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGVsZW1lbnQgaW4gd2hpY2ggdG8gcmVuZGVyIGZvcm11bGFzLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIHpvb20gcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP2VsZW1lbnQ9Li4uKVxuICAgKiAtICdib2R5JywgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCBlbGVtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVsZW1lbnQgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuZWxlbWVudDtcbiAgfVxuXG4gIHNldCBlbGVtZW50KGVsZW1lbnQ6IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBXaXJpcyBwbHVnaW4gcGVyZm9ybWFuY2UuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqIC0gdHJ1ZSwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlKCk6IFdpcmlzcGx1Z2lucGVyZm9ybWFuY2Uge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kQ29uZmlnLndpcmlzcGx1Z2lucGVyZm9ybWFuY2UgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuYmFja2VuZENvbmZpZy53aXJpc3BsdWdpbnBlcmZvcm1hbmNlO1xuICB9XG5cbiAgc2V0IHdpcmlzcGx1Z2lucGVyZm9ybWFuY2Uod2lyaXNwbHVnaW5wZXJmb3JtYW5jZTogV2lyaXNwbHVnaW5wZXJmb3JtYW5jZSkge1xuICAgIHRoaXMuY29uZmlnLmJhY2tlbmRDb25maWcud2lyaXNwbHVnaW5wZXJmb3JtYW5jZSA9IHdpcmlzcGx1Z2lucGVyZm9ybWFuY2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIFdpcmlzIE1hdGhNTCBhdHRyaWJ1dGUuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgYmFja2VuZCBjb25maWd1cmF0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqIC0gZGF0YS1tYXRobWwsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZENvbmZpZy53aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5iYWNrZW5kQ29uZmlnLndpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlO1xuICB9XG5cbiAgc2V0IHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlKHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5iYWNrZW5kQ29uZmlnLndpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlID0gd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyTGF0ZXggfSBmcm9tIFwiLi9sYXRleFwiO1xuaW1wb3J0IHsgcmVuZGVyTWF0aE1MIH0gZnJvbSBcIi4vbWF0aG1sXCI7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vcHJvcGVydGllc1wiO1xuXG4vKipcbiAqIEV4cG9zZXMgdGhlIHtAbGluayBKc1BsdWdpblZpZXdlcn0gc2luZ2xldG9uIGluc3RhbmNlIGFzIHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5WaWV3ZXIuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge1dpbmRvd30gdyAtIEluc3RhbmNlIG9mIHRoZSBnbG9iYWwgd2luZG93LlxuICogQGRlcHJlY2F0ZWQgQ29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlckxhdGV4fSBvciB7QGxpbmsgcmVuZGVyTWF0aE1MfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc0VuY2Fwc3VsYXRpb24ocHJvcGVydGllczogUHJvcGVydGllcywgdzogV2luZG93KSB7XG4gIGNvbnN0IHdhbnkgPSB3IGFzIGFueTtcblxuICBpZiAodHlwZW9mIHdhbnkuY29tID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzLmpzID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzLmpzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHdhbnkuY29tLndpcmlzLmpzLkpzUGx1Z2luVmlld2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhbnkuY29tLndpcmlzLmpzLkpzUGx1Z2luVmlld2VyID0gSnNQbHVnaW5WaWV3ZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBKc1BsdWdpblZpZXdlci5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBjb21wYXRpYmlsaXR5IGxheWVyIHdpdGggdGhlIG9sZCBWaWV3ZXIuXG4gKiBTZWUgaGF4ZS9zcmMtaGF4ZS9jb20vd2lyaXMvanMvSnNQbHVnaW5WaWV3ZXIuaHggaW4gaW4gdGhlIHJlcG8gd2lyaXMvcGx1Z2lucyBwcmV2aW91cyB0byBjb21taXQgZGYxMjQ4YS5cbiAqXG4gKiBXQVJOSU5HOiB0aGUgbWV0aG9kcyBpbiB0aGlzIGNsYXNzIG1heSBjb250YWluIGRpcmVjdCByZWZlcmVuY2VzIHRvIGdsb2JhbHMgc3VjaCBhcyB3aW5kb3cgYW5kIGRvY3VtZW50LlxuICpcbiAqIEBkZXByZWNhdGVkIENvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0gb3Ige0BsaW5rIHJlbmRlck1hdGhNTH0uXG4gKi9cbmNsYXNzIEpzUGx1Z2luVmlld2VyIHtcbiAgc3RhdGljIGluc3RhbmNlOiBKc1BsdWdpblZpZXdlcjtcbiAgc3RhdGljIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IEpzUGx1Z2luVmlld2VyIHtcbiAgICBpZiAoSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2UgPSBuZXcgSnNQbHVnaW5WaWV3ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSnNQbHVnaW5WaWV3ZXIuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFsbCB0aGUgZm9ybXVsYXMgd3JpdHRlbiBpbiBTYWZlTWF0aE1MIGluc2lkZSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byByZW5kZXIgU2FmZU1hdGhNTCBmb3JtdWxhcy5cbiAgICogQHBhcmFtIGFzeW5jaHJvbm91c2x5IC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBkZXByZWNhdGVkIFRoZXJlIGlzIGN1cnJlbnRseSBubyByZXBsYWNlbWVudCBmb3IgcmVuZGVyaW5nIFNhZmVNYXRoTUwgZm9ybXVsYXMuXG4gICAqIFBsZWFzZSBjb25zaWRlciB1c2luZyB7QGxpbmsgcmVuZGVyTGF0ZXh9IG9yIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICAgKi9cbiAgcGFyc2VTYWZlTWF0aE1MRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdmFyIG1hdGhtbFBvc2l0aW9ucyA9IFtdO1xuICAgIEpzUGx1Z2luVmlld2VyLmdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKGVsZW1lbnQsIG1hdGhtbFBvc2l0aW9ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRobWxQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtYXRobWxQb3NpdGlvbiA9IG1hdGhtbFBvc2l0aW9uc1tpXTtcbiAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1hdGhcIik7XG4gICAgICBtYXRobWxQb3NpdGlvbi5uZXh0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBtYXRobWxQb3NpdGlvbi5uZXh0RWxlbWVudCk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IEpzUGx1Z2luVmlld2VyLmRlY29kZVNhZmVNYXRoTUwobWF0aG1sUG9zaXRpb24uc2FmZU1NTCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgdGhlIGZvcm11bGFzIGluIHRoZSBkb2N1bWVudC5cbiAgICogQHBhcmFtIGFzeW5jaHJvbm91c2x5IC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBzYWZlWG1sIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICAgKi9cbiAgYXN5bmMgcGFyc2VEb2N1bWVudChhc3luY2hyb25vdXNseT86IGJvb2xlYW4sIGNhbGxiYWNrRnVuYz86ICgpID0+IHZvaWQsIHNhZmVYbWw/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlbmRlck1hdGhNTChKc1BsdWdpblZpZXdlci5wcm9wZXJ0aWVzLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgdGhlIGZvcm11bGFzIGluc2lkZSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byByZW5kZXIgZm9ybXVsYXMuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgY29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlck1hdGhNTH0uXG4gICAqL1xuICBhc3luYyBwYXJzZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFzeW5jaHJvbm91c2x5PzogYm9vbGVhbiwgY2FsbGJhY2tGdW5jPzogKCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiByZW5kZXJNYXRoTUwoSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcywgZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhbGwgdGhlIExhVGVYIGZvcm11bGFzIGluIHRoZSBkb2N1bWVudCB0byBNYXRoTUwuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgY29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlckxhdGV4fS5cbiAgICovXG4gIGFzeW5jIHBhcnNlTGF0ZXhEb2N1bWVudChhc3luY2hyb25vdXNseT86IGJvb2xlYW4sIGNhbGxiYWNrRnVuYz86ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVuZGVyTGF0ZXgoSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcywgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFsbCB0aGUgTGFUZVggZm9ybXVsYXMgaW5zaWRlIHRoZSBnaXZlbiBlbGVtZW50IHRvIE1hdGhNTC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgd2hlcmVpbiB0byBjb252ZXJ0IGZvcm11bGFzLlxuICAgKiBAcGFyYW0gYXN5bmNocm9ub3VzbHkgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tGdW5jIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0uXG4gICAqL1xuICBhc3luYyBwYXJzZUxhdGV4RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlbmRlckxhdGV4KEpzUGx1Z2luVmlld2VyLnByb3BlcnRpZXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZGVjb2RlU2FmZU1hdGhNTChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgc2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcyA9IEpzQ2hhcmFjdGVycy5nZXRTYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzKCk7XG4gICAgdmFyIHhtbENoYXJhY3RlcnMgPSBKc0NoYXJhY3RlcnMuZ2V0WE1MQ2hhcmFjdGVycygpO1xuICAgIHZhciBzYWZlWE1MQ2hhcmFjdGVycyA9IEpzQ2hhcmFjdGVycy5nZXRTYWZlWE1MQ2hhcmFjdGVycygpO1xuXG4gICAgdmFyIHRhZ09wZW5lckVudGl0eSA9IHNhZmVYTUxDaGFyYWN0ZXJzRW50aXRpZXMudGFnT3BlbmVyO1xuICAgIHZhciB0YWdDbG9zZXJFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLnRhZ0Nsb3NlcjtcbiAgICB2YXIgZG91YmxlUXVvdGVFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLmRvdWJsZVF1b3RlO1xuICAgIHZhciByZWFsRG91YmxlUXVvdGVFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLnJlYWxEb3VibGVRdW90ZTtcblxuXG4gICAgLy8gSW1wb3J0YW50IHRvIG5vdCBjaGFuZ2UgZnVuY3Rpb24gcGFyYW1ldGVyLlxuICAgIHZhciBpbnB1dENvcHkgPSBpbnB1dC5zbGljZSgpO1xuXG4gICAgLy8gRGVjb2RpbmcgZW50aXRpZXMuXG4gICAgaW5wdXRDb3B5ID0gaW5wdXRDb3B5LnNwbGl0KHRhZ09wZW5lckVudGl0eSkuam9pbihzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdDbG9zZXJFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMudGFnQ2xvc2VyKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQoZG91YmxlUXVvdGVFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdChyZWFsRG91YmxlUXVvdGVFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlKTtcblxuICAgIHZhciB0YWdPcGVuZXIgPSBzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXI7XG4gICAgdmFyIHRhZ0Nsb3NlciA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ0Nsb3NlcjtcbiAgICB2YXIgZG91YmxlUXVvdGUgPSBzYWZlWE1MQ2hhcmFjdGVycy5kb3VibGVRdW90ZTtcbiAgICB2YXIgcmVhbERvdWJsZVF1b3RlID0gc2FmZVhNTENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlO1xuICAgIHZhciBhbXBlcnNhbmQgPSBzYWZlWE1MQ2hhcmFjdGVycy5hbXBlcnNhbmQ7XG4gICAgdmFyIHF1b3RlID0gc2FmZVhNTENoYXJhY3RlcnMucXVvdGU7XG5cbiAgICAvLyBEZWNvZGluZyBjaGFyYWN0ZXJzLlxuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oeG1sQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oeG1sQ2hhcmFjdGVycy50YWdDbG9zZXIpO1xuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdChkb3VibGVRdW90ZSkuam9pbih4bWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQoYW1wZXJzYW5kKS5qb2luKHhtbENoYXJhY3RlcnMuYW1wZXJzYW5kKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQocXVvdGUpLmpvaW4oeG1sQ2hhcmFjdGVycy5xdW90ZSk7XG5cbiAgICAvLyBXZSBhcmUgcmVwbGFjaW5nICQgYnkgJiB3aGVuIGl0cyBwYXJ0IG9mIGFuIGVudGl0eSBmb3IgcmV0cm9jb21wYXRpYmlsaXR5LlxuICAgIC8vIE5vdywgdGhlIHN0YW5kYXJkIGlzIHJlcGxhY2UgwqcgYnkgJi5cbiAgICB2YXIgcmV0dXJuVmFsdWUgPSAnJztcbiAgICB2YXIgY3VycmVudEVudGl0eSA9IG51bGw7XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBpbnB1dENvcHkubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hhcmFjdGVyID0gaW5wdXRDb3B5LmNoYXJBdChpKTtcbiAgICAgIGlmIChjdXJyZW50RW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PSAnJCcpIHtcbiAgICAgICAgICBjdXJyZW50RW50aXR5ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PSAnOycpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gJyYnICsgY3VycmVudEVudGl0eTtcbiAgICAgICAgY3VycmVudEVudGl0eSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5tYXRjaCgvKFthLXpBLVowLTkjLl8tXSB8ICctJykvKSkgeyAvLyBDaGFyYWN0ZXIgaXMgcGFydCBvZiBhbiBlbnRpdHkuXG4gICAgICAgIGN1cnJlbnRFbnRpdHkgKz0gY2hhcmFjdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gJyQnICsgJ2N1cnJlbnRFbnRpdHknOyAvLyBJcyBub3QgYW4gZW50aXR5LlxuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgICAgaSAtPSAxOyAvLyBQYXJzZSBhZ2FpbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0TWF0aE1MUG9zaXRpb25zQXRFbGVtZW50QW5kQ2hpbGRyZW4oZWxlbWVudDogTm9kZSwgbWF0aG1sUG9zaXRpb25zKSB7XG4gICAgSnNQbHVnaW5WaWV3ZXIuZ2V0TWF0aE1MUG9zaXRpb25zQXROb2RlKGVsZW1lbnQsIG1hdGhtbFBvc2l0aW9ucyk7XG4gICAgLy8gQ29weSBjdXJyZW50IGNoaWxkcmVuIGJlY2F1c2UgRE9NIHdpbGwgYmUgY2hhbmdlZCBhbmQgZWxlbWVudC5jaGlsZE5vZGVzIHdvbid0IGJlXG4gICAgLy8gY29uc2lzdGVudCBvbiBjYWxsIGdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKCkuXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIEpzUGx1Z2luVmlld2VyLmdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKGNoaWxkLCBtYXRobWxQb3NpdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldE1hdGhNTFBvc2l0aW9uc0F0Tm9kZShub2RlOiBOb2RlLCBtYXRobWxQb3NpdGlvbnMpIHtcbiAgICB2YXIgc2FmZVhNTENoYXJhY3RlcnMgPSBKc0NoYXJhY3RlcnMuZ2V0U2FmZVhNTENoYXJhY3RlcnMoKTtcbiAgICBpZihub2RlLm5vZGVUeXBlID09IDMpIHtcbiAgICAgIHZhciBzdGFydE1hdGhtbFRhZyA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ09wZW5lciArIFwibWF0aFwiO1xuICAgICAgdmFyIGVuZE1hdGhtbFRhZyA9IHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ09wZW5lciArIFwiL21hdGhcIiArIHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ0Nsb3NlcjtcbiAgICAgIHZhciBzdGFydCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihzdGFydE1hdGhtbFRhZyk7XG4gICAgICB2YXIgZW5kID0gMDtcbiAgICAgIHdoaWxlKHN0YXJ0ICE9IC0xKSB7XG4gICAgICAgIGVuZCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihlbmRNYXRobWxUYWcsc3RhcnQgKyBzdGFydE1hdGhtbFRhZy5sZW5ndGgpO1xuXG4gICAgICAgIGlmKGVuZCA9PSAtMSkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG5leHRNYXRoTUwgPSBub2RlLnRleHRDb250ZW50LmluZGV4T2Yoc3RhcnRNYXRobWxUYWcsZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG5cbiAgICAgICAgaWYobmV4dE1hdGhNTCA+PSAwICYmIGVuZCA+IG5leHRNYXRoTUwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBzYWZlTWF0aG1sID0gbm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoc3RhcnQsZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG5cbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsc3RhcnQpICsgbm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoZW5kICsgZW5kTWF0aG1sVGFnLmxlbmd0aCk7XG4gICAgICAgIG5vZGUgPSAobm9kZSBhcyBUZXh0KS5zcGxpdFRleHQoc3RhcnQpO1xuICAgICAgICBzdGFydCA9IG5vZGUudGV4dENvbnRlbnQuaW5kZXhPZihzdGFydE1hdGhtbFRhZyk7XG5cbiAgICAgICAgbWF0aG1sUG9zaXRpb25zLnB1c2goe1xuICAgICAgICAgIHNhZmVNTUw6IHNhZmVNYXRobWwsXG4gICAgICAgICAgbmV4dEVsZW1lbnQ6IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgSnNDaGFyYWN0ZXJzIHtcbiAgc3RhdGljIGdldFNhZmVYTUxDaGFyYWN0ZXJzRW50aXRpZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnT3BlbmVyOiAnJmxhcXVvOycsXG4gICAgICB0YWdDbG9zZXI6ICcmcmFxdW87JyxcbiAgICAgIGRvdWJsZVF1b3RlOiAnJnVtbDsnLFxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnJnF1b3Q7JyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFhNTENoYXJhY3RlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICd4bWxDaGFyYWN0ZXJzJyxcbiAgICAgIHRhZ09wZW5lcjogJzwnLCAvLyBIZXg6IFxceDNDLlxuICAgICAgdGFnQ2xvc2VyOiAnPicsIC8vIEhleDogXFx4M0UuXG4gICAgICBkb3VibGVRdW90ZTogJ1wiJywgLy8gSGV4OiBcXHgyMi5cbiAgICAgIGFtcGVyc2FuZDogJyYnLCAvLyBIZXg6IFxceDI2LlxuICAgICAgcXVvdGU6ICdcXCcnLCAvLyBIZXg6IFxceDI3LlxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0U2FmZVhNTENoYXJhY3RlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICdzYWZlWG1sQ2hhcmFjdGVycycsXG4gICAgICB0YWdPcGVuZXI6ICfCqycsIC8vIEhleDogXFx4QUIuXG4gICAgICB0YWdDbG9zZXI6ICfCuycsIC8vIEhleDogXFx4QkIuXG4gICAgICBkb3VibGVRdW90ZTogJ8KoJywgLy8gSGV4OiBcXHhBOC5cbiAgICAgIGFtcGVyc2FuZDogJ8KnJywgLy8gSGV4OiBcXHhBNy5cbiAgICAgIHF1b3RlOiAnYCcsIC8vIEhleDogXFx4NjAuXG4gICAgICByZWFsRG91YmxlUXVvdGU6ICfCqCcsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhcnNlciBmcm9tICdAd2lyaXMvbWF0aHR5cGUtaHRtbC1pbnRlZ3JhdGlvbi1kZXZraXQvc3JjL3BhcnNlcic7XG5cbmVudW0gTWV0aG9kVHlwZSB7XG4gIFBvc3QgPSBcIlBPU1RcIixcbiAgR2V0ID0gXCJHRVRcIixcbn1cblxuLyoqXG4gKiBUaHJvd24gd2hlbiBhIHNlcnZpY2UgcmV0dXJucyBhIEpTT04gd2l0aCBhIG5vbi1vayBzdGF0dXMgdmFsdWUgaW4gaXRzIEpTT04gYm9keVxuICovXG5leHBvcnQgY2xhc3MgU3RhdHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU3RhdHVzRXJyb3IucHJvdG90eXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm9jZXNzIHJlc3BvbnNlcyBmcm9tIHRoZSBlZGl0b3Igc2VydmljZXMuXG4gKiBUaGVzZSB1c3VhbGx5IGNvbWUgd3JhcHBlZCBpbiBhIEpTT04gd2l0aCBhIHN0YXR1cyBmaWVsZCB0aGF0IGNhbiBiZSBlaXRoZXIgXCJva1wiIG9yIFwid2FybmluZ1wiLlxuICogSWYgc3RhdHVzIGlzIFwib2tcIiwgcmV0dXJuIHRoZSByZXN1bHQgdmFsdWUgYWxvbmcgaXQuIE90aGVyd2lzZSwgdGhyb3cgYSBTdGF0dXNFcnJvci5cbiAqIEBwYXJhbSB7UHJvbWlzZTxSZXNwb25zZT59IHJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIGdpdmVuIGJ5IHRoZSBzZXJ2aWNlLlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHVud3JhcHBlZCByZXN1bHQgb2YgdGhlIHJlc3BvbnNlLCBpZiB2YWxpZC5cbiAqIEB0aHJvd3Mge1N0YXR1c0Vycm9yfSBTZXJ2aWNlIHJlc3BvbmRlZCB3aXRoIGEgbm9uLW9rIHN0YXR1cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2U6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0YXR1cywgcmVzdWx0IH0gPSBhd2FpdCAoYXdhaXQgcmVzcG9uc2UpLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgIHRocm93IG5ldyBTdGF0dXNFcnJvcignU2VydmljZSByZXNwb25kZWQgd2l0aCBhIG5vbi1vayBzdGF0dXMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoKGUpIHtcbiAgICAvLyBUT0RPIG1hbmFnZSBuZXR3b3JrIGFuZCBzdGF0dXMgbm9uLW9rIGVycm9yc1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxscyB0aGUgZW5kcG9pbnQgc2VydmljZW5hbWUgYW5kIHJldHVybnMgaXRzIHJlc3BvbnNlLlxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IC0gT2JqZWN0IG9mIHBhcmFtZXRlcnMgdG8gcGFzcyBhcyB0aGUgYm9keSByZXF1ZXN0IG9yIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VOYW1lIC0gTmFtZSBvZiB0aGUgc2VydmljZSB0byBiZSBjYWxsZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmVyVVJMIC0gVXJsIG9mIHRoZSBzZXJ2ZXIgd2hlcmUgd2Ugd2FudCB0byBjYWxsIHRoZSBzZXJ2aWNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuc2lvbiAtIEV4dGVuc2lvbiB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgc2VydmljZU5hbWUgKGluY2x1ZGluZyB0aGUgZG90IGlmIG5lY2Vzc2FyeSkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59IFRoZSByZXF1ZXN0IHJlc3BvbnNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbFNlcnZpY2UocXVlcnk6IG9iamVjdCwgc2VydmljZU5hbWU6IHN0cmluZywgbWV0aG9kOiBNZXRob2RUeXBlLCBzZXJ2ZXJVUkw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNlcnZpY2VOYW1lICsgZXh0ZW5zaW9uLCBzZXJ2ZXJVUkwpO1xuICAgIGNvbnN0IGluaXQ6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAobWV0aG9kID09PSBNZXRob2RUeXBlLkdldCkge1xuICAgICAgLy8gQWRkIHRoZSBxdWVyeSBhcyBzZWFyY2ggcGFyYW1zXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhxdWVyeSkpIHtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCB0aGUgcXVlcnkgYXMgdGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICAgIGluaXQuYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoey4uLnF1ZXJ5fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybC50b1N0cmluZygpLCBpbml0KTtcbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gVE9ETyBtYW5hZ2UgbmV0d29yayBhbmQgc3RhdHVzIG5vbi1vayBlcnJvcnNcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYWx0IHRleHQgb2YgdGhlIE1hdGhNTCBwYXNzZWQgYXMgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIE1hdGhNTCB0byBiZSB0cmFuc2Zvcm1lZCBpbnRvIGFsdCB0ZXh0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBMYW5ndWFnZSBvZiB0aGUgYWNjZXNzaWJsZSB0ZXh0LlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCBvZiB0aGUgc2VydmVyIHdoZXJlIHdlIHdhbnQgdG8gY2FsbCB0aGUgc2VydmljZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSBUaGUgbWF0aG1sMmFjY2Vzc2libGUgc2VydmljZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hdGhtbDJhY2Nlc3NpYmxlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICAvLyBTZXQgdGhlIG5lZWRlZCBwYXJhbXMgdG8gcmV0cmlldmUgdGhlIGFsdCB0ZXh0LlxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ3NlcnZpY2UnOiAnbWF0aG1sMmFjY2Vzc2libGUnLFxuICAgICdtbWwnOiBtbWwsXG4gICAgJ21ldHJpY3MnOiAndHJ1ZScsXG4gICAgJ2NlbnRlcmJhc2VsaW5lJzogJ2ZhbHNlJyxcbiAgICAnbGFuZyc6IGxhbmcsXG4gICAgJ2lnbm9yZVN0eWxlcyc6ICd0cnVlJyxcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gY2FsbFNlcnZpY2UocGFyYW1zLCAnc2VydmljZScsIE1ldGhvZFR5cGUuUG9zdCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gcHJvY2Vzc0pzb25SZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogQ2FsbHMgdGhlIHNob3dJbWFnZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIE1hdGhNTCBhbmQgcmV0dXJucyB0aGUgcmVjZWl2ZWQgUmVzcG9uc2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIE1hdGhNTCB0byByZW5kZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZyAtIExhbmd1YWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCBvZiB0aGUgc2VydmVyIHdoZXJlIHdlIHdhbnQgdG8gY2FsbCB0aGUgc2VydmljZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSB0aGUgUmVzcG9uc2Ugb2JqZWN0IHRvIHRoZSBwZXRpdGlvbiBtYWRlIHRvIHNob3dJbWFnZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd0ltYWdlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnbW1sJzogbW1sLFxuICAgICdtZXRyaWNzJzogJ3RydWUnLFxuICAgICdjZW50ZXJiYXNlbGluZSc6ICdmYWxzZScsXG4gICAgJ2xhbmcnOmxhbmcsXG4gIH1cblxuICAvLyBUcnkgdG8gb2J0YWluIHRoZSBpbWFnZSB2aWEgR0VUXG4gIGNvbnN0IGdldFBhcmFtcyA9IFBhcnNlci5jcmVhdGVTaG93SW1hZ2VTcmNEYXRhKHsgbW1sIH0sIGxhbmcpO1xuICBjb25zdCBnZXRSZXNwb25zZSA9IGNhbGxTZXJ2aWNlKGdldFBhcmFtcywgJ3Nob3dpbWFnZScsIE1ldGhvZFR5cGUuR2V0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHByb2Nlc3NKc29uUmVzcG9uc2UoZ2V0UmVzcG9uc2UpO1xuICB9IGNhdGNoKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN0YXR1c0Vycm9yKSB7XG4gICAgICAvLyBGb3JtdWxhIHdhcyBub3QgaW4gY2FjaGU7IHByb2NlZWQgd2l0aCBjYWxsaW5nIHNob3dpbWFnZSB2aWEgUE9TVFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIEdFVCByZXF1ZXN0IGZhaWxzLCBpdCBtZWFucyB0aGF0IHRoZSBmb3JtdWxhIHdhcyBub3QgaW4gY2FjaGUuIFByb2NlZWQgd2l0aCBQT1NUOlxuICBjb25zdCByZXNwb25zZSA9IGNhbGxTZXJ2aWNlKHBhcmFtcywgJ3Nob3dpbWFnZScsIE1ldGhvZFR5cGUuUG9zdCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gcHJvY2Vzc0pzb25SZXNwb25zZShyZXNwb25zZSk7XG5cbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGNyZWF0ZUltYWdlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gTWF0aE1MIGFuZCByZXR1cm5zIHRoZSByZWNlaXZlZCBSZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW1sIC0gTWF0aE1MIHRvIHJlbmRlclxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBMYW5ndWFnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gdGhlIFJlc3BvbnNlIG9iamVjdCB0byB0aGUgcGV0aXRpb24gbWFkZSB0byBzaG93SW1hZ2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUltYWdlKG1tbDogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnbW1sJzogbW1sLFxuICAgICdtZXRyaWNzJzogJ3RydWUnLFxuICAgICdjZW50ZXJiYXNlbGluZSc6ICdmYWxzZScsXG4gICAgJ2xhbmcnOiBsYW5nLFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdjcmVhdGVpbWFnZScsIE1ldGhvZFR5cGUuR2V0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHJldHVybiAoYXdhaXQgcmVzcG9uc2UpLnRleHQoKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGxhdGV4Mm1hdGhtbCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIExhVGVYIGFuZCByZXR1cm5zIHRoZSByZWNlaXZlZCBSZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF0ZXggLSBMYVRlWCB0byByZW5kZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVcmwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gdGhlIFJlc3BvbnNlIG9iamVjdCB0byB0aGUgcGV0aXRpb24gbWFkZSB0byBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsYXRleFRvTWF0aG1sKGxhdGV4OiBzdHJpbmcsIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAnc2VydmljZSc6ICdsYXRleDJtYXRobWwnLFxuICAgICdsYXRleCc6IGxhdGV4LFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdzZXJ2aWNlJywgTWV0aG9kVHlwZS5Qb3N0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHJldHVybiBwcm9jZXNzSnNvblJlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGJhY2tlbmQuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB2YXJpYWJsZWtleXMgLSBMaXN0IG9mIHRoZSBrZXkgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyB0byBmZXRjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSBUaGUgY29uZmlndXJhdGlvbmpzb24gc2VydmljZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25Kc29uKHZhcmlhYmxla2V5czogc3RyaW5nW10sIHVybDogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ3ZhcmlhYmxla2V5cyc6IHZhcmlhYmxla2V5cy5qb2luKCcsJyksXG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGNhbGxTZXJ2aWNlKHBhcmFtcywgJ2NvbmZpZ3VyYXRpb25qc29uJywgTWV0aG9kVHlwZS5HZXQsIHVybCwgZXh0ZW5zaW9uKTtcbiAgcmV0dXJuIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBwb3NzaWJseSBjb250YWluaW5nIGVuY29kZWQgZW50aXRpZXMgKGUuZy4gJm5ic3A7ICYjMTYwOykgYW5kXG4gKiByZXR1cm5zIHRoZSBzYW1lIHN0cmluZyB3aXRoIHRoZXNlIHJlcGxhY2VkIGJ5IHRoZSBVVEYtOCBjaGFyYWN0ZXJzIHRoZXkgcmVwcmVzZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgd2l0aCBlbmNvZGVkIGVudGl0aWVzXG4gKiBAcmV0dXJucyB0aGUgc2FtZSBzdHJpbmcgd2l0aCB0aGUgZW50aXRpZXMgZGVjb2RlZFxuICovXG5mdW5jdGlvbiBkZWNvZGVFbnRpdGllcyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBwb3NzaWJseSBjb250YWluaW5nIGVuY29kZWQgbmFtZWQgSFRNTCBlbnRpdGllcyAoZS5nLiAmbmJzcDspIGFuZFxuICogcmV0dXJucyB0aGUgc2FtZSBzdHJpbmcgd2l0aCB0aGVzZSByZXBsYWNlZCBieSB0aGUgZW5jb2RpbmcgdGhhdCB1c2VzIG51bWJlcnMgKGUuZy4gJiMxNjA7KS5cbiAqIEJ5IGl0cyBpbXBsZW1lbnRhdGlvbiwgdGhpcyBtZXRob2QgYWxzbyBwb3NzaWJseSBlbmNvZGVzIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdlcmVcbiAqIHByZXZpb3VzbHkgdW5lbmNvZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHdpdGggZW5jb2RlZCBlbnRpdGllc1xuICogQHJldHVybnMgdGhlIHNhbWUgc3RyaW5nIHdpdGggdGhlIGVudGl0aWVzIGRlY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh0bWxFbnRpdGllc1RvWG1sRW50aXRpZXModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgdGV4dCA9IGRlY29kZUVudGl0aWVzKHRleHQpO1xuXG4gIC8vIFJlcGxhY2VzIHRoZSA8ICYgPiBjaGFyYWN0ZXJzIHRvIGl0cyBIVE1MRW50aXR5IHRvIGF2b2lkIHJlbmRlciBpc3N1ZXMuXG4gIHRleHQgPSB0ZXh0LnNwbGl0KCdcIjxcIicpLmpvaW4oJ1wiJmx0O1wiJylcbiAgICAuc3BsaXQoJ1wiPlwiJylcbiAgICAuam9pbignXCImZ3Q7XCInKVxuICAgIC5zcGxpdCgnPjw8JylcbiAgICAuam9pbignPiZsdDs8Jyk7XG5cbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB0ZXh0LmNoYXJBdChpKTtcbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGkpID4gMTI4KSB7XG4gICAgICByZXN1bHQgKz0gJyYjJyArIHRleHQuY2hhckNvZGVBdChpKSArICc7JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gU2V0IG9mIG1hdGhtbCBhbmQgY2hhcmFjdGVycyB3aGljaCBkb24ndCBoYXZlIGFuIGFjY2Vzc2libGUgdGV4dCBhc3NvY2lhdGVkXG4vLyBhbmQgY2FuIG5vdCBiZSB0cmFuc2xhdGVkIG9yIHRyYW5zZm9ybWVkIHRvIExhVGVYLlxuZXhwb3J0IGNvbnN0IGNvcnJ1cHRNYXRoTUwgPSBbJ+KfpicsICcmIzEwMjE0OycsICfin6cnLCAnJiMxMDIxNTsnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93J107XG4iLCJpbXBvcnQgVGV4dENhY2hlIGZyb20gJy4vdGV4dGNhY2hlJztcbmltcG9ydCBTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9zZXJ2aWNlcHJvdmlkZXInO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgU3RyaW5nTWFuYWdlciBmcm9tICcuL3N0cmluZ21hbmFnZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBNYXRoVHlwZSBhY2Nlc3NpYmxlIGNsYXNzLiBDb252ZXJ0cyBNYXRoTUwgdG8gYWNjZXNzaWJsZSB0ZXh0IGFuZCBtYW5hZ2VzXG4gKiB0aGUgYXNzb2NpYXRlZCBjbGllbnQtc2lkZSBjYWNoZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjZXNzaWJpbGl0eSB7XG4gIC8qKlxuICAqIFN0YXRpYyBwcm9wZXJ0eS5cbiAgKiBBY2Nlc3NpYmlsaXR5IGNhY2hlLCBlYWNoIGVudHJ5IGNvbnRhaW5zIGEgTWF0aE1MIGFuZCBpdHMgY29ycmVzcG9uZGVudCBhY2Nlc3NpYmlsaXR5IHRleHQuXG4gICogQHR5cGUge1RleHRDYWNoZX1cbiAgKi9cbiAgc3RhdGljIGdldCBjYWNoZSgpIHtcbiAgICByZXR1cm4gQWNjZXNzaWJpbGl0eS5fY2FjaGU7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IHNldHRlci5cbiAgICogU2V0IGFjY2Vzc2liaWxpdHkgY2FjaGUuXG4gICAqIEBwYXJhbSB7VGV4dENhaGV9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IGNhY2hlKHZhbHVlKSB7XG4gICAgQWNjZXNzaWJpbGl0eS5fY2FjaGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBNYXRoTUwgc3RyaW5ncyB0byBpdHMgYWNjZXNzaWJsZSB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWF0aE1MIC0gTWF0aE1MIHRvIGJlIGNvbnZlcnRlZCB0byBhY2Nlc3NpYmxlIHRleHQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbGFuZ3VhZ2VdIC0gTGFuZ3VhZ2Ugb2YgdGhlIGFjY2Vzc2libGUgdGV4dC4gJ2VuJyBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBbZGF0YV0gLSBQYXJhbWV0ZXJzIHRvIHNlbmQgdG8gbWF0aG1sMmFjY2Vzc2libGUgc2VydmljZS5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBY2Nlc3NpYmlsaXR5IHRleHQuXG4gICAqL1xuICBzdGF0aWMgbWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhNTCwgbGFuZ3VhZ2UsIGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIChsYW5ndWFnZSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsYW5ndWFnZSA9ICdlbic7XG4gICAgfVxuICAgIC8vIENoZWNrIE1hdGhNTCBjbGFzcy4gSWYgdGhlIGNsYXNzIGlzIGNoZW1pc3RyeSxcbiAgICAvLyB3ZSBhZGQgY2hlbWlzdHJ5IHRvIGRhdGEgdG8gZm9yY2UgYWNjZXNzaWJpbGl0eSBzZXJ2aWNlXG4gICAgLy8gdG8gbG9hZCBjaGVtaXN0cnkgZ3JhbW1hci5cbiAgICBpZiAoTWF0aE1MLmNvbnRhaW5DbGFzcyhtYXRoTUwsICd3cnNfY2hlbWlzdHJ5JykpIHtcbiAgICAgIGRhdGEubW9kZSA9ICdjaGVtaXN0cnknO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgYWNjZXNpYmlsaXR5IHN0eWxlc1xuICAgIGRhdGEuaWdub3JlU3R5bGVzID0gdHJ1ZTtcbiAgICBsZXQgYWNjZXNzaWJsZVRleHQgPSAnJztcblxuICAgIGlmIChBY2Nlc3NpYmlsaXR5LmNhY2hlLmdldChtYXRoTUwpKSB7XG4gICAgICBhY2Nlc3NpYmxlVGV4dCA9IEFjY2Vzc2liaWxpdHkuY2FjaGUuZ2V0KG1hdGhNTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuc2VydmljZSA9ICdtYXRobWwyYWNjZXNzaWJsZSc7XG4gICAgICBkYXRhLmxhbmcgPSBsYW5ndWFnZTtcbiAgICAgIGNvbnN0IGFjY2Vzc2libGVKc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzZXJ2aWNlJywgZGF0YSkpO1xuICAgICAgaWYgKGFjY2Vzc2libGVKc29uUmVzcG9uc2Uuc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgIGFjY2Vzc2libGVUZXh0ID0gYWNjZXNzaWJsZUpzb25SZXNwb25zZS5yZXN1bHQudGV4dDtcbiAgICAgICAgQWNjZXNzaWJpbGl0eS5jYWNoZS5wb3B1bGF0ZShtYXRoTUwsIGFjY2Vzc2libGVUZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY2Vzc2libGVUZXh0ID0gU3RyaW5nTWFuYWdlci5nZXQoJ2Vycm9yX2NvbnZlcnRfYWNjZXNzaWJpbGl0eScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2Nlc3NpYmxlVGV4dDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGFuIGluc3RhbmNlIG9mIFRleHRDYWNoZSBjbGFzcyB0byBtYW5hZ2UgdGhlIEphdmFTY3JpcHQgYWNjZXNzaWJsZSBjYWNoZS5cbiAqIEVhY2ggZW50cnkgb2YgdGhlIGNhY2hlIG9iamVjdCBjb250YWlucyB0aGUgTWF0aE1MIGFuZCBpdCdzIGNvcnJlc3BvbmRlbnQgYWNjZXNzaWJpbGl0eSB0ZXh0LlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gKi9cbkFjY2Vzc2liaWxpdHkuX2NhY2hlID0gbmV3IFRleHRDYWNoZSgpO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmZpZ3VyYXRpb24gY2xhc3MuXG4gKiBVc3VhbGx5IHVzZWQgdG8gcmV0cmlldmUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIGdlbmVyYXRlZCBpbiB0aGUgYmFja2VuZCBpbnRvIHRoZSBmcm9udGVuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvcGVydGllcyBvYmplY3QgdG8ge0BsaW5rIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc30uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gcHJvcGVydGllcyB0byBhcHBlbmQgdG8gY3VycmVudCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc3RhdGljIGFkZENvbmZpZ3VyYXRpb24ocHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIC8qKlxuICAqIFN0YXRpYyBwcm9wZXJ0eS5cbiAgKiBUaGUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIG9iamVjdC5cbiAgKiBAcHJpdmF0ZVxuICAqIEB0eXBlIHtPYmplY3R9XG4gICovXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gQ29uZmlndXJhdGlvbi5fcHJvcGVydGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0YXRpYyBzZXQgcHJvcGVydGllcyh2YWx1ZSkge1xuICAgIENvbmZpZ3VyYXRpb24uX3Byb3BlcnRpZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGtleS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFByb3BlcnR5IGtleVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBQcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc3RhdGljIGdldChrZXkpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDb25maWd1cmF0aW9uLnByb3BlcnRpZXMsIGtleSkpIHtcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDb25maWd1cmF0aW9uLnByb3BlcnRpZXMsICdfd3JzX2NvbmZfJykpIHtcbiAgICAgICAgcmV0dXJuIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc1tgX3dyc19jb25mXyR7a2V5fWBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBwcm9wZXJ0eSB0byBDb25maWd1cmF0aW9uIGNsYXNzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gUHJvcGVydHkga2V5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSBQcm9wZXJ0eSB2YWx1ZS5cbiAgICovXG4gIHN0YXRpYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc1trZXldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhIHByb3BlcnR5IG9iamVjdCB2YWx1ZSB3aXRoIG5ldyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgcHJvcGVydHkga2V5IHRvIGJlIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0eVZhbHVlIC0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5ldyB2YWx1ZXMuXG4gICAqL1xuICBzdGF0aWMgdXBkYXRlKGtleSwgcHJvcGVydHlWYWx1ZSkge1xuICAgIGlmICghQ29uZmlndXJhdGlvbi5nZXQoa2V5KSkge1xuICAgICAgQ29uZmlndXJhdGlvbi5zZXQoa2V5LCBwcm9wZXJ0eVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlUHJvcGVydHkgPSBPYmplY3QuYXNzaWduKENvbmZpZ3VyYXRpb24uZ2V0KGtleSksIHByb3BlcnR5VmFsdWUpO1xuICAgICAgQ29uZmlndXJhdGlvbi5zZXQoa2V5LCB1cGRhdGVQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU3RhdGljIHByb3BlcnRpZXMgb2JqZWN0LiBTdG9yZXMgYWxsIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcy5cbiAqIE5lZWRlZCB0byBhdHRyaWJ1dGUgYWNjZXNzb3JzLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbkNvbmZpZ3VyYXRpb24uX3Byb3BlcnRpZXMgPSB7fTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGFsbCB0aGUgY29uc3RhbnRzIG5lZWRlZCBpbiBhIE1hdGhUeXBlIGludGVncmF0aW9uIGFtb25nIGRpZmZlcmVudCBjbGFzc2VzLlxuICogSWYgYSBjb25zdGFudCBzaG91bGQgYmUgdXNlZCBhY3Jvc3MgZGlmZmVyZW50IGNsYXNzZXMgc2hvdWxkIGJlIGRlZmluZWQgdXNpbmcgYXR0cmlidXRlXG4gKiBhY2Nlc3NvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50cyB7XG4gIC8qKlxuICAgKiBTYWZlIFhNTCBlbnRpdGllcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgc2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnT3BlbmVyOiAnJmxhcXVvOycsXG4gICAgICB0YWdDbG9zZXI6ICcmcmFxdW87JyxcbiAgICAgIGRvdWJsZVF1b3RlOiAnJnVtbDsnLFxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnJnF1b3Q7JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJsYWNrYm9hcmQgaW52YWxpZCBzYWZlIGNoYXJhY3RlcnMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVCYWRCbGFja2JvYXJkQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbHRFbGVtZW50OiAnwqttb8K7PMKrL21vwrsnLFxuICAgICAgZ3RFbGVtZW50OiAnwqttb8K7PsKrL21vwrsnLFxuICAgICAgYW1wRWxlbWVudDogJ8KrbW/CuybCqy9tb8K7JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJsYWNrYm9hcmQgdmFsaWQgc2FmZSBjaGFyYWN0ZXJzLlxuICAgKiBAdHlwZXtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGx0RWxlbWVudDogJ8KrbW/Cu8KnbHQ7wqsvbW/CuycsXG4gICAgICBndEVsZW1lbnQ6ICfCq21vwrvCp2d0O8KrL21vwrsnLFxuICAgICAgYW1wRWxlbWVudDogJ8KrbW/Cu8KnYW1wO8KrL21vwrsnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhbmRhcmQgWE1MIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgeG1sQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICd4bWxDaGFyYWN0ZXJzJyxcbiAgICAgIHRhZ09wZW5lcjogJzwnLCAvLyBIZXg6IFxceDNDLlxuICAgICAgdGFnQ2xvc2VyOiAnPicsIC8vIEhleDogXFx4M0UuXG4gICAgICBkb3VibGVRdW90ZTogJ1wiJywgLy8gSGV4OiBcXHgyMi5cbiAgICAgIGFtcGVyc2FuZDogJyYnLCAvLyBIZXg6IFxceDI2LlxuICAgICAgcXVvdGU6ICdcXCcnLCAvLyBIZXg6IFxceDI3LlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgKiBTYWZlIFhNTCBzcGVjaWFsIGNoYXJhY3RlcnMuIFRoaXMgY2hhcmFjdGVycyBhcmUgdXNlZCBpbnN0ZWFkIHRoZSBzdGFuZGFyZFxuICAqIHRoZSBzdGFuZGFyZCB0byBwYXJzZSB0aGUgIE1hdGhNTCBpZiBzYWZlWE1MIHNhdmUgbW9kZSBpcyBlbmFibGUuIEVhY2ggWE1MXG4gICogc3BlY2lhbCBjaGFyYWN0ZXIgaGF2ZSBhIFVURi04IHJlcHJlc2VudGF0aW9uLlxuICAqIEB0eXBlIHtPYmplY3R9XG4gICovXG4gIHN0YXRpYyBnZXQgc2FmZVhtbENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnc2FmZVhtbENoYXJhY3RlcnMnLFxuICAgICAgdGFnT3BlbmVyOiAnwqsnLCAvLyBIZXg6IFxceEFCLlxuICAgICAgdGFnQ2xvc2VyOiAnwrsnLCAvLyBIZXg6IFxceEJCLlxuICAgICAgZG91YmxlUXVvdGU6ICfCqCcsIC8vIEhleDogXFx4QTguXG4gICAgICBhbXBlcnNhbmQ6ICfCpycsIC8vIEhleDogXFx4QTcuXG4gICAgICBxdW90ZTogJ2AnLCAvLyBIZXg6IFxceDYwLlxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnwqgnLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBNYXRoVHlwZSBJbWFnZSBjbGFzcy4gQ29udGFpbnMgYWxsIHRoZSBsb2dpYyByZWxhdGVkXG4gKiB0byBNYXRoVHlwZSBpbWFnZXMgbWFuaXB1bGF0aW9uLlxuICogQWxsIE1hdGhUeXBlIGltYWdlcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBNYXRoVHlwZVxuICogaW50ZWdyYXRpb24gc2VydmljZTogc2hvd2ltYWdlIG9yIGNyZWF0ZWltYWdlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYXZhaWxhYmxlIGltYWdlIGZvcm1hdHM6XG4gKiAtIHN2ZyAoZGVmYXVsdClcbiAqIC0gcG5nXG4gKlxuICogVGhlcmUgYXJlIHR3byBmb3JtYXRzIGZvciB0aGUgaW1hZ2Ugc3JjIGF0dHJpYnV0ZTpcbiAqIC0gQSBkYXRhLXVyaSBzY2hlbWUgY29udGFpbmluZyB0aGUgVVJMLWVuY29kZWQgU1ZHIG9yIGEgUE5HJ3MgYmFzZTY0LlxuICogLSBBIGxpbmsgdG8gdGhlIHNob3dpbWFnZSBzZXJ2aWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIGRhdGEgYXR0cmlidXRlcyBmcm9tIGFuIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZyAtIEltYWdlIHdoZXJlIHJlbW92ZSBkYXRhIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlSW1nRGF0YUF0dHJpYnV0ZXMoaW1nKSB7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvUmVtb3ZlID0gW107XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBpbWc7XG5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCAmJiBhdHRyaWJ1dGUubmFtZSAhPT0gdW5kZWZpbmVkICYmIGF0dHJpYnV0ZS5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDApIHtcbiAgICAgICAgLy8gSXMgcHJlZmVycmVkIGtlZXAgYW4gYXJyYXkgYW5kIHJlbW92ZSBhZnRlciB0aGUgc2VhcmNoXG4gICAgICAgIC8vIGJlY2F1c2Ugd2hlbiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCB0aGUgYXJyYXkgb2YgYXR0cmlidXRlc1xuICAgICAgICAvLyBpcyBtb2RpZmllZC5cbiAgICAgICAgYXR0cmlidXRlc1RvUmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXR0cmlidXRlc1RvUmVtb3ZlLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaW1nLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQ2xvbmVzIGFsbCBNYXRoVHlwZSBpbWFnZSBhdHRyaWJ1dGVzIGZyb20gYSBIVE1MSW1hZ2VFbGVtZW50IHRvIGFub3RoZXIuXG4gICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gb3JpZ2luSW1nIC0gVGhlIG9yaWdpbmFsIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGRlc3RJbWcgLSBUaGUgZGVzdGluYXRpb24gaW1hZ2UuXG4gICAqL1xuICBzdGF0aWMgY2xvbmUob3JpZ2luSW1nLCBkZXN0SW1nKSB7XG4gICAgY29uc3QgY3VzdG9tRWRpdG9yQXR0cmlidXRlTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUN1c3RvbUVkaXRvck5hbWUnKTtcbiAgICBpZiAoIW9yaWdpbkltZy5oYXNBdHRyaWJ1dGUoY3VzdG9tRWRpdG9yQXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIGRlc3RJbWcucmVtb3ZlQXR0cmlidXRlKGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGhtbEF0dHJpYnV0ZU5hbWUgPSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKTtcbiAgICBjb25zdCBpbWdBdHRyaWJ1dGVzID0gW1xuICAgICAgbWF0aG1sQXR0cmlidXRlTmFtZSxcbiAgICAgIGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUsXG4gICAgICAnYWx0JyxcbiAgICAgICdoZWlnaHQnLFxuICAgICAgJ3dpZHRoJyxcbiAgICAgICdzdHlsZScsXG4gICAgICAnc3JjJyxcbiAgICAgICdyb2xlJyxcbiAgICBdO1xuXG4gICAgaW1nQXR0cmlidXRlcy5mb3JFYWNoKChpdGVyYXRvcikgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luQXR0cmlidXRlID0gb3JpZ2luSW1nLmdldEF0dHJpYnV0ZShpdGVyYXRvcik7XG4gICAgICBpZiAob3JpZ2luQXR0cmlidXRlKSB7XG4gICAgICAgIGRlc3RJbWcuc2V0QXR0cmlidXRlKGl0ZXJhdG9yLCBvcmlnaW5BdHRyaWJ1dGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsY3VsYXRlcyB0aGUgbWV0cmljcyBvZiBhIE1hdGhUeXBlIGltYWdlIGdpdmVuIHRoZSB0aGUgc2VydmljZSByZXNwb25zZSBhbmQgdGhlIGltYWdlIGZvcm1hdC5cbiAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZyAtIFRoZSBIVE1MSW1hZ2VFbGVtZW50LlxuICAqIEBwYXJhbSB7U3RyaW5nfSB1cmkgLSBUaGUgVVJJIGdlbmVyYXRlZCBieSB0aGUgaW1hZ2Ugc2VydmljZTogY2FuIGJlIGEgZGF0YSBVUkkgc2NoZW1lIG9yIGEgVVJMLlxuICAqIEBwYXJhbSB7Qm9vbGVhbn0ganNvblJlc3BvbnNlIC0gVHJ1ZSB0aGUgcmVzcG9uc2Ugb2YgdGhlIGltYWdlIHNlcnZpY2UgaXMgYVxuICAqIEpTT04gb2JqZWN0LiBGYWxzZSBvdGhlcndpc2UuXG4gICovXG4gIHN0YXRpYyBzZXRJbWdTaXplKGltZywgdXJpLCBqc29uUmVzcG9uc2UpIHtcbiAgICBsZXQgYXI7XG4gICAgbGV0IGJhc2U2NFN0cmluZztcbiAgICBsZXQgYnl0ZXM7XG4gICAgbGV0IHN2Z1N0cmluZztcbiAgICBpZiAoanNvblJlc3BvbnNlKSB7XG4gICAgICAvLyBDbGVhbmluZyBkYXRhOmltYWdlL3BuZztiYXNlNjQuXG4gICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlRm9ybWF0JykgPT09ICdzdmcnKSB7XG4gICAgICAgIC8vIFNWRyBmb3JtYXQuXG4gICAgICAgIC8vIElmIFNWRyBpcyBlbmNvZGVkIGluIGJhc2U2NCB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhlIGJhc2U2NCBieXRlcyBpbnRvIGEgU1ZHIHN0cmluZy5cbiAgICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpICE9PSAnYmFzZTY0Jykge1xuICAgICAgICAgIGFyID0gSW1hZ2UuZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcodXJpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYXNlNjRTdHJpbmcgPSBpbWcuc3JjLnN1YnN0cihpbWcuc3JjLmluZGV4T2YoJ2Jhc2U2NCwnKSArIDcsIGltZy5zcmMubGVuZ3RoKTtcbiAgICAgICAgICBzdmdTdHJpbmcgPSAnJztcbiAgICAgICAgICBieXRlcyA9IFV0aWwuYjY0VG9CeXRlQXJyYXkoYmFzZTY0U3RyaW5nLCBiYXNlNjRTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBzdmdTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyID0gSW1hZ2UuZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcoc3ZnU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQTkcgZm9ybWF0OiB3ZSBzdG9yZSBhbGwgbWV0cmljcyBpbmZvcm1hdGlvbiBpbiB0aGUgZmlyc3QgODggYnl0ZXMuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBpbWcuc3JjLnN1YnN0cihpbWcuc3JjLmluZGV4T2YoJ2Jhc2U2NCwnKSArIDcsIGltZy5zcmMubGVuZ3RoKTtcbiAgICAgICAgYnl0ZXMgPSBVdGlsLmI2NFRvQnl0ZUFycmF5KGJhc2U2NFN0cmluZywgODgpO1xuICAgICAgICBhciA9IEltYWdlLmdldE1ldHJpY3NGcm9tQnl0ZXMoYnl0ZXMpO1xuICAgICAgfVxuICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHk6IHdlIHN0b3JlIHRoZSBtZXRyaWNzIGludG8gY3JlYXRlaW1hZ2UgcmVzcG9uc2UuXG4gICAgfSBlbHNlIHtcbiAgICAgIGFyID0gVXRpbC51cmxUb0Fzc0FycmF5KHVyaSk7XG4gICAgfVxuICAgIGxldCB3aWR0aCA9IGFyLmN3O1xuICAgIGlmICghd2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGhlaWdodCA9IGFyLmNoO1xuICAgIGxldCBiYXNlbGluZSA9IGFyLmNiO1xuICAgIGNvbnN0IHsgZHBpIH0gPSBhcjtcbiAgICBpZiAoZHBpKSB7XG4gICAgICB3aWR0aCA9IHdpZHRoICogOTYgLyBkcGk7XG4gICAgICBoZWlnaHQgPSBoZWlnaHQgKiA5NiAvIGRwaTtcbiAgICAgIGJhc2VsaW5lID0gYmFzZWxpbmUgKiA5NiAvIGRwaTtcbiAgICB9XG4gICAgaW1nLndpZHRoID0gd2lkdGg7XG4gICAgaW1nLmhlaWdodCA9IGhlaWdodDtcbiAgICBpbWcuc3R5bGUudmVydGljYWxBbGlnbiA9IGAtJHtoZWlnaHQgLSBiYXNlbGluZX1weGA7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbWV0cmljcyBvZiBhbiBpbWFnZSB3aGljaCBoYXMgYmVlbiByZXNpemVkLiBJcyB1c2VkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsXG4gICAqIG1ldHJpY3Mgb2YgYSByZXNpemVkIGltYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnQgfSBpbWcgLSBUaGUgcmVzaXplZCBIVE1MSW1hZ2VFbGVtZW50LlxuICAgKi9cbiAgc3RhdGljIGZpeEFmdGVyUmVzaXplKGltZykge1xuICAgIGltZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgaW1nLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCByZXNpemUgd2l0aCBtYXgtd2lkdGggY3NzIHByb3BlcnR5LlxuICAgIGltZy5zdHlsZS5tYXhXaWR0aCA9ICdub25lJztcblxuICAgIGNvbnN0IHByb2Nlc3NJbWcgPSAoaW1nKSA9PiB7XG4gICAgICBpZiAoaW1nLnNyYy5pbmRleE9mKCdkYXRhOmltYWdlJykgIT09IC0xKSB7XG4gICAgICAgIGlmIChpbWcuc3JjLmluZGV4T2YoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCcpICE9PSAtMSkge1xuXG4gICAgICAgICAgLy8gSW1hZ2UgaXMgaW4gYmFzZTY0XG4gICAgICAgICAgaWYgKGltZy5zcmMuaW5kZXhPZignZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcubGVuZ3RoID09PSAyNlxuICAgICAgICAgICAgY29uc3QgYmFzZTY0U3RyaW5nID0gaW1nLmdldEF0dHJpYnV0ZSgnc3JjJykuc3Vic3RyaW5nKDI2KTtcbiAgICAgICAgICAgIGNvbnN0IHN2Z1N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NFN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkU3ZnU3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KHN2Z1N0cmluZyk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwke2VuY29kZWRTdmdTdHJpbmd9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJy5sZW5ndGggPT09IDMyLlxuICAgICAgICAgIGNvbnN0IHN2ZyA9IGRlY29kZVVSSUNvbXBvbmVudChpbWcuc3JjLnN1YnN0cmluZygzMiwgaW1nLnNyYy5sZW5ndGgpKTtcbiAgICAgICAgICBJbWFnZS5zZXRJbWdTaXplKGltZywgc3ZnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgPT09IDIyLlxuICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGltZy5zcmMuc3Vic3RyaW5nKDIyLCBpbWcuc3JjLmxlbmd0aCk7XG4gICAgICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWcsIGJhc2U2NCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEltYWdlLnNldEltZ1NpemUoaW1nLCBpbWcuc3JjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSWYgdGhlIGltYWdlIGRvZXNuJ3QgY29udGFpbiBhIGJsb2IsIGp1c3QgcHJvY2VzcyBpdCBub3JtYWxseVxuICAgIGlmIChpbWcuc3JjLmluZGV4T2YoJ2Jsb2I6JykgPT09IC0xKSB7XG4gICAgICBwcm9jZXNzSW1nKGltZyk7XG4gICAgLy8gaWYgaXQgZG9lcyBjb250YWluIGEgYmxvYiwgdGhlbiByZWFkIHRoYXQsIHJlcGxhY2UgdGhlIHNyYyB3aXRoIHRoZSBkZWNvZGVkIGNvbnRlbnQsIGFuZCBwcm9jZXNzIGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZWFkZXIucmVzdWx0KTtcbiAgICAgICAgcHJvY2Vzc0ltZyhpbWcpO1xuICAgICAgfTtcbiAgICAgIGZldGNoKGltZy5zcmMpLnRoZW4ociA9PiByLmJsb2IoKSkudGhlbihibG9iID0+IHtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWV0cmljcyAoaGVpZ2h0LCB3aWR0aCBhbmQgYmFzZWxpbmUpIGNvbnRhaW5lZCBpbiBhIFNWRyBpbWFnZSBnZW5lcmF0ZWRcbiAgICogYnkgdGhlIE1hdGhUeXBlIGltYWdlIHNlcnZpY2UuIFRoaXMgaW1hZ2UgY29udGFpbnMgYXMgYW4gZXh0cmEgY3VzdG9tIGF0dHJpYnV0ZTpcbiAgICogdGhlIGJhc2VsaW5lICh3cnM6YmFzZWxpbmUpLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3ZnU3RyaW5nIC0gVGhlIFNWRyBpbWFnZS5cbiAgICogQHJldHVybiB7QXJyYXl9IC0gVGhlIGltYWdlIG1ldHJpY3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmcoc3ZnU3RyaW5nKSB7XG4gICAgbGV0IGZpcnN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ2hlaWdodD1cIicpO1xuICAgIGxldCBsYXN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ1wiJywgZmlyc3QgKyA4LCBzdmdTdHJpbmcubGVuZ3RoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBzdmdTdHJpbmcuc3Vic3RyaW5nKGZpcnN0ICsgOCwgbGFzdCk7XG5cbiAgICBmaXJzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCd3aWR0aD1cIicpO1xuICAgIGxhc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignXCInLCBmaXJzdCArIDcsIHN2Z1N0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IHdpZHRoID0gc3ZnU3RyaW5nLnN1YnN0cmluZyhmaXJzdCArIDcsIGxhc3QpO1xuXG4gICAgZmlyc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignd3JzOmJhc2VsaW5lPVwiJyk7XG4gICAgbGFzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCdcIicsIGZpcnN0ICsgMTQsIHN2Z1N0cmluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGJhc2VsaW5lID0gc3ZnU3RyaW5nLnN1YnN0cmluZyhmaXJzdCArIDE0LCBsYXN0KTtcblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGFyci5jdyA9IHdpZHRoO1xuICAgICAgYXJyLmNoID0gaGVpZ2h0O1xuICAgICAgaWYgKHR5cGVvZiBiYXNlbGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJyLmNiID0gYmFzZWxpbmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWV0cmljcyAod2lkdGgsIGhlaWdodCwgYmFzZWxpbmUgYW5kIGRwaSkgY29udGFpbmVkIGluIGEgUE5HIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSAge0FycmF5LjxCeXRlcz59IGJ5dGVzIC0gcG5nIGJ5dGUgYXJyYXkuXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgcG5nIG1ldHJpY3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWV0cmljc0Zyb21CeXRlcyhieXRlcykge1xuICAgIFV0aWwucmVhZEJ5dGVzKGJ5dGVzLCAwLCA4KTtcbiAgICBsZXQgd2lkdGg7XG4gICAgbGV0IGhlaWdodDtcbiAgICBsZXQgdHlwO1xuICAgIGxldCBiYXNlbGluZTtcbiAgICBsZXQgZHBpO1xuICAgIHdoaWxlIChieXRlcy5sZW5ndGggPj0gNCkge1xuICAgICAgdHlwID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgaWYgKHR5cCA9PT0gMHg0OTQ4NDQ1Mikge1xuICAgICAgICB3aWR0aCA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgaGVpZ2h0ID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgICAvLyBSZWFkIDUgYnl0ZXMuXG4gICAgICAgIFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgVXRpbC5yZWFkQnl0ZShieXRlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cCA9PT0gMHg2MjYxNTM0NSkgeyAvLyBCYXNlbGluZTogJ2JhU0UnLlxuICAgICAgICBiYXNlbGluZSA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwID09PSAweDcwNDg1OTczKSB7IC8vIERwaXM6ICdwSFlzJy5cbiAgICAgICAgZHBpID0gVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgICBkcGkgPSAoTWF0aC5yb3VuZChkcGkgLyAzOS4zNykpO1xuICAgICAgICBVdGlsLnJlYWRJbnQzMihieXRlcyk7XG4gICAgICAgIFV0aWwucmVhZEJ5dGUoYnl0ZXMpO1xuICAgICAgfVxuICAgICAgVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGFyci5jdyA9IHdpZHRoO1xuICAgICAgYXJyLmNoID0gaGVpZ2h0O1xuICAgICAgYXJyLmRwaSA9IGRwaTtcbiAgICAgIGlmIChiYXNlbGluZSkge1xuICAgICAgICBhcnIuY2IgPSBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iLCJpbXBvcnQgVGV4dENhY2hlIGZyb20gJy4vdGV4dGNhY2hlJztcbmltcG9ydCBNYXRoTUwgZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IFNlcnZpY2VQcm92aWRlciBmcm9tICcuL3NlcnZpY2Vwcm92aWRlcic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgTGFUZVggcGFyc2VyLiBNYW5hZ2VzIHRoZSBzZXJ2aWNlcyB3aGljaCBhbGxvd3MgdG8gY29udmVydFxuICogTGFUZVggaW50byBNYXRoTUwgYW5kIE1hdGhNTCBpbnRvIExhVGVYLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRleCB7XG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICAqIFJldHVybiBsYXRleCBjYWNoZS5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0NhY2hlfVxuICAgKi9cbiAgc3RhdGljIGdldCBjYWNoZSgpIHtcbiAgICByZXR1cm4gTGF0ZXguX2NhY2hlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAqIFNldCBsYXRleCBjYWNoZS5cbiAgICogQHBhcmFtIHtDYWNoZX0gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgKi9cbiAgc3RhdGljIHNldCBjYWNoZSh2YWx1ZSkge1xuICAgIExhdGV4Ll9jYWNoZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIE1hdGhNTCB0byBMYVRlWCBieSBjYWxsaW5nIG1hdGhtbDJsYXRleCBzZXJ2aWNlLiBGb3IgdGV4dCBzZXJ2aWNlc1xuICAgKiB3ZSBjYWxsIGEgdGV4dCBzZXJ2aWNlIHdpdGggdGhlIHBhcmFtIG1hdGhtbDJsYXRleC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBTdHJpbmcuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gTGFUZVggc3RyaW5nIGdlbmVyYXRlZCBieSB0aGUgTWF0aE1MIGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIGdldExhdGV4RnJvbU1hdGhNTChtYXRobWwpIHtcbiAgICBjb25zdCBtYXRobWxXaXRob3V0U2VtYW50aWNzID0gTWF0aE1MLnJlbW92ZVNlbWFudGljcyhtYXRobWwpO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gICAgICovXG4gICAgY29uc3QgeyBjYWNoZSB9ID0gTGF0ZXg7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2VydmljZTogJ21hdGhtbDJsYXRleCcsXG4gICAgICBtbWw6IG1hdGhtbFdpdGhvdXRTZW1hbnRpY3MsXG4gICAgfTtcblxuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ3NlcnZpY2UnLCBkYXRhKSk7XG5cbiAgICAvLyBUT0RPOiBFcnJvciBoYW5kbGluZy5cbiAgICBsZXQgbGF0ZXggPSAnJztcblxuICAgIGlmIChqc29uUmVzcG9uc2Uuc3RhdHVzID09PSAnb2snKSB7XG4gICAgICBsYXRleCA9IGpzb25SZXNwb25zZS5yZXN1bHQudGV4dDtcbiAgICAgIGNvbnN0IGxhdGV4SHRtbEVudGl0aWVzRW5jb2RlZCA9IFV0aWwuaHRtbEVudGl0aWVzKGxhdGV4KTtcbiAgICAgIC8vIEluc2VydGluZyBMYVRlWCBzZW1hbnRpY3MuXG4gICAgICBjb25zdCBtYXRobWxXaXRoU2VtYW50aWNzID0gTWF0aE1MLmFkZEFubm90YXRpb24obWF0aG1sLCBsYXRleEh0bWxFbnRpdGllc0VuY29kZWQsICdMYVRlWCcpO1xuICAgICAgY2FjaGUucG9wdWxhdGUobGF0ZXgsIG1hdGhtbFdpdGhTZW1hbnRpY3MpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBMYVRlWCB0byBNYXRoTUwgYnkgY2FsbGluZyBsYXRleDJtYXRobWwgc2VydmljZS4gRm9yIHRleHQgc2VydmljZXNcbiAgICogd2UgY2FsbCBhIHRleHQgc2VydmljZSB3aXRoIHRoZSBwYXJhbSBsYXRleDJtYXRobWwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsYXRleCAtIFN0cmluZyBjb250YWluaW5nIGEgTGFUZVggZm9ybXVsYS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlTGF0ZXhPblNlbWFudGljc1xuICAgKiAtIElmIHRydWUgTGFUZVggd291bGQgbWUgaW5jbHVkZWQgaW50byBNYXRoTUwgc2VtYW50aWNzLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1hdGhNTCBzdHJpbmcgZ2VuZXJhdGVkIGJ5IHRoZSBMYVRlWCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBnZXRNYXRoTUxGcm9tTGF0ZXgobGF0ZXgsIGluY2x1ZGVMYXRleE9uU2VtYW50aWNzKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1RleHRDYWNoZX1cbiAgICAgKi9cbiAgICBjb25zdCBsYXRleENhY2hlID0gTGF0ZXguY2FjaGU7XG5cbiAgICBpZiAoTGF0ZXguY2FjaGUuZ2V0KGxhdGV4KSkge1xuICAgICAgcmV0dXJuIExhdGV4LmNhY2hlLmdldChsYXRleCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzZXJ2aWNlOiAnbGF0ZXgybWF0aG1sJyxcbiAgICAgIGxhdGV4LFxuICAgIH07XG5cbiAgICBpZiAoaW5jbHVkZUxhdGV4T25TZW1hbnRpY3MpIHtcbiAgICAgIGRhdGEuc2F2ZUxhdGV4ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnc2VydmljZScsIGRhdGEpKTtcblxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKGpzb25SZXNwb25zZS5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgIGxldCBtYXRobWwgPSBqc29uUmVzcG9uc2UucmVzdWx0LnRleHQ7XG4gICAgICBtYXRobWwgPSBtYXRobWwuc3BsaXQoJ1xccicpLmpvaW4oJycpLnNwbGl0KCdcXG4nKS5qb2luKCcgJyk7XG5cbiAgICAgIC8vIFBvcHVsYXRlIExhdGV4Q2FjaGUuXG4gICAgICBpZiAobWF0aG1sLmluZGV4T2YoJ3NlbWFudGljcycpID09PSAtMSAmJiBtYXRobWwuaW5kZXhPZignYW5ub3RhdGlvbicpID09PSAtMSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gVXRpbC5odG1sRW50aXRpZXMobGF0ZXgpO1xuICAgICAgICBtYXRobWwgPSBNYXRoTUwuYWRkQW5ub3RhdGlvbihtYXRobWwsIGNvbnRlbnQsICdMYVRlWCcpO1xuICAgICAgICBvdXRwdXQgPSBtYXRobWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBtYXRobWw7XG4gICAgICB9XG4gICAgICBpZiAoIWxhdGV4Q2FjaGUuZ2V0KGxhdGV4KSkge1xuICAgICAgICBsYXRleENhY2hlLnBvcHVsYXRlKGxhdGV4LCBtYXRobWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBgJCQke2xhdGV4fSQkYDtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgb2NjdXJyZW5jZXMgb2YgTWF0aE1MIGNvZGUgdG8gTGFUZVguXG4gICAqIFRoZSBNYXRoTUwgY29kZSBzaG91bGQgY29udGFpbmluZyA8YW5ub3RhdGlvbiBlbmNvZGluZz1cIkxhVGVYXCIvPiB0byBiZSBjb252ZXJ0ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50IC0gQSBzdHJpbmcgY29udGFpbmluZyBNYXRoTUwgdmFsaWQgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNoYXJhY3RlcnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gQSBzdHJpbmcgY29udGFpbmluZyBhbGwgTWF0aE1MIGFubm90YXRlZCBvY2N1cnJlbmNlc1xuICAgKiByZXBsYWNlZCBieSB0aGUgY29ycmVzcG9uZGluZyBMYVRlWCBjb2RlLlxuICAgKi9cbiAgc3RhdGljIHBhcnNlTWF0aG1sVG9MYXRleChjb250ZW50LCBjaGFyYWN0ZXJzKSB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGNvbnN0IG1hdGhUYWdCZWdpbiA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfW1hdGhgO1xuICAgIGNvbnN0IG1hdGhUYWdFbmQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn0vbWF0aCR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCBvcGVuVGFyZ2V0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9YW5ub3RhdGlvbiBlbmNvZGluZz0ke2NoYXJhY3RlcnMuZG91YmxlUXVvdGV9TGFUZVgke2NoYXJhY3RlcnMuZG91YmxlUXVvdGV9JHtjaGFyYWN0ZXJzLnRhZ0Nsb3Nlcn1gO1xuICAgIGNvbnN0IGNsb3NlVGFyZ2V0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L2Fubm90YXRpb24ke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgbGV0IHN0YXJ0ID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdCZWdpbik7XG4gICAgbGV0IGVuZCA9IDA7XG4gICAgbGV0IG1hdGhtbDtcbiAgICBsZXQgc3RhcnRBbm5vdGF0aW9uO1xuICAgIGxldCBjbG9zZUFubm90YXRpb247XG5cbiAgICB3aGlsZSAoc3RhcnQgIT09IC0xKSB7XG4gICAgICBvdXRwdXQgKz0gY29udGVudC5zdWJzdHJpbmcoZW5kLCBzdGFydCk7XG4gICAgICBlbmQgPSBjb250ZW50LmluZGV4T2YobWF0aFRhZ0VuZCwgc3RhcnQpO1xuXG4gICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgKz0gbWF0aFRhZ0VuZC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG1hdGhtbCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuXG4gICAgICBzdGFydEFubm90YXRpb24gPSBtYXRobWwuaW5kZXhPZihvcGVuVGFyZ2V0KTtcbiAgICAgIGlmIChzdGFydEFubm90YXRpb24gIT09IC0xKSB7XG4gICAgICAgIHN0YXJ0QW5ub3RhdGlvbiArPSBvcGVuVGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgY2xvc2VBbm5vdGF0aW9uID0gbWF0aG1sLmluZGV4T2YoY2xvc2VUYXJnZXQpO1xuICAgICAgICBsZXQgbGF0ZXggPSBtYXRobWwuc3Vic3RyaW5nKHN0YXJ0QW5ub3RhdGlvbiwgY2xvc2VBbm5vdGF0aW9uKTtcbiAgICAgICAgaWYgKGNoYXJhY3RlcnMgPT09IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycykge1xuICAgICAgICAgIGxhdGV4ID0gTWF0aE1MLnNhZmVYbWxEZWNvZGUobGF0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBgJCQke2xhdGV4fSQkYDtcbiAgICAgICAgLy8gUG9wdWxhdGUgbGF0ZXggaW50byBjYWNoZS5cblxuICAgICAgICBMYXRleC5jYWNoZS5wb3B1bGF0ZShsYXRleCwgbWF0aG1sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBtYXRobWw7XG4gICAgICB9XG4gICAgICBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgY29udGVudC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGxhdGV4IG9mIGEgZGV0ZXJtaW5lZCBwb3NpdGlvbiBpbiBhIHRleHQuXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGV4dE5vZGUgLSB0ZXh0Tm9kZSB0byBleHRyYWN0IHRoZSBMYVRlWFxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FyZXRQb3NpdGlvbiAtIFN0YXJ0aW5nIHBvc2l0aW9uIHRvIGZpbmQgTGFUZVguXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsYXRleFRhZ3MgLSBPcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHRhZ3MgYmV0d2VlbiBsYXRleCBpcyBpbnNlcnRlZC5cbiAgICogSXQgaGFzIHRoZSAnb3BlbicgYXR0cmlidXRlIGZvciB0aGUgb3BlbiB0YWcgYW5kIHRoZSAnY2xvc2UnIGF0dHJpYnV0ZSBmb3IgdGhlIGNsb3NlIHRhZy5cbiAgICogXCIkJFwiIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggMyBrZXlzOiAnbGF0ZXgnLCAnc3RhcnQnIGFuZCAnZW5kJy4gTnVsbCBpZiBsYXRleCBpcyBub3QgZm91bmQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRMYXRleEZyb21UZXh0Tm9kZSh0ZXh0Tm9kZSwgY2FyZXRQb3NpdGlvbiwgbGF0ZXhUYWdzKSB7XG4gICAgLy8gVE9ETzogU2V0IExhVGVYIFRhZ3MgYXMgQ29yZSB2YXJpYWJsZS4gRml4IHRoZSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24gKHRoaXJkIGFyZ3VtZW50KS5cbiAgICAvLyBUYWdzIHVzZWQgZm9yIExhVGVYIGZvcm11bGFzLlxuICAgIGNvbnN0IGRlZmF1bHRMYXRleFRhZ3MgPSB7XG4gICAgICBvcGVuOiAnJCQnLFxuICAgICAgY2xvc2U6ICckJCcsXG4gICAgfTtcbiAgICAvLyBsYXRleFRhZ3MgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyLiBJZiBpcyBub3Qgc2V0LCB1c2UgZGVmYXVsdCBsYXRleFRhZ3MuXG4gICAgaWYgKHR5cGVvZiBsYXRleFRhZ3MgPT09ICd1bmRlZmluZWQnIHx8IGxhdGV4VGFncyA9PSBudWxsKSB7XG4gICAgICBsYXRleFRhZ3MgPSBkZWZhdWx0TGF0ZXhUYWdzO1xuICAgIH1cbiAgICAvLyBMb29raW5nIGZvciB0aGUgZmlyc3QgdGV4dE5vZGUuXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHRleHROb2RlO1xuXG4gICAgd2hpbGUgKHN0YXJ0Tm9kZS5wcmV2aW91c1NpYmxpbmcgJiYgc3RhcnROb2RlLnByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgbGF0ZXggcG9zaXRpb24gYW5kIG5vZGUgZnJvbSBhIHNwZWNpZmljIG5vZGUgYW5kIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gY3VycmVudE5vZGUgLSBOb2RlIHdoZXJlIHNlYXJjaGluZyBsYXRleC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY3VycmVudFBvc2l0aW9uIC0gQ3VycmVudCBwb3NpdGlvbiBpbnNpZGUgdGhlIGN1cnJlbnROb2RlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsYXRleFRhZ3NUb1VzZSAtIFRhZ3MgdXNlZCBhdCBsYXRleCBiZWdpbm5pbmcgYW5kIGxhdGV4IGZpbmFsLlxuICAgICAqIFwiJCRcIiBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdGFnIC0gVGFnIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgc2VhcmNoLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBjdXJyZW50IG5vZGUgYW5kIHRoZSBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXROZXh0TGF0ZXhQb3NpdGlvbihjdXJyZW50Tm9kZSwgY3VycmVudFBvc2l0aW9uLCB0YWcpIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLm5vZGVWYWx1ZS5pbmRleE9mKHRhZywgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgd2hpbGUgKHBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICghY3VycmVudE5vZGUpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgICAgIHJldHVybiBudWxsOyAvLyBOb3QgZm91bmQuXG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLm5vZGVWYWx1ZSA/IGN1cnJlbnROb2RlLm5vZGVWYWx1ZS5pbmRleE9mKGxhdGV4VGFncy5jbG9zZSkgOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogY3VycmVudE5vZGUsXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBwcmV2aW91cywgb3Igbm90LCB0byBhIHNlY29uZCBvbmUuXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gU3RhcnQgbm9kZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBTdGFydCBub2RlIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZW5kTm9kZSAtIEVuZCBub2RlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBlbmRQb3NpdGlvbiAtIEVuZCBub2RlIHBvc2l0aW9uLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBzdGFydGluZyBub2RlIGlzIHByZXZpb3VzIHRoYW50IHRoZSBlbiBub2RlLiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmV2aW91cyhub2RlLCBwb3NpdGlvbiwgZW5kTm9kZSwgZW5kUG9zaXRpb24pIHtcbiAgICAgIGlmIChub2RlID09PSBlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiAocG9zaXRpb24gPD0gZW5kUG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChub2RlID09PSBlbmROb2RlKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZCA9IHtcbiAgICAgIG5vZGU6IHN0YXJ0Tm9kZSxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgIH07XG4gICAgLy8gSXMgc3VwcG9zZWQgdGhhdCBvcGVuIGFuZCBjbG9zZSB0YWdzIGhhcyB0aGUgc2FtZSBsZW5ndGguXG4gICAgY29uc3QgdGFnTGVuZ3RoID0gbGF0ZXhUYWdzLm9wZW4ubGVuZ3RoO1xuICAgIGRvIHtcbiAgICAgIHN0YXJ0ID0gZ2V0TmV4dExhdGV4UG9zaXRpb24oZW5kLm5vZGUsIGVuZC5wb3NpdGlvbiwgbGF0ZXhUYWdzLm9wZW4pO1xuXG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBpc1ByZXZpb3VzKHRleHROb2RlLCBjYXJldFBvc2l0aW9uLCBzdGFydC5ub2RlLCBzdGFydC5wb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGVuZCA9IGdldE5leHRMYXRleFBvc2l0aW9uKHN0YXJ0Lm5vZGUsIHN0YXJ0LnBvc2l0aW9uICsgdGFnTGVuZ3RoLCBsYXRleFRhZ3MuY2xvc2UpO1xuXG4gICAgICBpZiAoZW5kID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGVuZC5wb3NpdGlvbiArPSB0YWdMZW5ndGg7XG4gICAgfSB3aGlsZSAoaXNQcmV2aW91cyhlbmQubm9kZSwgZW5kLnBvc2l0aW9uLCB0ZXh0Tm9kZSwgY2FyZXRQb3NpdGlvbikpO1xuXG4gICAgLy8gSXNvbGF0aW5nIGxhdGV4LlxuICAgIGxldCBsYXRleDtcblxuICAgIGlmIChzdGFydC5ub2RlID09PSBlbmQubm9kZSkge1xuICAgICAgbGF0ZXggPSBzdGFydC5ub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcoc3RhcnQucG9zaXRpb24gKyB0YWdMZW5ndGgsIGVuZC5wb3NpdGlvbiAtIHRhZ0xlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhcnQucG9zaXRpb24gKyB0YWdMZW5ndGg7XG4gICAgICBsYXRleCA9IHN0YXJ0Lm5vZGUubm9kZVZhbHVlLnN1YnN0cmluZyhpbmRleCwgc3RhcnQubm9kZS5ub2RlVmFsdWUubGVuZ3RoKTtcbiAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHN0YXJ0Lm5vZGU7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlID09PSBlbmQubm9kZSkge1xuICAgICAgICAgIGxhdGV4ICs9IGVuZC5ub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcoMCwgZW5kLnBvc2l0aW9uIC0gdGFnTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXRleCArPSBjdXJyZW50Tm9kZS5ub2RlVmFsdWUgPyBjdXJyZW50Tm9kZS5ub2RlVmFsdWUgOiAnJztcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoY3VycmVudE5vZGUgIT09IGVuZC5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGF0ZXgsXG4gICAgICBzdGFydE5vZGU6IHN0YXJ0Lm5vZGUsXG4gICAgICBzdGFydFBvc2l0aW9uOiBzdGFydC5wb3NpdGlvbixcbiAgICAgIGVuZE5vZGU6IGVuZC5ub2RlLFxuICAgICAgZW5kUG9zaXRpb246IGVuZC5wb3NpdGlvbixcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogVGV4dCBjYWNoZS4gU3RvcmVzIGFsbCBwcm9jZXNzZWQgTGFUZVggc3RyaW5ncyBhbmQgaXQncyBjb3JyZXNwb25kZW50IE1hdGhNTCBzdHJpbmcuXG4gKiBAdHlwZSB7Q2FjaGV9XG4gKiBAc3RhdGljXG4gKi9cbkxhdGV4Ll9jYWNoZSA9IG5ldyBUZXh0Q2FjaGUoKTtcbiIsIi8qKlxuICogVGhpcyBvYmplY3QgcmVwcmVzZW50cyBhIGN1c3RvbSBsaXN0ZW5lci5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IExpc3RlbmVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gTGlzdGVuZXIuZXZlbnROYW1lIC0gVGhlIGxpc3RlbmVyIG5hbWUuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBMaXN0ZW5lci5jYWxsYmFjayAtIFRoZSBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lcnMge1xuICAvKipcbiAgICogQGNsYXNzZGVzY1xuICAgKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBjdXN0b20gbGlzdGVuZXJzIG1hbmFnZXIuXG4gICAqIEBjb25zdHJ1Y3RzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBBcnJheSBjb250YWluaW5nIGFsbCBjdXN0b20gbGlzdGVuZXJzLlxuICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRvIExpc3RlbmVyIGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIG9iamVjdC5cbiAgICovXG4gIGFkZChsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIE1hdGhUeXBlIGV2ZW50IGxpc3RlbmVyc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIC0gZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIGV2ZW50IG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgaWYgZXZlbnQgaGFzIGJlZW4gcHJldmVudGVkLiB0cnVlIG90aGVyd2lzZS5cbiAgICovXG4gIGZpcmUoZXZlbnROYW1lLCBldmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoICYmICFldmVudC5jYW5jZWxsZWQ7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2ldLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XG4gICAgICAgIC8vIENhbGxpbmcgbGlzdGVuZXIuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBsaXN0ZW5lciBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIGxpc3RlbmVyIG9iamVjdC5cbiAgICovXG4gIHN0YXRpYyBuZXdMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB7fTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cbn1cbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBjbGFzcyB0byBtYW5hZ2UgTWF0aE1MIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhNTCB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIG1hdGhtbCBhdCBwb3NpdGlvbiBpIGlzIGluc2lkZSBhbiBIVE1MIGF0dHJpYnV0ZSBvciBub3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gYSBzdHJpbmcgY29udGFpbmluZyBNYXRoTUwgY29kZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGkgLSAgc2VhcmNoIGluZGV4LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGlzIGluc2lkZSBhbiBIVE1MIGF0dHJpYnV0ZS4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgc3RhdGljIGlzTWF0aG1sSW5BdHRyaWJ1dGUoY29udGVudCwgaSkge1xuICAgIC8vIFJlZ2V4ID1cbiAgICAvLyAnXltcXCdcIl1bXFxcXHNdKj1bXFxcXHNdKltcXFxcdy1dKyhbXFxcXHNdKihcIlteXCJdKlwifFxcJ1teXFwnXSpcXCcpW1xcXFxzXSpcbiAgICAvLyA9W1xcXFxzXSpbXFxcXHctXStbXFxcXHNdKikqW1xcXFxzXStnbWk8JztcbiAgICBjb25zdCBtYXRoQXR0ID0gJ1tcXCdcIl1bXFxcXHNdKj1bXFxcXHNdKltcXFxcdy1dKyc7IC8vIFwiPWF0dCBPUiAnPWF0dFxuICAgIGNvbnN0IGF0dENvbnRlbnQgPSAnXCJbXlwiXSpcInxcXCdbXlxcJ10qXFwnJzsgLy8gXCJibGFibGFcIiBPUiAnYmxhYmxhJ1xuICAgIGNvbnN0IGF0dCA9IGBbXFxcXHNdKigke2F0dENvbnRlbnR9KVtcXFxcc10qPVtcXFxcc10qW1xcXFx3LV0rW1xcXFxzXSpgOyAvLyBcImJsYWJsYVwiPWF0dCBPUiAnYmxhYmxhJz1hdHRcbiAgICBjb25zdCBhdHRzID0gYCgnJHthdHR9JykqYDsgLy8gXCJibGFibGFcIj1hdHQxIFwiYmxhYmxhXCI9YXR0MlxuICAgIGNvbnN0IHJlZ2V4ID0gYF4ke21hdGhBdHR9JHthdHRzfVtcXFxcc10rZ21pPGA7IC8vIFwiPWF0dCBcImJsYWJsYVwiPWF0dDEgXCJibGFibGFcIj1hdHQyIGdtaTwgLlxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHJlZ2V4KTtcblxuICAgIGNvbnN0IGFjdHVhbENvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBpKTtcbiAgICBjb25zdCByZXZlcnNlZCA9IGFjdHVhbENvbnRlbnQuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICBjb25zdCBleGlzdHMgPSBleHByZXNzaW9uLnRlc3QocmV2ZXJzZWQpO1xuXG4gICAgcmV0dXJuIGV4aXN0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgTWF0aE1MIHdpdGggc3RhbmRhcmQgWE1MIHRhZ3MuXG4gICAqIFdlIHVzZSB0aGVzZSBlbnRpdGllcyBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBodG1sIGVudGl0aWVzXG4gICAqIG9uIGl0cyBhdHRyaWJ1dGVzIHNvbWV0aW1lcy4gWWVzLCBzb21ldGltZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHN0cmluZyB0byBiZSBkZWNvZGVkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGRlY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNhZmVYbWxEZWNvZGUoaW5wdXQpIHtcbiAgICBsZXQgeyB0YWdPcGVuZXIgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIGxldCB7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzRW50aXRpZXM7XG4gICAgbGV0IHsgZG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIGxldCB7IHJlYWxEb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzRW50aXRpZXM7XG4gICAgLy8gRGVjb2RpbmcgZW50aXRpZXMuXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChkb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIC8vIEFkZGVkIHRvIGZpeCBwcm9ibGVtIGR1ZSB0byBpbXBvcnQgZnJvbSAxLjkueC5cbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KHJlYWxEb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMucmVhbERvdWJsZVF1b3RlKTtcblxuICAgIC8vIEJsYWNrYm9hcmQuXG4gICAgY29uc3QgeyBsdEVsZW1lbnQgfSA9IENvbnN0YW50cy5zYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBndEVsZW1lbnQgfSA9IENvbnN0YW50cy5zYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBhbXBFbGVtZW50IH0gPSBDb25zdGFudHMuc2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzO1xuICAgIGlmICgnX3dyc19ibGFja2JvYXJkJyBpbiB3aW5kb3cgJiYgd2luZG93Ll93cnNfYmxhY2tib2FyZCkge1xuICAgICAgaW5wdXQgPSBpbnB1dC5zcGxpdChsdEVsZW1lbnQpLmpvaW4oQ29uc3RhbnRzLnNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMubHRFbGVtZW50KTtcbiAgICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoZ3RFbGVtZW50KS5qb2luKENvbnN0YW50cy5zYWZlR29vZEJsYWNrYm9hcmRDaGFyYWN0ZXJzLmd0RWxlbWVudCk7XG4gICAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGFtcEVsZW1lbnQpLmpvaW4oQ29uc3RhbnRzLnNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMuYW1wRWxlbWVudCk7XG4gICAgfVxuXG4gICAgKHsgdGFnT3BlbmVyIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMpO1xuICAgICh7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzKTtcbiAgICAoeyBkb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzKTtcbiAgICAoeyByZWFsRG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgY29uc3QgeyBhbXBlcnNhbmQgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycztcbiAgICBjb25zdCB7IHF1b3RlIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnM7XG5cbiAgICAvLyBEZWNvZGluZyBjaGFyYWN0ZXJzLlxuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnT3BlbmVyKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMudGFnQ2xvc2VyKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGRvdWJsZVF1b3RlKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGFtcGVyc2FuZCkuam9pbihDb25zdGFudHMueG1sQ2hhcmFjdGVycy5hbXBlcnNhbmQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQocXVvdGUpLmpvaW4oQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMucXVvdGUpO1xuXG4gICAgLy8gV2UgYXJlIHJlcGxhY2luZyAkIGJ5ICYgd2hlbiBpdHMgcGFydCBvZiBhbiBlbnRpdHkgZm9yIHJldHJvLWNvbXBhdGliaWxpdHkuXG4gICAgLy8gTm93LCB0aGUgc3RhbmRhcmQgaXMgcmVwbGFjZSDCpyBieSAmLlxuICAgIGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50RW50aXR5ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGlucHV0LmNoYXJBdChpKTtcbiAgICAgIGlmIChjdXJyZW50RW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJyQnKSB7XG4gICAgICAgICAgY3VycmVudEVudGl0eSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09ICc7Jykge1xuICAgICAgICByZXR1cm5WYWx1ZSArPSBgJiR7Y3VycmVudEVudGl0eX1gO1xuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyLm1hdGNoKC8oW2EtekEtWjAtOSMuXy1dIHwgJy0nKS8pKSB7IC8vIENoYXJhY3RlciBpcyBwYXJ0IG9mIGFuIGVudGl0eS5cbiAgICAgICAgY3VycmVudEVudGl0eSArPSBjaGFyYWN0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5WYWx1ZSArPSBgJCR7Y3VycmVudEVudGl0eX1gOyAvLyBJcyBub3QgYW4gZW50aXR5LlxuICAgICAgICBjdXJyZW50RW50aXR5ID0gbnVsbDtcbiAgICAgICAgaSAtPSAxOyAvLyBQYXJzZSBhZ2FpbiB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBNYXRoTUwgd2l0aCBzdGFuZGFyZCBYTUwgdGFncyB0byBhIE1NYXRoTUwgZW5jb2RlZCB3aXRoIHNhZmUgWE1MIHRhZ3MuXG4gICAqIFdlIHVzZSB0aGVzZSBlbnRpdGllcyBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBodG1sIGVudGl0aWVzIG9uIGl0cyBhdHRyaWJ1dGVzIHNvbWV0aW1lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IC0gaW5wdXQgc3RyaW5nIHRvIGJlIGVuY29kZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gZW5jb2RlZCBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2FmZVhtbEVuY29kZShpbnB1dCkge1xuICAgIGNvbnN0IHsgdGFnT3BlbmVyIH0gPSBDb25zdGFudHMueG1sQ2hhcmFjdGVycztcbiAgICBjb25zdCB7IHRhZ0Nsb3NlciB9ID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBkb3VibGVRdW90ZSB9ID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBhbXBlcnNhbmQgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgcXVvdGUgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdPcGVuZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ09wZW5lcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCh0YWdDbG9zZXIpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChkb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuZG91YmxlUXVvdGUpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoYW1wZXJzYW5kKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy5hbXBlcnNhbmQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQocXVvdGUpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnF1b3RlKTtcblxuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBzcGVjaWFsIHN5bWJvbHMgKD4gMTI4KSB0byBlbnRpdGllcyBhbmQgcmVwbGFjZXMgYWxsIHRleHR1YWxcbiAgICogZW50aXRpZXMgYnkgaXRzIG51bWJlciBlbnRpdGllcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBzdHJpbmcgY29udGFpbmluZyAtIG9yIG5vdCAtIHNwZWNpYWwgc3ltYm9sc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBNYXRoTUwgd2l0aCBhbGwgdGV4dHVhbCBlbnRpdGllcyByZXBsYWNlZC5cbiAgICovXG4gIHN0YXRpYyBtYXRoTUxFbnRpdGllcyhtYXRobWwpIHtcbiAgICBsZXQgdG9SZXR1cm4gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0aG1sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXIgPSBtYXRobWwuY2hhckF0KGkpO1xuXG4gICAgICAvLyBQYXJzaW5nID4gMTI4IGNoYXJhY3RlcnMuXG4gICAgICBpZiAobWF0aG1sLmNvZGVQb2ludEF0KGkpID4gMTI4KSB7XG4gICAgICAgIHRvUmV0dXJuICs9IGAmIyR7bWF0aG1sLmNvZGVQb2ludEF0KGkpfTtgO1xuICAgICAgICAvLyBGb3IgVVRGLTMyIGNoYXJhY3RlcnMgd2UgbmVlZCB0byBtb3ZlIHRoZSBpbmRleCBvbmUgcG9zaXRpb24uXG4gICAgICAgIGlmIChtYXRobWwuY29kZVBvaW50QXQoaSkgPiAweGZmZmYpIHtcbiAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnJicpIHtcbiAgICAgICAgY29uc3QgZW5kID0gbWF0aG1sLmluZGV4T2YoJzsnLCBpICsgMSk7XG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWF0aG1sLnN1YnN0cmluZyhpLCBlbmQgKyAxKTtcbiAgICAgICAgICB0b1JldHVybiArPSBgJiMke1V0aWwuZml4ZWRDaGFyQ29kZUF0KChjb250YWluZXIudGV4dENvbnRlbnQgfHwgY29udGFpbmVyLmlubmVyVGV4dCksIDApfTtgO1xuICAgICAgICAgIGkgPSBlbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9SZXR1cm4gKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b1JldHVybiArPSBjaGFyYWN0ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvUmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSBlZGl0b3IgbmFtZSB3aXRoIHRoZSBwcmVmaXggd3JzXyB0byBhIE1hdGhNTCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBhIE1hdGhNTCBzdHJpbmcgY3JlYXRlZCB3aXRoIGEgY3VzdG9tIGVkaXRvciwgbGlrZSBjaGVtaXN0cnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21FZGl0b3IgLSBjdXN0b20gZWRpdG9yIG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE1hdGhNTCBzdHJpbmcgd2l0aCBoaXMgY2xhc3MgY29udGFpbmluZyB0aGUgZWRpdG9yIHRvb2xiYXIgc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIGFkZEN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlKG1hdGhtbCwgY3VzdG9tRWRpdG9yKSB7XG4gICAgbGV0IHRvUmV0dXJuID0gJyc7XG5cbiAgICBjb25zdCBzdGFydCA9IG1hdGhtbC5pbmRleE9mKCc8bWF0aCcpO1xuICAgIGlmIChzdGFydCA9PT0gMCkge1xuICAgICAgY29uc3QgZW5kID0gbWF0aG1sLmluZGV4T2YoJz4nKTtcbiAgICAgIGlmIChtYXRobWwuaW5kZXhPZignY2xhc3MnKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gQWRkaW5nIGN1c3RvbSBlZGl0b3IgdHlwZS5cbiAgICAgICAgdG9SZXR1cm4gPSBgJHttYXRobWwuc3Vic3RyKHN0YXJ0LCBlbmQpfSBjbGFzcz1cIndyc18ke2N1c3RvbUVkaXRvcn1cIj5gO1xuICAgICAgICB0b1JldHVybiArPSBtYXRobWwuc3Vic3RyKGVuZCArIDEsIG1hdGhtbC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRobWw7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY3VzdG9tIGVkaXRvciBuYW1lIGZyb20gdGhlIE1hdGhNTCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBhIE1hdGhNTCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21FZGl0b3IgLSBjdXN0b20gZWRpdG9yIG5hbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBpbnB1dCBNYXRoTUwgd2l0aG91dCBjdXN0b21FZGl0b3IgbmFtZSBpbiBoaXMgY2xhc3MuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlQ3VzdG9tRWRpdG9yQ2xhc3NBdHRyaWJ1dGUobWF0aG1sLCBjdXN0b21FZGl0b3IpIHtcbiAgICAvLyBEaXNjYXJkIE1hdGhNTCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgY2xhc3MuXG4gICAgaWYgKG1hdGhtbC5pbmRleE9mKCdjbGFzcycpID09PSAtMSB8fCBtYXRobWwuaW5kZXhPZihgd3JzXyR7Y3VzdG9tRWRpdG9yfWApID09PSAtMSkge1xuICAgICAgcmV0dXJuIG1hdGhtbDtcbiAgICB9XG5cbiAgICAvLyBUcml2aWFsIGNhc2U6IGNsYXNzIGF0dHJpYnV0ZSB2YWx1ZSBlcXVhbCB0byBlZGl0b3IgbmFtZS4gVGhlblxuICAgIC8vIGNsYXNzIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICAgIC8vIEZpcnN0IHRyeSB0byByZW1vdmUgaXQgd2l0aCBhIHNwYWNlIGJlZm9yZSBpZiB0aGVyZSBpcyBvbmVcbiAgICAvLyBPdGhlcndpc2Ugd2l0aG91dCB0aGUgc3BhY2VcbiAgICBpZiAobWF0aG1sLmluZGV4T2YoYCBjbGFzcz1cIndyc18ke2N1c3RvbUVkaXRvcn1cImApICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG1hdGhtbC5yZXBsYWNlKGAgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgLCAnJyk7XG4gICAgfSBlbHNlIGlmIChtYXRobWwuaW5kZXhPZihgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtYXRobWwucmVwbGFjZShgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gTm9uIFRyaXZpYWwgY2FzZTogY2xhc3MgYXR0cmlidXRlIGNvbnRhaW5zIGVkaXRvciBuYW1lLlxuICAgIHJldHVybiBtYXRobWwucmVwbGFjZShgd3JzXyR7Y3VzdG9tRWRpdG9yfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFubm90YXRpb24gdGFnIGluIE1hdGhNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWF0aG1sIC0gdmFsaWQgTWF0aE1MLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29udGVudCAtIHZhbHVlIHRvIHB1dCBpbnNpZGUgYW5ub3RhdGlvbiB0YWcuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbm5vdGF0aW9uRW5jb2RpbmcgLSBhbm5vdGF0aW9uIGVuY29kaW5nLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGggYW4gYW5ub3RhdGlvbiB0aGF0IGNvbnRhaW5zXG4gICAqICdjb250ZW50JyBhbmQgZW5jb2RpbmcgJ2VuY29kaW5nJy5cbiAgICovXG4gIHN0YXRpYyBhZGRBbm5vdGF0aW9uKG1hdGhtbCwgY29udGVudCwgYW5ub3RhdGlvbkVuY29kaW5nKSB7XG4gICAgLy8gSWYgY29udGFpbnMgYW5ub3RhdGlvbiwgYWxzbyBjb250YWlucyBzZW1hbnRpY3MgdGFnLlxuICAgIGNvbnN0IGNvbnRhaW5zQW5ub3RhdGlvbiA9IG1hdGhtbC5pbmRleE9mKCc8YW5ub3RhdGlvbicpO1xuXG4gICAgbGV0IG1hdGhtbFdpdGhBbm5vdGF0aW9uID0gJyc7XG4gICAgaWYgKGNvbnRhaW5zQW5ub3RhdGlvbiAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGNsb3NlU2VtYW50aWNzSW5kZXggPSBtYXRobWwuaW5kZXhPZignPC9zZW1hbnRpY3M+Jyk7XG4gICAgICBtYXRobWxXaXRoQW5ub3RhdGlvbiA9IGAke21hdGhtbC5zdWJzdHJpbmcoMCwgY2xvc2VTZW1hbnRpY3NJbmRleCl9PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPiR7bWF0aG1sLnN1YnN0cmluZyhjbG9zZVNlbWFudGljc0luZGV4KX1gO1xuICAgIH0gZWxzZSBpZiAoTWF0aE1MLmlzRW1wdHkobWF0aG1sKSkge1xuICAgICAgY29uc3QgZW5kSW5kZXhJbmxpbmUgPSBtYXRobWwuaW5kZXhPZignLz4nKTtcbiAgICAgIGNvbnN0IGVuZEluZGV4Tm9uSW5saW5lID0gbWF0aG1sLmluZGV4T2YoJz4nKTtcbiAgICAgIGNvbnN0IGVuZEluZGV4ID0gZW5kSW5kZXhOb25JbmxpbmUgPT09IGVuZEluZGV4SW5saW5lID8gZW5kSW5kZXhJbmxpbmUgOiBlbmRJbmRleE5vbklubGluZTtcbiAgICAgIG1hdGhtbFdpdGhBbm5vdGF0aW9uID0gYCR7bWF0aG1sLnN1YnN0cmluZygwLCBlbmRJbmRleCl9PjxzZW1hbnRpY3M+PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiZWdpbk1hdGhNTENvbnRlbnQgPSBtYXRobWwuaW5kZXhPZignPicpICsgMTtcbiAgICAgIGNvbnN0IGVuZE1hdGhtbENvbnRlbnQgPSBtYXRobWwubGFzdEluZGV4T2YoJzwvbWF0aD4nKTtcbiAgICAgIGNvbnN0IG1hdGhtbENvbnRlbnQgPSBtYXRobWwuc3Vic3RyaW5nKGJlZ2luTWF0aE1MQ29udGVudCwgZW5kTWF0aG1sQ29udGVudCk7XG4gICAgICBtYXRobWxXaXRoQW5ub3RhdGlvbiA9IGAke21hdGhtbC5zdWJzdHJpbmcoMCwgYmVnaW5NYXRoTUxDb250ZW50KX08c2VtYW50aWNzPjxtcm93PiR7bWF0aG1sQ29udGVudH08L21yb3c+PGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj4ke2NvbnRlbnR9PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD5gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0aG1sV2l0aEFubm90YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzcGVjaWZpYyBhbm5vdGF0aW9uIHRhZyBpbiBNYXRoTUwgZWxlbWVudC5cbiAgICogSW4gY2FzZSBvZiByZW1vdmUgdGhlIHVuaXF1ZSBhbm5vdGF0aW9uLCBhbHNvIGlzIHJlbW92ZWQgc2VtYW50aWNzIHRhZy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIHZhbGlkIE1hdGhNTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25FbmNvZGluZyAtIGFubm90YXRpb24gZW5jb2RpbmcgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGhvdXQgdGhlIGFubm90YXRpb24gZW5jb2Rpbmcgc3BlY2lmaWVkLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZUFubm90YXRpb24obWF0aG1sLCBhbm5vdGF0aW9uRW5jb2RpbmcpIHtcbiAgICBsZXQgbWF0aG1sV2l0aG91dEFubm90YXRpb24gPSBtYXRobWw7XG4gICAgY29uc3Qgb3BlbkFubm90YXRpb25UYWcgPSBgPGFubm90YXRpb24gZW5jb2Rpbmc9XCIke2Fubm90YXRpb25FbmNvZGluZ31cIj5gO1xuICAgIGNvbnN0IGNsb3NlQW5ub3RhdGlvblRhZyA9ICc8L2Fubm90YXRpb24+JztcbiAgICBjb25zdCBzdGFydEFubm90YXRpb25JbmRleCA9IG1hdGhtbC5pbmRleE9mKG9wZW5Bbm5vdGF0aW9uVGFnKTtcbiAgICBpZiAoc3RhcnRBbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICBsZXQgZGlmZmVyZW50QW5ub3RhdGlvbkZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ID0gbWF0aG1sLmluZGV4T2YoJzxhbm5vdGF0aW9uJyk7XG4gICAgICB3aGlsZSAoZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICBpZiAoZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICE9PSBzdGFydEFubm90YXRpb25JbmRleCkge1xuICAgICAgICAgIGRpZmZlcmVudEFubm90YXRpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ID0gbWF0aG1sLmluZGV4T2YoJzxhbm5vdGF0aW9uJywgZGlmZmVyZW50QW5ub3RhdGlvbkluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWZmZXJlbnRBbm5vdGF0aW9uRm91bmQpIHtcbiAgICAgICAgY29uc3QgY2xvc2VJbmRleCA9IG1hdGhtbC5pbmRleE9mKGNsb3NlQW5ub3RhdGlvblRhZywgc3RhcnRBbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRBbm5vdGF0aW9uSW5kZXggPSBjbG9zZUluZGV4ICsgY2xvc2VBbm5vdGF0aW9uVGFnLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IG1hdGhtbC5zdWJzdHJpbmcoMCwgc3RhcnRBbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgICBtYXRobWxXaXRob3V0QW5ub3RhdGlvbiA9IHN0YXJ0SW5kZXggKyBtYXRobWwuc3Vic3RyaW5nKGVuZEFubm90YXRpb25JbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRobWxXaXRob3V0QW5ub3RhdGlvbiA9IE1hdGhNTC5yZW1vdmVTZW1hbnRpY3MobWF0aG1sKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0aG1sV2l0aG91dEFubm90YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzZW1hbnRpY3MgdGFnIHRvIG1hdGhtbC5cbiAgICogV2hlbiB1c2luZyBIYW5kIHRvIGNyZWF0ZSBmb3JtdWxhcywgaXQgYWRkcyB0aGUgbXJvdyB0YWcgZHVlIHRvIHRoZSBzZW1hbnRpY3Mgb25lLCB0aGlzIG9uZSBpcyBhbHNvIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBNYXRoTUwgc3RyaW5nLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtICdtYXRobWwnIHdpdGhvdXQgc2VtYW50aWNzIHRhZy5cbiAgICovXG4gIHN0YXRpYyByZW1vdmVTZW1hbnRpY3MobWF0aG1sKSB7XG4gICAgLy8gSWYgYG1yb3dgIGlzIGZvdW5kIHJpZ2h0IGJlZm9yZSB0aGUgYHNlbWFudGljc2Agc3RhcnRpbmcgdGFnLCBpdCdzIHJlbW92ZWQgYXMgd2VsbCBcbiAgICBjb25zdCBzZW1hbnRpY3NTdGFydGluZ1RhZ1JlZ2V4ID0gLzxzZW1hbnRpY3M+XFxzKj8oPG1yb3c+KT8vZ207XG5cbiAgICAvLyBJZiBgbXJvd2AgaXMgZm91bmQgcmlnaHQgYWZ0ZXIgdGhlIGBhbm5vdGF0aW9uYCBlbmRpbmcgdGFnLCBpdCdzIHJlbW92ZWQgYXMgd2VsbFxuICAgIC8vIGFsb25nc2lkZSBgc2VtYW50aWNzYCBjbG9zaW5nIHRhZyBhbmQgdGhlIHdob2xlIGBhbm5vdGF0aW9uYCB0YWcgYW5kIGl0cyBjb250ZW50cy5cbiAgICBjb25zdCBzZW1hbnRpY3NFbmRpbmdUYWdSZWdleCA9IC8oPFxcL21yb3c+KT9cXHMqPGFubm90YXRpb25bXFxXXFx3XSo/PFxcL3NlbWFudGljcz4vZ207XG5cbiAgICByZXR1cm4gbWF0aG1sXG4gICAgLnJlcGxhY2Uoc2VtYW50aWNzU3RhcnRpbmdUYWdSZWdleCwgJycpXG4gICAgLnJlcGxhY2Uoc2VtYW50aWNzRW5kaW5nVGFnUmVnZXgsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGFsbCB4bWwgbWF0aG1sIG9jY3VycmVuY2VzIHRoYXQgY29udGFpbiBzZW1hbnRpY3MgdG8gdGhlIHNhbWVcbiAgICogeG1sIG1hdGhtbCBvY2N1cnJlbmNlcyB3aXRob3V0IHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBzdHJpbmcgdGhhdCBjYW4gY29udGFpbiB4bWwgbWF0aG1sIG9jY3VycmVuY2VzLlxuICAgKiBAcGFyYW0ge0NvbnN0YW50c30gW2NoYXJhY3RlcnNdIC0gQ29uc3RhbnQgb2JqZWN0IGNvbnRhaW5pbmcgeG1sQ2hhcmFjdGVyc1xuICAgKiBvciBzYWZlWG1sQ2hhcmFjdGVycyByZWxhdGlvbi5cbiAgICogeG1sQ2hhcmFjdGVycyBieSBkZWZhdWx0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtICd0ZXh0JyB3aXRoIGFsbCB4bWwgbWF0aG1sIG9jY3VycmVuY2VzIHdpdGhvdXQgYW5ub3RhdGlvbiB0YWcuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlU2VtYW50aWNzT2N1cnJlbmNlcyh0ZXh0LCBjaGFyYWN0ZXJzID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMpIHtcbiAgICBjb25zdCBtYXRoVGFnU3RhcnQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1tYXRoYDtcbiAgICBjb25zdCBtYXRoVGFnRW5kID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L21hdGgke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgY29uc3QgbWF0aFRhZ0VuZGxpbmUgPSBgLyR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCB7IHRhZ0Nsb3NlciB9ID0gY2hhcmFjdGVycztcbiAgICBjb25zdCBzZW1hbnRpY3NUYWdTdGFydCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfXNlbWFudGljcyR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCBhbm5vdGF0aW9uVGFnU3RhcnQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1hbm5vdGF0aW9uIGVuY29kaW5nPWA7XG5cbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgbGV0IHN0YXJ0ID0gdGV4dC5pbmRleE9mKG1hdGhUYWdTdGFydCk7XG4gICAgbGV0IGVuZCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkge1xuICAgICAgb3V0cHV0ICs9IHRleHQuc3Vic3RyaW5nKGVuZCwgc3RhcnQpO1xuXG4gICAgICAvLyBNYXRoTUwgY2FuIGJlIHdyaXR0ZW4gYXMgJzxtYXRoPjwvbWF0aD4nIG9yICc8bWF0aCAvPicuXG4gICAgICBjb25zdCBtYXRoVGFnRW5kSW5kZXggPSB0ZXh0LmluZGV4T2YobWF0aFRhZ0VuZCwgc3RhcnQpO1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZGxpbmVJbmRleCA9IHRleHQuaW5kZXhPZihtYXRoVGFnRW5kbGluZSwgc3RhcnQpO1xuICAgICAgY29uc3QgZmlyc3RUYWdDbG9zZXIgPSB0ZXh0LmluZGV4T2YodGFnQ2xvc2VyLCBzdGFydCk7XG4gICAgICBpZiAobWF0aFRhZ0VuZEluZGV4ICE9PSAtMSkge1xuICAgICAgICBlbmQgPSBtYXRoVGFnRW5kSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKG1hdGhUYWdFbmRsaW5lSW5kZXggPT09IGZpcnN0VGFnQ2xvc2VyIC0gMSkge1xuICAgICAgICBlbmQgPSBtYXRoVGFnRW5kbGluZUluZGV4O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZW1hbnRpY3NJbmRleCA9IHRleHQuaW5kZXhPZihzZW1hbnRpY3NUYWdTdGFydCwgc3RhcnQpO1xuICAgICAgaWYgKHNlbWFudGljc0luZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBtbWxUYWdTdGFydCA9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBzZW1hbnRpY3NJbmRleCk7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IHRleHQuaW5kZXhPZihhbm5vdGF0aW9uVGFnU3RhcnQsIHN0YXJ0KTtcbiAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gc2VtYW50aWNzSW5kZXggKyBzZW1hbnRpY3NUYWdTdGFydC5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgbW1sQ29udGVudCA9IHRleHQuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGFubm90YXRpb25JbmRleCk7XG4gICAgICAgICAgb3V0cHV0ICs9IG1tbFRhZ1N0YXJ0ICsgbW1sQ29udGVudCArIG1hdGhUYWdFbmQ7XG4gICAgICAgICAgc3RhcnQgPSB0ZXh0LmluZGV4T2YobWF0aFRhZ1N0YXJ0LCBzdGFydCArIG1hdGhUYWdTdGFydC5sZW5ndGgpO1xuICAgICAgICAgIGVuZCArPSBtYXRoVGFnRW5kLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmQgPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9IHRleHQuaW5kZXhPZihtYXRoVGFnU3RhcnQsIHN0YXJ0ICsgbWF0aFRhZ1N0YXJ0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IHRleHQuaW5kZXhPZihtYXRoVGFnU3RhcnQsIHN0YXJ0ICsgbWF0aFRhZ1N0YXJ0Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IHRleHQuc3Vic3RyaW5nKGVuZCwgdGV4dC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgTWF0aE1MIGNvbnRhaW5zIGEgY2VydGFpbiBjbGFzcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhNTCAtIGlucHV0IE1hdGhNTC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGlucHV0IE1hdGhNTCBjb250YWlucyB0aGUgaW5wdXQgY2xhc3MuXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNvbnRhaW5DbGFzcyhtYXRoTUwsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNsYXNzSW5kZXggPSBtYXRoTUwuaW5kZXhPZignY2xhc3MnKTtcbiAgICBpZiAoY2xhc3NJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NUYWdFbmRJbmRleCA9IG1hdGhNTC5pbmRleE9mKCc+JywgY2xhc3NJbmRleCk7XG4gICAgY29uc3QgY2xhc3NUYWcgPSBtYXRoTUwuc3Vic3RyaW5nKGNsYXNzSW5kZXgsIGNsYXNzVGFnRW5kSW5kZXgpO1xuICAgIGlmIChjbGFzc1RhZy5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBtYXRobWwgaXMgZW1wdHkuIE90aGVyd2lzZSwgZmFsc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSB2YWxpZCBNYXRoTUwgd2l0aCBzdGFuZGFyZCBYTUwgdGFncy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiBtYXRobWwgaXMgZW1wdHkuIE90aGVyd2lzZSwgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eShtYXRobWwpIHtcbiAgICAvLyBNYXRoTUwgY2FuIGhhdmUgdGhlIHNoYXBlIDxtYXRoPjwvbWF0aD4gb3IgJzxtYXRoIC8+Jy5cbiAgICBjb25zdCBjbG9zZVRhZyA9ICc+JztcbiAgICBjb25zdCBjbG9zZVRhZ0lubGluZSA9ICcvPic7XG4gICAgY29uc3QgZmlyc3RDbG9zZVRhZ0luZGV4ID0gbWF0aG1sLmluZGV4T2YoY2xvc2VUYWcpO1xuICAgIGNvbnN0IGZpcnN0Q2xvc2VUYWdJbmxpbmVJbmRleCA9IG1hdGhtbC5pbmRleE9mKGNsb3NlVGFnSW5saW5lKTtcbiAgICBsZXQgZW1wdHkgPSBmYWxzZTtcbiAgICAvLyBNYXRoTUwgaXMgYWx3YXlzIGVtcHR5IGluIHRoZSBzZWNvbmQgc2hhcGUuXG4gICAgaWYgKGZpcnN0Q2xvc2VUYWdJbmxpbmVJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChmaXJzdENsb3NlVGFnSW5saW5lSW5kZXggPT09IGZpcnN0Q2xvc2VUYWdJbmRleCAtIDEpIHtcbiAgICAgICAgZW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hdGhNTCBpcyBhbHdheXMgZW1wdHkgaW4gdGhlIGZpcnN0IHNoYXBlIHdoZW4gdGhlcmUgYXJlbid0IGVsZW1lbnRzXG4gICAgLy8gYmV0d2VlbiBtYXRoIHRhZ3MuXG4gICAgaWYgKCFlbXB0eSkge1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cCgnPC8oLis6KT9tYXRoPicpO1xuICAgICAgY29uc3QgbWF0aFRhZ0VuZEFycmF5ID0gbWF0aFRhZ0VuZFJlZ2V4LmV4ZWMobWF0aG1sKTtcbiAgICAgIGlmIChtYXRoVGFnRW5kQXJyYXkpIHtcbiAgICAgICAgZW1wdHkgPSBmaXJzdENsb3NlVGFnSW5kZXggKyAxID09PSBtYXRoVGFnRW5kQXJyYXkuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgaHRtbCBlbnRpdGllcyBpbnNpZGUgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIHZhbGlkIE1hdGhNTCB3aXRoIHN0YW5kYXJkIFhNTCB0YWdzLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtICdtYXRobWwnIHdpdGggcHJvcGVydHkgZW50aXRpZXMgZW5jb2RlZC5cbiAgICovXG4gIHN0YXRpYyBlbmNvZGVQcm9wZXJ0aWVzKG1hdGhtbCkge1xuICAgIC8vIFNlYXJjaCBhbGwgdGhlIHByb3BlcnRpZXMuXG4gICAgY29uc3QgcmVnZXggPSAvXFx3Kz1cIi4qP1wiL2c7XG4gICAgLy8gRW5jb2RlIGh0bWwgZW50aXRpZXMuXG4gICAgY29uc3QgcmVwbGFjZXIgPSAobWF0Y2gpID0+IHtcbiAgICAgIC8vIEl0IGhhcyB0aGUgc2hhcGU6XG4gICAgICAvLyA8bWF0aCBwcm9wZXJ0eU9uZT1cInNvbWV0aGluZ09uZVwiPjxjaGlsZHJlbiBwcm9wZXJ0eVR3bz1cInNvbWV0aGluZ1R3b1wiPjwvY2hpbGRyZW4+PC9tYXRoPi5cbiAgICAgIGNvbnN0IHF1b3RlSW5kZXggPSBtYXRjaC5pbmRleE9mKCdcIicpO1xuICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IG1hdGNoLnN1YnN0cmluZyhxdW90ZUluZGV4ICsgMSwgbWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlRW5jb2RlZCA9IFV0aWwuaHRtbEVudGl0aWVzKHByb3BlcnR5VmFsdWUpO1xuICAgICAgY29uc3QgbWF0Y2hFbmNvZGVkID0gYCR7bWF0Y2guc3Vic3RyaW5nKDAsIHF1b3RlSW5kZXggKyAxKX0ke3Byb3BlcnR5VmFsdWVFbmNvZGVkfVwiYDtcbiAgICAgIHJldHVybiBtYXRjaEVuY29kZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG1hdGhtbEVuY29kZWQgPSBtYXRobWwucmVwbGFjZShyZWdleCwgcmVwbGFjZXIpO1xuICAgIHJldHVybiBtYXRobWxFbmNvZGVkO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIG1kNTtcbmV4cG9ydCBkZWZhdWx0IG1kNTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEh4T3ZlcnJpZGVzID0gZnVuY3Rpb24gKCkgeyB9XG4gIEh4T3ZlcnJpZGVzLl9fbmFtZV9fID0gdHJ1ZTtcbiAgSHhPdmVycmlkZXMuZGF0ZVN0ciA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIHZhciBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdmFyIGggPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgdmFyIG1pID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAobSA8IDEwID8gXCIwXCIgKyBtIDogXCJcIiArIG0pICsgXCItXCIgKyAoZCA8IDEwID8gXCIwXCIgKyBkIDogXCJcIiArIGQpICsgXCIgXCIgKyAoaCA8IDEwID8gXCIwXCIgKyBoIDogXCJcIiArIGgpICsgXCI6XCIgKyAobWkgPCAxMCA/IFwiMFwiICsgbWkgOiBcIlwiICsgbWkpICsgXCI6XCIgKyAocyA8IDEwID8gXCIwXCIgKyBzIDogXCJcIiArIHMpO1xuICB9XG4gIEh4T3ZlcnJpZGVzLnN0ckRhdGUgPSBmdW5jdGlvbiAocykge1xuICAgIHN3aXRjaCAocy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldFRpbWUoMCk7XG4gICAgICAgIGQuc2V0VVRDSG91cnMoa1swXSk7XG4gICAgICAgIGQuc2V0VVRDTWludXRlcyhrWzFdKTtcbiAgICAgICAgZC5zZXRVVENTZWNvbmRzKGtbMl0pO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIi1cIik7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShrWzBdLCBrWzFdIC0gMSwga1syXSwgMCwgMCwgMCk7XG4gICAgICBjYXNlIDE5OlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgeSA9IGtbMF0uc3BsaXQoXCItXCIpO1xuICAgICAgICB2YXIgdCA9IGtbMV0uc3BsaXQoXCI6XCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeVswXSwgeVsxXSAtIDEsIHlbMl0sIHRbMF0sIHRbMV0sIHRbMl0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgXCJJbnZhbGlkIGRhdGUgZm9ybWF0IDogXCIgKyBzO1xuICAgIH1cbiAgfVxuICBIeE92ZXJyaWRlcy5jY2EgPSBmdW5jdGlvbiAocywgaW5kZXgpIHtcbiAgICB2YXIgeCA9IHMuY2hhckNvZGVBdChpbmRleCk7XG4gICAgaWYgKHggIT0geCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4geDtcbiAgfVxuICBIeE92ZXJyaWRlcy5zdWJzdHIgPSBmdW5jdGlvbiAocywgcG9zLCBsZW4pIHtcbiAgICBpZiAocG9zICE9IG51bGwgJiYgcG9zICE9IDAgJiYgbGVuICE9IG51bGwgJiYgbGVuIDwgMCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGxlbiA9PSBudWxsKSBsZW4gPSBzLmxlbmd0aDtcbiAgICBpZiAocG9zIDwgMCkge1xuICAgICAgcG9zID0gcy5sZW5ndGggKyBwb3M7XG4gICAgICBpZiAocG9zIDwgMCkgcG9zID0gMDtcbiAgICB9IGVsc2UgaWYgKGxlbiA8IDApIGxlbiA9IHMubGVuZ3RoICsgbGVuIC0gcG9zO1xuICAgIHJldHVybiBzLnN1YnN0cihwb3MsIGxlbik7XG4gIH1cbiAgSHhPdmVycmlkZXMucmVtb3ZlID0gZnVuY3Rpb24gKGEsIG9iaikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbCA9IGEubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgaWYgKGFbaV0gPT0gb2JqKSB7XG4gICAgICAgIGEuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEh4T3ZlcnJpZGVzLml0ZXIgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXI6IDAsIGFycjogYSwgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXIgPCB0aGlzLmFyci5sZW5ndGg7XG4gICAgICB9LCBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyclt0aGlzLmN1cisrXTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHZhciBJbnRJdGVyID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gIH07XG4gIEludEl0ZXIuX19uYW1lX18gPSB0cnVlO1xuICBJbnRJdGVyLnByb3RvdHlwZSA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW4rKztcbiAgICB9XG4gICAgLCBoYXNOZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW4gPCB0aGlzLm1heDtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IEludEl0ZXJcbiAgfVxuICB2YXIgU3RkID0gZnVuY3Rpb24gKCkgeyB9XG4gIFN0ZC5fX25hbWVfXyA9IHRydWU7XG4gIFN0ZFtcImlzXCJdID0gZnVuY3Rpb24gKHYsIHQpIHtcbiAgICByZXR1cm4ganMuQm9vdC5fX2luc3RhbmNlb2YodiwgdCk7XG4gIH1cbiAgU3RkLnN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIGpzLkJvb3QuX19zdHJpbmdfcmVjKHMsIFwiXCIpO1xuICB9XG4gIFN0ZFtcImludFwiXSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggfCAwO1xuICB9XG4gIFN0ZC5wYXJzZUludCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIHYgPSBwYXJzZUludCh4LCAxMCk7XG4gICAgaWYgKHYgPT0gMCAmJiAoSHhPdmVycmlkZXMuY2NhKHgsIDEpID09IDEyMCB8fCBIeE92ZXJyaWRlcy5jY2EoeCwgMSkgPT0gODgpKSB2ID0gcGFyc2VJbnQoeCk7XG4gICAgaWYgKGlzTmFOKHYpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdjtcbiAgfVxuICBTdGQucGFyc2VGbG9hdCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoeCk7XG4gIH1cbiAgU3RkLnJhbmRvbSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpO1xuICB9XG4gIHZhciBjb20gPSBjb20gfHwge31cbiAgaWYgKCFjb20ud2lyaXMpIGNvbS53aXJpcyA9IHt9XG4gIGlmICghY29tLndpcmlzLmpzKSBjb20ud2lyaXMuanMgPSB7fVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRyeVJlYWR5KCk7XG4gIH07XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLl9fbmFtZV9fID0gdHJ1ZTtcbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMubWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXY7XG4gICAgZXYgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSgpO1xuICAgIGhheGUuVGltZXIuZGVsYXkoJGJpbmQoZXYsIGV2LnRyeVJlYWR5KSwgMTAwKTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2UgPT0gbnVsbCkgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2UgPSBuZXcgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMoKTtcbiAgICByZXR1cm4gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2U7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuYnlwYXNzRW5jYXBzdWxhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmNvbSA9PSBudWxsKSB3aW5kb3cuY29tID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMgPT0gbnVsbCkgd2luZG93LmNvbS53aXJpcyA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzLmpzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMuanMgPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMucHJvdG90eXBlID0ge1xuICAgIG1kNWVuY29kZTogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBoYXhlLk1kNS5lbmNvZGUoY29udGVudCk7XG4gICAgfVxuICAgICwgZG9Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID0gdGhpcztcbiAgICAgIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmJ5cGFzc0VuY2Fwc3VsYXRpb24oKTtcbiAgICB9XG4gICAgLCB0cnlSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgaWYgKGpzLkxpYi5kb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMuZG9Mb2FkKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJlYWR5KSBoYXhlLlRpbWVyLmRlbGF5KCRiaW5kKHRoaXMsIHRoaXMudHJ5UmVhZHkpLCAxMDApO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHNcbiAgfVxuICB2YXIgaGF4ZSA9IGhheGUgfHwge31cbiAgaGF4ZS5Mb2cgPSBmdW5jdGlvbiAoKSB7IH1cbiAgaGF4ZS5Mb2cuX19uYW1lX18gPSB0cnVlO1xuICBoYXhlLkxvZy50cmFjZSA9IGZ1bmN0aW9uICh2LCBpbmZvcykge1xuICAgIGpzLkJvb3QuX190cmFjZSh2LCBpbmZvcyk7XG4gIH1cbiAgaGF4ZS5Mb2cuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAganMuQm9vdC5fX2NsZWFyX3RyYWNlKCk7XG4gIH1cbiAgaGF4ZS5NZDUgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGhheGUuTWQ1Ll9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5NZDUuZW5jb2RlID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gbmV3IGhheGUuTWQ1KCkuZG9FbmNvZGUocyk7XG4gIH1cbiAgaGF4ZS5NZDUucHJvdG90eXBlID0ge1xuICAgIGRvRW5jb2RlOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuc3RyMmJsa3Moc3RyKTtcbiAgICAgIHZhciBhID0gMTczMjU4NDE5MztcbiAgICAgIHZhciBiID0gLTI3MTczMzg3OTtcbiAgICAgIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gICAgICB2YXIgZCA9IDI3MTczMzg3ODtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCB4Lmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkYSA9IGE7XG4gICAgICAgIHZhciBvbGRiID0gYjtcbiAgICAgICAgdmFyIG9sZGMgPSBjO1xuICAgICAgICB2YXIgb2xkZCA9IGQ7XG4gICAgICAgIHN0ZXAgPSAwO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICAgICAgYSA9IHRoaXMuYWRkbWUoYSwgb2xkYSk7XG4gICAgICAgIGIgPSB0aGlzLmFkZG1lKGIsIG9sZGIpO1xuICAgICAgICBjID0gdGhpcy5hZGRtZShjLCBvbGRjKTtcbiAgICAgICAgZCA9IHRoaXMuYWRkbWUoZCwgb2xkZCk7XG4gICAgICAgIGkgKz0gMTY7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yaGV4KGEpICsgdGhpcy5yaGV4KGIpICsgdGhpcy5yaGV4KGMpICsgdGhpcy5yaGV4KGQpO1xuICAgIH1cbiAgICAsIGlpOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0WE9SKGMsIHRoaXMuYml0T1IoYiwgfmQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgaGg6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRYT1IodGhpcy5iaXRYT1IoYiwgYyksIGQpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBnZzogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdE9SKHRoaXMuYml0QU5EKGIsIGQpLCB0aGlzLmJpdEFORChjLCB+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBmZjogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdE9SKHRoaXMuYml0QU5EKGIsIGMpLCB0aGlzLmJpdEFORCh+YiwgZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBjbW46IGZ1bmN0aW9uIChxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRtZSh0aGlzLnJvbCh0aGlzLmFkZG1lKHRoaXMuYWRkbWUoYSwgcSksIHRoaXMuYWRkbWUoeCwgdCkpLCBzKSwgYik7XG4gICAgfVxuICAgICwgcm9sOiBmdW5jdGlvbiAobnVtLCBjbnQpIHtcbiAgICAgIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbiAgICB9XG4gICAgLCBzdHIyYmxrczogZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIG5ibGsgPSAoc3RyLmxlbmd0aCArIDggPj4gNikgKyAxO1xuICAgICAgdmFyIGJsa3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHZhciBfZzEgPSAwLCBfZyA9IG5ibGsgKiAxNjtcbiAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICBibGtzW2ldID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBibGtzW2kgPj4gMl0gfD0gSHhPdmVycmlkZXMuY2NhKHN0ciwgaSkgPDwgKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0ICogODtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgYmxrc1tpID4+IDJdIHw9IDEyOCA8PCAoc3RyLmxlbmd0aCAqIDggKyBpKSAlIDQgKiA4O1xuICAgICAgdmFyIGwgPSBzdHIubGVuZ3RoICogODtcbiAgICAgIHZhciBrID0gbmJsayAqIDE2IC0gMjtcbiAgICAgIGJsa3Nba10gPSBsICYgMjU1O1xuICAgICAgYmxrc1trXSB8PSAobCA+Pj4gOCAmIDI1NSkgPDwgODtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDE2ICYgMjU1KSA8PCAxNjtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDI0ICYgMjU1KSA8PCAyNDtcbiAgICAgIHJldHVybiBibGtzO1xuICAgIH1cbiAgICAsIHJoZXg6IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgdmFyIGhleF9jaHIgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICAgIHZhciBfZyA9IDA7XG4gICAgICB3aGlsZSAoX2cgPCA0KSB7XG4gICAgICAgIHZhciBqID0gX2crKztcbiAgICAgICAgc3RyICs9IGhleF9jaHIuY2hhckF0KG51bSA+PiBqICogOCArIDQgJiAxNSkgKyBoZXhfY2hyLmNoYXJBdChudW0gPj4gaiAqIDggJiAxNSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAsIGFkZG1lOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgdmFyIGxzdyA9ICh4ICYgNjU1MzUpICsgKHkgJiA2NTUzNSk7XG4gICAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgNjU1MzU7XG4gICAgfVxuICAgICwgYml0QU5EOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxICYgKGIgJiAxKTtcbiAgICAgIHZhciBtc2IzMSA9IGEgPj4+IDEgJiBiID4+PiAxO1xuICAgICAgcmV0dXJuIG1zYjMxIDw8IDEgfCBsc2I7XG4gICAgfVxuICAgICwgYml0WE9SOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxIF4gYiAmIDE7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxIF4gYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIGJpdE9SOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGxzYiA9IGEgJiAxIHwgYiAmIDE7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxIHwgYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogaGF4ZS5NZDVcbiAgfVxuICBoYXhlLlRpbWVyID0gZnVuY3Rpb24gKHRpbWVfbXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHRoaXMuaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgbWUucnVuKCk7XG4gICAgfSwgdGltZV9tcyk7XG4gIH07XG4gIGhheGUuVGltZXIuX19uYW1lX18gPSB0cnVlO1xuICBoYXhlLlRpbWVyLmRlbGF5ID0gZnVuY3Rpb24gKGYsIHRpbWVfbXMpIHtcbiAgICB2YXIgdCA9IG5ldyBoYXhlLlRpbWVyKHRpbWVfbXMpO1xuICAgIHQucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdC5zdG9wKCk7XG4gICAgICBmKCk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBoYXhlLlRpbWVyLm1lYXN1cmUgPSBmdW5jdGlvbiAoZiwgcG9zKSB7XG4gICAgdmFyIHQwID0gaGF4ZS5UaW1lci5zdGFtcCgpO1xuICAgIHZhciByID0gZigpO1xuICAgIGhheGUuTG9nLnRyYWNlKGhheGUuVGltZXIuc3RhbXAoKSAtIHQwICsgXCJzXCIsIHBvcyk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgaGF4ZS5UaW1lci5zdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICB9XG4gIGhheGUuVGltZXIucHJvdG90eXBlID0ge1xuICAgIHJ1bjogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgICAsIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmlkID09IG51bGwpIHJldHVybjtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBoYXhlLlRpbWVyXG4gIH1cbiAgdmFyIGpzID0ganMgfHwge31cbiAganMuQm9vdCA9IGZ1bmN0aW9uICgpIHsgfVxuICBqcy5Cb290Ll9fbmFtZV9fID0gdHJ1ZTtcbiAganMuQm9vdC5fX3VuaHRtbCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoXCImXCIpLmpvaW4oXCImYW1wO1wiKS5zcGxpdChcIjxcIikuam9pbihcIiZsdDtcIikuc3BsaXQoXCI+XCIpLmpvaW4oXCImZ3Q7XCIpO1xuICB9XG4gIGpzLkJvb3QuX190cmFjZSA9IGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG1zZyA9IGkgIT0gbnVsbCA/IGkuZmlsZU5hbWUgKyBcIjpcIiArIGkubGluZU51bWJlciArIFwiOiBcIiA6IFwiXCI7XG4gICAgbXNnICs9IGpzLkJvb3QuX19zdHJpbmdfcmVjKHYsIFwiXCIpO1xuICAgIHZhciBkO1xuICAgIGlmICh0eXBlb2YgKGRvY3VtZW50KSAhPSBcInVuZGVmaW5lZFwiICYmIChkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXhlOnRyYWNlXCIpKSAhPSBudWxsKSBkLmlubmVySFRNTCArPSBqcy5Cb290Ll9fdW5odG1sKG1zZykgKyBcIjxici8+XCI7IGVsc2UgaWYgKHR5cGVvZiAoY29uc29sZSkgIT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLmxvZyAhPSBudWxsKSBjb25zb2xlLmxvZyhtc2cpO1xuICB9XG4gIGpzLkJvb3QuX19jbGVhcl90cmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGF4ZTp0cmFjZVwiKTtcbiAgICBpZiAoZCAhPSBudWxsKSBkLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbiAganMuQm9vdC5pc0NsYXNzID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby5fX25hbWVfXztcbiAgfVxuICBqcy5Cb290LmlzRW51bSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUuX19lbmFtZV9fO1xuICB9XG4gIGpzLkJvb3QuZ2V0Q2xhc3MgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLl9fY2xhc3NfXztcbiAgfVxuICBqcy5Cb290Ll9fc3RyaW5nX3JlYyA9IGZ1bmN0aW9uIChvLCBzKSB7XG4gICAgaWYgKG8gPT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuICAgIGlmIChzLmxlbmd0aCA+PSA1KSByZXR1cm4gXCI8Li4uPlwiO1xuICAgIHZhciB0ID0gdHlwZW9mIChvKTtcbiAgICBpZiAodCA9PSBcImZ1bmN0aW9uXCIgJiYgKG8uX19uYW1lX18gfHwgby5fX2VuYW1lX18pKSB0ID0gXCJvYmplY3RcIjtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgaWYgKG8gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGlmIChvLl9fZW51bV9fKSB7XG4gICAgICAgICAgICBpZiAoby5sZW5ndGggPT0gMikgcmV0dXJuIG9bMF07XG4gICAgICAgICAgICB2YXIgc3RyID0gb1swXSArIFwiKFwiO1xuICAgICAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICAgICAgdmFyIF9nMSA9IDIsIF9nID0gby5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgICAgICAgaWYgKGkgIT0gMikgc3RyICs9IFwiLFwiICsganMuQm9vdC5fX3N0cmluZ19yZWMob1tpXSwgcyk7IGVsc2Ugc3RyICs9IGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baV0sIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0ciArIFwiKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciBzdHIgPSBcIltcIjtcbiAgICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgICAgdmFyIF9nID0gMDtcbiAgICAgICAgICB3aGlsZSAoX2cgPCBsKSB7XG4gICAgICAgICAgICB2YXIgaTEgPSBfZysrO1xuICAgICAgICAgICAgc3RyICs9IChpMSA+IDAgPyBcIixcIiA6IFwiXCIpICsganMuQm9vdC5fX3N0cmluZ19yZWMob1tpMV0sIHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHIgKz0gXCJdXCI7XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9zdHI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdG9zdHIgPSBvLnRvU3RyaW5nO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFwiPz8/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvc3RyICE9IG51bGwgJiYgdG9zdHIgIT0gT2JqZWN0LnRvU3RyaW5nKSB7XG4gICAgICAgICAgdmFyIHMyID0gby50b1N0cmluZygpO1xuICAgICAgICAgIGlmIChzMiAhPSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gczI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGsgPSBudWxsO1xuICAgICAgICB2YXIgc3RyID0gXCJ7XFxuXCI7XG4gICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgdmFyIGhhc3AgPSBvLmhhc093blByb3BlcnR5ICE9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbykge1xuICAgICAgICAgIDtcbiAgICAgICAgICBpZiAoaGFzcCAmJiAhby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrID09IFwicHJvdG90eXBlXCIgfHwgayA9PSBcIl9fY2xhc3NfX1wiIHx8IGsgPT0gXCJfX3N1cGVyX19cIiB8fCBrID09IFwiX19pbnRlcmZhY2VzX19cIiB8fCBrID09IFwiX19wcm9wZXJ0aWVzX19cIikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdHIubGVuZ3RoICE9IDIpIHN0ciArPSBcIiwgXFxuXCI7XG4gICAgICAgICAgc3RyICs9IHMgKyBrICsgXCIgOiBcIiArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9ba10sIHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgPSBzLnN1YnN0cmluZygxKTtcbiAgICAgICAgc3RyICs9IFwiXFxuXCIgKyBzICsgXCJ9XCI7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgcmV0dXJuIFwiPGZ1bmN0aW9uPlwiO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gbztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBTdHJpbmcobyk7XG4gICAgfVxuICB9XG4gIGpzLkJvb3QuX19pbnRlcmZMb29wID0gZnVuY3Rpb24gKGNjLCBjbCkge1xuICAgIGlmIChjYyA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGNjID09IGNsKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgaW50ZiA9IGNjLl9faW50ZXJmYWNlc19fO1xuICAgIGlmIChpbnRmICE9IG51bGwpIHtcbiAgICAgIHZhciBfZzEgPSAwLCBfZyA9IGludGYubGVuZ3RoO1xuICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgIHZhciBpMSA9IGludGZbaV07XG4gICAgICAgIGlmIChpMSA9PSBjbCB8fCBqcy5Cb290Ll9faW50ZXJmTG9vcChpMSwgY2wpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGpzLkJvb3QuX19pbnRlcmZMb29wKGNjLl9fc3VwZXJfXywgY2wpO1xuICB9XG4gIGpzLkJvb3QuX19pbnN0YW5jZW9mID0gZnVuY3Rpb24gKG8sIGNsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvIGluc3RhbmNlb2YgY2wpIHtcbiAgICAgICAgaWYgKGNsID09IEFycmF5KSByZXR1cm4gby5fX2VudW1fXyA9PSBudWxsO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChqcy5Cb290Ll9faW50ZXJmTG9vcChvLl9fY2xhc3NfXywgY2wpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoY2wgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNsKSB7XG4gICAgICBjYXNlIEludDpcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChvICUgMjE0NzQ4MzY0OC4wKSA9PT0gbztcbiAgICAgIGNhc2UgRmxvYXQ6XG4gICAgICAgIHJldHVybiB0eXBlb2YgKG8pID09IFwibnVtYmVyXCI7XG4gICAgICBjYXNlIEJvb2w6XG4gICAgICAgIHJldHVybiBvID09PSB0cnVlIHx8IG8gPT09IGZhbHNlO1xuICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgKG8pID09IFwic3RyaW5nXCI7XG4gICAgICBjYXNlIER5bmFtaWM6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKG8gPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoY2wgPT0gQ2xhc3MgJiYgby5fX25hbWVfXyAhPSBudWxsKSByZXR1cm4gdHJ1ZTsgZWxzZSBudWxsO1xuICAgICAgICBpZiAoY2wgPT0gRW51bSAmJiBvLl9fZW5hbWVfXyAhPSBudWxsKSByZXR1cm4gdHJ1ZTsgZWxzZSBudWxsO1xuICAgICAgICByZXR1cm4gby5fX2VudW1fXyA9PSBjbDtcbiAgICB9XG4gIH1cbiAganMuQm9vdC5fX2Nhc3QgPSBmdW5jdGlvbiAobywgdCkge1xuICAgIGlmIChqcy5Cb290Ll9faW5zdGFuY2VvZihvLCB0KSkgcmV0dXJuIG87IGVsc2UgdGhyb3cgXCJDYW5ub3QgY2FzdCBcIiArIFN0ZC5zdHJpbmcobykgKyBcIiB0byBcIiArIFN0ZC5zdHJpbmcodCk7XG4gIH1cbiAganMuTGliID0gZnVuY3Rpb24gKCkgeyB9XG4gIGpzLkxpYi5fX25hbWVfXyA9IHRydWU7XG4gIGpzLkxpYi5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuICBqcy5MaWIuYWxlcnQgPSBmdW5jdGlvbiAodikge1xuICAgIGFsZXJ0KGpzLkJvb3QuX19zdHJpbmdfcmVjKHYsIFwiXCIpKTtcbiAgfVxuICBqcy5MaWIuZXZhbCA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIGV2YWwoY29kZSk7XG4gIH1cbiAganMuTGliLnNldEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChmKSB7XG4gICAganMuTGliLm9uZXJyb3IgPSBmO1xuICB9XG4gIHZhciAkXztcbiAgZnVuY3Rpb24gJGJpbmQobywgbSkgeyB2YXIgZiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYubWV0aG9kLmFwcGx5KGYuc2NvcGUsIGFyZ3VtZW50cyk7IH07IGYuc2NvcGUgPSBvOyBmLm1ldGhvZCA9IG07IHJldHVybiBmOyB9O1xuICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIEh4T3ZlcnJpZGVzLnJlbW92ZSA9IGZ1bmN0aW9uIChhLCBvKSB7XG4gICAgdmFyIGkgPSBhLmluZGV4T2Yobyk7XG4gICAgaWYgKGkgPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBhLnNwbGljZShpLCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTsgZWxzZSBudWxsO1xuICBNYXRoLl9fbmFtZV9fID0gW1wiTWF0aFwiXTtcbiAgTWF0aC5OYU4gPSBOdW1iZXIuTmFOO1xuICBNYXRoLk5FR0FUSVZFX0lORklOSVRZID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICBNYXRoLlBPU0lUSVZFX0lORklOSVRZID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICBNYXRoLmlzRmluaXRlID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaXNGaW5pdGUoaSk7XG4gIH07XG4gIE1hdGguaXNOYU4gPSBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpc05hTihpKTtcbiAgfTtcbiAgU3RyaW5nLnByb3RvdHlwZS5fX2NsYXNzX18gPSBTdHJpbmc7XG4gIFN0cmluZy5fX25hbWVfXyA9IHRydWU7XG4gIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX18gPSBBcnJheTtcbiAgQXJyYXkuX19uYW1lX18gPSB0cnVlO1xuICBEYXRlLnByb3RvdHlwZS5fX2NsYXNzX18gPSBEYXRlO1xuICBEYXRlLl9fbmFtZV9fID0gW1wiRGF0ZVwiXTtcbiAgdmFyIEludCA9IHsgX19uYW1lX186IFtcIkludFwiXSB9O1xuICB2YXIgRHluYW1pYyA9IHsgX19uYW1lX186IFtcIkR5bmFtaWNcIl0gfTtcbiAgdmFyIEZsb2F0ID0gTnVtYmVyO1xuICBGbG9hdC5fX25hbWVfXyA9IFtcIkZsb2F0XCJdO1xuICB2YXIgQm9vbCA9IEJvb2xlYW47XG4gIEJvb2wuX19lbmFtZV9fID0gW1wiQm9vbFwiXTtcbiAgdmFyIENsYXNzID0geyBfX25hbWVfXzogW1wiQ2xhc3NcIl0gfTtcbiAgdmFyIEVudW0gPSB7fTtcbiAgdmFyIFZvaWQgPSB7IF9fZW5hbWVfXzogW1wiVm9pZFwiXSB9O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIpIGpzLkxpYi5kb2N1bWVudCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAganMuTGliLndpbmRvdyA9IHdpbmRvdztcbiAgICBqcy5MaWIud2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmUpIHtcbiAgICAgIHZhciBmID0ganMuTGliLm9uZXJyb3I7XG4gICAgICBpZiAoZiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZihtc2csIFt1cmwgKyBcIjpcIiArIGxpbmVdKTtcbiAgICB9O1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1haW4oKTtcbiAgZGVsZXRlIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX187XG59KCkpO1xuXG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBIeE92ZXJyaWRlcyA9IGZ1bmN0aW9uICgpIHsgfVxuICBIeE92ZXJyaWRlcy5fX25hbWVfXyA9IHRydWU7XG4gIEh4T3ZlcnJpZGVzLmRhdGVTdHIgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIHZhciBtaSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG0gPCAxMCA/IFwiMFwiICsgbSA6IFwiXCIgKyBtKSArIFwiLVwiICsgKGQgPCAxMCA/IFwiMFwiICsgZCA6IFwiXCIgKyBkKSArIFwiIFwiICsgKGggPCAxMCA/IFwiMFwiICsgaCA6IFwiXCIgKyBoKSArIFwiOlwiICsgKG1pIDwgMTAgPyBcIjBcIiArIG1pIDogXCJcIiArIG1pKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IFwiXCIgKyBzKTtcbiAgfVxuICBIeE92ZXJyaWRlcy5zdHJEYXRlID0gZnVuY3Rpb24gKHMpIHtcbiAgICBzd2l0Y2ggKHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIjpcIik7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKDApO1xuICAgICAgICBkLnNldFVUQ0hvdXJzKGtbMF0pO1xuICAgICAgICBkLnNldFVUQ01pbnV0ZXMoa1sxXSk7XG4gICAgICAgIGQuc2V0VVRDU2Vjb25kcyhrWzJdKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCItXCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoa1swXSwga1sxXSAtIDEsIGtbMl0sIDAsIDAsIDApO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdmFyIHkgPSBrWzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgdmFyIHQgPSBrWzFdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHlbMF0sIHlbMV0gLSAxLCB5WzJdLCB0WzBdLCB0WzFdLCB0WzJdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IFwiSW52YWxpZCBkYXRlIGZvcm1hdCA6IFwiICsgcztcbiAgICB9XG4gIH1cbiAgSHhPdmVycmlkZXMuY2NhID0gZnVuY3Rpb24gKHMsIGluZGV4KSB7XG4gICAgdmFyIHggPSBzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmICh4ICE9IHgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgSHhPdmVycmlkZXMuc3Vic3RyID0gZnVuY3Rpb24gKHMsIHBvcywgbGVuKSB7XG4gICAgaWYgKHBvcyAhPSBudWxsICYmIHBvcyAhPSAwICYmIGxlbiAhPSBudWxsICYmIGxlbiA8IDApIHJldHVybiBcIlwiO1xuICAgIGlmIChsZW4gPT0gbnVsbCkgbGVuID0gcy5sZW5ndGg7XG4gICAgaWYgKHBvcyA8IDApIHtcbiAgICAgIHBvcyA9IHMubGVuZ3RoICsgcG9zO1xuICAgICAgaWYgKHBvcyA8IDApIHBvcyA9IDA7XG4gICAgfSBlbHNlIGlmIChsZW4gPCAwKSBsZW4gPSBzLmxlbmd0aCArIGxlbiAtIHBvcztcbiAgICByZXR1cm4gcy5zdWJzdHIocG9zLCBsZW4pO1xuICB9XG4gIEh4T3ZlcnJpZGVzLnJlbW92ZSA9IGZ1bmN0aW9uIChhLCBvYmopIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGwpIHtcbiAgICAgIGlmIChhW2ldID09IG9iaikge1xuICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBIeE92ZXJyaWRlcy5pdGVyID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VyOiAwLCBhcnI6IGEsIGhhc05leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyIDwgdGhpcy5hcnIubGVuZ3RoO1xuICAgICAgfSwgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJbdGhpcy5jdXIrK107XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB2YXIgSW50SXRlciA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICB9O1xuICBJbnRJdGVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgSW50SXRlci5wcm90b3R5cGUgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluKys7XG4gICAgfVxuICAgICwgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluIDwgdGhpcy5tYXg7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBJbnRJdGVyXG4gIH1cbiAgdmFyIFN0ZCA9IGZ1bmN0aW9uICgpIHsgfVxuICBTdGQuX19uYW1lX18gPSB0cnVlO1xuICBTdGRbXCJpc1wiXSA9IGZ1bmN0aW9uICh2LCB0KSB7XG4gICAgcmV0dXJuIGpzLkJvb3QuX19pbnN0YW5jZW9mKHYsIHQpO1xuICB9XG4gIFN0ZC5zdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBqcy5Cb290Ll9fc3RyaW5nX3JlYyhzLCBcIlwiKTtcbiAgfVxuICBTdGRbXCJpbnRcIl0gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4IHwgMDtcbiAgfVxuICBTdGQucGFyc2VJbnQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciB2ID0gcGFyc2VJbnQoeCwgMTApO1xuICAgIGlmICh2ID09IDAgJiYgKEh4T3ZlcnJpZGVzLmNjYSh4LCAxKSA9PSAxMjAgfHwgSHhPdmVycmlkZXMuY2NhKHgsIDEpID09IDg4KSkgdiA9IHBhcnNlSW50KHgpO1xuICAgIGlmIChpc05hTih2KSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHY7XG4gIH1cbiAgU3RkLnBhcnNlRmxvYXQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHgpO1xuICB9XG4gIFN0ZC5yYW5kb20gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KTtcbiAgfVxuICB2YXIgY29tID0gY29tIHx8IHt9XG4gIGlmICghY29tLndpcmlzKSBjb20ud2lyaXMgPSB7fVxuICBpZiAoIWNvbS53aXJpcy5qcykgY29tLndpcmlzLmpzID0ge31cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50cnlSZWFkeSgpO1xuICB9O1xuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5fX25hbWVfXyA9IHRydWU7XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2O1xuICAgIGV2ID0gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UoKTtcbiAgICBoYXhlLlRpbWVyLmRlbGF5KCRiaW5kKGV2LCBldi50cnlSZWFkeSksIDEwMCk7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID09IG51bGwpIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID0gbmV3IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzKCk7XG4gICAgcmV0dXJuIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmJ5cGFzc0VuY2Fwc3VsYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5jb20gPT0gbnVsbCkgd2luZG93LmNvbSA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMgPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcy5qcyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLnByb3RvdHlwZSA9IHtcbiAgICBtZDVlbmNvZGU6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICByZXR1cm4gaGF4ZS5NZDUuZW5jb2RlKGNvbnRlbnQpO1xuICAgIH1cbiAgICAsIGRvTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5ieXBhc3NFbmNhcHN1bGF0aW9uKCk7XG4gICAgfVxuICAgICwgdHJ5UmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmIChqcy5MaWIuZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLmRvTG9hZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5yZWFkeSkgaGF4ZS5UaW1lci5kZWxheSgkYmluZCh0aGlzLCB0aGlzLnRyeVJlYWR5KSwgMTAwKTtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzXG4gIH1cbiAgdmFyIGhheGUgPSBoYXhlIHx8IHt9XG4gIGhheGUuTG9nID0gZnVuY3Rpb24gKCkgeyB9XG4gIGhheGUuTG9nLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5Mb2cudHJhY2UgPSBmdW5jdGlvbiAodiwgaW5mb3MpIHtcbiAgICBqcy5Cb290Ll9fdHJhY2UodiwgaW5mb3MpO1xuICB9XG4gIGhheGUuTG9nLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGpzLkJvb3QuX19jbGVhcl90cmFjZSgpO1xuICB9XG4gIGhheGUuTWQ1ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBoYXhlLk1kNS5fX25hbWVfXyA9IHRydWU7XG4gIGhheGUuTWQ1LmVuY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIG5ldyBoYXhlLk1kNSgpLmRvRW5jb2RlKHMpO1xuICB9XG4gIGhheGUuTWQ1LnByb3RvdHlwZSA9IHtcbiAgICBkb0VuY29kZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIHggPSB0aGlzLnN0cjJibGtzKHN0cik7XG4gICAgICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gICAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gICAgICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICAgICAgdmFyIGQgPSAyNzE3MzM4Nzg7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgeC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9sZGEgPSBhO1xuICAgICAgICB2YXIgb2xkYiA9IGI7XG4gICAgICAgIHZhciBvbGRjID0gYztcbiAgICAgICAgdmFyIG9sZGQgPSBkO1xuICAgICAgICBzdGVwID0gMDtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSB0aGlzLmFkZG1lKGEsIG9sZGEpO1xuICAgICAgICBiID0gdGhpcy5hZGRtZShiLCBvbGRiKTtcbiAgICAgICAgYyA9IHRoaXMuYWRkbWUoYywgb2xkYyk7XG4gICAgICAgIGQgPSB0aGlzLmFkZG1lKGQsIG9sZGQpO1xuICAgICAgICBpICs9IDE2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmhleChhKSArIHRoaXMucmhleChiKSArIHRoaXMucmhleChjKSArIHRoaXMucmhleChkKTtcbiAgICB9XG4gICAgLCBpaTogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdFhPUihjLCB0aGlzLmJpdE9SKGIsIH5kKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGhoOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0WE9SKHRoaXMuYml0WE9SKGIsIGMpLCBkKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZ2c6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBkKSwgdGhpcy5iaXRBTkQoYywgfmQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZmY6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBjKSwgdGhpcy5iaXRBTkQofmIsIGQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgY21uOiBmdW5jdGlvbiAocSwgYSwgYiwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkbWUodGhpcy5yb2wodGhpcy5hZGRtZSh0aGlzLmFkZG1lKGEsIHEpLCB0aGlzLmFkZG1lKHgsIHQpKSwgcyksIGIpO1xuICAgIH1cbiAgICAsIHJvbDogZnVuY3Rpb24gKG51bSwgY250KSB7XG4gICAgICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG4gICAgfVxuICAgICwgc3RyMmJsa3M6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciBuYmxrID0gKHN0ci5sZW5ndGggKyA4ID4+IDYpICsgMTtcbiAgICAgIHZhciBibGtzID0gbmV3IEFycmF5KCk7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBuYmxrICogMTY7XG4gICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgYmxrc1tpXSA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgYmxrc1tpID4+IDJdIHw9IEh4T3ZlcnJpZGVzLmNjYShzdHIsIGkpIDw8IChzdHIubGVuZ3RoICogOCArIGkpICUgNCAqIDg7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGJsa3NbaSA+PiAyXSB8PSAxMjggPDwgKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0ICogODtcbiAgICAgIHZhciBsID0gc3RyLmxlbmd0aCAqIDg7XG4gICAgICB2YXIgayA9IG5ibGsgKiAxNiAtIDI7XG4gICAgICBibGtzW2tdID0gbCAmIDI1NTtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDggJiAyNTUpIDw8IDg7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAxNiAmIDI1NSkgPDwgMTY7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAyNCAmIDI1NSkgPDwgMjQ7XG4gICAgICByZXR1cm4gYmxrcztcbiAgICB9XG4gICAgLCByaGV4OiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIHZhciBoZXhfY2hyID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICB2YXIgX2cgPSAwO1xuICAgICAgd2hpbGUgKF9nIDwgNCkge1xuICAgICAgICB2YXIgaiA9IF9nKys7XG4gICAgICAgIHN0ciArPSBoZXhfY2hyLmNoYXJBdChudW0gPj4gaiAqIDggKyA0ICYgMTUpICsgaGV4X2Noci5jaGFyQXQobnVtID4+IGogKiA4ICYgMTUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLCBhZGRtZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBsc3cgPSAoeCAmIDY1NTM1KSArICh5ICYgNjU1MzUpO1xuICAgICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgICAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDY1NTM1O1xuICAgIH1cbiAgICAsIGJpdEFORDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSAmIChiICYgMSk7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxICYgYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIGJpdFhPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSBeIGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSBeIGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBiaXRPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSB8IGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSB8IGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGhheGUuTWQ1XG4gIH1cbiAgaGF4ZS5UaW1lciA9IGZ1bmN0aW9uICh0aW1lX21zKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB0aGlzLmlkID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lLnJ1bigpO1xuICAgIH0sIHRpbWVfbXMpO1xuICB9O1xuICBoYXhlLlRpbWVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5UaW1lci5kZWxheSA9IGZ1bmN0aW9uIChmLCB0aW1lX21zKSB7XG4gICAgdmFyIHQgPSBuZXcgaGF4ZS5UaW1lcih0aW1lX21zKTtcbiAgICB0LnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc3RvcCgpO1xuICAgICAgZigpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgaGF4ZS5UaW1lci5tZWFzdXJlID0gZnVuY3Rpb24gKGYsIHBvcykge1xuICAgIHZhciB0MCA9IGhheGUuVGltZXIuc3RhbXAoKTtcbiAgICB2YXIgciA9IGYoKTtcbiAgICBoYXhlLkxvZy50cmFjZShoYXhlLlRpbWVyLnN0YW1wKCkgLSB0MCArIFwic1wiLCBwb3MpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGhheGUuVGltZXIuc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgfVxuICBoYXhlLlRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gICAgLCBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5pZCA9PSBudWxsKSByZXR1cm47XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogaGF4ZS5UaW1lclxuICB9XG4gIHZhciBqcyA9IGpzIHx8IHt9XG4gIGpzLkJvb3QgPSBmdW5jdGlvbiAoKSB7IH1cbiAganMuQm9vdC5fX25hbWVfXyA9IHRydWU7XG4gIGpzLkJvb3QuX191bmh0bWwgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnNwbGl0KFwiJlwiKS5qb2luKFwiJmFtcDtcIikuc3BsaXQoXCI8XCIpLmpvaW4oXCImbHQ7XCIpLnNwbGl0KFwiPlwiKS5qb2luKFwiJmd0O1wiKTtcbiAgfVxuICBqcy5Cb290Ll9fdHJhY2UgPSBmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBtc2cgPSBpICE9IG51bGwgPyBpLmZpbGVOYW1lICsgXCI6XCIgKyBpLmxpbmVOdW1iZXIgKyBcIjogXCIgOiBcIlwiO1xuICAgIG1zZyArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKTtcbiAgICB2YXIgZDtcbiAgICBpZiAodHlwZW9mIChkb2N1bWVudCkgIT0gXCJ1bmRlZmluZWRcIiAmJiAoZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGF4ZTp0cmFjZVwiKSkgIT0gbnVsbCkgZC5pbm5lckhUTUwgKz0ganMuQm9vdC5fX3VuaHRtbChtc2cpICsgXCI8YnIvPlwiOyBlbHNlIGlmICh0eXBlb2YgKGNvbnNvbGUpICE9IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS5sb2cgIT0gbnVsbCkgY29uc29sZS5sb2cobXNnKTtcbiAgfVxuICBqcy5Cb290Ll9fY2xlYXJfdHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhheGU6dHJhY2VcIik7XG4gICAgaWYgKGQgIT0gbnVsbCkgZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG4gIGpzLkJvb3QuaXNDbGFzcyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8uX19uYW1lX187XG4gIH1cbiAganMuQm9vdC5pc0VudW0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLl9fZW5hbWVfXztcbiAgfVxuICBqcy5Cb290LmdldENsYXNzID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby5fX2NsYXNzX187XG4gIH1cbiAganMuQm9vdC5fX3N0cmluZ19yZWMgPSBmdW5jdGlvbiAobywgcykge1xuICAgIGlmIChvID09IG51bGwpIHJldHVybiBcIm51bGxcIjtcbiAgICBpZiAocy5sZW5ndGggPj0gNSkgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICB2YXIgdCA9IHR5cGVvZiAobyk7XG4gICAgaWYgKHQgPT0gXCJmdW5jdGlvblwiICYmIChvLl9fbmFtZV9fIHx8IG8uX19lbmFtZV9fKSkgdCA9IFwib2JqZWN0XCI7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIGlmIChvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBpZiAoby5fX2VudW1fXykge1xuICAgICAgICAgICAgaWYgKG8ubGVuZ3RoID09IDIpIHJldHVybiBvWzBdO1xuICAgICAgICAgICAgdmFyIHN0ciA9IG9bMF0gKyBcIihcIjtcbiAgICAgICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgICAgIHZhciBfZzEgPSAyLCBfZyA9IG8ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgICAgICAgIGlmIChpICE9IDIpIHN0ciArPSBcIixcIiArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baV0sIHMpOyBlbHNlIHN0ciArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2ldLCBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICB2YXIgc3RyID0gXCJbXCI7XG4gICAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICAgIHZhciBfZyA9IDA7XG4gICAgICAgICAgd2hpbGUgKF9nIDwgbCkge1xuICAgICAgICAgICAgdmFyIGkxID0gX2crKztcbiAgICAgICAgICAgIHN0ciArPSAoaTEgPiAwID8gXCIsXCIgOiBcIlwiKSArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baTFdLCBzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IFwiXVwiO1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvc3RyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRvc3RyID0gby50b1N0cmluZztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBcIj8/P1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3N0ciAhPSBudWxsICYmIHRvc3RyICE9IE9iamVjdC50b1N0cmluZykge1xuICAgICAgICAgIHZhciBzMiA9IG8udG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAoczIgIT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIHMyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IFwie1xcblwiO1xuICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgIHZhciBoYXNwID0gby5oYXNPd25Qcm9wZXJ0eSAhPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgaWYgKGhhc3AgJiYgIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoayA9PSBcInByb3RvdHlwZVwiIHx8IGsgPT0gXCJfX2NsYXNzX19cIiB8fCBrID09IFwiX19zdXBlcl9fXCIgfHwgayA9PSBcIl9faW50ZXJmYWNlc19fXCIgfHwgayA9PSBcIl9fcHJvcGVydGllc19fXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCAhPSAyKSBzdHIgKz0gXCIsIFxcblwiO1xuICAgICAgICAgIHN0ciArPSBzICsgayArIFwiIDogXCIgKyBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2tdLCBzKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHN0ciArPSBcIlxcblwiICsgcyArIFwifVwiO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgIHJldHVybiBcIjxmdW5jdGlvbj5cIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gU3RyaW5nKG8pO1xuICAgIH1cbiAgfVxuICBqcy5Cb290Ll9faW50ZXJmTG9vcCA9IGZ1bmN0aW9uIChjYywgY2wpIHtcbiAgICBpZiAoY2MgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjYyA9PSBjbCkgcmV0dXJuIHRydWU7XG4gICAgdmFyIGludGYgPSBjYy5fX2ludGVyZmFjZXNfXztcbiAgICBpZiAoaW50ZiAhPSBudWxsKSB7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBpbnRmLmxlbmd0aDtcbiAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICB2YXIgaTEgPSBpbnRmW2ldO1xuICAgICAgICBpZiAoaTEgPT0gY2wgfHwganMuQm9vdC5fX2ludGVyZkxvb3AoaTEsIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqcy5Cb290Ll9faW50ZXJmTG9vcChjYy5fX3N1cGVyX18sIGNsKTtcbiAgfVxuICBqcy5Cb290Ll9faW5zdGFuY2VvZiA9IGZ1bmN0aW9uIChvLCBjbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAobyBpbnN0YW5jZW9mIGNsKSB7XG4gICAgICAgIGlmIChjbCA9PSBBcnJheSkgcmV0dXJuIG8uX19lbnVtX18gPT0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoanMuQm9vdC5fX2ludGVyZkxvb3Aoby5fX2NsYXNzX18sIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGNsID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoIChjbCkge1xuICAgICAgY2FzZSBJbnQ6XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobyAlIDIxNDc0ODM2NDguMCkgPT09IG87XG4gICAgICBjYXNlIEZsb2F0OlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcIm51bWJlclwiO1xuICAgICAgY2FzZSBCb29sOlxuICAgICAgICByZXR1cm4gbyA9PT0gdHJ1ZSB8fCBvID09PSBmYWxzZTtcbiAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcInN0cmluZ1wiO1xuICAgICAgY2FzZSBEeW5hbWljOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChvID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNsID09IENsYXNzICYmIG8uX19uYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgaWYgKGNsID09IEVudW0gJiYgby5fX2VuYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgcmV0dXJuIG8uX19lbnVtX18gPT0gY2w7XG4gICAgfVxuICB9XG4gIGpzLkJvb3QuX19jYXN0ID0gZnVuY3Rpb24gKG8sIHQpIHtcbiAgICBpZiAoanMuQm9vdC5fX2luc3RhbmNlb2YobywgdCkpIHJldHVybiBvOyBlbHNlIHRocm93IFwiQ2Fubm90IGNhc3QgXCIgKyBTdGQuc3RyaW5nKG8pICsgXCIgdG8gXCIgKyBTdGQuc3RyaW5nKHQpO1xuICB9XG4gIGpzLkxpYiA9IGZ1bmN0aW9uICgpIHsgfVxuICBqcy5MaWIuX19uYW1lX18gPSB0cnVlO1xuICBqcy5MaWIuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWdnZXI7XG4gIH1cbiAganMuTGliLmFsZXJ0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICBhbGVydChqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKSk7XG4gIH1cbiAganMuTGliLmV2YWwgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgIHJldHVybiBldmFsKGNvZGUpO1xuICB9XG4gIGpzLkxpYi5zZXRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZikge1xuICAgIGpzLkxpYi5vbmVycm9yID0gZjtcbiAgfVxuICB2YXIgJF87XG4gIGZ1bmN0aW9uICRiaW5kKG8sIG0pIHsgdmFyIGYgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmLm1ldGhvZC5hcHBseShmLnNjb3BlLCBhcmd1bWVudHMpOyB9OyBmLnNjb3BlID0gbzsgZi5tZXRob2QgPSBtOyByZXR1cm4gZjsgfTtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSBIeE92ZXJyaWRlcy5yZW1vdmUgPSBmdW5jdGlvbiAoYSwgbykge1xuICAgIHZhciBpID0gYS5pbmRleE9mKG8pO1xuICAgIGlmIChpID09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07IGVsc2UgbnVsbDtcbiAgTWF0aC5fX25hbWVfXyA9IFtcIk1hdGhcIl07XG4gIE1hdGguTmFOID0gTnVtYmVyLk5hTjtcbiAgTWF0aC5ORUdBVElWRV9JTkZJTklUWSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgTWF0aC5QT1NJVElWRV9JTkZJTklUWSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgTWF0aC5pc0Zpbml0ZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKGkpO1xuICB9O1xuICBNYXRoLmlzTmFOID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaXNOYU4oaSk7XG4gIH07XG4gIFN0cmluZy5wcm90b3R5cGUuX19jbGFzc19fID0gU3RyaW5nO1xuICBTdHJpbmcuX19uYW1lX18gPSB0cnVlO1xuICBBcnJheS5wcm90b3R5cGUuX19jbGFzc19fID0gQXJyYXk7XG4gIEFycmF5Ll9fbmFtZV9fID0gdHJ1ZTtcbiAgRGF0ZS5wcm90b3R5cGUuX19jbGFzc19fID0gRGF0ZTtcbiAgRGF0ZS5fX25hbWVfXyA9IFtcIkRhdGVcIl07XG4gIHZhciBJbnQgPSB7IF9fbmFtZV9fOiBbXCJJbnRcIl0gfTtcbiAgdmFyIER5bmFtaWMgPSB7IF9fbmFtZV9fOiBbXCJEeW5hbWljXCJdIH07XG4gIHZhciBGbG9hdCA9IE51bWJlcjtcbiAgRmxvYXQuX19uYW1lX18gPSBbXCJGbG9hdFwiXTtcbiAgdmFyIEJvb2wgPSBCb29sZWFuO1xuICBCb29sLl9fZW5hbWVfXyA9IFtcIkJvb2xcIl07XG4gIHZhciBDbGFzcyA9IHsgX19uYW1lX186IFtcIkNsYXNzXCJdIH07XG4gIHZhciBFbnVtID0ge307XG4gIHZhciBWb2lkID0geyBfX2VuYW1lX186IFtcIlZvaWRcIl0gfTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiKSBqcy5MaWIuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGpzLkxpYi53aW5kb3cgPSB3aW5kb3c7XG4gICAganMuTGliLndpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKG1zZywgdXJsLCBsaW5lKSB7XG4gICAgICB2YXIgZiA9IGpzLkxpYi5vbmVycm9yO1xuICAgICAgaWYgKGYgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGYobXNnLCBbdXJsICsgXCI6XCIgKyBsaW5lXSk7XG4gICAgfTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5tYWluKCk7XG59KCkpO1xuZGVsZXRlIEFycmF5LnByb3RvdHlwZS5fX2NsYXNzX187XG4vLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IExhdGV4IGZyb20gJy4vbGF0ZXgnO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQWNjZXNzaWJpbGl0eSBmcm9tICcuL2FjY2Vzc2liaWxpdHknO1xuaW1wb3J0IFNlcnZpY2VQcm92aWRlciBmcm9tICcuL3NlcnZpY2Vwcm92aWRlcic7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50IGEgTWFoTUwgcGFyc2VyLiBDb252ZXJ0cyBNYXRoTUwgaW50byBmb3JtdWxhcyBkZXBlbmRpbmcgb24gdGhlXG4gKiBpbWFnZSBmb3JtYXQgKFNWRywgUE5HLCBiYXNlNjQpIGFuZCB0aGUgc2F2ZSBtb2RlIChYTUwsIHNhZmVYTUwsIEltYWdlKSBjb25maWd1cmVkXG4gKiBpbiB0aGUgYmFja2VuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTWF0aE1MIHN0cmluZyB0byBhbiBpbWcgZWxlbWVudC5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gY3JlYXRvciAtIERvY3VtZW50IG9iamVjdCB0byBjYWxsIGNyZWF0ZUVsZW1lbnQgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gTWF0aE1MIGNvZGVcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gd2lyaXNQcm9wZXJ0aWVzIC0gb2JqZWN0IGNvbnRhaW5pbmcgV0lSSVMgY3VzdG9tIHByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtsYW5ndWFnZX0gbGFuZ3VhZ2UgLSBjdXN0b20gbGFuZ3VhZ2UgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqIEByZXR1cm5zIHtIVE1MSW1hZ2VFbGVtZW50fSB0aGUgZm9ybXVsYSBpbWFnZSBjb3JyZXNwb25kaW5nIHRvIGluaXRpYWwgTWF0aE1MIHN0cmluZy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIG1hdGhtbFRvSW1nT2JqZWN0KGNyZWF0b3IsIG1hdGhtbCwgd2lyaXNQcm9wZXJ0aWVzLCBsYW5ndWFnZSkge1xuICAgIGNvbnN0IGltZ09iamVjdCA9IGNyZWF0b3IuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nT2JqZWN0LmFsaWduID0gJ21pZGRsZSc7XG4gICAgaW1nT2JqZWN0LnN0eWxlLm1heFdpZHRoID0gJ25vbmUnO1xuICAgIGxldCBkYXRhID0gd2lyaXNQcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdGhlIGJhY2tlbmQgY29uZmlnXG4gICAgY29uc3Qgd2lyaXNFZGl0b3JQcm9wZXJ0aWVzID0gQ29uZmlndXJhdGlvbi5nZXQoXCJlZGl0b3JQYXJhbWV0ZXJzXCIpO1xuICAgIGRhdGEgPSB7IC4uLndpcmlzRWRpdG9yUHJvcGVydGllcywgLi4uZGF0YSB9O1xuXG4gICAgZGF0YS5tbWwgPSBtYXRobWw7XG4gICAgZGF0YS5sYW5nID0gbGFuZ3VhZ2U7XG4gICAgLy8gUmVxdWVzdCBtZXRyaWNzIG9mIHRoZSBnZW5lcmF0ZWQgaW1hZ2UuXG4gICAgZGF0YS5tZXRyaWNzID0gJ3RydWUnO1xuICAgIGRhdGEuY2VudGVyYmFzZWxpbmUgPSAnZmFsc2UnO1xuXG4gICAgLy8gRnVsbCBiYXNlNjQgbWV0aG9kIChlZGl0ICYgc2F2ZSkuXG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBkYXRhLmJhc2U2NCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGpzIHBhcmFtczogX3dyc19pbnRfd2lyaXNQcm9wZXJ0aWVzIGNvbnRhaW5zIHNvbWUganMgcmVuZGVyIHBhcmFtcy5cbiAgICAvLyBTaW5jZSBNYXRoTUwgY2FuIHN1cHBvcnQgcmVuZGVyIHBhcmFtcywganMgcGFyYW1zIHNob3VsZCBiZSBzZW5kIG9ubHkgdG8gZWRpdG9yLlxuXG4gICAgaW1nT2JqZWN0LmNsYXNzTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpO1xuXG4gICAgaWYgKG1hdGhtbC5pbmRleE9mKCdjbGFzcz1cIicpICE9PSAtMSkge1xuICAgICAgLy8gV2UgY2hlY2sgaGVyZSBpZiB0aGUgTWF0aE1MIGhhcyBiZWVuIGNyZWF0ZWQgZnJvbSBhIGN1c3RvbUVkaXRvciAoc3VjaCBjaGVtaXN0cnkpXG4gICAgICAvLyB0byBhZGQgY3VzdG9tIGVkaXRvciBuYW1lIGF0dHJpYnV0ZSB0byBpbWcgb2JqZWN0IChpZiBuZWNlc3NhcnkpLlxuICAgICAgbGV0IG1hdGhtbFN1YnN0cmluZyA9IG1hdGhtbC5zdWJzdHJpbmcobWF0aG1sLmluZGV4T2YoJ2NsYXNzPVwiJykgKyAnY2xhc3M9XCInLmxlbmd0aCwgbWF0aG1sLmxlbmd0aCk7XG4gICAgICBtYXRobWxTdWJzdHJpbmcgPSBtYXRobWxTdWJzdHJpbmcuc3Vic3RyaW5nKDAsIG1hdGhtbFN1YnN0cmluZy5pbmRleE9mKCdcIicpKTtcbiAgICAgIG1hdGhtbFN1YnN0cmluZyA9IG1hdGhtbFN1YnN0cmluZy5zdWJzdHJpbmcoNCwgbWF0aG1sU3Vic3RyaW5nLmxlbmd0aCk7XG4gICAgICBpbWdPYmplY3Quc2V0QXR0cmlidXRlKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUN1c3RvbUVkaXRvck5hbWUnKSwgbWF0aG1sU3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtYW5jZSBlbmFibGVkLlxuICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnd2lyaXNQbHVnaW5QZXJmb3JtYW5jZScpICYmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcgfHwgQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdzYWZlWG1sJykpIHtcbiAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKFBhcnNlci5jcmVhdGVTaG93SW1hZ2VTcmMoZGF0YSwgbGFuZ3VhZ2UpKTtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnd2FybmluZycpIHtcbiAgICAgICAgLy8gUE9TVCBjYWxsLlxuICAgICAgICAvLyBpZiB0aGUgbWF0aG1sIGlzIG1hbGZvcm1lZCwgdGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzaG93aW1hZ2UnLCBkYXRhKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKHsgcmVzdWx0IH0gPSByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5mb3JtYXQgPT09ICdwbmcnKSB7XG4gICAgICAgIGltZ09iamVjdC5zcmMgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7cmVzdWx0LmNvbnRlbnR9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltZ09iamVjdC5zcmMgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwke1V0aWwudXJsRW5jb2RlKHJlc3VsdC5jb250ZW50KX1gO1xuICAgICAgfVxuICAgICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSwgTWF0aE1MLnNhZmVYbWxFbmNvZGUobWF0aG1sKSk7XG4gICAgICBJbWFnZS5zZXRJbWdTaXplKGltZ09iamVjdCwgcmVzdWx0LmNvbnRlbnQsIHRydWUpO1xuXG4gICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ2VuYWJsZUFjY2Vzc2liaWxpdHknKSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5hbHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaW1nT2JqZWN0LmFsdCA9IEFjY2Vzc2liaWxpdHkubWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhtbCwgbGFuZ3VhZ2UsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltZ09iamVjdC5hbHQgPSByZXN1bHQuYWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhcnNlci5jcmVhdGVJbWFnZVNyYyhtYXRobWwsIGRhdGEpO1xuICAgICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSwgTWF0aE1MLnNhZmVYbWxFbmNvZGUobWF0aG1sKSk7XG4gICAgICBpbWdPYmplY3Quc3JjID0gcmVzdWx0O1xuICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWdPYmplY3QsIHJlc3VsdCwgQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdiYXNlNjQnICYmIENvbmZpZ3VyYXRpb24uZ2V0KCdiYXNlNjRzYXZlbW9kZScpID09PSAnZGVmYXVsdCcpO1xuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdlbmFibGVBY2Nlc3NpYmlsaXR5JykpIHtcbiAgICAgICAgaW1nT2JqZWN0LmFsdCA9IEFjY2Vzc2liaWxpdHkubWF0aE1MVG9BY2Nlc3NpYmxlKG1hdGhtbCwgbGFuZ3VhZ2UsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgUGFyc2VyLm9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgUGFyc2VyLm9ic2VydmVyLm9ic2VydmUoaW1nT2JqZWN0KTtcbiAgICB9XG5cbiAgICAvLyBSb2xlIG1hdGggaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhL3JvbGVzI21hdGguXG4gICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdtYXRoJyk7XG4gICAgcmV0dXJuIGltZ09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzb3VyY2UgdG8gc2hvd2ltYWdlIHNlcnZpY2UgYnkgY2FsbGluZyBjcmVhdGVpbWFnZSBzZXJ2aWNlLiBUaGVcbiAgICogb3V0cHV0IG9mIHRoZSBjcmVhdGVpbWFnZSBzZXJ2aWNlIGlzIGEgVVJMIHBhdGggcG9pbnRpbmcgdG8gc2hvd2ltYWdlIHNlcnZpY2UuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHBlcmZvcm1hbmNlIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gTWF0aE1MIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGEgLSBkYXRhIG9iamVjdCBjb250YWluaW5nIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHNob3dpbWFnZSBwYXRoLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUltYWdlU3JjKG1hdGhtbCwgZGF0YSkge1xuICAgIC8vIEZ1bGwgYmFzZTY0IG1ldGhvZCAoZWRpdCAmIHNhdmUpLlxuICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ2Jhc2U2NCcgJiYgQ29uZmlndXJhdGlvbi5nZXQoJ2Jhc2U2NHNhdmVtb2RlJykgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZGF0YS5iYXNlNjQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnY3JlYXRlaW1hZ2UnLCBkYXRhKTtcblxuICAgIGlmIChyZXN1bHQuaW5kZXhPZignQEJBU0VAJykgIT09IC0xKSB7XG4gICAgICAvLyBSZXBsYWNpbmcgJ0BCQVNFQCcgd2l0aCB0aGUgYmFzZSBVUkwgb2YgY3JlYXRlaW1hZ2UuXG4gICAgICBjb25zdCBiYXNlUGFydHMgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZVBhdGgoJ2NyZWF0ZWltYWdlJykuc3BsaXQoJy8nKTtcbiAgICAgIGJhc2VQYXJ0cy5wb3AoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdCgnQEJBU0VAJykuam9pbihiYXNlUGFydHMuam9pbignLycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbml0aWFsIEhUTUwgY29kZS4gSWYgdGhlIEhUTUwgY29udGFpbnMgZGF0YSBnZW5lcmF0ZWQgYnkgV0lSSVMsXG4gICAqIHRoaXMgZGF0YSB3b3VsZCBiZSBjb252ZXJ0ZWQgYXMgZm9sbG93aW5nOlxuICAgKiA8cHJlPlxuICAgKiBNYXRoTUwgY29kZTogSW1hZ2UgY29udGFpbmluZyB0aGUgY29ycmVzcG9uZGluZyBNYXRoTUwgZm9ybXVsYXMuXG4gICAqIE1hdGhNTCBjb2RlIHdpdGggTGFUZVggYW5ub3RhdGlvbiA6IExhVGVYIHN0cmluZy5cbiAgICogPC9wcmU+XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIGNvbnRhaW5pbmcgTWF0aE1MIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSAtIGxhbmd1YWdlIHRvIGNyZWF0ZSBpbWFnZSBhbHQgdGV4dC5cbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHdpdGggdGhlIG9yaWdpbmFsIE1hdGhNTCBjb252ZXJ0ZWQgaW50byBMYVRlWCBhbmQgaW1hZ2VzLlxuICAgKi9cbiAgc3RhdGljIGluaXRQYXJzZShjb2RlLCBsYW5ndWFnZSkge1xuICAgIC8qIE5vdGU6IFRoZSBjb2RlIGluc2lkZSB0aGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGludmVydGVkLlxuICAgIElmIHlvdSBpbnZlcnQgYWdhaW4gdGhlIGNvZGUgdGhlbiB5b3UgY2Fubm90IHVzZSBjb3JyZWN0bHkgTGFUZVhcbiAgICBpbiBNb29kbGUuXG4gICAgKi9cbiAgICBjb2RlID0gUGFyc2VyLmluaXRQYXJzZVNhdmVNb2RlKGNvZGUsIGxhbmd1YWdlKTtcbiAgICByZXR1cm4gUGFyc2VyLmluaXRQYXJzZUVkaXRNb2RlKGNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbml0aWFsIEhUTUwgY29kZSBkZXBlbmRpbmcgb24gdGhlIHNhdmUgbW9kZS4gVHJhbnNmb3JtcyBhbGwgTWF0aE1MXG4gICAqIG9jY3VycmVuY2VzIGZvciBpdCdzIGNvcnJlc3BvbmRlbnQgaW1hZ2Ugb3IgTGFUZVguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIHRvIGJlIHBhcnNlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBsYW5ndWFnZSB0byBjcmVhdGUgaW1hZ2UgYWx0IHRleHQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgY29kZSBwYXJzZWQuXG4gICAqL1xuICBzdGF0aWMgaW5pdFBhcnNlU2F2ZU1vZGUoY29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykpIHtcbiAgICAgIC8vIENvbnZlcnRpbmcgWE1MIHRvIHRhZ3MuXG4gICAgICBjb2RlID0gTGF0ZXgucGFyc2VNYXRobWxUb0xhdGV4KGNvZGUsIENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgICBjb2RlID0gTGF0ZXgucGFyc2VNYXRobWxUb0xhdGV4KGNvZGUsIENvbnN0YW50cy54bWxDaGFyYWN0ZXJzKTtcbiAgICAgIGNvZGUgPSBQYXJzZXIucGFyc2VNYXRobWxUb0ltZyhjb2RlLCBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMsIGxhbmd1YWdlKTtcbiAgICAgIGNvZGUgPSBQYXJzZXIucGFyc2VNYXRobWxUb0ltZyhjb2RlLCBDb25zdGFudHMueG1sQ2hhcmFjdGVycywgbGFuZ3VhZ2UpO1xuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb2RlID0gUGFyc2VyLmNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgJ2Jhc2U2NDJzaG93aW1hZ2UnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGluaXRpYWwgSFRNTCBjb2RlIGRlcGVuZGluZyBvbiB0aGUgZWRpdCBtb2RlLlxuICAgKiBJZiAnbGF0ZXgnIHBhcnNlTW9kZSBpcyBlbmFibGVkIGFsbCBNYXRoTUwgY29udGFpbmluZyBhbiBhbm5vdGF0aW9uIHdpdGggZW5jb2Rpbmc9J0xhVGVYJyB3aWxsXG4gICAqIGJlIGNvbnZlcnRlZCBpbnRvIGEgTGFUZVggc3RyaW5nIGluc3RlYWQgb2YgYW4gaW1hZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIGNvbnRhaW5pbmcgTWF0aE1MLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwYXJzZWQgSFRNTCBjb2RlLlxuICAgKi9cbiAgc3RhdGljIGluaXRQYXJzZUVkaXRNb2RlKGNvZGUpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3BhcnNlTW9kZXMnKS5pbmRleE9mKCdsYXRleCcpICE9PSAtMSkge1xuICAgICAgY29uc3QgaW1nTGlzdCA9IFV0aWwuZ2V0RWxlbWVudHNCeU5hbWVGcm9tU3RyaW5nKGNvZGUsICdpbWcnLCB0cnVlKTtcbiAgICAgIGNvbnN0IHRva2VuID0gJ2VuY29kaW5nPVwiTGFUZVhcIj4nO1xuICAgICAgLy8gV2hpbGUgcmVwbGFjaW5nIGltYWdlcyB3aXRoIGxhdGV4LCB0aGUgaW5kZXhlcyBvZiB0aGUgZm91bmQgaW1hZ2VzIGNoYW5nZXNcbiAgICAgIC8vIHJlc3BlY3RpbmcgdGhlIG9yaWdpbmFsIGNvZGUsIHNvIHRoaXMgY2FycnkgaXMgbmVlZGVkLlxuICAgICAgbGV0IGNhcnJ5ID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGltZ0NvZGUgPSBjb2RlLnN1YnN0cmluZyhpbWdMaXN0W2ldLnN0YXJ0ICsgY2FycnksIGltZ0xpc3RbaV0uZW5kICsgY2FycnkpO1xuXG4gICAgICAgIGlmIChpbWdDb2RlLmluZGV4T2YoYCBjbGFzcz1cIiR7Q29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlQ2xhc3NOYW1lJyl9XCJgKSAhPT0gLTEpIHtcbiAgICAgICAgICBsZXQgbWF0aG1sU3RhcnRUb2tlbiA9IGAgJHtDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKX09XCJgO1xuICAgICAgICAgIGxldCBtYXRobWxTdGFydCA9IGltZ0NvZGUuaW5kZXhPZihtYXRobWxTdGFydFRva2VuKTtcblxuICAgICAgICAgIGlmIChtYXRobWxTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hdGhtbFN0YXJ0VG9rZW4gPSAnIGFsdD1cIic7XG4gICAgICAgICAgICBtYXRobWxTdGFydCA9IGltZ0NvZGUuaW5kZXhPZihtYXRobWxTdGFydFRva2VuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0aG1sU3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgICBtYXRobWxTdGFydCArPSBtYXRobWxTdGFydFRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IG1hdGhtbEVuZCA9IGltZ0NvZGUuaW5kZXhPZignXCInLCBtYXRobWxTdGFydCk7XG4gICAgICAgICAgICBjb25zdCBtYXRobWwgPSBVdGlsLmh0bWxTYW5pdGl6ZShNYXRoTUwuc2FmZVhtbERlY29kZShpbWdDb2RlLnN1YnN0cmluZyhtYXRobWxTdGFydCwgbWF0aG1sRW5kKSkpO1xuICAgICAgICAgICAgbGV0IGxhdGV4U3RhcnRQb3NpdGlvbiA9IG1hdGhtbC5pbmRleE9mKHRva2VuKTtcblxuICAgICAgICAgICAgaWYgKGxhdGV4U3RhcnRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgbGF0ZXhTdGFydFBvc2l0aW9uICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgY29uc3QgbGF0ZXhFbmRQb3NpdGlvbiA9IG1hdGhtbC5pbmRleE9mKCc8L2Fubm90YXRpb24+JywgbGF0ZXhTdGFydFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgY29uc3QgbGF0ZXggPSBtYXRobWwuc3Vic3RyaW5nKGxhdGV4U3RhcnRQb3NpdGlvbiwgbGF0ZXhFbmRQb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZVRleHQgPSBgJCQke1V0aWwuaHRtbEVudGl0aWVzRGVjb2RlKGxhdGV4KX0kJGA7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29kZS5zdWJzdHJpbmcoMCwgaW1nTGlzdFtpXS5zdGFydCArIGNhcnJ5KTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kID0gY29kZS5zdWJzdHJpbmcoaW1nTGlzdFtpXS5lbmQgKyBjYXJyeSk7XG4gICAgICAgICAgICAgIGNvZGUgPSBzdGFydCArIHJlcGxhY2VUZXh0ICsgZW5kO1xuICAgICAgICAgICAgICBjYXJyeSArPSByZXBsYWNlVGV4dC5sZW5ndGggLSAoaW1nTGlzdFtpXS5lbmQgLSBpbWdMaXN0W2ldLnN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgZW5kIEhUTUwgY29kZS4gVGhlIGVuZCBIVE1MIGNvZGUgaXMgSFRNTCBjb2RlIHdpdGggZW1iZWRkZWQgaW1hZ2VzXG4gICAqIG9yIExhVGVYIGZvcm11bGFzIGNyZWF0ZWQgd2l0aCBNYXRoVHlwZS4gPGJyPlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgbWV0aG9kIGNvbnZlcnRzIHRoZSBmb3JtdWxhIGltYWdlcyBhbmQgTGFUZVggc3RyaW5ncyBpbiBNYXRoTUwuIDxicj5cbiAgICogSWYgaW1hZ2UgbW9kZSBpcyBlbmFibGVkIHRoZSBpbWFnZXMgd2lsbCBub3QgYmUgY29udmVydGVkIGludG8gTWF0aE1MLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy53aXJpcy5jb20vbWF0aHR5cGUvZW4vbWF0aHR5cGUtaW50ZWdyYXRpb25zL21hdGh0eXBlLXdlYi1pbnRlcmZhY2UtZmVhdHVyZXMvZnVsbC1tYXRobWwtbW9kZS0tLXdpcmlzcGx1Z2lucy1qcy5odG1sfS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSBIVE1MIHRvIGJlIHBhcnNlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZShjb2RlKSB7XG4gICAgLy8gVHJhbnNmb3JtIExhVGVYIG9jdXJyZW5jZXMgdG8gTWF0aE1MIGVsZW1lbnRzLlxuICAgIGNvbnN0IGNvZGVFbmRQYXJzZWRFZGl0TW9kZSA9IFBhcnNlci5lbmRQYXJzZUVkaXRNb2RlKGNvZGUpO1xuICAgIC8vIFRyYW5zZm9ybSBpbWcgZWxlbWVudHMgdG8gTWF0aE1MIGVsZW1lbnRzLlxuICAgIGNvbnN0IGNvZGVFbmRQYXJzZVNhdmVNb2RlID0gUGFyc2VyLmVuZFBhcnNlU2F2ZU1vZGUoY29kZUVuZFBhcnNlZEVkaXRNb2RlKTtcbiAgICByZXR1cm4gY29kZUVuZFBhcnNlU2F2ZU1vZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGVuZCBIVE1MIGNvZGUgZGVwZW5kaW5nIG9uIHRoZSBlZGl0IG1vZGUuXG4gICAqIC0gTGFUZVggaXMgYW4gZW5hYmxlZCBwYXJzZSBtb2RlLCBhbGwgTGFUZVggb2NjdXJyZW5jZXMgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBNYXRoTUwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlIHRvIGJlIHBhcnNlZC5cbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZUVkaXRNb2RlKGNvZGUpIHtcbiAgICAvLyBDb252ZXJ0aW5nIExhVGVYIHRvIGltYWdlcy5cbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3BhcnNlTW9kZXMnKS5pbmRleE9mKCdsYXRleCcpICE9PSAtMSkge1xuICAgICAgbGV0IG91dHB1dCA9ICcnO1xuICAgICAgbGV0IGVuZFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gY29kZS5pbmRleE9mKCckJCcpO1xuICAgICAgd2hpbGUgKHN0YXJ0UG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbik7XG4gICAgICAgIGVuZFBvc2l0aW9uID0gY29kZS5pbmRleE9mKCckJCcsIHN0YXJ0UG9zaXRpb24gKyAyKTtcblxuICAgICAgICBpZiAoZW5kUG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgLy8gQmVmb3JlLCBpdCB3YXMgYSBjb25kaXRpb24gaGVyZSB0byBleGVjdXRlIHRoZSBuZXh0IGNvZGVsaW5lc1xuICAgICAgICAgIC8vICdsYXRleC5pbmRleE9mKCc8JykgPT0gLTEnLlxuICAgICAgICAgIC8vIFdlIGRvbid0IGtub3cgd2h5IGl0IHdhcyB1c2VkLCBidXQgc2VlbXMgdG8gaGF2ZSBhIGNvbmZsaWN0IHdpdGhcbiAgICAgICAgICAvLyBsYXRleCBmb3JtdWxhcyB0aGF0IGNvbnRhaW5zICc8Jy5cbiAgICAgICAgICBjb25zdCBsYXRleCA9IGNvZGUuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24gKyAyLCBlbmRQb3NpdGlvbik7XG4gICAgICAgICAgY29uc3QgZGVjb2RlZExhdGV4ID0gVXRpbC5odG1sRW50aXRpZXNEZWNvZGUobGF0ZXgpO1xuICAgICAgICAgIGxldCBtYXRobWwgPSBVdGlsLmh0bWxTYW5pdGl6ZShMYXRleC5nZXRNYXRoTUxGcm9tTGF0ZXgoZGVjb2RlZExhdGV4LCB0cnVlKSk7XG4gICAgICAgICAgaWYgKCFDb25maWd1cmF0aW9uLmdldCgnc2F2ZUhhbmRUcmFjZXMnKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGhhbmQgdHJhY2VzLlxuICAgICAgICAgICAgbWF0aG1sID0gTWF0aE1MLnJlbW92ZUFubm90YXRpb24obWF0aG1sLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXRwdXQgKz0gbWF0aG1sO1xuICAgICAgICAgIGVuZFBvc2l0aW9uICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0ICs9ICckJCc7XG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBjb2RlLmluZGV4T2YoJyQkJywgZW5kUG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgKz0gY29kZS5zdWJzdHJpbmcoZW5kUG9zaXRpb24sIGNvZGUubGVuZ3RoKTtcbiAgICAgIGNvZGUgPSBvdXRwdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGVuZCBIVE1MIGNvZGUgZGVwZW5kaW5nIG9uIHRoZSBzYXZlIG1vZGUuIENvbnZlcnRzIGFsbFxuICAgKiBpbWFnZXMgaW50byB0aGUgZWxlbWVudCBkZXRlcm1pbmVkIGJ5IHRoZSBzYXZlIG1vZGU6XG4gICAqIC0geG1sOiBQYXJzZXMgaW1hZ2VzIGZvcm11bGFzIGludG8gTWF0aE1MLlxuICAgKiAtIHNhZmVYbWw6IFBhcnNlcyBpbWFnZXMgZm9ybXVsYXMgaW50byBzYWZlTUF0aE1MXG4gICAqIC0gYmFzZTY0OiBQYXJzZXMgaW1hZ2VzIGludG8gYmFzZTY0IGltYWdlcy5cbiAgICogLSBpbWFnZTogUGFyc2UgaW1hZ2VzIGludG8gaW1hZ2VzIChubyBwYXJzaW5nKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSB0byBiZSBwYXJzZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gSFRNTCBjb2RlIHBhcnNlZC5cbiAgICovXG4gIHN0YXRpYyBlbmRQYXJzZVNhdmVNb2RlKGNvZGUpIHtcbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykpIHtcbiAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3NhZmVYbWwnKSB7XG4gICAgICAgIGNvZGUgPSBQYXJzZXIuY29kZUltZ1RyYW5zZm9ybShjb2RlLCAnaW1nMm1hdGhtbCcpO1xuICAgICAgfSBlbHNlIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcpIHtcbiAgICAgICAgY29kZSA9IFBhcnNlci5jb2RlSW1nVHJhbnNmb3JtKGNvZGUsICdpbWcybWF0aG1sJyk7XG4gICAgICB9IGVsc2UgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb2RlID0gUGFyc2VyLmNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgJ2ltZzI2NCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cblxuICAvKipcbiAgICogQXV4aWxpYXIgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIGRhdGEgb2JqZWN0IHRvIHNlbmQgdG8gdGhlIHNob3dpbWFnZSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhIC0gb2JqZWN0IGNvbnRhaW5pbmcgc2hvd2ltYWdlIHNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIC0gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxhbmd1YWdlIG9mIHRoZSBmb3JtdWxhLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBKU09OIG9iamVjdCB3aXRoIHRoZSBkYXRhIHRvIHNlbmQgdG8gc2hvd2ltYWdlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVNob3dJbWFnZVNyY0RhdGEoZGF0YSwgbGFuZ3VhZ2UpIHtcbiAgICBjb25zdCBkYXRhTWQ1ID0ge307XG4gICAgY29uc3QgcmVuZGVyUGFyYW1zID0gWydtbWwnLCAnY29sb3InLCAnY2VudGVyYmFzZWxpbmUnLCAnem9vbScsICdkcGknLCAnZm9udFNpemUnLCAnZm9udEZhbWlseScsICdkZWZhdWx0U3RyZXRjaHknLCAnYmFja2dyb3VuZENvbG9yJywgJ2Zvcm1hdCddO1xuICAgIHJlbmRlclBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGF0YU1kNVtwYXJhbV0gPSBkYXRhW3BhcmFtXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBEYXRhIHZhcmlhYmxlcyB0byBnZXQuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCBtYXRobWwgaW4gdGhpcyByZXF1ZXN0IHdlIHRyeSB0byBnZXQgY2FjaGVkLlxuICAgICAgLy8gT25seSBuZWVkIHRoZSBmb3JtdWxhIG1kNSBjYWxjdWxhdGVkIGJlZm9yZS5cbiAgICAgIGlmIChrZXkgIT09ICdtbWwnKSB7XG4gICAgICAgIGRhdGFPYmplY3Rba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRhdGFPYmplY3QuZm9ybXVsYSA9IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1kNWVuY29kZShVdGlsLnByb3BlcnRpZXNUb1N0cmluZyhkYXRhTWQ1KSk7XG4gICAgZGF0YU9iamVjdC5sYW5nID0gKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3VuZGVmaW5lZCcpID8gJ2VuJyA6IGxhbmd1YWdlO1xuICAgIGRhdGFPYmplY3QudmVyc2lvbiA9IENvbmZpZ3VyYXRpb24uZ2V0KCd2ZXJzaW9uJyk7XG5cbiAgICByZXR1cm4gZGF0YU9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgdG8gY2FsbCBzaG93aW1hZ2Ugc2VydmljZSB3aXRoIHRoZSBmb3JtdWxhIG1kNSBhcyBwYXJhbWV0ZXIuXG4gICAqICBUaGUgcmVzdWx0IGNvdWxkIGJlOlxuICAgKiAtIHsnc3RhdHVzJyA6IHdhcm5pbmcnfSA6IFRoZSBpbWFnZSBhc3NvY2lhdGVkIHRvIHRoZSBNYXRoTUwgbWQ1IGlzIG5vdCBpbiBjYWNoZS5cbiAgICogLSB7J3N0YXR1cycgOiAnb2snIC4uLn0gOiBUaGUgaW1hZ2UgYXNzb2NpYXRlZCB0byB0aGUgTWF0aE1MIG1kNSBpcyBpbiBjYWNoZS5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YSAtIG9iamVjdCBjb250YWluaW5nIHNob3dpbWFnZSBzZXJ2aWNlIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSAtIHN0cmluZyBjb250YWluaW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgZm9ybXVsYS5cbiAgICogQHJldHVybnMge09iamVjdH0gSlNPTiBvYmplY3QgY29udGFpbmluZyBzaG93aW1hZ2UgcmVzcG9uc2UuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlU2hvd0ltYWdlU3JjKGRhdGEsIGxhbmd1YWdlKSB7XG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHRoaXMuY3JlYXRlU2hvd0ltYWdlU3JjRGF0YShkYXRhLCBsYW5ndWFnZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ3Nob3dpbWFnZScsIFV0aWwuaHR0cEJ1aWxkUXVlcnkoZGF0YU9iamVjdCksIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGh0bWwgaW1nIHRhZ3MgaW5zaWRlIGEgaHRtbCBjb2RlIHRvIG1hdGhtbCwgYmFzZTY0IGltZyB0YWdzIChpLmUgd2l0aCBiYXNlNjQgb24gc3JjKVxuICAgKiBvciBzaG93aW1hZ2UgaW1nIHRhZ3MgKGkuZSB3aXRoIHNob3dpbWFnZS5waHAgb24gc3JjKVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGUgLSBIVE1MIGNvZGVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBtb2RlIC0gYmFzZTY0MnNob3dpbWFnZSBvciBpbWcybWF0aG1sIG9yIGltZzI2NCB0cmFuc2Zvcm0uXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGh0bWwgLSBjb2RlIHRyYW5zZm9ybWVkLlxuICAgKi9cbiAgc3RhdGljIGNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgbW9kZSkge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBsZXQgZW5kUG9zaXRpb24gPSAwO1xuICAgIGNvbnN0IHBhdHRlcm4gPSAvPGltZy9naTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5zb3VyY2UubGVuZ3RoO1xuXG4gICAgd2hpbGUgKHBhdHRlcm4udGVzdChjb2RlKSkge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHBhdHRlcm4ubGFzdEluZGV4IC0gcGF0dGVybkxlbmd0aDtcbiAgICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbik7XG5cbiAgICAgIGxldCBpID0gc3RhcnRQb3NpdGlvbiArIDE7XG5cbiAgICAgIHdoaWxlIChpIDwgY29kZS5sZW5ndGggJiYgZW5kUG9zaXRpb24gPD0gc3RhcnRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBjb2RlLmNoYXJBdChpKTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnXCInIHx8IGNoYXJhY3RlciA9PT0gJ1xcJycpIHtcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJOZXh0UG9zaXRpb24gPSBjb2RlLmluZGV4T2YoY2hhcmFjdGVyLCBpICsgMSk7XG5cbiAgICAgICAgICBpZiAoY2hhcmFjdGVyTmV4dFBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgaSA9IGNvZGUubGVuZ3RoOyAvLyBFbmQgd2hpbGUuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBjaGFyYWN0ZXJOZXh0UG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gJz4nKSB7XG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBvc2l0aW9uIDwgc3RhcnRQb3NpdGlvbikgeyAvLyBUaGUgaW1nIHRhZyBpcyBzdHJpcHBlZC5cbiAgICAgICAgb3V0cHV0ICs9IGNvZGUuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGNvZGUubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH1cbiAgICAgIGxldCBpbWdDb2RlID0gY29kZS5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuICAgICAgY29uc3QgaW1nT2JqZWN0ID0gVXRpbC5jcmVhdGVPYmplY3QoaW1nQ29kZSk7XG4gICAgICBsZXQgeG1sQ29kZSA9IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpO1xuICAgICAgbGV0IGNvbnZlcnRUb1htbDtcbiAgICAgIGxldCBjb252ZXJ0VG9TYWZlWG1sO1xuXG4gICAgICBpZiAobW9kZSA9PT0gJ2Jhc2U2NDJzaG93aW1hZ2UnKSB7XG4gICAgICAgIGlmICh4bWxDb2RlID09IG51bGwpIHtcbiAgICAgICAgICB4bWxDb2RlID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgeG1sQ29kZSA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKHhtbENvZGUpO1xuICAgICAgICBpbWdDb2RlID0gUGFyc2VyLm1hdGhtbFRvSW1nT2JqZWN0KGRvY3VtZW50LCB4bWxDb2RlLCBudWxsLCBudWxsKTtcbiAgICAgICAgb3V0cHV0ICs9IFV0aWwuY3JlYXRlT2JqZWN0Q29kZShpbWdDb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2ltZzJtYXRobWwnKSB7XG4gICAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSkge1xuICAgICAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3NhZmVYbWwnKSB7XG4gICAgICAgICAgICBjb252ZXJ0VG9YbWwgPSB0cnVlO1xuICAgICAgICAgICAgY29udmVydFRvU2FmZVhtbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ3htbCcpIHtcbiAgICAgICAgICAgIGNvbnZlcnRUb1htbCA9IHRydWU7XG4gICAgICAgICAgICBjb252ZXJ0VG9TYWZlWG1sID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBVdGlsLmdldFdJUklTSW1hZ2VPdXRwdXQoaW1nQ29kZSwgY29udmVydFRvWG1sLCBjb252ZXJ0VG9TYWZlWG1sKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2ltZzI2NCcpIHtcbiAgICAgICAgaWYgKHhtbENvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB4bWxDb2RlID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgeG1sQ29kZSA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKHhtbENvZGUpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgcHJvcGVydGllcy5iYXNlNjQgPSAndHJ1ZSc7XG4gICAgICAgIGltZ0NvZGUgPSBQYXJzZXIubWF0aG1sVG9JbWdPYmplY3QoZG9jdW1lbnQsIHhtbENvZGUsIHByb3BlcnRpZXMsIG51bGwpO1xuICAgICAgICAvLyBNZXRyaWNzLlxuICAgICAgICBJbWFnZS5zZXRJbWdTaXplKGltZ0NvZGUsIGltZ0NvZGUuc3JjLCB0cnVlKTtcbiAgICAgICAgb3V0cHV0ICs9IFV0aWwuY3JlYXRlT2JqZWN0Q29kZShpbWdDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0ICs9IGNvZGUuc3Vic3RyaW5nKGVuZFBvc2l0aW9uLCBjb2RlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgb2NjdXJyZW5jZXMgb2YgTWF0aE1MIHRvIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIHN0cmluZyB3aXRoIHZhbGlkIE1hdGhNTCBjb2RlLlxuICAgKiBUaGUgTWF0aE1MIGNvZGUgZG9lc24ndCBjb250YWluIHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtDb25zdGFudHN9IGNoYXJhY3RlcnMgLSBDb25zdGFudCBvYmplY3QgY29udGFpbmluZyB4bWxDaGFyYWN0ZXJzXG4gICAqIG9yIHNhZmVYbWxDaGFyYWN0ZXJzIHJlbGF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBhIHZhbGlkIGxhbmd1YWdlIGNvZGVcbiAgICogaW4gb3JkZXIgdG8gZ2VuZXJhdGUgZm9ybXVsYSBhY2Nlc3NpYmlsaXR5LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaW5wdXQgc3RyaW5nIHdpdGggYWxsIHRoZSBNYXRoTUxcbiAgICogb2NjdXJyZW5jZXMgcmVwbGFjZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2UuXG4gICAqL1xuICBzdGF0aWMgcGFyc2VNYXRobWxUb0ltZyhjb250ZW50LCBjaGFyYWN0ZXJzLCBsYW5ndWFnZSkge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBjb25zdCBtYXRoVGFnQmVnaW4gPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1tYXRoYDtcbiAgICBjb25zdCBtYXRoVGFnRW5kID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L21hdGgke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgbGV0IHN0YXJ0ID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdCZWdpbik7XG4gICAgbGV0IGVuZCA9IDA7XG5cbiAgICB3aGlsZSAoc3RhcnQgIT09IC0xKSB7XG4gICAgICBvdXRwdXQgKz0gY29udGVudC5zdWJzdHJpbmcoZW5kLCBzdGFydCk7XG4gICAgICAvLyBBdm9pZCBXSVJJUyBpbWFnZXMgdG8gYmUgcGFyc2VkLlxuICAgICAgY29uc3QgaW1hZ2VNYXRobWxBdHJyaWJ1dGUgPSBjb250ZW50LmluZGV4T2YoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpO1xuICAgICAgZW5kID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdFbmQsIHN0YXJ0KTtcblxuICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChpbWFnZU1hdGhtbEF0cnJpYnV0ZSAhPT0gLTEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2xvc2UgdGFnIG9mIGltZyBhdHRyaWJ1dGVcbiAgICAgICAgLy8gSWYgYSBtYXRobWxBdHRyaWJ1dGUgZXhpc3RzIHNob3VsZCBiZSBpbnNpZGUgYSBpbWcgdGFnLlxuICAgICAgICBlbmQgKz0gY29udGVudC5pbmRleE9mKCcvPicsIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCArPSBtYXRoVGFnRW5kLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFNYXRoTUwuaXNNYXRobWxJbkF0dHJpYnV0ZShjb250ZW50LCBzdGFydCkgJiYgaW1hZ2VNYXRobWxBdHJyaWJ1dGUgPT09IC0xKSB7XG4gICAgICAgIGxldCBtYXRobWwgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgbWF0aG1sID0gKGNoYXJhY3RlcnMuaWQgPT09IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy5pZClcbiAgICAgICAgICA/IE1hdGhNTC5zYWZlWG1sRGVjb2RlKG1hdGhtbClcbiAgICAgICAgICA6IE1hdGhNTC5tYXRoTUxFbnRpdGllcyhtYXRobWwpO1xuICAgICAgICBvdXRwdXQgKz0gVXRpbC5jcmVhdGVPYmplY3RDb2RlKFBhcnNlci5tYXRobWxUb0ltZ09iamVjdChkb2N1bWVudCwgbWF0aG1sLCBudWxsLCBsYW5ndWFnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgY29udGVudC5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cblxuLy8gTXV0YXRpb24gb2JzZXJ2ZXJzIHRvIGF2b2lkIHdpcmlzIGltYWdlIGZvcm11bGFzIGNsYXNzIGJlIHJlbW92ZWQuXG5pZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICBpZiAobXV0YXRpb24ub2xkVmFsdWUgPT09IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpXG4gICAgICAgICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcydcbiAgICAgICAgJiYgbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpKSA9PT0gLTEpIHtcbiAgICAgICAgbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZSA9IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBQYXJzZXIub2JzZXJ2ZXIgPSBPYmplY3QuY3JlYXRlKG11dGF0aW9uT2JzZXJ2ZXIpO1xuICBQYXJzZXIub2JzZXJ2ZXIuQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9O1xuICAvLyBXZSB1c2Ugb3duIGRlZmF1bHQgY29uZmlnLlxuICBQYXJzZXIub2JzZXJ2ZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykub2JzZXJ2ZSh0YXJnZXQsIHRoaXMuQ29uZmlnKTtcbiAgfTtcbn1cbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgTGlzdGVuZXJzIGZyb20gJy4vbGlzdGVuZXJzJztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2VydmljZVByb3ZpZGVyUHJvcGVydGllc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFVSSSAtIFNlcnZpY2UgVVJJLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHNlcnZlciAtIFNlcnZpY2Ugc2VydmVyIGxhbmd1YWdlLlxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc2VydmljZVByb3ZpZGVyLiBBIHNlcnZpY2VQcm92aWRlciBpcyBhIGNsYXNzIGNvbnRhaW5pbmdcbiAqIGFuIGFyYml0cmFyeSBudW1iZXIgb2Ygc2VydmljZXMgd2l0aCB0aGUgY29ycmVzcG9uZGVudCBwYXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlUHJvdmlkZXIge1xuICAvKipcbiAgICogUmV0dXJucyBTZXJ2aWNlIFByb3ZpZGVyIGxpc3RlbmVycy5cbiAgICogQHR5cGUge0xpc3RlbmVyc31cbiAgICovXG4gIHN0YXRpYyBnZXQgbGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX2xpc3RlbmVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEge0BsaW5rIExpc3RlbmVyfSBpbnN0YW5jZSB0byB7QGxpbmsgU2VydmljZVByb3ZpZGVyfSBjbGFzcy5cbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgLSBJbnN0YW5jZSBvZiB7QGxpbmsgTGlzdGVuZXJ9LlxuICAgKi9cbiAgc3RhdGljIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZW50cyBpbiBTZXJ2aWNlIFByb3ZpZGVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBFdmVudCBvYmplY3QuXG4gICAqL1xuICBzdGF0aWMgZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIubGlzdGVuZXJzLmZpcmUoZXZlbnROYW1lLCBldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2VydmljZSBwYXJhbWV0ZXJzLlxuICAgKiBAdHlwZSB7U2VydmljZVByb3ZpZGVyUHJvcGVydGllc31cbiAgICpcbiAgICovXG4gIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1NlcnZpY2VQcm92aWRlclByb3BlcnRpZXN9XG4gICAqL1xuICBzdGF0aWMgc2V0IHBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIFNlcnZpY2VQcm92aWRlci5fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5LlxuICAgKiBSZXR1cm4gc2VydmljZSBwcm92aWRlciBwYXRocy5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgc2VydmljZVBhdGhzKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX3NlcnZpY2VQYXRocztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgc2VydmljZSBwYXRocy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IHNlcnZpY2VQYXRocyh2YWx1ZSkge1xuICAgIFNlcnZpY2VQcm92aWRlci5fc2VydmljZVBhdGhzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBzZXJ2aWNlIHRvIHRoZSBTZXJ2aWNlUHJvdmlkZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZXJ2aWNlIC0gU2VydmljZSBuYW1lLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCAtIFNlcnZpY2UgcGF0aC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHNldFNlcnZpY2VQYXRoKHNlcnZpY2UsIHBhdGgpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2VydmljZVBhdGhzW3NlcnZpY2VdID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIHBhdGggZm9yIGEgY2VydGFpbiBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZU5hbWUgLSBTZXJ2aWNlIG5hbWUuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzZXJ2aWNlIHBhdGguXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlUGF0aChzZXJ2aWNlTmFtZSkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuc2VydmljZVBhdGhzW3NlcnZpY2VOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICAqIFNlcnZpY2UgcHJvdmlkZXIgaW50ZWdyYXRpb24gcGF0aC5cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgaW50ZWdyYXRpb25QYXRoKCkge1xuICAgIHJldHVybiBTZXJ2aWNlUHJvdmlkZXIuX2ludGVncmF0aW9uUGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgc2VydmljZSBwcm92aWRlciBpbnRlZ3JhdGlvbiBwYXRoLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0YXRpYyBzZXQgaW50ZWdyYXRpb25QYXRoKHZhbHVlKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLl9pbnRlZ3JhdGlvblBhdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2ZXIgVVJMIGluIHRoZSBmb3JtIHByb3RvY29sOi8vc2VydmVyTmFtZTpzZXJ2ZXJQb3J0LlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjbGllbnQgc2lkZSBzZXJ2ZXIgcGF0aC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2ZXJVUkwoKSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgYXJyID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYCR7YXJyWzBdfS8vJHthcnJbMl19YDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHtAbGluayB0aGlzfSBjbGFzcy4gVXNlcyB7QGxpbmsgdGhpcy5pbnRlZ3JhdGlvblBhdGh9IGFzXG4gICAqIGJhc2UgcGF0aCB0byBnZW5lcmF0ZSBhbGwgYmFja2VuZCBzZXJ2aWNlcyBwYXRocy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgLSBGdW5jdGlvbiBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1ldGVycy5pbnRlZ3JhdGlvblBhdGggLSBTZXJ2aWNlIHBhdGguXG4gICAqL1xuICBzdGF0aWMgaW5pdChwYXJhbWV0ZXJzKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIC8vIFNlcnZpY2VzIHBhdGggKHRlY2ggZGVwZW5kYW50KS5cbiAgICBsZXQgY29uZmlndXJhdGlvblVSSSA9IFNlcnZpY2VQcm92aWRlci5jcmVhdGVTZXJ2aWNlVVJJKCdjb25maWd1cmF0aW9uanMnKTtcbiAgICBsZXQgY3JlYXRlSW1hZ2VVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnY3JlYXRlaW1hZ2UnKTtcbiAgICBsZXQgc2hvd0ltYWdlVVJJID0gU2VydmljZVByb3ZpZGVyLmNyZWF0ZVNlcnZpY2VVUkkoJ3Nob3dpbWFnZScpO1xuICAgIGxldCBnZXRNYXRoTUxVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnZ2V0bWF0aG1sJyk7XG4gICAgbGV0IHNlcnZpY2VVUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnc2VydmljZScpO1xuXG4gICAgLy8gU29tZSBiYWNrZW5kIGludGVncmF0aW9ucyAobGlrZSBKYXZhIG8gUnVieSkgaGF2ZSBhbiBhYnNvbHV0ZSBiYWNrZW5kIHBhdGgsXG4gICAgLy8gZm9yIGV4YW1wbGU6IC9hcHAvc2VydmljZS4gRm9yIHRoZW0gd2UgY2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSBVUkwgcGF0aCwgaS5lXG4gICAgLy8gcHJvdG9jb2w6Ly9kb21haW46cG9ydC9hcHAvc2VydmljZVxuICAgIGlmIChTZXJ2aWNlUHJvdmlkZXIucGFyYW1ldGVycy5VUkkuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICBjb25zdCBzZXJ2ZXJQYXRoID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZlclVSTCgpO1xuICAgICAgY29uZmlndXJhdGlvblVSSSA9IHNlcnZlclBhdGggKyBjb25maWd1cmF0aW9uVVJJO1xuICAgICAgc2hvd0ltYWdlVVJJID0gc2VydmVyUGF0aCArIHNob3dJbWFnZVVSSTtcbiAgICAgIGNyZWF0ZUltYWdlVVJJID0gc2VydmVyUGF0aCArIGNyZWF0ZUltYWdlVVJJO1xuICAgICAgZ2V0TWF0aE1MVVJJID0gc2VydmVyUGF0aCArIGdldE1hdGhNTFVSSTtcbiAgICAgIHNlcnZpY2VVUkkgPSBzZXJ2ZXJQYXRoICsgc2VydmljZVVSSTtcbiAgICB9XG5cbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NvbmZpZ3VyYXRpb25qcycsIGNvbmZpZ3VyYXRpb25VUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnc2hvd2ltYWdlJywgc2hvd0ltYWdlVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NyZWF0ZWltYWdlJywgY3JlYXRlSW1hZ2VVUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnc2VydmljZScsIHNlcnZpY2VVUkkpO1xuICAgIFNlcnZpY2VQcm92aWRlci5zZXRTZXJ2aWNlUGF0aCgnZ2V0bWF0aG1sJywgZ2V0TWF0aE1MVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2NvbmZpZ3VyYXRpb25qcycsIGNvbmZpZ3VyYXRpb25VUkkpO1xuXG4gICAgU2VydmljZVByb3ZpZGVyLmxpc3RlbmVycy5maXJlKCdvbkluaXQnLCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29udGVudCBmcm9tIGFuIFVSTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIFRhcmdldCBVUkwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcG9zdFZhcmlhYmxlc10gLSBPYmplY3QgY29udGFpbmluZyBwb3N0IHZhcmlhYmxlcy5cbiAgICogbnVsbCBpZiBhIEdFVCBxdWVyeSBzaG91bGQgYmUgZG9uZS5cbiAgICogQHJldHVybnMge1N0cmluZ30gQ29udGVudCBvZiB0aGUgdGFyZ2V0IFVSTC5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldFVybCh1cmwsIHBvc3RWYXJpYWJsZXMpIHtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnN1YnN0cigwLCB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgY29uc3QgaHR0cFJlcXVlc3QgPSBVdGlsLmNyZWF0ZUh0dHBSZXF1ZXN0KCk7XG5cbiAgICBpZiAoaHR0cFJlcXVlc3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcG9zdFZhcmlhYmxlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHBvc3RWYXJpYWJsZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh1cmwuc3Vic3RyKDAsIDEpID09PSAnLycgfHwgdXJsLnN1YnN0cigwLCA3KSA9PT0gJ2h0dHA6Ly8nIHx8IHVybC5zdWJzdHIoMCwgOCkgPT09ICdodHRwczovLycpIHtcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsIHVybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsIGN1cnJlbnRQYXRoICsgdXJsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXIgPSBDb25maWd1cmF0aW9uLmdldCgnY3VzdG9tSGVhZGVycycpO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIgPSBoZWFkZXIudG9TdHJpbmcoKVxuICAgICAgICBoZWFkZXIuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQudHJpbSgpLnNwbGl0KCc9JykpXG4gICAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbF0pID0+IGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwb3N0VmFyaWFibGVzICE9PSAndW5kZWZpbmVkJyAmJiBwb3N0VmFyaWFibGVzKSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgaHR0cFJlcXVlc3Quc2VuZChVdGlsLmh0dHBCdWlsZFF1ZXJ5KHBvc3RWYXJpYWJsZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgICB9XG4gICBcbiAgICAgIHJldHVybiBodHRwUmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNwb25zZSB0ZXh0IG9mIGEgY2VydGFpbiBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFNlcnZpY2UgbmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RWYXJpYWJsZXMgLSBQb3N0IHZhcmlhYmxlcy5cbiAgICogQHBhcmFtIHtCb29sZWFufSBnZXQgLSBUcnVlIGlmIHRoZSByZXF1ZXN0IGlzIEdFVCBpbnN0ZWFkIG9mIFBPU1QuIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHJldHVybnMge1N0cmluZ30gU2VydmljZSByZXNwb25zZSB0ZXh0LlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2Uoc2VydmljZSwgcG9zdFZhcmlhYmxlcywgZ2V0KSB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGlmIChnZXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdldFZhcmlhYmxlcyA9IHBvc3RWYXJpYWJsZXMgPyBgPyR7cG9zdFZhcmlhYmxlc31gIDogJyc7XG4gICAgICBjb25zdCBzZXJ2aWNlVXJsID0gYCR7U2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2VQYXRoKHNlcnZpY2UpfSR7Z2V0VmFyaWFibGVzfWA7XG4gICAgICByZXNwb25zZSA9IFNlcnZpY2VQcm92aWRlci5nZXRVcmwoc2VydmljZVVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VVcmwgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZVBhdGgoc2VydmljZSk7XG4gICAgICByZXNwb25zZSA9IFNlcnZpY2VQcm92aWRlci5nZXRVcmwoc2VydmljZVVybCwgcG9zdFZhcmlhYmxlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2ZXIgbGFuZ3VhZ2Ugb2YgYSBjZXJ0YWluIHNlcnZpY2UuIFRoZSBwb3NzaWJsZSB2YWx1ZXNcbiAgICogYXJlOiBwaHAsIGFzcHgsIGphdmEgYW5kIHJ1YnkuXG4gICAqIFRoaXMgbWV0aG9kIGhhcyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFRoZSBjb25maWd1cmF0aW9uIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gVGhlIHNlcnZlciB0ZWNobm9sb2d5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY29uZmlndXJhdGlvbiBzZXJ2aWNlLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZlckxhbmd1YWdlRnJvbVNlcnZpY2Uoc2VydmljZSkge1xuICAgIGlmIChzZXJ2aWNlLmluZGV4T2YoJy5waHAnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAncGhwJztcbiAgICB9XG4gICAgaWYgKHNlcnZpY2UuaW5kZXhPZignLmFzcHgnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnYXNweCc7XG4gICAgfVxuICAgIGlmIChzZXJ2aWNlLmluZGV4T2YoJ3dpcmlzcGx1Z2luZW5naW5lJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3J1YnknO1xuICAgIH1cbiAgICByZXR1cm4gJ2phdmEnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVSSSBhc3NvY2lhdGVkIHdpdGggYSBjZXJ0YWluIHNlcnZpY2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZXJ2aWNlIC0gVGhlIHNlcnZpY2UgbmFtZS5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgc2VydmljZSBwYXRoLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVNlcnZpY2VVUkkoc2VydmljZSkge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IFNlcnZpY2VQcm92aWRlci5zZXJ2ZXJFeHRlbnNpb24oKTtcbiAgICByZXR1cm4gVXRpbC5jb25jYXRlbmF0ZVVybChTZXJ2aWNlUHJvdmlkZXIucGFyYW1ldGVycy5VUkksIHNlcnZpY2UpICsgZXh0ZW5zaW9uO1xuICB9XG5cbiAgc3RhdGljIHNlcnZlckV4dGVuc2lvbigpIHtcbiAgICBpZiAoU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMuc2VydmVyLmluZGV4T2YoJ3BocCcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcucGhwJztcbiAgICB9XG4gICAgaWYgKFNlcnZpY2VQcm92aWRlci5wYXJhbWV0ZXJzLnNlcnZlci5pbmRleE9mKCdhc3B4JykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJy5hc3B4JztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qKlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHNlcnZpY2UgLSBUaGUgc2VydmljZSBuYW1lLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHBhdGggLSBUaGUgc2VydmljZSBwYXRoLlxuICogQHN0YXRpY1xuICovXG5TZXJ2aWNlUHJvdmlkZXIuX3NlcnZpY2VQYXRocyA9IHt9O1xuXG4vKipcbiAqIFRoZSBpbnRlZ3JhdGlvbiBwYXRoLiBDb250YWlucyB0aGUgcGF0aCBvZiB0aGUgY29uZmlndXJhdGlvbiBzZXJ2aWNlLlxuICogVXNlZCB0byBkZWZpbmUgdGhlIHBhdGggZm9yIGFsbCBzZXJ2aWNlcy5cbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5TZXJ2aWNlUHJvdmlkZXIuX2ludGVncmF0aW9uUGF0aCA9ICcnO1xuXG4vKipcbiAqIFNlcnZpY2VQcm92aWRlciBzdGF0aWMgbGlzdGVuZXJzLlxuICogQHR5cGUge0xpc3RlbmVyc31cbiAqIEBwcml2YXRlXG4gKi9cblNlcnZpY2VQcm92aWRlci5fbGlzdGVuZXJzID0gbmV3IExpc3RlbmVycygpO1xuXG4vKipcbiAqIFNlcnZpY2UgcHJvdmlkZXIgcGFyYW1ldGVycy5cbiAqIEB0eXBlIHtTZXJ2aWNlUHJvdmlkZXJQYXJhbWV0ZXJzfVxuICovXG5TZXJ2aWNlUHJvdmlkZXIuX3BhcmFtZXRlcnMgPSB7fTtcbiIsImltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi4vbGFuZy9zdHJpbmdzLmpzb24nO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzdHJpbmcgbWFuYWdlci4gSXQncyB1c2VkIHRvIGxvYWQgbG9jYWxpemVkIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXRpYyBjbGFzcyBTdHJpbmdNYW5hZ2VyIGNhbiBub3QgYmUgaW5zdGFudGlhdGVkLicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgdmFsdWUgb2YgY2VydGFpbiBzdHJpbmcga2V5LiBJZiB0aGUgYXNzb2NpYXRlZCB2YWx1ZVxuICAgKiBkb2Vzbid0IGV4aXRzIHJldHVybnMgdGhlIG9yaWdpbmFsIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHN0cmluZyBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBERUZBVUxUID0gbnVsbC4gU3BlY2lmeSB0aGUgbGFuZ3VhZ2UgdG8gdHJhbnNsYXRlIHRoZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ30gY29ycmVzcG9uZGVudCB2YWx1ZS4gSWYgZG9lc24ndCBleGlzdHMgb3JpZ2luYWwga2V5LlxuICAgKi9cbiAgc3RhdGljIGdldChrZXksIGxhbmcpIHtcblxuICAgIC8vIERlZmF1bHQgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuICAgIGxldCB7bGFuZ3VhZ2V9ID0gdGhpcztcblxuICAgIC8vIElmIHBhcmFtZXRlciBsYW5ndWFnZSwgdXNlIGl0XG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIGxhbmd1YWdlID0gbGFuZztcbiAgICB9XG5cbiAgICAvLyBDdXQgZG93biBvbiBzdHJpbmdzLiBlLmcuIGVuX1VTIC0+IGVuXG4gICAgaWYgKGxhbmd1YWdlICYmIGxhbmd1YWdlLmxlbmd0aCA+IDIpIHtcbiAgICAgIGxhbmd1YWdlID0gbGFuZ3VhZ2Uuc2xpY2UoMCwgMik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2Ugc3VwcG9ydCB0aGUgbGFuZ3VhZ2VcbiAgICBpZiAoIXRoaXMuc3RyaW5ncy5oYXNPd25Qcm9wZXJ0eShsYW5ndWFnZSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBsYW5ndWFnZSAke2xhbmd1YWdlfSBzZXQgaW4gU3RyaW5nTWFuYWdlci5gKTtcbiAgICAgIGxhbmd1YWdlID0gJ2VuJztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUga2V5IGlzIHN1cHBvcnRlZCBpbiB0aGUgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICBpZiAoIXRoaXMuc3RyaW5nc1tsYW5ndWFnZV0uaGFzT3duUHJvcGVydHkoa2V5KSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSAke2tleX0gZm9yIGxhbmd1YWdlICR7bGFuZ3VhZ2V9IGluIFN0cmluZ01hbmFnZXIuYCk7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmluZ3NbbGFuZ3VhZ2VdW2tleV07XG4gIH1cbn1cblxuLyoqXG4gKiBEaWN0aW9uYXJ5IG9mIGRpY3Rpb25hcmllczpcbiAqIEtleTogbGFuZ3VhZ2UgY29kZVxuICogVmFsdWU6IEtleTogaWQgb2YgdGhlIHN0cmluZ1xuICogICAgICAgIFZhbHVlOiB0cmFuc2xhdGlvbiBvZiB0aGUgc3RyaW5nXG4gKi9cblN0cmluZ01hbmFnZXIuc3RyaW5ncyA9IHRyYW5zbGF0aW9ucztcblxuLyoqXG4gKiBMYW5ndWFnZSBvZiB0aGUgdHJhbnNsYXRpb25zOyBFbmdsaXNoIGJ5IGRlZmF1bHRcbiAqL1xuU3RyaW5nTWFuYWdlci5sYW5ndWFnZSA9ICdlbic7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q2FjaGUge1xuICAvKipcbiAgICogQGNsYXNzZGVzY1xuICAgKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIGNsaWVudC1zaWRlIHRleHQgY2FjaGUgY2xhc3MuIENvbnRhaW5zIHBhaXJzIG9mXG4gICAqIHN0cmluZ3MgKGtleS92YWx1ZSkgd2hpY2ggY2FuIGJlIHJldHJpZXZlZCBpbiBhbnkgbW9tZW50LiBVc3VhbGx5IHVzZWRcbiAgICogdG8gc3RvcmUgQUpBWCByZXNwb25zZXMgZm9yIHRleHQgc2VydmljZXMgbGlrZSBtYXRobWwybGF0ZXhcbiAgICogKGMuZiB7QGxpbmsgTGF0ZXh9IGNsYXNzKSBvciBtYXRobWwyYWNjZXNzaWJsZSAoYy5mIHtAbGluayBBY2Nlc3NpYmlsaXR5fSBjbGFzcykuXG4gICAqIEBjb25zdHJ1Y3RzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBDYWNoZSBhcnJheSBwcm9wZXJ0eSBzdG9yaW5nIHRoZSBjYWNoZSBlbnRyaWVzLlxuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn1cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlID0gW107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcG9wdWxhdGVzIGEga2V5L3ZhbHVlIHBhaXIgaW50byB0aGUge0BsaW5rIHRoaXMuY2FjaGV9IHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gQ2FjaGUga2V5LCB1c3VhbGx5IHRoZSBzZXJ2aWNlIHN0cmluZyBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIENhY2hlIHZhbHVlLCB1c3VhbGx5IHRoZSBzZXJ2aWNlIHJlc3BvbnNlLlxuICAgKi9cbiAgcG9wdWxhdGUoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhY2hlIHZhbHVlIGFzc29jaWF0ZWQgdG8gY2VydGFpbiBjYWNoZSBrZXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBDYWNoZSBrZXksIHVzdWFsbHkgdGhlIHNlcnZpY2Ugc3RyaW5nIHBhcmFtZXRlci5cbiAgICogQHJldHVybiB7U3RyaW5nfSB2YWx1ZSAtIENhY2hlIHZhbHVlLCBpZiBleGlzdHMuIEZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2FjaGUsIGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuaW1wb3J0IERPTVB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xuaW1wb3J0IE1hdGhNTCBmcm9tICcuL21hdGhtbCc7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IExhdGV4IGZyb20gJy4vbGF0ZXgnO1xuaW1wb3J0IFN0cmluZ01hbmFnZXIgZnJvbSAnLi9zdHJpbmdtYW5hZ2VyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gdXRpbGl0eSBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG4gIC8qKlxuICAgKiBGaXJlcyBhbiBldmVudCBpbiBhIHRhcmdldC5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgLSB0YXJnZXQgd2hlcmUgZXZlbnQgc2hvdWxkIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIGV2ZW50IHRvIGZpcmUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBmaXJlRXZlbnQoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgZXZlbnRPYmplY3QuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gIWV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnRPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICByZXR1cm4gZXZlbnRUYXJnZXQuZmlyZUV2ZW50KGBvbiR7ZXZlbnROYW1lfWAsIGV2ZW50T2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1icm93c2VyIGFkZEV2ZW50TGlzdGVuZXIvYXR0YWNoRXZlbnQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gdGFyZ2V0IHRvIGFkZCB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBzcGVjaWZpZXMgdGhlIHR5cGUgb2YgZXZlbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxCYWNrRnVuY3Rpb24gLSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGFkZEV2ZW50KGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGNhbGxCYWNrRnVuY3Rpb24pIHtcbiAgICBpZiAoZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxCYWNrRnVuY3Rpb24sIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnRUYXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgZXZlbnRUYXJnZXQuYXR0YWNoRXZlbnQoYG9uJHtldmVudE5hbWV9YCwgY2FsbEJhY2tGdW5jdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyb3NzLWJyb3dzZXIgcmVtb3ZlRXZlbnRMaXN0ZW5lci9kZXRhY2hFdmVudCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgLSB0YXJnZXQgdG8gYWRkIHRoZSBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIHNwZWNpZmllcyB0aGUgdHlwZSBvZiBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbEJhY2tGdW5jdGlvbiAtIGZ1bmN0aW9uIHRvIHJlbW92ZSBmcm9tIHRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZW1vdmVFdmVudChldmVudFRhcmdldCwgZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uKSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmRldGFjaEV2ZW50KSB7XG4gICAgICBldmVudFRhcmdldC5kZXRhY2hFdmVudChgb24ke2V2ZW50TmFtZX1gLCBjYWxsQmFja0Z1bmN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgYSBjYWxsYmFjayBmdW5jdGlvbiwgZm9yIGEgY2VydGFpbiBldmVudCB0YXJnZXQsIHRvIHRoZSBmb2xsb3dpbmcgZXZlbnQgdHlwZXM6XG4gICAqIC0gZGJsY2xpY2tcbiAgICogLSBtb3VzZWRvd25cbiAgICogLSBtb3VzZXVwXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gZXZlbnQgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb3VibGVDbGlja0hhbmRsZXIgLSBmdW5jdGlvbiB0byBydW4gd2hlbiBvbiBkYmxjbGljayBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW91c2Vkb3duSGFuZGxlciAtIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIG9uIG1vdXNlZG93biBldmVudC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW91c2V1cEhhbmRsZXIgLSBmdW5jdGlvbiB0byBydW4gd2hlbiBvbiBtb3VzZXVwIGV2ZW50LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkRWxlbWVudEV2ZW50cyhldmVudFRhcmdldCwgZG91YmxlQ2xpY2tIYW5kbGVyLCBtb3VzZWRvd25IYW5kbGVyLCBtb3VzZXVwSGFuZGxlcikge1xuICAgIGlmIChkb3VibGVDbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tEYmxjbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWFsRXZlbnQgPSAoZXZlbnQpIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlYWxFdmVudC5zcmNFbGVtZW50ID8gcmVhbEV2ZW50LnNyY0VsZW1lbnQgOiByZWFsRXZlbnQudGFyZ2V0O1xuICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIoZWxlbWVudCwgcmVhbEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIFV0aWwuYWRkRXZlbnQoZXZlbnRUYXJnZXQsICdkYmxjbGljaycsIHRoaXMuY2FsbGJhY2tEYmxjbGljayk7XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlZG93bkhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tNb3VzZWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhbEV2ZW50ID0gKGV2ZW50KSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsRXZlbnQuc3JjRWxlbWVudCA/IHJlYWxFdmVudC5zcmNFbGVtZW50IDogcmVhbEV2ZW50LnRhcmdldDtcbiAgICAgICAgbW91c2Vkb3duSGFuZGxlcihlbGVtZW50LCByZWFsRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgVXRpbC5hZGRFdmVudChldmVudFRhcmdldCwgJ21vdXNlZG93bicsIHRoaXMuY2FsbGJhY2tNb3VzZWRvd24pO1xuICAgIH1cblxuICAgIGlmIChtb3VzZXVwSGFuZGxlcikge1xuICAgICAgdGhpcy5jYWxsYmFja01vdXNldXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhbEV2ZW50ID0gKGV2ZW50KSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsRXZlbnQuc3JjRWxlbWVudCA/IHJlYWxFdmVudC5zcmNFbGVtZW50IDogcmVhbEV2ZW50LnRhcmdldDtcbiAgICAgICAgbW91c2V1cEhhbmRsZXIoZWxlbWVudCwgcmVhbEV2ZW50KTtcbiAgICAgIH07XG4gICAgICAvLyBDaHJvbWUgZG9lc24ndCB0cmlnZ2VyIHRoaXMgZXZlbnQgZm9yIGV2ZW50VGFyZ2V0IGlmIHdlIHJlbGVhc2UgdGhlIG1vdXNlIGJ1dHRvblxuICAgICAgLy8gd2hpbGUgdGhlIG1vdXNlIGlzIG91dHNpZGUgdGhlIGVkaXRvciB0ZXh0IGZpZWxkLlxuICAgICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQ6IHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluZGVwZW5kZW50bHkgb2Ygd2hlcmUgdGhlIG1vdXNlXG4gICAgICAvLyBpcyB3aGVuIHdlIHJlbGVhc2UgaXRzIGJ1dHRvbi5cbiAgICAgIFV0aWwuYWRkRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5jYWxsYmFja01vdXNldXApO1xuICAgICAgVXRpbC5hZGRFdmVudChldmVudFRhcmdldCwgJ21vdXNldXAnLCB0aGlzLmNhbGxiYWNrTW91c2V1cCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2FsbGJhY2sgZnVuY3Rpb24sIGZvciBhIGNlcnRhaW4gZXZlbnQgdGFyZ2V0LCB0byB0aGUgZm9sbG93aW5nIGV2ZW50IHR5cGVzOlxuICAgKiAtIGRibGNsaWNrXG4gICAqIC0gbW91c2Vkb3duXG4gICAqIC0gbW91c2V1cFxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCAtIGV2ZW50IHRhcmdldC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlbW92ZUVsZW1lbnRFdmVudHMoZXZlbnRUYXJnZXQpIHtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGV2ZW50VGFyZ2V0LCAnZGJsY2xpY2snLCB0aGlzLmNhbGxiYWNrRGJsY2xpY2spO1xuICAgIFV0aWwucmVtb3ZlRXZlbnQoZXZlbnRUYXJnZXQsICdtb3VzZWRvd24nLCB0aGlzLmNhbGxiYWNrTW91c2Vkb3duKTtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuY2FsbGJhY2tNb3VzZXVwKTtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGV2ZW50VGFyZ2V0LCAnbW91c2V1cCcsIHRoaXMuY2FsbGJhY2tNb3VzZXVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgbmFtZSB0byBhIEhUTUxFbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIHRoZSBjbGFzcyBuYW1lLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFVdGlsLmNvbnRhaW5zQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBIVE1MRWxlbWVudCBjb250YWlucyBhIGNlcnRhaW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSB0aGUgSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzTmFtZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIEhUTUxFbGVtZW50IGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLiBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjb250YWluc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwgfHwgISgnY2xhc3NOYW1lJyBpbiBlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICAgIGZvciAobGV0IGkgPSBjdXJyZW50Q2xhc3Nlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzW2ldID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGNlcnRhaW4gY2xhc3MgZm9yIGEgSFRNTEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSB0aGUgSFRNTCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzIG5hbWUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lID0gJyc7XG4gICAgY29uc3QgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjbGFzc2VzW2ldICE9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgbmV3Q2xhc3NOYW1lICs9IGAke2NsYXNzZXNbaV19IGA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lLnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBvbGQgeG1sIGluaXRpYWwgdGV4dCBhdHRyaWJ1dGUgKHdpdGggwqvCuykgdG8gdGhlIGNvcnJlY3Qgb25lKHdpdGggwqdsdDvCp2d0OykuIEl0J3NcbiAgICogdXNlZCB0byBwYXJzZSBvbGQgYXBwbGV0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBzdHJpbmcgY29udGFpbmluZyBzYWZlWG1sIGNoYXJhY3RlcnNcbiAgICogQHJldHVybnMge3N0cmluZ30gYSBzdHJpbmcgd2l0aCBzYWZlWG1sIGNoYXJhY3RlcnMgcGFyc2VkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY29udmVydE9sZFhtbGluaXRpYWx0ZXh0QXR0cmlidXRlKHRleHQpIHtcbiAgICAvLyBVc2VkIHRvIGZpeCBhIGJ1ZyB3aXRoIENhcyBpbXBvcnRlZCBmcm9tIE1vb2RsZSAxLjkgdG8gTW9vZGxlIDIueC5cbiAgICAvLyBUaGlzIGNvdWxkIGJlIHJlbW92ZWQgaW4gZnV0dXJlLlxuICAgIGNvbnN0IHZhbCA9ICd2YWx1ZT0nO1xuXG4gICAgY29uc3QgeGl0cG9zID0gdGV4dC5pbmRleE9mKCd4bWxpbml0aWFsdGV4dCcpO1xuICAgIGNvbnN0IHZhbHBvcyA9IHRleHQuaW5kZXhPZih2YWwsIHhpdHBvcyk7XG4gICAgY29uc3QgcXVvdGUgPSB0ZXh0LmNoYXJBdCh2YWxwb3MgKyB2YWwubGVuZ3RoKTtcbiAgICBjb25zdCBzdGFydHF1b3RlID0gdmFscG9zICsgdmFsLmxlbmd0aCArIDE7XG4gICAgY29uc3QgZW5kcXVvdGUgPSB0ZXh0LmluZGV4T2YocXVvdGUsIHN0YXJ0cXVvdGUpO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0LnN1YnN0cmluZyhzdGFydHF1b3RlLCBlbmRxdW90ZSk7XG5cbiAgICBsZXQgbmV3dmFsdWUgPSB2YWx1ZS5zcGxpdCgnwqsnKS5qb2luKCfCp2x0OycpO1xuICAgIG5ld3ZhbHVlID0gbmV3dmFsdWUuc3BsaXQoJ8K7Jykuam9pbignwqdndDsnKTtcbiAgICBuZXd2YWx1ZSA9IG5ld3ZhbHVlLnNwbGl0KCcmJykuam9pbignwqcnKTtcbiAgICBuZXd2YWx1ZSA9IG5ld3ZhbHVlLnNwbGl0KCfCqCcpLmpvaW4oJ8KncXVvdDsnKTtcblxuICAgIHRleHQgPSB0ZXh0LnNwbGl0KHZhbHVlKS5qb2luKG5ld3ZhbHVlKTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1icm93c2VyIHNvbHV0aW9uIGZvciBjcmVhdGluZyBuZXcgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gdGFnIG5hbWUgb2YgdGhlIHdpc2hlZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtIGFuIG9iamVjdCB3aGVyZSBlYWNoIGtleSBpcyBhIHdpc2hlZFxuICAgKiBhdHRyaWJ1dGUgbmFtZSBhbmQgZWFjaCB2YWx1ZSBpcyBpdHMgdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY3JlYXRvcl0gLSBpZiBzdXBwbGllZCwgdGhpcyBmdW5jdGlvbiB3aWxsIHVzZVxuICAgKiB0aGUgXCJjcmVhdGVFbGVtZW50XCIgbWV0aG9kIGZyb20gdGhpcyBwYXJhbS4gT3RoZXJ3aXNlXG4gICAqIGRvY3VtZW50IHdpbGwgYmUgdXNlZCBhcyBjcmVhdG9yLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFzc2lnbmVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjcmVhdG9yKSB7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXR0cmlidXRlcyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChjcmVhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNyZWF0b3IgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBsZXQgZWxlbWVudDtcblxuICAgIC8qXG4gICAgKiBJbnRlcm5ldCBFeHBsb3JlciBmaXg6XG4gICAgKiBJZiB5b3UgY3JlYXRlIGEgbmV3IG9iamVjdCBkeW5hbWljYWxseSwgeW91IGNhbid0IHNldCBhIG5vbi1zdGFuZGFyZCBhdHRyaWJ1dGUuXG4gICAgKiBGb3IgZXhhbXBsZSwgeW91IGNhbid0IHNldCB0aGUgXCJzcmNcIiBhdHRyaWJ1dGUgb24gYW4gXCJhcHBsZXRcIiBvYmplY3QuXG4gICAgKiBPdGhlciBicm93c2VycyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBhbmQgd2lsbCBydW4gdGhlIHN0YW5kYXJkIGNvZGUuXG4gICAgKi9cbiAgICB0cnkge1xuICAgICAgbGV0IGh0bWwgPSBgPCR7dGFnTmFtZX1gO1xuXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGh0bWwgKz0gYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHtVdGlsLmh0bWxFbnRpdGllcyhhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKX1cImA7XG4gICAgICB9KTtcbiAgICAgIGh0bWwgKz0gJz4nO1xuICAgICAgZWxlbWVudCA9IGNyZWF0b3IuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbGVtZW50ID0gY3JlYXRvci5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG5ldyBIVE1MIGZyb20gaXQncyBIVE1MIGNvZGUgYXMgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0Q29kZSAtIGh0bWwgY29kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU9iamVjdChvYmplY3RDb2RlLCBjcmVhdG9yKSB7XG4gICAgaWYgKGNyZWF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3JlYXRvciA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIGNhbid0IGluY2x1ZGUgXCJwYXJhbVwiIHRhZyB3aGVuIGlzIHNldHRpbmcgYW4gaW5uZXJIVE1MIHByb3BlcnR5LlxuICAgIG9iamVjdENvZGUgPSBvYmplY3RDb2RlLnNwbGl0KCc8YXBwbGV0ICcpLmpvaW4oJzxzcGFuIHdpcmlzT2JqZWN0PVwiV2lyaXNBcHBsZXRcIiAnKS5zcGxpdCgnPEFQUExFVCAnKS5qb2luKCc8c3BhbiB3aXJpc09iamVjdD1cIldpcmlzQXBwbGV0XCIgJyk7IC8vIEl0IGlzIGEgJ3NwYW4nIGJlY2F1c2UgJ3NwYW4nIG9iamVjdHMgY2FuIGNvbnRhaW4gJ2JyJyBub2Rlcy5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPC9hcHBsZXQ+Jykuam9pbignPC9zcGFuPicpLnNwbGl0KCc8L0FQUExFVD4nKS5qb2luKCc8L3NwYW4+Jyk7XG5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPHBhcmFtICcpLmpvaW4oJzxiciB3aXJpc09iamVjdD1cIldpcmlzUGFyYW1cIiAnKS5zcGxpdCgnPFBBUkFNICcpLmpvaW4oJzxiciB3aXJpc09iamVjdD1cIldpcmlzUGFyYW1cIiAnKTsgLy8gSXQgaXMgYSAnYnInIGJlY2F1c2UgJ2JyJyBjYW4ndCBjb250YWluIG5vZGVzLlxuICAgIG9iamVjdENvZGUgPSBvYmplY3RDb2RlLnNwbGl0KCc8L3BhcmFtPicpLmpvaW4oJzwvYnI+Jykuc3BsaXQoJzwvUEFSQU0+Jykuam9pbignPC9icj4nKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIGNyZWF0b3IpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBvYmplY3RDb2RlO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlUGFyYW1zRml4KG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdC5nZXRBdHRyaWJ1dGUgJiYgb2JqZWN0LmdldEF0dHJpYnV0ZSgnd2lyaXNPYmplY3QnKSA9PT0gJ1dpcmlzUGFyYW0nKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNQYXJzZWQgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKG9iamVjdC5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1BhcnNlZFtvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlTmFtZV0gPSBvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW0gPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJywgYXR0cmlidXRlc1BhcnNlZCwgY3JlYXRvcik7XG5cbiAgICAgICAgLy8gSUUgZml4LlxuICAgICAgICBpZiAocGFyYW0uTkFNRSkge1xuICAgICAgICAgIHBhcmFtLm5hbWUgPSBwYXJhbS5OQU1FO1xuICAgICAgICAgIHBhcmFtLnZhbHVlID0gcGFyYW0uVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbS5yZW1vdmVBdHRyaWJ1dGUoJ3dpcmlzT2JqZWN0Jyk7XG4gICAgICAgIG9iamVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwYXJhbSwgb2JqZWN0KTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmdldEF0dHJpYnV0ZSAmJiBvYmplY3QuZ2V0QXR0cmlidXRlKCd3aXJpc09iamVjdCcpID09PSAnV2lyaXNBcHBsZXQnKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNQYXJzZWQgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKG9iamVjdC5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1BhcnNlZFtvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlTmFtZV0gPSBvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXBwbGV0ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdhcHBsZXQnLCBhdHRyaWJ1dGVzUGFyc2VkLCBjcmVhdG9yKTtcbiAgICAgICAgYXBwbGV0LnJlbW92ZUF0dHJpYnV0ZSgnd2lyaXNPYmplY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgcmVjdXJzaXZlUGFyYW1zRml4KG9iamVjdC5jaGlsZE5vZGVzW2ldKTtcblxuICAgICAgICAgIGlmIChvYmplY3QuY2hpbGROb2Rlc1tpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICBhcHBsZXQuYXBwZW5kQ2hpbGQob2JqZWN0LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgaSAtPSAxOyAvLyBXaGVuIHdlIGluc2VydCB0aGUgb2JqZWN0IGNoaWxkIGludG8gdGhlIGFwcGxldCwgb2JqZWN0IGxvc2VzIG9uZSBjaGlsZC5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYXBwbGV0LCBvYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJlY3Vyc2l2ZVBhcmFtc0ZpeChvYmplY3QuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVQYXJhbXNGaXgoY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gRWxlbWVudCB0byBpdHMgSFRNTCBjb2RlLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBlbnRyeSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBIVE1MIGNvZGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVPYmplY3RDb2RlKGVsZW1lbnQpIHtcbiAgICAvLyBJbiBjYXNlIHRoYXQgdGhlIGltYWdlIHdhcyBub3QgY3JlYXRlZCwgdGhlIG9iamVjdCBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCBlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkgeyAvLyBFTEVNRU5UX05PREUuXG4gICAgICBsZXQgb3V0cHV0ID0gYDwke2VsZW1lbnQudGFnTmFtZX1gO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5hdHRyaWJ1dGVzW2ldLnNwZWNpZmllZCkge1xuICAgICAgICAgIG91dHB1dCArPSBgICR7ZWxlbWVudC5hdHRyaWJ1dGVzW2ldLm5hbWV9PVwiJHtVdGlsLmh0bWxFbnRpdGllcyhlbGVtZW50LmF0dHJpYnV0ZXNbaV0udmFsdWUpfVwiYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3V0cHV0ICs9ICc+JztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG91dHB1dCArPSBVdGlsLmNyZWF0ZU9iamVjdChlbGVtZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0ICs9IGA8LyR7ZWxlbWVudC50YWdOYW1lfT5gO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnRElWJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICBvdXRwdXQgKz0gYD48LyR7ZWxlbWVudC50YWdOYW1lfT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9ICcvPic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgcmV0dXJuIFV0aWwuaHRtbEVudGl0aWVzKGVsZW1lbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIHR3byBVUkwgcGF0aHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoMSAtIGZpcnN0IFVSTCBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoMiAtIHNlY29uZCBVUkwgcGF0aFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBuZXcgVVJMLlxuICAgKi9cbiAgc3RhdGljIGNvbmNhdGVuYXRlVXJsKHBhdGgxLCBwYXRoMikge1xuICAgIGxldCBzZXBhcmF0b3IgPSAnJztcbiAgICBpZiAoKHBhdGgxLmluZGV4T2YoJy8nKSAhPT0gcGF0aDEubGVuZ3RoKSAmJiAocGF0aDIuaW5kZXhPZignLycpICE9PSAwKSkge1xuICAgICAgc2VwYXJhdG9yID0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gKHBhdGgxICsgc2VwYXJhdG9yICsgcGF0aDIpLnJlcGxhY2UoLyhbXjpdXFwvKVxcLysvZywgJyQxJyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGEgdGV4dCBhbmQgcmVwbGFjZXMgYWxsIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzIGJ5IHRoZWlyIGNvcnJlc3BvbmRlbnQgZW50aXRpZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHRleHQgdG8gYmUgcGFyc2VkLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgaW5wdXQgdGV4dCB3aXRoIGFsbCB0aGVpciBzcGVjaWFsIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlaXIgZW50aXRpZXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBodG1sRW50aXRpZXMoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoJyYnKS5qb2luKCcmYW1wOycpLnNwbGl0KCc8Jykuam9pbignJmx0OycpXG4gICAgICAuc3BsaXQoJz4nKVxuICAgICAgLmpvaW4oJyZndDsnKVxuICAgICAgLnNwbGl0KCdcIicpXG4gICAgICAuam9pbignJnF1b3Q7Jyk7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgSFRNTCB0byBwcmV2ZW50IFhTUyBpbmplY3Rpb25zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIGh0bWwgdG8gYmUgc2FuaXRpemUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGh0bWwgc2FuaXRpemVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaHRtbFNhbml0aXplKGh0bWwpIHtcbiAgICBsZXQgYW5ub3RhdGlvblJlZ2V4ID0gL1xcPGFubm90YXRpb24uK1xcPFxcL2Fubm90YXRpb25cXD4vXG4gICAgLy8gR2V0IGFsbCB0aGUgYW5ub3RhdGlvbiBjb250ZW50IGluY2x1ZGluZyB0aGUgdGFncy5cbiAgICBsZXQgYW5ub3RhdGlvbiA9IGh0bWwubWF0Y2goYW5ub3RhdGlvblJlZ2V4KTtcbiAgICAvLyBTYW5pdGl6ZSBodG1sIGNvZGUgd2l0aG91dCByZW1vdmluZyB0aGUgPHNlbWFudGljcz4gYW5kIDxhbm5vdGF0aW9uPiB0YWdzLlxuICAgIGh0bWwgPSBET01QdXJpZnkuc2FuaXRpemUoaHRtbCwgeyBBRERfVEFHUzogWydzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbiddLCBBTExPV0VEX0FUVFI6IFsnbWF0aHZhcmlhbnQnLCAnY2xhc3MnLCAnbGluZWJyZWFrJ119KTtcbiAgICAvLyBSZWFkZCBvbGQgYW5ub3RhdGlvbiBjb250ZW50LlxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoYW5ub3RhdGlvblJlZ2V4LCBhbm5vdGF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgYSB0ZXh0IGFuZCByZXBsYWNlcyBhbGwgdGhlIEhUTUwgZW50aXRpZXMgYnkgdGhlaXIgY2hhcmFjdGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IC0gdGV4dCB0byBiZSBwYXJzZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGlucHV0IHRleHQgd2l0aCBhbGwgdGhlaXIgZW50aXRpZXMgcmVwbGFjZWQgYnkgY2hhcmFjdGVycy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGh0bWxFbnRpdGllc0RlY29kZShpbnB1dCkge1xuICAgIC8vIFRleHRhcmVhIGVsZW1lbnQgZGVjb2RlcyB3aGVuIGlubmVyIGh0bWwgaXMgc2V0LlxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNyb3NzLWJyb3dzZXIgaHR0cCByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGh0dHBSZXF1ZXN0IHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R8QWN0aXZlWE9iamVjdH0gdGhlIHByb3BlciByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVIdHRwUmVxdWVzdCgpIHtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnN1YnN0cigwLCB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgaWYgKGN1cnJlbnRQYXRoLnN1YnN0cigwLCA3KSA9PT0gJ2ZpbGU6Ly8nKSB7XG4gICAgICB0aHJvdyBTdHJpbmdNYW5hZ2VyLmdldCgnZXhjZXB0aW9uX2Nyb3NzX3NpdGUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgfSBjYXRjaCAob2MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgaGFzaCB0byBhIEhUVFAgcXVlcnkuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHByb3BlcnRpZXMgLSBhIGtleS92YWx1ZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgSFRUUCBxdWVyeSBjb250YWluaW5nIGFsbCB0aGUga2V5IHZhbHVlIHBhaXJzIHdpdGhcbiAgICogYWxsIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlaXIgZW50aXRpZXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBodHRwQnVpbGRRdWVyeShwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnRpZXNbaV0gIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQgKz0gYCR7VXRpbC51cmxFbmNvZGUoaSl9PSR7VXRpbC51cmxFbmNvZGUocHJvcGVydGllc1tpXSl9JmA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGluZyBsYXN0ICcmJyBlbXB0eSBjaGFyYWN0ZXIuXG4gICAgaWYgKHJlc3VsdC5zdWJzdHJpbmcocmVzdWx0Lmxlbmd0aCAtIDEpID09PSAnJicpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIGhhc2ggdG8gc3RyaW5nIHNvcnRpbmcga2V5cyB0byBnZXQgYSBkZXRlcm1pbmlzdGljIG91dHB1dFxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBoYXNoIC0gYSBrZXkvdmFsdWUgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyB3aXRoIHRoZSBmb3JtIGtleTE9dmFsdWUxLi4ua2V5bj12YWx1ZW5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHByb3BlcnRpZXNUb1N0cmluZyhoYXNoKSB7XG4gICAgLy8gMS4gU29ydCBrZXlzLiBXZSBzb3J0IHRoZSBrZXlzIGJlY2F1c2Ugd2Ugd2FudCBhIGRldGVybWluaXN0aWMgb3V0cHV0LlxuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhoYXNoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGFzaCwga2V5KSkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG4gPSBrZXlzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHMxID0ga2V5c1tpXTtcbiAgICAgICAgY29uc3QgczIgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoVXRpbC5jb21wYXJlU3RyaW5ncyhzMSwgczIpID4gMCkge1xuICAgICAgICAgIC8vIFN3YXAuXG4gICAgICAgICAga2V5c1tpXSA9IHMyO1xuICAgICAgICAgIGtleXNbal0gPSBzMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEdlbmVyYXRlIG91dHB1dC5cbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBvdXRwdXQgKz0ga2V5O1xuICAgICAgb3V0cHV0ICs9ICc9JztcbiAgICAgIGxldCB2YWx1ZSA9IGhhc2hba2V5XTtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFxcXCcsICdcXFxcXFxcXCcpO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCdcXG4nLCAnXFxcXG4nKTtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFxyJywgJ1xcXFxyJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJ1xcdCcsICdcXFxcdCcpO1xuXG4gICAgICBvdXRwdXQgKz0gdmFsdWU7XG4gICAgICBvdXRwdXQgKz0gJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0d28gc3RyaW5ncyB1c2luZyBjaGFyQ29kZUF0IG1ldGhvZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYSAtIGZpcnN0IHN0cmluZyB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYiAtIHNlY29uZCBzdHJpbmcgdG8gY29tcGFyZS5cbiAgICogQHJldHVybnMge251bWJlcn0gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjb21wYXJlU3RyaW5ncyhhLCBiKSB7XG4gICAgbGV0IGk7XG4gICAgY29uc3QgYW4gPSBhLmxlbmd0aDtcbiAgICBjb25zdCBibiA9IGIubGVuZ3RoO1xuICAgIGNvbnN0IG4gPSAoYW4gPiBibikgPyBibiA6IGFuO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGMgPSBVdGlsLmZpeGVkQ2hhckNvZGVBdChhLCBpKSAtIFV0aWwuZml4ZWRDaGFyQ29kZUF0KGIsIGkpO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeCBjaGFyQ29kZUF0KCkgSmF2YVNjcmlwdCBmdW5jdGlvbiB0byBoYW5kbGUgbm9uLUJhc2ljLU11bHRpbGluZ3VhbC1QbGFuZSBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gaW5wdXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggLSBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwXG4gICAqIGFuZCBsZXNzIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBVVEYtMTYgY29kZSBvZiB0aGUgc3RyaW5nIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGZpeGVkQ2hhckNvZGVBdChzdHJpbmcsIGlkeCkge1xuICAgIGlkeCA9IGlkeCB8fCAwO1xuICAgIGNvbnN0IGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpZHgpO1xuICAgIGxldCBoaTtcbiAgICBsZXQgbG93O1xuXG4gICAgLyogSGlnaCBzdXJyb2dhdGUgKGNvdWxkIGNoYW5nZSBsYXN0IGhleCB0byAweERCN0YgdG8gdHJlYXQgaGlnaFxuICAgIHByaXZhdGUgc3Vycm9nYXRlcyBhcyBzaW5nbGUgY2hhcmFjdGVycykgKi9cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRikge1xuICAgICAgaGkgPSBjb2RlO1xuICAgICAgbG93ID0gc3RyaW5nLmNoYXJDb2RlQXQoaWR4ICsgMSk7XG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKGxvdykpIHtcbiAgICAgICAgdGhyb3cgU3RyaW5nTWFuYWdlci5nZXQoJ2V4Y2VwdGlvbl9oaWdoX3N1cnJvZ2F0ZScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoaGkgLSAweEQ4MDApICogMHg0MDApICsgKGxvdyAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4REMwMCAmJiBjb2RlIDw9IDB4REZGRikgeyAvLyBMb3cgc3Vycm9nYXRlLlxuICAgICAgLyogV2UgcmV0dXJuIGZhbHNlIHRvIGFsbG93IGxvb3BzIHRvIHNraXAgdGhpcyBpdGVyYXRpb24gc2luY2Ugc2hvdWxkIGhhdmVcbiAgICAgIGFscmVhZHkgaGFuZGxlZCBoaWdoIHN1cnJvZ2F0ZSBhYm92ZSBpbiB0aGUgcHJldmlvdXMgaXRlcmF0aW9uLiAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIFVSTCB3aXRoIGl0J3MgcXVlcnkgcGFyYW1zIGNvbnZlcnRlZCBpbnRvIGFycmF5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gaW5wdXQgVVJMLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0W119IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIFVSTCBxdWVyeSBwYXJhbXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cmxUb0Fzc0FycmF5KHVybCkge1xuICAgIGxldCBpO1xuICAgIGkgPSB1cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpID4gMCkge1xuICAgICAgY29uc3QgcXVlcnkgPSB1cmwuc3Vic3RyaW5nKGkgKyAxKTtcbiAgICAgIGNvbnN0IHNzID0gcXVlcnkuc3BsaXQoJyYnKTtcbiAgICAgIGNvbnN0IGggPSB7fTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzID0gc3NbaV07XG4gICAgICAgIGNvbnN0IGt2ID0gcy5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoa3YubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGhba3ZbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGt2WzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGg7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVuY29kZWQgVVJMIGJ5IHJlcGxhY2luZyBlYWNoIGluc3RhbmNlIG9mIGNlcnRhaW4gY2hhcmFjdGVycyBieVxuICAgKiBvbmUsIHR3bywgdGhyZWUgb3IgZm91ciBlc2NhcGUgc2VxdWVuY2VzIHVzaW5nIGVuY29kZVVSSUNvbXBvbmVudCBtZXRob2QuXG4gICAqICEnKCkqIC4gd2lsbCBub3QgYmUgZW5jb2RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsZWFyU3RyaW5nIC0gVVJMIHN0cmluZyB0byBiZSBlbmNvZGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFVSTCB3aXRoIGl0J3Mgc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcGxhY2VkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgdXJsRW5jb2RlKGNsZWFyU3RyaW5nKSB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIC8vIE1ldGhvZCBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCBlbmNvZGUgIScoKSp+IC5cbiAgICBvdXRwdXQgPSBlbmNvZGVVUklDb21wb25lbnQoY2xlYXJTdHJpbmcpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvLyBUT0RPOiBUbyBwYXJzZXI/XG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgSFRNTCBvZiBhIGltYWdlIGludG8gdGhlIG91dHB1dCBjb2RlIHRoYXQgV0lSSVMgbXVzdCByZXR1cm4uXG4gICAqIEJ5IGRlZmF1bHQgcmV0dXJucyB0aGUgTWF0aE1MIHN0b3JlZCBvbiBkYXRhLW1haG1sIGF0dHJpYnV0ZSAoaWYgaW1nQ29kZSBpcyBhIGZvcm11bGEpXG4gICAqIG9yIHRoZSBXaXJpc2NhcyBhdHRyaWJ1dGUgb2YgYSBXSVJJUyBhcHBsZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWdDb2RlIC0gdGhlIGh0bWwgY29kZSBmcm9tIGEgZm9ybXVsYSBvciBhIENBUyBpbWFnZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBjb252ZXJ0VG9YbWwgLSB0cnVlIGlmIHRoZSBpbWFnZSBzaG91bGQgYmUgY29udmVydGVkIHRvIFhNTC5cbiAgICogQHBhcmFtIHtib29sZWFufSBjb252ZXJ0VG9TYWZlWG1sIC0gdHJ1ZSBpZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzYWZlWE1MLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgWE1MIG9yIHNhZmVYTUwgb2YgYSBXSVJJUyBpbWFnZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldFdJUklTSW1hZ2VPdXRwdXQoaW1nQ29kZSwgY29udmVydFRvWG1sLCBjb252ZXJ0VG9TYWZlWG1sKSB7XG4gICAgY29uc3QgaW1nT2JqZWN0ID0gVXRpbC5jcmVhdGVPYmplY3QoaW1nQ29kZSk7XG4gICAgaWYgKGltZ09iamVjdCkge1xuICAgICAgaWYgKGltZ09iamVjdC5jbGFzc05hbWUgPT09IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpIHx8IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpKSB7XG4gICAgICAgIGlmICghY29udmVydFRvWG1sKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0NvZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhTWF0aE1MID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSk7XG4gICAgICAgIC8vIFRvIGhhbmRsZSBhbm5vdGF0aW9ucywgZmlyc3Qgd2UgbmVlZCB0aGUgTWF0aE1MIGluIFhNTC5cbiAgICAgICAgbGV0IG1hdGhNTCA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKGRhdGFNYXRoTUwpO1xuXG4gICAgICAgIGlmICghQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVIYW5kVHJhY2VzJykpIHtcbiAgICAgICAgICBtYXRoTUwgPSBNYXRoTUwucmVtb3ZlQW5ub3RhdGlvbihtYXRoTUwsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0aE1MID09IG51bGwpIHtcbiAgICAgICAgICBtYXRoTUwgPSBpbWdPYmplY3QuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb252ZXJ0VG9TYWZlWG1sKSB7XG4gICAgICAgICAgY29uc3Qgc2FmZU1hdGhNTCA9IE1hdGhNTC5zYWZlWG1sRW5jb2RlKG1hdGhNTCk7XG4gICAgICAgICAgcmV0dXJuIHNhZmVNYXRoTUw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0aE1MO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1nQ29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBub2RlIGxlbmd0aCBpbiBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBIVE1MIG5vZGUuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IG5vZGUgbGVuZ3RoLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0Tm9kZUxlbmd0aChub2RlKSB7XG4gICAgY29uc3Qgc3RhdGljTm9kZUxlbmd0aHMgPSB7XG4gICAgICBJTUc6IDEsXG4gICAgICBCUjogMSxcbiAgICB9O1xuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkgeyAvLyBFTEVNRU5UX05PREUuXG4gICAgICBsZXQgbGVuZ3RoID0gc3RhdGljTm9kZUxlbmd0aHNbbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpXTtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxlbmd0aCArPSBVdGlsLmdldE5vZGVMZW5ndGgobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzZWxlY3RlZCBub2RlIG9yIHRleHQgZnJvbSBhbiBlZGl0YWJsZSBIVE1MRWxlbWVudC5cbiAgICogSWYgdGhlIGNhcmV0IGlzIG9uIGEgdGV4dCBub2RlLCBjb25jYXRlbmF0ZXMgaXQgd2l0aCBhbGwgdGhlIHByZXZpb3VzIGFuZCBuZXh0IHRleHQgbm9kZXMuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIHRoZSBlZGl0YWJsZSBIVE1MRWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0lmcmFtZSAgLSBzcGVjaWZpZXMgaWYgdGhlIHRhcmdldCBpcyBhbiBpZnJhbWUgb3Igbm90XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VHZXRTZWxlY3Rpb24gLSBpZiB0cnVlLCBpZ25vcmVzIElFIHN5c3RlbSB0byBnZXRcbiAgICogdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGFuZCB1c2VzIHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBhbiBvYmplY3Qgd2l0aCB0aGUgJ25vZGUnIGtleSBzZXQgaWYgdGhlIGl0ZW0gaXMgYW5cbiAgICogZWxlbWVudCBvciB0aGUga2V5cyAnbm9kZScgYW5kICdjYXJldFBvc2l0aW9uJyBpZiB0aGUgZWxlbWVudCBpcyB0ZXh0LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0U2VsZWN0ZWRJdGVtKHRhcmdldCwgaXNJZnJhbWUsIGZvcmNlR2V0U2VsZWN0aW9uKSB7XG4gICAgbGV0IHdpbmRvd1RhcmdldDtcblxuICAgIGlmIChpc0lmcmFtZSkge1xuICAgICAgd2luZG93VGFyZ2V0ID0gdGFyZ2V0LmNvbnRlbnRXaW5kb3c7XG4gICAgICB3aW5kb3dUYXJnZXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93VGFyZ2V0ID0gd2luZG93O1xuICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiAhZm9yY2VHZXRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHJhbmdlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICBpZiAocmFuZ2UucGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocmFuZ2UuaHRtbFRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChyYW5nZS50ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZ2V0U2VsZWN0ZWRJdGVtKHRhcmdldCwgaXNJZnJhbWUsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93VGFyZ2V0LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdJbnNlcnRJbWFnZScsIGZhbHNlLCAnIycpO1xuICAgICAgICBsZXQgdGVtcG9yYWxPYmplY3QgPSByYW5nZS5wYXJlbnRFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHRlbXBvcmFsT2JqZWN0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdJTUcnKSB7XG4gICAgICAgICAgLy8gSUU5IGZpeDogcGFyZW50RWxlbWVudCgpIGRvZXMgbm90IHJldHVybiB0aGUgSU1HIG5vZGUsXG4gICAgICAgICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IERJViBub2RlLiBJbiBJRSA8IDksIHBhc3RlSFRNTCBkb2VzIG5vdCB3b3JrIHdlbGwuXG4gICAgICAgICAgcmFuZ2UucGFzdGVIVE1MKCc8c3BhbiBpZD1cIndyc19vcGVuRWRpdG9yV2luZG93X3RlbXBvcmFsT2JqZWN0XCI+PC9zcGFuPicpO1xuICAgICAgICAgIHRlbXBvcmFsT2JqZWN0ID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cnNfb3BlbkVkaXRvcldpbmRvd190ZW1wb3JhbE9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBjYXJldFBvc2l0aW9uO1xuXG4gICAgICAgIGlmICh0ZW1wb3JhbE9iamVjdC5uZXh0U2libGluZyAmJiB0ZW1wb3JhbE9iamVjdC5uZXh0U2libGluZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICAgICAgbm9kZSA9IHRlbXBvcmFsT2JqZWN0Lm5leHRTaWJsaW5nO1xuICAgICAgICAgIGNhcmV0UG9zaXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXBvcmFsT2JqZWN0LnByZXZpb3VzU2libGluZ1xuICAgICAgICAgICYmIHRlbXBvcmFsT2JqZWN0LnByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgIG5vZGUgPSB0ZW1wb3JhbE9iamVjdC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICB0ZW1wb3JhbE9iamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0ZW1wb3JhbE9iamVjdCk7XG4gICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wb3JhbE9iamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBvcmFsT2JqZWN0KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgY2FyZXRQb3NpdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHJhbmdlLml0ZW0oMCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dUYXJnZXQuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICBsZXQgcmFuZ2U7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3dUYXJnZXQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJhbmdlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgY2FyZXRQb3NpdGlvbjogcmFuZ2Uuc3RhcnRPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICE9PSByYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7IC8vIEVMRU1FTlRfTk9ERS5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSByYW5nZS5zdGFydE9mZnNldDtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uXSkge1xuXG4gICAgICAgICAgLy8gSW4gY2FzZSB0aGF0IGEgZm9ybXVsYSBpcyBkZXRlY3RlZCBidXQgbm90IHNlbGVjdGVkLFxuICAgICAgICAgIC8vIHdlIGNyZWF0ZSBhbiBlbXB0eSBzcGFuIHdoZXJlIHdlIGNvdWxkIGluc2VydCB0aGUgbmV3IGZvcm11bGEuXG4gICAgICAgICAgaWYgKHJhbmdlLnN0YXJ0T2Zmc2V0ID09PSByYW5nZS5lbmRPZmZzZXQpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gMCAmJiBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb24gLSAxXS5sb2NhbE5hbWUgPT09ICdzcGFuJyAmJiBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dLmNsYXNzTGlzdC5jb250YWlucygnV2lyaXNmb3JtdWxhJykpIHtcbiAgICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBVdGlsLmdldFNlbGVjdGVkSXRlbSh0YXJnZXQsIGlzSWZyYW1lLCBmb3JjZUdldFNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dLmNsYXNzTGlzdD8uY29udGFpbnMoJ1dpcmlzZm9ybXVsYScpKSB7XG4gICAgICAgICAgICAgIGlmICgocG9zaXRpb24gPiAwICYmIG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbiAtIDFdLmNsYXNzTGlzdC5jb250YWlucygnV2lyaXNmb3JtdWxhJykpIHx8IHBvc2l0aW9uID09PSAwICkge1xuICAgICAgICAgICAgICAgIHZhciBlbXB0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZW1wdHlTcGFuLCBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGU6IG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGVyZSBpc24ndCBhbnkgaXRlbSBvciBpZiBpdCBpcyBtYWxmb3JtZWQuXG4gICAqIE90aGVyd2lzZSByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBub2RlIHdpdGggdGhlIE1hdGhNTCBpbWFnZVxuICAgKiBhbmQgdGhlIGN1cnNvciBwb3NpdGlvbiBpbnNpZGUgdGhlIHRleHRhcmVhLlxuICAgKiBAcGFyYW0ge0hUTUxUZXh0QXJlYUVsZW1lbnR9IHRleHRhcmVhIC0gdGV4dGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5vZGUsIHRoZSBpbmRleCBvZiB0aGVcbiAgICogYmVnaW5uaW5nICBvZiB0aGUgc2VsZWN0ZWQgdGV4dCwgY2FyZXQgcG9zaXRpb24gYW5kIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIG9mIHRoZVxuICAgKiB0ZXh0IG5vZGUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRTZWxlY3RlZEl0ZW1PblRleHRhcmVhKHRleHRhcmVhKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0YXJlYS52YWx1ZSk7XG4gICAgY29uc3QgdGV4dE5vZGVWYWx1ZXMgPSBMYXRleC5nZXRMYXRleEZyb21UZXh0Tm9kZSh0ZXh0Tm9kZSwgdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQpO1xuICAgIGlmICh0ZXh0Tm9kZVZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGU6IHRleHROb2RlLFxuICAgICAgY2FyZXRQb3NpdGlvbjogdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQsXG4gICAgICBzdGFydFBvc2l0aW9uOiB0ZXh0Tm9kZVZhbHVlcy5zdGFydFBvc2l0aW9uLFxuICAgICAgZW5kUG9zaXRpb246IHRleHROb2RlVmFsdWVzLmVuZFBvc2l0aW9uLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgZm9yIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIG5hbWUgaW4gYSBIVE1MIGNvZGUgc3RyaW5nLlxuICAgKiBJbXBvcnRhbnQ6IHRoaXMgZnVuY3Rpb24gaXMgdmVyeSBjb25jcmV0ZSBmb3IgV0lSSVMgY29kZS5cbiAgICogSXQgdGFrZXMgYXMgcHJlY29uZGl0aW9ucyBsb3RzIG9mIGJlaGF2aW9ycyB0aGF0IGFyZSBub3QgdGhlIGdlbmVyYWwgY2FzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSAgSFRNTCBjb2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGVsZW1lbnQgbmFtZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBhdXRvQ2xvc2VkIC0gdHJ1ZSBpZiB0aGUgZWxlbWVudHMgYXJlIGF1dG9DbG9zZWQuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgSFRNTCBlbGVtZW50cyBvZiBjb2RlIG1hdGNoaW5nIHRoZSBuYW1lIGFyZ3VtZW50LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0RWxlbWVudHNCeU5hbWVGcm9tU3RyaW5nKGNvZGUsIG5hbWUsIGF1dG9DbG9zZWQpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc3RhcnQgPSBjb2RlLmluZGV4T2YoYDwke25hbWV9IGApO1xuXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkgeyAvLyBMb29rIGZvciBub2Rlcy5cbiAgICAgIGxldCBlbmRTdHJpbmc7XG5cbiAgICAgIGlmIChhdXRvQ2xvc2VkKSB7XG4gICAgICAgIGVuZFN0cmluZyA9ICc+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFN0cmluZyA9IGA8LyR7bmFtZX0+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGVuZCA9IGNvZGUuaW5kZXhPZihlbmRTdHJpbmcsIHN0YXJ0KTtcblxuICAgICAgaWYgKGVuZCAhPT0gLTEpIHtcbiAgICAgICAgZW5kICs9IGVuZFN0cmluZy5sZW5ndGg7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIGVuZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBzdGFydCArIDE7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gY29kZS5pbmRleE9mKGA8JHtuYW1lfSBgLCBlbmQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzZTY0IGNoYXJhY3Rlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBjaGFyYWN0ZXIgLSBiYXNlNjQgY2hhcmFjdGVyLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBiYXNlNjQgY2hhcmFjdGVyIG51bWVyaWMgdmFsdWUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBkZWNvZGU2NChjaGFyYWN0ZXIpIHtcbiAgICBjb25zdCBQTFVTID0gJysnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgU0xBU0ggPSAnLycuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBMT1dFUiA9ICdhJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IFVQUEVSID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgUExVU19VUkxfU0FGRSA9ICctJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgY29kZSA9IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApO1xuXG4gICAgaWYgKGNvZGUgPT09IFBMVVMgfHwgY29kZSA9PT0gUExVU19VUkxfU0FGRSkge1xuICAgICAgcmV0dXJuIDYyOyAvLyBDaGFyICcrJy5cbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IFNMQVNIIHx8IGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKSB7XG4gICAgICByZXR1cm4gNjM7IC8vIENoYXIgJy8nLlxuICAgIH1cbiAgICBpZiAoY29kZSA8IE5VTUJFUikge1xuICAgICAgcmV0dXJuIC0xOyAvLyBObyBtYXRjaC5cbiAgICB9XG4gICAgaWYgKGNvZGUgPCBOVU1CRVIgKyAxMCkge1xuICAgICAgcmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2O1xuICAgIH1cbiAgICBpZiAoY29kZSA8IFVQUEVSICsgMjYpIHtcbiAgICAgIHJldHVybiBjb2RlIC0gVVBQRVI7XG4gICAgfVxuICAgIGlmIChjb2RlIDwgTE9XRVIgKyAyNikge1xuICAgICAgcmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYmFzZTY0IHN0cmluZyB0byBhIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYjY0U3RyaW5nIC0gYmFzZTY0IHN0cmluZy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIGRpbWVuc2lvbiBvZiBieXRlIGFycmF5IChieSBkZWZhdWx0IHdob2xlIHN0cmluZykuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSB0aGUgcmVzdWx0YW50IGJ5dGUgYXJyYXkuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBiNjRUb0J5dGVBcnJheShiNjRTdHJpbmcsIGxlbmd0aCkge1xuICAgIGxldCB0bXA7XG5cbiAgICBpZiAoYjY0U3RyaW5nLmxlbmd0aCAlIDQgPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKTsgLy8gVGlwcGVkIGJhc2U2NC4gTGVuZ3RoIGlzIGZpeGVkLlxuICAgIH1cblxuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgbGV0IGw7XG4gICAgbGV0IHBsYWNlSG9sZGVycztcbiAgICBpZiAoIWxlbmd0aCkgeyAvLyBBbGwgYjY0U3RyaW5nIHN0cmluZy5cbiAgICAgIGlmIChiNjRTdHJpbmcuY2hhckF0KGI2NFN0cmluZy5sZW5ndGggLSAyKSA9PT0gJz0nKSB7XG4gICAgICAgIHBsYWNlSG9sZGVycyA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGI2NFN0cmluZy5jaGFyQXQoYjY0U3RyaW5nLmxlbmd0aCAtIDEpID09PSAnPScpIHtcbiAgICAgICAgcGxhY2VIb2xkZXJzID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlSG9sZGVycyA9IDA7XG4gICAgICB9XG4gICAgICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NFN0cmluZy5sZW5ndGggLSA0IDogYjY0U3RyaW5nLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSArPSA0KSB7XG4gICAgICAvLyBJZ25vcmluZyBjb2RlIGNoZWNrZXIgc3RhbmRhcmRzIChiaXRld2lzZSBvcGVyYXRvcnMpLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vdHJhY2tlci5tb29kbGUub3JnL2Jyb3dzZS9DT05UUklCLTU4NjIgZm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24uXG4gICAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlU3RhcnRcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAxOCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKFV0aWwuZGVjb2RlNjQoYjY0U3RyaW5nLmNoYXJBdChpICsgMikpIDw8IDYpIHwgVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAzKSk7XG5cbiAgICAgIGFyci5wdXNoKCh0bXAgPj4gMTYpICYgMHhGRik7XG4gICAgICBhcnIucHVzaCgodG1wID4+IDgpICYgMHhGRik7XG4gICAgICBhcnIucHVzaCh0bXAgJiAweEZGKTtcbiAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgICB9XG5cbiAgICBpZiAocGxhY2VIb2xkZXJzKSB7XG4gICAgICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgICAgIC8vIElnbm9yaW5nIGNvZGUgY2hlY2tlciBzdGFuZGFyZHMgKGJpdGV3aXNlIG9wZXJhdG9ycykuXG4gICAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVTdGFydFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAyKSB8IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDEpKSA+PiA0KTtcbiAgICAgICAgYXJyLnB1c2godG1wICYgMHhGRik7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAxMCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAyKSkgPj4gMik7XG4gICAgICAgIGFyci5wdXNoKCh0bXAgPj4gOCkgJiAweEZGKTtcbiAgICAgICAgYXJyLnB1c2godG1wICYgMHhGRik7XG4gICAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCAzMi1iaXQgc2lnbmVkIGludGVnZXIgZnJvbSBhIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGJ5dGVzIC0gYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSAzMi1iaXQgc2lnbmVkIGludGVnZXIuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZWFkSW50MzIoYnl0ZXMpIHtcbiAgICBpZiAoYnl0ZXMubGVuZ3RoIDwgNCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbnQzMiA9IGJ5dGVzLnNwbGljZSgwLCA0KTtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlU3RhcnTCoVxuICAgIHJldHVybiAoaW50MzJbMF0gPDwgMjQgfCBpbnQzMlsxXSA8PCAxNiB8IGludDMyWzJdIDw8IDggfCBpbnQzMlszXSA8PCAwKTtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgZmlyc3QgYnl0ZSBmcm9tIGEgYnl0ZSBhcnJheS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGJ5dGVzIC0gaW5wdXQgYnl0ZSBhcnJheS5cbiAgICogQHJldHVybnMge251bWJlcn0gZmlyc3QgYnl0ZSBvZiB0aGUgYnl0ZSBhcnJheS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlYWRCeXRlKGJ5dGVzKSB7XG4gICAgLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZVN0YXJ0XG4gICAgcmV0dXJuIGJ5dGVzLnNoaWZ0KCkgPDwgMDtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIGJ5dGVzLCBmcm9tIGEgZml4ZWQgcG9zaXRpb24gb24gYSBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gYnl0ZXMgLSBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHBvcyAtIHN0YXJ0IHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGxlbiAtIG51bWJlciBvZiBieXRlcyB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0W119IHRoZSBieXRlIGFycmF5LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcmVhZEJ5dGVzKGJ5dGVzLCBwb3MsIGxlbikge1xuICAgIHJldHVybiBieXRlcy5zcGxpY2UocG9zLCBsZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgb3IgbW9kaWZpZXMgZm9ybXVsYXMgb3IgQ0FTIG9uIGEgdGV4dGFyZWEuXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dGFyZWEgLSB0ZXh0YXJlYSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBhZGQgaW4gdGhlIHRleHRhcmVhLiBGb3IgZXhhbXBsZSwgdG8gYWRkIHRoZSBsaW5rIHRvIHRoZSBpbWFnZSxcbiAgICogY2FsbCB0aGlzIGZ1bmN0aW9uIGFzICh0ZXh0YXJlYSwgUGFyc2VyLmNyZWF0ZUltYWdlU3JjKG1hdGhtbCkpO1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgdXBkYXRlVGV4dEFyZWEodGV4dGFyZWEsIHRleHQpIHtcbiAgICBpZiAodGV4dGFyZWEgJiYgdGV4dCkge1xuICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcblxuICAgICAgaWYgKHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0ICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25FbmQgfSA9IHRleHRhcmVhO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRleHRhcmVhLnZhbHVlLnN1YnN0cmluZygwLCB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZFN1YiA9IHRleHRhcmVhLnZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb25FbmQsIHRleHRhcmVhLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gc2VsZWN0aW9uU3RhcnQgKyB0ZXh0ICsgc2VsZWN0aW9uRW5kU3ViO1xuICAgICAgICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQgKyB0ZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuICAgICAgICBzZWxlY3Rpb24udGV4dCA9IHRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmaWVzIGV4aXN0aW5nIGZvcm11bGEgb24gYSB0ZXh0YXJlYS5cbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0YXJlYSAtIHRleHQgYXJlYSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBhZGQgaW4gdGhlIHRleHRhcmVhLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gYWRkIHRoZSBsaW5rXG4gICAqIHRvIHRoZSBpbWFnZSx5b3UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBhc1xuICAgKiBVdGlsLnVwZGF0ZVRleHRhcmVhKHRleHRhcmVhLCBQYXJzZXIuY3JlYXRlSW1hZ2VTcmMobWF0aG1sKSk7XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIGJlZ2lubmluZyBpbmRleCBmcm9tIHRleHRhcmVhIHdoZXJlIGl0IG5lZWRzIHRvIGJlIHJlcGxhY2VkIGJ5IHRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBlbmRpbmcgaW5kZXggZnJvbSB0ZXh0YXJlYSB3aGVyZSBpdCBuZWVkcyB0byBiZSByZXBsYWNlZCBieSB0ZXh0XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cGRhdGVFeGlzdGluZ1RleHRPblRleHRhcmVhKHRleHRhcmVhLCB0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgICBjb25zdCB0ZXh0YXJlYVN0YXJ0ID0gdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KTtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHRleHRhcmVhU3RhcnQgKyB0ZXh0ICsgdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKGVuZCwgdGV4dGFyZWEudmFsdWUubGVuZ3RoKTtcbiAgICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBzdGFydCArIHRleHQubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBhcmFtZXRlciB3aXRoIGl0J3MgY29ycmVzcG9uZGVudCB2YWx1ZSB0byBhbiBVUkwgKEdFVCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVVJMIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlciAtIHBhcmFtZXRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkQXJndW1lbnQocGF0aCwgcGFyYW1ldGVyLCB2YWx1ZSkge1xuICAgIGxldCBzZXA7XG4gICAgaWYgKHBhdGguaW5kZXhPZignPycpID4gMCkge1xuICAgICAgc2VwID0gJyYnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXAgPSAnPyc7XG4gICAgfVxuICAgIHJldHVybiBgJHtwYXRoICsgc2VwICsgcGFyYW1ldGVyfT0ke3ZhbHVlfWA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOlsiVGV4dENhY2hlIiwiU2VydmljZVByb3ZpZGVyIiwiTWF0aE1MIiwiU3RyaW5nTWFuYWdlciIsIkFjY2Vzc2liaWxpdHkiLCJjYWNoZSIsIl9jYWNoZSIsInZhbHVlIiwibWF0aE1MVG9BY2Nlc3NpYmxlIiwibWF0aE1MIiwibGFuZ3VhZ2UiLCJkYXRhIiwiY29udGFpbkNsYXNzIiwibW9kZSIsImlnbm9yZVN0eWxlcyIsImFjY2Vzc2libGVUZXh0IiwiZ2V0Iiwic2VydmljZSIsImxhbmciLCJhY2Nlc3NpYmxlSnNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZ2V0U2VydmljZSIsInN0YXR1cyIsInJlc3VsdCIsInRleHQiLCJwb3B1bGF0ZSIsIkNvbmZpZ3VyYXRpb24iLCJhZGRDb25maWd1cmF0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsIl9wcm9wZXJ0aWVzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2V0IiwidXBkYXRlIiwicHJvcGVydHlWYWx1ZSIsInVwZGF0ZVByb3BlcnR5IiwiQ29uc3RhbnRzIiwic2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcyIsInRhZ09wZW5lciIsInRhZ0Nsb3NlciIsImRvdWJsZVF1b3RlIiwicmVhbERvdWJsZVF1b3RlIiwic2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzIiwibHRFbGVtZW50IiwiZ3RFbGVtZW50IiwiYW1wRWxlbWVudCIsInNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMiLCJ4bWxDaGFyYWN0ZXJzIiwiaWQiLCJhbXBlcnNhbmQiLCJxdW90ZSIsInNhZmVYbWxDaGFyYWN0ZXJzIiwiVXRpbCIsIkltYWdlIiwicmVtb3ZlSW1nRGF0YUF0dHJpYnV0ZXMiLCJpbWciLCJhdHRyaWJ1dGVzVG9SZW1vdmUiLCJhdHRyaWJ1dGVzIiwia2V5cyIsImZvckVhY2giLCJhdHRyaWJ1dGUiLCJ1bmRlZmluZWQiLCJuYW1lIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbG9uZSIsIm9yaWdpbkltZyIsImRlc3RJbWciLCJjdXN0b21FZGl0b3JBdHRyaWJ1dGVOYW1lIiwiaGFzQXR0cmlidXRlIiwibWF0aG1sQXR0cmlidXRlTmFtZSIsImltZ0F0dHJpYnV0ZXMiLCJpdGVyYXRvciIsIm9yaWdpbkF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNldEltZ1NpemUiLCJ1cmkiLCJqc29uUmVzcG9uc2UiLCJhciIsImJhc2U2NFN0cmluZyIsImJ5dGVzIiwic3ZnU3RyaW5nIiwiZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmciLCJzcmMiLCJzdWJzdHIiLCJsZW5ndGgiLCJiNjRUb0J5dGVBcnJheSIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJnZXRNZXRyaWNzRnJvbUJ5dGVzIiwidXJsVG9Bc3NBcnJheSIsIndpZHRoIiwiY3ciLCJoZWlnaHQiLCJjaCIsImJhc2VsaW5lIiwiY2IiLCJkcGkiLCJzdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJmaXhBZnRlclJlc2l6ZSIsIm1heFdpZHRoIiwicHJvY2Vzc0ltZyIsInN1YnN0cmluZyIsIndpbmRvdyIsImF0b2IiLCJlbmNvZGVkU3ZnU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3ZnIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYmFzZTY0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZldGNoIiwidGhlbiIsInIiLCJibG9iIiwicmVhZEFzRGF0YVVSTCIsImZpcnN0IiwibGFzdCIsImFyciIsInJlYWRCeXRlcyIsInR5cCIsInJlYWRJbnQzMiIsInJlYWRCeXRlIiwiTWF0aCIsInJvdW5kIiwiTGF0ZXgiLCJnZXRMYXRleEZyb21NYXRoTUwiLCJtYXRobWwiLCJtYXRobWxXaXRob3V0U2VtYW50aWNzIiwicmVtb3ZlU2VtYW50aWNzIiwibW1sIiwibGF0ZXgiLCJsYXRleEh0bWxFbnRpdGllc0VuY29kZWQiLCJodG1sRW50aXRpZXMiLCJtYXRobWxXaXRoU2VtYW50aWNzIiwiYWRkQW5ub3RhdGlvbiIsImdldE1hdGhNTEZyb21MYXRleCIsImluY2x1ZGVMYXRleE9uU2VtYW50aWNzIiwibGF0ZXhDYWNoZSIsInNhdmVMYXRleCIsIm91dHB1dCIsInNwbGl0Iiwiam9pbiIsImNvbnRlbnQiLCJwYXJzZU1hdGhtbFRvTGF0ZXgiLCJjaGFyYWN0ZXJzIiwibWF0aFRhZ0JlZ2luIiwibWF0aFRhZ0VuZCIsIm9wZW5UYXJnZXQiLCJjbG9zZVRhcmdldCIsInN0YXJ0IiwiZW5kIiwic3RhcnRBbm5vdGF0aW9uIiwiY2xvc2VBbm5vdGF0aW9uIiwic2FmZVhtbERlY29kZSIsImdldExhdGV4RnJvbVRleHROb2RlIiwidGV4dE5vZGUiLCJjYXJldFBvc2l0aW9uIiwibGF0ZXhUYWdzIiwiZGVmYXVsdExhdGV4VGFncyIsIm9wZW4iLCJjbG9zZSIsInN0YXJ0Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZ2V0TmV4dExhdGV4UG9zaXRpb24iLCJjdXJyZW50Tm9kZSIsImN1cnJlbnRQb3NpdGlvbiIsInRhZyIsInBvc2l0aW9uIiwibm9kZVZhbHVlIiwibmV4dFNpYmxpbmciLCJub2RlIiwiaXNQcmV2aW91cyIsImVuZE5vZGUiLCJlbmRQb3NpdGlvbiIsInRhZ0xlbmd0aCIsImluZGV4Iiwic3RhcnRQb3NpdGlvbiIsIkxpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwibGlzdGVuZXJzIiwiYWRkIiwibGlzdGVuZXIiLCJmaXJlIiwiZXZlbnROYW1lIiwiZXZlbnQiLCJjYW5jZWxsZWQiLCJjYWxsYmFjayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJuZXdMaXN0ZW5lciIsImlzTWF0aG1sSW5BdHRyaWJ1dGUiLCJtYXRoQXR0IiwiYXR0Q29udGVudCIsImF0dCIsImF0dHMiLCJyZWdleCIsImV4cHJlc3Npb24iLCJSZWdFeHAiLCJhY3R1YWxDb250ZW50IiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwiZXhpc3RzIiwidGVzdCIsImlucHV0IiwiX3dyc19ibGFja2JvYXJkIiwicmV0dXJuVmFsdWUiLCJjdXJyZW50RW50aXR5IiwiY2hhcmFjdGVyIiwiY2hhckF0IiwibWF0Y2giLCJzYWZlWG1sRW5jb2RlIiwibWF0aE1MRW50aXRpZXMiLCJ0b1JldHVybiIsImNvZGVQb2ludEF0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZml4ZWRDaGFyQ29kZUF0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJhZGRDdXN0b21FZGl0b3JDbGFzc0F0dHJpYnV0ZSIsImN1c3RvbUVkaXRvciIsInJlbW92ZUN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlIiwicmVwbGFjZSIsImFubm90YXRpb25FbmNvZGluZyIsImNvbnRhaW5zQW5ub3RhdGlvbiIsIm1hdGhtbFdpdGhBbm5vdGF0aW9uIiwiY2xvc2VTZW1hbnRpY3NJbmRleCIsImlzRW1wdHkiLCJlbmRJbmRleElubGluZSIsImVuZEluZGV4Tm9uSW5saW5lIiwiZW5kSW5kZXgiLCJiZWdpbk1hdGhNTENvbnRlbnQiLCJlbmRNYXRobWxDb250ZW50IiwibGFzdEluZGV4T2YiLCJtYXRobWxDb250ZW50IiwicmVtb3ZlQW5ub3RhdGlvbiIsIm1hdGhtbFdpdGhvdXRBbm5vdGF0aW9uIiwib3BlbkFubm90YXRpb25UYWciLCJjbG9zZUFubm90YXRpb25UYWciLCJzdGFydEFubm90YXRpb25JbmRleCIsImRpZmZlcmVudEFubm90YXRpb25Gb3VuZCIsImRpZmZlcmVudEFubm90YXRpb25JbmRleCIsImNsb3NlSW5kZXgiLCJlbmRBbm5vdGF0aW9uSW5kZXgiLCJzdGFydEluZGV4Iiwic2VtYW50aWNzU3RhcnRpbmdUYWdSZWdleCIsInNlbWFudGljc0VuZGluZ1RhZ1JlZ2V4IiwicmVtb3ZlU2VtYW50aWNzT2N1cnJlbmNlcyIsIm1hdGhUYWdTdGFydCIsIm1hdGhUYWdFbmRsaW5lIiwic2VtYW50aWNzVGFnU3RhcnQiLCJhbm5vdGF0aW9uVGFnU3RhcnQiLCJtYXRoVGFnRW5kSW5kZXgiLCJtYXRoVGFnRW5kbGluZUluZGV4IiwiZmlyc3RUYWdDbG9zZXIiLCJzZW1hbnRpY3NJbmRleCIsIm1tbFRhZ1N0YXJ0IiwiYW5ub3RhdGlvbkluZGV4IiwibW1sQ29udGVudCIsImNsYXNzTmFtZSIsImNsYXNzSW5kZXgiLCJjbGFzc1RhZ0VuZEluZGV4IiwiY2xhc3NUYWciLCJjbG9zZVRhZyIsImNsb3NlVGFnSW5saW5lIiwiZmlyc3RDbG9zZVRhZ0luZGV4IiwiZmlyc3RDbG9zZVRhZ0lubGluZUluZGV4IiwiZW1wdHkiLCJtYXRoVGFnRW5kUmVnZXgiLCJtYXRoVGFnRW5kQXJyYXkiLCJleGVjIiwiZW5jb2RlUHJvcGVydGllcyIsInJlcGxhY2VyIiwicXVvdGVJbmRleCIsInByb3BlcnR5VmFsdWVFbmNvZGVkIiwibWF0Y2hFbmNvZGVkIiwibWF0aG1sRW5jb2RlZCIsIm1kNSIsIkh4T3ZlcnJpZGVzIiwiX19uYW1lX18iLCJkYXRlU3RyIiwiZGF0ZSIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibWkiLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsInN0ckRhdGUiLCJrIiwiRGF0ZSIsInNldFRpbWUiLCJzZXRVVENIb3VycyIsInNldFVUQ01pbnV0ZXMiLCJzZXRVVENTZWNvbmRzIiwieSIsInQiLCJjY2EiLCJ4IiwiY2hhckNvZGVBdCIsInBvcyIsImxlbiIsInJlbW92ZSIsImEiLCJvYmoiLCJsIiwic3BsaWNlIiwiaXRlciIsImN1ciIsImhhc05leHQiLCJuZXh0IiwiSW50SXRlciIsIm1pbiIsIm1heCIsIl9fY2xhc3NfXyIsIlN0ZCIsInYiLCJqcyIsIkJvb3QiLCJfX2luc3RhbmNlb2YiLCJzdHJpbmciLCJfX3N0cmluZ19yZWMiLCJwYXJzZUludCIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJhbmRvbSIsImZsb29yIiwiY29tIiwid2lyaXMiLCJKc1BsdWdpblRvb2xzIiwidHJ5UmVhZHkiLCJtYWluIiwiZXYiLCJnZXRJbnN0YW5jZSIsImhheGUiLCJUaW1lciIsImRlbGF5IiwiJGJpbmQiLCJpbnN0YW5jZSIsImJ5cGFzc0VuY2Fwc3VsYXRpb24iLCJtZDVlbmNvZGUiLCJNZDUiLCJlbmNvZGUiLCJkb0xvYWQiLCJyZWFkeSIsIkxpYiIsInJlYWR5U3RhdGUiLCJMb2ciLCJ0cmFjZSIsImluZm9zIiwiX190cmFjZSIsImNsZWFyIiwiX19jbGVhcl90cmFjZSIsImRvRW5jb2RlIiwic3RyIiwic3RyMmJsa3MiLCJiIiwiYyIsInN0ZXAiLCJvbGRhIiwib2xkYiIsIm9sZGMiLCJvbGRkIiwiZmYiLCJnZyIsImhoIiwiaWkiLCJhZGRtZSIsInJoZXgiLCJjbW4iLCJiaXRYT1IiLCJiaXRPUiIsImJpdEFORCIsInEiLCJyb2wiLCJudW0iLCJjbnQiLCJuYmxrIiwiYmxrcyIsIkFycmF5IiwiX2cxIiwiX2ciLCJoZXhfY2hyIiwiaiIsImxzdyIsIm1zdyIsImxzYiIsIm1zYjMxIiwidGltZV9tcyIsIm1lIiwic2V0SW50ZXJ2YWwiLCJydW4iLCJmIiwic3RvcCIsIm1lYXN1cmUiLCJ0MCIsInN0YW1wIiwiZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJfX3VuaHRtbCIsIm1zZyIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzQ2xhc3MiLCJvIiwiaXNFbnVtIiwiZSIsIl9fZW5hbWVfXyIsImdldENsYXNzIiwiX19lbnVtX18iLCJpMSIsInRvc3RyIiwidG9TdHJpbmciLCJzMiIsImhhc3AiLCJfX2ludGVyZkxvb3AiLCJjYyIsImNsIiwiaW50ZiIsIl9faW50ZXJmYWNlc19fIiwiX19zdXBlcl9fIiwiSW50IiwiY2VpbCIsIkZsb2F0IiwiQm9vbCIsIkR5bmFtaWMiLCJDbGFzcyIsIkVudW0iLCJfX2Nhc3QiLCJkZWJ1ZyIsImFsZXJ0IiwiZXZhbCIsImNvZGUiLCJzZXRFcnJvckhhbmRsZXIiLCJvbmVycm9yIiwiJF8iLCJtZXRob2QiLCJhcHBseSIsInNjb3BlIiwiYXJndW1lbnRzIiwiTmFOIiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJQT1NJVElWRV9JTkZJTklUWSIsImlzRmluaXRlIiwiQm9vbGVhbiIsIlZvaWQiLCJ1cmwiLCJsaW5lIiwiUGFyc2VyIiwibWF0aG1sVG9JbWdPYmplY3QiLCJjcmVhdG9yIiwid2lyaXNQcm9wZXJ0aWVzIiwiaW1nT2JqZWN0IiwiYWxpZ24iLCJ3aXJpc0VkaXRvclByb3BlcnRpZXMiLCJtZXRyaWNzIiwiY2VudGVyYmFzZWxpbmUiLCJtYXRobWxTdWJzdHJpbmciLCJjcmVhdGVTaG93SW1hZ2VTcmMiLCJmb3JtYXQiLCJ1cmxFbmNvZGUiLCJhbHQiLCJjcmVhdGVJbWFnZVNyYyIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsImJhc2VQYXJ0cyIsImdldFNlcnZpY2VQYXRoIiwicG9wIiwiaW5pdFBhcnNlIiwiaW5pdFBhcnNlU2F2ZU1vZGUiLCJpbml0UGFyc2VFZGl0TW9kZSIsInBhcnNlTWF0aG1sVG9JbWciLCJjb2RlSW1nVHJhbnNmb3JtIiwiaW1nTGlzdCIsImdldEVsZW1lbnRzQnlOYW1lRnJvbVN0cmluZyIsInRva2VuIiwiY2FycnkiLCJpbWdDb2RlIiwibWF0aG1sU3RhcnRUb2tlbiIsIm1hdGhtbFN0YXJ0IiwibWF0aG1sRW5kIiwiaHRtbFNhbml0aXplIiwibGF0ZXhTdGFydFBvc2l0aW9uIiwibGF0ZXhFbmRQb3NpdGlvbiIsInJlcGxhY2VUZXh0IiwiaHRtbEVudGl0aWVzRGVjb2RlIiwiZW5kUGFyc2UiLCJjb2RlRW5kUGFyc2VkRWRpdE1vZGUiLCJlbmRQYXJzZUVkaXRNb2RlIiwiY29kZUVuZFBhcnNlU2F2ZU1vZGUiLCJlbmRQYXJzZVNhdmVNb2RlIiwiZGVjb2RlZExhdGV4IiwiY3JlYXRlU2hvd0ltYWdlU3JjRGF0YSIsImRhdGFNZDUiLCJyZW5kZXJQYXJhbXMiLCJwYXJhbSIsImRhdGFPYmplY3QiLCJmb3JtdWxhIiwicHJvcGVydGllc1RvU3RyaW5nIiwidmVyc2lvbiIsImh0dHBCdWlsZFF1ZXJ5IiwicGF0dGVybiIsInBhdHRlcm5MZW5ndGgiLCJzb3VyY2UiLCJsYXN0SW5kZXgiLCJjaGFyYWN0ZXJOZXh0UG9zaXRpb24iLCJjcmVhdGVPYmplY3QiLCJ4bWxDb2RlIiwiY29udmVydFRvWG1sIiwiY29udmVydFRvU2FmZVhtbCIsImNyZWF0ZU9iamVjdENvZGUiLCJnZXRXSVJJU0ltYWdlT3V0cHV0IiwiaW1hZ2VNYXRobWxBdHJyaWJ1dGUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwib2xkVmFsdWUiLCJhdHRyaWJ1dGVOYW1lIiwidGFyZ2V0IiwiY3JlYXRlIiwiQ29uZmlnIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJnZXRQcm90b3R5cGVPZiIsIl9saXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImZpcmVFdmVudCIsInBhcmFtZXRlcnMiLCJfcGFyYW1ldGVycyIsInNlcnZpY2VQYXRocyIsIl9zZXJ2aWNlUGF0aHMiLCJzZXRTZXJ2aWNlUGF0aCIsInBhdGgiLCJzZXJ2aWNlTmFtZSIsImludGVncmF0aW9uUGF0aCIsIl9pbnRlZ3JhdGlvblBhdGgiLCJnZXRTZXJ2ZXJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJpbml0IiwiY29uZmlndXJhdGlvblVSSSIsImNyZWF0ZVNlcnZpY2VVUkkiLCJjcmVhdGVJbWFnZVVSSSIsInNob3dJbWFnZVVSSSIsImdldE1hdGhNTFVSSSIsInNlcnZpY2VVUkkiLCJVUkkiLCJzZXJ2ZXJQYXRoIiwiZ2V0VXJsIiwicG9zdFZhcmlhYmxlcyIsImN1cnJlbnRQYXRoIiwiaHR0cFJlcXVlc3QiLCJjcmVhdGVIdHRwUmVxdWVzdCIsImhlYWRlciIsIm1hcCIsImVsZW1lbnQiLCJ0cmltIiwidmFsIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsImdldFZhcmlhYmxlcyIsInNlcnZpY2VVcmwiLCJnZXRTZXJ2ZXJMYW5ndWFnZUZyb21TZXJ2aWNlIiwiZXh0ZW5zaW9uIiwic2VydmVyRXh0ZW5zaW9uIiwiY29uY2F0ZW5hdGVVcmwiLCJzZXJ2ZXIiLCJ0cmFuc2xhdGlvbnMiLCJFcnJvciIsInNsaWNlIiwic3RyaW5ncyIsIndhcm4iLCJET01QdXJpZnkiLCJldmVudFRhcmdldCIsImNyZWF0ZUV2ZW50IiwiZXZlbnRPYmplY3QiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJhZGRFdmVudCIsImNhbGxCYWNrRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImFkZEVsZW1lbnRFdmVudHMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2V1cEhhbmRsZXIiLCJjYWxsYmFja0RibGNsaWNrIiwicmVhbEV2ZW50Iiwic3JjRWxlbWVudCIsImNhbGxiYWNrTW91c2Vkb3duIiwiY2FsbGJhY2tNb3VzZXVwIiwicmVtb3ZlRWxlbWVudEV2ZW50cyIsImFkZENsYXNzIiwiY29udGFpbnNDbGFzcyIsImN1cnJlbnRDbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCJuZXdDbGFzc05hbWUiLCJjbGFzc2VzIiwiY29udmVydE9sZFhtbGluaXRpYWx0ZXh0QXR0cmlidXRlIiwieGl0cG9zIiwidmFscG9zIiwic3RhcnRxdW90ZSIsImVuZHF1b3RlIiwibmV3dmFsdWUiLCJ0YWdOYW1lIiwiaHRtbCIsIm9iamVjdENvZGUiLCJyZWN1cnNpdmVQYXJhbXNGaXgiLCJvYmplY3QiLCJhdHRyaWJ1dGVzUGFyc2VkIiwibm9kZU5hbWUiLCJOQU1FIiwiVkFMVUUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwbGV0IiwiY2hpbGROb2RlcyIsInRvTG93ZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJmaXJzdENoaWxkIiwic3BlY2lmaWVkIiwicGF0aDEiLCJwYXRoMiIsInNlcGFyYXRvciIsImFubm90YXRpb25SZWdleCIsImFubm90YXRpb24iLCJzYW5pdGl6ZSIsIkFERF9UQUdTIiwiQUxMT1dFRF9BVFRSIiwidGV4dGFyZWEiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvYyIsImhhc2giLCJuIiwiczEiLCJjb21wYXJlU3RyaW5ncyIsImFuIiwiYm4iLCJpZHgiLCJoaSIsImxvdyIsInF1ZXJ5Iiwic3MiLCJrdiIsImNsZWFyU3RyaW5nIiwiZGF0YU1hdGhNTCIsInNhZmVNYXRoTUwiLCJnZXROb2RlTGVuZ3RoIiwic3RhdGljTm9kZUxlbmd0aHMiLCJJTUciLCJCUiIsInRvVXBwZXJDYXNlIiwiZ2V0U2VsZWN0ZWRJdGVtIiwiaXNJZnJhbWUiLCJmb3JjZUdldFNlbGVjdGlvbiIsIndpbmRvd1RhcmdldCIsImNvbnRlbnRXaW5kb3ciLCJmb2N1cyIsInNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJwYXJlbnRFbGVtZW50IiwiaHRtbFRleHQiLCJleGVjQ29tbWFuZCIsInRlbXBvcmFsT2JqZWN0IiwicGFzdGVIVE1MIiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIml0ZW0iLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJzdGFydE9mZnNldCIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsImxvY2FsTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZW1wdHlTcGFuIiwiZ2V0U2VsZWN0ZWRJdGVtT25UZXh0YXJlYSIsInRleHROb2RlVmFsdWVzIiwic2VsZWN0aW9uU3RhcnQiLCJhdXRvQ2xvc2VkIiwiZWxlbWVudHMiLCJlbmRTdHJpbmciLCJkZWNvZGU2NCIsIlBMVVMiLCJTTEFTSCIsIk5VTUJFUiIsIkxPV0VSIiwiVVBQRVIiLCJQTFVTX1VSTF9TQUZFIiwiU0xBU0hfVVJMX1NBRkUiLCJiNjRTdHJpbmciLCJ0bXAiLCJwbGFjZUhvbGRlcnMiLCJpbnQzMiIsInNoaWZ0IiwidXBkYXRlVGV4dEFyZWEiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3Rpb25FbmRTdWIiLCJ1cGRhdGVFeGlzdGluZ1RleHRPblRleHRhcmVhIiwidGV4dGFyZWFTdGFydCIsImFkZEFyZ3VtZW50IiwicGFyYW1ldGVyIiwic2VwIl0sInNvdXJjZVJvb3QiOiIifQ==