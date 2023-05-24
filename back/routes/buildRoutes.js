const express = require("express");
const City = require("../dbSchemas/city");
const auth = require("../middleware/auth");
const Account = require("../dbSchemas/account");
const GoldMine = require("../dbSchemas/buildings/goldMineSchema");
const resources = require("../dbSchemas/resources");

const router = express.Router();

router.post("/city/upgrade/:id", auth, async (req, res) => {
  if (auth) {
    const id = req.user._id;
    const building = req.body.building;
    const buildingUser = await Account.findById({ _id: id });
    const city = await City.findById({ _id: buildingUser.city });
    const resources = await resources.findById({ _id: buildingUser.resources });
    if (req.body.building === "goldMine") {
      const goldMine = await GoldMine.findById({ _id: city.goldMine });
      build(city, resources, goldMine, building);

      res.status(201).send({
        wood: goldMine.wood,
        stone: goldMine.stone,
        ironOre: goldMine.ironOre,
      });
    }
  }
});

module.exports = router;
