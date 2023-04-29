const express = require("express");
const cakeController = require("../controllers/cakeController");
const uploadCloud = require("../middlewares/uploader");
const router = express.Router();

router
  .route("/")
  .post(uploadCloud.single("cakeImages"), cakeController.createCake)
  .get(cakeController.getAllCake);

router.route("/getCakeDetail").get(cakeController.getCakeDetail);

router
  .route("/:id")
  .delete(cakeController.deleteCake)
  .put(cakeController.updateCake);

router.route("/getCakeByCate").get(cakeController.getCakeByCategory);

module.exports = router;
