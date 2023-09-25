const mongoose = require("mongoose")
const OnroadPriceSchema = new mongoose.Schema(
    {
      Last_Name: {
        type: String,
        trim: true,
      },
     
      Mobile: {
        type: String,
        trim: true,
      },
  
      LEADCF6: {   //models
        type: String,
        trim: true,
      },
      LEADCF23: {    //outlet
        type: String,
        trim: true,
      },
      leadFrom : {
        type: String,
        default:"on Road Price"
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
  module.exports = mongoose.model("onRoadPrice", OnroadPriceSchema);
  