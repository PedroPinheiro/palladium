import get             from "../methods/functionGet";
import { MemoryCache } from "../cache";

const _reservedWords = ["cache","methods"];

class Endpoint {

    constructor({url, config}) {

        this._onInit({url,config});

        // iterate throw the config
        Object.keys(config).forEach((k) => {
            if (this._isReservedWord(k)) {
                return;
            }
            let item = config[k];
            let params = {url: `${url}/${k}`, config: item};
            let subEndpoint = EndpointFactory.create(params);
            this._handleSubendpoint(k, subEndpoint);
        });

    }

    _isReservedWord(word) {
        return _reservedWords.indexOf(word)>-1;
    }

    _handleSubendpoint(key, endpoint) {
        this[key] = endpoint;
    }

    _onInit({url,config}) {
    }

}


let _get = get.clone();
let _getCache = (config) => {
    let {cache} = config;
    if (typeof cache !== "undefined" && typeof cache.type === "undefined") {
        cache.type = MemoryCache;
    }
    return cache;
}

class Resource extends Endpoint {

    constructor({url, config}) {

        super({url,config});

        return this._get;
    }

    _onInit({url,config}) {
        this._get = get.clone();
        this._get.url = url;
        this._get.cache = _getCache(config);
    }

    _handleSubendpoint(key, endpoint) {
        this._get[key] = endpoint
    }

}

class Service extends Endpoint {

    constructor({url, config}) {

        super({url,config});
    }

}

class EndpointFactory {

    static create(params) {
        return new Resource(params);
    }

}


export default Endpoint;
export { Resource, Service };
