const express = require('express');
const rolesControllers = require('../controllers/roles-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.get('/findRoles', verifyToken, rolesControllers.findAll);

module.exports = router;