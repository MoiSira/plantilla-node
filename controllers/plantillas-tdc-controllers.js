const plantillasTdcModel = require('../models/plantillas-tdc-model');
const logsModel= require('../models/logs-model');
const { PlantillasTdcService } = require('../services/plantillas-tdc-service');

const plantillasTdcCreate = async (req, res) => {
    const plantillasTdcServiceInstace = new PlantillasTdcService(plantillasTdcModel, logsModel);
    const plantillasTdc = await plantillasTdcServiceInstace.plantillas_tdc_create(req.body);
    return res.json(plantillasTdc);
}

const plantillasTdcConsult = async (req, res) => {
    const plantillasTdcServiceInstace = new PlantillasTdcService(plantillasTdcModel, logsModel);
    const plantillasTdc = await plantillasTdcServiceInstace.plantillas_tdc_consult();
    return res.json(plantillasTdc);
}

const plantillasTdcUpdate = async (req, res) => {
    const plantillasTdcServiceInstace = new PlantillasTdcService(plantillasTdcModel, logsModel);
    const plantillasTdc = await plantillasTdcServiceInstace.plantillas_tdc_update(req.body);
    return res.json(plantillasTdc);
}

const plantillasTdcDelete = async (req, res) => {
    const plantillasTdcServiceInstace = new PlantillasTdcService(plantillasTdcModel, logsModel);
    const plantillasTdc = await plantillasTdcServiceInstace.plantillas_tdc_delete(req.body);
    return res.json(plantillasTdc);
}

module.exports = {
    plantillasTdcCreate,
    plantillasTdcConsult,
    plantillasTdcUpdate,
    plantillasTdcDelete
};