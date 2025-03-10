module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-layers{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:100%}", ""]);

// exports


/***/ }),

/***/ "0b49":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3b4a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b8b31476", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3863");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d2d":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"再生\",\"pause\":\"一時停止\",\"fullscreen\":\"全画面\",\"exitFullscreen\":\"全画面をキャンセル\",\"mute\":\"ミュート\",\"unmute\":\"ミュートを解除\",\"back\":\"戻る\",\"pip\":\"ピクチャインピクチャ\"},\"settings\":{\"autoplay\":\"自動再生\",\"loop\":\"ループプレイ\",\"speed\":\"スピード\",\"resolution\":\"画質\"}},\"layers\":{\"error\":{\"2404\":\"ソースが見つかりません\",\"2502\":\"ネットワークエラー\",\"2503\":\"デコードエラー\",\"2504\":\"働いていない\",\"title\":\"(O_O)?  再生エラー!\"},\"loading\":{\"msg\":\"待っている ...\"}}}");

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0e5b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}", ""]);

// exports


/***/ }),

/***/ "0ee8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f31c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("20ebd1d3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1170":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".settings-control .btn-mute{display:none}.settings-control .btn-settings svg{width:24px;margin-top:-2px}.settings-control .btn-control-panel{display:block;right:0;left:auto;min-height:130px;-webkit-transform:translateX(0);transform:translateX(0)}.settings-control .btn-control-panel .current-panel{width:180px}.settings-control .btn-control-panel .resolution-list,.settings-control .btn-control-panel .speed-list{width:80px}.settings-control .btn-control-panel .resolution-list li,.settings-control .btn-control-panel .speed-list li{cursor:pointer}.settings-control .btn-control-panel .resolution-list li:first-child,.settings-control .btn-control-panel .speed-list li:first-child{margin-left:-20px;cursor:pointer}.vcp-m-dashboard .settings-control .btn-control-panel{z-index:20000;position:fixed;left:0;right:0;bottom:0}.vcp-m-dashboard .settings-control .btn-control-panel .current-panel{width:100%}.vcp-m-dashboard .settings-control .btn-control-panel .resolution-list,.vcp-m-dashboard .settings-control .btn-control-panel .speed-list{margin-left:20px}", ""]);

// exports


/***/ }),

/***/ "11de":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-controls{z-index:10;position:absolute;left:0;bottom:5px;width:100%;height:50px;text-align:left}.playback-control,.setting-control{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;height:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.playback-control{left:0}.setting-control{right:0}", ""]);

// exports


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12ae":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1170");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("280eb641", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "14ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "156e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("234e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullscreen_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1689":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cfb4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("169e5806", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1793":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__("6321");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "18ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "1a94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "1b6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff1c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picture_in_picture_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2031":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("14ab")() ? Object.assign : __webpack_require__("f60e");


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "22bf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-m-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.7),transparent)}.fullscreen .vcp-m-dashboard{bottom:12px}.small .vcp-m-dashboard{height:49px}.settings-open .vcp-m-dashboard{display:block!important}.small .vcp-m-dashboard .vcp-controls{height:40px}", ""]);

// exports


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2316":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".title-layer{z-index:11;text-align:left}.title-layer .video-title{position:absolute;top:0;left:0;right:0;padding:16px 20px;line-height:32px;font-size:14px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.7)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.7),transparent)}.fullscreen .title-layer .video-title{font-size:16px;font-weight:700}", ""]);

// exports


/***/ }),

/***/ "234e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("743b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("13d618fe", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "263c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".play-pause-layer{z-index:12;background:rgba(0,0,0,.25)}.play-pause-layer .btn-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;left:50%;width:60px;height:60px;margin-left:-30px;margin-top:-30px;background-color:#fff;border-radius:30px}.play-pause-layer .btn-control:before{content:\"\";display:block;position:absolute;top:50%;left:50%;width:72px;height:72px;margin-left:-36px;margin-top:-36px;border-radius:36px;background-color:hsla(0,0%,100%,.25)}.play-pause-layer .btn-play svg{margin-left:10px}", ""]);

// exports


/***/ }),

/***/ "2814":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px}.vue-core-video-player-control svg{width:20px}.volume-control:hover .btn-control-panel{display:block}.volume-control .btn-control-panel{display:none;width:40px;height:150px}.volume-control .btn-control-panel:before{content:\"\";display:block;position:absolute;bottom:-30px;left:0;width:100%;height:35px}.volume-control .btn-control-panel .progress{position:absolute;width:4px;height:100px;left:50%;top:50%;margin-left:-2px;margin-top:-50px;background-color:hsla(0,0%,100%,.7);cursor:pointer}.volume-control .btn-control-panel .progress .volume-current{position:absolute;bottom:0;left:0;height:0;width:100%;background-color:#ff6060}.volume-control .btn-control-panel .progress .volume-current .thumb-drag{opacity:0;position:absolute;left:50%;top:0;width:10px;height:10px;border-radius:5px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.volume-control .btn-control-panel .progress .volume-current .thumb-drag:before{content:\"\";display:inline-block;position:absolute;top:-2px;left:-2px;width:14px;height:14px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.volume-control .btn-control-panel .progress:hover .thumb-drag{opacity:1}.volume-control .btn-control-panel .volume-info{position:absolute;top:-30px;left:0;width:40px;height:20px;background-color:rgba(0,0,0,.7);border-radius:4px;font-size:12px;line-height:20px}.settings-open .volume-control:hover .btn-control-panel{display:none}", ""]);

// exports


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2be5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("07fa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6fa741d5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2c1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2be5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d60":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6f66");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("61ad65d7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "3863":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f232");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3b10f201", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control.timespan{line-height:30px;width:140px;font-family:Arial!important}", ""]);

// exports


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "42e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9c8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_volume_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4447":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6412");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_layer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4cc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c86");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5005":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("22bf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c17df316", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "5276":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".logo-layer{z-index:11;text-align:left}.logo-layer .logo-wrap{position:absolute;top:15px;right:15px;opacity:.7;text-align:right}.logo-layer .logo-wrap img{max-width:160px;height:48px}", ""]);

// exports


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5311":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b49");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_span_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5695":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e9d0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1c7c0837", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "56fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f922");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5edd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__("936a");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "62c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__("e76c")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "6321":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__("9013");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6412":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("263c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2625ca16", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6d0c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6ddc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f6023f92", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6ddc":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".loading-layer{z-index:16;background-color:#333}.loading-layer .loading-wrap{position:absolute;left:50%;top:50%;width:120px;height:80px;margin-top:-40px;margin-left:-60px;text-align:center}.loading-layer .h5-layer-loading{position:relative;width:40px;height:40px;margin:0 auto}.loading-layer .h5-layer-loading .spinner{backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite}.loading-layer .h5-layer-loading p{padding-top:20px}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.loading-layer .h5-layer-loading .path{stroke-dasharray:188.8;stroke-dashoffset:188.8;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1{-webkit-animation:dot1a 1.4s ease-in-out infinite;animation:dot1a 1.4s ease-in-out infinite}.loading-layer .h5-layer-loading .dot1,.loading-layer .h5-layer-loading .dot2{stroke-dasharray:188.8;stroke-dashoffset:187.8;-webkit-transform-origin:center;transform-origin:center}.loading-layer .h5-layer-loading .dot2{-webkit-animation:dot2a 1.4s ease-in-out infinite forwards;animation:dot2a 1.4s ease-in-out infinite forwards}@-webkit-keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:188.8}50%{stroke-dashoffset:47.2;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot1a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dot2a{0%{stroke-dashoffset:188.8;-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{stroke-dashoffset:187.8;-webkit-transform:rotate(415deg);transform:rotate(415deg)}to{stroke-dashoffset:188.8;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}", ""]);

// exports


/***/ }),

/***/ "6f66":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".cover-layer{z-index:11;background-color:#333}.cover-layer img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", ""]);

// exports


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "7335":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-pip svg{width:22px}", ""]);

// exports


/***/ }),

/***/ "7373":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__("62c4");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "743b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-fullscreen svg{width:20px}", ""]);

// exports


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7bdf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("ecf9")() ? Object.keys : __webpack_require__("7373");


/***/ }),

/***/ "7c86":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("11de");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8bc865d0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7fc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ab5c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controls_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "850d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-core-video-player-control .btn-pause{margin-left:20px}.vue-core-video-player-control .btn-pause svg{width:15px}.vue-core-video-player-control .btn-play{margin-left:20px}.vue-core-video-player-control .btn-play svg{width:16px}", ""]);

// exports


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "8615":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $values = __webpack_require__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9013":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("5edd");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "90e0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2316");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("41493392", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "936a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "9643":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("850d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("39384dc1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "96ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__("62c4");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9983":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2d60");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cover_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a3e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5005");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("12ae");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ab5c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0e5b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("76a6120a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "add7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dc03");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("26edf8bf", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b1ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d0c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b5de":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-container{position:relative;margin:0 auto}.vcp-container,.vcp-container video{width:100%;height:100%;background-color:#000}", ""]);

// exports


/***/ }),

/***/ "b72f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("90e0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bead":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0b7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_core_video_player_vue_vue_type_style_index_0_land_less_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c428":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1689");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_switch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c9fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d        = __webpack_require__("f508")
  , callable = __webpack_require__("1a94")

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cc1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ee8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cfb4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-switch{display:inline-block;position:relative;width:40px;height:16px;border-radius:8px;background-color:#fff;cursor:pointer}.vcp-switch:after{content:\"\";display:inline-block;position:absolute;top:1px;left:2px;width:14px;height:14px;border-radius:7px;background-color:#ff6060;-webkit-transition:left .2s ease-in .05s;transition:left .2s ease-in .05s}.vcp-switch.open:after{left:23px}", ""]);

// exports


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d658":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9643");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_play_pause_control_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc03":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.vcp-layer{position:absolute;top:0;bottom:0;right:0;left:0;color:#fff;font-weight:400}.vcp-layer div,.vcp-layer svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vcp-icon{display:inline-block}.vue-core-video-player-control{display:inline-block;position:relative;width:30px;height:30px;margin-right:20px;font-size:13px;color:#fff}.vcp-m-dashboard .vue-core-video-player-control{margin-right:10px}.btn-control-panel{position:absolute;left:50%;bottom:54px;padding:20px;min-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:4px;font-weight:500}.btn-control-panel li,.btn-control-panel ul{margin:0;padding:0;text-align:center}.btn-control-panel ul li{list-style:none;height:30px;line-height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.btn-control-panel ul li .item-name{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start}.btn-control-panel ul li .item-control{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;line-height:30px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.btn-control,.btn-control-panel ul li .item-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btn-control{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px}.btn-control:focus{background:none;outline-style:none}.btn-control .tips{display:none;position:absolute;min-width:30px;padding:4px;border-radius:2px;bottom:54px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;color:hsla(0,0%,100%,.7);background-color:rgba(0,0,0,.7);text-align:center;line-height:1.2;word-break:keep-all;word-wrap:no-wrap;white-space:nowrap;opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.btn-control svg{opacity:.85;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.btn-control:hover svg{opacity:1}.btn-control:hover .tips{display:block;opacity:1}", ""]);

// exports


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e312":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"Play\",\"pause\":\"Pause\",\"fullscreen\":\"Full Screen\",\"exitFullscreen\":\"Exit Full Screen\",\"mute\":\"Mute\",\"unmute\":\"Unmute\",\"back\":\"Back\",\"pip\":\"Picture-in-Picture\"},\"settings\":{\"autoplay\":\"Autoplay\",\"loop\":\"Loop\",\"speed\":\"Speed\",\"resolution\":\"Resolution\"}},\"layers\":{\"error\":{\"2404\":\"Video Source Not Found\",\"2502\":\"Media Network Error\",\"2503\":\"Video Cannot DECODE\",\"2504\":\"Video Cannot Play!\",\"title\":\"(O_O)?  Error!\"},\"loading\":{\"msg\":\"Loading ...\"}}}");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e76c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "e9c8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2814");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("d37f223e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e9d0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".error-layer{z-index:12;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);background-color:#333;background-repeat:repeat;text-align:center}.error-layer .error-icon{width:194px;margin:-40px auto 0}.error-layer .error-msg{color:hsla(0,0%,100%,.7)}", ""]);

// exports


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ecf9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "f0b7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b5de");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("9172fcae", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f201":
/***/ (function(module) {

module.exports = JSON.parse("{\"dashboard\":{\"btn\":{\"play\":\"播放\",\"pause\":\"暂停\",\"fullscreen\":\"全屏\",\"exitFullscreen\":\"退出全屏\",\"mute\":\"静音\",\"unmute\":\"取消静音\",\"back\":\"返回\",\"pip\":\"画中画模式\"},\"settings\":{\"autoplay\":\"自动播放\",\"loop\":\"循环播放\",\"speed\":\"播放速度\",\"resolution\":\"清晰度\"}},\"layers\":{\"error\":{\"2404\":\"找不到播放视频\",\"2502\":\"播放网络异常\",\"2503\":\"视频无法解码\",\"2504\":\"视频无法正常播放\",\"title\":\"(O_O)?  播放错误!\"},\"loading\":{\"msg\":\"加载中 ...\"}}}");

/***/ }),

/***/ "f232":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-progress-hover{position:absolute;bottom:100%;left:0;height:12px;width:100%;cursor:pointer}.vcp-progress-hover .vcp-progress{position:absolute;bottom:0;left:0;height:4px;width:100%;background-color:hsla(0,0%,100%,.3);-webkit-transition:height .2s ease .05s;transition:height .2s ease .05s}.vcp-progress-hover:hover .vcp-progress{height:6px}.vcp-progress-hover:hover .vcp-progress .thumb-drag{opacity:1}.vcp-progress-loaded,.vcp-progress-played,.vcp-progress-ranged{position:absolute;top:0;left:0;width:0;height:100%;background-color:hsla(0,0%,100%,.7)}.vcp-progress-loaded{-webkit-transition:width .1s cubic-bezier(.4,0,1,1);transition:width .1s cubic-bezier(.4,0,1,1)}.vcp-progress-ranged{width:0;background-color:#009600}.vcp-progress-played{width:0;background-color:#ff6060}.vcp-progress-played .thumb-drag{opacity:0;position:absolute;right:0;top:50%;width:12px;height:12px;border-radius:6px;background-color:#fff;-webkit-transform:translateY(-50%) translateX(50%);transform:translateY(-50%) translateX(50%);-webkit-transition:height .05s ease .15s;transition:height .05s ease .15s}.vcp-progress-played .thumb-drag:before{content:\"\";display:inline-block;position:absolute;top:-2px;left:-2px;width:16px;height:16px;border-radius:7px;background-color:hsla(0,0%,100%,.3)}.vcp-m-dashboard .vcp-progress-hover{bottom:0}.vcp-m-dashboard .vcp-progress-hover .vcp-progress{height:3px}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag{background-color:#ff6060}.vcp-m-dashboard .vcp-progress-hover .vcp-progress-played .thumb-drag:before{background-color:#ff6060;opacity:.25}", ""]);

// exports


/***/ }),

