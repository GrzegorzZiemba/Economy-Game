const express = require("express");
const resources = require("../dbSchemas/resources");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/gettrader", auth, async (req, res) => {
  try {
    if (auth) {
      console.log("Auth GetTrader");
      console.log(req.user);
      const traderWarehouse = await resources.findById(req.user[0].resources);
      console.log(traderWarehouse);
      res.status(201).send({
        money: traderWarehouse.money,
        wood: traderWarehouse.wood,
        stone: traderWarehouse.stone,
        gold: traderWarehouse.gold,
        iron: traderWarehouse.iorn,
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
