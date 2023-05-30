const mongoose = require("mongoose");

const buildingQueue = new mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, ref: "ships" },
  buildingTime: Date,
  building: String,
  buildingId: mongoose.Types.ObjectId,
});

const BuildingQueue = mongoose.model("BuildingQueue", buildingQueue);

module.exports = BuildingQueue;
