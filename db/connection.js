require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error(
      "Error al conectarse a la base de datos: " + err.stack
    );
    return;
  }
  console.log(
    "Conectado a la base de datos MySQL como ID " +
      connection.threadId
  );
});
