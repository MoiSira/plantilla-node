const bancosModel = require('../models/bancos-model');
const logsModel= require('../models/logs-model');
const { BancosService } = require('../services/bancos-service');

const bancosConsult = async (req, res) => {
    const bancosServiceInstace = new BancosService(bancosModel, logsModel);
    const bancos = await bancosServiceInstace.bancos_consult();
    return res.json(bancos);
}

const bancosInsert = async (req, res) => {
    const bancosServiceInstace = new BancosService(bancosModel, logsModel);
    const bancos = await bancosServiceInstace.bancos_insert(req.body);
    return res.json(bancos);
}

module.exports = {
    bancosConsult,
    bancosInsert
};