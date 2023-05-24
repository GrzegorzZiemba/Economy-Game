import mongoose from "mongoose";

const buildingQueue = new mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, ref: "city" },
  buildingTime: Date,
  building: String,
  buildingId: mongoose.Types.ObjectId,
});

const BuildingQueue = mongoose.model("BuildingQueue", buildingQueue);

module.exports = BuildingQueue;
