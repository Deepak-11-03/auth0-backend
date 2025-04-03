const express = require('express');
const { auth } = require('../controller/auth.controller');
const router = express.Router();


router.post('/callback',auth);

module.exports = router