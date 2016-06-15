"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Method2 = require("./Method");

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