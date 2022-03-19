const express = require("express");
const router = express.Router();
const classRoutes = require("../controllers/classes/routes");
const userRoutes = require("../controllers/users/routes");
const sessionRoutes = require("../controllers/sessions/routes");

router.use("/class", classRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);

module.exports = router;
