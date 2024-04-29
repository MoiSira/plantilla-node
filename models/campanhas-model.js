const { DataTypes } = require('sequelize');
const { sequelizeMariaDb } = require('../mariadb-connect');

const Campanhas = sequelizeMariaDb.define('PUSH_M_CAMPANHAS', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    texto: {
        type: DataTypes.STRING
    },
    banco_codigo: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'PUSH_M_CAMPANHAS',
    timestamps: false, // Desactiva los timestamps
});

module.exports.Campanhas = Campanhas;