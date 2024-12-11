const {upload} = require('../Controllers/AuthController')
const { signup, login ,facultysignup } = require('../Controllers/AuthController');
const { signupValidation , loginValidation, facultysignupValidation  } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/facultysignup', upload.fields([{name:'facultyimage',maxCount:1},{name:'timetable',maxCount:1}])
     ,facultysignupValidation , facultysignup);

module.exports = router;