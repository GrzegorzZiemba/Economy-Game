const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ships = new Schema({
  onDutyShips: [
    {
      name: { type: String },
      canonLevel: { type: Number },
      type: { type: String },
      level: { type: Number },
      capacityLeve: { type: Number },
      crewLevel: { type: Number },
      speedLevel: { type: Number },
      healthLevel: { type: Number },
    },
  ],
});

const Ships = mongoose.model("Ships", ships);

module.exports = Ships;
