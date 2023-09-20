const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema(
  {
    Last_Name: {
      type: String,
      trim: true,
    },
    Email: {
      type: String,
      trim: true,
    },
    Phone: {
      type: String,
      trim: true,
    },

    LEADCF22: {
      type: String,
      trim: true,
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
