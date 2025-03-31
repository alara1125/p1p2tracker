const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alexis',
  password: 'Sunbro47',
  database: 'p1p2tracker'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});