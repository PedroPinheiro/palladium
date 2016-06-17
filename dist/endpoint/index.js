"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = exports.Resource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _methods = require("../methods");

var _cache = require("../cache");

var _config = require("../config");

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
            var options = config.options;
            this._methods = {
                get: new _methods.Get({ url: url, cache: cache, options: options }),
                post: new _methods.Post({ url: url, options: options }),
                put: new _methods.Put({ url: url, options: options }),
                del: new _methods.Delete({ url: url, options: options })
            };
            this._subEndpoints = {};
        }
    }, {
        key: "_formatReturn",
        value: function _formatReturn() {

            var returnFunction = this._processGet.bind(this);
            returnFunction.save = this.save.bind(this);
            returnFunction.delete = this.delete.bind(this);

            Object.assign(returnFunction, this._subEndpoints);

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
            if (this._defaults.options && this._defaults.options.pk && data[this._defaults.options.pk]) {
                return this._methods.put.execute(data);
            } else {
                return this._methods.post.execute(data);
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

            var options = config.options;

            this._method = new Method({ url: url, options: options });
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