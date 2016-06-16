import fetcher        from "../fetcher";

class Method {

    constructor({url, method, options}) {
        this._url     = url;
        this._options = options;
        this._method  = method;
    }

    get url() {
        return this._url;
    }

    get options() {
        return this._options;
    }

    get method() {
        return this._method;
    }

    execute(data) {

        return fetcher(this.method,
                       this.url,
                       data,
                       this.options);

    }

}

export default Method;
