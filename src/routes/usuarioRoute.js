const express = require('express')
const router = express.Router()

const userController = require('../controllers/usuarioControler')
const { auth } = require('../middleware/auth');


router.get('/user', userController.getUser)
router.post('/user', userController.create)
router.get('/user/:id', userController.details)
router.put('/user/:id', auth, userController.update);
router.delete('/user/:id', auth, userController.delete);

module.exports = router;