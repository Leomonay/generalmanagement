const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db connected"));

function connectDb(url) {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => console.log("conexión exitosa a la base de datos"))
    .catch((err) => console.log({ error: err.message }));
}

module.exports = connectDb;
