import fetcher        from "../fetcher";

class Method {

    constructor({url, method}) {
        this._url    = url;
        this._method = method;
    }

    get url() {
        return this._url;
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
