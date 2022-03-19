const express = require("express");
const router = express.Router();
const createSession = require("./create.sessionController");
const validator = require("../../helpers/validator");
const { checkToken } = require("../../middlewares/jwt");

router.post("/", checkToken, createSession.validation, validator, createSession.service);

module.exports = router;