/***/ "f31c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vcp-dashboard{z-index:11;position:absolute;left:0;bottom:0;width:100%;height:59px;background:rgba(0,0,0,.5)}.fullscreen .vcp-dashboard{bottom:60px;width:1182px;left:50%;margin-left:-591px}.small .vcp-dashboard{height:49px}.settings-open .vcp-dashboard{display:block!important}.small .vcp-dashboard .vcp-controls{height:40px}", ""]);

// exports


/***/ }),

/***/ "f3a6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__("62c4");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "f508":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue         = __webpack_require__("936a")
  , isPlainFunction = __webpack_require__("1793")
  , assign          = __webpack_require__("2031")
  , normalizeOpts   = __webpack_require__("f3a6")
  , contains        = __webpack_require__("f973");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "f60e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__("7bdf")
  , value = __webpack_require__("96ae")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "f64c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5695");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_layer_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "f922":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5276");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("22717135", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f967":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "f973":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("18ec")() ? String.prototype.contains : __webpack_require__("f967");


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./src/lang/zh-cn.json
var zh_cn = __webpack_require__("f201");

// EXTERNAL MODULE: ./src/lang/en.json
var en = __webpack_require__("e312");

// EXTERNAL MODULE: ./src/lang/jp.json
var jp = __webpack_require__("0d2d");

// CONCATENATED MODULE: ./src/helper/i18n.js





var globalLocale = {
  'zh-CN': zh_cn,
  'jp': jp,
  'en': en
};
var i18n = {
  t: function t(keyStr, defaultVal) {
    var keys = keyStr.split('.');
    var length = keys.length;
    var last = i18n.locale;

    for (var i = 0; i < length; i++) {
      if (last.hasOwnProperty(keys[i])) {
        last = last[keys[i]];
      }
    }

    return last || defaultVal;
  },
  setLocale: function setLocale(lang) {
    if (typeof_typeof(lang) === 'object') {
      i18n.locale = lang;
    } else {
      i18n.locale = globalLocale[lang || 'en'];
    }

    return i18n.locale;
  }
};
/* harmony default export */ var helper_i18n = (i18n);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-core-video-player.vue?vue&type=template&id=34a54337&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vcp-el",staticClass:"vcp-container"},[_c('video',{ref:"vcp-video",attrs:{"title":_vm.title,"cover":_vm.cover,"loop":_vm.loop,"playsinline":_vm.playsinline,"src":_vm.source}}),_c('Layers'),(!_vm.isMobile)?_c('Dashboard',{attrs:{"controls":_vm.controls,"muted":_vm.muted,"startRange":_vm.startRange,"rangeSize":_vm.rangeSize}}):_vm._e(),(_vm.isMobile)?_c('MobileDashboard',{attrs:{"controls":_vm.controls,"muted":_vm.muted}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-core-video-player.vue?vue&type=template&id=34a54337&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./src/style/common.less
var common = __webpack_require__("add7");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helper/index.js


// CONCATENATED MODULE: ./src/directives/i18n.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('t', {
  bind: function bind(el, binding) {
    el.innerText = helper_i18n.t(binding.expression);
  }
});
// CONCATENATED MODULE: ./src/directives/index.js

// CONCATENATED MODULE: ./src/constants/DEFAULT_CONFIG.js
var DEFAULT_CONFIG = {
  loop: false,
  volume: 1,
  muted: false,
  autoplay: false,
  preload: 'metadata',
  playList: [],
  safeBufferTime: 2,
  minPlayBufferTime: 1,
  resolution: '720p',
  dashboardHideDelay: 2500
};
/* harmony default export */ var constants_DEFAULT_CONFIG = (DEFAULT_CONFIG);
// CONCATENATED MODULE: ./src/constants/EVENTS.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { HLS_EVENTS} from './module/hls';
var ERROR = {
  ERROR_NO_MEDIA: 'ERROR_NO_MEDIA',
  ERROR_AUTO_PLAY: 'ERROR_AUTO_PLAY'
};
var LIFE_CYCLE = {
  LIFECYCLE_INITING: 'lifecycle_initing',
  LIFECYCLE_INITED: 'lifecycle_inited',
  LIFECYCLE_PARSED: 'lifecycle_parse',
  LIFECYCLE_STOP: 'lifecycle_stop'
};
var SOURCE = {
  SOURCE_UPDATED: 'SOURCE_UPDATED'
};
var UI = {
  // UI
  UI_DASHBOARD_SHOW: 'ui_dashboard_show',
  UI_DASHBOARD_HIDE: 'ui_dashboard_hide',
  UI_PLAY: 'ui_play',
  UI_PAUSE: 'ui_pause'
};

var EVENTS = _objectSpread({}, ERROR, {}, LIFE_CYCLE, {}, SOURCE, {}, UI, {
  SERVICE_LOADING: 'service_loading',
  SERVICE_ENDED: 'service_ended',
  LOADING_START: 'loading_start',
  LOADING_END: 'loading_end',
  // PLUGIN AND CORE
  CORE_TO_MP4: 'core_to_mp4',
  // media events
  PLAY: 'play',
  PAUSE: 'pause',
  LOADEDDATA: 'loadeddata',
  CANPLAY: 'canplay',
  CANPLAYTHROUGH: 'canplaythrough',
  ERROR: 'error',
  DURATIONCHANGE: 'durationchange',
  ENDED: 'ended',
  TIMEUPDATE: 'timeupdate',
  LOADEDMETADATA: 'loadedmetadata',
  WAITING: 'waiting',
  PLAYING: 'playing',
  RETRY: 'retry',
  SEEKED: 'seeked',
  SEEKING: 'seeking',
  VOLUMECHANGE: 'volumechange',
  EXIT: 'exit',
  PROGRESS: 'progress',
  STALLED: 'stalled',
  LOADSTART: 'loadstart',
  RESOLUTION_UPDATE: 'resolution_update' // hls events docs: https://github.com/video-dev/hls.js/blob/master/src/events.js
  // ...HLS_EVENTS

});

/* harmony default export */ var constants_EVENTS = (EVENTS);
// CONCATENATED MODULE: ./src/constants/ERROR_CODE.js
var ERROR_CODE = {
  NO_SOURCE: {
    code: '2404',
    msg: 'Prop `src` not found'
  },
  // Media Element
  2502: 'Media Network Error',
  2503: 'Video Cannot DECODE',
  2504: 'Video Cannot Play!',
  // JS runtime error
  2701: 'Parse Error',
  // not found reason
  2801: 'Not found reason'
};
/* harmony default export */ var constants_ERROR_CODE = (ERROR_CODE);
// CONCATENATED MODULE: ./src/constants/index.js



