const Employee = require("../models/employeeModel");

const getEmployees = async (req, res) => {
  try {
    let str = req.params.searchStr ? req.params.searchStr : null;
    let query = {};
    if (str) {
      query = {
        $or: [
          { name: new RegExp(str, "i") },
          { workTitle: new RegExp(str, "i") },
        ],
      };
    }
    const employees = await Employee.find(query);
    res.status(200).json(employees);
  } catch (error) {
    res.json(error);
  }
};

const getThreeEmployees = async (req, res) => {
  try {
    let str = req.params.searchStr ? req.params.searchStr : null;
    let query = {};
    if (str) {
      query = {
        $or: [
          { name: new RegExp(str, "i") },
          { workTitle: new RegExp(str, "i") },
        ],
      };
    }
    const employees = await Employee.find(query).limit(3);
    res.status(200).json(employees);
  } catch (error) {
    res.json(error);
  }
};

const setEmployees = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};
module.exports = { getEmployees, setEmployees, getThreeEmployees };
