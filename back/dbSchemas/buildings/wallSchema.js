const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walls = new Schema({
  defence: { type: Number, default: 2 },
  level: { type: Number, default: 1 },
  stone: { type: Number, default: 195 },
  wood: { type: Number, default: 380 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
  canons: { type: Number, default: 1 },
});

const Walls = mongoose.model("Walls", walls);

module.exports = Walls;
