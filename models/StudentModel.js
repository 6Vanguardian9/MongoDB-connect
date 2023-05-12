const mongoose = require('mongoose')


const StudentSchema = mongoose.Schema(
    {
        StudentName:{
            type:String,
            required:true
        },
        CourseCode:{
            type:String,
            required:true
        },
        StudentRollNo:{
            type:String,
            required:true
        },
        StudentSection:{
            type:String,
            required: true
        }
    


    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('Student',StudentSchema);
module.exports = Student;