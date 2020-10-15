const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prettycat'



});


connection.connect(
    function (error) {
        if (error){
            throw error;

        } else {
            console.log('Todo ok')
        }
    }





);

module.exports = connection;

