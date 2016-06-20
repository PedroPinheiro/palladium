
// if (typeof XMLHttpRequest === 'undefined') {
//     var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// }
//
if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");

import { AbortablePromise } from "./utils";

const getQueryString = (data) => {
    let keys = Object.keys(data)
    if (keys.length==1)
        return encodeURI(`?${keys[0]}=${data[keys[0]]}`)

    return encodeURI(keys.reduce((s,k,i) => (i==1?`?${s}=${data[s]}`:s)+`&${k}=${data[k]}`));
}

export default function fetcher (method, url, data, config = {}) {

    if (method == "GET" && data && typeof data == "object") {
        url += getQueryString(data)
        data = null
    }

    let xhr = new XMLHttpRequest();
    let a = [];
    xhr.open(method, url, true);

    let promise = new AbortablePromise((resolve, response) => {

        let res = {};
        xhr.onreadystatechange = () => {

            // Test if request is complete
            if (xhr.readyState == 4) {

              Object.keys(config.responseHeaders||{})
                .forEach(h => config.responseHeaders[h] = xhr.getResponseHeader(h) );

              // Safari doesn't support xhr.responseType = 'json'
              // so the response is parsed
              if (xhr.status>=200 && xhr.status<300) {
                try {
                  res.data = JSON.parse(xhr.responseText);
                } catch (e) {
                  res = {};
                }
                resolve(res);
              }
            }
        };

        Object.keys(config.requestHeaders||{})
            .forEach(h => xhr.setRequestHeader(h, config.requestHeaders[h]) );

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));

    });

    promise.setAbort(() => xhr.abort());

    return promise;

}
