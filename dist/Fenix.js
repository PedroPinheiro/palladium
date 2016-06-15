"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cache = require("./cache");

var _endpoint = require("./endpoint");

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