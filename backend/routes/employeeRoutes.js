const express = require("express");
const {
  getEmployees,
  setEmployees,
} = require("../controllers/employeeController");
const router = express.Router();

router.route("/").get(getEmployees).post(setEmployees);

module.exports = router;
