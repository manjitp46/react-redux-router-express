var config = require('../config');
var MongoClient = require('mongodb').MongoClient;
var md5 = require('md5');
var db;

function init() {
    var env = 'dev';
    MongoClient.connect(config.dbConfig[env].host, {
        server: config.dbConfig[env].serverOptions
    }, function(err, dbConnection) {
        if (err) {
            console.log('error connecting to DB at ' + config.dbConfig[env].host)
            console.log('aborting....')
            throw err;
        } else {
            console.log('connected to mongo db at ' + config.dbConfig[env].host);
            db = dbConnection;
            console.log('emitting db connection')
            dbConnection.collection('user').find({
                "userName": "admin",
                "password": md5("admin")
            }).toArray(function(error, result) {
                if (error) {
                    console.log(error);
                } else {
                    if (result.length > 0) {} else {
                        dbConnection.collection('user').insertOne({
                            "userName": "admin",
                            "password": md5("admin"),
                            "role": "admin"
                        });
                    }
                }
            });
        }
    });
}

module.exports = {
    collection: function(model) {
        return db.collection(model);
    }
}

init();