export default async function (resources, buildingType) {
  const resourcesStone = resources.stone - buildingType.stone;
  const resourcesWood = resources.wood - buildingType.wood;
  const resourcesIronOre = resources.ironOre - buildingType.ironOre;
  await resources.update({
    stone: resourcesStone,
    wood: resourcesWood,
    ironOre: resourcesIronOre,
  });
}
