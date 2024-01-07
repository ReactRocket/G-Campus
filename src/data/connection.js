var mysql = require("mysql");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1101",
  database: "gcampus",
});

module.exports = pool;
