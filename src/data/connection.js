var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@1302Ram",
  database: "gcampus",
});

function connectToMySQL() {
  connection.connect();
  console.log("conneted to MySQL");
  return connection;
}

module.exports = connectToMySQL;
