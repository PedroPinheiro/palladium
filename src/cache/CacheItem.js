
let _key     = "";
let _value   = null;
let _expires = 0;

class CacheItem {

    constructor({key, value, expires}) {
        _key     = value;
        _value   = value;
        _expires = expires;
    }

    get key() {
        return _key;
    }

    get value() {
        return _value;
    }

    get expires() {
        return _expires;
    }

}

export default CacheItem;