var CORE = {
  DASH: 'DASH',
  HLS: 'HLS',
  MP4: 'MP4'
};
var VIDEO_FORMAT = ['video/webm', 'video/mp4'];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/ismobilejs/esm/isMobile.js
const appleIphone = /iPhone/i;
const appleIpod = /iPod/i;
const appleTablet = /iPad/i;
const androidPhone = /\bAndroid(?:.+)Mobile\b/i;
const androidTablet = /Android/i;
const amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
const amazonTablet = /Silk/i;
const windowsPhone = /Windows Phone/i;
const windowsTablet = /\bWindows(?:.+)ARM\b/i;
const otherBlackBerry = /BlackBerry/i;
const otherBlackBerry10 = /BB10/i;
const otherOpera = /Opera Mini/i;
const otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
const otherFirefox = /Mobile(?:.+)Firefox\b/i;
function match(regex, userAgent) {
    return regex.test(userAgent);
}
function isMobile(userAgent) {
    userAgent =
        userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '');
    let tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    const result = {
        apple: {
            phone: match(appleIphone, userAgent) && !match(windowsPhone, userAgent),
            ipod: match(appleIpod, userAgent),
            tablet: !match(appleIphone, userAgent) &&
                match(appleTablet, userAgent) &&
                !match(windowsPhone, userAgent),
            device: (match(appleIphone, userAgent) ||
                match(appleIpod, userAgent) ||
                match(appleTablet, userAgent)) &&
                !match(windowsPhone, userAgent),
        },
        amazon: {
            phone: match(amazonPhone, userAgent),
            tablet: !match(amazonPhone, userAgent) && match(amazonTablet, userAgent),
            device: match(amazonPhone, userAgent) || match(amazonTablet, userAgent),
        },
        android: {
            phone: (!match(windowsPhone, userAgent) && match(amazonPhone, userAgent)) ||
                (!match(windowsPhone, userAgent) && match(androidPhone, userAgent)),
            tablet: !match(windowsPhone, userAgent) &&
                !match(amazonPhone, userAgent) &&
                !match(androidPhone, userAgent) &&
                (match(amazonTablet, userAgent) || match(androidTablet, userAgent)),
            device: (!match(windowsPhone, userAgent) &&
                (match(amazonPhone, userAgent) ||
                    match(amazonTablet, userAgent) ||
                    match(androidPhone, userAgent) ||
                    match(androidTablet, userAgent))) ||
                match(/\bokhttp\b/i, userAgent),
        },
        windows: {
            phone: match(windowsPhone, userAgent),
            tablet: match(windowsTablet, userAgent),
            device: match(windowsPhone, userAgent) || match(windowsTablet, userAgent),
        },
        other: {
            blackberry: match(otherBlackBerry, userAgent),
            blackberry10: match(otherBlackBerry10, userAgent),
            opera: match(otherOpera, userAgent),
            firefox: match(otherFirefox, userAgent),
            chrome: match(otherChrome, userAgent),
            device: match(otherBlackBerry, userAgent) ||
                match(otherBlackBerry10, userAgent) ||
                match(otherOpera, userAgent) ||
                match(otherFirefox, userAgent) ||
                match(otherChrome, userAgent),
        },
        any: false,
        phone: false,
        tablet: false,
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map
// CONCATENATED MODULE: ./node_modules/ismobilejs/esm/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./src/helper/type.js

function isNumber(num) {
  return typeof num === 'number';
}
;
function isString(str) {
  return typeof str === 'string';
}
;
function isObject(obj) {
  return obj && typeof_typeof(obj) === 'object';
}
;
function isFile(obj) {
  return obj instanceof File;
}
function type_isNaN(num) {
  // eslint-disable-next-line no-self-compare
  return typeof num === 'number' && num !== num;
}
// CONCATENATED MODULE: ./src/helper/util.js





var ua = navigator.userAgent.toLowerCase();
function isMobileInLandscapeOrientation() {
  // functionality required for mobile only
  if (!isMobile.any) {
    return true;
  } // use draft screen.orientation type to determine if mobile is landscape orientation


  var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;

  if (orientation) {
    if (orientation.type === 'landscape-primary' || orientation.type === 'landscape-secondary') {
      return true;
    } else if (orientation.type === 'portrait-secondary' || orientation.type === 'portrait-primary') {
      return false;
    }
  } // fall back to window.orientation


  if (!window.orientation) {
    return false;
  }

  var quadrant = Math.round(window.orientation / 90);

  while (quadrant < 0) {
    quadrant += 4;
  }

  while (quadrant >= 4) {
    quadrant -= 4;
  }

  return quadrant === 1 || quadrant === 3;
}
;
function generateID() {
  return 'xxxxxxxx-4xxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
;
function timeToSeconds(str) {
  var arr = str.split(':');
  return arr[0] * 3600 + arr[1] * 60 + arr[2] * 1;
}
;
function paddingLeadZero(num) {
  if (num < 10) {
    return "0".concat(num);
  }

  return num;
}
function secondsToTime(time, type) {
  time = parseInt(time);
  var s = time % 60;
  var h = parseInt(time / 3600);
  var m = parseInt(time % 3600 / 60);

  if (type === 'array') {
    return [h, m, s];
  }

  if (type === 'm:s') {
    m = parseInt(time / 60);
    return [m, s].map(function (item) {
      return paddingLeadZero(item);
    }).join(':');
  } // default h:m:s


  return [h, m, s].map(function (item) {
    return paddingLeadZero(item);
  }).join(':');
}
;
function getFormatBandwidth(speed) {
  if (!speed) {
    return '0 KB/s';
  }

  if (speed / 1024 / 1024 < 1) {
    return (speed / 1024).toFixed(2) + ' KB/s';
  } else {
    return (speed / 1024 / 1024).toFixed(2) + ' MB/s';
  }
}
function getElementOffsets(obj) {
  var left = 0;
  var top = 0;

  do {
    left += obj.offsetLeft;
    top += obj.offsetTop;
  } while (obj = obj.offsetParent);

  return {
    left: left,
    top: top
  };
}
;
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
function fallbackCopyTextToClipboard(text, callback) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    callback(msg);
  } catch (err) {
    console.warn('Cannot execCommand `copy`!');
  }

  document.body.removeChild(textArea);
}
;
function copyText(text) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }

  navigator.clipboard.writeText(text).then(function () {
    callback();
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}
;
function loadImage(src, done, errorCallback) {
  var image = new Image();
  image.src = src + '?_t=' + Math.floor(10000 * Math.random());

  image.onload = function () {
    done && done();
  };

  image.onerror = function (e) {
    errorCallback && errorCallback(e);
  };
}
;

var _isSafari = function _isSafari() {
  return navigator.userAgent.indexOf('Safari') > -1;
};

function debounce(fun, delay) {
  return function () {
    var that = this;
    var args = arguments;
    clearTimeout(fun.id);
    fun.id = setTimeout(function () {
      fun.call(that, args);
    }, delay);
  };
}
; // find the correct part of video buffered

function getMatchRangeTime(time, ranges) {
  if (ranges.length === 0) {
    return 0;
  }

  for (var i = 0; i < ranges.length; i++) {
    var start = ranges.start(i);
    var end = ranges.end(i);

    if (time >= start && time <= end) {
      return ranges.end(i);
    }
  }

  return time;
}
;

function getMediaSource() {
  return window.MediaSource || window.WebKitMediaSource;
}

var WEB_SUPPORT_H264_CODEC = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
var isMSESupported = function isMSESupported() {
  var mediaSource = getMediaSource();
  var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
  var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(WEB_SUPPORT_H264_CODEC); // if SourceBuffer is exposed ensure its API is valid
  // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible

  var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
  return !!isTypeSupported && !!sourceBufferValidAPI;
};
function isDebug() {
  return localStorage._vcpDebug;
}
function setDebug(value) {
  if (value) {
    localStorage._vcpDebug = true;
  } else {
    localStorage._vcpDebug = '';
  }
}
var util_isNodeEnv = function isNodeEnv() {
  return (typeof localStorage === "undefined" ? "undefined" : typeof_typeof(localStorage)) !== 'object' && (typeof navigator === "undefined" ? "undefined" : typeof_typeof(navigator)) !== 'object';
};
var util_isMobile = isMobile(ua).any;
var isAndroid = isMobile(ua).android;
var isApple = isMobile(ua).apple && isMobile(ua).apple.device;
var isSafari = isApple && _isSafari();
var isTencentGroup = /MQQBrowser/i.test(ua);
var isUC = /ucbrowser/i.test(ua);
var isChrome = /chrome/i.test(ua);
var isWechat = /MicroMessenger/i.test(ua);
var isFirefox = /firefox/i.test(ua);

// CONCATENATED MODULE: ./src/helper/media.js



var media_isMediaList = function _isMediaList(medias) {
  if (Array.isArray(medias) && typeof_typeof(medias[0]) === 'object' && medias[0].resolution && medias[0].src) {
    return true;
  }

  return false;
};

function parseMediaList(medias) {
  if (media_isMediaList(medias)) {
    return medias.filter(function (media) {
      return media.src && media.resolution;
    });
  }

  if (typeof medias === 'string') {
    return [medias];
  }

  return medias;
}
function checkVideoPlayType(type, videoEl) {
  if (util_isNodeEnv()) {
    if ((isFirefox || isChrome) && type === 'video/webm') {
      return true;
    }

    return type === 'video/mp4';
  }

  if (!videoEl) {
    videoEl = document.createElement('videos');
  }

  return videoEl.canPlayType(type);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/helper/dom.js


function removeAllChildrenNodes(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
;
function toggle(el, className) {
  if (this.hasClass(el, className)) {
    this.removeClass(el, className);
  } else {
    this.addClass(el, className);
  }
}
;
function switchChildClass(el, childSelector, className, tellFunc) {
  var children = el.querySelectorAll(childSelector);

  for (var i = 0; i < children.length; i++) {
    var item = children[i];

    if (tellFunc(item)) {
      this.addClass(item, className);
    } else {
      this.removeClass(item, className);
    }
  }
}
;
function hasClass(el, className) {
  return el.className.indexOf(className) > -1;
}
;
function addClass(dom, className) {
  if (!className || !dom) {
    return;
  }

  var classGroup = className.split(' ');

  if (dom.classList && classGroup.length === 1) {
    dom.classList.add(className);
  } else {
    var _classNameList = dom.className.split(' ');

    _classNameList.push(className);

    dom.className = _classNameList.join(' ');
  }
}
;
function removeClass(dom, className) {
  if (dom.classList) {
    dom.classList.remove(className);
  } else {
    var _classNameList = dom.className.split(' ');

    var _index = -1;

    for (var i = 0, _len = _classNameList.length; i < _len; i++) {
      if (_classNameList[i] === className) {
        _index = i;
      }
    }

    if (_index > -1) {
      _classNameList.splice(_index, 1);
    }

    dom.className = _classNameList.join(' ');
  }
}
;
function getAttr(el, key) {
  return el.getAttribute(key);
}
;
function isDescendant(parent, child) {
  var node = child.parentNode;

  while (node != null) {
    if (node === parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
;
function drag(e, el, coor) {
  if (!el) {
    return;
  }

  var currentX = util_isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var currentY = util_isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  var left = currentX - coor.x;
  var top = currentY - coor.y;

  if (left <= coor.minLeft) {
    left = coor.minLeft;
  }

  if (left >= coor.maxLeft) {
    left = coor.maxLeft;
  }

  if (top <= coor.minTop) {
    top = coor.minTop;
  }

  if (top >= coor.maxTop) {
    top = coor.maxTop;
  }

  return {
    left: left,
    top: top
  };
}
;
function registerFullScreenChangeListener(listener) {
  document.addEventListener('fullscreenchange', function () {
    listener(document.webkitIsFullScreen);
  }, false);
  document.addEventListener('mozfullscreenchange', function () {
    listener(document.mozFullScreen);
  }, false);
  document.addEventListener('msFullscreenElement', function () {
    listener(document.mozFullScreen);
  }, false);
  document.addEventListener('webkitfullscreenchange', function () {
    listener(document.webkitIsFullScreen);
  }, false);
}
// CONCATENATED MODULE: ./src/core/base.js






 // import { throwError } from '../helper/error'



var VIDEO_EVENTS = ['play', 'playing', 'timeupdate', 'pause', 'seeking', 'waiting', 'loadedmetadata', 'loadeddata', 'loadstart', 'seeked', 'ended', 'durationchange', 'progress', 'canplaythrough', 'volumechange'];
var VIDEO_ATTRS = ['muted', 'volume', 'loop', 'preload'];

var base_BaseVideoCore =
/*#__PURE__*/
function () {
  function BaseVideoCore(config) {
    _classCallCheck(this, BaseVideoCore);

    this.config = Object.assign(constants_DEFAULT_CONFIG, config);
    this.$video = this.config.videoEl;
    this.$el = this.config.el;
    this._eventEmitter = config.eventEmitter;
    this.state = {};
    var src = this.config.src;

    if (this.checkSource(src)) {
      this.parse(src);
      this.init();
    }
  }

  _createClass(BaseVideoCore, [{
    key: "parse",
    value: function parse(source) {
      this.initResolution(source);
      this.initVideoType();
    }
  }, {
    key: "checkSource",
    value: function checkSource(source) {
      if (!source) {
        var code = constants_ERROR_CODE.NO_SOURCE.code;
        this.emit(constants_EVENTS.ERROR, {
          code: code
        });
        return false;
      } else if (Array.isArray(source)) {
        if (!source[0] || !source[0].src) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      var _this = this;

      if (this.checkSource(source)) {
        this.parse(source);
        var isPlaying = this.isPlaying();

        if (isPlaying) {
          this.pause();

          var playFn = function playFn() {
            _this.play();

            _this.$video.removeEventListener(constants_EVENTS.DURATIONCHANGE, playFn);
          };

          this.$video.addEventListener(constants_EVENTS.DURATIONCHANGE, playFn);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.checkSource(this.config.src);

      this._autoRegisterEvents();

      this._setVideoAttr();

      this.setContainer();
      this.setSize();
      this.emit(constants_EVENTS.LIFECYCLE_INITED);

      this._autoplay();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      if (util_isMobile) {
        addClass(this.$el, 'mobile');
      }
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var width = this.$el.offsetWidth;
      var size = '';

      if (width <= 763) {
        size = 'small';
      }

      addClass(this.$el, size);
    }
  }, {
    key: "_autoplay",
    value: function _autoplay() {
      var _this2 = this;

      if (this.config.autoplay && !util_isMobile) {
        var _autoPlayFn = function _autoPlayFn() {
          var promise = _this2.play();

          _this2.autoPlayPolicy(promise);
        };

        _autoPlayFn();
      }
    }
  }, {
    key: "setConfig",
    value: function setConfig(prop, value) {
      if (VIDEO_ATTRS.indexOf(prop) >= 0) {
        this.config[prop] = value;
        this.$video[prop] = value;
      }
    }
  }, {
    key: "initResolution",
    value: function initResolution(source) {
      var _this3 = this;

      var medias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var resolution = this.config.resolution;
      this.medias = parseMediaList(source);
      this.medias.forEach(function (media) {
        if (media.resolution === resolution) {
          _this3.config.src = media.src;
        }
      });
      this.resolution = resolution;
      setTimeout(function () {
        _this3.emit(constants_EVENTS.SOURCE_UPDATED);
      }, 200);
    }
  }, {
    key: "initVideoType",
    value: function initVideoType() {
      var _this4 = this;

      var findType = function findType(type) {
        for (var j = 0; j < _this4.medias.length; j++) {
          if (_this4.medias[j].type === type) {
            return _this4.medias[j];
          }
        }
      };

      for (var i = 0; i < VIDEO_FORMAT.length; i++) {
        var item = findType(VIDEO_FORMAT[i]);

        if (checkVideoPlayType(VIDEO_FORMAT[i], this.$video) && item) {
          this.config.src = item.src;
          this.$video.src = this.config.src;
          this.resolution = '';
          this.medias = [item];
          return;
        }
      }
    }
  }, {
    key: "setResolution",
    value: function setResolution(resolution) {
      var _this5 = this;

      var medias = this.medias;

      if (medias && medias.length > 1) {
        for (var i = 0; i < medias.length; i++) {
          if (medias[i].resolution === resolution) {
            (function () {
              _this5.resolution = resolution;

              var playStatus = _this5.isPlaying();

              var currentTime = _this5.getCurrentTime();

              _this5.$video.src = medias[i].src;

              _this5.emit(constants_EVENTS.SOURCE_UPDATED);

              _this5.$video.load();

              if (playStatus && currentTime < 1) {
                _this5.$video.play();
              } // safety start


              var event = constants_EVENTS.CANPLAYTHROUGH;
              var seekCount = 0;

              var fn = function fn() {
                // some QQ X5 browsers cannot trigger seeked event after "play" event
                if (isAndroid && isTencentGroup) {
                  _this5.play();

                  if (seekCount === 1) {
                    _this5.seek(currentTime);
                  }

                  seekCount += 1;
                } else {
                  _this5.seek(currentTime);
                }

                if (isAndroid && isTencentGroup && !playStatus) {
                  _this5.pause();
                }

                _this5.$video.removeEventListener(constants_EVENTS.CANPLAYTHROUGH, fn);

                if (seekCount === 2) {
                  _this5.$video.removeEventListener(constants_EVENTS.DURATIONCHANGE, fn);

                  seekCount = 0;
                }
              };

              var seekedFn = function seekedFn() {
                if (playStatus) {
                  _this5.play();
                }

                _this5.$video.removeEventListener(constants_EVENTS.SEEKED, seekedFn);
              };

              var playFn = function playFn() {
                _this5.start();

                _this5.$video.removeEventListener(constants_EVENTS.PLAYING, playFn);
              }; // [HACK] there is bug when wechat play video trigger durationchange twice


              if (isAndroid && isTencentGroup) {
                event = constants_EVENTS.DURATIONCHANGE;

                _this5.play();
              }

              _this5.$video.addEventListener(event, fn);

              _this5.$video.addEventListener(constants_EVENTS.SEEKED, seekedFn);

              _this5.$video.addEventListener(constants_EVENTS.PLAY, playFn);
            })();
          }
        }
      }
    }
  }, {
    key: "setAudio",
    value: function setAudio(audio) {// TODO
    }
  }, {
    key: "_autoRegisterEvents",
    value: function _autoRegisterEvents() {
      var _this6 = this;

      VIDEO_EVENTS.forEach(function (item) {
        _this6.$video.addEventListener(item, function (e) {
          // if (item !== 'timeupdate' && item !== 'progress') {
          //   console.log(item);
          // }
          var method = "on".concat(item);

          if (typeof _this6[method] === 'function') {
            _this6[method](e);
          }

          _this6.emit(item, {
            name: item,
            target: _this6.$video
          });
        });
      });
      this.$video.addEventListener('error', function (e) {
        // video set empty src is not error [chrome/firefox]
        if (!e.target.getAttribute('src')) {
          return;
        } // logger.error(e);


        if (e.target.error && e.target.error.code) {
          var error = Object.assign({}, e.target.error, {
            code: '250' + e.target.error.code
          });

          _this6.emit('error', error);

          return;
        }

        if (typeof_typeof(e) !== 'object') {
          e = {
            code: 5001,
            e: e
          };
        }

        _this6.emit('error', e);
      });
      this.on(constants_EVENTS.CORE_TO_MP4, function () {
        _this6.downgradeCore();
      });

      this._bindProgressEvent();
    }
  }, {
    key: "_bindProgressEvent",
    value: function _bindProgressEvent() {
      var _this7 = this;

      var _this$config = this.config,
          minPlayBUfferTime = _this$config.minPlayBUfferTime,
          safeBufferTime = _this$config.safeBufferTime;

      var progressHandle = function progressHandle() {
        if (!_this7.state.waiting_trigger) {
          return;
        }

        var bufferTime = _this7.getBufferTime();

        var currentTime = _this7.getCurrentTime();

        var duration = _this7.getDuration(); // nearly start


        if (currentTime < 2) {
          return;
        } // nearly end


        if (duration - currentTime < minPlayBUfferTime) {
          return;
        }

        var timeLose = bufferTime - currentTime;

        if (bufferTime - currentTime < minPlayBUfferTime) {
          _this7.player.pause();

          _this7.state.waiting_pause = true;

          _this7.emit(constants_EVENTS.LOADING_START, true);
        } else if (_this7.state.waiting_pause && timeLose > safeBufferTime) {
          _this7.play();

          _this7.state.waiting_pause = false;
        }
      };

      this.on(constants_EVENTS.UI_PLAY, function () {
        _this7.state.waiting_pause = true;
      });
      var firstPlay = false;
      this.on(constants_EVENTS.PLAY, function () {
        if (firstPlay) {
          return;
        }

        firstPlay = true;

        _this7.on(constants_EVENTS.PROGRESS, progressHandle);
      });
      this.on(constants_EVENTS.UI_PAUSE, function () {
        _this7.state.waiting_trigger = false;
      });
      this.on(constants_EVENTS.UI_PLAY, function () {
        _this7.state.waiting_trigger = true;
      }); // this.on('waiting', () => {
      //   const bufferTime = this.getBufferTime();
      //   const currentTime = this.getCurrentTime();
      // })
    }
  }, {
    key: "play",
    value: function play() {
      return this.$video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.$video.pause();
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return !this.$video.paused && !this.$video.ended;
    }
  }, {
    key: "replay",
    value: function replay() {
      this.$video.play();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this.$video.currentTime = time;
    }
  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      var video = this.$video;

      try {
        if (video !== document.pictureInPictureElement) {
          video.requestPictureInPicture();
        } else {
          document.exitPictureInPicture();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, {
    key: "onended",
    value: function onended() {
      var loop = this.config.loop;

      if (!loop) {
        return;
      }

      this.player.play();
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.$video) {
        return 0;
      }

      return this.$video.duration || 0;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var time = this.$video.currentTime || 0;
      return time;
    }
  }, {
    key: "getBufferTime",
    value: function getBufferTime() {
      var video = this.$video;
      var currentTime = this.getCurrentTime();
      return getMatchRangeTime(currentTime, video.buffered);
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      if (!this.getCurrentTime()) {
        return 0;
      }

      return (this.getCurrentTime() / this.getDuration() * 100).toFixed(2) || 0;
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      if (!this.$video) {
        return 1;
      }

      return this.$video.volume;
    }
  }, {
    key: "getVideoAttr",
    value: function getVideoAttr(attr) {
      return this.$video[attr];
    }
  }, {
    key: "setVideoAttr",
    value: function setVideoAttr(attr, val) {
      this.$video[attr] = val;
    }
  }, {
    key: "_setVideoAttr",
    value: function _setVideoAttr() {
      var _this8 = this;

      if (util_isMobile) {
        this.$video.setAttribute('x5-video-player-type', 'h5');
        this.$video.setAttribute('x5-video-player-fullscreen', false);
      }

      this.$video.loop = false;
      VIDEO_ATTRS.forEach(function (item) {
        if (_this8.config[item]) {
          // this.$video.setAttribute(item, this.options[item]);
          _this8.$video[item] = _this8.config[item];
        }
      });
    }
  }, {
    key: "autoPlayPolicy",
    value: function autoPlayPolicy(promise) {
      var _this9 = this;

      if (promise !== undefined) {
        promise.catch(function (error) {
          _this9.emit(constants_EVENTS.ERROR_AUTO_PLAY, error);

          _this9.config.autoplay = false;
        }).then(function () {// Auto-play started
        });
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(value) {
      this.$video.volume = value;
    }
  }, {
    key: "setMuted",
    value: function setMuted(value) {
      this.$video.muted = value;

      if (value) {
        this.emit(constants_EVENTS.VOLUMECHANGE, true);
      }
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(value) {
      this.$video.playbackRate = value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.pause();
    }
  }, {
    key: "getVideoElement",
    value: function getVideoElement() {
      return this.$video;
    }
  }, {
    key: "on",
    value: function on(key, callback) {
      this._eventEmitter.on(key, callback);
    }
  }, {
    key: "off",
    value: function off(key, callback) {
      this._eventEmitter.off(key, callback);
    }
  }, {
    key: "emit",
    value: function emit(key, data) {
      this._eventEmitter.emit(key, data);
    }
  }, {
    key: "once",
    value: function once(key, callback) {
      this._eventEmitter.once(key, callback);
    }
  }], [{
    key: "debug",
    set: function set(value) {
      if (value) {
        localStorage._vueCorePlayerDebug = true;
      } else {
        localStorage._vueCorePlayerDebug = '';
      }
    }
  }]);

  return BaseVideoCore;
}();

window.VCPVideoCore = base_BaseVideoCore;
/* harmony default export */ var base = (base_BaseVideoCore);
// CONCATENATED MODULE: ./src/core/index.js
// import { CORE } from '../constants'


var VPC_CORE_INS = {};
function initVideoCore(config) {
  var id = guid();
  config._id = id;
  var Core = config.core || base;
  var core = new Core(config);
  core.id = id;
  VPC_CORE_INS[id] = core;
  return core;
}
function getVideoCore(id) {
  return VPC_CORE_INS[id];
}
// EXTERNAL MODULE: ./node_modules/event-emitter/index.js
var event_emitter = __webpack_require__("c9fc");
var event_emitter_default = /*#__PURE__*/__webpack_require__.n(event_emitter);

// CONCATENATED MODULE: ./src/mixins.js




 // import eventBus from './helper/eve'
// import { getVideoCore } from './core'

var _ee = event_emitter_default()();

var mixins = {
  data: function data() {
    return {
      show: false,
      fullscreen: false,
      isPlaying: false,
      _coreID: ''
    };
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function ($player) {
      _this.$player = $player;
      _this.$container = _this.$player.$el;
    });
    this.on(constants_EVENTS.PLAY, function () {
      _this.isPlaying = true;
    });
    this.on(constants_EVENTS.PAUSE, function () {
      _this.isPlaying = false;
    });
    registerFullScreenChangeListener(function (isFullScreen) {
      if (isFullScreen) {
        addClass(_this.$container, 'fullscreen');

        _this.emit('fullscreen', true);
      } else {
        removeClass(_this.$container, 'fullscreen');

        _this.emit('fullscreen', false);
      }
    });
  },
  _events: {},
  methods: {
    play: function play() {
      this.$player.play();
    },
    pause: function pause() {
      this.$player.pause();
    },
    enterFullscreen: function enterFullscreen() {
      var el = this.$container;

      if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.requestFullScreen) {
        el.requestFullscreen();
      }

      this.fullscreen = true;
    },
    cancelFullscreen: function cancelFullscreen(isManual) {
      // if (isManual) {
      //   this.emit('fullscreen', false)
      //   removeClass(el, 'fullscreen')
      //   this.fullscreen = false
      //   return
      // }
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
      }

      this.fullscreen = false;
    },
    getFullscreen: function getFullscreen() {
      return !document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement;
    },
    on: function on(event, callback) {
      var _this2 = this;

      if (isString(event)) {
        this._events[event] = callback;

        _ee.on(event, callback);
      } else if (Array.isArray(event)) {
        event.forEach(function (item) {
          _this2._events[item] = callback;

          _ee.on(item, callback);
        });
      }
    },
    emit: function emit(event, res) {
      _ee.emit(event, res);
    },
    off: function off(event, callback) {
      _ee.off(event, callback);
    },
    removeAllEvents: function removeAllEvents() {
      for (var item in this._events) {
        _ee.off(item, this._events[item]);
      }
    },
    addClass: function addClass(cls) {
      this.$container.classList.remove(cls);
    },
    removeClass: function removeClass(cls) {
      this.$container.classList.remove(cls);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeAllEvents();
  }
};
/* harmony default export */ var src_mixins = (mixins);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/dashboard.vue?vue&type=template&id=3a02151a&
var dashboardvue_type_template_id_3a02151a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"dashboard",staticClass:"vcp-dashboard",attrs:{"autoplay":""}},[_c('Progress',{attrs:{"startRange":_vm.startRange,"rangeSize":_vm.rangeSize}}),_c('Controls',{attrs:{"muted":_vm.muted}})],1)}
var dashboardvue_type_template_id_3a02151a_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/dashboard.vue?vue&type=template&id=3a02151a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/progress.vue?vue&type=template&id=bbe4b5c4&
var progressvue_type_template_id_bbe4b5c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"input",staticClass:"vcp-progress-hover",on:{"click":_vm.seek}},[_c('div',{ref:"container",staticClass:"vcp-progress"},[_c('div',{staticClass:"vcp-progress-loaded",style:({width: _vm.bufferProgress + '%'})}),_c('div',{staticClass:"vcp-progress-played",style:({width: _vm.progress + '%'})},[_c('div',{ref:"thumb",staticClass:"thumb-drag",on:{"touchstart":_vm.startDrag,"mousedown":_vm.startDrag}})]),(_vm.bufferProgress > 0)?[_c('div',{staticClass:"vcp-progress-ranged",style:({left: _vm.startPoint + '%', width: _vm.endPoint + '%'})})]:_vm._e()],2)])}
var progressvue_type_template_id_bbe4b5c4_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/progress.vue?vue&type=template&id=bbe4b5c4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'Progress',
  props: {
    visible: Boolean,
    startRange: String,
    rangeSize: String
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      progress: 0.00,
      bufferProgress: 0.00
    };
  },
  computed: {
    startPoint: function startPoint() {
      if (this.$player) {
        var duration = this.$player.getDuration();
        return (parseFloat(this.startRange) / duration * 100).toFixed(2);
      }

      return 0;
    },
    endPoint: function endPoint() {
      if (this.$player) {
        var duration = this.$player.getDuration();
        return ((this.rangeSize - parseFloat(this.startRange)) / duration * 100).toFixed(2);
      }

      return 0;
    }
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.TIMEUPDATE, function () {
      if (_this._dragEl) {
        return;
      }

      var time = _this.$player.getCurrentTime();

      var duration = _this.$player.getDuration(); // this.setProgressPlayedPercent();


      _this.progress = (time / duration * 100).toFixed(2); // this.setRangeValue((time / duration * 100).toFixed(1));
    });
    this.on(constants_EVENTS.PROGRESS, function () {
      var bufferTime = _this.$player.getBufferTime();

      var duration = _this.$player.getDuration();

      if (bufferTime > 0 && duration > 0) {
        _this.bufferProgress = (bufferTime / duration * 100).toFixed(2);
      }
    });
    this.on(constants_EVENTS.LOADSTART, function () {
      var bufferTime = _this.$player.getBufferTime();

      var duration = _this.$player.getDuration();

      _this.bufferProgress = (bufferTime / duration * 100).toFixed(2);
    });
  },
  methods: {
    seek: function seek(e) {
      var offsets = getElementOffsets(e.currentTarget);

      if (this.getFullscreen()) {
        offsets.left = 0;
      }

      var _clientRect = e.currentTarget.getBoundingClientRect();

      var left = e.pageX - _clientRect.left;
      var maxVal = e.currentTarget.offsetWidth;
      var val = (left / maxVal * 100).toFixed(2);
      this.progress = val;
      var duration = this.$player.getDuration();
      this.$player.seek(left / maxVal * duration);
    },
    startDrag: function startDrag(e) {
      this.initDrag(e);
      this.startSeek = true;
    },
    initDrag: function initDrag(e) {
      e.preventDefault();
      var self = this;
      this._dragEl = this.$refs['thumb'];
      var maxVal = this.$refs['input'].offsetWidth;
      var marginLeft = getComputedStyle(this._dragEl, null).marginLeft;

      if (marginLeft) {
        marginLeft = parseFloat(marginLeft);
      }

      var coor = {
        x: (util_isMobile ? e.touches[0].clientX : e.pageX) - this._dragEl.offsetLeft + marginLeft,
        y: (util_isMobile ? e.touches[0].clientX : e.clientY) - this._dragEl.offsetTop,
        maxLeft: maxVal
      };

      if (this.getFullscreen()) {
        coor.x = e.pageX - this._dragEl.offsetLeft;
      }

      var move = function move(ev) {
        if (!self._dragEl) {
          return;
        }

        var newCoor = drag(ev, self._dragEl, coor);

        if (newCoor) {
          var left = newCoor.left;
          var val = (left / maxVal * 100).toFixed(2);
          self.progress = val;
          var duration = self.$player.getDuration();
          self.$player.seek(left / maxVal * duration);
        }
      };

      var stopMove = function stopMove() {
        self._dragEl = null;

        if (util_isMobile) {
          self.$refs['container'].removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }

        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };

      if (util_isMobile) {
        self.$refs['container'].addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }

      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/progress.vue?vue&type=style&index=0&lang=less&
var progressvue_type_style_index_0_lang_less_ = __webpack_require__("0d22");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/dashboard/progress.vue






/* normalize component */

var component = normalizeComponent(
  dashboard_progressvue_type_script_lang_js_,
  progressvue_type_template_id_bbe4b5c4_render,
  progressvue_type_template_id_bbe4b5c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var progress = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/controls.vue?vue&type=template&id=7c2537b0&
var controlsvue_type_template_id_7c2537b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-controls"},[_c('div',{staticClass:"playback-control"},[_c('play-pause-cntrol'),_c('time-span')],1),_c('div',{staticClass:"setting-control"},[_c('volume-control',{attrs:{"muted":_vm.muted}}),_c('picture-in-picture'),_c('settings-control'),_c('fullscreen-control')],1)])}
var controlsvue_type_template_id_7c2537b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/controls.vue?vue&type=template&id=7c2537b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/play-pause-control.vue?vue&type=template&id=55346f0f&
var play_pause_controlvue_type_template_id_55346f0f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control"},[(_vm.isPlaying)?_c('div',{staticClass:"btn-control btn-pause",on:{"click":_vm.pause}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"48","viewBox":"0 0 36 48"}},[_c('g',{attrs:{"transform":"translate(-950 -398)"}},[_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(950 398)","fill":"#fff"}}),_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(974 398)","fill":"#fff"}})])]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.pause')))])]):_c('div',{staticClass:"btn-control btn-play",on:{"click":_vm.play}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"41","height":"47","viewBox":"0 0 41 47"}},[_c('path',{attrs:{"d":"M23.5,0,47,41H0Z","transform":"translate(41) rotate(90)","fill":"#fff"}})]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.play')))])])])}
var play_pause_controlvue_type_template_id_55346f0f_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue?vue&type=template&id=55346f0f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/play-pause-control.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var play_pause_controlvue_type_script_lang_js_ = ({
  name: 'PlayPauseControl',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_play_pause_controlvue_type_script_lang_js_ = (play_pause_controlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/play-pause-control.vue?vue&type=style&index=0&lang=less&
var play_pause_controlvue_type_style_index_0_lang_less_ = __webpack_require__("d658");

// CONCATENATED MODULE: ./src/dashboard/play-pause-control.vue






/* normalize component */

var play_pause_control_component = normalizeComponent(
  dashboard_play_pause_controlvue_type_script_lang_js_,
  play_pause_controlvue_type_template_id_55346f0f_render,
  play_pause_controlvue_type_template_id_55346f0f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var play_pause_control = (play_pause_control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/time-span.vue?vue&type=template&id=5d8a422c&
var time_spanvue_type_template_id_5d8a422c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control timespan"},[_c('span',{staticClass:"time-current"},[_vm._v(_vm._s(_vm.currentTime))]),_c('span',{staticClass:"time-split"},[_vm._v(" / ")]),_c('span',{staticClass:"time-duration"},[_vm._v(_vm._s(_vm.duration))])])}
var time_spanvue_type_template_id_5d8a422c_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/time-span.vue?vue&type=template&id=5d8a422c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/time-span.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var time_spanvue_type_script_lang_js_ = ({
  name: 'TimeSpan',
  props: {
    visible: Boolean
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      currentTime: '00:00:00',
      duration: '--:--:--'
    };
  },
  created: function created() {
    var _this = this;

    this.on(constants_EVENTS.TIMEUPDATE, function () {
      var currentTime = _this.$player.getCurrentTime();

      if (!currentTime) {
        return;
      }

      _this.currentTime = secondsToTime(currentTime);

      var newDuration = _this.$player.getDuration();

      if (newDuration !== _this.duration) {
        _this.duration = secondsToTime(newDuration);
      }
    });
    this.on(constants_EVENTS.DURATIONCHANGE, function () {
      var newDuration = _this.$player.getDuration();

      _this.duration = secondsToTime(newDuration);
    });
  }
});
// CONCATENATED MODULE: ./src/dashboard/time-span.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_time_spanvue_type_script_lang_js_ = (time_spanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/time-span.vue?vue&type=style&index=0&lang=less&
var time_spanvue_type_style_index_0_lang_less_ = __webpack_require__("5311");

// CONCATENATED MODULE: ./src/dashboard/time-span.vue






/* normalize component */

var time_span_component = normalizeComponent(
  dashboard_time_spanvue_type_script_lang_js_,
  time_spanvue_type_template_id_5d8a422c_render,
  time_spanvue_type_template_id_5d8a422c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var time_span = (time_span_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/volume.vue?vue&type=template&id=5afafe73&
var volumevue_type_template_id_5afafe73_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control volume-control"},[(!_vm.isMuted)?_c('div',{staticClass:"btn-control btn-volume",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"23.542","height":"23","viewBox":"0 0 23.542 23"}},[_c('path',{attrs:{"data-name":"15","fill":"#fff","d":"M0 5.5h7v12H0z"}}),_c('path',{attrs:{"data-name":"3","d":"M.5 11.5L12.5 0v23z","fill":"#fff"}}),_c('g',{attrs:{"data-name":"12 1","fill":"none","stroke":"#fff","stroke-width":"1.5"}},[_c('path',{attrs:{"data-name":"2","d":"M15.787 8.349a2.89 2.89 0 0 1 3.04 3.126 2.763 2.763 0 0 1-3.142 2.833","stroke-width":"1.50021"}}),_c('path',{attrs:{"data-name":"3","d":"M16.052 4.807s6.917-.147 6.61 6.796-6.83 6.16-6.83 6.16","stroke-width":"1.50021"}})])])]):_vm._e(),(_vm.isMuted)?_c('div',{staticClass:"btn-control btn-mute",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24.485","height":"23","viewBox":"0 0 24.485 23"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('path',{attrs:{"data-name":"矩形 15","d":"M0 5.5h7v12H0z"}}),_c('path',{attrs:{"data-name":"多边形 3","d":"M.5 11.5L12.5 0v23z"}}),_c('g',{attrs:{"data-name":"组 3"}},[_c('path',{attrs:{"data-name":"矩形 39","d":"M23.071 7.257l1.414 1.414-7.07 7.071L16 14.328z"}}),_c('path',{attrs:{"data-name":"矩形 40","d":"M16 8.672l1.414-1.414 7.071 7.07-1.414 1.415z"}})])])])]):_vm._e(),_c('div',{staticClass:"btn-control-panel"},[_c('div',{staticClass:"progress",on:{"click":_vm.seek}},[_c('div',{staticClass:"volume-current",style:({height: _vm.volume + '%'})},[_c('div',{staticClass:"thumb-drag"})])]),_c('div',{staticClass:"volume-info"},[_vm._v(_vm._s(_vm.volume)+"%")])])])}
var volumevue_type_template_id_5afafe73_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/volume.vue?vue&type=template&id=5afafe73&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/volume.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { hasClass } from '../helper/dom'

/* harmony default export */ var volumevue_type_script_lang_js_ = ({
  name: 'Volume',
  props: {
    visible: Boolean,
    muted: Boolean
  },
  mixins: [src_mixins],
  data: function data() {
    return {
      panelShow: false,
      volume: 50,
      isMuted: this.muted
    };
  },
  methods: {
    seek: function seek(e) {
      var top = e.offsetY;

      if (e.target.className === 'volume-current') {
        top += e.target.offsetTop;
      }

      var maxVal = e.currentTarget.offsetHeight;
      var volume = 1 - top / maxVal;

      if (this.isMuted) {
        this.$player.setMuted(false);
      }

      this.$player.setVolume(volume, true);
      this.setRangeValue(volume);
    },
    setRangeValue: function setRangeValue(value) {
      this.volume = parseInt(value * 100);
    },
    toggle: function toggle() {
      this.isMuted = !this.isMuted;

      if (this.isMuted) {
        this.$player.setMuted(true);
        this.volume = 0;
      } else {
        this.$player.setMuted(false);
        this.volume = parseInt(this.$player.getVolume() * 100);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_volumevue_type_script_lang_js_ = (volumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/volume.vue?vue&type=style&index=0&lang=less&
var volumevue_type_style_index_0_lang_less_ = __webpack_require__("42e9");

// CONCATENATED MODULE: ./src/dashboard/volume.vue






/* normalize component */

var volume_component = normalizeComponent(
  dashboard_volumevue_type_script_lang_js_,
  volumevue_type_template_id_5afafe73_render,
  volumevue_type_template_id_5afafe73_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var volume = (volume_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/fullscreen.vue?vue&type=template&id=58c8545d&
var fullscreenvue_type_template_id_58c8545d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.disable)?_c('div',{staticClass:"vue-core-video-player-control"},[(!_vm.fullscreen)?_c('div',{staticClass:"btn-control btn-fullscreen",on:{"click":_vm.enterFullscreen}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"28","height":"20","viewBox":"0 0 28 20"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('g',{attrs:{"data-name":"6 7"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M16 0h10v2H16z"}}),_c('path',{attrs:{"data-name":"8","d":"M26 0h2v6h-2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M18 18h10v2H18z"}}),_c('path',{attrs:{"data-name":"10","d":"M26 14h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 8"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M12 20H2v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M2 20H0v-6h2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M10 2H0V0h10z"}}),_c('path',{attrs:{"data-name":"10","d":"M2 6H0V0h2z"}})])])])]),_c('div',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.fullscreen')))])]):_vm._e(),(_vm.fullscreen)?_c('div',{staticClass:"btn-control btn-off-fullscreen",on:{"click":_vm.cancelFullscreen}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"25","height":"18","viewBox":"0 0 25 18"}},[_c('g',{attrs:{"fill":"#fff"}},[_c('g',{attrs:{"data-name":"6 9"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M15 5h10v2H15z"}}),_c('path',{attrs:{"data-name":"8","d":"M15 0h2v6h-2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M15 12h10v2H15z"}}),_c('path',{attrs:{"data-name":"10","d":"M15 12h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 10"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M10 14H0v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M10 18H8v-6h2z"}})]),_c('g',{attrs:{"data-name":"5 1"}},[_c('path',{attrs:{"data-name":"9","d":"M10 6H0V4h10z"}}),_c('path',{attrs:{"data-name":"10","d":"M10 6H8V0h2z"}})])])])]),_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.exitFullscreen')))])]):_vm._e()]):_vm._e()}
var fullscreenvue_type_template_id_58c8545d_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue?vue&type=template&id=58c8545d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/fullscreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
// import EVENTS from '../constants/EVENTS'


/* harmony default export */ var fullscreenvue_type_script_lang_js_ = ({
  name: 'Fullscreen',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      disable: util_isMobile && isApple
    };
  }
});
// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_fullscreenvue_type_script_lang_js_ = (fullscreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/fullscreen.vue?vue&type=style&index=0&lang=less&
var fullscreenvue_type_style_index_0_lang_less_ = __webpack_require__("156e");

// CONCATENATED MODULE: ./src/dashboard/fullscreen.vue






/* normalize component */

var fullscreen_component = normalizeComponent(
  dashboard_fullscreenvue_type_script_lang_js_,
  fullscreenvue_type_template_id_58c8545d_render,
  fullscreenvue_type_template_id_58c8545d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fullscreen = (fullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/settings.vue?vue&type=template&id=a8171572&
var settingsvue_type_template_id_a8171572_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-control settings-control"},[_c('div',{staticClass:"btn-control btn-settings",on:{"click":_vm.toggle}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"31.971","height":"31.971","viewBox":"0 0 31.971 31.971"}},[_c('g',{attrs:{"data-name":"7","transform":"translate(6.985 6.985)","fill":"none","stroke":"#fff","stroke-width":"5"}},[_c('circle',{attrs:{"cx":"9","cy":"9","r":"9","stroke":"none"}}),_c('circle',{attrs:{"cx":"9","cy":"9","r":"6.5"}})]),_c('g',{attrs:{"data-name":"15 10","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M13.985 3.985h4v3h-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M15.985 3.985l3 4h-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M17.985 27.985h-4v-3h4z"}}),_c('path',{attrs:{"data-name":"4","d":"M15.985 27.985l-3-4h6z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M23.056 6.085l2.829 2.829-2.122 2.12-2.828-2.828z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 7.5l-.707 4.95-4.242-4.244z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M8.914 25.884l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 24.47l.707-4.95 4.243 4.243z"}})])])]),_c('g',{attrs:{"data-name":"15 11","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M23.056 6.086l2.828 2.828-2.12 2.122-2.83-2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 7.5l-.707 4.95-4.242-4.243z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M8.914 25.885l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 24.47l.707-4.949 4.242 4.243z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M27.985 13.985v4h-3v-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M27.985 15.985l-4 3v-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M3.985 17.985v-4h3v4z"}}),_c('path',{attrs:{"data-name":"4","d":"M3.985 15.985l4-3v6z"}})])])]),_c('g',{attrs:{"data-name":"15 12","fill":"#fff"}},[_c('g',{attrs:{"data-name":"14 1"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M27.985 13.985v4h-3v-4z"}}),_c('path',{attrs:{"data-name":"4","d":"M27.985 15.985l-4 3v-6z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M3.985 17.985v-4h3v4z"}}),_c('path',{attrs:{"data-name":"4","d":"M3.985 15.985l4-3v6z"}})])]),_c('g',{attrs:{"data-name":"14 2"}},[_c('g',{attrs:{"data-name":"13 1"}},[_c('path',{attrs:{"data-name":"17","d":"M25.885 23.056l-2.829 2.829-2.12-2.122 2.828-2.828z"}}),_c('path',{attrs:{"data-name":"4","d":"M24.47 24.47l-4.95-.707 4.244-4.242z"}})]),_c('g',{attrs:{"data-name":"13 2"}},[_c('path',{attrs:{"data-name":"17","d":"M6.086 8.914l2.828-2.828 2.122 2.12-2.829 2.83z"}}),_c('path',{attrs:{"data-name":"4","d":"M7.5 7.5l4.95.707-4.243 4.243z"}})])])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panelShow),expression:"panelShow"}],staticClass:"btn-control-panel",on:{"click":_vm.preventHide}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentPanel),expression:"currentPanel"}],staticClass:"current-panel"},[_c('li',[_c('span',{staticClass:"item-name"},[_vm._v("\n          "+_vm._s(_vm.$t('dashboard.settings.autoplay'))+"\n        ")]),_c('div',{staticClass:"item-control"},[_c('widgets-switch',{ref:"autoplaySwitch",on:{"change":_vm.changeAutoplaySettings}})],1)]),_c('li',[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.loop')))]),_c('div',{staticClass:"item-control"},[_c('widgets-switch',{ref:"loopSwitch",on:{"change":_vm.changeLoopSettings}})],1)]),_c('li',[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.speed')))]),_c('div',{staticClass:"item-control",on:{"click":_vm.showSpeedPanel}},[_c('span',[_vm._v(_vm._s(_vm.speed)+"x")]),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"4","d":"M.809.616l3.9 5-3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})])])]),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.medias.length > 1),expression:"medias.length > 1"}]},[_c('span',{staticClass:"item-name"},[_vm._v(_vm._s(_vm.$t('dashboard.settings.resolution')))]),(_vm.resolution)?_c('div',{staticClass:"item-control",on:{"click":_vm.showResolutionPanel}},[_c('span',[_vm._v(_vm._s(_vm.resolution))]),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"4","d":"M.809.616l3.9 5-3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})])]):_vm._e()])]),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.resolutionListPanel),expression:"resolutionListPanel"}],staticClass:"resolution-list animated fadeInRight"},[_c('li',{on:{"click":_vm.backCurrentPanel}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"5","d":"M5.154.616l-3.9 5 3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})]),_vm._v("\n        "+_vm._s(_vm.$t('dashboard.btn.back'))+"\n      ")]),_vm._l((_vm.medias),function(item,index){return _c('li',{key:index,on:{"click":function($event){return _vm.setResolution(item)}}},[_vm._v(_vm._s(item.resolution))])})],2),(_vm.speedListPanel)?_c('ul',{staticClass:"speed-list animated fadeInRight"},[_c('li',{on:{"click":_vm.backCurrentPanel}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"5.963","height":"11.568","viewBox":"0 0 5.963 11.568"}},[_c('path',{attrs:{"data-name":"5","d":"M5.154.616l-3.9 5 3.9 5.368","fill":"none","stroke":"#fff","stroke-width":"2"}})]),_vm._v("\n        "+_vm._s(_vm.$t('dashboard.btn.back'))+"\n      ")]),_c('li',{attrs:{"data-val":"0.5"},on:{"click":_vm.setSpeed}},[_vm._v("0.5x")]),_c('li',{attrs:{"data-val":"1"},on:{"click":_vm.setSpeed}},[_vm._v("1x")]),_c('li',{attrs:{"data-val":"1.25"},on:{"click":_vm.setSpeed}},[_vm._v("1.25x")]),_c('li',{attrs:{"data-val":"1.5"},on:{"click":_vm.setSpeed}},[_vm._v("1.5x")]),_c('li',{attrs:{"data-val":"2"},on:{"click":_vm.setSpeed}},[_vm._v("2x")])]):_vm._e()])])}
var settingsvue_type_template_id_a8171572_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/settings.vue?vue&type=template&id=a8171572&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/setting-switch.vue?vue&type=template&id=3a75bfa2&
var setting_switchvue_type_template_id_3a75bfa2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-switch",class:{ open: _vm.isOpen},on:{"click":_vm.toggle}})}
var setting_switchvue_type_template_id_3a75bfa2_staticRenderFns = []


// CONCATENATED MODULE: ./src/widgets/setting-switch.vue?vue&type=template&id=3a75bfa2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/setting-switch.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var setting_switchvue_type_script_lang_js_ = ({
  name: 'setting-switch',
  props: {
    openStatus: Boolean
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    open: function open() {
      this.isOpen = true;
    }
  }
});
// CONCATENATED MODULE: ./src/widgets/setting-switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_setting_switchvue_type_script_lang_js_ = (setting_switchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/widgets/setting-switch.vue?vue&type=style&index=0&lang=less&
var setting_switchvue_type_style_index_0_lang_less_ = __webpack_require__("c428");

// CONCATENATED MODULE: ./src/widgets/setting-switch.vue






/* normalize component */

var setting_switch_component = normalizeComponent(
  widgets_setting_switchvue_type_script_lang_js_,
  setting_switchvue_type_template_id_3a75bfa2_render,
  setting_switchvue_type_template_id_3a75bfa2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setting_switch = (setting_switch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/settings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'Settings',
  props: {
    visible: Boolean
  },
  mixins: [src_mixins],
  components: {
    'widgets-switch': setting_switch
  },
  data: function data() {
    return {
      autoplay: false,
      loop: false,
      resolution: '',
      panelShow: false,
      currentPanel: true,
      resolutionListPanel: false,
      speedListPanel: false,
      speed: 1,
      medias: []
    };
  },
  methods: {
    toggle: function toggle(e) {
      e && e.stopPropagation();
      this.panelShow = !this.panelShow;

      if (this.panelShow) {
        this.$container.classList.add('settings-open');
      } else {
        this.$container.classList.remove('settings-open');
      }
    },
    preventHide: function preventHide(e) {
      e.stopPropagation();
    },
    showResolutionPanel: function showResolutionPanel(e) {
      if (this.medias.length <= 1) {
        return;
      }

      this.currentPanel = false;
      this.resolutionListPanel = true;
    },
    showSpeedPanel: function showSpeedPanel(e) {
      this.currentPanel = false;
      this.speedListPanel = true;
    },
    backCurrentPanel: function backCurrentPanel() {
      this.currentPanel = true;
      this.speedListPanel = false;
      this.resolutionListPanel = false;
    },
    setResolution: function setResolution(media) {
      if (this.resolution === media.resolution) {
        this.backCurrentPanel();
        return;
      }

      this.$player.setResolution(media.resolution);
      this.backCurrentPanel();
      this.toggle();
    },
    setSpeed: function setSpeed(e) {
      var val = +e.target.dataset['val'];
      this.speed = val;
      this.$player.setSpeed(val);
      this.backCurrentPanel();
    },
    changeAutoplaySettings: function changeAutoplaySettings(status) {
      this.$player.setConfig('autoplay', status);
    },
    changeLoopSettings: function changeLoopSettings(status) {
      this.$player.setConfig('loop', status);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.SOURCE_UPDATED, function () {
      _this.medias = _this.$player.medias;
      _this.resolution = _this.$player.resolution;
    });
    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var _this$$player$config = _this.$player.config,
          autoplay = _this$$player$config.autoplay,
          loop = _this$$player$config.loop;

      if (autoplay) {
        _this.$refs['autoplaySwitch'].open();
      }

      if (loop) {
        _this.$refs['loopSwitch'].open();
      }
    });
    document.addEventListener('click', function () {
      if (_this.panelShow) {
        _this.panelShow = false;
        _this.speedListPanel = false;
        _this.resolutionListPanel = false;

        _this.$container.classList.remove('settings-open');
      }
    });
  }
});
// CONCATENATED MODULE: ./src/dashboard/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/settings.vue?vue&type=style&index=0&lang=less&
var settingsvue_type_style_index_0_lang_less_ = __webpack_require__("aa54");

