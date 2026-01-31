const express = require("express");
const {
  addVehicle,
  assignDriver,
  getVehicle
} = require("../controllers/vehicle.controller");

const rateLimiter = require("../middlewares/rateLimiter.middleware");

const router = express.Router();

router.post("/add", rateLimiter, addVehicle);
router.patch("/assign-driver/:id", assignDriver);
router.get("/:id", getVehicle);

module.exports = router;
