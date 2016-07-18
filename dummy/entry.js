import Palladium from "palladium";


// const url = "http://jsonplaceholder.typicode.com";
// const url = "https://api.express.kpl.com.br/api";
const url = "http://localhost:3040";


const defaults = {
    // example of api default options
    // options: {
    //     pk: "_id"
    // }
};

let xAuthToken = "";

const config = {
    "login": {
        methods: 'POST',
        options: {
            responseHeaders: {
                set "X-AUTH-TOKEN" (token) {
                    xAuthToken = token;
                }
            }
        }
    },
    "accounts": {
        methods: '*',
        "login": {
            methods: 'POST',
            options: {
                responseHeaders: {
                    set "X-AUTH-TOKEN" (token) {
                        xAuthToken = token;
                    }
                }
            }
        },
    },
    "products": {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    return xAuthToken;
                }
            }
        }
    },
    "brands": {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    return xAuthToken;
                }
            }
        }
    },
    "posts": {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    return xAuthToken;
                }
            }
        }
    },
}

//
// const config = {
//     "posts": {
//         methods: '*',
//         // Example of endpoint options
//         // options: {
//         //     pk: "idPost"
//         // },
//         "comments": {
//             methods: '*',
//             cache: {
//                 expires: "30",
//                 // type: LocalStorageCache
//             }
//         },
//         // example of Service
//         "send": {
//             methods: "POST"
//         },
//         options: {
//             requestHeaders: {
//                 "x-auth-token": "eyJleHBpcmVzIjoxNDY1NjQ3MTE1MjQ3LCJ1c2VybmFtZSI6InBlZHJvQHBpbmhlaXJvIn0=.Sis7a3R8PV9BqKAZLeedbxaG2KKlkNa2J6eKAsRzkhQ="
//             }
//         }
//     },
//     "comments": {
//         methods: 'GET',
//         cache: {
//             expires: "30"
//         }
//     }
// };


const api = new Palladium({ url, config, defaults });

window.api = api;
