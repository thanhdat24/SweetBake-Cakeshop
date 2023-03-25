const express = require("express");
const cakeController = require("../controllers/cakeController");

const router = express.Router();

router
  .route("/")
  .post(cakeController.createCake)
  .get(cakeController.getAllCake);

router
  .route("/:cakeId")
  .delete(cakeController.deleteCake)
  .get(cakeController.getDetailCake)
  .put(cakeController.updateCake);

module.exports = router;
