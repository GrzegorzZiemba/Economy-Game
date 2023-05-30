const shipBuildingQueue = require("../dbSchemas/shipBuildingQueue");
const Ships = require("../dbSchemas/ships");

setInterval(async function () {
  const checkQueueLength = await shipBuildingQueue.countDocuments({});

  if (checkQueueLength > 0) {
    const thatTime = new Date();
    const queue = await shipBuildingQueue.find({});

    queue.forEach(async (ship) => {
      if (thatTime > ship.buildingTime) {
   
          const ship = await Ships.findById({ _id: ship.buildingId });

          upgrade(city, goldMine);

          await Ships.findOneAndUpdate(
          
          );

          await shipBuildingQueue.deleteOne({ _id: element._id });
        } else {
        }
      }
    });
  }
}, 5000);

module.exports = setInterval;
