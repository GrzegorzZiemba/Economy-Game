const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ironMine = new Schema({
  production: { type: Number, default: 1 },
  level: { type: Number, default: 1 },
  productionTime: { type: Number, default: 360 },
  stone: { type: Number, default: 195 },
  wood: { type: Number, default: 380 },
  ironOre: { type: Number, default: 177 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
});

const IronMine = mongoose.model("IronMine", ironMine);

module.exports = IronMine;
