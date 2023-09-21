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

