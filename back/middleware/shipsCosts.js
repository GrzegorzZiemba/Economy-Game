const shipCosts = {
  barque: {
    priceWood: 500,
    priceGold: 50,
    priceIron: 60,
    buildingMultiplier: 2.6,
  },
  brig: {
    priceWood: 1500,
    priceGold: 150,
    priceIron: 260,
    buildingMultiplier: 4.4,
  },
  fregate: {
    priceWood: 3000,
    priceGold: 250,
    priceIron: 560,
    buildingMultiplier: 9.5,
  },
  galeon: {
    priceWood: 150000,
    priceGold: 4500,
    priceIron: 50310,
    priceStone: 2000,
    priceSilver: 80000,
    buildingMultiplier: 41.2,
    limit: 2,
  },
};

module.exports = shipCosts;
