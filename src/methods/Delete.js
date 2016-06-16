import Method        from "./Method";

class Delete extends Method {

    constructor({url, options}) {

        super({url, method: "DELETE", options})

    }

}

export default Delete;
