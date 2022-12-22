const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const {
  authRoutsValidator,
} = require("../middlewares/validators/auth.validator");

router.post("/signUp", authRoutsValidator, authController.signUp);

router.post("/login", authRoutsValidator, authController.login);

module.exports = router;
