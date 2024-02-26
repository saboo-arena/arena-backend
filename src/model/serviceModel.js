const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },

    outlet: {
      type: String,
      trim: true,
    },
    allQuery :{
      type :Array,
      trim:true
    },
  error :{
      type :Array,
      trim:true
    },
    leadFrom : {
      type: String,
      default:"service"
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
  },
  { timestamps: true }
);
module.exports = mongoose.model("service", serviceSchema);
