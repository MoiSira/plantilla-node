const { DataTypes } = require('sequelize');
const { sequelizeMariaDb } = require('../mariadb-connect');

const Roles = sequelizeMariaDb.define('PUSH_M_ROLES', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_rol: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'PUSH_M_ROLES',
    timestamps: false, // Desactiva los timestamps
});

module.exports.Roles = Roles;