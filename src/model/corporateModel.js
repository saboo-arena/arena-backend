const mongoose = require('mongoose');

const corporateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  outlet: {
    type: String,
  },
  leadFrom : {
   type: String,
   default:"corporate"
  },
  allQuery :{
    type :Array,
    trim:true
  },
error :{
    type :Array,
    trim:true
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
},{timestamps:true});

module.exports= mongoose.model('Corporate', corporateSchema);

