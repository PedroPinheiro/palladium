import Fenix                 from "./src/Fenix";
import { LocalStorageCache } from "./src/cache";



let url = "http://jsonplaceholder.typicode.com";
let config = {
    "posts": {
        methods: '*',
        "comments": {
            methods: '*',
            cache: {
                expires: "30",
                // type: LocalStorageCache
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


let api = new Fenix({ url, config });



api.posts().then(({data}) => console.log(data.length));
api.posts().then(({data}) => console.log(data.length));
//
// api.posts("2")
//     .comments()
//     .then(({data}) => console.log(data.length))
//     .catch((err) => {console.log(err)});
//
api.comments().then(({data}) => {
    let d = data;
    api.comments().then(({data}) => console.log(data.length, d.length))

});
