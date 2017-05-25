'use strict';
module.exports = {
    dbConfig: {
        dev: {
            host: "mongodb://127.0.0.1:27017/app",
            dbOptions: {
                native_parser: true
            },
            serverOptions: {
                'auto_reconnect': true,
                'poolSize': 5
            }
        }
    }
}