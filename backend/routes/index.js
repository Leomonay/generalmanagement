const express = require("express");
const usersRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

const server = express.Router();

server.use("/auth", authRoutes);
server.use("/users", usersRoutes);

module.exports = server;
