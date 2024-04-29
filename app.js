const cors = require('cors');
const express = require('express');
const conf = require('./config/config');
const fs = require('fs');
const https = require('https');
const json5 = require('json5');
const bancosRouter = require('./routes/bancos-router');
const campanhasRouter = require('./routes/campanhas-router');
const loginRouter = require('./routes/login-routes');
const plantillasPrepagoRouter = require('./routes/plantillas-prepago-router');
const plantillasTdcRouter = require('./routes/plantillas-tdc-router');
const rolesRouter = require('./routes/roles-router');
const usersRouter = require('./routes/user-routes');

const app = express();

// usar body-parser o express.json para parsear el body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Esta linea es para leer los valores de los inputs del front

// Se utiliza cors para que el servidor del frontend pueda consultar el servidor del backend
app.use(cors());

// Mapeo de rutas
app.use('/bancos', bancosRouter);
app.use('/campanhas', campanhasRouter);
app.use('/authentication', loginRouter);
app.use('/plantillas-prepago', plantillasPrepagoRouter);
app.use('/plantillas-tdc', plantillasTdcRouter);
app.use('/roles', rolesRouter);
app.use('/users', usersRouter);

module.exports.app = app;