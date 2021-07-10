const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;

// document.querySelectorAll(".category").addEventListener("click", () => console.log("This is too hard"));