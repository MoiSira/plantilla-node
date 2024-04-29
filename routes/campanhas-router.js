const express = require('express');
const campanhasControllers = require('../controllers/campanhas-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.get('/campanhas-consult', verifyToken, campanhasControllers.campanhasConsult);

module.exports = router;