import Method        from "./Method";
import cloneFunction from "../utils/cloneFunction";

class Get extends Method {

    constructor({url, cache}) {

        super({url, cache, method: "GET"});

    }

    execute() {

        let { url, cache } = this;

        return new Promise((resolve, response) => {
            let valueFromCache = this._getValueFromCache();
            if (valueFromCache) {
                resolve(valueFromCache)
                return;
            }

            super.execute()
                .then(resolve)
                .catch(response)
        });

    }

    _getValueFromCache() {

        let { cache, url } = this;

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

    _fetchCallback(value) {

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
