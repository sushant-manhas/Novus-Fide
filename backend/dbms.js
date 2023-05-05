const mysql = require('mysql');

const db =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'novus',
})

db.connect((err) => {
  console.log('Connected to database');
})

module.exports = db;
