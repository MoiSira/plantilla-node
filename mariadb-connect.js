const { Sequelize } = require('sequelize');
const { mariaDbConfig } = require('./config/config');

const database = mariaDbConfig.database;
const username = mariaDbConfig.user;
const password = mariaDbConfig.password;
const host = mariaDbConfig.host;
const port = mariaDbConfig.port

const sequelizeMariaDb = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'mariadb',
});

module.exports = {
    sequelizeMariaDb
}