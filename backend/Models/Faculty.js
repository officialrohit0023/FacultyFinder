const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        department:{
            type : String,
            required : true
    
        },
        facultyimage:{
            type : String,
        },
        timetable:{
            type : String,
        }
    });
    
    const FacultyModel = mongoose.model('facultyInfo', FacultySchema);
    module.exports = FacultyModel;