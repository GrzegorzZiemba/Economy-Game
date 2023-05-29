const Account = require("../dbSchemas/account");
const Resources = require("../dbSchemas/resources");
const Ships = require("../dbSchemas/ships");
const Coordinates = require("../dbSchemas/coordinates");
const Woodcutter = require("../dbSchemas/buildings/woodcutterSchema");
const StoneMine = require("../dbSchemas/buildings/stoneMineSchema");
const GoldMine = require("../dbSchemas/buildings/goldMineSchema");
const SilverMine = require("../dbSchemas/buildings/silverMineSchema");
const IronMine = require("../dbSchemas/buildings/ironMineSchema");
const Shipyard = require("../dbSchemas/buildings/shipyardSchema");
const Walls = require("../dbSchemas/buildings/wallSchema");
const Warehouse = require("../dbSchemas/buildings/warehouseSchema");
const House = require("../dbSchemas/buildings/houseSchema");
const City = require("../dbSchemas/city");

const createAccountController = async (req, res) => {
  const user = req.body;
  console.log(user);
  const isUser = await Account.find({ email: user.email });
  if (isUser.length === 0) {
    const resources = new Resources();
    await resources.save();
    const ships = new Ships();
    await ships.save();
    console.log(ships);
    const coordinates = new Coordinates();
    await coordinates.save();
    const woodcutter = new Woodcutter();
    await woodcutter.save();
    const stoneMine = new StoneMine();
    await stoneMine.save();
    const goldMine = new GoldMine();
    await goldMine.save();
    const silverMine = new SilverMine();
    await silverMine.save();
    const ironMine = new IronMine();
    await ironMine.save();
    const shipyard = new Shipyard();
    await shipyard.save();
    const walls = new Walls();
    await walls.save();
    const warehouse = new Warehouse();
    await warehouse.save();
    const house = new House();
    await house.save();
    const city = new City({
      woodcutter: woodcutter._id,
      stoneMine: stoneMine._id,
      goldMine: goldMine._id,
      silverMine: silverMine._id,
      ironMine: ironMine._id,
      shipyard: shipyard._id,
      walls: walls._id,
      warehouse: warehouse._id,
      house: house._id,
    });
    await city.save();
    const newUser = new Account({
      ...user,
      city: city._id,
      ships: ships._id,
      resources: resources._id,
    });
    console.log(ships);

    await newUser.generateAuthTokens();
    await newUser.save();
    res.status(201).send({ msg: "done" });
  } else {
    res.status(400).send({ error: "SOmething go wrong" });
  }
};

module.exports = {
  createAccountController: createAccountController,
};
