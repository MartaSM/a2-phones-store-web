const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller')

router.post('/', usersController.create);

module.exports = router;
