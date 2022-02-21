require("dotenv").config();

const express = require("express");

const cors = require("cors");
const db = require("./models");
const authRouter = require("./routes/auth.route");
// Instantiating Express app
const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api/auth", authRouter);

db.sequelize.sync();

module.exports = app;
