const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  level: { type: Number, default: 0 },
  capacity: { type: Number, default: 12 },
  stone: { type: Number, default: 195 },
  wood: { type: Number, default: 380 },
  gold: { type: Number, default: 11 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
  production: { type: Number, default: 1 },
  productionTime: { type: Number, default: 1000 },
});

const House = mongoose.model("House", houseSchema);

module.exports = House;
