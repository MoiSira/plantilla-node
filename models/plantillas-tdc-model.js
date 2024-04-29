const { DataTypes } = require('sequelize');
const { sequelizePostgres } = require('../postgres-connect');

const PlantillasTdc = sequelizePostgres.define('push_m_mensajes_tdc', {
    id_mensaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cod_respuesta: {
        type: DataTypes.INTEGER
    },
    mensaje: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'push_m_mensajes_tdc',
    timestamps: false, // Desactiva los timestamps
});

module.exports.PlantillasTdc = PlantillasTdc;