const express = require('express');
const courseControllers = require('../controllers/courseControllers');

const router = express.Router();

router.get('/course', courseControllers.showAllCourse);
router.post('/course', courseControllers.createCourse);
router.get('/course/:token', courseControllers.courseByToken);
router.delete('/course/:id', courseControllers.deleteCourse);

module.exports = router;
