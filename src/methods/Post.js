import Method        from "./Method";

class Post extends Method {

    constructor({url}) {

        super({url, method: "POST"})

    }

}

export default Post;
