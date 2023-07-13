const BuildingQueue = require("../dbSchemas/buildingQueue");
const GoldMine = require("../dbSchemas/buildings/goldMineSchema");
const City = require("../dbSchemas/city");
const upgrade = require("./upagrde");
setInterval(async function () {
  const checkQueueLength = await BuildingQueue.countDocuments({});
  console.log("HERE");
  if (checkQueueLength > 0) {
    const thatTime = new Date();
    const queue = await BuildingQueue.find({});

    queue.forEach(async (element) => {
      if (thatTime > element.buildingTime) {
        if (element.building === "goldmine") {
          const goldMine = await GoldMine.findById({ _id: element.buildingId });
          const city = await City.findById({ _id: element.id });
          upgrade(city, goldMine);

          await GoldMine.findOneAndUpdate(
            { _id: element.buildingId },
            { building: false, finishTime: 0 }
          );

          await BuildingQueue.deleteOne({ _id: element._id });
        } else {
        }
      }
    });
  }
}, 2000);

module.exports = setInterval;
