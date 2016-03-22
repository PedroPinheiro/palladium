import 'babel-polyfill';
import { assert, 
		 expect, 
		 should } from "chai";
import Fenix  	  from "../src/Fenix";


let urlBase = "http://jsonplaceholder.typicode.com"
let sources = {
	"posts": {
		methods: '*'
	},
	"comments": {
		methods: '*'
	}
}

let params = { urlBase, sources };
let api = new Fenix(params);

describe('fenix', () => {

	it('find one', () => {

		let id = 1;

		api.posts(id).then(data => {
			assert.typeOf(data, 'object');
			assert.equal(id, data.id);
		});

    });

	it('find multiple', () => {

		api.posts().then(data => {
			expect(data).to.be.instanceof(Array);
		});

    });
});