import Method        from "./Method";

class Delete extends Method {

    constructor({url}) {

        super({url, method: "DELETE"})

    }

}

export default Delete;
