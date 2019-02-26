var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },
  insertOne: function(tableInput, burgerName, callback) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, 0)";
    console.log(queryString);
    connection.query(queryString, [tableInput, burgerName], function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },
  updateOne: function(tableInput, id, callback) {
    var queryString =
      "UPDATE ?? SET devoured = 1 WHERE id = ?";

    connection.query(
      queryString,
      [tableInput, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
      }
    );
  }
};

module.exports = orm;
