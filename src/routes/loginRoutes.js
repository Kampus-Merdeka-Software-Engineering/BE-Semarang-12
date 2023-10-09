const express = require('express');
const loginController = require('../controllers/loginControllers');

const router = express.Router();

router.post('/login', loginController.login);

module.exports = router;
