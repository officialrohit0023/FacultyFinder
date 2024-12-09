const { signup, login ,facultysignup } = require('../Controllers/AuthController');
const { signupValidation , loginValidation, facultysignupValidation  } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/facultysignup', facultysignupValidation , facultysignup);

module.exports = router;