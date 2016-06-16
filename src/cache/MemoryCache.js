import BaseCache from "./BaseCache";


class MemoryCache extends BaseCache {

    constructor() {
        super();
        this._data = {};
    }

    add(key, value, expires) {

        let item = super.add(key, value, expires);

        this._data[key] = item;

        this._collectGarbage();
    }

    get(key) {
        return this._data[key];
    }

    remove(key) {
        delete this._data[key]
    }

    _collectGarbage() {

    }

}

export default new MemoryCache();
