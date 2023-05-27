const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const connectDb = require("./database/connection");
require("dotenv").config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

const port = process.env.PORT;
const appName = process.env.APP_NAME;
const dbUrl = process.env.DB_URL;
const clientUrl = process.env.CLIENT_URL;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", clientUrl);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/v1", routes);

async function startServer() {
  try {
    await connectDb(dbUrl);
    server.listen(port, () => {
      console.log(`${appName} listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}
startServer();
