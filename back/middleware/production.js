const City = require("../dbSchemas/city");
const Account = require("../dbSchemas/account");
const Woodcutter = require("../dbSchemas/buildings/woodcutterSchema");
const SilverMine = require("../dbSchemas/buildings/silverMineSchema");
const IronMine = require("../dbSchemas/buildings/ironMineSchema");
const StoneMine = require("../dbSchemas/buildings/stoneMineSchema");
const GoldMine = require("../dbSchemas/buildings/goldMineSchema");
const Resources = require("../dbSchemas/resources");
let controlNumber = 0;

setInterval(async function () {
  const data = await Account.find({});
  data.forEach(async (document) => {
    const city = await City.findById(document.city);
    const woodElement = await Woodcutter.findById(city.woodcutter);
    const resources = await Resources.findById(document.resources);
    console.log(resources);
    if (!woodElement.building) {
      const woodStock = resources.wood;

      const woodProduction = woodElement.production;
      const sumWood = woodStock + woodProduction;
      await resources.update({
        wood: sumWood,
      });
    }

    if (
      controlNumber == 2 ||
      controlNumber == 4 ||
      controlNumber == 6 ||
      controlNumber == 8
    ) {
      const stoneElement = await StoneMine.findById(city.stoneMine);
      if (!stoneElement.building) {
        const stoneStock = resources.stone;
        const stoneProduction = stoneElement.production;
        const sumStone = stoneStock + stoneProduction;
        await resources.update({
          stone: sumStone,
        });
      }
    }

    if (controlNumber == 3 || controlNumber == 9) {
      const ironOreElement = await IronMine.findById(city.ironMine);
      if (!ironOreElement.building) {
        const ironOreStock = resources.iron;
        const ironOreProduction = ironOreElement.production;
        const sumIronOre = ironOreStock + ironOreProduction;
        await resources.update({
          iron: sumIronOre,
        });
      }
    }

    if (controlNumber == 6) {
      const silverMineElement = await SilverMine.findById(city.silverMine);
      if (!silverMineElement.building) {
        const silverStock = resources.silver;
        const silverProduction = silverMineElement.production;
        const sumSilver = silverStock + silverProduction;
        await resources.update({
          silver: sumSilver,
        });
      }
    }

    if (controlNumber >= 9) {
      const goldMineElement = await GoldMine.findById(city.goldMine);
      if (!goldMineElement.building) {
        const goldStock = resources.gold;
        const goldMineProduction = goldMineElement.production;
        const sumGold = goldStock + goldMineProduction;
        await resources.update({
          gold: sumGold,
        });
      }

      controlNumber = 0;
    }
  });
  controlNumber += 1;
}, 4000);

module.exports = setInterval;
