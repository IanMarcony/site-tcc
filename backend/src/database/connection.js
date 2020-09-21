const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABSE,
});

connection.connect((err) => {
  if (err) return console.log("Erro ao conectar:" + err);
  console.log("Conectou!");
});

module.exports = connection;
