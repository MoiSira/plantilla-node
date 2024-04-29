const { Sequelize } = require('sequelize');
const { postgresDbConfig } = require('./config/config');

const database = postgresDbConfig.database;
const username = postgresDbConfig.user;
const password = postgresDbConfig.password;
const host = postgresDbConfig.host;
const port = postgresDbConfig.port

const sequelizePostgres = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'postgres',
});

module.exports = {
    sequelizePostgres
}