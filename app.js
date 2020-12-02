const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const cors = require("cors");
app.listen(3000);

// const bodyParser = require("body-parser");
//turn code into JSON
// app.use(bodyParser.json()); --> BOdyparser is not needed if you use the code below
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import routes
const postsRoute = require("./routes/posts");

//MiddleWares
app.use("/posts", postsRoute);
app.use(cors()); //CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API.

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});
