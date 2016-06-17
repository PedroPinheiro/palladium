
const fenixDefaults = {
    cache : null,
    methods : '*',
    options : {
        pk : "id",
        requestHeaders: {
            'Accept'       : 'application/json',
            "Content-Type" : "application/json"
        },
        responseHeaders: {}
    }
};

export {
    fenixDefaults
}