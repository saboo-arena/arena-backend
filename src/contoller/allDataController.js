const corporateModel = require("../model/corporateModel");
const drivingSchoolModel = require("../model/drivingSchoolModel");
const financeModel = require('../model/financeModel');
const insuranceModel = require('../model/insuranceModel');
const onRoadPriceModel = require("../model/onRoadPriceModel");
const popupModel = require("../model/popupModel");
const serviceModel = require("../model/serviceModel");

const allData = async (req, res) => {
    try {
        // Use Promise.all to query data from multiple collections concurrently
        const data = await Promise.all([
            corporateModel.find().exec(),
            drivingSchoolModel.find().exec(),
            financeModel.find().exec(),
            insuranceModel.find().exec(),
            onRoadPriceModel.find().exec(),
            popupModel.find().exec(),
            serviceModel.find().exec()
        ]);

        // Combine the results into a single array
        const combinedData = data.reduce((acc, curr) => acc.concat(curr), []);

        // Return the combined data in the response
        return res.status(200).send({ status: true, data: combinedData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

module.exports = {
    allData
};
