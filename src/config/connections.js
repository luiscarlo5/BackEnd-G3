const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize({
    dialect: 'mysql',
    database: 'seu-back-end',
    host: 'localhost',
    username: 'seu-username',
    password: 'sua senha',
    port: 3306
});

module.exports = connection;
