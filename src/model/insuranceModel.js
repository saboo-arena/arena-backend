const mongoose = require("mongoose")

const InsuranceSchema = new mongoose.Schema({
    Last_Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
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