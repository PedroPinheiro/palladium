import Method        from "./Method";

class Put extends Method {

    constructor({url, options}) {

        super({url, method: "PUT", options})

    }

}

export default Put;
