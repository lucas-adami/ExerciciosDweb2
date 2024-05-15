const express = require('express')
const router = express.Router()

const projectController = require('../controllers/projectController')
const { auth } = require('../middleware/auth');

router.get('/project', projectController.getProjects)
router.post('/project', projectController.create)
router.get('/project/:id', projectController.details)
router.put('/project/:id', auth, projectController.update);
router.delete('/project/:id', auth, projectController.delete);

module.exports = router;