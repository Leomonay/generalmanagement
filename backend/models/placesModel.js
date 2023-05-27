const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema(
  {
    name: { type: String },
    neighborhood: { type: Schema.Types.ObjectId, ref: "Organization" },
    active: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Places", placesSchema);
