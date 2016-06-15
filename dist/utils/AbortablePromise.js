"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbortablePromise = function () {
  function AbortablePromise(params) {
    _classCallCheck(this, AbortablePromise);

    this._promise = new Promise(params);
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
      this._promise.then(params);
      return this;
    }
  }, {
    key: "catch",
    value: function _catch(params) {
      this._promise.catch(params);
      return this;
    }
  }]);

  return AbortablePromise;
}();

exports.default = AbortablePromise;