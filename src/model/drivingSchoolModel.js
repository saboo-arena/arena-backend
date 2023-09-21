const mongoose = require("mongoose")
const drivingSchoolSchema = new mongoose.Schema({
    name:{                              
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    outlet:{
        type:String,
        require:true
    },
    date:{
        type: String,
    },
    time :{
        type:String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date
    },
    
},{timestamps:true})

module.exports = mongoose.model("drivingSchool",drivingSchoolSchema)