const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
});

connection.connect((err) => {
  if (err) return err;
  console.log("Conectou!");
});

module.exports = connection;
