const moment = require('moment');

class UserService {
    constructor(userModel, logsModel){
        this.userModel = userModel;
        this.logsModel = logsModel;
    }

    async user_insert(userData) {
        try {
            const [user, created] = await this.userModel.Users.findOrCreate({
                where: {usuario: userData.username},
                defaults: {
                    correo: userData.email,
                    usuario: userData.username,
                    nombre: userData.name,
                    apellido: userData.lastname,
                    estatus: userData.status,
                    rol: userData.rol
                }
            });
            if (created) {
                console.log(`Usuario ${user.dataValues.usuario} creado`);
                await this.logsModel.Logs.create({
                    accion: `Usuario ${user.dataValues.usuario} creado`,
                    fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
                    usuario: userData.usernameLog
                });
                return {'Estatus': `Usuario ${user.dataValues.usuario} creado`};
            } else {
                return {'Estatus': `Usuario ${user.dataValues.usuario} ya existe`};
            }
        } catch (error) {
            console.error('Error al crear el usuario ', error)
        }
    }
}

module.exports.UserService = UserService;