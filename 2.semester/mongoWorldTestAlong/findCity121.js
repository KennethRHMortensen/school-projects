/*
 * File Name is  : findCity12.js
 * demoes reading all in a mongo collection
 */
'use strict';

const mongo = require('mongodb').MongoClient;
const dbname = "world";
const constr = `mongodb://127.0.0.1`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.connect(
    constr, conparam, function (error, con) {
    if (error) {
        throw error;
    }
    console.log(`Connected to server`);
    const db = con.db(dbname);                  // make dbname the current db
    /* Retrieve,
     * reads cities from the database
     */
    db.collection("city").find().toArray(function (err, city) {
        if (err) {
            throw err;
        }
        console.log(city);
        con.close();
    });
});