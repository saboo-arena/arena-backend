const financeModel = require("../model/financeModel")

const moment = require("moment");
require("moment-timezone");

const finance = async (req, res) => {
    try {
      let data = req.body;
      moment.tz.setDefault("Asia/Kolkata");
      let dates = moment().format("YYYY-MM-DD");
      let times = moment().format("HH:mm:ss");
      data.date = dates;
      data.time = times;
  
      //   let getdataCount = await financeModel.find().count();
      //   data.sno = getdataCount + 1;
      let saveDate = await financeModel.create(data);
      return res.status(201).send({ status: true, data: saveDate });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };

  const getfinance = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const filter = req.query;
      const sortOptions = {};
      let data = [];
  
      if (Object.keys(filter).length === 0) {
        // No query parameters provided
        sortOptions.createdAt = -1;
        const data = await financeModel
          .find({ isDeleted: false })
          .sort(sortOptions);
        return res.status(200).send({ status: true, data: data });
      } else {
        const filterDate = filter.date;
  
        data = await financeModel.aggregate([
          { $match: { isDeleted: false, date: filterDate } },
          {
            $group: {
              _id: {
                date: "$date",
                mobile: "$phone",
                vehicle: "$vehicle",
              },
              doc: { $first: "$$ROOT" },
            },
          },
          { $replaceRoot: { newRoot: "$doc" } },
          { $sort: { createdAt: -1 } },
        ]);
      }
  
      return res.status(200).send({ status: true, data: data });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };
  //=======================================================================
  const duplicateFinance = async (req, res) => {
    try {
      const repeatedPhoneNumbers = await financeModel.aggregate([
        {
          $group: {
            _id: {
              date: "$date",
              mobile: "$phone",
            //   vehicle: "$vehicle",
            },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0, // Exclude _id from the result
  
            number: "$_id.mobile",
            date: "$_id.date",
            // vehicle: "$_id.vehicle",
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
  
  //====================================================================================

  const financeUniqueEntries = async (req,res)=>{
    try {
      let  data = await financeModel.aggregate([
        { $match: { isDeleted: false} },
        {
          $group: {
            _id: {
                date: "$date",
                mobile: "$phone",
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
  //================================================================
  const financeRange = async (req, res) => {
    try {
      const { startDate, endDate } = req.body; // Assuming startDate and endDate are provided in the request body
  
      let data = await financeModel.aggregate([
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
                mobile: "$phone",
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
  module.exports = { finance, getfinance, duplicateFinance, financeUniqueEntries , financeRange};