var connection = require("../config/connection.js");

// console.log("I am ORM");


var orm = {

    all: function(tableInput, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(tableInput, condition, cb) {

        var query = "UPDATE " + tableInput;
        query += " SET devoured = true ";
        query += " WHERE " + condition;

        console.log(query);

        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    create: function(tableInput, burgerName, cb) {
        var query = "INSERT INTO " + tableInput;
        query += " (burger_name) ";
        query += " VALUES ('" + burgerName + "');";

        console.log(query);

        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}
module.exports = orm;