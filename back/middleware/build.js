const BuildingQueue = require("../dbSchemas/buildingQueue");
const substractingCost = require("./substractingCost");

function addSeconds(numOfSeconds, date) {
  date.setSeconds(date.getSeconds() + numOfSeconds);

  return date;
}

async function build(city, resources, building, buildingName) {
  console.log("BUILDING");
  console.log(resources);
  console.log(building);
  console.log(buildingName);
  if (
    resources.stone > building.stone &&
    resources.wood > building.wood &&
    resources.iorn > building.ironOre &&
    !building.building
  ) {
    const now = new Date();
    const finishedDate = addSeconds(building.buildTime, now);
    const queue = new BuildingQueue({
      id: city._id,
      buildingTime: finishedDate,

      building: buildingName,
      buildingId: building._id,
    });

    await building.update({
      building: true,
      finishTime: finishedDate,
    });
    await queue.save();

    substractingCost(resources, building);

    return "Done";
  } else {
    return "Not DOne";
  }
}

module.exports = build;
