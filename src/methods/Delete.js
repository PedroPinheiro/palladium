import Method        from "./Method";

class Delete extends Method {

    constructor({url, cache}) {

        super({url, cache, method: "DELETE"})

    }

}

export default Delete;
