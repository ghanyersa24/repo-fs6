const express = require("express");
const router = express.Router();

const registerUser = require("./register.userController");
const loginUser = require("./login.userController");
const meUser = require("./me.userController");
const { checkToken } = require("../../middlewares/jwt");

router.post("/register", registerUser.service);
router.post("/login", loginUser.service);
router.get("/me", checkToken, meUser.service);

module.exports = router;
