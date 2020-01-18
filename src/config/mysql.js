const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo_express'
  });
  
  connection.connect((err) => {
    if (err) throw err
    console.log('You are now connected to mysql...')
  })

module.exports = connection;