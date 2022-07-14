  const mysql = require("mysql2/promise");
  const connection = mysql.createConnection(
    "mysql://test-user:test-pass@localhost:8888/TESTE-DB");


