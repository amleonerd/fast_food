var mysql = require('mysql');
connection.connect((err) => {
    if (!err) {
        console.log("database is connected"+database);
    } else {
        console.log("database is not connected"+err.message);
    }
});