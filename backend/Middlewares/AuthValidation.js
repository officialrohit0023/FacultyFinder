const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}

const facultysignupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
        department : Joi.string().required(),
        facultyimage: Joi.string().optional(), // Optional, as this is a file upload
        timetable: Joi.string().optional() // Optional, as this is a file upload
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }

     // Validate file uploads
     const facultyimage = req.files?.facultyimage?.[0];
     const timetable = req.files?.timetable?.[0];
 
     if (!facultyimage || !timetable) {
         return res.status(400).json({
             message: "Both facultyimage and timetable are required.",
         });
     }
 
     const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
 
     if (!allowedMimeTypes.includes(facultyimage.mimetype) || !allowedMimeTypes.includes(timetable.mimetype)) {
         return res.status(400).json({
             message: "Only .jpeg, .jpg, and .png image formats are allowed.",
         });
     }

    next();
}

module.exports = {
    signupValidation,
    loginValidation,
    facultysignupValidation
}