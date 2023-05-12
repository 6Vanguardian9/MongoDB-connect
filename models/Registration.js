const mongoose = require('mongoose')

const regSchema = mongoose.Schema(

    {
        StudentId:{
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






const Registration = mongoose.model('Registration' , regSchema );
module.exports = Registration;



