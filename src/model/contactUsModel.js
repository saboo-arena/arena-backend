const mongoose = require("mongoose");
const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    outlet: {
      type: String,
      require: true,
    },

    message: {
      type: String,
      require: true,
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
        default:"Contact us"
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

module.exports = mongoose.model("contact us", contactUsSchema);
