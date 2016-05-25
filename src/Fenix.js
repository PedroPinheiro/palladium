import { MemoryCache } from "./cache";
import Endpoint        from "./endpoint";

let _defaults = {
    cache: {
        expires: 30,
        type: MemoryCache
    }
};

class Fenix extends Endpoint {

    constructor ({url,config}) {

        url = url.slice(-1) === "/" ? url.slice(0,-1) : url;

        super({url,config});

    }

    get defaults() {
        return _defaults
    }

    set defaults(newDefaults) {
        _defaults = Object.assign(_defaults, newDefaults)
    }

}

export default Fenix;
