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
  updateService,
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

let {
  corporate,
  getCorporate,
  dupesCorporate,
  corporateUniqueEntries,
  corporateRange,
} = require("../contoller/corporateController");

let {
  drvingSchool,
  getDrivingSchool,
  dupesDrivingSchool,
  drivingSchoolUniqueEntries,
  drivingSchoolRange,
} = require("../contoller/drivingSchoolController");

let {
  allData,
  findDuplicatesInAllCollections,
  findUniqueEntriesInAllCollections,
  findDataInRangeInAllCollections,
} = require("../contoller/allDataController");

let { login, register } = require("../contoller/userController");
const {
  general,
  getGenerals,
  duplicateGeneral,
  generalUniqueEntries,
  generalRange,
} = require("../contoller/generalController");
//======================================================================================

router.get("/test-me", function (req, res) {
  res.send("this is successfully created");
});
//====================================================================================
router.post("/register", register);
router.post("/login", login);
//=====================================================================================

router.post("/popup", popup);
router.get("/getPopups", getPopups);
router.get("/dupilicatepopups", dupilicatepopups);
router.get("/popupUniqueEntries", popupUniqueEntries);
router.post("/popupRangeEntries", popupRangeEntries);
//=====================================================================================
router.post("/service", service);
router.get("/getService", getService);
router.get("/dupeService", dupeService);
router.get("/serviceUniqueEntries", serviceUniqueEntries);
router.post("/serviceRangeData", serviceRangeData);
//===================================================================================
router.post("/onRoadPrice", onRoadPrice);
router.get("/getOnRoadPrice", getOnRoadPrice);
router.get("/duplicateOnRoadPrice", duplicateOnRoadPrice);
router.get("/onRoadPriceUniqueEntries", onRoadPriceUniqueEntries);
router.post("/onRoadPriceRange", onRoadPriceRange);
//====================================================================================
router.post("/insurance", insurance);
router.get("/getIsurance", getIsurance);
router.get("/duplicateInsurance", duplicateInsurance);
router.get("/insuranceUniqueEntries", insuranceUniqueEntries);
router.post("/insuranceRange", insuranceRange);
//=====================================================================================
router.post("/finance", finance);
router.get("/getfinance", getfinance);
router.get("/duplicateFinance", duplicateFinance);
router.get("/financeUniqueEntries", financeUniqueEntries);
router.post("/financeRange", financeRange);
//====================================================================================
router.post("/corporate", corporate);
router.get("/getCorporate", getCorporate);
router.get("/dupesCorporate", dupesCorporate);
router.get("/corporateUniqueEntries", corporateUniqueEntries);
router.post("/corporateRange", corporateRange);
//=================================================================================
router.post("/drvingSchool", drvingSchool);
router.get("/getDrivingSchool", getDrivingSchool);
router.get("/dupesDrivingSchool", dupesDrivingSchool);
router.get("/drivingSchoolUniqueEntries", drivingSchoolUniqueEntries);
router.post("/drivingSchoolRange", drivingSchoolRange);
//=================================================================================
router.get("/allData", allData);
router.get("/findDuplicatesInAllCollections", findDuplicatesInAllCollections);
router.get(
  "/findUniqueEntriesInAllCollections",
  findUniqueEntriesInAllCollections
);
router.post(
  "/findDataInRangeInAllCollections",
  findDataInRangeInAllCollections
);
//================================================================================
router.post("/general", general);
router.get("/getGenerals", getGenerals);
router.get("/duplicateGeneral", duplicateGeneral);
router.get("/generalUniqueEntries", generalUniqueEntries);
router.post("/generalRange", generalRange);
module.exports = router;
