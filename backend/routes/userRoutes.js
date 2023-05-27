const express = require("express");
// const {
//   addUser,
//   login,
//   getUsersList,
//   getUserData,
//   updateUser,
//   getUserOptions,
//   filterUser,
// } = require("../controllers/userController");
const server = express.Router();

server.get("/", (req, res) => res.send("users"));

module.exports = server;
