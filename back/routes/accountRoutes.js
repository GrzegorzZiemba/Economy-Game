const express = require("express");
const { createAccountController } = require("../controllers/accountController");
const Account = require("../dbSchemas/account");
const Resources = require("../dbSchemas/resources");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.post("/register", async (req, res) => {
  createAccountController(req, res);
});

router.post("/login", async (req, res) => {
  console.log("Login");
  try {
    console.log(req.body.email);
    const user = await Account.loginUser(req.body.email, req.body.password);
    console.log(user + " xxxx ");
    const token = await user.generateAuthTokens();

    const mail = user.email;
    const id = user._id.toString();
    console.log(token);
    console.log(mail);
    res.status(200).send({ mail, token, id });
  } catch (e) {
    res.status(400).send({ error: "Cannot Login" });
  }
});

router.post("/logout", async (req, res) => {
  const userId = JSON.parse(req.body.id);
  const id = mongoose.Types.ObjectId(userId);
  try {
    const user = await Account.findById({ _id: id });
    console.log(user);
    console.log("====");
    user.save();
    res.status(200).send({ text: "Logged Out!" });
  } catch (error) {
    res.status(400).send({ error: "Cannot Logout" });
  }
});

module.exports = router;
