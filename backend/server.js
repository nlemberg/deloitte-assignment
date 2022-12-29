const express = require("express");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/employees", require("./routes/employeeRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
