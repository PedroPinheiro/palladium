import Fenix                 from "./src/Fenix";
import { LocalStorageCache } from "./src/cache";
import { Resource }          from "./src/endpoint";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const url = "http://jsonplaceholder.typicode.com";

// let typeAuth = new ConfigType();
//
// let defaults = {
//     options: [AuthenticatedMixin]
// }

const defaults = {
    // example of api default options
    // options: {
    //     pk: "_id"
    // }
};


const config = {
    "posts": {
        methods: '*',
        // Example of endpoint options
        // options: {
        //     pk: "idPost"
        // },
        "comments": {
            methods: '*',
            cache: {
                expires: "30",
                // type: LocalStorageCache
            }
        },
        // example of Service
        "send": {
            methods: "POST"
        }
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


// api.posts("2").comments();
// api.posts("2").comments();

// api.posts.send();
// let l = api.posts.save({idPost:10,name:"Teste"});
// console.log(l.abort());

let l = api.comments().then(({data}) => console.log("Length:",data.length));
// l.abort();

// console.log(api.posts);



// api.posts();
// api.posts("2")();
// api.posts.comments();
// api.posts("2").comments();


// api.posts("2")
//     .comments()
//     .then(({data}) => console.log(data.length))
//     .catch((err) => {console.log(err)});

// api.comments().then(({data}) => {
//     let d = data;
//     api.comments().then(({data}) => console.log(data.length, d.length))
//
// });
