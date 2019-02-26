var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },
  insertOne: function(tableInput, burgerName, devoured) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, ??)";
    console.log(queryString);
    connection.query(queryString, [tableInput, burgerName, devoured], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },
  updateOne: function(tableInput, devoured, id) {
    var queryString =
      "UPDATE ?? SET devoured = ? WHERE id = ?";

    connection.query(
      queryString,
      [tableInput, devoured, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
        return result;
      }
    );
  }
};

module.exports = orm;
