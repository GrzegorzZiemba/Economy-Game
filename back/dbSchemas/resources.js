const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  money: { type: Number, default: 3000 },
  wood: { type: Number, default: 300 },
  plank: { type: Number, default: 300 },
  stone: { type: Number, default: 1000 },
  gold: { type: Number, default: 342 },
  silver: { type: Number, default: 300 },
  humans: { type: Number, default: 20 },
  iron: { type: Number, default: 11 },
});

module.exports = mongoose.model("Resources", resourcesSchema);
