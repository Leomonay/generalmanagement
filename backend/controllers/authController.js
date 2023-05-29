const { labels } = require("../utils/labels");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { userStatus } = require("../utils/consts");
const { userController } = require("./userController");
require("dotenv").config();
const lang = process.env.LANGUAGE;
const jwtKey = process.env.JWT_KEY;
const expiration = process.env.JWT_EXP_TIME;

async function hashPassword(string) {
  const ronda = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(string, ronda);
  return hash;
}

function decodeJwt(token) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error(labels.InvalidTokenFormat[lang]);
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

async function login(req, res) {
  try {
    // checks for a token
    const token = req.headers.authorization.split(" ")[1];
    let { email, password } = req.body;
    let user = null;
    // if token, search user by token email
    if (token) {
      email = decodeJwt(token).payload?.email;
      user = await User.findOne({ email });
      // if credentials by body, find user by email & password
      if (!user) {
        user = await userController.create({ email, status: userStatus.newby });
      }
    } else if (email && password) {
      password = await hashPassword(req.body.password);
      user = await User.findOne({ email, password });
      if (!user) throw new Error(labels.WrongCredentials[lang]);
    } else {
      throw new Error(labels.NotEnoughCredentials[lang]);
    }
    const newToken = jwt.sign(
      { email: user.email, id: user.id, status: user.status },
      jwtKey,
      {
        expiresIn: expiration,
      }
    );
    res.status(200).send({ token: newToken });
  } catch (e) {
    // console.log(e.message);
    console.log(e);
    res.status(400).send({ error: e.message });
  }
}

module.exports = {
  login,
};
