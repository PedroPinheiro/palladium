import fetcher        from "../fetcher";
import PrivateSupport from "../utils/PrivateSupport";

class Method {

    constructor({url, cache, method}) {
        this.url.set(this, url);
        this.cache.set(this, cache);
        this.method.set(this, method);
    }

    get url() {
        return this.url.get(this);
    }

    get cache() {
        return this.cache.get(this);
    }

    get method() {
        return this.method.get(this);
    }


    execute(data) {

        return fetcher(this.method,
                       this.url,
                       data,
                       this._fetchCallback.bind(this));

    }

    _fetchCallback(value) {
    }

}

export default Method;
