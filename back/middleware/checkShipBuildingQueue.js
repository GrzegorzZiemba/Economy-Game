const shipBuildingQueue = require("../dbSchemas/shipBuildingQueue");
const Ships = require("../dbSchemas/ships");
const shipCost = require("./shipsCosts");
setInterval(async function () {
  const checkQueueLength = await shipBuildingQueue.countDocuments({});

  if (checkQueueLength > 0) {
    const thatTime = new Date();
    const queue = await shipBuildingQueue.find({});

    queue.forEach(async (ship) => {
      if (thatTime > ship.buildingTime) {
        const ship = await Ships.findById({ _id: ship.buildingId });

        upgrade(city, goldMine);

        if (ship.buildingShip === "barque") {
          // add costs of the ships and what type of ship will be added
          await Ships.findOneAndUpdate(
            { _id: element.buildingId },
            {
              onDutyShips: [
                ...onDutyShips,
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
            }
          );
        } else if (ship.buildingShip === "briq") {
        } else if (ship.buildingShip === "fregate") {
        } else if (ship.buildingShip === "galeon") {
        }

        await shipBuildingQueue.deleteOne({ _id: element._id });
      } else {
      }
    });
  }
}, 5000);

module.exports = setInterval;
