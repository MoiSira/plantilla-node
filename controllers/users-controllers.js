const usersModel = require('../models/users-model');
const logsModel= require('../models/logs-model');
const { UserService } = require('../services/user-service');

const userInsert = async (req, res) => {
    const userServiceInstace = new UserService(usersModel, logsModel);
    const createdUserConfirm = await userServiceInstace.user_insert(req.body);
    return res.json(createdUserConfirm);
}

module.exports = {
    userInsert
};