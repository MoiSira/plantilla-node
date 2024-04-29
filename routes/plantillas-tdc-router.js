const express = require('express');
const plantillasTdcControllers = require('../controllers/plantillas-tdc-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.post('/plantillas-tdc-create', verifyToken, plantillasTdcControllers.plantillasTdcCreate);

router.get('/plantillas-tdc-consult', verifyToken, plantillasTdcControllers.plantillasTdcConsult);

router.put('/plantillas-tdc-update', verifyToken, plantillasTdcControllers.plantillasTdcUpdate);

router.delete('/plantillas-tdc-delete', verifyToken, plantillasTdcControllers.plantillasTdcDelete);

module.exports = router;