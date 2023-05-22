const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

require("dotenv").config();

const accountSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    uniqe: true,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide Email Address !!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 9,
    trim: true,
  },
  city: { type: mongoose.Types.ObjectId, ref: "city" },
  ships: { type: mongoose.Types.ObjectId, ref: "ships" },
  coordinates: { type: mongoose.Types.ObjectId, ref: "coordinates" },
  resources: { type: mongoose.Types.ObjectId, ref: "resources" },
  citizien: { type: Number, default: 10 },
  tokens: {
    type: String,
    required: true,
  },
});

accountSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

accountSchema.methods.generateAuthTokens = async function () {
  const user = this;
  console.log("User ");
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_JWT);
  console.log(token);
  user.tokens = token;
  await user.save();
  return token;
};

accountSchema.statics.loginUser = async (email, pass) => {
  console.log("Static Login");

  const user = await Account.findOne({ email });
  console.log(user + " JEST ++++ ");
  if (!user) {
    throw new Error("Cannot Login");
  }
  const checkPassword = await bcrypt.compare(pass, user.password);
  console.log(checkPassword);
  if (!checkPassword) {
    throw new Error("Wrong Password");
  }
  return user;
};

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
