const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require('./db/db');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(
  process.env.PORT,
  console.log(`Server listen on port ${process.env.PORT}`)
);


dbConnection();