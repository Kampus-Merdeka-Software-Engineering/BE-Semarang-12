const express = require('express');
const newsletterControllers = require('../controllers/newsletterControllers');

const router = express.Router();

router.get('/newsletter', newsletterControllers.showAllNewsletter);
router.post('/newsletter', newsletterControllers.createNewsletter);
router.put('/newsletter/:id', newsletterControllers.editNewsletter);
router.delete('/newsletter/:id', newsletterControllers.deleteNewsletter);
router.get('/newsletter/:id', newsletterControllers.showNewsletterByID);

module.exports = router;