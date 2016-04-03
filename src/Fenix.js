
if (typeof XMLHttpRequest === 'undefined') {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");


let _cache = {};

class Fenix {

    get cache() {
        return _cache;
    }

    _formatMethods (m) {

        m = m==="*" ? ["GET","POST","PUT","DELETE"] : m;
        m = typeof m === "string" ? [m] : m;
        return m;
    }

    _createMethods (urlBase, source, sourceName) {

        let methods = {};

        methods.GET    = (id) => {

            let url = (id) ? `${urlBase}${sourceName}/${id}` : `${urlBase}${sourceName}`;

            return new Promise((resolve, response) => {

                if (typeof source.cache !== "undefined" && this.cache[url]) {
                    let now = (new Date()).getTime();
                    if (this.cache[url].expireDate > now) {
                        resolve(this.cache[url].res);
                        return;
                    }
                }

                let fnSaveCache = (res) => {

                    if (typeof source.cache === "undefined")
                        return;

                    let expires = parseInt(source.cache.expires)*1000;
                    let expireDate = (new Date()).getTime()+expires;
                    this.cache[url] = { res, expireDate };
                };

                this._fetch('GET', url, null, fnSaveCache)
                    .then(resolve)
                    .catch(response);

            });

        };
        methods.POST   = (data) => this._fetch('POST',   `${urlBase}${sourceName}/${data.id}`, data);
        methods.PUT    = (data) => this._fetch('PUT',    `${urlBase}${sourceName}/${data.id}`, data);
        methods.DELETE = (id)   => this._fetch('DELETE', `${urlBase}${sourceName}/${id}`);

        return methods;
    }

    _getEndpointObject (m, methods) {

        let _ = null;

        if (m.length===1) {
            _ = methods[m[0]];
        } else {
            if (m.indexOf("GET")>-1) {
                m.splice( m.indexOf('GET'), 1 );
            }
            _ = methods.GET;
            m.forEach(k => _[k.toLowerCase()] = methods[k]);

        }

        return _;
    }

    _processEndpoint (urlBase, config, endpoint) {

        // iterate throw the config
        Object.keys(config).forEach((k) => {

            if (k === "methods" || k === "cache") {
                return;
            }

            // obtain the methods
            let m = this._formatMethods(config[k].methods);

            // methods
            let methods = this._createMethods(urlBase, config[k], k);

            // The
            endpoint[k] = this._getEndpointObject(m, methods);

            this._processEndpoint (urlBase, config[k], endpoint[k]);

        });
    }

    _processRoot (urlBase, config) {

        this._processEndpoint (urlBase, config, this);
    }

    constructor ({ urlBase, root }) {

        urlBase += urlBase.slice(-1) !== "/" ? "/" : "";

        this._processRoot(urlBase, root);

    }

    _saveCache (url) {

        this.cache[url];
    }

    _fetch (method, url, data, cb) {

        let xhr = new XMLHttpRequest();
        let a = [];
        xhr.open(method, url, true);

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


}

export default Fenix;
