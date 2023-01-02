const express = require("express");
const {
  getEmployees,
  setEmployees,
  getThreeEmployees,
} = require("../controllers/employeeController");
const router = express.Router();

router.route("/").get(getEmployees).post(setEmployees);
router.route("/:searchStr").get(getEmployees).post(setEmployees);
router.route("/3/:searchStr").get(getThreeEmployees).post(setEmployees);

module.exports = router;
