
class AbortablePromise extends Promise {
    abort() {
        return (this._abort)?this._abort():null;
    }
    setAbort(abort) {
        this._abort = abort;
    }
    then(params) {
        let p = super.then(params);
        p._abort = this._abort;
        return p;
    }
    catch(params) {
        let p = super.catch(params);
        p._abort = this._abort;
        return p;
    }
}

export default AbortablePromise
