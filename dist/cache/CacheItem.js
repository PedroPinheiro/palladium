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