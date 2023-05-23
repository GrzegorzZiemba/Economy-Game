const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const warehouse = new Schema({
  level: { type: Number },
  capacity: { type: Number, default: 4500 },
  stone: { type: Number, default: 195 },
  wood: { type: Number, default: 380 },
  iron: { type: Number, default: 11 },
  buildTime: { type: Number, default: 900 },
  building: { type: Boolean, default: false },
  finishTime: { type: Date },
});

const Warehouse = mongoose.model("Warehouse", warehouse);

module.exports = Warehouse;
