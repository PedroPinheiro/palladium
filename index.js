import Fenix from "./src/Fenix";


let urlBase = "http://jsonplaceholder.typicode.com";
let root = {
    "posts": {
        methods: '*',
        "comments": {
            methods: 'GET',
            cache: {
                expires: "30"
            }
        }
    },
    "comments": {
        methods: 'GET',
        cache: {
            expires: "30"
        }
    }
};


let api = new Fenix({ urlBase, root });



(async function() {

    let comment = await api.comments(1);

    console.log(comment);

    let comment2 = await api.comments(1);

    console.log(comment2);

}());
