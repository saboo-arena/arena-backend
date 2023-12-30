const insuranceModel = require("../model/insuranceModel")

const moment = require("moment");
require("moment-timezone");
const insurance = async (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  


    try {
      let data = req.body;
      moment.tz.setDefault("Asia/Kolkata");
      let dates = moment().format("YYYY-MM-DD");
      let times = moment().format("HH:mm:ss");
      data.date = dates;
      data.time = times;
  
      let savedata = await insuranceModel.create(data);
      res.status(201).send({ status: true, data: savedata });
    } catch (error) {
      res.status(500).send({ staus: false, message: error.message });
    }
  };
  //====================================================================
  let getIsurance = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
      const filter = req.query;
      let sortOptions = {};
      let data = [];
      if (Object.keys(filter).length === 0) {
        sortOptions.createdAt = -1;
        let data = await insuranceModel
          .find({ isDeleted: false })
          .sort(sortOptions);
        return res.status(200).send({ status: true, data: data });
      } else {
        let filterDate = filter.date;
        data = await insuranceModel.aggregate([
          { $match: { isDeleted: false, date: filterDate } },
          {
            $group: {
              _id: {
                date: "$date",
                mobile: "$Phone",
              },
              doc: { $first: "$$ROOT" },
            },
          },
          { $replaceRoot: { newRoot: "$doc" } },
          { $sort: { createdAt: -1 } },
        ]);
        return res.status(200).send({ status: true, data: data });
      }
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  };
  //===============================================================================
  const duplicateInsurance = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
      const repeatedPhoneNumbers = await insuranceModel.aggregate([
        {
          $group: {
            _id: {
              date: "$date",
              mobile: "$Phone",
            
            },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0, // Exclude _id from the result
  
            number: "$_id.mobile",
            date: "$_id.date",
          
            count: 1,
          },
        },
        { $match: { count: { $gt: 1 } } },
      ]);
  
      return res.status(200).send({ status: true, data: repeatedPhoneNumbers });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };
  //==========================================================================
  const insuranceUniqueEntries = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
      let   data = await insuranceModel.aggregate([
        { $match: { isDeleted: false } },
        {
          $group: {
            _id: {
              date: "$date",
              mobile: "$Phone",
              model: "$model",
            },
            doc: { $first: "$$ROOT" },
          },
        },
        { $replaceRoot: { newRoot: "$doc" } },
        { $sort: { createdAt: -1 } },
      ]);
      return res.status(200).send({ status: true, data: data });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  
  }
  
  //========================================================================
  
  const insuranceRange = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
      const { startDate, endDate } = req.body; // Assuming startDate and endDate are provided in the request body
  
      let data = await insuranceModel.aggregate([
        {
          $match: {
            isDeleted: false,
            $expr: {
              $and: [
                { $gte: ["$date", startDate] },
                { $lte: ["$date", endDate] }
              ]
            }
          }
        },
        {
          $group: {
            _id: {
              date: "$date",
              mobile: "$Phone",
    
            },
            doc: { $first: "$$ROOT" },
          },
        },
        { $replaceRoot: { newRoot: "$doc" } },
        { $sort: { createdAt: -1 } }, // Note: createdAt field doesn't seem to be in the pipeline
      ]);
  
      return res.status(200).send({ status: true, data: data });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  }
  module.exports = { insurance, getIsurance, duplicateInsurance , insuranceUniqueEntries ,insuranceRange};