var mysql = require('mysql');
connection.connect((err) => {
    if (!err) {
        console.log("database is connected"+database);
    } else {
        console.log("database is not connected"+err.message);
    }
});

var  get_all_inventory  = updateInventory; 
console.log("we have this many" + updateInventory); 

var  set_new_item = x + y;
console.log("your item was successfull added to our database" + updateInventory);

module.exports.set_new_item = set_new_item; 
