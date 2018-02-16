const router = require("express").Router();
const newsRoutes = require("./newsRoutes");

// Book routes
router.use("/newsRoutes", newsRoutes);

module.exports = router;
