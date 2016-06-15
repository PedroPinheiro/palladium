"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocalStorageCache = exports.MemoryCache = undefined;

var _MemoryCache = require("./MemoryCache");

var _MemoryCache2 = _interopRequireDefault(_MemoryCache);

var _LocalStorageCache = require("./LocalStorageCache");

var _LocalStorageCache2 = _interopRequireDefault(_LocalStorageCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MemoryCache = _MemoryCache2.default;
exports.LocalStorageCache = _LocalStorageCache2.default;