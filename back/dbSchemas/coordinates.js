const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
  position: { type: Number, require: true },
  coordinates: { type: Number, require: true },
});

const Coordinates = mongoose.model("Coordinates", coordinatesSchema);

module.exports = Coordinates;
