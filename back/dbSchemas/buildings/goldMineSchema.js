const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goldMine = new Schema({
  production: { type: Number, default: 1 },
  level: { type: Number, default: 1 },
  stone: { type: Number, default: 1 },
  wood: { type: Number, default: 1 },
  ironOre: { type: Number, default: 1 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
});

const GoldMine = mongoose.model("GoldMine", goldMine);

module.exports = GoldMine;
