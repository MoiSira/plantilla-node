const conf = require('config');
const jwt = require('jsonwebtoken');
const moment = require('moment');

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticación'});
    } else {
        var token = req.headers.authorization.replace(/['"]+/g, '');
        try{
            var payload = jwt.decode(token, conf.get('JWT_TOKEN.SECRET_KEY'));
            if(payload.exp < moment().unix()) {
                return res.status(401).send({
                    message: 'EL token ha expirado'
                });
            }
        } catch (err){
            return res.status(404).send({
                message: 'EL token no es valido'
            });
        }
        req.user = payload;
        next();
    }
}

module.exports.verifyToken = verifyToken;