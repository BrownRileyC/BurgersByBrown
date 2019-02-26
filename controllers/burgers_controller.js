var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        let displayObj = {
            burgers: data
        };
        console.log(displayObj);
        res.render('index', displayObj)
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (data) {
        res.json(data)
    })
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne('burgers', req.params.id, function(data) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

module.exports = router;