// CONCATENATED MODULE: ./src/dashboard/settings.vue






/* normalize component */

var settings_component = normalizeComponent(
  dashboard_settingsvue_type_script_lang_js_,
  settingsvue_type_template_id_a8171572_render,
  settingsvue_type_template_id_a8171572_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var settings = (settings_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/picture-in-picture.vue?vue&type=template&id=32993244&
var picture_in_picturevue_type_template_id_32993244_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"vue-core-video-player-control",on:{"click":_vm.requestPictureInPicture}},[_c('div',{staticClass:"btn-control btn-pip"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"28","height":"16","viewBox":"0 0 28 16"}},[_c('g',{attrs:{"data-name":"6 13"}},[_c('g',{attrs:{"data-name":"5 1","fill":"#fff"}},[_c('path',{attrs:{"data-name":"9","d":"M18 14h10v2H18z"}}),_c('path',{attrs:{"data-name":"10","d":"M26 9h2v6h-2z"}})])]),_c('g',{attrs:{"data-name":"6 14","fill":"#fff"}},[_c('g',{attrs:{"data-name":"4 1"}},[_c('path',{attrs:{"data-name":"7","d":"M12 16H2v-2h10z"}}),_c('path',{attrs:{"data-name":"8","d":"M2 16H0V6h2z"}})]),_c('path',{attrs:{"data-name":"41","d":"M28 2H0V0h28z"}})])]),_c('div',{staticClass:"tips"},[_vm._v(_vm._s(_vm.$t('dashboard.btn.pip')))])])]):_vm._e()}
var picture_in_picturevue_type_template_id_32993244_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=template&id=32993244&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/picture-in-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
// import EVENTS from '../constants/EVENTS'


