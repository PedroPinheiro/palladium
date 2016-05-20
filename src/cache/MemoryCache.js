import BaseCache from "./BaseCache";

let data = {};

class MemoryCache extends BaseCache {

    constructor() {
        super();
    }

    add(key, value, expires) {

        let item = super.add(key, value, expires);

        data[key] = item;

        this._collectGarbage();
    }

    get(key) {
        return data[key];
    }

    remove(key) {
        delete data[key]
    }

    _collectGarbage() {

    }

}

export default new MemoryCache();
