
if (typeof XMLHttpRequest === 'undefined') {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");


export default function fetcher (method, url, data, cb) {

    let xhr = new XMLHttpRequest();
    let a = [];
    xhr.open(method, url, true);

    console.log("log: fetcher:", method, url);

    return new Promise((resolve, response) => {

        let res = {};
        xhr.onreadystatechange = () => {

            // Test if request is complete
            if (xhr.readyState == 4) {

              // Safari doesn't support xhr.responseType = 'json'
              // so the response is parsed
              if (xhr.status>=200 && xhr.status<300) {
                try {
                  res.data = JSON.parse(xhr.responseText);
                } catch (e) {
                  res = {};
                }
                cb(res);
                resolve(res);
              }
            }
        };

        xhr.send(data);

    });

}
