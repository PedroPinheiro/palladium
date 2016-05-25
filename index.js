import Fenix                 from "./src/Fenix";
import { LocalStorageCache } from "./src/cache";
import { Resource }          from "./src/endpoint";



const url = "http://jsonplaceholder.typicode.com";

// let typeAuth = new ConfigType();
//
// let defaults = {
//     options: [AuthenticatedMixin]
// }

const defaults = {};


const config = {
    "posts": {
        methods: '*',
        "comments": {
            methods: '*',
            cache: {
                expires: "30",
                // type: LocalStorageCache
            }
        },
        options: [] // sobrescreve defaults
    },
    "comments": {
        methods: 'GET',
        cache: {
            expires: "30"
        }
    }
};


const api = new Fenix({ url, config, defaults });

// api.posts().then(({data}) => console.log(data.length));
// api.posts().then(({data}) => console.log(data.length));


api.posts();
api.posts("2")();
api.posts.comments();
api.posts("2").comments();


api.posts("2")
    .comments()
    .then(({data}) => console.log(data.length))
    .catch((err) => {console.log(err)});

// api.comments().then(({data}) => {
//     let d = data;
//     api.comments().then(({data}) => console.log(data.length, d.length))
//
// });
