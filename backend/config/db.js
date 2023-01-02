const mongoose = require("mongoose");
const axios = require("axios");
const url =
  "https://busy-puce-gopher-wrap.cyclic.app/" || "http://localhost:5000";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(
      process.env.MONGO_URI || require("./keys").MONGO_URI
    );
    console.log(`MongoDB connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const populateDB = async () => {
  let { data: employees } = await axios.get(`${url}/api/employees`);
  if (employees.length === 0) {
    const { data: response } = await axios.get("https://dummyjson.com/users");
    employees = response.users.map(async (user) => {
      const employee = {
        name: user.firstName + " " + user.lastName,
        workTitle: user.company.title,
        imageUrl: user.image,
      };
      try {
        await axios.post(`${url}/api/employees`, employee);
      } catch (error) {
        console.log(error);
      }
    });
  }
};

module.exports = { connectDB, populateDB };
