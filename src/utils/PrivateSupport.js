import GUID from "./GUID";

class PrivateSupport {

    set(object, value) {

        if (!object._privateKey)
            object._privateKey = GUID.create();

        if (!this.listKey)
            this.listKey = {};
        
        this.listKey[object._privateKey] = value;
    }

    get(object) {

        if (!object._privateKey || !this.listKey)
            return null;

        return this.listKey[object._privateKey];
    }
}

export default PrivateSupport;
