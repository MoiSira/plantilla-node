const { DataTypes } = require('sequelize');
const { sequelizeMariaDb } = require('../mariadb-connect');

const Users = sequelizeMariaDb.define('PUSH_M_USUARIOS', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING
    },
    usuario: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    estatus: {
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'PUSH_M_USUARIOS',
    timestamps: false, // Desactiva los timestamps
});

module.exports.Users = Users;