"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CacheItem = require("./CacheItem");

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