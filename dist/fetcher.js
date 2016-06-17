"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetcher;

var _utils = require("./utils");

// if (typeof XMLHttpRequest === 'undefined') {
//     var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// }
//
if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");

function fetcher(method, url, data) {
    var config = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];


    var xhr = new XMLHttpRequest();
    var a = [];
    xhr.open(method, url, true);

    var promise = new _utils.AbortablePromise(function (resolve, response) {

        var res = {};
        xhr.onreadystatechange = function () {

            // Test if request is complete
            if (xhr.readyState == 4) {

                Object.keys(config.responseHeaders || {}).forEach(function (h) {
                    return config.responseHeaders[h] = xhr.getResponseHeader(h);
                });

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

        Object.keys(config.requestHeaders || {}).forEach(function (h) {
            return xhr.setRequestHeader(h, config.requestHeaders[h]);
        });

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    });

    promise.setAbort(function () {
        return xhr.abort();
    });

    return promise;
}