var mysql = require("mysql");
require('dotenv').config();

var connection;
if(process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  console.log('Jaws connection')
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log('Not Jaws connection')
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.localhost_PW,
  database: "burgers_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;