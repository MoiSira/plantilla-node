const campanhasModel = require('../models/campanhas-model');
const logsModel= require('../models/logs-model');
const { CampanhasService } = require('../services/campanhas-service');

const campanhasConsult = async (req, res) => {
    const CampanhasServiceInstace = new CampanhasService(campanhasModel, logsModel);
    const campanhas = await CampanhasServiceInstace.campanhas_consult();
    return res.json(campanhas);
}

module.exports = {
    campanhasConsult
};