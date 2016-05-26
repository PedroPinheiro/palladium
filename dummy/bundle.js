/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _fenixjs = __webpack_require__(1);

	var _fenixjs2 = _interopRequireDefault(_fenixjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_fenixjs2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cache = __webpack_require__(2);

	var _endpoint = __webpack_require__(7);

	var _endpoint2 = _interopRequireDefault(_endpoint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fenix = function (_Endpoint) {
	    _inherits(Fenix, _Endpoint);

	    function Fenix(params) {
	        _classCallCheck(this, Fenix);

	        var url = params.url;


	        url = url.slice(-1) === "/" ? url.slice(0, -1) : url;

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Fenix).call(this, params));
	    }

	    return Fenix;
	}(_endpoint2.default);

	exports.default = Fenix;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LocalStorageCache = exports.MemoryCache = undefined;

	var _MemoryCache = __webpack_require__(3);

	var _MemoryCache2 = _interopRequireDefault(_MemoryCache);

	var _LocalStorageCache = __webpack_require__(6);

	var _LocalStorageCache2 = _interopRequireDefault(_LocalStorageCache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.MemoryCache = _MemoryCache2.default;
	exports.LocalStorageCache = _LocalStorageCache2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(4);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var data = {};

	var MemoryCache = function (_BaseCache) {
	    _inherits(MemoryCache, _BaseCache);

	    function MemoryCache() {
	        _classCallCheck(this, MemoryCache);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MemoryCache).call(this));
	    }

	    _createClass(MemoryCache, [{
	        key: "add",
	        value: function add(key, value, expires) {

	            var item = _get(Object.getPrototypeOf(MemoryCache.prototype), "add", this).call(this, key, value, expires);

	            data[key] = item;

	            this._collectGarbage();
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            return data[key];
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            delete data[key];
	        }
	    }, {
	        key: "_collectGarbage",
	        value: function _collectGarbage() {}
	    }]);

	    return MemoryCache;
	}(_BaseCache3.default);

	exports.default = new MemoryCache();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CacheItem = __webpack_require__(5);

	var _CacheItem2 = _interopRequireDefault(_CacheItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseCache = function () {
	    function BaseCache() {
	        _classCallCheck(this, BaseCache);

	        if (this.constructor === BaseCache) {
	            throw new TypeError("BaseCache is an abstract class and must be inherited.");
	        }
	        if (typeof this.get !== "function") {
	            throw new TypeError("Please implement abstract method get.");
	        }
	        if (typeof this.remove !== "function") {
	            throw new TypeError("Please implement abstract method remove.");
	        }
	    }

	    _createClass(BaseCache, [{
	        key: "add",
	        value: function add(key, value, expires) {
	            if (this.constructor === BaseCache) {
	                throw new TypeError("BaseCache is abstract!");
	            }

	            return new _CacheItem2.default({ key: key, value: value, expires: expires });
	        }
	    }]);

	    return BaseCache;
	}();

	exports.default = BaseCache;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _key = "";
	var _value = null;
	var _expires = 0;

	var CacheItem = function () {
	    function CacheItem(_ref) {
	        var key = _ref.key;
	        var value = _ref.value;
	        var expires = _ref.expires;

	        _classCallCheck(this, CacheItem);

	        _key = value;
	        _value = value;
	        _expires = expires;
	    }

	    _createClass(CacheItem, [{
	        key: "key",
	        get: function get() {
	            return _key;
	        }
	    }, {
	        key: "value",
	        get: function get() {
	            return _value;
	        }
	    }, {
	        key: "expires",
	        get: function get() {
	            return _expires;
	        }
	    }]);

	    return CacheItem;
	}();

	exports.default = CacheItem;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(4);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// if (typeof localStorage === 'undefined') {
	//     const LocalStorage = require('node-localstorage').LocalStorage;
	//     const localStorage = new LocalStorage('./scratch');
	// }

	var LocalStorageCache = function (_BaseCache) {
	    _inherits(LocalStorageCache, _BaseCache);

	    function LocalStorageCache() {
	        _classCallCheck(this, LocalStorageCache);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LocalStorageCache).call(this));
	    }

	    _createClass(LocalStorageCache, [{
	        key: "add",
	        value: function add(key, value, expires) {

	            var item = _get(Object.getPrototypeOf(LocalStorageCache.prototype), "add", this).call(this, key, value, expires);

	            localStorage.setItem(key, item);
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            return localStorage.getItem(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            localStorage.removeItem(key);
	        }
	    }]);

	    return LocalStorageCache;
	}(_BaseCache3.default);

	exports.default = new LocalStorageCache();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Service = exports.Resource = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _methods = __webpack_require__(8);

	var _cache = __webpack_require__(2);

	var _config = __webpack_require__(17);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _reservedWords = Object.keys(_config.fenixDefaults);

	var Endpoint = function () {
	    function Endpoint(_ref) {
	        var _this = this;

	        var url = _ref.url;
	        var config = _ref.config;
	        var defaults = _ref.defaults;

	        _classCallCheck(this, Endpoint);

	        this._onInit({ url: url, config: config, defaults: defaults });

	        this._url = url;
	        this._config = config;

	        this._setDefaults(defaults);

	        // iterate throw the config to get subEndpoints
	        Object.keys(config).forEach(function (k) {
	            // not a endpoint
	            if (!_this._isEndpoint(k)) {
	                return;
	            }
	            var params = {
	                url: url + "/" + k,
	                config: config[k],
	                defaults: Object.assign(_this._defaults.options, config[k].options)
	            };
	            var subEndpoint = EndpointFactory.create(params);
	            _this._handleSubendpoint(k, subEndpoint);
	        });
	    }

	    _createClass(Endpoint, [{
	        key: "_setDefaults",
	        value: function _setDefaults(defaults) {
	            this._defaults = Object.assign({}, _config.fenixDefaults, defaults);
	        }
	    }, {
	        key: "_isEndpoint",
	        value: function _isEndpoint(word) {
	            return _reservedWords.indexOf(word) == -1;
	        }
	    }, {
	        key: "_handleSubendpoint",
	        value: function _handleSubendpoint(key, endpoint) {
	            this[key] = endpoint;
	        }
	    }, {
	        key: "_onInit",
	        value: function _onInit(_ref2) {
	            var url = _ref2.url;
	            var config = _ref2.config;
	        }
	    }]);

	    return Endpoint;
	}();

	var Resource = function (_Endpoint) {
	    _inherits(Resource, _Endpoint);

	    function Resource(params) {
	        var _ret;

	        _classCallCheck(this, Resource);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Resource).call(this, params));

	        return _ret = _this2._formatReturn(), _possibleConstructorReturn(_this2, _ret);
	    }

	    _createClass(Resource, [{
	        key: "_onInit",
	        value: function _onInit(_ref3) {
	            var url = _ref3.url;
	            var config = _ref3.config;

	            var cache = this._getConfigCacheOrDefault(config);
	            this._methods = {
	                get: new _methods.Get({ url: url, cache: cache }),
	                post: new _methods.Post({ url: url }),
	                put: new _methods.Put({ url: url }),
	                del: new _methods.Delete({ url: url })
	            };
	            this._subEndpoints = {};
	        }
	    }, {
	        key: "_formatReturn",
	        value: function _formatReturn() {

	            var returnFunction = this._processGet.bind(this);
	            returnFunction.save = this.save.bind(this);
	            returnFunction.delete = this.delete.bind(this);
	            returnFunction;
	            //
	            // Object.assign(returnFunction,
	            //               this._methods,
	            //               this._subEndpoints)

	            return returnFunction;
	        }
	    }, {
	        key: "_processGet",
	        value: function _processGet(id) {

	            return !id ? this._methods.get.execute() : this._nestedResource(id);
	        }
	    }, {
	        key: "_nestedResource",
	        value: function _nestedResource(id) {

	            var url = this._url + "/" + id;
	            var config = this._config;

	            var newResource = new Resource({ url: url, config: config });

	            // copy sub routes too
	            for (var i in this) {
	                if (typeof this[i] !== "function") continue;
	                if (typeof i === "_privateKey") continue;
	                newResource[i] = this[i];
	                newResource[i].url = url + "/" + i;
	            }

	            return newResource;
	        }
	    }, {
	        key: "save",
	        value: function save(data) {
	            if (!data[this._defaults.options.pk]) {
	                return this._methods.post.execute(data);
	            } else {
	                return this._methods.put.execute(data);
	            }
	        }
	    }, {
	        key: "delete",
	        value: function _delete(data) {
	            return this._methods.delete.execute(data);
	        }
	    }, {
	        key: "_getConfigCacheOrDefault",
	        value: function _getConfigCacheOrDefault(config) {
	            var cache = config.cache;

	            if (typeof cache !== "undefined" && typeof cache.type === "undefined") {
	                cache.type = _cache.MemoryCache;
	            }
	            return cache;
	        }
	    }, {
	        key: "_handleSubendpoint",
	        value: function _handleSubendpoint(key, endpoint) {
	            this._subEndpoints[key] = endpoint;
	        }
	    }]);

	    return Resource;
	}(Endpoint);

	var Service = function (_Endpoint2) {
	    _inherits(Service, _Endpoint2);

	    function Service(params) {
	        var _ret2;

	        _classCallCheck(this, Service);

	        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Service).call(this, params));

	        return _ret2 = _this3._formatReturn(), _possibleConstructorReturn(_this3, _ret2);
	    }

	    _createClass(Service, [{
	        key: "_onInit",
	        value: function _onInit(_ref4) {
	            var url = _ref4.url;
	            var config = _ref4.config;


	            var Method = config.methods == "GET" ? _methods.Get : config.methods == "POST" ? _methods.Post : config.methods == "DELETE" ? _methods.Delete : config.methods == "PUT" ? _methods.Put : null;

	            if (Method == null) throw new Exception("Invalid Method");

	            this._method = new Method({ url: url });
	            this._subEndpoints = {};
	        }
	    }, {
	        key: "_processMethod",
	        value: function _processMethod(data) {
	            return this._method.execute(data);
	        }
	    }, {
	        key: "_formatReturn",
	        value: function _formatReturn(data) {
	            return Object.assign(this._processMethod.bind(this), this._subEndpoints);
	        }
	    }, {
	        key: "_handleSubendpoint",
	        value: function _handleSubendpoint(key, endpoint) {
	            this[key] = endpoint;
	            this._subEndpoints[key] = endpoint;
	        }
	    }]);

	    return Service;
	}(Endpoint);

	var EndpointFactory = function () {
	    function EndpointFactory() {
	        _classCallCheck(this, EndpointFactory);
	    }

	    _createClass(EndpointFactory, null, [{
	        key: "create",
	        value: function create(params) {
	            var config = params.config;

	            return config.methods == "*" ? new Resource(params) : new Service(params);
	        }
	    }]);

	    return EndpointFactory;
	}();

	exports.default = Endpoint;
	exports.Resource = Resource;
	exports.Service = Service;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Delete = exports.Put = exports.Post = exports.Get = undefined;

	var _Get = __webpack_require__(9);

	var _Get2 = _interopRequireDefault(_Get);

	var _Post = __webpack_require__(14);

	var _Post2 = _interopRequireDefault(_Post);

	var _Put = __webpack_require__(15);

	var _Put2 = _interopRequireDefault(_Put);

	var _Delete = __webpack_require__(16);

	var _Delete2 = _interopRequireDefault(_Delete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Get = _Get2.default;
	exports.Post = _Post2.default;
	exports.Put = _Put2.default;
	exports.Delete = _Delete2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Method2 = __webpack_require__(10);

	var _Method3 = _interopRequireDefault(_Method2);

	var _utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Get = function (_Method) {
	    _inherits(Get, _Method);

	    function Get(_ref) {
	        var url = _ref.url;
	        var cache = _ref.cache;

	        _classCallCheck(this, Get);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Get).call(this, { url: url, method: "GET" }));

	        _this._cache = cache;
	        return _this;
	    }

	    _createClass(Get, [{
	        key: "execute",
	        value: function execute() {
	            var _this2 = this;

	            var url = this.url;
	            var cache = this.cache;


	            var fetcher = {};

	            var promise = new _utils.AbortablePromise(function (resolve, response) {
	                var valueFromCache = _this2._getDataFromCache();
	                if (valueFromCache) {
	                    resolve(valueFromCache);
	                    return;
	                }

	                fetcher = _get(Object.getPrototypeOf(Get.prototype), "execute", _this2).call(_this2).then(function (data) {
	                    _this2._saveDataToCache(data);
	                    resolve(data);
	                }).catch(response);
	            });

	            promise.setAbort(fetcher._abort);

	            return promise;
	        }
	    }, {
	        key: "_getDataFromCache",
	        value: function _getDataFromCache() {
	            var url = this.url;
	            var cache = this.cache;


	            if (!cache) return;

	            var cacheItem = cache.type.get(url);
	            if (cacheItem) {
	                var now = new Date().getTime();
	                // use cache
	                if (cacheItem.expires > now) {
	                    return cacheItem.value;
	                    // remove expired cacheItem
	                } else {
	                        cache.type.remove(url);
	                    }
	            }

	            return;
	        }
	    }, {
	        key: "_saveDataToCache",
	        value: function _saveDataToCache(value) {
	            var cache = this.cache;
	            var url = this.url;


	            if (!cache) return;

	            var cacheExpires = cache.expires;
	            var cacheType = cache.type;


	            cacheExpires = parseInt(cacheExpires) * 1000;
	            var expireDate = new Date().getTime() + cacheExpires;
	            cacheType.add(url, value, expireDate);
	        }
	    }, {
	        key: "cache",
	        get: function get() {
	            return this._cache;
	        }
	    }]);

	    return Get;
	}(_Method3.default);

	exports.default = Get;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _fetcher = __webpack_require__(11);

	var _fetcher2 = _interopRequireDefault(_fetcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Method = function () {
	    function Method(_ref) {
	        var url = _ref.url;
	        var method = _ref.method;

	        _classCallCheck(this, Method);

	        this._url = url;
	        this._method = method;
	    }

	    _createClass(Method, [{
	        key: "execute",
	        value: function execute(data, options) {

	            return (0, _fetcher2.default)(this.method, this.url, data);
	        }
	    }, {
	        key: "url",
	        get: function get() {
	            return this._url;
	        }
	    }, {
	        key: "method",
	        get: function get() {
	            return this._method;
	        }
	    }]);

	    return Method;
	}();

	exports.default = Method;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = fetcher;

	var _utils = __webpack_require__(12);

	// if (typeof XMLHttpRequest === 'undefined') {
	//     var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	// }
	//
	if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
	    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");

	function fetcher(method, url, data) {

	    var xhr = new XMLHttpRequest();
	    var a = [];
	    xhr.open(method, url, true);

	    console.log("log: fetcher:", method, url);

	    var promise = new _utils.AbortablePromise(function (resolve, response) {

	        var res = {};
	        xhr.onreadystatechange = function () {

	            // Test if request is complete
	            if (xhr.readyState == 4) {

	                // Safari doesn't support xhr.responseType = 'json'
	                // so the response is parsed
	                if (xhr.status >= 200 && xhr.status < 300) {
	                    try {
	                        res.data = JSON.parse(xhr.responseText);
	                    } catch (e) {
	                        res = {};
	                    }
	                    resolve(res);
	                }
	            }
	        };

	        xhr.send(data);
	    });

	    promise.setAbort(function () {
	        return xhr.abort();
	    });

	    return promise;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AbortablePromise = undefined;

	var _AbortablePromise = __webpack_require__(13);

	var _AbortablePromise2 = _interopRequireDefault(_AbortablePromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AbortablePromise = _AbortablePromise2.default;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AbortablePromise = function (_Promise) {
	    _inherits(AbortablePromise, _Promise);

	    function AbortablePromise() {
	        _classCallCheck(this, AbortablePromise);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbortablePromise).apply(this, arguments));
	    }

	    _createClass(AbortablePromise, [{
	        key: "abort",
	        value: function abort() {
	            return this._abort ? this._abort() : null;
	        }
	    }, {
	        key: "setAbort",
	        value: function setAbort(abort) {
	            this._abort = abort;
	        }
	    }, {
	        key: "then",
	        value: function then(params) {
	            var p = _get(Object.getPrototypeOf(AbortablePromise.prototype), "then", this).call(this, params);
	            p._abort = this._abort;
	            return p;
	        }
	    }, {
	        key: "catch",
	        value: function _catch(params) {
	            var p = _get(Object.getPrototypeOf(AbortablePromise.prototype), "catch", this).call(this, params);
	            p._abort = this._abort;
	            return p;
	        }
	    }]);

	    return AbortablePromise;
	}(Promise);

	exports.default = AbortablePromise;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Method2 = __webpack_require__(10);

	var _Method3 = _interopRequireDefault(_Method2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Post = function (_Method) {
	    _inherits(Post, _Method);

	    function Post(_ref) {
	        var url = _ref.url;

	        _classCallCheck(this, Post);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this, { url: url, method: "POST" }));
	    }

	    return Post;
	}(_Method3.default);

	exports.default = Post;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Method2 = __webpack_require__(10);

	var _Method3 = _interopRequireDefault(_Method2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Put = function (_Method) {
	    _inherits(Put, _Method);

	    function Put(_ref) {
	        var url = _ref.url;

	        _classCallCheck(this, Put);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Put).call(this, { url: url, method: "PUT" }));
	    }

	    return Put;
	}(_Method3.default);

	exports.default = Put;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Method2 = __webpack_require__(10);

	var _Method3 = _interopRequireDefault(_Method2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Delete = function (_Method) {
	    _inherits(Delete, _Method);

	    function Delete(_ref) {
	        var url = _ref.url;

	        _classCallCheck(this, Delete);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Delete).call(this, { url: url, method: "DELETE" }));
	    }

	    return Delete;
	}(_Method3.default);

	exports.default = Delete;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var fenixDefaults = {
	    cache: null,
	    methods: '*',
	    options: { pk: "id" }
	};

	exports.fenixDefaults = fenixDefaults;

/***/ }
/******/ ]);