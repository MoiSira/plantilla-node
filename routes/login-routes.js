const express = require('express');
const api = express.Router();
const { loginAuthentication, logout } = require('../controllers/login-controllers');
const { verifyToken } = require('../middlewares/authenticated');

api.post('/login', loginAuthentication);

api.post('/logout', verifyToken, logout);

module.exports = api;