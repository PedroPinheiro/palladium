import Method        from "./Method";

class Post extends Method {

    constructor({url, options}) {

        super({url, method: "POST", options})

    }

}

export default Post;
