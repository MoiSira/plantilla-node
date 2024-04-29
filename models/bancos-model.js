const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../postgres-connect');

const Banco = sequelizePostgres.define('push_m_bancos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cod_banco: {
        type: DataTypes.INTEGER
    },
    banco: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'push_m_bancos',
    timestamps: false, // Desactiva los timestamps
});

module.exports.Banco = Banco;