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

    var xhr = new XMLHttpRequest();
    var a = [];
    xhr.open(method, url, true);

    var promise = new _utils.AbortablePromise(function (resolve, response) {

        var res = {};
        xhr.onreadystatechange = function () {

            // Test if request is complete
            if (xhr.readyState == 4) {

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

        xhr.send(data);
    });

    promise.setAbort(function () {
        return xhr.abort();
    });

    return promise;
}