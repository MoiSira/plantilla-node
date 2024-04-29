const rolesModel = require('../models/roles-model');
const { RolesService } = require('../services/roles-service');

const findAll = async (req, res) => {
    const rolesServiceInstace = new RolesService(rolesModel);
    const roles = await rolesServiceInstace.findAll();
    return res.json(roles);
}

module.exports = {
    findAll
};