const mongoose = require('mongoose')

const popupSchema = new mongoose.Schema({
    name:{                              
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    outlet:{
        type:String,
        require:true
    },
    allQuery :{
        type :Array,
        trim:true
      },
    error :{
        type :String,
        trim:true
      },
    leadFrom : {
        type: String,
        default:"popup"
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
module.exports = mongoose.model("popup", popupSchema);


