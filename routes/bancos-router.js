const express = require('express');
const bancosControllers = require('../controllers/bancos-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.get('/bancos-consult', verifyToken, bancosControllers.bancosConsult);

router.post('/bancos-insert', verifyToken, bancosControllers.bancosInsert);

module.exports = router;