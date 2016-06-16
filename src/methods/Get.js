import Method               from "./Method";
import { AbortablePromise } from "../utils";

class Get extends Method {

    constructor({url, cache, options}) {
        super({url, method: "GET", options});
        this._cache = cache;
    }

    get cache() {
        return this._cache;
    }

    execute() {

        let { url, cache } = this;

        let fetcher = {};

        let promise = new AbortablePromise((resolve, response) => {
            let valueFromCache = this._getDataFromCache();
            if (valueFromCache) {
                resolve(valueFromCache)
                return;
            }

            fetcher = super.execute()
                           .then(data => {
                                this._saveDataToCache(data);
                                resolve(data);
                           })
                           .catch(response)
        });

        promise.setAbort(fetcher._abort);

        return promise;
    }

    _getDataFromCache() {

        let { url, cache } = this;

        if ( !cache )
            return;

        let cacheItem = cache.type.get(url);
        if (cacheItem) {
            let now = (new Date()).getTime();
            // use cache
            if (cacheItem.expires > now) {
                return cacheItem.value;
            // remove expired cacheItem
            } else {
                cache.type.remove(url);
            }
        }

        return;
    }

    _saveDataToCache(value) {

        let { cache, url } = this;

        if ( !cache )
            return;

        let {
                expires: cacheExpires,
                type: cacheType
            } = cache;

        cacheExpires = parseInt(cacheExpires)*1000;
        let expireDate = (new Date()).getTime()+cacheExpires;
        cacheType.add(url, value, expireDate);
    }

}

export default Get;
