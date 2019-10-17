var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// console.log("I am controller");


router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);

        res.render('index', { burger_data });
    })
});

router.post("/add", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.post("/update/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    console.log(condition);

    burger.update(condition, function(result) {
        console.log(result);
        res.redirect('/');
    })

})

module.exports = router;