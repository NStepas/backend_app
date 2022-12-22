const { body, validationResult } = require("express-validator");
const { errorHandler } = require("../error-handler/error.handler");

const authRoutsValidator = [
  body("password").trim().isLength({ min: 6 }),
  body("email").isEmail(),
  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorHandler(403, errors, res);
    }
    next();
  },
];

module.exports = {
  authRoutsValidator,
};
