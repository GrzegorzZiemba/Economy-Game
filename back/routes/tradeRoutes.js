const express = require("express");
const Account = require("../dbSchemas/account");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/trade", auth, async (req, res) => {
  try {
    console.lop(req.user);
    console.log("---L0");
    res.status(201).send({ msg: "done" });
  } catch (err) {
    console.log(err);
    res.status(200).send({ err: "not done" });
  }
});

module.exports = router;
