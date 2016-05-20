import cloneFunction from "../../src/utils/cloneFunction";
import { expect } from "chai";

// polyfill Object.assign
import objectAssign from "object-assign";
Object.assign = objectAssign;

describe('cloneFunction', () => {

    it('successfully cloned', function() {

        let fn = function() { return 20; };
        fn.myVar = 10;
        fn.clone = cloneFunction.bind(fn);

        let fn2 = fn.clone();
        expect(fn2).to.not.equal(fn);
        expect(fn2.myVar).to.equal(fn.myVar);
        expect(fn2()).to.equal(fn());

    });

});
