import Method        from "./Method";

class Put extends Method {

    constructor({url}) {

        super({url, method: "PUT"})

    }

}

export default Put;
