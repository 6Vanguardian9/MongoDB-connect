const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema(

    {
        Course:{
            type:String,
            required : [true , "Please Enter the course Name"]
        },
        CourseCode:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);






const Course = mongoose.model('Course' , CourseSchema );
module.exports = Course;



