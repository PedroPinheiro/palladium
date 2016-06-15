"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fetcher = require("../fetcher");

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