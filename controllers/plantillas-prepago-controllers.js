const plantillasPrepagoModel = require('../models/plantillas-prepago-model');
const logsModel= require('../models/logs-model');
const { PlantillasPrepagoService } = require('../services/plantillas-prepago-service');

const plantillasPrepagoConsult = async (req, res) => {
    const plantillasPrepagoServiceInstace = new PlantillasPrepagoService(plantillasPrepagoModel, logsModel);
    const plantillasPrepago = await plantillasPrepagoServiceInstace.plantillas_prepago_consult();
    return res.json(plantillasPrepago);
}

module.exports = {
    plantillasPrepagoConsult
};