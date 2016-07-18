import 'babel-polyfill';
import { expect } from "chai";
import Palladium      from "../src/Palladium";

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


const api = new Palladium({ url, config });

describe('Palladium', () => {

    it ("Generated correctly with the config", () => {

        expect(api).to.have.property('posts');
        expect(api).to.have.deep.property('posts.comments');
        expect(api).to.have.property('comments');

    });

});
