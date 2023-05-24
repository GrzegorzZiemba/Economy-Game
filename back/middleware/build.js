import BuildingQueue from "../dbSchemas/buildingQueue";
import substractingCost from "./substractingCost";

function addSeconds(numOfSeconds, date) {
  date.setSeconds(date.getSeconds() + numOfSeconds);

  return date;
}

export async function (city, resources, building, buildingName) {
  if (
    resources.stone > building.stone &&
    resources.wood > building.wood &&
    resources.ironOre > building.ironOre &&
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

    substractingCost(resources, buildingType);

    return "Done";
  } else {
    return "Not DOne";
  }
}
