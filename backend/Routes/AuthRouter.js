const { signup, login ,/*facultySignUp*/ } = require('../Controllers/AuthController');
const { signupValidation , loginValidation, facultysignupValidation  } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
//router.post('/facultysignup', facultysignupValidation , facultySignUp);

module.exports = router;