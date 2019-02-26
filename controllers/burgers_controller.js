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
    burger.updateOne(req.params.id, function(results) {
        console.log('router put')
        if (results.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            console.log('into if')
            return res.status(404).end();
          } else {
            console.log('into else')
            res.status(200).end();
          }
    })
});

module.exports = router;