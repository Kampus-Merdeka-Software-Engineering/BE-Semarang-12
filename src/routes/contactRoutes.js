const express = require('express');
const contactControllers = require('../controllers/contactControllers');

const router = express.Router();

router.get('/contact', contactControllers.showAllContact);
router.post('/contact', contactControllers.createContact);
router.put('/contact/:id', contactControllers.editContact);
router.delete('/contact/:id', contactControllers.deleteContact);
router.get('/contact/:id', contactControllers.showContactByID);

module.exports = router;
