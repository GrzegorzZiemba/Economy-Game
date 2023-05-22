const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const tradeRoutes = require("./routes/tradeRoutes");
const accountRoutes = require("./routes/accountRoutes");
const gameRoutes = require("./routes/gameRoutes");
const db = require("./database/mongodb");

const app = express();
app.use(cors());

db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(accountRoutes);
app.use(gameRoutes);
app.use(tradeRoutes);

app.listen(5000, () => {
  console.log("ServerWorking");
});
