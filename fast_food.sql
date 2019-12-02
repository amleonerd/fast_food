### Schema DB SETUP
CREATE DATABASE fast_food;
USE fast_food_db	;

CREATE TABLE invetory
(
	id int NOT NULL AUTO_INCREMENT,
	item_count varchar(255) NULL,
    item_name varchar(255) NULL,
    food BOOLEAN DEFAULT false,
    qty BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
	
);
