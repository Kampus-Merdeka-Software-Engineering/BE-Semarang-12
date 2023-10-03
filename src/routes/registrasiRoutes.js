const express = require('express');
const registrasiControllers = require('../controllers/registrasiControllers');

const router = express.Router();

router.get('/login', registrasiControllers.showAllRegistration);
router.post('/login', registrasiControllers.createRegistration);
// router.put('/contact/:id', contactControllers.editContact);
// router.delete('/contact/:id', contactControllers.deleteContact);
// router.get('/contact/:id', contactControllers.showContactByID);

module.exports = router;