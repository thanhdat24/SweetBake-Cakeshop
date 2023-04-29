const express = require("express");
const authController = require("../controllers/authController");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.post("/", authController.protect, orderController.createOrder);

router.route("/").get(orderController.getAllOrder);

router.get("/getMeOrder", authController.protect, orderController.getMeOrder);

router
  .route("/:id")
  .get(orderController.getDetailOrder)
  .patch(orderController.updateOrder);

module.exports = router;
