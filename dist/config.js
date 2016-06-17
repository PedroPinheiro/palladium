'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var fenixDefaults = {
    cache: null,
    methods: '*',
    options: {
        pk: "id",
        requestHeaders: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        responseHeaders: {}
    }
};

exports.fenixDefaults = fenixDefaults;