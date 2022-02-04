/*
 * File Name is  : findCity12.js
 * demoes reading one item from a mongo collection
 */
'use strict';

const mongo = require('mongodb').MongoClient;
const dbname = "world";
const constr = `mongodb://127.0.0.1`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
let que = JSON.parse(process.argv[2]);

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
    db.collection("city").find(que).toArray(function (err, city) {
        if (err) {
            throw err;
        }
        console.log(city);
        con.close();
    });
});