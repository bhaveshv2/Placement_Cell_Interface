//Schema for course scores of particular student
const mongoose = require('mongoose');

const courseScoreSchema = new mongoose.Schema({
    dsa:{
        type:Numbe,
        required:true,
    },
    webd:{
        type:Numbe,
        required:true,
    },
    react:{
        type:Numbe,
        required:true,
    }
},{
    timestamps:true,
});

const CourseScore = mongoose.model('CourseScore',courseScoreSchema);
module.exports = CourseScore;