const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    place: { type: Schema.Types.ObjectId, ref: "Places" },
    from: { type: Date },
    to: { type: Date },
    confirmation: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservations", reservationsSchema);
