/*
 * File Name is  : dbConnect12.js
 * demoes connection til mongo
 */
'use strict';

const mongo = require('mongodb').MongoClient;
const dbname = "world";
const constr = `mongodb://127.0.0.1`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.connect(
    constr, conparam, function (error, con) {
    if (error) {
        console.log('db not connected');
        throw error;

    }
    console.log(`Connected to server`);
    const db = con.db(dbname);
    // do stuff
    con.close();
});