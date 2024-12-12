const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const UserModel = require("../Models/User");
const FacultyModel = require("../Models/Faculty");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

//const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

// const upload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         const allowedTypes = /jpeg|jpg|png/;
//         const isValidType = allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
//                             allowedTypes.test(file.mimetype);

//         if (isValidType) {
//             cb(null, true);
//         } else {
//             cb(new Error('Only .jpeg, .jpg, and .png formats are allowed!'));
//         }
//     },
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() ;
      cb(null,  uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

const facultysignup = async (req, res) => {
    try {
        const { name, email, password , department,facultyimage,timetable} = req.body;
        const faculty = await FacultyModel.findOne({ email });
        if (faculty) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }

        //  // Get file paths
        //  const facultyimagePath = req.files?.facultyimage ? `/uploads/${req.files.facultyimage[0].filename}` : null;
        //  const timetablePath = req.files?.timetable ? `/uploads/${req.files.timetable[0].filename}` : null;

         // Get file paths
        const facultyimagePath = req.files?.facultyimage ? `/uploads/${req.files.facultyimage[0].filename}` : null;
        const timetablePath = req.files?.timetable ? `/uploads/${req.files.timetable[0].filename}` : null;

        const facultyModel = new FacultyModel({ name, email, password, department,facultyimage : facultyimagePath,timetable : timetablePath });
        facultyModel.password = await bcrypt.hash(password, 10);
        await facultyModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    signup,
    login,
    upload,
    facultysignup
}