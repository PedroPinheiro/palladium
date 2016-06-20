"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Method2 = require("./Method");

var _Method3 = _interopRequireDefault(_Method2);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Get = function (_Method) {
    _inherits(Get, _Method);

    function Get(_ref) {
        var url = _ref.url;
        var cache = _ref.cache;
        var options = _ref.options;

        _classCallCheck(this, Get);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Get).call(this, { url: url, method: "GET", options: options }));

        _this._cache = cache;
        return _this;
    }

    _createClass(Get, [{
        key: "execute",
        value: function execute(data) {
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

                fetcher = _get(Object.getPrototypeOf(Get.prototype), "execute", _this2).call(_this2, data).then(function (responseData) {
                    _this2._saveDataToCache(responseData);
                    resolve(responseData);
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