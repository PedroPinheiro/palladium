import { Get, Post, Put, Delete } from "../methods";
import { MemoryCache }            from "../cache";
import { fenixDefaults }          from "../config";

const _reservedWords = Object.keys(fenixDefaults);

class Endpoint {

    constructor({url,config,defaults}) {

        this._onInit({url,config,defaults});

        this._url    = url;
        this._config = config;

        this._setDefaults(defaults);

        // iterate throw the config to get subEndpoints
        Object.keys(config).forEach((k) => {
            // not a endpoint
            if (!this._isEndpoint(k)) {
                return;
            }
            let configItem = config[k];
            let params = {url: `${url}/${k}`, config: configItem, defaults};
            let subEndpoint = EndpointFactory.create(params);
            this._handleSubendpoint(k, subEndpoint);
        });

    }

    _setDefaults(defaults) {
        this._defaults = Object.assign({}, fenixDefaults, defaults);
    }

    _isEndpoint(word) {
        return _reservedWords.indexOf(word)==-1;
    }

    _handleSubendpoint(key, endpoint) {
        this[key] = endpoint;
    }

    _onInit({url,config}) {
    }

}


class Resource extends Endpoint {

    constructor(params) {

        super(params);

        return this._formatReturn();
    }

    _onInit({url,config}) {
        let cache    = this._getConfigCacheOrDefault(config);
        this._get    = new Get({url, cache});
        this._post   = new Post({url, cache});
        this._put    = new Put({url, cache});
        this._delete = new Delete({url, cache});
        this._subEndpoints = {};
    }

    _formatReturn() {

        let returnFunction = this._processGet.bind(this);
        returnFunction.save = this.save;
        returnFunction.delete = this.delete;

        Object.assign(returnFunction, this._subEndpoints)

        return returnFunction;
    }

    _processGet(id) {

        return ( !id ) ? this._get.execute() : this._nestedResource(id);
    }

    _nestedResource(id) {

        let url    = `${this._url}/${id}`;
        let config = this._config;

        let newResource = new Resource({url, config});

        // copy sub routes too
        for (var i in this) {
            if (typeof this[i] !== "function") continue;
            if (typeof i === "_privateKey") continue;
            newResource[i] = this[i]
            newResource[i].url = `${url}/${i}`;
        }

        return newResource;
    }

    save(data) {
        if (!data.id) {
            return this._post.execute(data);
        } else {
            return this._put.execute(data);
        }
    }

    delete(data) {
        return this._delete.execute(data);
    }

    _getConfigCacheOrDefault(config) {
        let {cache} = config;
        if (typeof cache !== "undefined" && typeof cache.type === "undefined") {
            cache.type = MemoryCache;
        }
        return cache;
    }

    _handleSubendpoint(key, endpoint) {
        this._subEndpoints[key] = endpoint;
    }

}

class Service extends Endpoint {

    constructor(params) {

        super(params);
    }

}

class EndpointFactory {

    static create(params) {
        return new Resource(params);
    }

}


export default Endpoint;
export { Resource, Service };
