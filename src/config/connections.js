const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize({
    dialect: 'mysql',
    database: 'bd_back_end',
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 3306
});

module.exports = connection;
