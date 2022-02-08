const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Octopus!24',
    database: 'employee_DB'
},
    console.log('connected to the employee_DB.')

);

module.exports = db;
