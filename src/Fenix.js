
if (typeof XMLHttpRequest === 'undefined') {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

if (typeof window !== "undefined" && !window.XMLHttpRequest) // code for IE6, IE5
    XMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");


let _mCache = {};

class Fenix {

    get _cache() {
        return _mCache;
    }

    _formatMethods (m) {

        m = m==="*" ? ["GET","POST","PUT","DELETE"] : m;
        m = typeof m === "string" ? [m] : m;
        return m;
    }

    _createMethods (urlBase, source, sourceName) {

        let methods = {}

        methods.GET    = (id) => {

            let url = (id) ? `${urlBase}${sourceName}/${id}` : `${urlBase}${sourceName}`;

            return new Promise((resolve, response) => {

                if (typeof source.cache !== "undefined" && this._cache[url]) {
                    let now = (new Date()).getTime();
                    if (this._cache[url].expireDate > now) {
                        resolve(this._cache[url].res);
                        return;
                    }
                }

                let fnSaveCache = (res) => {

                    if (typeof source.cache === "undefined")
                        return;

                    let expires = parseInt(source.cache.expires)*1000;
                    let expireDate = (new Date()).getTime()+expires;
                    this._cache[url] = { res, expireDate };
                }

                this._fetch('GET', url, null, fnSaveCache)
                    .then(resolve)
                    .catch(response);

            });

        }
        methods.POST   = (data) => this._fetch('POST',   `${urlBase}${sourceName}/${data.id}`, data);
        methods.PUT    = (data) => this._fetch('PUT',    `${urlBase}${sourceName}/${data.id}`, data);
        methods.DELETE = (id)   => this._fetch('DELETE', `${urlBase}${sourceName}/${id}`);

        return methods;
    }

    _getSourceObject (m, methods) {

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

    _processSources (urlBase, sources) {

        // iterate throw all sources
        Object.keys(sources).forEach((k) => {

            // obtain the methods
            let m = this._formatMethods(sources[k].methods);

            // methods
            let methods = this._createMethods(urlBase, sources[k], k);

            // The  
            this[k] = this._getSourceObject(m, methods);

        });  
    }

    constructor ({ urlBase, sources }) {

        urlBase += urlBase.slice(-1) !== "/" ? "/" : "";
        
        this._processSources(urlBase, sources);

    }

    _saveCache (url) {

        this._cache[url]
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
                      res.data = JSON.parse(xhr.responseText)
                    } catch (e) {
                      res = {}
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