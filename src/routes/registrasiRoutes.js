const express = require('express');
const registrasiControllers = require('../controllers/registrasiControllers');

const router = express.Router();

router.get('/registrasi', registrasiControllers.showAllRegistrasi);
router.post('/registrasi', registrasiControllers.createRegistrasi);
router.put('/registrasi/:id', registrasiControllers.editRegistrasi);
router.delete('/registrasi/:id', registrasiControllers.deleteRegistrasi);
router.get('/registrasi/:id', registrasiControllers.showRegistrasiByID);

module.exports = router;
