import Fenix from "fenixjs";


const url = "http://jsonplaceholder.typicode.com";


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

window.api = api;
