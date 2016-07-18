import { MemoryCache } from "./cache";
import Endpoint        from "./endpoint";


class Palladium extends Endpoint {

    constructor (params) {

        let { url } = params;

        url = url.slice(-1) === "/" ? url.slice(0,-1) : url;

        super(params);

    }

}

export default Palladium;
