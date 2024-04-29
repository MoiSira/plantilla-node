const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../postgres-connect');

const PlantillasPrepago = sequelizePostgres.define('push_m_mensajes_prepago', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_motivo: {
        type: DataTypes.INTEGER
    },
    mensajes: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'push_m_mensajes_prepago',
    timestamps: false, // Desactiva los timestamps
});

module.exports.PlantillasPrepago = PlantillasPrepago;