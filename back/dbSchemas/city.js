const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const city = new Schema({
  woodcutter: { type: mongoose.Types.ObjectId, ref: "woodcutter" },
  stoneMine: { type: mongoose.Types.ObjectId, ref: "stoneMine" },
  goldMine: { type: mongoose.Types.ObjectId, ref: "goldMine" },
  silverMine: { type: mongoose.Types.ObjectId, ref: "silverMine" },
  ironMine: { type: mongoose.Types.ObjectId, ref: "ironMine" },
  sawmill: { type: mongoose.Types.ObjectId, ref: "sawmill" },
  shipyard: { type: mongoose.Types.ObjectId, ref: "shipyard" },
  walls: { type: mongoose.Types.ObjectId, ref: "walls" },
  warehouse: { type: mongoose.Types.ObjectId, ref: "warehouse" },
  house: { type: mongoose.Types.ObjectId, ref: "house" },
});

const City = mongoose.model("City", city);

module.exports = City;
