const contactUsModel = require("../model/contactUsModel")

const moment = require("moment")
require("moment-timezone")

const contactUs =async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      let data = req.body;
      // let {name,email,subject,message,phone}= data
  
      moment.tz.setDefault("Asia/Kolkata"); //default india time zone
  
      // Get the current date and time
      let dates = moment().format("YYYY-MM-DD");
      let times = moment().format("HH:mm:ss");
      data.date = dates;
      data.time = times;
  
      let saveData = await contactUsModel.create(data);
      res.status(201).send({ status: true, data: saveData });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
}
//===========================================================================

const getContactUs = async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let filter = { isDeleted: false }; //required the docs which r not deleted
    //finding the docs with filter and sorting in deceasing order for createdAt key
    let data = await contactUsModel.find(filter).sort({ createdAt: -1 });
    return res.status(200).send({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
}

module.exports = {contactUs , getContactUs}