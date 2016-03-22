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
		methods: 'GET',
		cache: {
			expires: "30"
		}
	}
};

let params = { urlBase, sources };
let api = new Fenix(params);

describe('fenix', () => {


	it('CRUD resource', async function() {

		expect(api.posts).to.be.a('function');
		expect(api.posts).not.to.have.property('get');
		expect(api.posts).to.have.property('post');
		expect(api.posts).to.have.property('put');
		expect(api.posts).to.have.property('delete');

    });
	it('find one', async function() {

		let id = 1;

		let { data: post } = await api.posts(id);

		assert.typeOf(post, 'object');
		assert.equal(id, post.id);

    });

	it('find multiple', async function() {

		let { data: posts } = await api.posts();

		expect(posts).to.be.instanceof(Array);

    });

    it('cache saved', async function() {

		let id = 1;
		let cacheIndex = `${urlBase}/comments/${id}`;

		// Certify that cache entry is not there
		expect(api._cache[cacheIndex]).to.be.undefined;

		// First fetch
		let { data: comment } = await api.comments(id);

		// Get cache entry
		let cacheEntry = api._cache[cacheIndex];

		// Cache entry is there ...
		expect(cacheEntry).not.to.be.undefined;
		// and has the same id
		expect(cacheEntry).to.have.deep.property('res.data.id', id);

		// Second fetch
		let { data: commentNew } = await api.comments(id);

		// Is the same object, no fetch processed
		expect(commentNew).to.equal(cacheEntry.res.data);

    });
});