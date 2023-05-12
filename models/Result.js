const mongoose = require('mongoose')

const ResultSchema = mongoose.Schema(

    {
        StudentID:{
            type:String,
            required : [true , "Please Enter the course Name"]
        },
        FacID:{
            type:String,
            required:true
        },
        Index:{
            type:Number,
            required: true,

        },
        Marks:{
            type:Number,
            required: true,
            default : 0
        }
    },
    {
        timestamps: true
    }
);






const Result = mongoose.model('Result' , ResultSchema );
module.exports = Result;



