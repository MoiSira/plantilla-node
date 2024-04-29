const { DataTypes } = require('sequelize');
const { sequelizeMariaDb } = require('../mariadb-connect');

const Logs = sequelizeMariaDb.define('PUSH_M_LOGS', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    usuario: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'PUSH_M_LOGS',
    timestamps: false, // Desactiva los timestamps
});

module.exports.Logs = Logs;