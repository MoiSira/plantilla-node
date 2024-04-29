const conf = require('config');

// CREDENCIALES MARIA DB/
const mariaDbConfig = {
    host: conf.get('MARIABD.BDHOST'),
    user: conf.get('MARIABD.BDUSER'),
    password: conf.get('MARIABD.BDPASSWORD'),
    database: conf.get('MARIABD.BDDATABASE'),
    port: conf.get('MARIABD.BDPORT'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// CREDENCIALES POSTGRES/
const postgresDbConfig = {
    host: conf.get('POSTGRESBD.BDHOST'),
    user: conf.get('POSTGRESBD.BDUSER'),
    password: conf.get('POSTGRESBD.BDPASSWORD'),
    database: conf.get('POSTGRESBD.BDDATABASE'),
    port: conf.get('POSTGRESBD.BDPORT')
};

// CREDENCIALES LDAP/
const adConfig = {
    url: conf.get('LDAP.LDAPURL'),
    baseDN: conf.get('LDAP.LDAPBASEDN'),
    username: conf.get('LDAP.LDAPUSERNAME'),
    password: conf.get('LDAP.LDAPPASSWORD')
}

// CREDENCIALES LDAP/
const jwtConfig = {
    secretKey: conf.get('JWT_TOKEN.SECRET_KEY'),
    expire: conf.get('JWT_TOKEN.JWT_EXPIRE')
}

module.exports = {
    mariaDbConfig,
    postgresDbConfig,
    adConfig,
    jwtConfig
};