var orm = require("../config/orm.js");

// console.log("I am burger.js");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res)
        })
    },
    update: function(condition, cb) {
        orm.update("burgers", condition, cb);
    },

    create: function(burgerName, cb) {
        orm.create("burgers", burgerName, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;