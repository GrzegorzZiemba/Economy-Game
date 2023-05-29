const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const woodcutter = new Schema({
  production: { type: Number, default: 1 },
  level: { type: Number, default: 1 },
  stone: { type: Number, default: 195 },
  wood: { type: Number, default: 380 },
  ironOre: { type: Number, default: 177 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
});

const Woodcutter = mongoose.model("Woodcutter", woodcutter);

module.exports = Woodcutter;
