const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

module.exports = function createMongoDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((result) => {
      console.log("Connected");
    })
    .catch((err) => console.log(err));
};
