const mongoose = require("mongoose")

const InsuranceSchema = new mongoose.Schema({
   name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    leadFrom : {
      type: String,
      default:"insurance"
     },
    date: {
        type: String,
      },
      time: {
        type: String,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
      deletedAt: {
        type: Date,
      },
}, { timestamps: true })
module.exports = mongoose.model("insurance", InsuranceSchema);