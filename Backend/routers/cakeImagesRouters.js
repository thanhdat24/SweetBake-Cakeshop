const express = require("express");
const cakeImagesController = require("../controllers/cakeImagesController");

const router = express.Router();

router
  .route("/")
  .post(cakeImagesController.createCakeImages)
  .get(cakeImagesController.getAllCakeImages);

module.exports = router;
