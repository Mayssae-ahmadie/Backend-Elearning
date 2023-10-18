require('dotenv').config();
const mysql = require('mysql2');
const PORT = process.env.port;
const DATABASE_HOST = process.env.host;
const DATABASE_USER = process.env.user;
const DATABASE_PASSWORD = process.env.password;
const DATABASE_NAME = process.env.database;

const connection = mysql.createPool({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
});

connection.getConnection((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connected successfully');
});

module.exports = connection.promise();