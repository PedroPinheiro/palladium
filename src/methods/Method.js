import fetcher        from "../fetcher";
import PrivateSupport from "../utils/PrivateSupport";

let _url = new PrivateSupport();
let _cache = new PrivateSupport();
let _method = new PrivateSupport();

class Method {

    constructor({url, cache, method}) {
        _url.set(this, url);
        _cache.set(this, cache);
        _method.set(this, method);
    }

    get url() {
        return _url.get(this);
    }

    get cache() {
        return _cache.get(this);
    }

    get method() {
        return _method.get(this);
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
