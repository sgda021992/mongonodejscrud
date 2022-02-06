const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/user', userController.getUsers)
router.post('/user', userController.createUsers)
router.put('/user', userController.updateUsers)
router.delete('/user', userController.deleteUsers)

module.exports = router;