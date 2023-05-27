const User = require("../models/userModel");

const userController = {
  create: async (user) => (await User(user)).save(),
};

module.exports = { userController };
