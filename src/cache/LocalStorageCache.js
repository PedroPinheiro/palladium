import BaseCache from "./BaseCache";

// if (typeof localStorage === 'undefined') {
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage = new LocalStorage('./scratch');
// }

class LocalStorageCache extends BaseCache {

    constructor() {
        super();
    }

    async add(key, value, expires) {

        let item = await super.add(key, value, expires);

        localStorage.setItem(key, item);
    }

    get(key) {
        return localStorage.getItem(key);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

}

export default new LocalStorageCache();
