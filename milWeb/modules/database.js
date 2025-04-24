const mysql = require('mysql2');
const config = require('../config.json');// Use the database configuration from config.json

const pool = mysql.createPool(config.database.setup); // Use the database configuration from config.json

//export the object so other files can use it
module.exports = pool.promise(); // async/await support
