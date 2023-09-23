const corporateModel = require("../model/corporateModel");
const drivingSchoolModel = require("../model/drivingSchoolModel");
const financeModel = require('../model/financeModel');
const insuranceModel = require('../model/insuranceModel');
const onRoadPriceModel = require("../model/onRoadPriceModel");
const popupModel = require("../model/popupModel");
const serviceModel = require("../model/serviceModel");

const allData = async (req, res) => {
    try {
        // Create an array of promises, each with a label indicating the collection
        const dataPromises = [
            { key: 'corporateData', data: corporateModel.find().exec() },
            { key: 'drivingSchoolData', data: drivingSchoolModel.find().exec() },
            { key: 'financeData', data: financeModel.find().exec() },
            { key: 'insuranceData', data: insuranceModel.find().exec() },
            { key: 'onRoadPriceData', data: onRoadPriceModel.find().exec() },
            { key: 'popupData', data: popupModel.find().exec() },
            { key: 'serviceData', data: serviceModel.find().exec() }
        ];

        // Execute all promises concurrently using Promise.all
        const responseData = {};

        await Promise.all(dataPromises.map(async (promise) => {
            const { key, data } = promise;
            responseData[key] = await data;
        }));

        // Return the combined data in the response
        return res.status(200).send({ status: true, data: responseData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

module.exports = {
    allData
};
