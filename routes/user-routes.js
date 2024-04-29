const express = require('express');
const usersControllers = require('../controllers/users-controllers')
const { verifyToken } = require('../middlewares/authenticated');
const router = express.Router();

router.post('/createUser', verifyToken, usersControllers.userInsert);

module.exports = router;