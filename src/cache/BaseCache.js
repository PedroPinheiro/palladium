import CacheItem from "./CacheItem";

class BaseCache {

    constructor() {
        if (this.constructor === BaseCache) {
            throw new TypeError("BaseCache is an abstract class and must be inherited.");
        }
        if (typeof this.get !== "function") {
            throw new TypeError("Please implement abstract method get.");
        }
        if (typeof this.remove !== "function") {
            throw new TypeError("Please implement abstract method remove.");
        }
    }

    add(key, value, expires) {
        if (this.constructor === BaseCache) {
            throw new TypeError("BaseCache is abstract!");
        }

        return new CacheItem({key, value, expires});
    }

}

export default BaseCache;
