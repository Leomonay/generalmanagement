const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema(
  {
    name: { type: String },
    city: { type: String },
    manager: { type: Schema.Types.ObjectId, ref: "Users" },
    active: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Organization", OrganizationSchema);
