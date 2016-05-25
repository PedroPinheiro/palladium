import Method        from "./Method";

class Post extends Method {

    constructor({url, cache}) {

        super({url, cache, method: "POST"})

    }

}

export default Post;
