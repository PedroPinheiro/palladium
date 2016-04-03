import 'babel-polyfill';
import { expect } from "chai";
import Fenix      from "../src/Fenix";


const urlBase = "http://jsonplaceholder.typicode.com";
const root = {
    "posts": {
        methods: '*'
    },
    "comments": {
        methods: 'GET',
        cache: {
            expires: "30"
        }
    },
    "savePost": {
        methods: 'POST'
    }
};

const params = { urlBase, root };
const api = new Fenix(params);

describe('fenix', () => {

    it('_formatMethods', function() {

        let m1 = api._formatMethods('GET');
        expect(m1).to.have.property('length',1);

        let m2 = api._formatMethods(['GET','POST']);
        expect(m2).to.have.property('length',2);

        let m3 = api._formatMethods(['GET','POST','PUT']);
        expect(m3).to.have.property('length',3);

        let m4 = api._formatMethods('*');
        expect(m4).to.have.property('length',4);

    });

    it('_createMethods', function() {

        let sourceName, methods;

        let testMethods = (methods) => {
            expect(methods).to.have.property('GET');
            expect(methods).to.have.property('POST');
            expect(methods).to.have.property('PUT');
            expect(methods).to.have.property('DELETE');
        };

        sourceName = 'posts';
        methods = api._createMethods(urlBase, root[sourceName], sourceName);
        testMethods(methods);

        sourceName = 'comments';
        methods = api._createMethods(urlBase, root[sourceName], sourceName);
        testMethods(methods);

        sourceName = 'savePost';
        methods = api._createMethods(urlBase, root[sourceName], sourceName);
        testMethods(methods);

    });

    it('_getEndpointObject', function() {

        let m, methods, sourceObject;
        methods = {'GET':()=>{},'POST':()=>{},'PUT':()=>{},'DELETE':()=>{}};

        m = ['GET'];
        sourceObject = api._getEndpointObject(m, methods);
        expect(sourceObject).to.be.a('function');
        expect(sourceObject).not.to.have.property('get');
        expect(sourceObject).not.to.have.property('post');
        expect(sourceObject).not.to.have.property('put');
        expect(sourceObject).not.to.have.property('delete');

        m = ['GET','POST'];
        sourceObject = api._getEndpointObject(m, methods);
        expect(sourceObject).to.be.a('function');
        expect(sourceObject).not.to.have.property('get');
        expect(sourceObject).to.have.property('post');
        expect(sourceObject).not.to.have.property('put');
        expect(sourceObject).not.to.have.property('delete');

        m = ['GET','POST','PUT','DELETE'];
        sourceObject = api._getEndpointObject(m, methods);
        expect(sourceObject).to.be.a('function');
        expect(sourceObject).not.to.have.property('get');
        expect(sourceObject).to.have.property('post');
        expect(sourceObject).to.have.property('put');
        expect(sourceObject).to.have.property('delete');

    });


    it('_processRoot', function() {

        let api = new Fenix(params);
        api._processRoot(urlBase, root);
        expect(api).to.have.property('posts');
        expect(api).to.have.property('comments');
        expect(api).to.have.property('savePost');


    });

    it('CRUD resource', async function() {

        expect(api.posts).to.be.a('function');
        expect(api.posts).not.to.have.property('get');
        expect(api.posts).to.have.property('post');
        expect(api.posts).to.have.property('put');
        expect(api.posts).to.have.property('delete');

    });

    it('service', async function() {

        expect(api.savePost).to.be.a('function');
        expect(api.savePost).not.to.have.property('get');
        expect(api.savePost).not.to.have.property('post');
        expect(api.savePost).not.to.have.property('put');
        expect(api.savePost).not.to.have.property('delete');

    });

    it('find one', async function() {

        let id = 1;

        let { data: post } = await api.posts(id);

        expect(post).to.be.a('object');
        expect(post).to.have.property('id', id);

    });

    it('find multiple', async function() {

        let { data: posts } = await api.posts();

        expect(posts).to.be.a('array');

    });

    it('cache saved', async function() {

        let id = 1;
        let cacheIndex = `${urlBase}/comments/${id}`;

        // Certify that cache entry is not there
        expect(api.cache[cacheIndex]).to.be.undefined;

        // First fetch
        let { data: comment } = await api.comments(id);

        // Get cache entry
        let cacheEntry = api.cache[cacheIndex];

        // Cache entry is there ...
        expect(cacheEntry).not.to.be.undefined;
        // and has the same id
        expect(cacheEntry).to.have.deep.property('res.data.id', id);

        // Second fetch
        let { data: commentNew } = await api.comments(id);

        // Is the same object, no fetch processed
        expect(commentNew).to.equal(cacheEntry.res.data);

    });

    it('cache is protected', async function() {

        expect(() => api.cache = {}).to.throw(TypeError);

    });

});
