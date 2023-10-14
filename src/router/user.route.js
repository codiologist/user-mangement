const express = require('express');
const CatchAsync = require('../helper/CatchAsync');
const Validator = require('../middleware/Validator.middleware');
const auth = require('../middleware/auth.middleware');

const { UserValidator } = require('../validator/User.Validator');
const { UserController } = require('../controller/user.Controller');
const { userType } = require('../config/userType');

const router = express.Router();

router.get('/all', CatchAsync(UserController.all))

router.get('/profile', auth(userType.USER), CatchAsync(UserController.profile))

router.patch('/profile', auth(userType.USER), Validator(UserValidator.update), CatchAsync(UserController.update));

// Delete

module.exports = router;
