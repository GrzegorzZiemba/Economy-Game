const express = require("express");
const resources = require("../dbSchemas/resources");
const auth = require("../middleware/auth");
const City = require("../dbSchemas/city");
const Woodcutter = require("../dbSchemas/buildings/woodcutterSchema");
const StoneMineSchema = require("../dbSchemas/buildings/stoneMineSchema");
const GoldMine = require("../dbSchemas/buildings/goldMineSchema");
const SilverMineSchema = require("../dbSchemas/buildings/silverMineSchema");
const IronMine = require("../dbSchemas/buildings/ironMineSchema");
const Sawmill = require("../dbSchemas/buildings/sawmillSchema");
const Walls = require("../dbSchemas/buildings/wallSchema");
const Warehouse = require("../dbSchemas/buildings/warehouseSchema");
const router = express.Router();

router.post("/gettrader", auth, async (req, res) => {
  try {
    if (auth) {
      console.log("Auth GetTrader");
      console.log(req.user);
      const traderWarehouse = await resources.findById(req.user[0].resources);
      const city = await City.findById(req.user[0].city);
      const woodcutter = await Woodcutter.findById(city.woodcutter);
      const stoneMine = await StoneMineSchema.findById(city.stoneMine);
      const goldMine = await GoldMine.findById(city.goldMine);
      const silverMine = await SilverMineSchema.findById(city.silverMine);
      const ironMine = await IronMine.findById(city.ironMine);
      const sawmill = await Sawmill.findById(city.sawmill);
      const walls = await Walls.findById(city.walls);
      const warehouse = await Warehouse.findById(city.warehouse);

      console.log(traderWarehouse);
      res.status(201).send({
        money: traderWarehouse.money,
        wood: traderWarehouse.wood,
        stone: traderWarehouse.stone,
        gold: traderWarehouse.gold,
        iron: traderWarehouse.iorn,
        woodcutter: { ...woodcutter },
        stoneMine: { ...stoneMine },
        goldMine: { ...goldMine },
        silverMine: { ...silverMine },
        iornMine: { ...ironMine },
        sawmill: { ...sawmill },
        walls: { ...walls },
        warehouse: { ...warehouse },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(200).send({ err: "not done" });
  }
});

router.post("/tradenpc", auth, async (req, res) => {
  try {
    if (auth) {
      let currentQty;

      console.log("Here i am trading NPC");
      const traderWarehouse = await resources.findById(req.user.warehouse);
      const resource = req.body.type;
      const qtyResource = req.body.qty;
      if (resource === "wood") {
        currentQty = traderWarehouse.wood;
        if (currentQty > qtyResource) {
          //trade
        }
      } else if (resource === "stone") {
        currentQty = traderWarehouse.stone;
        if (currentQty > qtyResource) {
          //trade
        }
      } else if (resource === "gold") {
        currentQty = traderWarehouse.gold;
        if (currentQty > qtyResource) {
          //trade
        }
      } else if (resource === "iron") {
        currentQty = traderWarehouse.iorn;
        if (currentQty > qtyResource) {
          //trade
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
