DROP DATABASE IF EXISTS burgers_db;
create DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) not null,
    devoured boolean not null
);