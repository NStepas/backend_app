const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const comparePassword = async (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};

const bcryptPassword = async (password) => {
  return bcrypt.hash(password, 12);
};

const jwtGenerator = async (payload) => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: process.env.EXPIRE,
  });
};

module.exports = {
  comparePassword,
  bcryptPassword,
  jwtGenerator,
};