var _isSupportPIP = function _isSupportPIP() {
  if ('pictureInPictureEnabled' in document) {
    return true;
  }

  var el = document.createElement('video');

  if (el.requestPictureInPicture && typeof el.requestPictureInPicture === 'function') {
    return true;
  }

  return false;
};

/* harmony default export */ var picture_in_picturevue_type_script_lang_js_ = ({
  name: 'PictureInPicture',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      show: false
    };
  },
  created: function created() {
    if (_isSupportPIP) {
      this.show = true;
    }
  },
  methods: {
    requestPictureInPicture: function requestPictureInPicture() {
      this.$player.requestPictureInPicture();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_picture_in_picturevue_type_script_lang_js_ = (picture_in_picturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/picture-in-picture.vue?vue&type=style&index=0&lang=less&
var picture_in_picturevue_type_style_index_0_lang_less_ = __webpack_require__("1b6f");

// CONCATENATED MODULE: ./src/dashboard/picture-in-picture.vue






/* normalize component */

var picture_in_picture_component = normalizeComponent(
  dashboard_picture_in_picturevue_type_script_lang_js_,
  picture_in_picturevue_type_template_id_32993244_render,
  picture_in_picturevue_type_template_id_32993244_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picture_in_picture = (picture_in_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/controls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var controlsvue_type_script_lang_js_ = ({
  name: 'Controls',
  components: {
    'play-pause-cntrol': play_pause_control,
    'time-span': time_span,
    'volume-control': volume,
    'fullscreen-control': fullscreen,
    'settings-control': settings,
    'picture-in-picture': picture_in_picture
  },
  props: {
    visible: Boolean,
    muted: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_controlsvue_type_script_lang_js_ = (controlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/controls.vue?vue&type=style&index=0&land=less&lang=css&
var controlsvue_type_style_index_0_land_less_lang_css_ = __webpack_require__("7fc5");

// CONCATENATED MODULE: ./src/dashboard/controls.vue






/* normalize component */

var controls_component = normalizeComponent(
  dashboard_controlsvue_type_script_lang_js_,
  controlsvue_type_template_id_7c2537b0_render,
  controlsvue_type_template_id_7c2537b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var controls = (controls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//






var pageCoor = {
  x: null,
  y: null
};
/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  name: 'Dashboard',
  components: {
    Progress: progress,
    Controls: controls
  },
  props: {
    controls: [Boolean, String],
    muted: Boolean,
    startRange: String,
    rangeSize: String
  },
  data: function data() {
    return {
      show: true
    };
  },
  mixins: [src_mixins],
  methods: {
    showDashboard: function showDashboard(delay) {
      var _this = this;

      window.clearTimeout(this._hideTimeout);
      this.show = true;
      this.emit(constants_EVENTS.UI_DASHBOARD_SHOW);

      if (delay === 0) {// TODO handle force show
      } else {
        this._hideTimeout = setTimeout(function () {
          _this.hideDashboard();
        }, delay || constants_DEFAULT_CONFIG.dashboardHideDelay);
      }
    },
    hideDashboard: function hideDashboard() {
      this.show = false;
      this.emit(constants_EVENTS.UI_DASHBOARD_HIDE);
    },
    _initAutoMode: function _initAutoMode() {
      var $parent = this.$refs['dashboard'].parentNode;

      if (util_isMobile) {
        $parent.addEventListener('touchend', this._onTouchend.bind(this), true);
      } else {
        $parent.addEventListener('mousemove', this._onMousemove.bind(this));
        $parent.addEventListener('mouseleave', this._onMouseleave.bind(this));
        $parent.addEventListener('mouseover', this._onMouseover.bind(this), true);
      } // first render delay


      this.showDashboard(4000);
    },
    _onMousemove: function _onMousemove(e) {
      if (e.pageX === pageCoor.x && e.pageY === pageCoor.y) {
        pageCoor.x = e.pageX;
        pageCoor.y = e.pageY;
        return;
      }

      pageCoor.x = e.pageX;
      pageCoor.y = e.pageY;

      if (isDescendant(this._el, e.target)) {
        return this.showDashboard(0);
      }

      this.showDashboard();
    },
    _onMouseleave: function _onMouseleave() {
      this.showDashboard();
    },
    _onMouseover: function _onMouseover() {
      this.showDashboard(0);
    },
    _onTouchend: function _onTouchend() {
      this.showDashboard();
    }
  },
  mounted: function mounted() {
    var controls = this.controls;

    if (!controls) {
      this.show = false;
    } else if (controls === 'fixed') {
      this.show = true;
    } else {
      this._initAutoMode();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&
var dashboardvue_type_style_index_0_lang_css_ = __webpack_require__("cc1d");

// CONCATENATED MODULE: ./src/dashboard/dashboard.vue






/* normalize component */

var dashboard_component = normalizeComponent(
  dashboard_dashboardvue_type_script_lang_js_,
  dashboardvue_type_template_id_3a02151a_render,
  dashboardvue_type_template_id_3a02151a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dashboard = (dashboard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-dashboard.vue?vue&type=template&id=8cae492e&
var mobile_dashboardvue_type_template_id_8cae492e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"dashboard",staticClass:"vcp-m-dashboard",attrs:{"autoplay":""}},[_c('MobileControls',{attrs:{"muted":_vm.muted}}),_c('Progress')],1)}
var mobile_dashboardvue_type_template_id_8cae492e_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=template&id=8cae492e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-controls.vue?vue&type=template&id=4f5aa5ab&
var mobile_controlsvue_type_template_id_4f5aa5ab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcp-controls"},[_c('div',{staticClass:"playback-control"},[_c('time-span')],1),_c('div',{staticClass:"setting-control"},[_c('picture-in-picture'),_c('settings-control'),_c('fullscreen-control')],1)])}
var mobile_controlsvue_type_template_id_4f5aa5ab_staticRenderFns = []


// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue?vue&type=template&id=4f5aa5ab&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-controls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var mobile_controlsvue_type_script_lang_js_ = ({
  name: 'Controls',
  components: {
    'time-span': time_span,
    'fullscreen-control': fullscreen,
    'settings-control': settings,
    'picture-in-picture': picture_in_picture
  },
  props: {
    visible: Boolean,
    muted: Boolean
  }
});
// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mobile_controlsvue_type_script_lang_js_ = (mobile_controlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/mobile-controls.vue?vue&type=style&index=0&land=less&lang=css&
var mobile_controlsvue_type_style_index_0_land_less_lang_css_ = __webpack_require__("4cc6");

// CONCATENATED MODULE: ./src/dashboard/mobile-controls.vue






/* normalize component */

var mobile_controls_component = normalizeComponent(
  dashboard_mobile_controlsvue_type_script_lang_js_,
  mobile_controlsvue_type_template_id_4f5aa5ab_render,
  mobile_controlsvue_type_template_id_4f5aa5ab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mobile_controls = (mobile_controls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dashboard/mobile-dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//






var mobile_dashboardvue_type_script_lang_js_pageCoor = {
  x: null,
  y: null
};
/* harmony default export */ var mobile_dashboardvue_type_script_lang_js_ = ({
  name: 'MobileDashboard',
  components: {
    Progress: progress,
    MobileControls: mobile_controls
  },
  props: {
    controls: [Boolean, String],
    muted: Boolean
  },
  data: function data() {
    return {
      show: true
    };
  },
  mixins: [src_mixins],
  methods: {
    showDashboard: function showDashboard(delay) {
      var _this = this;

      window.clearTimeout(this._hideTimeout);
      this.show = true;
      this.emit(constants_EVENTS.UI_DASHBOARD_SHOW);

      if (delay === 0) {// TODO handle force show
      } else {
        this._hideTimeout = setTimeout(function () {
          _this.hideDashboard();
        }, delay || constants_DEFAULT_CONFIG.dashboardHideDelay);
      }
    },
    hideDashboard: function hideDashboard() {
      this.show = false;
      this.emit(constants_EVENTS.UI_DASHBOARD_HIDE);
    },
    _initAutoMode: function _initAutoMode() {
      var $parent = this.$refs['dashboard'].parentNode;

      if (util_isMobile) {
        $parent.addEventListener('touchend', this._onTouchend.bind(this), true);
      } else {
        $parent.addEventListener('mousemove', this._onMousemove.bind(this));
        $parent.addEventListener('mouseleave', this._onMouseleave.bind(this));
        $parent.addEventListener('mouseover', this._onMouseover.bind(this), true);
      } // first render delay


      this.showDashboard(4000);
    },
    _onMousemove: function _onMousemove(e) {
      if (e.pageX === mobile_dashboardvue_type_script_lang_js_pageCoor.x && e.pageY === mobile_dashboardvue_type_script_lang_js_pageCoor.y) {
        mobile_dashboardvue_type_script_lang_js_pageCoor.x = e.pageX;
        mobile_dashboardvue_type_script_lang_js_pageCoor.y = e.pageY;
        return;
      }

      mobile_dashboardvue_type_script_lang_js_pageCoor.x = e.pageX;
      mobile_dashboardvue_type_script_lang_js_pageCoor.y = e.pageY;

      if (isDescendant(this._el, e.target)) {
        return this.showDashboard(0);
      }

      this.showDashboard();
    },
    _onMouseleave: function _onMouseleave() {
      this.showDashboard();
    },
    _onMouseover: function _onMouseover() {
      this.showDashboard(0);
    },
    _onTouchend: function _onTouchend() {
      this.showDashboard();
    }
  },
  mounted: function mounted() {
    var controls = this.controls;

    if (!controls) {
      this.show = false;
    } else if (controls === 'fixed') {
      this.show = true;
    } else {
      this._initAutoMode();
    }
  }
});
// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mobile_dashboardvue_type_script_lang_js_ = (mobile_dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/dashboard/mobile-dashboard.vue?vue&type=style&index=0&lang=css&
var mobile_dashboardvue_type_style_index_0_lang_css_ = __webpack_require__("a3e9");

// CONCATENATED MODULE: ./src/dashboard/mobile-dashboard.vue






/* normalize component */

var mobile_dashboard_component = normalizeComponent(
  dashboard_mobile_dashboardvue_type_script_lang_js_,
  mobile_dashboardvue_type_template_id_8cae492e_render,
  mobile_dashboardvue_type_template_id_8cae492e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mobile_dashboard = (mobile_dashboard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/layers.vue?vue&type=template&id=4af5a379&
var layersvue_type_template_id_4af5a379_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-core-video-player-layers"},[_c('cover-layer'),_c('logo-layer'),_c('title-layer'),_c('play-pause-layer'),_c('loading-layer'),_c('error-layer')],1)}
var layersvue_type_template_id_4af5a379_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/layers.vue?vue&type=template&id=4af5a379&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/title-layer.vue?vue&type=template&id=b3191634&
var title_layervue_type_template_id_b3191634_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show && _vm.title.length),expression:"show && title.length"}],staticClass:"vcp-layer title-layer"},[_c('div',{staticClass:"video-title"},[_vm._v(_vm._s(_vm.title))])])}
var title_layervue_type_template_id_b3191634_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/title-layer.vue?vue&type=template&id=b3191634&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/title-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var title_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  data: function data() {
    return {
      title: '',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var title = _this.$player.config.title;

      if (title) {
        _this.title = title;
      }
    });
    this.on(constants_EVENTS.UI_DASHBOARD_SHOW, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.UI_DASHBOARD_HIDE, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/title-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_title_layervue_type_script_lang_js_ = (title_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/title-layer.vue?vue&type=style&index=0&lang=less&
var title_layervue_type_style_index_0_lang_less_ = __webpack_require__("b72f");

// CONCATENATED MODULE: ./src/layers/title-layer.vue






/* normalize component */

var title_layer_component = normalizeComponent(
  layers_title_layervue_type_script_lang_js_,
  title_layervue_type_template_id_b3191634_render,
  title_layervue_type_template_id_b3191634_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var title_layer = (title_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/logo-layer.vue?vue&type=template&id=5837d216&
var logo_layervue_type_template_id_5837d216_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.logo)?_c('div',{staticClass:"vcp-layer logo-layer"},[_c('div',{staticClass:"logo-wrap"},[_c('img',{attrs:{"alt":"logo","src":_vm.logo}})])]):_vm._e()}
var logo_layervue_type_template_id_5837d216_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/logo-layer.vue?vue&type=template&id=5837d216&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/logo-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var logo_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      logo: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var logo = _this.$player.config.logo;

      if (logo) {
        _this.logo = logo;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/layers/logo-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_logo_layervue_type_script_lang_js_ = (logo_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/logo-layer.vue?vue&type=style&index=0&lang=less&
var logo_layervue_type_style_index_0_lang_less_ = __webpack_require__("56fb");

// CONCATENATED MODULE: ./src/layers/logo-layer.vue






/* normalize component */

var logo_layer_component = normalizeComponent(
  layers_logo_layervue_type_script_lang_js_,
  logo_layervue_type_template_id_5837d216_render,
  logo_layervue_type_template_id_5837d216_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logo_layer = (logo_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/play-pause-layer.vue?vue&type=template&id=51ba7abe&
var play_pause_layervue_type_template_id_51ba7abe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer play-pause-layer"},[(!_vm.isPlaying)?_c('a',{staticClass:"btn-control btn-play",attrs:{"href":"javascript:;"},on:{"click":_vm.play}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"31","height":"35","viewBox":"0 0 41 47"}},[_c('path',{attrs:{"d":"M23.5,0,47,41H0Z","transform":"translate(41) rotate(90)","fill":"#ff6060"}})])]):_vm._e(),(_vm.isPlaying)?_c('a',{staticClass:"btn-control btn-pause",attrs:{"href":"javascript:;"},on:{"click":_vm.pause}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"27","height":"36","viewBox":"0 0 36 48"}},[_c('g',{attrs:{"transform":"translate(-950 -398)"}},[_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(950 398)","fill":"#ff6060"}}),_c('rect',{attrs:{"width":"12","height":"48","transform":"translate(974 398)","fill":"#ff6060"}})])])]):_vm._e()])}
var play_pause_layervue_type_template_id_51ba7abe_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue?vue&type=template&id=51ba7abe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/play-pause-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var play_pause_layervue_type_script_lang_js_ = ({
  name: 'PlayPauseLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      show: util_isMobile
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.UI_DASHBOARD_SHOW, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.UI_DASHBOARD_HIDE, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_play_pause_layervue_type_script_lang_js_ = (play_pause_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/play-pause-layer.vue?vue&type=style&index=0&lang=css&
var play_pause_layervue_type_style_index_0_lang_css_ = __webpack_require__("4447");

// CONCATENATED MODULE: ./src/layers/play-pause-layer.vue






/* normalize component */

var play_pause_layer_component = normalizeComponent(
  layers_play_pause_layervue_type_script_lang_js_,
  play_pause_layervue_type_template_id_51ba7abe_render,
  play_pause_layervue_type_template_id_51ba7abe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var play_pause_layer = (play_pause_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/cover-layer.vue?vue&type=template&id=ec51edf8&
var cover_layervue_type_template_id_ec51edf8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer cover-layer"},[_c('img',{attrs:{"alt":"video cover","src":_vm.cover}})])}
var cover_layervue_type_template_id_ec51edf8_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/cover-layer.vue?vue&type=template&id=ec51edf8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/cover-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var cover_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    visible: Boolean
  },
  data: function data() {
    return {
      cover: 'data:image/gif;base64,R0lGODlhAgACAIAAADMzMwAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEQ4MDk3RDgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEQ4MDk3RTgzRTUxMUVBOEFBNkNFRTA4ODA0RDY3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwRDgwOTdCODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwRDgwOTdDODNFNTExRUE4QUE2Q0VFMDg4MDRENjc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAAIAAgAAAgKEUQA7',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.LIFECYCLE_INITING, function () {
      var cover = _this.$player.config.cover;

      if (cover) {
        _this.cover = cover;
      }
    });
    this.on(constants_EVENTS.ERROR_AUTO_PLAY, function () {
      _this.show = true;
    });
    this.on(constants_EVENTS.PLAY, function () {
      _this.show = false;
    });
  }
});
// CONCATENATED MODULE: ./src/layers/cover-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_cover_layervue_type_script_lang_js_ = (cover_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/cover-layer.vue?vue&type=style&index=0&lang=less&
var cover_layervue_type_style_index_0_lang_less_ = __webpack_require__("9983");

// CONCATENATED MODULE: ./src/layers/cover-layer.vue






/* normalize component */

var cover_layer_component = normalizeComponent(
  layers_cover_layervue_type_script_lang_js_,
  cover_layervue_type_template_id_ec51edf8_render,
  cover_layervue_type_template_id_ec51edf8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cover_layer = (cover_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/loading-layer.vue?vue&type=template&id=02bd16d2&
var loading_layervue_type_template_id_02bd16d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer loading-layer"},[_c('div',{staticClass:"loading-wrap"},[_c('div',{staticClass:"h5-layer-loading"},[_c('svg',{staticClass:"spinner",attrs:{"width":"100%","height":"100%","viewBox":"0 0 80 80","xmlns":"http://www.w3.org/2000/svg"}},[_c('defs',[_c('linearGradient',{attrs:{"id":"grad","gradientUnits":"objectBoundingBox","gradientTransform":"rotate(135 0.5 0.5)"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#ff6060"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#fa3b3b"}})],1)],1),_c('circle',{staticClass:"path",attrs:{"stroke":"url(#grad)","stroke-width":"10","fill":"none","stroke-linecap":"round","cx":"40","cy":"40","r":"30"}})])]),_c('p',[_vm._v(_vm._s(_vm.$t('layers.loading.msg')))])])])}
var loading_layervue_type_template_id_02bd16d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/loading-layer.vue?vue&type=template&id=02bd16d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/loading-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var showTimeout = 600;
/* harmony default export */ var loading_layervue_type_script_lang_js_ = ({
  name: 'LoadingLayer',
  mixins: [src_mixins],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    showLoading: function showLoading(isForce) {
      var _this = this;

      if (isForce) {
        this.show = true;
        return;
      }

      window.clearTimeout(this._timeout);
      this._timeout = setTimeout(function () {
        _this.show = true;
      }, showTimeout);
    },
    hideLoading: function hideLoading() {
      window.clearTimeout(this._timeout);
      this.show = false;
    }
  },
  created: function created() {
    var _this2 = this;

    // safari trigger canplaythrough
    this.on([constants_EVENTS.CANPLAY, constants_EVENTS.CANPLAYTHROUGH, constants_EVENTS.PLAY, constants_EVENTS.LOADEDMETADATA, constants_EVENTS.SEEKED, constants_EVENTS.ERROR], function () {
      _this2.hideLoading();
    });
    this.on([constants_EVENTS.SEEKING, constants_EVENTS.STALLED, constants_EVENTS.LOADSTART], function (item) {
      _this2.showLoading();
    });
    this.on(['playing'], function () {
      _this2.hideLoading();
    });
  }
});
// CONCATENATED MODULE: ./src/layers/loading-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_loading_layervue_type_script_lang_js_ = (loading_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/loading-layer.vue?vue&type=style&index=0&lang=less&
var loading_layervue_type_style_index_0_lang_less_ = __webpack_require__("b1ba");

// CONCATENATED MODULE: ./src/layers/loading-layer.vue






/* normalize component */

var loading_layer_component = normalizeComponent(
  layers_loading_layervue_type_script_lang_js_,
  loading_layervue_type_template_id_02bd16d2_render,
  loading_layervue_type_template_id_02bd16d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading_layer = (loading_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2519692a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/error-layer.vue?vue&type=template&id=09510fc8&
var error_layervue_type_template_id_09510fc8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"vcp-layer error-layer"},[_c('div',{staticClass:"error-icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"120","height":"120","viewBox":"0 0 200 200"}},[_c('g',{attrs:{"transform":"translate(-963 -1663)"}},[_c('circle',{attrs:{"data-name":"11","cx":"100","cy":"100","r":"100","transform":"translate(963 1663)","fill":"#ff5e5c"}}),_c('g',{attrs:{"data-name":"46","transform":"translate(1006 1727)","fill":"#fff","stroke":"#fff","stroke-width":"3"}},[_c('rect',{attrs:{"width":"120","height":"73","rx":"2","stroke":"none"}}),_c('rect',{attrs:{"x":"1.5","y":"1.5","width":"117","height":"70","rx":".5","fill":"none"}})]),_c('g',{attrs:{"data-name":"12","transform":"translate(1108 1743)","fill":"#fff","stroke":"#ff5a52","stroke-width":"2"}},[_c('circle',{attrs:{"cx":"6","cy":"6","r":"6","stroke":"none"}}),_c('circle',{attrs:{"cx":"6","cy":"6","r":"5","fill":"none"}})]),_c('path',{attrs:{"data-name":"1","fill":"none","stroke":"#fff","stroke-width":"3","d":"M1057.5 1728.5l30-22"}}),_c('path',{attrs:{"data-name":"2","fill":"none","stroke":"#fff","stroke-width":"3","d":"M1036.5 1697.5l22 30"}}),_c('path',{attrs:{"data-name":"48","d":"M1018 1737h80a4 4 0 0 1 4 4v45a5 5 0 0 1-5 5h-78a5 5 0 0 1-5-5v-45a4 4 0 0 1 4-4z","fill":"#2785f2"}}),_c('g',{attrs:{"data-name":"4","fill":"#ff584c"}},[_c('path',{attrs:{"data-name":"49","d":"M1108 1757h3v2h-3z"}}),_c('path',{attrs:{"data-name":"50","d":"M1113 1757h3v2h-3z"}}),_c('path',{attrs:{"data-name":"51","d":"M1118 1757h3v2h-3z"}})]),_c('g',{attrs:{"data-name":"5","fill":"#ff584c"}},[_c('path',{attrs:{"data-name":"49","d":"M1108 1760h3v2h-3z"}}),_c('path',{attrs:{"data-name":"50","d":"M1113 1760h3v2h-3z"}}),_c('path',{attrs:{"data-name":"51","d":"M1118 1760h3v2h-3z"}})])])])]),_c('div',{staticClass:"error-msg-wrap"},[_c('h2',[_vm._v(_vm._s(_vm.$t('layers.error.title')))]),_c('p',{staticClass:"error-msg"},[_vm._v(_vm._s(_vm.errMsg))])])])}
var error_layervue_type_template_id_09510fc8_staticRenderFns = []


// CONCATENATED MODULE: ./src/layers/error-layer.vue?vue&type=template&id=09510fc8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/error-layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var error_layervue_type_script_lang_js_ = ({
  name: 'CoverLayer',
  mixins: [src_mixins],
  props: {
    dsiable: Boolean
  },
  data: function data() {
    return {
      errMsg: '',
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.on(constants_EVENTS.ERROR, function (e) {
      console.log(e);
      _this.show = true;
      var errorKey = 'layers.error.' + e.code;
      _this.errMsg = helper_i18n.t(errorKey, '');
    });
  }
});
// CONCATENATED MODULE: ./src/layers/error-layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_error_layervue_type_script_lang_js_ = (error_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/error-layer.vue?vue&type=style&index=0&lang=less&
var error_layervue_type_style_index_0_lang_less_ = __webpack_require__("f64c");

// CONCATENATED MODULE: ./src/layers/error-layer.vue






/* normalize component */

var error_layer_component = normalizeComponent(
  layers_error_layervue_type_script_lang_js_,
  error_layervue_type_template_id_09510fc8_render,
  error_layervue_type_template_id_09510fc8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var error_layer = (error_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layers/layers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var layersvue_type_script_lang_js_ = ({
  name: 'Layers',
  components: {
    PlayPauseLayer: play_pause_layer,
    CoverLayer: cover_layer,
    LogoLayer: logo_layer,
    TitleLayer: title_layer,
    LoadingLayer: loading_layer,
    ErrorLayer: error_layer
  },
  props: {
    visible: Boolean
  }
});
// CONCATENATED MODULE: ./src/layers/layers.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_layersvue_type_script_lang_js_ = (layersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layers/layers.vue?vue&type=style&index=0&lang=css&
var layersvue_type_style_index_0_lang_css_ = __webpack_require__("2c1a");

// CONCATENATED MODULE: ./src/layers/layers.vue






/* normalize component */

var layers_component = normalizeComponent(
  layers_layersvue_type_script_lang_js_,
  layersvue_type_template_id_4af5a379_render,
  layersvue_type_template_id_4af5a379_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layers_layers = (layers_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-core-video-player.vue?vue&type=script&lang=js&








function vue_core_video_playervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vue_core_video_playervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_core_video_playervue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_core_video_playervue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var vue_core_video_playervue_type_script_lang_js_ = ({
  name: 'VueCoreVideoPlayer',
  mixins: [src_mixins],
  components: {
    Dashboard: dashboard,
    MobileDashboard: mobile_dashboard,
    Layers: layers_layers
  },
  props: {
    src: [String, Array],
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    title: String,
    cover: String,
    logo: String,
    muted: {
      type: Boolean,
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: true
    },
    lang: {
      type: [String, Object],
      default: 'en'
    },
    core: {
      type: Function
    },
    viewCore: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startRange: String,
    rangeSize: String
  },
  data: function data() {
    return {
      isMobile: util_isMobile
    };
  },
  computed: {
    source: function source() {
      var src = this.src;

      if (!src) {
        return '';
      }

      var resolution = this.resolution || constants_DEFAULT_CONFIG.resolution;
      var medias = parseMediaList(src);
      var url;
      medias.forEach(function (media) {
        if (media.resolution === resolution) {
          url = media.src;
        }
      });

      if (!url) {
        if (typeof_typeof(medias[0]) === 'object' && medias[0].src) {
          url = medias[0].src;
        } else if (typeof medias[0] === 'string') {
          url = medias[0];
        }
      }

      if (this.$player) {
        this.$player.setSource(src);
      }

      return url;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // const self = this
    this.$player = this.videoCore = initVideoCore(vue_core_video_playervue_type_script_lang_js_objectSpread({}, this.$props, {
      videoEl: this.$refs['vcp-video'],
      el: this.$refs['vcp-el'],
      eventEmitter: {
        on: this.on,
        emit: this.emit,
        off: this.off
      }
    }));
    Object.values(constants_EVENTS).forEach(function (item) {
      _this.$player.on(item, function (e) {
        if (typeof _this.$listeners[item] === 'function') {
          _this.$listeners[item](e);
        }
      });
    });
    this._coreID = this.videoCore.id;
    this.emit(constants_EVENTS.LIFECYCLE_INITING, this.$player);

    try {
      this.viewCore.map(function (item) {
        if (typeof item === 'function') {
          item(_this.$player, _this.$player.config);
        }
      });
    } catch (err) {
      console.error(err);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$player.destroy();
  }
});
// CONCATENATED MODULE: ./src/vue-core-video-player.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_core_video_playervue_type_script_lang_js_ = (vue_core_video_playervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-core-video-player.vue?vue&type=style&index=0&land=less&lang=css&
var vue_core_video_playervue_type_style_index_0_land_less_lang_css_ = __webpack_require__("bead");

// CONCATENATED MODULE: ./src/vue-core-video-player.vue






/* normalize component */

var vue_core_video_player_component = normalizeComponent(
  src_vue_core_video_playervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_core_video_player = (vue_core_video_player_component.exports);
// CONCATENATED MODULE: ./src/index.js




var VueCoreVideoPlayerPlugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    helper_i18n.setLocale(options.lang);

    Vue.prototype.$t = function (expression) {
      return helper_i18n.t(expression);
    };

    Vue.component('vue-core-video-player', vue_core_video_player);
  }
};
/* harmony default export */ var src_0 = (VueCoreVideoPlayerPlugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport BaseVideoCore */__webpack_require__.d(__webpack_exports__, "BaseVideoCore", function() { return base; });
/* concated harmony reexport EVENTS */__webpack_require__.d(__webpack_exports__, "EVENTS", function() { return constants_EVENTS; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "ff1c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7335");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4cfaecc1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
//# sourceMappingURL=vue-core-video-player.common.js.map