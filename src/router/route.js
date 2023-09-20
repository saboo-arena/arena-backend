const express = require("express");
let router = express.Router();
const {
  popup,
  getPopups,
  dupilicatepopups,
  popupRangeEntries,
  popupUniqueEntries,
} = require("../contoller/popupController");
const {
  service,
  getService,
  dupeService,
  serviceUniqueEntries,
  serviceRangeData,
} = require("../contoller/serviceController");

const {
  onRoadPrice,
  getOnRoadPrice,
  duplicateOnRoadPrice,
  onRoadPriceUniqueEntries,
  onRoadPriceRange,
} = require("../contoller/onRoadPriceController");

let {
  insurance,
  getIsurance,
  duplicateInsurance,
  insuranceUniqueEntries,
  insuranceRange,
} = require("../contoller/insuranceController");

let {
  finance,
  getfinance,
  duplicateFinance,
  financeUniqueEntries,
  financeRange,
} = require("../contoller/financeController");
//======================================================================================

router.get("/test-me", function (req, res) {
  res.send("this is successfully created");
});
//=====================================================================================

router.post("/popup", popup);
router.get("/getPopups", getPopups);
router.get("/dupilicatepopups", dupilicatepopups);
router.get("/popupUniqueEntries", popupUniqueEntries);
router.get("/popupRangeEntries", popupRangeEntries);
//=====================================================================================
router.post("/service", service);
router.get("/getService", getService);
router.get("/dupeService", dupeService);
router.get("/serviceUniqueEntries", serviceUniqueEntries);
router.get("/serviceRangeData", serviceRangeData);
//===================================================================================
router.post("/onRoadPrice", onRoadPrice);
router.get("/getOnRoadPrice", getOnRoadPrice);
router.get("/duplicateOnRoadPrice", duplicateOnRoadPrice);
router.get("/onRoadPriceUniqueEntries", onRoadPriceUniqueEntries);
router.get("/onRoadPriceRange", onRoadPriceRange);
//====================================================================================
router.post("/insurance", insurance);
router.get("/getIsurance", getIsurance);
router.get("/duplicateInsurance", duplicateInsurance);
router.get("/insuranceUniqueEntries", insuranceUniqueEntries);
router.get("/insuranceRange", insuranceRange);
//=====================================================================================
router.post('/finance',finance)
router.get('/getfinance',getfinance)
router.get('/duplicateFinance',duplicateFinance)
router.get('/financeUniqueEntries',financeUniqueEntries)
router.get('/financeRange',financeRange)
//====================================================================================

module.exports = router;
