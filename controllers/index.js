// import express router
const router = require("express").Router();

const apiRoutes = require("./api");
// const apiRoutes = require("./homeRoutes");

// router.use("/", homeRoutes)
router.use("/api", apiRoutes);

module.exports = router;
