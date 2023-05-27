const mongoose = require("mongoose");
const { userStatus } = require("../utils/consts");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    idNumber: { type: String, unique: true },
    password: { type: String },
    address: {
      street: { type: String },
      number: { type: Number },
    },
    phone: { type: String },
    neighborhood: { type: Schema.Types.ObjectId, ref: "Organization" },
    status: { type: String, enum: Object.values(userStatus) },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
