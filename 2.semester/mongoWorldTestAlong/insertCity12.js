/*
 * File Name is  : insertCity12.js
 * demoes inserts into a mongo collection
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
    /* Create,
     * inserts cities into the database
     */
    let obj = { name: "Aabenraa", countrycode: "DNK", district: "Sydjylland", population: 25001 };

    db.collection("city").insertOne(obj, function (err, collection) {
        if (err) {
            throw err;
        }
        console.log("City inserted");
        con.close();
    });
});