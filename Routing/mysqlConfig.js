var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'muskan',
    password: 'Muskan@123',
    database: 'mydb',
});


let getDB = () => {
    console.log("Connected to db");
    return connection;
}

module.exports = {
    getDB: getDB
}