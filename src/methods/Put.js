import Method        from "./Method";

class Put extends Method {

    constructor({url, cache}) {

        super({url, cache, method: "PUT"})

    }

}

export default Put;
