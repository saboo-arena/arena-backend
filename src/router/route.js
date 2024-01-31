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

const {
  contactUs,
  getContactUs,
contactUsRange,
contactUsUniqueEntries,
  dupesContactUs,
}= require("../contoller/contactUsController")

const {
  accessories,
  getAccessories,
  dupeAccessories,
  accessoriesUniqueEntries,
  accessoriesRangeData,
} = require("../contoller/AccessoriesController");

const {authentication} = require("../middleware/auth")
//======================================================================================

router.get("/test-me", function (req, res) {
  res.send("this is successfully created");
});
//====================================================================================
router.post("/register", register);
router.post("/login", login);
//=====================================================================================

router.post("/popup", popup);
router.get("/getPopups", authentication ,getPopups);
router.get("/dupilicatepopups", authentication ,dupilicatepopups);
router.get("/popupUniqueEntries", authentication ,popupUniqueEntries);
router.post("/popupRangeEntries",authentication , popupRangeEntries);
//=====================================================================================
router.post("/service", service);
router.get("/getService",authentication , getService);
router.get("/dupeService",authentication , dupeService);
router.get("/serviceUniqueEntries",authentication , serviceUniqueEntries);
router.post("/serviceRangeData", authentication ,serviceRangeData);
//===================================================================================
router.post("/onRoadPrice", onRoadPrice);
router.get("/getOnRoadPrice",authentication, getOnRoadPrice);
router.get("/duplicateOnRoadPrice", authentication, duplicateOnRoadPrice);
router.get("/onRoadPriceUniqueEntries",authentication, onRoadPriceUniqueEntries);
router.post("/onRoadPriceRange",authentication, onRoadPriceRange);
//====================================================================================
router.post("/insurance", insurance);
router.get("/getIsurance", authentication,getIsurance);
router.get("/duplicateInsurance",authentication, duplicateInsurance);
router.get("/insuranceUniqueEntries", authentication,insuranceUniqueEntries);
router.post("/insuranceRange",authentication, insuranceRange);
//=====================================================================================
router.post("/finance", finance);
router.get("/getfinance", authentication,getfinance);
router.get("/duplicateFinance",authentication, duplicateFinance);
router.get("/financeUniqueEntries",authentication, financeUniqueEntries);
router.post("/financeRange",authentication, financeRange);
//====================================================================================
router.post("/corporate", corporate);
router.get("/getCorporate",authentication, getCorporate);
router.get("/dupesCorporate",authentication, dupesCorporate);
router.get("/corporateUniqueEntries",authentication, corporateUniqueEntries);
router.post("/corporateRange",authentication, corporateRange);
//=================================================================================
router.post("/drvingSchool", drvingSchool);
router.get("/getDrivingSchool",authentication, getDrivingSchool);
router.get("/dupesDrivingSchool",authentication, dupesDrivingSchool);
router.get("/drivingSchoolUniqueEntries",authentication, drivingSchoolUniqueEntries);
router.post("/drivingSchoolRange",authentication, drivingSchoolRange);
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
router.get("/getGenerals",authentication, getGenerals);
router.get("/duplicateGeneral",authentication, duplicateGeneral);
router.get("/generalUniqueEntries",authentication, generalUniqueEntries);
router.post("/generalRange",authentication, generalRange);

//===============================================================================
router.post("/contactUs",contactUs)
router.get("/getContactUs",authentication,getContactUs)
router.get("/contactUsUniqueEntries",authentication,  contactUsUniqueEntries)
router.get("/dupesContactUs",authentication, dupesContactUs)
router.post("/contactUsRange",authentication, contactUsRange)
//===============================================================================
router.post("/accessories", accessories);
router.get("/getAccessories",authentication, getAccessories);
router.get("/dupeAccessories",authentication,  dupeAccessories);
router.get("/accessoriesUniqueEntries",authentication, accessoriesUniqueEntries);
router.post("/accessoriesRangeData",authentication,  accessoriesRangeData);
module.exports = router;
