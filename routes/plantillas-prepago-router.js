const express = require('express');
const plantillasPrepagoControllers = require('../controllers/plantillas-prepago-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.get('/plantillas-prepago-consult', verifyToken, plantillasPrepagoControllers.plantillasPrepagoConsult);

module.exports = router;