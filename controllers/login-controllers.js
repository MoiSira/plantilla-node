const ActiveDirectory = require('activedirectory2');
const { jwtConfig } = require('../config/config');
const jwt = require('jsonwebtoken');
const { adConfig } = require('../config/config');
const logsModel = require('../models/logs-model');
const { LoginService } = require('../services/login-service');

const loginAuthentication = (req, res) => {
    let { username, password } = req.body;
    username = username + '@credicard.com.ve'; // Agregar el dominio al nombre de usuario

    //Conexión al LDAP
    const ad = new ActiveDirectory(adConfig);

    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            console.log('ERROR: '+JSON.stringify(err));
            return res.status(500).json('Error al autenticar');
        }
        if (auth) {
            console.log('Authenticated!');
            ad.findUser(username, async function (err, user) {
                if (err) {
                    console.log('Error al buscar el usuario:', err);
                    return res.status(500).json('Error al buscar el usuario');
                }
                if (!user) {
                    console.log('Usuario no encontrado');
                    return res.status(404).json('Usuario no encontrado');
                }
                res.setHeader('Access-Control-Allow-Origin', '*');
                const token = jwt.sign({cn: user.cn}, jwtConfig.secretKey, { expiresIn: jwtConfig.expire }); // El token expirará en 1 hora
                const loguinServiceInstance = new LoginService(logsModel);
                loguinServiceInstance.action(user, 'Usuario Logueado')

                return res.status(200).header({'authorization': token}).json({
                    'message': 'Usuario autorizado',
                    'email': user.mail,
                    'username': user.sAMAccountName,
                    'name': user.givenName,
                    'lastname': user.sn,
                    'token': token
                })
            })
        }
        else {
            console.log('Authentication failed!');
            return res.status(401).send('Credenciales inválidas');
        }
    });
}

const logout = async (req, res) => {
    const loguinServiceInstance = new LoginService(logsModel);
    loguinServiceInstance.action(req.body, 'Usuario deslogueado')
    res.json({"Respuesta": "Usuario deslogueado"});
}

module.exports = { loginAuthentication, logout };