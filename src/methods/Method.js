import fetcher        from "../fetcher";

class Method {

    constructor({url, cache, method}) {
        this._url    = url;
        this._cache  = cache;
        this._method = method;
    }

    get url() {
        return this._url;
    }

    get cache() {
        return this._cache;
    }

    get method() {
        return this._method;
    }


    execute(data, options) {

        return fetcher(this.method,
                       this.url,
                       data);

    }

}

export default Method;
