const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "its a secret word";

module.exports = {
  secret,
  jwt,
};
