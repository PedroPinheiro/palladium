import Palladium from "palladium";


// const url = "http://jsonplaceholder.typicode.com";
const url = "http://localhost:3040";

let xAuthToken = "";

const defaults = {
    responseHeaders: {
        set "X-AUTH-TOKEN" (token) {
            xAuthToken = token;
        }
    }
};

const loginOptions = {
    responseHeaders: {
        set "X-AUTH-TOKEN" (token) {
            xAuthToken = token;
        }
    }
}


const config = {
    "login": {
        methods: 'POST',
        options: loginOptions
    },
    "accounts": {
        methods: '*',
        "login": {
            methods: 'POST',
            options: loginOptions
        },
    },
    "products": {
        methods: '*'
    },
    "brands": {
        methods: '*'
    },
    "posts": {
        methods: '*'
    },
}



const api = new Palladium({ url, config, defaults });

window.api = api;
