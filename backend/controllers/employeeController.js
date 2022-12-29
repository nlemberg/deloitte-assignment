const asyncHandler = require("express-async-handler");

const Employee = require("../models/employeeModel");

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.status(200).json(employees);
});

const setEmployees = asyncHandler(async (req, res) => {
  const { name, workTitle, imageUrl } = req.body;

  if (!name || !workTitle || !imageUrl) {
    res.status(400);
    throw new Error("Please add fields in req body");
  }

  const employee = await Employee.create({
    name: req.body.name,
    workTitle: req.body.workTitle,
    imageUrl: req.body.imageUrl,
  });

  res.status(200).json(employee);
});

module.exports = { getEmployees, setEmployees };
