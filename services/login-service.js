const moment = require('moment');

class LoginService {
    constructor(logsModel){
        this.logsModel = logsModel;
    }

    async action(userData, action) {
        console.log(userData)
        await this.logsModel.Logs.create({
            accion: `${action}: ${userData.sAMAccountName ?? userData.usernameLog}`,
            fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
            usuario: userData.sAMAccountName ?? userData.usernameLog
        });
    }
}

module.exports.LoginService = LoginService;