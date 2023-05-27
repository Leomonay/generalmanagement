const express = require("express");
const { login } = require("../controllers/authController");
const server = express.Router();

server.post("/", login);

module.exports = server;
