import Fenix from "fenixjs";


// const url = "http://jsonplaceholder.typicode.com";
const url = "https://api.express.kpl.com.br/api";


const defaults = {
    // example of api default options
    // options: {
    //     pk: "_id"
    // }
};

let xAuthToken = "";

const config = {
    "accounts": {
        methods: 'GET',
        "login": {
            methods: 'POST',
            options: {
                responseHeaders: {
                    set "X-AUTH-TOKEN" (token) {
                        xAuthToken = token;
                    }
                }
            }
        }
    },
    "users": {
        methods: '*',
        "me": {
            methods: 'GET',
            options: {
                requestHeaders: {
                    get "X-AUTH-TOKEN" (){
                        return xAuthToken;
                    }
                }
            }
        }
    }
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


const api = new Fenix({ url, config, defaults });

window.api = api;
