const express = require("express");
const cakeController = require("../controllers/cakeController");

const router = express.Router();

router
  .route("/")
  .post(cakeController.createCake)
  .get(cakeController.getAllCake);

router.route("/getCakeDetail").get(cakeController.getCakeDetail);
// router
//   .route("/:cakeId")
//   .delete(cakeController.deleteCake)
//   .get(cakeController.getDetailCake)
//   .put(cakeController.updateCake);

router.route("/getCakeByCate").get(cakeController.getCakeByCategory);

module.exports = router;
