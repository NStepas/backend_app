const jwt = require("jsonwebtoken");
const { errorHandler } = require("../error-handler/error.handler");
const { AUTH_ERRORS } = require("../../common/enums/errors.enum");

const verifyToken = async (req, res, next) => {
  const accessToken =
    req.headers && req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
  if (!accessToken) {
    return await errorHandler(401, AUTH_ERRORS.TOKEN_NOT_PROVIDED, res);
  }
  try {
    req.user = jwt.verify(accessToken, process.env.SECRET);
  } catch (err) {
    return await errorHandler(401, AUTH_ERRORS.WRONG_ACCESS_TOKEN, res);
  }
  return next();
};

module.exports = verifyToken;
