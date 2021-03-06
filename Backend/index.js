const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require('./db/db');
const User = require('./routes/user');
const Post = require('./routes/post');
const Auth = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/post", Post);
app.use("/api/auth", Auth);


app.listen(
  process.env.PORT,
  console.log(`Server listen on port ${process.env.PORT}`)
);


dbConnection();