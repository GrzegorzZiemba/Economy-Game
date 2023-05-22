const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipyard = new Schema({
  level: { type: Number, default: 1 },
  stone: { type: Number, default: 395 },
  wood: { type: Number, default: 580 },
  ironOre: { type: Number, default: 277 },
  gold: { type: Number, default: 100 },
  humans: { type: Number, default: 5 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
  capacity: { type: Number, default: 1 },
  constantTimeToBuildShip: { type: Number, default: 60 },
});

const Shipyard = mongoose.model("Shipyard", shipyard);

module.exports = Shipyard;
