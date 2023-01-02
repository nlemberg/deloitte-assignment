const path = require("path");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const PORT = process.env.PORT || require("./config/keys").PORT || 5000;

db.connectDB();
db.populateDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/employees", require("./routes/employeeRoutes"));

if (process.env.NODE_ENV === "production" || "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Not in production"));
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
