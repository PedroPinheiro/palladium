
class AbortablePromise {

     constructor(params) {
       this._promise = new Promise(params);
     }
     abort() {
       return (this._abort)?this._abort():null;
     }
     setAbort(abort) {
       this._abort = abort;
     }
     then(params) {
       this._promise.then(params);
       return this;
     }
     catch(params) {
       this._promise.catch(params);
       return this;
     }
}

export default AbortablePromise
