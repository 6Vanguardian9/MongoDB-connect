const mongoose = require('mongoose')


const FacSchema = mongoose.Schema(
    {
        FacID: {
            type: String,
            required: true
        },
        FacName: {
            type: String,
            required: true
        },
        FacCourseCode: {
            type: String,
            required: true
        },
        FacSubCode: {
            type: String,
            required: true
        },
        FacIndex: {
            type: Number,
            required:true,
            default:0
        }



    },
    {
        timestamps: true
    }
)

const Faculty = mongoose.model('Faculty', FacSchema);
module.exports = Faculty;