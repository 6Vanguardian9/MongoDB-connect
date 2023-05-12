const mongoose = require('mongoose')


const SubjectSchema = mongoose.Schema(
    {
        CourseCode:{
            type:String,
            required:true
        },
        Subject:{
            type:String,
            required:true
        },
        SubjectCode:{
            type:String,
            required:true
        }


    },
    {
        timestamps: true
    }
)

const Subject = mongoose.model('Subject',SubjectSchema);
module.exports = Subject;