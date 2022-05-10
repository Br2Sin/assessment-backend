'user strict';

const mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

//check if database is created.
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS nft_books", function (err, result) {
    if (err) throw err;
    console.log("Database OK");
  });
});
// con.destroy()

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nft_books'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS books (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), cover_image VARCHAR(255), author VARCHAR(255), price VARCHAR(255), status VARCHAR(255), created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
  dbConn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table OK");
  });
});

module.exports = dbConn;